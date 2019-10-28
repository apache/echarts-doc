/**
 * ------------------------------------------------------------------------
 * Usage:
 *
 * ```shell
 * node watch.js --env dev
 * node watch.js --env asf
 * node watch.js --env echartsjs
 * # Check `./config` to see the available env
 * ```
 * ------------------------------------------------------------------------
 */

var path = require('path');
var fs = require('fs');
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

    return envType;
}

var envType = initEnv();

var docSrcDirZH = path.join(__dirname, '/zh');
var docSrcDirEN = path.join(__dirname, '/zh');

var watchDirs = [];
getAllDirs(docSrcDirZH, watchDirs);
getAllDirs(docSrcDirEN, watchDirs);

var timer;

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

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(function () {
            execBuild(); // Writing may be not finished yet, and throttle.
        }, 1000);
    }
}

function execBuild() {
    require('child_process').exec(
        'node build.js --env ' + envType,
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
            console.log(stdout);
        }
    );
}
