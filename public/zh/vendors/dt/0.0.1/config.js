/**
 * @file config
 * @author sushuang(sushuang@baidu.com)
 */

define(function (require) {

    // Can be set by setLang method.
    var lang = 'cn';

    // Default data
    var valueSet = {
        panelBaseZIndex: 900000,
        panelMastOpacity: 0.7,
        winPanelAnimationDuration: 300
    };

    // Languages
    var langSet = {
        // Chinese
        cn: {
            langDialogConfirm: '确定',
            langDialogYes: '是',
            langDialogNo: '否',
            langDialogSave: '保存',
            langDialogDontSave: '不保存',
            langDialogCancel: '取消',
            langDialogSaveFail: '保存失败',
            langDialogRemove: '删除',
            langDialogConfirmRemove: '您确认要删除吗？一旦删除，不可恢复。'
        },
        // English
        en: {
            langDialogConfirm: 'OK',
            langDialogYes: 'Yes',
            langDialogNo: 'No',
            langDialogSave: 'Save',
            langDialogDontSave: 'Don\'t Save',
            langDialogCancel: 'Cancel',
            langDialogSaveFail: 'Save Failed.',
            langDialogRemove: 'Delete',
            langDialogConfirmRemove: 'Confirm Deleting? Can not be restored when deleted.'
        }
    };

    /**
     * Usage:
     * var value = config('some'); // read
     *
     * @public
     * @param {string} key
     * @return {*} value
     */
    function config(key) {
        if (valueSet.hasOwnProperty(key)) {
            return valueSet[key];
        }
        else if (langSet[lang].hasOwnProperty(key)) {
            return langSet[lang][key];
        }
    }

    /**
     * @public
     * @param {string} lang 'en' or 'cn'(default)
     */
    config.setLang = function (lang) {
        lang = lang;
    };

    return config;
});
