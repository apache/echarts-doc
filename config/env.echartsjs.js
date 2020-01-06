const path = require('path');

module.exports = {
    galleryViewPath: 'https://www.echartsjs.com/examples/en/view.html?c=',
    galleryEditorPath: 'https://www.echartsjs.com/examples/en/editor.html?c=',
    websitePath: 'https://www.echartsjs.com',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/',
    },

    releaseDestDir: path.resolve(__dirname, '../../echarts-www/release'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};
