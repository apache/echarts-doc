const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        filename: 'doc-bundle.js',
        path: path.resolve(__dirname, '../public/js'),
        library: 'echartsDoc',
        libraryTarget: 'umd'
    },
    stats: 'minimal',
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sassjs-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    outputPath: '../css',
                    name: '[name].[ext]'
                }
            }]
        }]
    },
    externals: {
        vue: 'Vue',
        codemirror: 'CodeMirror',
        'js-beautify': 'beautifier'
    },
    plugins: [
        new webpack.IgnorePlugin(/^fs$/),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '../css/doc-bundle.css'
        })
    ]
};
