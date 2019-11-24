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
// const MarkDownTOCRenderer = require('./tool/MarkDownTOCRenderer');
const argv = require('yargs').argv;

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

    return require('./config/env.' + envType);
}

const config = initEnv();

const languages = ['zh', 'en'];

config.gl = config.gl || {};
for (let key in config) {
    if (key !== 'gl' && !config.gl.hasOwnProperty(key)) {
        config.gl[key] = config[key];
    }
}

function run() {
    languages.forEach(function (language) {
        if (!fs.existsSync('public/' + language + '/documents/' + language)) {
            fs.mkdirSync('public/' + language + '/documents/' + language);
        }
        md2json(
            {
                path: language + '/option/**/*.md',
                sectionsAnyOf: ['visualMap', 'dataZoom', 'series', 'graphic.elements'],
                entry: 'option',
                tplEnv: config,
                imageRoot: config.imagePath
            },
            function (schema) {
                // Always print single option.html file for some third part usage (e.g., dataV).
                writeSingleSchema(schema, language, 'option', false);
                writeSingleSchemaPartioned(schema, language, 'option', false);
            }
        );
        md2json(
            {
                path: language + '/tutorial/**/*.md',
                entry: 'tutorial',
                tplEnv: config,
                maxDepth: 1,
                imageRoot: config.imagePath
            },
            function (schema) {
                writeSingleSchema(schema, language, 'tutorial');
                writeSingleSchemaPartioned(schema, language, 'tutorial', false);
            }
        );
        md2json(
            {
                path: language + '/api/**/*.md',
                entry: 'api',
                tplEnv: config,
                imageRoot: config.imagePath
            },
            function (schema) {
                writeSingleSchema(schema, language, 'api');
                writeSingleSchemaPartioned(schema, language, 'api', false);
            }
        );

        md2json(
            {
                path: language + '/option-gl/**/*.md',
                sectionsAnyOf: ['series'],
                entry: 'option-gl',
                tplEnv: config.gl,
                imageRoot: config.gl.imagePath
            },
            function (schema) {
                writeSingleSchema(schema, language, 'option-gl');
                writeSingleSchemaPartioned(schema, language, 'option-gl', false);
            }
        );

        fse.outputFileSync(
            'public/' + language + '/documents/' + language + '/changelog.html',
            marked(fs.readFileSync(language + '/changelog.md', 'utf-8')),
            'utf-8'
        );


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
    });

    console.log('Please visit:');
    console.log('echarts-doc/public/zh/');
    console.log('echarts-doc/public/en/');
    console.log();

    fse.outputFileSync(
        'public/en/documents/en/coding-standard.html',
        marked(fs.readFileSync('en/coding-standard.md', 'utf-8')),
        'utf-8'
    );

    copydir.sync('./asset', './public/documents/asset');
}

function writeSingleSchema(schema, language, docName, format) {
    let path = `public/documents/${language}/${docName}.json`;
    console.log('output: ' + path);
    fse.outputFileSync(
        path,
        format ? JSON.stringify(schema, null, 2) : JSON.stringify(schema),
        'utf-8'
    );
}

function writeSingleSchemaPartioned(schema, language, docName, format) {
    const {outline, descriptions} = extractDesc(schema, docName);

    fse.outputFile(
        `public/documents/${language}/${docName}-parts/${docName}-outline.json`,
        format ? JSON.stringify(outline, null, 2) : JSON.stringify(outline),
        'utf-8'
    );

    for (let partKey in descriptions) {
        let partDescriptions = descriptions[partKey];
        fse.outputFile(
            `public/documents/${language}/${docName}-parts/${partKey}.json`,
            // format ? JSON.stringify(partDescriptions, null, 2) : JSON.stringify(partDescriptions),
            JSON.stringify(partDescriptions, null, 2),
            'utf-8'
        );
    }
};

run();
