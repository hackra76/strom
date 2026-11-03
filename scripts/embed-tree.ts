import { readFileSync, writeFileSync } from 'fs';
import { parseGedcom, convertToStrom } from '../src/ged-parser.js';
import { jsonForScript } from '../src/export.js';

console.log('Reading tree-strom.ged...');
const gedContent = readFileSync('tree-strom.ged', 'utf-8');
const gedcom = parseGedcom(gedContent);
const { data, treeName } = convertToStrom(gedcom);

// Find focus person (P0001 / Radovan Dvorský if available)
const radovan = Object.values(data.persons || {}).find(p => p.refn === 'P0001');
if (radovan) {
    data.defaultPersonId = radovan.id;
    console.log(`Set default focus person to: ${radovan.firstName} ${radovan.lastName} (${radovan.id})`);
}

const envelope = {
    exportId: `exp_${Date.now()}_strom_pub`,
    exportedAt: new Date().toISOString(),
    appVersion: '3.21.1',
    treeName: treeName || 'Dvorský',
    data: data
};

const scriptTag = `<script>window.STROM_EMBEDDED_DATA = ${jsonForScript(envelope)};</script>`;

console.log('Reading index.html...');
let html = readFileSync('index.html', 'utf-8');

// Strip previous STROM_EMBEDDED_DATA if exists
html = html.replace(/<script>\s*window\.STROM_EMBEDDED_DATA\s*=[\s\S]*?<\/script>\s*/g, '');

// Strip the previous broken auto-import DOMContentLoaded script if present
html = html.replace(/<script>\s*window\.addEventListener\('DOMContentLoaded',\s*async\s*\(\)\s*=>\s*\{[\s\S]*?<\/script>\s*/g, '');

// Insert new STROM_EMBEDDED_DATA before </head>
html = html.replace('</head>', () => `${scriptTag}\n</head>`);

writeFileSync('index.html', html, 'utf-8');
console.log('Successfully updated index.html with embedded family tree!');
console.log('Total file size:', Math.round(html.length / 1024), 'KB');
console.log('Total persons:', Object.keys(data.persons || {}).length);
console.log('Total partnerships:', Object.keys(data.partnerships || {}).length);
