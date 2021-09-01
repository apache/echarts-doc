const path = require('path');

module.exports = {
    galleryViewPath: 'https://echarts.apache.org/examples/${lang}/view.html?c=',
    galleryEditorPath: 'https://echarts.apache.org/examples/${lang}/editor.html?c=',
    handbookPath: 'https://echarts.apache.org/handbook/${lang}/',
    websitePath: 'https://echarts.apache.org',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/',
    },

    releaseDestDir: path.resolve(__dirname, '../../echarts-website'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};
