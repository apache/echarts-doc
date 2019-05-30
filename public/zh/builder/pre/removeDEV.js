#!/usr/bin/env node

const babel = require('@babel/core');
const path = require('path');
const fs = require('fs');
const {color, travelSrcDir} = require('../../../zrender/build/helper');
const removeDEVPlugin = require('../../../zrender/build/babel-plugin-transform-remove-dev');

const srcDir = path.resolve(__dirname, '../src');

function run() {

    travelSrcDir(srcDir, transform);

    console.log(color('fgGreen', 'bright')('All done.'));

    function transform({fileName, relativePath, absolutePath}) {
        console.log(
            color('fgGreen', 'dim')('[transform] '),
            color('fgGreen')(absolutePath),
            color('fgGreen', 'dim')('...')
        );

        let {code} = babel.transformFileSync(absolutePath, {
            plugins: [removeDEVPlugin]
        });
        removeDEVPlugin.recheckDEV(code);
        fs.writeFileSync(absolutePath, code, {encoding:'utf-8'});
    }
}

run();
