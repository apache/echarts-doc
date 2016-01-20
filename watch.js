/**
 * @usage
 * node watch.js
 */

var path = require('path');
var fs = require('fs');

var docSrcDir = path.join(__dirname, '/cn');
var cssPath = path.join(__dirname, '/test/asset/ecOption/main.less');

var watchDirs = [];
getAllDirs(docSrcDir, watchDirs);
watchDirs.push(cssPath);

watchDirs.forEach(function (p) {
    fs.watch(p, onChange);
});

function getAllDirs(rootDir, result) {
    if (fs.statSync(rootDir).isDirectory()) {
        result.push(rootDir);

        fs.readdirSync(rootDir).forEach(function(file, index) {
            getAllDirs(path.join(rootDir, file), result);
        });
    }
}

function onChange(event) {
    if (event === 'change') {
        console.log('File changed, auto compile ...');
        setTimeout(function () {
            execBuild(); // Writing may be not finished yet.
        }, 1000);
    }
}

function execBuild() {
    require('child_process').exec(
        'node build.js ' + (process.argv[2] || ''),
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        }
    );
}