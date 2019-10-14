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

var md2json = require('./tool/md2json');
var fs = require('fs');
var marked = require('marked');
var copydir = require('copy-dir');
// var MarkDownTOCRenderer = require('./tool/MarkDownTOCRenderer');
var argv = require('yargs').argv;

function initEnv() {
    var envType = argv.env;
    var isDev = argv.dev != null || argv.debug != null || envType === 'debug';

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

var config = initEnv();

var languages = ['cn', 'en'];

config.gl = config.gl || {};
for (var key in config) {
    if (key !== 'gl' && !config.gl.hasOwnProperty(key)) {
        config.gl[key] = config[key];
    }
}

function run() {
    languages.forEach(function (language) {
        if (!fs.existsSync('public/' + language + '/documents/' + language)) {
            fs.mkdirSync('public/' + language + '/documents/' + language);
        }
        md2json({
                path: language + '/option/**/*.md',
                sectionsAnyOf: ['visualMap', 'dataZoom', 'series', 'graphic.elements'],
                entry: 'option',
                tplEnv: config,
                imageRoot: config.imagePath
            },
            function (schema) {
                // Always print single option.html file for some third part usage (e.g., dataV).
                writeSingleSchema(schema, language, 'option');
                // writePartitionedOptionSchema(schema, language, 'option');
            }
        );
        md2json({
                path: language + '/tutorial/**/*.md',
                entry: 'tutorial',
                tplEnv: config,
                maxDepth: 1,
                imageRoot: config.imagePath
            },
            function (schema) {
                writeSingleSchema(schema, language, 'tutorial');
            }
        );
        md2json({
                path: language + '/api/**/*.md',
                entry: 'api',
                tplEnv: config,
                imageRoot: config.imagePath
            },
            function (schema) {
                writeSingleSchema(schema, language, 'api');
            }
        );

        md2json({
                path: language + '/option-gl/**/*.md',
                sectionsAnyOf: ['series'],
                entry: 'option-gl',
                tplEnv: config.gl,
                imageRoot: config.gl.imagePath
            },
            function (schema) {
                writeSingleSchema(schema, language, 'option-gl');
                // writePartitionedOptionSchema(schema, language, 'option-gl');
            }
        );

        fs.writeFileSync(
            'public/' + language + '/documents/' + language + '/changelog.html',
            marked(fs.readFileSync(language + '/changelog.md', 'utf-8')),
            'utf-8'
        );

        console.log('Please visit:');
        console.log('echarts-doc/public/zh/');
        console.log('echarts-doc/public/en/');
        console.log();

        // var plainMarkDownTpl = fs.readFileSync('tool/plain-md.tpl', 'utf-8');
        // var codingStandardMD = fs.readFileSync('en' + '/coding-standard.md', 'utf-8');
        // var codingStandardContent = marked(codingStandardMD);
        // var codingStandardTOC = marked(codingStandardMD, {renderer: new MarkDownTOCRenderer()});
        // fs.writeFileSync(
        //     'public/' + language + '/documents/' + language + '/coding-standard.html',
        //     plainMarkDownTpl
        //         .replace('{{toc}}', codingStandardTOC)
        //         .replace('{{content}}', codingStandardContent),
        //     'utf-8'
        // );
    });

    fs.writeFileSync(
        'public/en/documents/en/coding-standard.html',
        marked(fs.readFileSync('en/coding-standard.md', 'utf-8')),
        'utf-8'
    );

    copydir.sync('./asset', './public/cn/documents/asset');
    copydir.sync('./asset', './public/en/documents/asset');
}

function writeSingleSchema(schema, language, docName, format) {
    if (language === 'cn') {
        language = 'zh';
    }
    var path = 'public/documents/' + language + '/' + docName + '.json';
    console.log('output: ' + path);
    fs.writeFileSync(
        path,
        format ? JSON.stringify(schema, null, 2) : JSON.stringify(schema),
        'utf-8'
    );
}

/**
 * Partition by outline and description.
 * The schema format, see `echarts-www/js/docTool/schemaHelper.js`
 *
 * Notice: the input schema will be modified.
 */
function writePartitionedOptionSchema(schema, language, prefix) {
    var descSchema = {
        option: {}
    };

    buildRecursively(descSchema.option, schema.option);

    function buildRecursively(descSchemaItem, schemaItem) {
        if (!isObject(schemaItem)) {
            return;
        }

        if (schemaItem.anyOf) {
            descSchemaItem.anyOf = [];
            schemaItem.anyOf.forEach(function (item, j) {
                buildRecursively(descSchemaItem.anyOf[j] = {}, item);
            });
        }
        else if (schemaItem.items) {
            buildRecursively(descSchemaItem.items = {}, schemaItem.items);
        }
        else if (schemaItem.properties) {
            descSchemaItem.properties = {};
            Object.keys(schemaItem.properties).forEach(function (propertyName) {
                buildRecursively(
                    descSchemaItem.properties[propertyName] = {},
                    schemaItem.properties[propertyName]
                );
            });
        }
        else {
            descSchemaItem.description = schemaItem.description;
            // Remove `description` to reduce file size.
            delete schemaItem.description;
        }
    }

    writeSingleSchema(schema, language, prefix + '_outline');
    writeSingleSchema(descSchema, language, prefix + '_description');
}

// /**
//  * Partition by subtree.
//  */
// function writePartitionedOptionSchema(optionSchema, language, prefix) {
//     var partailSchemaList = [];

//     Object.keys(optionSchema.option.properties).forEach(function (propName) {

//         var propDefine = optionSchema.option.properties[propName];
//         var propDefineType = normalizeToArray(propDefine.type);

//         if (propDefineType.indexOf('Object') >= 0 && propDefine.properties) {
//             partailSchemaList.push({
//                 partName: propName,
//                 properties: propDefine.properties
//             });
//             propDefine.properties = {};
//             propDefine.requestPart = propName;
//         }
//         else if (
//             propDefineType.indexOf('Array') >= 0
//             && propDefine.items
//             && propDefine.items.anyOf
//         ) {
//             propDefine.items.anyOf.forEach(function (componentDefine) {
//                 var type = normalizeToArray(componentDefine.type);
//                 var componentTypeDefine = componentDefine.properties.type;

//                 if (!componentTypeDefine || !componentTypeDefine.default) {
//                     return;
//                 }

//                 var componentType = componentTypeDefine.default.replace(/\'/g, '');

//                 assert(
//                     componentDefine
//                     && type.length === 1
//                     && type[0] === 'Object'
//                     && componentTypeDefine
//                     && componentType
//                 );

//                 var partName = propName + '-' + componentType;
//                 partailSchemaList.push({
//                     partName: partName,
//                     properties: componentDefine.properties
//                 });

//                 componentDefine.properties = {type: componentTypeDefine};
//                 componentDefine.requestPart = partName;
//             });
//         }

//     });

//     writeSingleSchema(optionSchema, language, prefix + '_outline');

//     partailSchemaList.forEach(function (schemaItem) {
//         writeSingleSchema(schemaItem, language, prefix + '_part_' + schemaItem.partName);
//     });
// }

function assert(cond, msg) {
    if (!cond) {
        throw new Error(msg || '');
    }
}

function normalizeToArray(val) {
    return (val instanceof Array) ? val : val ? [val] : [];
}

function isObject(value) {
    var type = typeof value;
    return type === 'function' || (!!value && type == 'object');
}

run();
