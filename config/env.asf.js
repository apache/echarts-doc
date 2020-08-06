const path = require('path');

module.exports = {
    galleryViewPath: 'https://echarts.apache.org/next/examples/view.html?c=',
    galleryEditorPath: 'https://echarts.apache.org/next/examples/editor.html?c=',
    websitePath: 'https://echarts.apache.org',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/',
    },

    releaseDestDir: path.resolve(__dirname, '../../incubator-echarts-website'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};
