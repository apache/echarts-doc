/**
 * Patch zh option doc to en option doc.
 */
/* global Map */
const fs = require('fs');
const path = require('path');
const {compositeTargets} = require('../editor/common/blockHelper');
const {parseBlocks} = require('../editor/common/parseBlocks');
const _ = require('lodash');
const {argv} = require('yargs');

const fromLang = argv.from || 'zh';
const toLang = argv.to || 'en';

console.log(`Patching from ${fromLang.toUpperCase()} to ${toLang.toUpperCase()}`);

function patchArray(fromArr, toArr, getKey, patchers) {
    const toArrMap = new Map();
    const result = [];
    for (let i = 0; i < toArr.length; i++) {
        const key = getKey(toArr[i]);
        if (toArrMap.get(key)) {
            throw new Error(`Duplicate key ${key}`);
        }
        toArrMap.set(key, toArr[i]);
    }

    for (let i = 0; i < fromArr.length; i++) {
        const key = getKey(fromArr[i]);
        if (toArrMap.get(key)) {
            result.push(
                patchers.update(fromArr[i], toArrMap.get(key))
            );
        }
        else {
            result.push(
                patchers.add(fromArr[i])
            );
        }
    }
    return result;
}

function isSimpleChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 128) {
            return false;
        }
    }
    return true;
}

function applyArgsPatch(fromArgs, toArgs) {
    return patchArray(fromArgs, toArgs, (a) => a[0], {
        add(fromArg) {
            return fromArg.slice();
        },
        update(fromArg, toArg) {
            if (fromArg[1] === toArg[1]) {
                return fromArg.slice();
            }
            if (typeof fromArg[1] !== 'string') {
                return fromArg.slice();
            }
            // A simple strategy to determine if the string is a term can be different in each language.
            // Or if it's a code.
            if (!isSimpleChar(fromArg[1]) || !isSimpleChar(toArg[1] + '')) {
                // Keep the same if it's a translated term. For example componentName arg should always keep not changed.
                return toArg.slice();
            }
            else {
                return fromArg.slice();
            }
        }
    });
}

function applyBlocksPatch(fromBlocks, toBlocks) {
    return patchArray(fromBlocks, toBlocks, (a) => a.key, {
        add(fromBlock) {
            return _.clone(fromBlock);
        },
        update(fromBlock, toBlock) {
            if (fromBlock.type === 'uicontrol') {
                // Move uicontrol directly.
                return _.clone(fromBlock);
            }

            const newBlock = _.clone(toBlock);
            newBlock.inline = fromBlock.inline;
            if (newBlock.type === 'use') {
                newBlock.args = applyArgsPatch(fromBlock.args || [], toBlock.args || []);
            }
            return newBlock;
        }
    });
}

function applyTargetsPatch(fromJson, toJson) {
    for (let fileName in fromJson) {
        const fromTargets = fromJson[fileName];
        const toTargets = toJson[fileName];
        if (!toTargets) {
            toJson[fileName] = _.clone(fromTargets);
            continue;
        }

        toJson[fileName] = patchArray(fromTargets, toTargets, (a) => a.name, {
            add(fromTarget) {
                return _.clone(fromTarget);
            },
            update(fromTarget, toTarget) {
                return {
                    name: fromTarget.name,
                    blocks: applyBlocksPatch(fromTarget.blocks, toTarget.blocks)
                };
            }
        });
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

        fs.writeFileSync(__dirname + `/blocks-${lang}.json`, JSON.stringify(json, null, 2), 'utf-8');

    }

    await applyTargetsPatch(blocksByLang[fromLang], blocksByLang[toLang]);

    for (let fileName in blocksByLang[toLang]) {
        const fileTargets = blocksByLang[toLang][fileName];
        const filePath = path.resolve(__dirname, `../${toLang}/option/`, fileName.replace('.', '/')) + '.md';
        fs.writeFileSync(filePath, compositeTargets(fileTargets), 'utf-8');
    }
})();
