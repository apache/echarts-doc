'use strict';

const fs = require('fs');
const path = require('path');

let $ = null;
require('jsdom').env('', (err, window) => {
    if (err) {
        console.error(err);
        return;
    }

    $ = require('jquery')(window);

    var lang = ['cn', 'en'];
    for (var l = 0; l < lang.length; ++l) {
        var inBase = process.cwd() + '/' + lang[l] + '/';
        var outBase = process.cwd() + '/dash/' + lang[l] + '/';
        if (!fs.existsSync(outBase)) {
            fs.mkdirSync(outBase);
        }

        // copy asset files
        copyFolderRecursiveSync(process.cwd() + '/dash/asset', outBase);
        copyFolderRecursiveSync(process.cwd() + '/dash/documents', outBase);

        var files = ['option', 'tutorial', 'api'];
        var classNames = ['opt', 'guide', null];

        for (var i = 0; i < files.length; ++i) {
            jsonToHtml(inBase + files[i] + '.json',
                outBase + files[i] + '.html', classNames[i]);
        }
    }
});



function jsonToHtml(infile, outfile, className) {
    const file = fs.readFileSync(infile);
    const option = JSON.parse(file).option;

    const html = $('<html></html>')
        .append($('<head></head>')
            .append('<meta charset="utf-8">')
            .append('<link href="asset/css/main.css" rel="stylesheet">')
            .append('<link rel="stylesheet" href="asset/vendor/prettify/prettify.css">')
            .append('<script type="text/javascript" src="asset/vendor/prettify/prettify.js">')
            .append('<script type="text/javascript" src="asset/vendor/prettify/lang-css.js">')
            .append('<script type="text/javascript" src="asset/vendor/zepto.min.js">')
            .append('<script type="text/javascript" src="asset/js/main.js">')
        );
    const body = $('<body></body>');
    const container = $('<div class="container"></div>')
        .append('<h1>ECharts Document</h1>');
    html.append(body);
    body.append(container);

    let isRoot = true;
    let nodeStack = [['option', option]];
    while (nodeStack.length > 0) {
        const node = nodeStack.pop();

        var nodeClassName = className;
        // DFS
        if (node[1].type === 'Array') {
            // series
            const children = node[1].items.anyOf;
            for (let p = 0; p < children.length; ++p) {
                let name = children[p].properties.type['default'];
                // remove '' in name
                name = name.replace(new RegExp('\'', 'g'), '');
                nodeStack.push([node[0] + '.' + name, children[p],
                    nodeClassName]);
            }
        }
        else {
            const children = node[1].properties;
            for (let p in children) {
                if (children.hasOwnProperty(p)) {
                    const name = node[0] === 'option' ? p : node[0] + '.' + p;
                    const classMap = {
                        action: 'action',
                        events: 'event',
                        echarts: 'method',
                        echartsInstance: 'inst'
                    };
                    const dotId = name.indexOf('.');
                    let rootName = p;
                    if (dotId >= 0) {
                        rootName = name.slice(0, dotId);
                    }
                    nodeClassName = classMap[rootName] || className;
                    nodeStack.push([name, children[p], nodeClassName]);
                }
            }
        }

        if (!isRoot && node[1].descriptionCN) {
            var content = node[1].descriptionCN.replace(
                new RegExp('<h2', 'g'), '<h4');
            container.append(
                '<h3 class="' + node[2] + '">' + node[0] + '</h3>' + content
            );
        }

        isRoot = false;
    }

    fs.writeFileSync(outfile, '<html>' + html.html() + '</html>');
}

// from http://stackoverflow.com/questions/13786160/
// copy-folder-recursively-in-node-js
function copyFolderRecursiveSync(source, target) {
    var files = [];

    //check if folder needs to be created or integrated
    var targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }

    //copy
    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            var curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder);
            } else {
                copyFileSync(curSource, targetFolder);
            }
        });
    }
}

function copyFileSync(source, target) {
    var targetFile = target;

    //if target is a directory a new file with the same name will be created
    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}
