const path = require('path');

module.exports = {
    galleryViewPath: 'https://www.echartsjs.com/examples/zh/view.html?c=',
    galleryEditorPath: 'https://www.echartsjs.com/examples/zh/editor.html?c=',
    websitePath: './',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/'
    },

    releaseDestDir: path.resolve(__dirname, '../../../echarts-website/v4'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};