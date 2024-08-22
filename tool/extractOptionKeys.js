const fs = require('node:fs');
const path = require('node:path');
const { extractOptionKeys } = require('./schemaHelper');

const schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../public/zh/documents/option.json'), 'utf-8'));

const header = `// THIS FILE IS GENERATED, DON'T MODIFY\n/* eslint-disable */`;

fs.writeFileSync(`./option-keywords.js`, `${header}\nexport const keywords = ${JSON.stringify(extractOptionKeys(schema))};`);