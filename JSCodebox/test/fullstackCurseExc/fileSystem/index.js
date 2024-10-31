const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir = path.resolve(__dirname)) {
    const files = await fs.readdir(rootDir);
    walk(rootDir, files);
}

async function walk(rootDir, files) {
    let fileFullPath;
    let stats;
    for (let file of files) {
        fileFullPath = path.resolve(rootDir, file);
        stats = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/\.node_modules/g.test(fileFullPath)) continue;
        if (/\.json/g.test(fileFullPath)) continue;

        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if (!/\.js/g.test(fileFullPath)) continue;

        console.log(file);
    }
}

readdir('../');