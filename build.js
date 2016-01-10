var md2json = require('./md2json');
var fs = require('fs');

var languages = ['cn'];

var configName = './config' + (process.argv[2] || '');

var config = require(configName);
languages.forEach(function (language) {
    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
    }
    if (!fs.existsSync('dist/' + language)) {
        fs.mkdirSync('dist/' + language);
    }
    md2json({
            path: language + '/option/**/*.md',
            sectionsAnyOf: ['visualMap', 'dataZoom', 'series'],
            entry: 'option',
            tplEnv: config
        },
        function (optionSchema) {
            fs.writeFileSync(
                'dist/' + language + '/option.json',
                JSON.stringify(optionSchema, null, 2),
                'utf-8'
            );
        }
    );
    md2json({
            path: language + '/tutorial/**/*.md',
            entry: 'tutorial',
            tplEnv: config,
            maxDepth: 1
        },
        function (tutorialSchema) {
            fs.writeFileSync(
                'dist/' + language + '/tutorial.json',
                JSON.stringify(tutorialSchema, null, 2),
                'utf-8'
            );
        }
    );
    md2json({
            path: language + '/api/**/*.md',
            entry: 'api',
            tplEnv: config
        },
        function (apiSchema) {
            fs.writeFileSync(
                'dist/' + language + '/api.json',
                JSON.stringify(apiSchema, null, 2),
                'utf-8'
            );
        }
    );
});