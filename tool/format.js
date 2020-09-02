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
        for (let fileName in json) {
            const fileTargets = json[fileName];
            const filePath = path.resolve(__dirname, `../${lang}/option/`, fileName.replace('.', '/')) + '.md';
            fs.writeFileSync(filePath, compositeTargets(fileTargets), 'utf-8');
        }
    }
})()