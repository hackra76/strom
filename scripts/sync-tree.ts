import { copyFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';

console.log('🔄 Checking for updated GEDCOM in Strom Family Tree...');

// Candidate locations
const searchRoot = resolve('..', 'Strom Family Tree');
let candidateFile: string | null = null;

if (existsSync(searchRoot)) {
    const entries = readdirSync(searchRoot, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory()) {
            const potentialGed = join(searchRoot, entry.name, 'output', 'tree-strom.ged');
            if (existsSync(potentialGed)) {
                candidateFile = potentialGed;
                break;
            }
        }
    }
}

// Fallback to hardcoded path if needed
if (!candidateFile) {
    const directPath = 'C:\\Users\\radod\\.gemini\\antigravity\\scratch\\Strom Family Tree\\Dvorský\\output\\tree-strom.ged';
    if (existsSync(directPath)) {
        candidateFile = directPath;
    }
}

if (!candidateFile) {
    console.error('❌ Could not find tree-strom.ged in "Strom Family Tree". Please check the directory.');
    process.exit(1);
}

const targetGed = resolve('tree-strom.ged');
const sourceStat = statSync(candidateFile);
console.log(`Found source GEDCOM: ${candidateFile}`);
console.log(`Source last modified: ${sourceStat.mtime.toLocaleString()}`);

// Copy file
copyFileSync(candidateFile, targetGed);
console.log('✅ Copied latest tree-strom.ged into repository.');

// Rebuild index.html
console.log('\n📦 Rebuilding browsable index.html...');
execSync('npm run embed', { stdio: 'inherit' });

console.log('\n✨ Sync & build complete! Your tree is ready to view or push to GitHub Pages.');

