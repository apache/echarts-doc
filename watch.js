/**
 * @usage
 * node watch.js
 */

var path = require('path');
var fs = require('fs');

var docSrcDir = path.join(__dirname, '/src');
var cssPath = path.join(__dirname, '/test/asset/ecOption/main.less');

fs.watch(docSrcDir, function (event) {
    if (event === 'change') {
        console.log(docSrcDir + ' changed, auto compile ...');
        setTimeout(function () {
            execBuild(); // Writing may be not finished yet.
        }, 1000);
    }
});

fs.watch(cssPath, function (event) {
    if (event === 'change') {
        console.log(cssPath + ' changed, auto compile ...');
        setTimeout(function () {
            execBuild(); // Writing may be not finished yet.
        }, 1000);
    }
});

function execBuild() {
    require('child_process').exec(
        'sh build.sh',
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        }
    );
}