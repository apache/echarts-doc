const path = require('path');

module.exports = {
    galleryViewPath: 'http://localhost/incubator-echarts-website/next/examples/view.html?c=',
    galleryEditorPath: 'http://localhost/incubator-echarts-website/next/examples/editor.html?c=',
    websitePath: './',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/'
    },

    releaseDestDir: path.resolve(__dirname, '../../incubator-echarts-website/next'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated/next')
};