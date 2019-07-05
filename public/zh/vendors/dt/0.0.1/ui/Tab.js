/**
 * @file 最简单的tab。支持双级tab。支持tab动态增删。
 * @author sushuang(sushuang@baidu.com)
 * @date 2014-04
 */

define(function (require) {

    var $ = require('jquery');
    var lib = require('../lib');
    var Component = require('./Component');
    var libPeek = lib.peek;

    var MAIN_CSS = 'cpt-tab';

    /**
     * 最简单的tab
     * 模板中的声明方式：
     * TODO
     *
     * 不负责tab内容的enter、leave，外层自行负责。只负责改变其css。
     */
    var Tab = Component.extend({

        _define: {
            viewModel: function () {
                return {
                    currentTab: lib.ob(), // 可初始时为空
                    currentTab1: lib.ob(), // 启用二级tab时指定
                    baseCss: MAIN_CSS,
                    tabAttr: null, // {string} 必须指定
                    tabAttr1: null, // {string} 必须指定
                    conAttr: null, // {string} 指定则启用二级tab
                    conAttr1: null // {string} 指定则启用二级tab
                };
            },
            viewModelPublic: ['currentTab', 'currentTab1'],
            suppressConstructSub: true, // tab 本身不拥有、不初始化子component。
            css: MAIN_CSS
        },

        /**
         * @override
         */
        _prepare: function () {
            var viewModel = this._viewModel();
            var baseCss = viewModel.baseCss;

            viewModel.headItemCss = baseCss + '-hi';
            viewModel.currentHeadItemCss = baseCss + '-hi-curr';
            viewModel.headItemCss1 = baseCss + '-hi1';
            viewModel.currentHeadItemCss1 = baseCss + '-hi1-curr';
            viewModel.conItemCss = baseCss + '-coni';
            viewModel.headItemDisabledCss = viewModel.headItemCss + '-disabled';
            viewModel.conItemDisabledCss = viewModel.conItemCss + '-disabled';
        },

        /**
         * @override
         */
        _init: function () {
            var viewModel = this._viewModel();
            var currentTab = viewModel.currentTab;
            var currentTab1 = viewModel.currentTab1;

            // 理论上，需要保证，对currentTab、currentTab1的依赖是排在其所有依赖的最前面的
            // 否则，currentTab改变时，面板没有show出现，就执行了别的逻辑，可能引发错误。
            // FIXME
            // 但是，现在并没有提供这种设定 响应函数 执行顺序的 接口。仅是靠实现时的注意：先初始化tab。
            this._disposable(currentTab.subscribe(
                function (nextTabKey) {
                    this._changeTabByModel(nextTabKey, libPeek(currentTab1));
                },
                this
            ));
            this._useTab1() && this._disposable(currentTab1.subscribe(
                function (nextTabKey1) {
                    this._changeTabByModel(libPeek(currentTab), nextTabKey1);
                },
                this
            ));

            this.bind();
        },

        /**
         * 如果执行了unbind，可重新执行bind，进行控件与dom的连接
         * 但是viewModel中定义的东西不可变。
         * 初始化时自动会bind。
         *
         * @public
         * @throws {Error} 如果已经被bind，重复执行抛出错误。
         */
        bind: function () {
            if (this._prop('bound')) {
                throw new Error('It has been bound.');
            }
            var viewModel = this._viewModel();

            this._bindDom();
            // 根据当前model状态，设置tab状态
            this._changeTabByModel(
                libPeek(viewModel.currentTab),
                libPeek(viewModel.currentTab1)
            );
            this._bindModelUpdater();

            this._prop('bound', true);
        },

        /**
         * 此方法解除控件和dom的连接，执行此方法后，主元素内部的dom可由外部进行修改。
         *
         * @pubilc
         */
        unbind: function () {
            this._removeCurrSelect();
            this._unbindModelUpdater();
            this._unbindDom();
            this._prop('bound', false);
        },

        /**
         * 是否控件已和dom连接
         *
         * @public
         * @return {boolean}
         */
        isBound: function () {
            return this._prop('bound');
        },

        /**
         * 此返回值和viewModel.currentTab()的区别是，
         * 假如currentTab设为超出范围的值，那么此方法返回空。
         *
         * @public
         * @return {string} currentTabKey
         */
        getCurrentTabKey: function () {
            return this._prop('currentTabKey');
        },

        /**
         * 类同getCurrentTabKey方法。
         *
         * @public
         * @return {string} currentTabKey1
         */
        getCurrentTabKey1: function () {
            return this._prop('currentTabKey1');
        },

        /**
         * 是否有此tab
         *
         * @public
         * @param {string} tabKey
         * @param {string=} tabKey1 当useTab1时须使用
         * @return {boolean}
         */
        hasTab: function (tabKey, tabKey1) {
            return !!this._getTabWrap(tabKey, tabKey1);
        },

        /**
         * 设置某个tab项是否可用，如果不可用，tab项和内容全部隐藏，就像不存在一样。
         * 暂不支持tabKey1级别的disabled。
         *
         * @public
         * @param {boolean} disabled 是否可用
         * @param {string} tabKey 某tabKey
         * @param {string=} tabKey1 某tabKey1
         */
        setTabDisabled: function (disabled, tabKey, tabKey1) {
            var viewModel = this._viewModel();
            var currWrap = this._getTabWrap(tabKey, tabKey1);

            currWrap.$tabEl[
                disabled ? 'addClass' : 'removeClass'
            ](viewModel.headItemDisabledCss);

            currWrap.$conEl[
                disabled ? 'addClass' : 'removeClass'
            ](viewModel.conItemDisabledCss);

            disable(currWrap.$conEl, disabled);
        },

        /**
         * 判断是否可用
         *
         * @public
         * @param {string} tabKey 某tabKey
         * @param {string=} tabKey1 某tabKey1
         * @return {boolean} 是否可用
         */
        isTabDisabled: function (tabKey, tabKey1) {
            var currWrap = this._getTabWrap(tabKey, tabKey1);
            return currWrap
                ? currWrap.$tabEl.hasClass(this._viewModel().headItemDisabledCss)
                : null;
        },

        /**
         * 设置 tab 标签文字
         *
         * @public
         * @param {string} key
         * @param {string} html
         */
        setTabLabel: function (key, html) {
            var tabWraps = this._prop('tabWraps');
            tabWraps[key].$tabEl[0].innerHTML = html;
        },

        /**
         * @private
         */
        _bindDom: function () {
            var tabWraps = this._prop('tabWraps', {});
            var $el = this.$el();
            var viewModel = this._viewModel();
            var tabAttr = viewModel.tabAttr;
            var tabAttr1 = viewModel.tabAttr1;
            var conAttr = viewModel.conAttr;
            var conAttr1 = viewModel.conAttr1;
            var useTab1 = this._useTab1();

            var $tabEls = $el.find('*[data-' + tabAttr + ']');
            var $tabEls1 = useTab1 && $el.find('*[data-' + tabAttr1 + ']');
            var $conEls = $el.find('*[data-' + viewModel.conAttr + ']');

            // 初始化tab节点
            $tabEls.each(function (index, el) {
                var $el = $(el);
                $el.addClass(viewModel.headItemCss);

                // 仅有一级的情况
                if (!useTab1) {
                    tabWraps[$el.data(tabAttr)] = {$tabEl: $el};
                }
                // 有二级的情况
                else {
                    $tabEls1.each(function (index, el1) {
                        var $el1 = $(el1);
                        $el1.addClass(viewModel.headItemCss1);

                        var tl = tabWraps[$el.data(tabAttr)]
                            || (tabWraps[$el.data(tabAttr)] = {});
                        tl[$el1.data(tabAttr1)] = {$tabEl: $el, $tabEl1: $el1};
                    });
                }
            });

            // 初始化con节点
            $conEls.each(function (index, el) {
                var $el = $(el);
                $el.addClass(viewModel.conItemCss);

                // 先所有con都隐藏
                showOrHide($el, false);

                // 仅有一级的情况
                if (!useTab1) {
                    tabWraps[$el.data(conAttr)].$conEl = $el;
                }
                // 有二级的情况
                else {
                    tabWraps[$el.data(conAttr)][$el.data(conAttr1)].$conEl = $el;
                }
            });
        },

        /**
         * @private
         */
        _unbindDom: function () {
            this._prop('tabWraps', {});
            // TODO
            // 没有unbind css。
        },

        /**
         * @private
         */
        _getTabWrap: function (tabKey, tabKey1) {
            var tabWrap = this._prop('tabWraps')[tabKey];
            if (this._useTab1() && tabWrap) {// nextWrap可能为空，因为con允许暂时不全。
                tabWrap = tabWrap[tabKey1];
            }
            return tabWrap;
        },

        /**
         * 去除当前选中
         *
         * @private
         */
        _removeCurrSelect: function () {
            var viewModel = this._viewModel();
            var useTab1 = this._useTab1();
            var currWrap = this._getTabWrap(
                this._prop('currentTabKey'),
                this._prop('currentTabKey1')
            );

            if (currWrap) {
                currWrap.$tabEl.removeClass(viewModel.currentHeadItemCss);
                useTab1 && currWrap.$tabEl1.removeClass(viewModel.currentHeadItemCss1);
                showOrHide(currWrap.$conEl, false);

                this._prop('currentTabKey', null);
                useTab1 && this._prop('currentTabKey1', null);
            }
        },

        /**
         * @private
         */
        _addSelect: function (nextTabKey, nextTabKey1) {
            var viewModel = this._viewModel();
            var useTab1 = this._useTab1();
            var nextWrap = this._getTabWrap(nextTabKey, nextTabKey1);

            // 添加当前选中
            if (nextWrap) {
                nextWrap.$tabEl.addClass(viewModel.currentHeadItemCss);
                useTab1 && nextWrap.$tabEl1.addClass(viewModel.currentHeadItemCss1);
                showOrHide(nextWrap.$conEl, true);

                this._prop('currentTabKey', nextTabKey);
                useTab1 && this._prop('currentTabKey1', nextTabKey1);
            }
        },

        /**
         * @private
         */
        _changeTabByModel: function (nextTabKey, nextTabKey1) {
            // 因为只做css加减操作，所以在这个change监听函数中，
            // 就不判断disable了。这易于避免不一致发生。

            // 先去除当前选中
            this._removeCurrSelect();
            // 添加选中
            this._addSelect(nextTabKey, nextTabKey1);
        },

        /**
         * @private
         */
        _bindModelUpdater: function () {
            var viewModel = this._viewModel();
            var tabAttr = viewModel.tabAttr;
            var tabAttr1 = viewModel.tabAttr1;
            var that = this;
            var $main = this.$el();

            // 一级tab
            $main.on(
                this._event('click'),
                '*[data-' + tabAttr + ']',
                function () {
                    var nextTabKey = $(this).data(tabAttr);
                    if (nextTabKey !== that._prop('currentTabKey')) {
                        viewModel.currentTab(nextTabKey);
                    }
                }
            );

            // 二级tab
            $main.on(
                this._event('click'),
                '*[data-' + tabAttr1 + ']',
                function () {
                    var nextTabKey1 = $(this).data(tabAttr1);
                    if (nextTabKey1 !== that._prop('currentTabKey1')) {
                        viewModel.currentTab1(nextTabKey1);
                    }
                }
            );
        },

        /**
         * @private
         */
        _unbindModelUpdater: function () {
            this.$el().off(this._event());
        },

        /**
         * 是否启用二级tab
         *
         * @private
         */
        _useTab1: function () {
            return this._viewModel().tabAttr1 != null;
        },

        /**
         * @override
         */
        _dispose: function () {
            this._prop('tabWraps', null);
        }

    });

    /**
     * @inner
     */
    function showOrHide($el, showOrHide) {
        var cpt = lib.getComponent($el);
        cpt
            ? cpt.viewModel('visible')(showOrHide)
            : $el[showOrHide ? 'show' : 'hide']();
    }

    /**
     * @inner
     */
    function disable($el, dis) {
        var cpt = lib.getComponent($el);
        cpt && cpt.viewModel('disabled')(dis);
    }

    return Tab;
});
