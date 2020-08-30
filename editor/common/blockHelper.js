function parseArgKv(str) {
    const idx = str.indexOf('=');
    return [
        str.substr(0, idx).trim(),
        str.substr(idx + 1).trim()
    ]
}

module.exports.parseArgs = function (argsStr) {
    if (!argsStr) {
        return [];
    }
    const argsArr = [];
    let itemStr = '';
    let inStr = false;
    for (let i = 0; i < argsStr.length; i++) {
        const ch = argsStr[i];
        if (ch === '"' || ch === '\'') {
            inStr = !inStr;
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
    if (itemStr) {
        argsArr.push(parseArgKv(itemStr));
    }
    return argsArr;
}

module.exports.countLevel = function (prefix) {
    let level = 0;
    for (let i = 0; i < prefix.length; i++) {
        if (prefix[i] === '#') {
            level++;
        }
    }
    return level;
}

module.exports.parseHeader = function (text) {
    let parts = /(\$\{prefix.*?\})?(.*)\(([\w|*]*)\)(\s*=\s*(.*))*/.exec(text);
    if (parts) {
        const propertyName = parts[2].trim();
        const propertyType = parts[3];
        const propertyDefault = parts[5];

        return {
            hasPrefix: !!parts[1],
            propertyName,
            propertyType,
            propertyDefault
        };
    }
    parts = /(\$\{prefix\})?(.*)(\s*=\s*(.*))*/.exec(text);
    if (parts) {
        const propertyName = parts[2].trim();
        const propertyDefault = parts[4];
        return {
            hasPrefix: !!parts[1],
            propertyName,
            propertyDefault
        }
    }

    // const prefix = parts[1];
};

module.exports.updateLevelAndKeyInBlocks = function (blocks, targetsMap) {
    let topLevel = 0;
    let topLevelHasPrefix = false;

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

            if (topLevel === 0) {
                topLevel = currentLevel;
                // TODO Not all have prefix?
                topLevelHasPrefix = block.hasPrefix;
            }

            if (topLevelHasPrefix !== block.hasPrefix) {
                throw new Error(`[${block.propertyName}] Must all includes prefix or not`);
            }
            break;
        // Content and use command following header has same level.
        case 'content':
            block.level = currentLevel;
            baseKey = 'content:' + stacks.join('.');
            contentKeyCountMap[baseKey] = contentKeyCountMap[baseKey] || 0;
            if (contentKeyCountMap[baseKey]) {
                baseKey += '-' + contentKeyCountMap[baseKey];
            }
            contentKeyCountMap[baseKey]++;
            break;
        case 'use':
        case 'import':
            block.level = currentLevel;
            if (targetsMap) {
                const targetObj = targetsMap[block.target];
                if (targetObj) {
                    const prefixParam = block.args && block.args.find(item => item[0] === 'prefix');
                    const prefixVal = prefixParam && prefixParam[1].replace(/['"]/g, '');
                    if (!targetObj.topLevelHasPrefix || (prefixVal && prefixVal.match(/#+/))) {
                        // Target has no header if topLevel is 0.
                        targetObj.topLevel > 0 &&
                            (block.level = targetObj.topLevel + module.exports.countLevel(prefixVal || ''));
                    }
                }
                else {
                    console.warn(`Block ${block.target} not exists`);
                }
            }

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

    return {
        topLevel,
        topLevelHasPrefix
    };
};

module.exports.buildBlockHierarchy = function (blocks) {

};
