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
const extractDesc = require('./tool/extractDesc');
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
const debounce = require('lodash.debounce');

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
        tplEnv: config,
        imageRoot: config.imagePath
    }, opt);

    function run(cb) {
        md2json(newOpt, schema => {
            writeSingleSchema(schema, opt.language, opt.entry, false);
            writeSingleSchemaPartioned(schema, opt.language, opt.entry, false);
            console.log(chalk.green('generated: ' + opt.language + '/' + opt.entry));
            cb && cb();
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
            sectionsAnyOf: ['visualMap', 'dataZoom', 'series', 'graphic.elements'],
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
        // copyBlog();
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
    const codeStandardDestPath = path.resolve(config.ecWWWGeneratedDir, 'coding-standard-content.html');
    fse.ensureDirSync(path.dirname(codeStandardDestPath));
    fse.outputFileSync(
        codeStandardDestPath,
        marked(fs.readFileSync('en/coding-standard.md', 'utf-8')),
        'utf-8'
    );
    console.log(chalk.green('generated: ' + codeStandardDestPath));

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

function copyBlog() {
    const blogSrcDir = path.resolve(projectDir, 'blog');
    const blogDestDir = path.resolve(config.releaseDestDir, 'blog');
    fse.copySync(blogSrcDir, blogDestDir);
    console.log(chalk.green(`blog copied to: ${blogDestDir}`));
    console.log('Copy blog done.');
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

    const outlineDestPath = path.resolve(config.releaseDestDir, `${language}/documents/${docName}-parts/${docName}-outline.json`);
    fse.ensureDirSync(path.dirname(outlineDestPath));
    fse.outputFile(
        outlineDestPath,
        format ? JSON.stringify(outline, null, 2) : JSON.stringify(outline),
        'utf-8'
    );
    // console.log(chalk.green('generated: ' + outlineDestPath));

    for (let partKey in descriptions) {
        let partDescriptions = descriptions[partKey];
        let descDestPath = path.resolve(config.releaseDestDir, `${language}/documents/${docName}-parts/${partKey}.json`);
        fse.ensureDirSync(path.dirname(descDestPath));
        fse.outputFile(
            descDestPath,
            // format ? JSON.stringify(partDescriptions, null, 2) : JSON.stringify(partDescriptions),
            JSON.stringify(partDescriptions, null, 2),
            'utf-8'
        );
        // console.log(chalk.green('generated: ' + descDestPath));
    }
};

run();
