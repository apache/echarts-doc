const { parseSingleFileBlocks } = require('./parseBlocks');
const path = require('path');
const fs = require('fs');
const root = path.resolve(__dirname, '../../zh/option');

const store = {};
parseSingleFileBlocks(root + '/series/bar.md', root, store);

fs.writeFileSync(path.resolve(__dirname, './test.json'), JSON.stringify(store, null, 2), 'utf-8');