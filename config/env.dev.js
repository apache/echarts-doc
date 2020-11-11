const path = require('path');

module.exports = {
    galleryViewPath: 'http://localhost/incubator-echarts-website/next/examples/${lang}/view.html?c=',
    galleryEditorPath: 'http://localhost/incubator-echarts-website/next/examples/${lang}/editor.html?c=',
    websitePath: 'http://localhost/incubator-echarts-website',


    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/'
    },

    releaseDestDir: path.resolve(__dirname, '../public'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};