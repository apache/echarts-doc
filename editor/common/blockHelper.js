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
    let inVariable = false;
    let inObjectLevel = 0;
    let startQuot = '';
    let prevCh;
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
        else if (inStr) {
            itemStr += ch;
        }
        else if (ch === '{') {
            itemStr += ch;
            if (prevCh === '$') {
                inVariable = true;
            }
            else {
                // Value may be an object.
                inObjectLevel++;
            }
        }
        else if (ch === '}') {
            itemStr += ch;
            if (inVariable) {
                inVariable = false;
            }
            else {
                inObjectLevel--;
            }
        }
        else if (ch === ',' && inObjectLevel === 0) {
            argsArr.push(parseArgKv(itemStr));
            itemStr = '';
        }
        else {
            itemStr += ch;
        }
        prevCh = ch;
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
        case 'if':
        case 'elif':
        case 'else':
        case 'endif':
        case 'for':
        case 'endfor':
        case 'uicontrol':
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
                        // Indent== by default.
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

    let scopeKey = stacks.join('.');

    function keyNoDuplicate() {
        const keyCount = {};
        const keyMap = {};
        return function (baseKey) {
            let keyNoDuplicate = baseKey;
            keyCount[baseKey] = keyCount[baseKey] || 1;
            while (keyMap[keyNoDuplicate]) {
                keyNoDuplicate = baseKey + '-' + keyCount[baseKey]++;
            }
            keyMap[keyNoDuplicate] = true;
            return keyNoDuplicate;
        }
    }

    const contentKeyNoDuplicate = keyNoDuplicate();
    const uiControlKeyNoDuplicate = keyNoDuplicate();
    const allKeyNoDuplicate = keyNoDuplicate();

    for (const block of blocks) {
        let baseKey = '';
        switch (block.type) {
        case 'header':
            if (block.level <= currentLevel) {
                for (let i = block.level; i <= currentLevel; i++) {
                    stacks.pop();
                }
                stacks.push(block.propertyName);
            }
            else {
                stacks.push(block.propertyName);
            }

            scopeKey = stacks.join('.');
            baseKey = `header:${scopeKey}`;
            currentLevel = block.level;
            break;
            // Content and use command following header has same level.
        case 'content':
            baseKey = contentKeyNoDuplicate(`content:${scopeKey}`);
            break;
        case 'use':
        case 'import':
            baseKey = `use:${scopeKey}:${block.target}`;
            break;
        case 'if':
        case 'elif':
        case 'else':
        case 'endif':
        case 'for':
        case 'endfor':
            baseKey = `${block.type}:${scopeKey}`;
            if (block.expr) {
                baseKey = `${baseKey}:${block.expr}`
            }
            break;
        case 'uicontrol':
            baseKey = uiControlKeyNoDuplicate(`uicontrol:${scopeKey}`);
        }

        block.key = allKeyNoDuplicate(baseKey);
    }
};

module.exports.buildBlockHierarchy = function (blocks) {

};

function formatExpr(value) {
    return value.trim().replace(/\s+/g, ' ');
}
module.exports.formatExpr = formatExpr;

module.exports.etplCommandCompositors = {
    if(expr) {
        return `{{ if: ${formatExpr(expr)} }}`;
    },
    elif(expr) {
        return `{{ elif: ${formatExpr(expr)} }}`;
    },
    else() {
        return '{{ else }}';
    },
    endif() {
        return '{{ /if }}';
    },
    for(expr) {
        return `{{ for: ${formatExpr(expr)} }}`;
    },
    endfor() {
        return '{{ /for }}';
    },
    use(target, args) {
        args.forEach(item => {
            item[0].trim();
            item[1].trim();
        })
        let argsStr = args.filter(item => !!item[0])
            .map(item => item.join(' = ')).join(',\n    ');
        if (argsStr) {
            argsStr = `\n    ${argsStr}\n`;
        }
        return `{{ use: ${target.trim()}(${argsStr}) }}`;
    }
};

module.exports.blockCompositors = {
    header(block) {
        /* eslint-disable-next-line */
        // const prefix = '#'.repeat(block.level) + (block.prefixCode.trim() ? block.prefixCode.trim() : '');
        // let ret = `${prefix} ${block.propertyName.trim()}(${(block.propertyType || '*').trim()})`;
        // const propertyDefault = block.propertyDefault && block.propertyDefault.trim();
        // if (propertyDefault) {
        //     ret = ret + ' = ' + propertyDefault;
        // }
        // return ret;
        return '#'.repeat(block.level) + (block.prefixCode.trim() ? '' : ' ') + block.value;
    },
    use(block) {
        // Do some format and code indention
        return module.exports.etplCommandCompositors.use(block.target, block.args);
    },
    content(block) {
        // Not trim here.
        return `${block.value}`;
    },
    if(block) {
        return module.exports.etplCommandCompositors.if(block.expr);
    },
    elif(block) {
        return module.exports.etplCommandCompositors.elif(block.expr);
    },
    else(block) {
        return module.exports.etplCommandCompositors.else();
    },
    endif(block) {
        return module.exports.etplCommandCompositors.endif();
    },
    for(block) {
        return module.exports.etplCommandCompositors.for(block.expr);
    },
    endfor(block) {
        return module.exports.etplCommandCompositors.endfor();
    },
    uicontrol(block) {
        return block.html;
    }
};

module.exports.compositeBlocks = function (blocks) {
    let str = '';
    let prevBlock;
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        let blockStr = module.exports.blockCompositors[block.type](block);
        if (str && !block.inline) {
            let prefix = '\n\n';
            // A bit format here. No extra newline between if/for block.
            if ((prevBlock && (prevBlock.type === 'if' || prevBlock.type === 'elif' || prevBlock.type === 'else' || prevBlock.type === 'for')) ||
                block.type === 'endif' || block.type === 'endfor' || block.type === 'else') {
                prefix = '\n';
            }
            blockStr = prefix + blockStr;
        }
        str += blockStr;
        prevBlock = block;
    }
    return str;
};

module.exports.compositeTargets = function (targets) {
    return targets.map(target => `
{{ target: ${target.name.trim()} }}

${module.exports.compositeBlocks(target.blocks)}
`).join('\n\n') + '\n';
};
