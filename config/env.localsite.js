const path = require('path');

module.exports = {
    galleryViewPath: 'http://localhost/echarts-website/examples/${lang}/view.html?c=',
    galleryEditorPath: 'http://localhost/echarts-website/examples/${lang}/editor.html?c=',
    websitePath: './',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/'
    },

    releaseDestDir: path.resolve(__dirname, '../../echarts-website'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};