var md2json = require('./md2json');
var fs = require('fs');

var languages = ['cn'];
var config = require('./config');
languages.forEach(function (language) {
    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
    }
    if (!fs.existsSync('dist/' + language)) {
        fs.mkdirSync('dist/' + language);
    }
    md2json(
        language + '/option/**/*.md', ['visualMap', 'dataZoom', 'series'], 'option', config,
        function (optionSchema) {
            fs.writeFileSync(
                'dist/' + language + '/option.json',
                JSON.stringify(optionSchema, null, 2),
                'utf-8'
            );
        }
    );
    md2json(
        language + '/tutorial/**/*.md', null, 'tutorial', config,
        function (tutorialSchema) {
            fs.writeFileSync(
                'dist/' + language + '/tutorial.json',
                JSON.stringify(tutorialSchema, null, 2),
                'utf-8'
            );
        }
    );
    md2json(
        language + '/api/**/*.md', null, 'api', config,
        function (apiSchema) {
            fs.writeFileSync(
                'dist/' + language + '/api.json',
                JSON.stringify(apiSchema, null, 2),
                'utf-8'
            );
        }
    );

});