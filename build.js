/**
 * ------------------------------------------------------------------------
 * Usage:
 *
 * ```shell
 * node build.js --env asf # build all for asf
 * node build.js --env echartsjs # build all for echartsjs.
 * node build.js --env localsite # build all for localsite.
 * node build.js --env dev # the same as "debug", dev the content of docs.
 * # Check `./config` to see the available env
 * ```
 * ------------------------------------------------------------------------
 */

const md2json = require('./tool/md2json');
const {extractDesc} = require('./tool/schemaHelper');
const fs = require('fs');
const fse = require('fs-extra');
const marked = require('marked');
const copydir = require('copy-dir');
const chalk = require('chalk');
// const MarkDownTOCRenderer = require('./tool/MarkDownTOCRenderer');
const argv = require('yargs').argv;
const path = require('path');
const assert = require('assert');
const chokidar = require('chokidar');
const {debounce} = require('lodash');
const {getDocJSONPVarNname} = require('./src/shared');

const projectDir = __dirname;

function initEnv() {
    let envType = argv.env;
    let isDev = argv.dev != null || argv.debug != null || argv.env === 'dev';

    if (isDev) {
        console.warn('=============================');
        console.warn('!!! THIS IS IN DEV MODE !!!');
        console.warn('=============================');
        envType = 'dev';
    }

    if (!envType) {
        throw new Error('--env MUST be specified');
    }

    let config = require('./config/env.' + envType);

    assert(path.isAbsolute(config.releaseDestDir) && path.isAbsolute(config.ecWWWGeneratedDir));

    config.envType = envType;

    return config;
}

const config = initEnv();

const languages = ['zh', 'en'];

config.gl = config.gl || {};
for (let key in config) {
    if (key !== 'gl' && !config.gl.hasOwnProperty(key)) {
        config.gl[key] = config[key];
    }
}

async function md2jsonAsync(opt) {

    var newOpt = Object.assign({
        path: path.join(opt.language, opt.entry, '**/*.md'),
        tplEnv: Object.assign({}, config, {
            galleryViewPath: config.galleryViewPath.replace('${lang}', opt.language),
            galleryEditorPath: config.galleryEditorPath.replace('${lang}', opt.language),
            handbookPath: config.handbookPath.replace('${lang}', opt.language)
        }),
        imageRoot: config.imagePath
    }, opt);

    function run(cb) {
        md2json(newOpt).then(schema => {
            writeSingleSchema(schema, opt.language, opt.entry, false);
            writeSingleSchemaPartioned(schema, opt.language, opt.entry, false);
            console.log(chalk.green('generated: ' + opt.language + '/' + opt.entry));
            cb && cb();
        }).catch(e => {
            console.log(e);
        });
    }

    var runDebounced = debounce(run, 500, {
        leading: false,
        trailing: true
    });
    return await new Promise((resolve, reject) => {
        run(resolve);

        if (argv.watch) {
            chokidar.watch(path.resolve(__dirname, opt.language, opt.entry), {
                ignoreInitial: true
            }).on('all', (event, path) => {
                console.log(path, event);
                runDebounced();
            });
        }
    });
}

function copyAsset() {

    const assetSrcDir = path.resolve(projectDir, 'asset');

    function doCopy() {
        for (let lang of languages) {
            const assetDestDir = path.resolve(config.releaseDestDir, `${lang}/documents/asset`);
            copydir.sync(assetSrcDir, assetDestDir);
        }
    }
    var doCopyDebounced = debounce(doCopy, 500, {
        leading: false,
        trailing: true
    });

    doCopy();

    if (argv.watch) {
        chokidar.watch(assetSrcDir, {
            ignoreInitial: true
        }).on('all', (event, path) => {
            console.log(path, event);
            doCopyDebounced();
        });
    }
    console.log('Copy asset done.');
}

async function run() {

    for (let language of languages) {
        await md2jsonAsync({
            sectionsAnyOf: ['visualMap', 'dataZoom', 'series', 'graphic.elements', 'dataset.transform'],
            entry: 'option',
            language
        });

        await md2jsonAsync({
            entry: 'tutorial',
            maxDepth: 1,
            language
        });

        await md2jsonAsync({
            entry: 'api',
            language
        });

        await md2jsonAsync({
            sectionsAnyOf: ['series'],
            entry: 'option-gl',
            // Overwrite
            tplEnv: config.gl,
            imageRoot: config.gl.imagePath,
            language
        });
    }

    console.log('Build doc done.');

    copyAsset();

    if (!argv.watch) {  // Not in watch dev mode
        try {
            // TODO Do we need to debug changelog in the doc folder?
            buildChangelog();
            buildCodeStandard();

            copySite();
        }
        catch (e) {
            console.log('Error happens when copying to dest folders.');
            console.log(e);
        }
    }

    console.log('All done.');
}

function buildChangelog() {
    for (let lang of languages) {
        const srcPath = path.resolve(projectDir, `${lang}/changelog.md`);
        const destPath = path.resolve(config.ecWWWGeneratedDir, `${lang}/documents/changelog-content.html`);
        fse.outputFileSync(
            destPath,
            marked(fs.readFileSync(srcPath, 'utf-8')),
            'utf-8'
        );
        console.log(chalk.green('generated: ' + destPath));
    }
    console.log('Build changelog done.');
}

