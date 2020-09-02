/**
 * Patch zh option doc to en option doc.
 */

const fs = require('fs');
const path = require('path');
const {compositeTargets} = require('../editor/common/blockHelper');
const {parseBlocks} = require('../editor/common/parseBlocks');
const _ = require('lodash');
const arrayDiff = require('zrender/lib/core/arrayDiff2');


const fromLang = 'zh';
const toLang = 'en';

function applyBlocksPatch(fromBlocks, toBlocks) {
    const patchedBlocks = [];
    const diffResult = arrayDiff(toBlocks, fromBlocks, function (a, b) {
        return a.key === b.key;
    });

    for (let part of diffResult) {
        if (part.removed) {
            // Just ignore
        }
        else {
            for (let i = 0; i < part.indices.length; i++) {
                const fromBlock = fromBlocks[part.indices[i]];
                // Just ignore uicontrol block.
                if (fromBlock.type === 'uicontrol') {
                    continue;
                }
                const block = _.clone(
                    part.added ? fromBlock    // New added content in zh doc
                        : toBlocks.find(a => a.key === fromBlock.key) // Keep not change
                );
                block.inline = fromBlock.inline;
                patchedBlocks.push(block);
            }
        }
    }
    return patchedBlocks;
}

function applyTargetsPatch(fromJson, toJson) {

    for (let fileName in fromJson) {
        const fromTargets = fromJson[fileName];
        const toTargets = toJson[fileName];
        if (!toTargets) {
            toJson[fileName] = _.clone(fromTargets);
            continue;
        }

        const diffResult = arrayDiff(toTargets, fromTargets, function (a, b) {
            return a.name === b.name;
        });

        const patchedTargets = [];
        for (let part of diffResult) {
            // New added content in zh doc
            if (part.added) {
                for (let i = 0; i < part.indices.length; i++) {
                    patchedTargets.push(_.clone(fromTargets[part.indices[i]]));
                }
            }
            else if (part.removed) {
                // Just ignore
            }
            else {
                for (let i = 0; i < part.indices.length; i++) {
                    const fromTarget = fromTargets[part.indices[i]];
                    const toTarget = toTargets.find(a => a.name === fromTarget.name);
                    patchedTargets.push({
                        name: fromTarget.name,
                        blocks: applyBlocksPatch(fromTarget.blocks, toTarget.blocks)
                    });
                }
            }
        }

        toJson[fileName] = patchedTargets;
    }
}

(async function () {
    const blocksByLang = {};

    for (let lang of [fromLang, toLang]) {
        const json = await parseBlocks(
            path.resolve(__dirname, `../${lang}/option`),
            true
        );
        blocksByLang[lang] = json;
    }

    await applyTargetsPatch(blocksByLang[fromLang], blocksByLang[toLang]);

    for (let fileName in blocksByLang[toLang]) {
        const fileTargets = blocksByLang[toLang][fileName];
        const filePath = path.resolve(__dirname, `../${toLang}/option/`, fileName.replace('.', '/')) + '.md';
        fs.writeFileSync(filePath, compositeTargets(fileTargets), 'utf-8');
    }
})();
