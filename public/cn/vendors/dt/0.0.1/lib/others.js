/**
 * @file 其他杂工具
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var base = require('./base');

    var lib = {};

    // Constant
    var STR_TEMPLATE_REGEXP = /#\{(.+?)\}/g;

    /**
     * 从url中获取参数
     *
     * @public
     * @param {string} url 源url
     * @return {Array.<Object>} 参数集合
     *  每一项形如：{name: 'asdf', value: '1234'}
     */
    lib.parseURL = function (url) {
        var ret = [];

        if (!url) {
            return ret;
        }

        var a = document.createElement('a');
        a.href = url;
        var arr = (a.search || '').replace(/^\?/, '').split('&');

        for (var i = 0, len = arr.length; i < len; i++) {
            var item = (arr[i] || '').split('=');
            if (item.length > 1 && item[0]) {
                ret.push({name: item[0], value: item[1]});
            }
        }

        return ret;
    };

    /**
     * （简单的）延迟加载
     * 例如：<img data-src-origin="..." />
     * 用img节点（列表）作为输入，
     * 此函数会将data-src-origin中的url放到src上（而已）。
     * 如果img已经被执行过上述操作，则不会再重复执行此操作。
     *
     * @public
     * @param {jQuery} items 要处理的dom列表
     * @param {string} oriAttrName 默认为'src-origin'，一般不用更改
     */
    lib.loadLazyImg = function (items, oriAttrName) {
        !oriAttrName && (oriAttrName = 'src-origin');

        items.each(function (index, item) {
            item = $(item);
            var src = item.data(oriAttrName);

            if (src) {
                item.attr('src', src);
                // 保证不重复加载
                item.data(oriAttrName, '');
            }
        });
    };

    /**
     * 解析inline style string
     *
     * @public
     * @param {string} inlineCssStr
     * @return {Object} key为css属性，value为值
     */
    lib.parseInlineCss = function (inlineCssStr) {
        inlineCssStr = inlineCssStr || '';
        var ret = {};
        var lines = inlineCssStr.split(';');

        for (var i = 0, len = lines.length; i < len; i++) {
            var kv = lines[i].split(':');
            ret[$.trim(kv[0])] = $.trim(kv[1]);
        }

        return ret;
    };

    /**
     * 显示气泡提示
     *
     * @public
     * @param {(string|boolean)} html 如果为false，则隐藏汽包；
     *      否则，html为汽包内显示的内容，并显示汽包。
     * @param {number} x 显示位置
     * @param {number} y 显示位置
     * @param {string=} showType 显示方式：
     *      缺省则为不限制显示方式；
     *      值为DNOT_SHOW_WHEN_CLOSE：当关闭后（鼠标点击关闭或调用showBallonTip(false)），
     *          则再也不现实（用cookie记录）
     */
    lib.showBalloonTip = (function () {
        // 全局的汽包元素
        var $balloon;
        // 记录显示类型
        var showTypeRect;
        // 常亮
        var COOKIE_KEY = 'BAIDUHUI_BALLOON_TIP_SHOWN';
        var DONT_SHOW_KEY = 'DNOT_SHOW_WHEN_CLOSE';

        return function (html, x, y, showType) {
            // 关闭
            if (html === false) {
                doClose();
            }

            // 打开
            else {
                showTypeRect = showType;

                if (showTypeRect === DONT_SHOW_KEY
                    && lib.cookie(COOKIE_KEY)
                ) {
                    return;
                }

                if (!$balloon) {
                    $balloon = $([
                        '<div class="balloon-tip">',
                            '<div class="content"></div>',
                            '<div class="triangle"><i></i><em></em></div>',
                            '<div class="close-btn">X</div>',
                        '</div>'
                    ].join(''))
                    .hide()
                    .appendTo(document.body);

                    // 点击关闭按钮
                    $('.close-btn', $balloon).click(doClose);
                }

                $('.content', $balloon).html(html);
                $balloon
                    .css({
                        position: 'absolute',
                        left: x,
                        top: y
                    })
                    .show();
            }

            function doClose() {
                if ($balloon) {
                    $balloon.hide();
                }
                showTypeRect === DONT_SHOW_KEY && lib.cookie(COOKIE_KEY, 1);
                showTypeRect = null;
            }
        };
    })();

    /**
     * 最简单的设置或读取cookie。
     * 没有进行key的合法性检查。
     * 会自动对value进行encodeURIComponent、decodeURIComponent
     *
     * @public
     * @param {string} key
     * @param {string=} value
     * @return {(string|null)} 值为空时返回null
     */
    lib.cookie = function (key, value) {
        if (value != null) {
            document.cookie = key + '=' + encodeURIComponent(value);
            return value;
        }
        else {
            var reg = new RegExp('(^| )' + key + '=([^;]*)(;|\x24)');
            var result = reg.exec(document.cookie);
            return result ? decodeURIComponent(result[2]) : null;
        }
    };

    (function () {
        /**
         * @inner
         */
        var disabled = false;
        /**
         * 启用禁用全屏滚动
         *
         * @public
         * @param {boolean} enable 是否启用，默认启用
         */
        lib.enableWindowScroll = function (enable) {
            disabled = !enable;
        };

        $(window).scroll(function (event) {
            if (disabled) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
    })();

    /**
     * target blank式弹出tab页，get方式
     *
     * @public
     * @param {string} url
     */
    lib.linkTargetBlank = function (url) {
        var doc = document;
        var body = doc.body;
        var el = doc.createElement('a');
        el.style.display = 'none';
        el.href = url || '#';
        el.target = '_blank';
        body.appendChild(el);
        el.click();
        body.removeChild(el);
    };

    /**
     * 向URL增加参数
     *
     * @public
     * @param {string} url 输入url
     * @param {string} paramStr 参数字符串。不负责encodeURIComponnet。
     * @return {string} 结果url
     */
    var appendParam = lib.appendParam = function (url, paramStr) {
        return url + (url.indexOf('?') < 0 ? '?' : '&') + paramStr;
    };

    /**
     * 替换url中的参数。如果没有此参数，则添加此参数。
     *
     * @public
     * @param {string} url 输入url
     * @param {string} paramName 参数名
     * @param {string} newValue 新参数值。
     *                          如果为空则给此paramName赋空字串。
     *                          会自动对此参数encodeURIComponent。
     * @return {string} 结果url
     */
    lib.replaceIntoParam = function (url, paramName, newValue) {
        if (!url || base.isBlank(url)) {
            return url;
        }
        newValue = newValue != null ? encodeURIComponent(newValue) : '';

        var regexp = new RegExp('([&~?])' + paramName + '=[^&]*');
        var paramStr = paramName + '=' + newValue;
        if (regexp.test(url)) {// 替换
            // js不支持反向预查
            url = url.replace(regexp, '$1' + paramStr);
        }
        else {// 添加
            url = appendParam(url, paramStr);
        }
        return url;
    };

    /**
     * 最简单的模板，按照模板对目标字符串进行格式化 (@from tangram)
     *
     * @public
     * @usage
     *      template('asdf#{0}fdsa#{1}8888', 'PA1', 'PA2')
     *      返回asdfPA1fdsaPA28888。
     *      template('asdf#{name}fdsa#{area}8888, {name: 'PA1', area: 'PA2' })
     *      返回asdfPA1fdsaPA28888。
     * @param {string} source 目标字符串
     * @param {(Object|string...)} options 提供相应数据的对象
     * @return {string} 格式化后的字符串
     */
    lib.strTemplate = function (source, options) {
        source = String(source);
        var data = Array.prototype.slice.call(arguments, 1);

        if (data.length) {
            data = data.length === 1
                ? (base.isObject(options) ? options : data)
                : data;

            return source.replace(
                STR_TEMPLATE_REGEXP,
                function (match, key) {
                    var replacer = data[key];
                    if ($.isFunction(replacer)) {
                        replacer = replacer(key);
                    }
                    return (replacer == null ? '' : replacer);
                }
            );
        }

        return source;
    };

    /**
     * contenteditable功能的帮助函数。
     *
     * @param {jQuery} $el
     */
    lib.enhanceContentEditable = function ($el) {
        $el.keypress(function (e) {
            // TODO
            // 输入、粘贴字符限制
            (e.keyCode || e.witch) === 13 && e.preventDefault();
        });
    };

    /**
     * 获取方向的对立面，比如传入top返回bottom，传入left返回right
     *
     * @param {string} direction
     */
    lib.getOpposite = function (direction) {
        var arr = ['top', 'right', 'bottom', 'left'];

        var index = $.inArray(direction, arr);

        if (index < 0) {
            return null;
        }

        if (index + 2 < arr.length) {
            return arr[index + 2];
        }
        else {
            return arr[arr.length - index - 2];
        }

        return null;
    };

    (function () {

        var checkers = [];
        var enabled = false;

        /**
         * onbeforeunload（页面关闭、刷新、location.href等前提示）。
         * 不是所有浏览器都支持（如opera不支持）。
         * 此函数只在页面初始化时调用一次。
         *
         * @public
         */
        lib.enableBeforeUnloadCheck = function () {
            if (enabled) {
                return;
            }
            enabled = true;

            window.onbeforeunload = function () {
                var finalText;
                for (var i = 0, checker, text; checker = checkers[i]; i++) {
                    if (text = checker()) {
                        finalText = text; // 取最后一条text
                    }
                }
                if (finalText) {
                    window.event.returnValue = finalText;
                }
            };
        };

        /**
         * 增加beforeunload检查器
         *
         * @public
         * @param {Function} checker checker函数无参数，
         *                           返回{string}表示验证未通过，返回空或false表示验证通过。
         */
        lib.addBeforeUnloadChecker = function (checker) {
            checkers.push(checker);
        };

        /**
         * 删除beforeunload检查器
         *
         * @public
         * @param {Function} checker 从检查器列表中移除此检查器。
         * @return {boolean} 是否成功移除（如果不存在此检查器，则返回false）
         */
        lib.removeBeforeUnloadChecker = function (checker) {
            var index = base.arrayIndexOf(checkers, checker);
            (~index) && checkers.splice(index, 1);
            return !!~index;
        };

    })();

    return lib;
});