function buildCodeStandard() {
    // support for Chinese character
    const customRenderer = new marked.Renderer();
    customRenderer.heading = function(text, level, raw) {
        const id = raw.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-');
        return `<h${level} id="${id}">${text}</h${level}>\n`;
    };

    for (let lang of languages) {
        const codeStandardDestPath = path.resolve(config.ecWWWGeneratedDir, `${lang}/coding-standard-content.html`);
        fse.ensureDirSync(path.dirname(codeStandardDestPath));
        fse.outputFileSync(
            codeStandardDestPath,
            marked(fs.readFileSync(`${lang}/coding-standard.md`, 'utf-8'), { renderer: customRenderer }),
            'utf-8'
        );
        console.log(chalk.green('generated: ' + codeStandardDestPath));
    }

    console.log('Build code standard done.');
}

function copySite() {
    const jsSrcPath = path.resolve(projectDir, 'public/js/doc-bundle.js');
    const cssSrcDir = path.resolve(projectDir, 'public/css');

    // Copy js and css of doc site.
    for (let lang of languages) {
        const jsDestPath = path.resolve(config.releaseDestDir, `${lang}/js/doc-bundle.js`);
        fse.copySync(jsSrcPath, jsDestPath);
        console.log(chalk.green(`js copied to: ${jsDestPath}`));

        const cssDestDir = path.resolve(config.releaseDestDir, `${lang}/css`);
        fse.copySync(cssSrcDir, cssDestDir);
        console.log(chalk.green(`css copied to: ${cssDestDir}`));
    }

    console.log('Copy site done.');
}

function writeSingleSchema(schema, language, docName, format) {
    const destPath = path.resolve(config.releaseDestDir, `${language}/documents/${docName}.json`);
    fse.ensureDirSync(path.dirname(destPath));
    fse.outputFileSync(
        destPath,
        format ? JSON.stringify(schema, null, 2) : JSON.stringify(schema),
        'utf-8'
    );
    // console.log(chalk.green('generated: ' + destPath));
}

function writeSingleSchemaPartioned(schema, language, docName, format) {
    const {outline, descriptions} = extractDesc(schema, docName);

    function convertToJS(basename, filePath) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const varName = getDocJSONPVarNname(basename);
        const code = `window.${varName} = ${content}`;
        fs.writeFileSync(filePath.replace(/\.json$/, '.js'), code, 'utf-8');
    }

    const outlineBasename = `${docName}-outline.json`;
    const outlineDestPath = path.resolve(config.releaseDestDir, `${language}/documents/${docName}-parts/${outlineBasename}`);
    fse.ensureDirSync(path.dirname(outlineDestPath));
    fse.outputFileSync(
        outlineDestPath,
        format ? JSON.stringify(outline, null, 2) : JSON.stringify(outline),
        'utf-8'
    );
    convertToJS(outlineBasename, outlineDestPath);

    function copyUIControlConfigs(source, target) {
        for (let key in source) {
            if (target[key]) {
                if (source[key].uiControl && !target[key].uiControl) {
                    target[key].uiControl = source[key].uiControl;
                }
                if (source[key].exampleBaseOptions && !target[key].exampleBaseOptions) {
                    target[key].exampleBaseOptions = source[key].exampleBaseOptions;
                }
            }
            else {
                // console.error(`Unmatched option path ${key}`);
            }
        }
    }

    function readOptionDesc(language, partKey) {
        const descDestPath = path.resolve(config.releaseDestDir, `${language}/documents/${docName}-parts/${partKey}.json`);
        try {
            const text = fs.readFileSync(descDestPath, 'utf-8');
            return JSON.parse(text);
        }
        catch(e) {
            return;
        }
    }

    function writeOptionDesc(language, partKey, json) {
        const descBasename = `${partKey}.json`;
        const descDestPath = path.resolve(config.releaseDestDir, `${language}/documents/${docName}-parts/${descBasename}`);
        fse.ensureDirSync(path.dirname(descDestPath));
        fse.outputFileSync(
            descDestPath,
            format ? JSON.stringify(json, null, 2) : JSON.stringify(json),
            'utf-8'
        );
        convertToJS(descBasename, descDestPath);
    }

    for (let partKey in descriptions) {
        let partDescriptions = descriptions[partKey];

        // Copy ui control config from zh to english.
        if (language === 'zh') {
            languages.forEach(function (otherLang) {
                if (otherLang === 'zh') {
                    return;
                }
                const json = readOptionDesc(otherLang, partKey);
                if (json) {
                    copyUIControlConfigs(partDescriptions, json);
                    writeOptionDesc(otherLang, partKey, json);
                }
            });
        }
        else {
            const json = readOptionDesc('zh', partKey);
            if (json) {
                copyUIControlConfigs(json, partDescriptions);
            }
        }

        writeOptionDesc(language, partKey, partDescriptions);
        // console.log(chalk.green('generated: ' + descDestPath));
    }
};

run();
