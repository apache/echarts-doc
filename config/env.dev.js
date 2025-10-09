const path = require('path');

module.exports = {
    galleryViewPath: 'http://localhost/echarts-website/examples/${lang}/view.html?c=',
    galleryEditorPath: 'http://localhost/echarts-website/examples/${lang}/editor.html?c=',
    optionDocPath: 'https://echarts.apache.org/${lang}/option.html',
    apiDocPath: 'https://echarts.apache.org/${lang}/api.html',
    handbookPath: 'http://localhost/echarts-website/handbook/${lang}/',
    websitePath: 'http://localhost/echarts-website',


    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/'
    },

    releaseDestDir: path.resolve(__dirname, '../public'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated'),

    EMBEDDED_ECHARTS_SCRIPT_URL: null,
};