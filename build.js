var md2json = require('./tool/md2json');
var fs = require('fs');
var marked = require('marked');

var languages = ['cn', 'en'];

var configName = './config' + (process.argv[2] || '');

var config = require(configName);

config.gl = config.gl || {};
for (var key in config) {
    if (key !== 'gl' && !config.gl.hasOwnProperty(key)) {
        config.gl[key] = config[key];
    }
}

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
        function (optionSchema) {
            fs.writeFileSync(
                'public/' + language + '/documents/' + language + '/option.json',
                JSON.stringify(optionSchema, null, 2),
                'utf-8'
            );
        }
    );
    md2json({
            path: language + '/tutorial/**/*.md',
            entry: 'tutorial',
            tplEnv: config,
            maxDepth: 1,
            imageRoot: config.imagePath
        },
        function (tutorialSchema) {
            fs.writeFileSync(
                'public/' + language + '/documents/' + language + '/tutorial.json',
                JSON.stringify(tutorialSchema, null, 2),
                'utf-8'
            );
        }
    );
    md2json({
            path: language + '/api/**/*.md',
            entry: 'api',
            tplEnv: config,
            imageRoot: config.imagePath
        },
        function (apiSchema) {
            fs.writeFileSync(
                'public/' + language + '/documents/' + language + '/api.json',
                JSON.stringify(apiSchema, null, 2),
                'utf-8'
            );
        }
    );

    md2json({
            path: language + '/option-gl/**/*.md',
            entry: 'option-gl',
            tplEnv: config.gl,
            imageRoot: config.gl.imagePath
        },
        function (apiSchema) {
            fs.writeFileSync(
                'public/' + language + '/documents/' + language + '/option-gl.json',
                JSON.stringify(apiSchema, null, 2),
                'utf-8'
            );
        }
    );

    fs.writeFileSync(
        'public/' + language + '/documents/' + language + '/changelog.html',
        marked(fs.readFileSync(language + '/changelog.md', 'utf-8')),
        'utf-8'
    );
});