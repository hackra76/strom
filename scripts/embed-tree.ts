import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { deflateRawSync } from 'zlib';
import { buildSync } from 'esbuild';
import { parseGedcom, convertToStrom } from '../src/ged-parser.js';
import { jsonForScript } from '../src/export.js';

console.log('1. Building TypeScript bundle...');
const pkgVersion = JSON.parse(readFileSync('package.json', 'utf-8')).version;

// Changelog sections
const notesHelper = buildSync({
    entryPoints: ['src/release-notes.ts'],
    bundle: true,
    format: 'esm',
    platform: 'neutral',
    write: false,
});
const { changelogSection, changelogFileName, CHANGELOG_LANGUAGES } = await import(
    'data:text/javascript;base64,' + Buffer.from(notesHelper.outputFiles[0].text).toString('base64')
);
const sections: Record<string, string | null> = {};
for (const lang of CHANGELOG_LANGUAGES) {
    const file = changelogFileName(lang);
    sections[lang] = existsSync(file) ? changelogSection(readFileSync(file, 'utf-8'), pkgVersion) : null;
}
const releaseNotes = { version: pkgVersion, sections };

// "How Strom works" embedded help data
async function buildHelpData() {
    const pin = JSON.parse(readFileSync('package.json', 'utf-8')).stromDoc;
    const dir = 'vendor/strom-doc';
    const vendored = existsSync(`${dir}/PIN`) ? readFileSync(`${dir}/PIN`, 'utf-8').trim() : '';
    if (!pin || vendored !== pin) {
        throw new Error(`help: vendor/strom-doc is at "${vendored}", package.json "stromDoc" is "${pin}" (npm run help:pin)`);
    }
    const files: Record<string, string> = {};
    const walk = (path: string, rel: string) => {
        for (const name of readdirSync(path).sort()) {
            const full = `${path}/${name}`;
            const key = rel ? `${rel}/${name}` : name;
            if (statSync(full).isDirectory()) walk(full, key);
            else if (name.endsWith('.md')) files[key] = readFileSync(full, 'utf-8');
        }
    };
    walk(dir, '');
    const helper = buildSync({
        entryPoints: ['src/help/help-convert.ts'],
        bundle: true,
        format: 'esm',
        platform: 'neutral',
        write: false,
    });
    const { convertHelp, embedHelp } = await import(
        'data:text/javascript;base64,' + Buffer.from(helper.outputFiles[0].text).toString('base64')
    );
    return embedHelp(convertHelp(files, pin), (data: Buffer) => deflateRawSync(data, { level: 9 }));
}
const helpData = await buildHelpData();

buildSync({
    entryPoints: ['src/main.ts'],
    bundle: true,
    minify: true,
    outfile: 'dist/bundle.js',
    define: {
        __APP_VERSION__: JSON.stringify(pkgVersion),
        __RELEASE_NOTES__: JSON.stringify(releaseNotes),
        __HELP_DATA__: JSON.stringify(helpData),
    },
    logLevel: 'warning',
});

console.log('2. Preparing single-file HTML...');
const template = readFileSync('src/template.html', 'utf-8');
const js = readFileSync('dist/bundle.js', 'utf-8');

console.log('3. Parsing tree-strom.ged...');
const gedContent = readFileSync('tree-strom.ged', 'utf-8');
const gedcom = parseGedcom(gedContent);
const { data, treeName } = convertToStrom(gedcom);

const finalTreeName = treeName || 'Dvorský';

// Identify default focus person: P0001 or Radovan Dvorský
const radovan = Object.values(data.persons || {}).find(p => p.refn === 'P0001')
    || Object.values(data.persons || {}).find(p => p.firstName === 'Radovan' && p.lastName === 'Dvorský');

if (radovan) {
    data.defaultPersonId = radovan.id;
    console.log(`Focus person set to: ${radovan.firstName} ${radovan.lastName} (${radovan.id})`);
}

const envelope = {
    exportId: `exp_${Date.now()}_strom_pub`,
    exportedAt: new Date().toISOString(),
    appVersion: pkgVersion,
    treeName: finalTreeName,
    data: data
};

// Custom head additions for family browsing & privacy
const headAdditions = `
    <meta name="robots" content="noindex, nofollow">
    <meta name="description" content="Rodokmeň rodiny ${finalTreeName}">
    <meta name="apple-mobile-web-app-title" content="Rodokmeň ${finalTreeName}">
    <style>
        /* Suppress confusing promotional / import-to-storage banner for family visitors */
        #view-mode-banner, #embedded-mode-banner {
            display: none !important;
        }
        #back-to-chronicle.btn-back-chronicle {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 0 12px;
            height: 32px;
            background: rgba(45, 90, 39, 0.12);
            color: var(--primary, #2d5a27);
            border: 1px solid rgba(45, 90, 39, 0.28);
            border-radius: 6px;
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            white-space: nowrap;
            transition: all 0.15s ease;
            flex-shrink: 0;
            margin-right: 6px;
        }
        #back-to-chronicle.btn-back-chronicle:hover {
            background: var(--primary, #2d5a27);
            color: #ffffff;
            border-color: var(--primary, #2d5a27);
            text-decoration: none;
            transform: translateY(-1px);
        }
        @media (max-width: 640px) {
            #back-to-chronicle.btn-back-chronicle span.btn-back-text {
                display: none;
            }
            #back-to-chronicle.btn-back-chronicle {
                padding: 0 8px;
            }
        }
    </style>
    <script>
        try {
            const savedGen = parseInt(localStorage.getItem('strom:fan:generations') || '0', 10);
            if (!savedGen || savedGen < 9) {
                localStorage.setItem('strom:fan:generations', '9');
            }
        } catch (e) {}
    </script>
    <script>window.STROM_EMBEDDED_DATA = ${jsonForScript(envelope)};</script>
`;

const backButtonHtml = `<a id="back-to-chronicle" class="btn-back-chronicle" href="/" title="Návrat do rodinnej kroniky"><span aria-hidden="true">←</span> <span class="btn-back-text">Späť na kroniku</span></a>`;

let html = template
    .replace('<title>Strom</title>', `<title>Rodokmeň rodiny ${finalTreeName}</title>`)
    .replace(/(<span id="about-version">)[^<]*(<\/span>)/, `$1${pkgVersion}$2`)
    .replace('</head>', () => `${headAdditions}\n</head>`)
    .replace('        <div class="search-container">', `        ${backButtonHtml}\n        <div class="search-container">`)
    .replace('<script src="dist/bundle.js"></script>', () => `<script>${js}</script>`);

writeFileSync('index.html', html, 'utf-8');
console.log('4. Done! Output written to index.html (' + Math.round(html.length / 1024) + ' KB)');

// Also copy to Rodokmen_Dvorsky web/public/strom/index.html if folder exists
import { resolve } from 'path';
const webPublicStrom = resolve('..', 'Rodokmen_Dvorsky', 'web', 'public', 'strom');
if (existsSync(webPublicStrom)) {
    writeFileSync(resolve(webPublicStrom, 'index.html'), html, 'utf-8');
    console.log('✅ Also copied to Rodokmen_Dvorsky/web/public/strom/index.html');
}
console.log('Tree title:', `Rodokmeň rodiny ${finalTreeName}`);
console.log('Total persons:', Object.keys(data.persons || {}).length);
console.log('Total partnerships:', Object.keys(data.partnerships || {}).length);
