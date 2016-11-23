/**
 * @file 前端模板（为便于管理，模板使用均从此入口，不直接调用etpl）
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var etpl = require('etpl');
    var dtLib = require('./lib');
    var tpl = {};

    etpl.config({
        commandOpen: '{{',
        commandClose: '}}',
        defaultFilter: 'ob'
    });

    /**
     * 此filter兼容了ko的subscribable
     * 并且也做了html转义
     *
     * @param {string...} 参数可任意顺序输入
     *      如 ${*name|ob('raw', 'void')和 ${*name|ob('void', 'raw')等效
     *      参数有：
     *          'raw'表示不encodeHTML（默认会进行encode）
     *          'null'表示不把null或undefined转成空字符串（默认会转换）
     */
    etpl.addFilter('ob', obFilter);

    function obFilter(val) {
        var useRaw = false;
        var transNull = false;

        for (var i = 1; i < arguments.length; i++) {
            arguments[i] === 'raw' && (useRaw = true);
            arguments[i] === 'null' && (transNull = true);
        }

        if (val == null && !transNull) {
            val = '';
        }
        if (dtLib.obTypeOf(val)) {
            val = val();
        }
        val = String(val);

        return useRaw ? val : dtLib.encodeHTML(val);
    }


    /**
     * 此filter是为了显示 datasource-path (dsp)
     * 如 ${name|dsp}
     */
    etpl.addFilter('dsp', dspFilter);

    function dspFilter(val) {
        if (val == null) {
            val = '';
        }
        // 暂用的现实策略
        return String(val).replace(/^option\./, '');
    }

    /**
     * 一般使用方法：
     * tpl.render(
     *     'someTarget',
     *     {... },
     *     require('tpl!./some.tpl.html')
     * );
     * 或者：
     * tpl.render('someTarget', {... });
     * 而众多的require('tpl!...')会在edp build时合并成一个文件。
     *
     * @public
     * @param {string} tplTarget
     * @param {Ojbect=} model 渲染时使用的数据
     * @param {string=} tplString 如果talTarget找不到，则编译此string。
     * @return {string} 渲染完的string。
     */
    tpl.render = function (tplTarget, model, tplString) {
        if (!etpl.getRenderer(tplTarget) && tplString) {
            etpl.compile(tplString);
        }

        return etpl.render(tplTarget, model || {});
    };

    return tpl;
});
