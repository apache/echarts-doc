const fs = require('node:fs');
const path = require('node:path');
const { extractOptionKeys } = require('./schemaHelper');

const schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../public/zh/documents/option.json'), 'utf-8'));
console.log(JSON.stringify(extractOptionKeys(schema)));