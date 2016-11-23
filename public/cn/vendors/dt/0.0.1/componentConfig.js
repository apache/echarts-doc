/**
 * @file component默认配置
 * @author sushuang(sushuang@baidu.com)
 */

define(function (require) {

    var Component = require('./ui/Component');

    // 可在tpl中使用的types。
    // 放在这里声明是为了模块加载。
    var cptClasses = Component.cptClasses;

    // common component
    cptClasses['Text'] = require('./ui/Text');
    cptClasses['TextInput'] = require('./ui/TextInput');
    cptClasses['CheckButton'] = require('./ui/CheckButton');
    cptClasses['TreeList'] = require('./ui/TreeList');
    cptClasses['WinPanel'] = require('./ui/WinPanel');
    cptClasses['Button'] = require('./ui/Button');
    cptClasses['Tab'] = require('./ui/Tab');
    cptClasses['Foreach'] = require('./ui/Foreach');
});
