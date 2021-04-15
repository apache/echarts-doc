const fs = require('fs');
const { extractOptionKeys } = require('./schemaHelper');



const schema = JSON.parse(fs.readFileSync(__dirname + '/../public/zh/documents/option.json', 'utf-8'));
console.log(JSON.stringify(extractOptionKeys(schema)));