const etpl = require('../../dep/etpl');
const fs = require('fs');
const globby = require('globby');
const path = require('path');
const {updateBlocksLevels, parseHeader, parseArgs, updateBlocksKeys} = require('../common/blockHelper');

const IfCommand = etpl.commandTypes.if;
const UseCommand = etpl.commandTypes.use;
const ElseCommand = etpl.commandTypes.else;
const ElifCommand = etpl.commandTypes.elif;
const ForCommand = etpl.commandTypes.for;
const ImportCommand = etpl.commandTypes.import;
const TextNode = etpl.TextNode;
const MAX_DEPTH = 10;

function parseMarkDown(mdStr) {
    const headers = [];
    const blocks = [];
    mdStr.replace(
        new RegExp('(?:^|\n) *(#{1,' + MAX_DEPTH + '}) *([^#][^\n]+)', 'g'),
        function (header, headerPrefix, text) {
            headers.push({
                text: text,
                level: headerPrefix.length
            });
        }
    );

    if (headers.length) {
        mdStr.split(new RegExp('(?:^|\n) *(?:#{1,' + MAX_DEPTH + '}) *(?:[^#][^\n]+)', 'g'))
            .forEach((section, idx) => {
                if (idx > 0) {
                    const headerText = headers[idx - 1].text.trim();
                    const headerLevel = headers[idx - 1].level;

                    const {propertyName, propertyDefault, propertyType, prefixCode} = parseHeader(headerText);

                    blocks.push({
                        type: 'header',
                        level: headerLevel,
                        value: headerText,
                        propertyName,
                        propertyDefault,
                        propertyType,
                        prefixCode
                    });
                }
                const text = section.trim();
                text && blocks.push({
                    type: 'content',
                    value: text
                });
            });
    }
    else {
        const text = mdStr.trim();
        text && blocks.push({
            type: 'content',
            value: text
        });
    }
    return blocks;
}

function compositeIfCommand(command) {
    if (command instanceof ElseCommand && command.children[0] instanceof ElifCommand) {
    // There is always an ElseCommand inserted between IfCommand and ElifCommand
        if (command.children[0] instanceof ElifCommand) {
            return compositeIfCommand(command.children[0]);
        }
    }

    let text = '';
    if (command instanceof ElifCommand) {
        text += `{{ elif:${command.value} }}`;
    }
    else if (command instanceof ElseCommand) {
        text += '{{ else }}';
    }
    // ElifCommand and ElseCommand also is subclass of IfCommand
    else if (command instanceof IfCommand) {
        text += `{{ if: ${command.value.trim()} }}`;
    }

    for (const subCmd of command.children) {
        // ElifCommand and ElseCommand also is subclass of IfCommand
        if (subCmd instanceof IfCommand) {
            text += compositeIfCommand(subCmd);
        }
        else {
            text += compositeCommand(subCmd);
        }
    }

    if ((command instanceof IfCommand)
        && !((command instanceof ElifCommand) || (command instanceof ElseCommand))) {
        text += '{{ /if }}';
    }
    return text;
}

function compositeForCommand(command) {
    let text = `{{ for: ${command.value} }}`;
    for (const subCmd of command.children) {
        text += compositeCommand(subCmd);
    }
    text += `{{ /for }}`;
    return text;
}

function compositeCommand(command) {
    if (command instanceof UseCommand) {
        return `{{ use: ${command.value} }}`;
    }
    else if (command instanceof TextNode) {
        return command.value;
    }
    else if (command instanceof IfCommand) {
        return compositeIfCommand(command);
    }
    else if (command instanceof ForCommand) {
        return compositeForCommand(command);
    }
    else {
        throw new Error(`Unkown block ${command.toString()}`);
    }
}


function parseSingleFileBlocks(fileName, root, blocksStore) {
    const engine = new etpl.Engine({
        commandOpen: '{{',
        commandClose: '}}',
        missTarget: 'error'
    });

    const relPath = path.relative(root, fileName);
    const text = fs.readFileSync(fileName, 'utf-8');
    etpl.util.parseSource(text, engine);

    const targets = [];
    for (const targetName in engine.targets) {
        // Ignore anoymous target.
        if (targetName.startsWith('___')) {
            continue;
        }
        const targetObj = engine.targets[targetName];
        const outBlocks = [];
        let textBlockText = '';

        function closeTextBlock() {
            if (textBlockText) {
                const mdBlocks = parseMarkDown(textBlockText);
                for (let i = 0; i < mdBlocks.length; i++) {
                    outBlocks.push(mdBlocks[i]);
                }
                textBlockText = '';
            }
        }

        for (const command of targetObj.children) {
            if (command instanceof UseCommand) {
                closeTextBlock();
                outBlocks.push({
                    type: 'use',
                    target: command.name,
                    args: parseArgs(command.args)
                });
            }
            else if (command instanceof ImportCommand) {
                closeTextBlock();
                outBlocks.push({
                    type: 'use',
                    target: command.name,
                    args: []
                });
            }
            else if (command instanceof TextNode) {
                textBlockText += command.value;
            }
            // TODO support if and for block

            else if ((command instanceof IfCommand) || (command instanceof ForCommand)) {
                textBlockText += compositeCommand(command);
            }
            else {
                throw new Error(`Unkown block ${command.toString()}`);
            }
        }

        closeTextBlock();

        let contentBlockCount = 0;
        for (let i = 0; i < outBlocks.length; i++) {
            if (outBlocks[i].type === 'content') {
                outBlocks[i].key = ['content', contentBlockCount++].join(':');
            }
        }

        const {topLevel, topLevelHasPrefix} = updateBlocksLevels(outBlocks);
        updateBlocksKeys(outBlocks);

        targets.push({
            name: targetName,
            // Has no header if topLevel is 0.
            topLevel,
            topLevelHasPrefix,
            blocks: outBlocks
        });
    }

    blocksStore[relPath.replace(/\.md$/, '').replace(/\//, '.')] = targets;

    return targets;
}

module.exports.parseBlocks = async function parseBlocks(root) {
    const blocksStore = {};
    const targetsMap = {};

    const files = await globby([
        root + '/**/*.md',
        '!' + root + '/option.md'
    ]);

    // const files = await globby([root + '/partial/item-style.md']);

    for (const fileName of files) {
        const targets = parseSingleFileBlocks(fileName, root, blocksStore);

        for (let target of targets) {
            targetsMap[target.name] = target;
        }
    }

    for (let targetName in targetsMap) {
        const target = targetsMap[targetName];
        // Update level again based on other blocks info.
        updateBlocksLevels(target.blocks, targetsMap);
    }

    fs.writeFileSync(__dirname + '/blocks.json', JSON.stringify(blocksStore, null, 2), 'utf-8');

    return blocksStore;
};

module.exports.parseSingleFileBlocks = parseSingleFileBlocks;
