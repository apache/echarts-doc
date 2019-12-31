/**
 * ------------------------------------------------------------------------
 * Usage:
 *
 * ```shell
 * node build.js --env dev
 * node build.js --env asf
 * node build.js --env echartsjs
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

const projectDir = __dirname;

function initEnv() {
    let envType = argv.env;
    let isDev = argv.dev != null || argv.debug != null || envType === 'debug';

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
    return await new Promise((resolve, reject) => {
        md2json(opt, schema => {
            resolve(schema);
        });
    });
}

async function run() {

    for (let language of languages) {
        let schema;

        schema = await md2jsonAsync({
            path: language + '/option/**/*.md',
            sectionsAnyOf: ['visualMap', 'dataZoom', 'series', 'graphic.elements'],
            entry: 'option',
            tplEnv: config,
            imageRoot: config.imagePath
        });
        // Always print single option.html file for some third part usage (e.g., dataV).
        writeSingleSchema(schema, language, 'option', false);
        writeSingleSchemaPartioned(schema, language, 'option', false);

        schema = await md2jsonAsync({
            path: language + '/tutorial/**/*.md',
            entry: 'tutorial',
            tplEnv: config,
            maxDepth: 1,
            imageRoot: config.imagePath
        });
        writeSingleSchema(schema, language, 'tutorial');
        writeSingleSchemaPartioned(schema, language, 'tutorial', false);

        schema = await md2jsonAsync({
            path: language + '/api/**/*.md',
            entry: 'api',
            tplEnv: config,
            imageRoot: config.imagePath
        });
        writeSingleSchema(schema, language, 'api');
        writeSingleSchemaPartioned(schema, language, 'api', false);

        schema = await md2jsonAsync({
            path: language + '/option-gl/**/*.md',
            sectionsAnyOf: ['series'],
            entry: 'option-gl',
            tplEnv: config.gl,
            imageRoot: config.gl.imagePath
        });
        writeSingleSchema(schema, language, 'option-gl');
        writeSingleSchemaPartioned(schema, language, 'option-gl', false);



        // let plainMarkDownTpl = fs.readFileSync('tool/plain-md.tpl', 'utf-8');
        // let codingStandardMD = fs.readFileSync('en' + '/coding-standard.md', 'utf-8');
        // let codingStandardContent = marked(codingStandardMD);
        // let codingStandardTOC = marked(codingStandardMD, {renderer: new MarkDownTOCRenderer()});
        // fse.outputFileSync(
        //     'public/' + language + '/documents/' + language + '/coding-standard.html',
        //     plainMarkDownTpl
        //         .replace('{{toc}}', codingStandardTOC)
        //         .replace('{{content}}', codingStandardContent),
        //     'utf-8'
        // );
    }

    console.log('Build doc done.');

    buildChangelog();

    buildCodeStandard();

    copyAsset();

    copySite();

    // copyBlog();

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

function copyAsset() {
    for (let lang of languages) {
        const assetSrcDir = path.resolve(projectDir, 'asset');
        const assetDestDir = path.resolve(config.releaseDestDir, `${lang}/documents/asset`);
        copydir.sync(assetSrcDir, assetDestDir);
    }
    console.log('Copy asset done.');
}

function copySite() {
    // `npm run build:site` have generated the boundle files to `public/`
    if (config.envType === 'dev') {
        return;
    }

    // Copy js and css of doc site.
    for (let lang of languages) {
        const jsSrcPath = path.resolve(projectDir, 'public/js/doc-bundle.js')
        const jsDestPath = path.resolve(config.releaseDestDir, `${lang}/js/doc-bundle.js`);
        fse.copySync(jsSrcPath, jsDestPath);
        console.log(chalk.green(`js copied to: ${jsDestPath}`));

        const cssSrcDir = path.resolve(projectDir, 'public/css');
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
    console.log(chalk.green('generated: ' + destPath));
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
    console.log(chalk.green('generated: ' + outlineDestPath));

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
        console.log(chalk.green('generated: ' + descDestPath));
    }
};

run();
