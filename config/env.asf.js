const path = require('path');

module.exports = {
    galleryViewPath: 'https://echarts.apache.org/examples/zh/view.html?c=',
    galleryEditorPath: 'https://echarts.apache.org/examples/zh/editor.html?c=',
    websitePath: 'https://echarts.apache.org',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/',
    },

    releaseDestDir: path.resolve(__dirname, '../../../echarts-website/v4'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};
