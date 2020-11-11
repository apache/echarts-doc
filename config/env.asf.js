const path = require('path');

module.exports = {
    galleryViewPath: 'https://echarts.apache.org/next/examples/${lang}/view.html?c=',
    galleryEditorPath: 'https://echarts.apache.org/next/examples/${lang}/editor.html?c=',
    websitePath: 'https://echarts.apache.org',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/',
    },

    releaseDestDir: path.resolve(__dirname, '../../incubator-echarts-website/next'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated/next')
};
