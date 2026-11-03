import { readFileSync, writeFileSync, existsSync } from 'fs';
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

buildSync({
    entryPoints: ['src/main.ts'],
    bundle: true,
    minify: true,
    outfile: 'dist/bundle.js',
    define: {
        __APP_VERSION__: JSON.stringify(pkgVersion),
        __RELEASE_NOTES__: JSON.stringify(releaseNotes),
    },
    logLevel: 'warning',
});

console.log('2. Preparing single-file HTML...');
const template = readFileSync('src/template.html', 'utf-8');
const js = readFileSync('dist/bundle.js', 'utf-8');
const escapedJs = js.replace(/\$/g, '$$$$');

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
    </style>
    <script>window.STROM_EMBEDDED_DATA = ${jsonForScript(envelope)};</script>
`;

let html = template
    .replace('<title>Strom</title>', `<title>Rodokmeň rodiny ${finalTreeName}</title>`)
    .replace('<script src="dist/bundle.js"></script>', `<script>${escapedJs}</script>`)
    .replace(/(<span id="about-version">)[^<]*(<\/span>)/, `$1${pkgVersion}$2`)
    .replace('</head>', () => `${headAdditions}\n</head>`);

writeFileSync('index.html', html, 'utf-8');
console.log('4. Done! Output written to index.html (' + Math.round(html.length / 1024) + ' KB)');
console.log('Tree title:', `Rodokmeň rodiny ${finalTreeName}`);
console.log('Total persons:', Object.keys(data.persons || {}).length);
console.log('Total partnerships:', Object.keys(data.partnerships || {}).length);
