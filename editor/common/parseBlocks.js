const etpl = require('../../dep/etpl');
const fs = require('fs');
const globby = require('globby');
const path = require('path');
const {updateBlocksLevels, parseHeader, parseArgs, updateBlocksKeys, etplCommandCompositors, formatExpr} = require('./blockHelper');

const IfCommand = etpl.commandTypes.if;
const UseCommand = etpl.commandTypes.use;
const ElseCommand = etpl.commandTypes.else;
const ElifCommand = etpl.commandTypes.elif;
const ForCommand = etpl.commandTypes.for;
const ImportCommand = etpl.commandTypes.import;
const TextNode = etpl.TextNode;
const MAX_DEPTH = 10;

function hasNewlineEnd(value) {
    const endSpaces = /\s+$/.exec(value);
    return endSpaces && endSpaces[0].indexOf('\n') >= 0;
}

function hasNewlineBefore(value) {
    const startSpaces = /^\s+/.exec(value);
    return startSpaces && startSpaces[0].indexOf('\n') >= 0;
}

function parseMarkDown(mdStr, parseExampleUI) {
    const blocks = [];

    function removeNewline(mdStr) {
        // Keep leading and trailing space and remove newline. Newline will be added when compositing.
        return mdStr.replace(/^\s+/, function (val) {
            const idx =  val.lastIndexOf('\n');
            return idx >= 0 ? val.substr(idx + 1) : val;
        }).replace(/\s+$/, function (val) {
            const idx =  val.indexOf('\n');
            return idx >= 0 ? val.substr(0, idx) : val;
        });
    }

    mdStr.split(new RegExp(
        parseExampleUI ? '(?:^|\n) *((?:#{1,' + MAX_DEPTH + '}) *(?:[^#][^\n]+)|<ExampleUIControl.* \/>)'
            : '(?:^|\n) *((?:#{1,' + MAX_DEPTH + '}) *(?:[^#][^\n]+))'
    ))
        .forEach((section, idx) => {
            const headerParts = new RegExp('(?:^|\n) *(#{1,' + MAX_DEPTH + '}) *([^#][^\n]+)', 'g').exec(section);
            if (headerParts) {
                const headerText = headerParts[2];
                const headerLevel = headerParts[1].length;

                blocks.push({
                    type: 'header',
                    level: headerLevel,
                    value: headerText,
                    inline: false
                });
            }
            else {
                const controlParts = /<ExampleUIControl.* \/>/.exec(section);
                if (parseExampleUI && controlParts) {
                    blocks.push({
                        type: 'uicontrol',
                        html: section
                    });
                }
                else {
                    const text = removeNewline(section);
                    text && blocks.push({
                        type: 'content',
                        value: text,
                        hasNewlineEnd: hasNewlineEnd(section),
                        inline: !hasNewlineBefore(section)
                    });
                }
            }
        });
    return blocks;
}

function compositeIfCommand(command) {
    if ((command instanceof ElseCommand) && (command.children[0] instanceof ElifCommand)) {
        // There is always an ElseCommand inserted between IfCommand and ElifCommand
        return compositeIfCommand(command.children[0]);
    }

    let texts = [];
    let isIf = false;
    if (command instanceof ElifCommand) {
        texts.push(etplCommandCompositors.elif(command.value));
    }
    else if (command instanceof ElseCommand) {
        texts.push(etplCommandCompositors.else());
    }
    // ElifCommand and ElseCommand also is subclass of IfCommand
    else if (command instanceof IfCommand) {
        isIf = true;
        texts.push(etplCommandCompositors.if(command.value));
    }

    for (const subCmd of command.children) {
        // ElifCommand and ElseCommand also is subclass of IfCommand
        if (subCmd instanceof IfCommand) {
            texts.push(compositeIfCommand(subCmd));
        }
        else {
            texts.push(compositeCommand(subCmd));
        }
    }

    if (isIf) {
        texts.push(etplCommandCompositors.endif());
    }
    return texts.join('');
}

function compositeForCommand(command) {
    let texts = [etplCommandCompositors.for(command.value)];
    for (const subCmd of command.children) {
        texts.push(compositeCommand(subCmd));
    }
    texts.push(etplCommandCompositors.endfor());
    return texts.join('');
}

