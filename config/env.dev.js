const path = require('path');

module.exports = {
    galleryViewPath: 'http://localhost/echarts-website/examples/en/view.html?c=',
    galleryEditorPath: 'http://localhost/echarts-website/examples/en/editor.html?c=',
    websitePath: './',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/'
    },

    releaseDestDir: path.resolve(__dirname, '../public'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};