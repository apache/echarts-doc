/**
 * Format zh/en option docs
 */

const fs = require('fs');
const path = require('path');
const {compositeTargets} = require('../editor/common/blockHelper');
const {parseBlocks} = require('../editor/common/parseBlocks');

(async function () {
    for (let lang of ['en', 'zh']) {
        const json = await parseBlocks(path.resolve(__dirname, `../${lang}/option`), true);
        fs.writeFileSync(__dirname + `/blocks-${lang}.json`, JSON.stringify(json, null, 2), 'utf-8');
        for (let fileName in json) {
            const fileTargets = json[fileName];
            const filePath = path.resolve(__dirname, `../${lang}/option/`, fileName.replace('.', '/')) + '.md';
            const fileContent = compositeTargets(fileTargets)
                // Convert CRLF to LF
                .replace(new RegExp(String.fromCharCode(0x000D) + String.fromCharCode(0x000A), 'g'), '\n');
            fs.writeFileSync(filePath, fileContent, 'utf-8');
        }
    }
})();