function compositeCommand(command) {
    if (command instanceof UseCommand) {
        return etplCommandCompositors.use(command.name.trim(), parseArgs(command.args));
    }
    else if (command instanceof TextNode) {
        // Not trim here. keep newline.
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


function parseSingleFileBlocks(fileName, root, detailed, blocksStore) {
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
        let prevTextBlockText = '';

        function closeTextBlock() {
            prevTextBlockText = textBlockText;
            if (textBlockText) {
                const mdBlocks = parseMarkDown(textBlockText, detailed);
                for (let i = 0; i < mdBlocks.length; i++) {
                    outBlocks.push(mdBlocks[i]);
                }
                textBlockText = '';
            }
        }

        /**
         * If command is inline. For example
         * xxxxx {{ if }} xxxx {{ /if}}
         */
        function isInlineCommand() {
            if (textBlockText) {
                // Prev command has newline at the end.
                return !hasNewlineEnd(textBlockText);
            }
            else {
                const lastBlock = outBlocks[outBlocks.length - 1];
                if (!lastBlock) {
                    return false;
                }
                if (lastBlock.type === 'header' || lastBlock.type === 'use') {
                    return false;
                }
                else if (lastBlock.type === 'content') {
                    return !lastBlock.hasNewlineEnd;
                }
                else {
                    // has no space between the prev command.
                    // {{for:}}{{if:}}xxx{{/if}}{{/for}}
                    return true;
                }
            }
        }


        function addBlocks(parentCommand) {
            for (const command of parentCommand.children) {
                if ((command instanceof UseCommand) || (command instanceof ImportCommand)) {
                    closeTextBlock();
                    outBlocks.push({
                        type: 'use',
                        target: command.name.trim(),
                        args: command.args ? parseArgs(command.args) : [],
                        // use command can't be used inline
                        inline: false
                    });
                }
                else if (command instanceof TextNode) {
                    textBlockText += command.value;
                }
                else if (command instanceof IfCommand) {
                    if ((command instanceof ElseCommand) && (command.children[0] instanceof ElifCommand)) {
                        // There is always an ElseCommand inserted between IfCommand and ElifCommand
                        return addBlocks(command);
                    }

                    // // DONT parse inline if block in the content
                    if (isInlineCommand() || !detailed) {
                        textBlockText += compositeIfCommand(command);
                    }
                    else {
                        closeTextBlock();

                        const type = command instanceof ElseCommand
                            ? 'else' : command instanceof ElifCommand ? 'elif' : 'if';

                        outBlocks.push({
                            type,
                            inline: false,
                            expr: command.value && formatExpr(command.value)
                        });
                        addBlocks(command);
                        const isCloseNeedsToInline = isInlineCommand();
                        closeTextBlock();
                        if (type === 'if') {
                            outBlocks.push({
                                type: 'endif',
                                inline: isCloseNeedsToInline
                            });
                        }
                    }
                }
                else if (command instanceof ForCommand) {
                    if (isInlineCommand() || !detailed) {
                        textBlockText += compositeForCommand(command);
                    }
                    else {
                        closeTextBlock();

                        outBlocks.push({
                            type: 'for',
                            inline: false,
                            expr: formatExpr(command.value)
                        });
                        addBlocks(command);
                        const isCloseNeedsToInline = isInlineCommand();
                        closeTextBlock();
                        outBlocks.push({
                            type: 'endfor',
                            inline: isCloseNeedsToInline
                        });
                    }
                }
                else {
                    throw new Error(`Unkown block ${command.toString()}`);
                }
            }
        }

        addBlocks(targetObj);

        closeTextBlock();

        for (let block of outBlocks) {
            if (block.type === 'header') {
                const {propertyName, propertyDefault, propertyType, prefixCode} = parseHeader(block.value);
                Object.assign(block, {
                    propertyName,
                    propertyDefault,
                    propertyType,
                    prefixCode
                });
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

/**
 * @param {string} root Root folder path of option
 * @param {boolean} detailed If include all types of blocks.
 *      For example if, for command of etpl.
 *      By default this will be composed into content.
 *      But in diff mode we need everything to be block so it can be more accurate
 */
module.exports.parseBlocks = async function parseBlocks(root, detailed) {
    const blocksStore = {};
    const targetsMap = {};

    const files = await globby([
        root + '/**/*.md',
        '!' + root + '/option.md'
    ]);

    // const files = await globby([root + '/partial/item-style.md']);

    for (const fileName of files) {
        const targets = parseSingleFileBlocks(fileName, root, detailed, blocksStore);

        for (let target of targets) {
            targetsMap[target.name] = target;
        }
    }

    for (let targetName in targetsMap) {
        const target = targetsMap[targetName];
        // Update level again based on other blocks info.
        updateBlocksLevels(target.blocks, targetsMap);
    }

    return blocksStore;
};

module.exports.parseSingleFileBlocks = parseSingleFileBlocks;
