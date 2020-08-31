function parseArgKv(str) {
    let idx = str.indexOf('=');
    if (idx < 0) {
        idx = str.indexOf(':');
    }
    return [
        str.substr(0, idx).trim(),
        str.substr(idx + 1).trim()
    ];
}

module.exports.parseArgs = function (argsStr) {
    if (!argsStr) {
        return [];
    }
    const argsArr = [];
    let itemStr = '';
    let inStr = false;
    let startQuot = '';
    for (let i = 0; i < argsStr.length; i++) {
        const ch = argsStr[i];
        if (ch === '"' || ch === '\'') {
            if (inStr) {
                if (startQuot === ch) {
                    inStr = false;
                }
            }
            else {
                startQuot = ch;
                inStr = true;
            }
            itemStr += ch;
        }
        else if (ch === ',' && !inStr) {
            argsArr.push(parseArgKv(itemStr));
            itemStr = '';
        }
        else {
            itemStr += ch;
        }
    }
    if (itemStr.trim()) {
        argsArr.push(parseArgKv(itemStr));
    }
    // Ignore galleryViewPath and galleryEditorPath
    return argsArr.filter(item => item[0] !== 'galleryViewPath' && item[0] !== 'galleryEditorPath');
};

module.exports.countLevel = function (prefix) {
    let level = 0;
    for (let i = 0; i < prefix.length; i++) {
        if (prefix[i] === '#') {
            level++;
        }
    }
    return level;
};

module.exports.parseHeader = function (text) {
    const [mainPart, propertyDefault] = text.split(/\s*=\s*/);
    // #${prefix} show(boolean) = ${defaultShow|default(true)}
    let parts = /(\$\{prefix.*?\})?(.*)\(([\w|*]*)\)/.exec(mainPart);
    if (parts) {
        const propertyName = parts[2].trim();
        const propertyType = parts[3];

        return {
            prefixCode: (parts[1] || '').trim(),
            propertyName,
            propertyType,
            propertyDefault
        };
    }
    // #${prefix} show = ${defaultShow|default(true)}
    parts = /(\$\{prefix.*?\})?\s*(.*)/.exec(mainPart);
    if (parts) {
        const propertyName = parts[2].trim();
        return {
            prefixCode: (parts[1] || '').trim(),
            propertyName,
            propertyDefault
        };
    }
    // const prefix = parts[1];
};

module.exports.updateBlocksLevels = function (blocks, targetsMap) {
    let topLevel = 0;
    let topLevelHasPrefix = false;
    let currentLevel = 0;

    for (const block of blocks) {
        switch (block.type) {
        case 'header':
            currentLevel = block.level;

            if (topLevel === 0) {
                topLevel = currentLevel;
                // TODO Not all have prefix?
                topLevelHasPrefix = !!block.prefixCode;
            }

            if (topLevelHasPrefix !== !!block.prefixCode) {
                throw new Error(`[${block.propertyName}] Must all includes prefix or not`);
            }
            break;
        // Content and use command following header has same level.
        case 'content':
            // Indent description content by default
            block.level = currentLevel + 1;
            break;
        case 'use':
        case 'import':
            block.level = currentLevel;
            if (targetsMap) {
                const targetObj = targetsMap[block.target];
                if (targetObj) {
                    const prefixParam = block.args && block.args.find(item => item[0] === 'prefix');
                    const prefixVal = prefixParam && prefixParam[1].replace(/['"]/g, '');
                    if (targetObj.topLevel === 0) {
                        // Target has no header if topLevel is 0.
                        // Assume it's only description
                        // Indent by default.
                        block.level = currentLevel + 1;
                    }
                    else if (!targetObj.topLevelHasPrefix || (prefixVal && prefixVal.match(/#+/))) {
                        (block.level = targetObj.topLevel + module.exports.countLevel(prefixVal || ''));
                    }
                }
                else {
                    console.warn(`Block ${block.target} not exists`);
                }
            }
            break;
        }
    }

    return {
        topLevel,
        topLevelHasPrefix
    };
};

module.exports.updateBlocksKeys = function (blocks) {
    let currentLevel = 0;

    const stacks = ['top'];

    let duplicateKeyCount = 0;

    const keyMap = {};

    const contentKeyCountMap = {};

    for (const block of blocks) {
        let baseKey = '';
        switch (block.type) {
        case 'header':
            for (let i = block.level; i <= currentLevel; i++) {
                stacks.pop();
            }
            if (block.level >= currentLevel) {
                stacks.push(block.propertyName);
            }
            baseKey = 'header:' + stacks.join('.');
            currentLevel = block.level;
            break;
            // Content and use command following header has same level.
        case 'content':
            baseKey = 'content:' + stacks.join('.');
            contentKeyCountMap[baseKey] = contentKeyCountMap[baseKey] || 0;
            if (contentKeyCountMap[baseKey]) {
                baseKey += '-' + contentKeyCountMap[baseKey];
            }
            contentKeyCountMap[baseKey]++;
            break;
        case 'use':
        case 'import':
            baseKey = 'use:' + stacks.join('.') + ':' + block.target;
            break;
        }
        let keyNoDuplicate = baseKey;
        while (keyMap[keyNoDuplicate]) {
            keyNoDuplicate = baseKey + '-' + (duplicateKeyCount++);
        }
        keyMap[keyNoDuplicate] = true;

        block.key = keyNoDuplicate;
    }
};

module.exports.buildBlockHierarchy = function (blocks) {

};

module.exports.blockCompositors = {
    header(block) {
        /* eslint-disable-next-line */
        const prefix = '#'.repeat(block.level) + (block.prefixCode ? block.prefixCode : '');
        let ret = `${prefix} ${block.propertyName}(${block.propertyType || '*'})`;
        if (block.propertyDefault) {
            ret = ret + ' = ' + block.propertyDefault;
        }
        return ret + '\n';
    },
    use(block) {
        // Do some format and code indention
        let argsStr = block.args.map(item => item.join(' = ')).join(',\n    ');
        if (argsStr) {
            argsStr = `\n    ${argsStr}\n`;
        }
        return `{{ use: ${block.target}(${argsStr}) }}\n`;
    },
    content(block) {
        return `${block.value}\n`;
    }
};

module.exports.compositeBlocks = function (blocks) {
    return blocks.map(block => module.exports.blockCompositors[block.type](block))
        .join('\n');
};

module.exports.compositeTargets = function (targets) {
    return targets.map(target => `
{{ target: ${target.name} }}

${module.exports.compositeBlocks(target.blocks)}
`).join('\n\n');
};
