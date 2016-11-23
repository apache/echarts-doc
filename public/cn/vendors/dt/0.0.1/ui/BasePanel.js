/**
 * @file Base panel
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var lib = require('../lib');
    var Component = require('./Component');
    var inner = lib.makeInner();


    /**
     * 行为规约：
     * · enter
     *     · 用于“填入/刷新数据”等类似行为。
     *     · 可反复enter。
     *     · 第一次enter时触发_fillContent，可以用于进行某些初始化操作。
     *     · 每个实现类自己负责在_enter中调用和自身有“组合关系”的对象的enter。
     * · clear
     *     · 可被用于“清空数据”等类似行为。并非dispose。
     *     · 可反复clear。
     *     · 实现类自己负责在_clear中调用和自身有“组合关系”的对象的clear。
     * · new
     *     · 同Component的new创建实例，过程中触发_prepare和_init。
     * · dispose
     *     · 同Component的dispose，只能执行一次，执行后再不可回复。
     *     · 一般初始化内部实例时使用_disposable功能，所以一般不需要单独写_dispose逻辑。
     *
     * 状态机示意：
     *              new {_prepare(), _init()}
     *     [NONE] ─────────────────────────────► [CREATED] ─►┐
     *                                              │        │
     *                  dispose() {_dispose()}      │        │
     *     [DISPOSED] ◄──┬◄─────────────────────────┴◄──┐    │
     *                   │                              │    │ enter() {
     *                   │         enter() {_enter()}   │    │   _fillContent()
     *                   │         ┌──────────────────┐ │    │ }
     *                   │         │                  │ │    │
     *     ┌──────► [DATA_FILLED] ◄┘            ┌► [READY] ◄─┤
     *     │               │   │                │   │        │
     *     └───────────────┘   └────────────────┘   └───────►┘
     *     enter() {_enter()}   clear() {_clear()}   clear() {_clear()}
     *
     * @class
     * @extends common/component/Component
     */
    var BasePanel = inner.attach(Component.extend({

        _define: {
            viewModel: function () {
                return {
                    /**
                     * @type {Object} @see lib.ob
                     */
                    panelOpenStatus: null // 外部传入
                };
            },
            viewModelPublic: ['panelOpenStatus']
        },

        /**
         * 状态枚举常量。挂在prototype上是为了方便引用。
         *
         * @public
         */
        PanelState: {
            NONE: 'NONE',
            CREATED: 'CREATED',
            READY: 'READY',
            DATA_FILLED: 'DATA_FILLED',
            DISPOSED: 'DISPOSED'
        },

        /**
         * 得到state
         *
         * @public
         */
        getPanelState: function () {
            /* eslint-disable xxx */
            return inner(this)[STATE_PROP];
        },

        /**
         * 子类不建议override此方法。
         *
         * @override
         */
        _construct: function () {
            setPanelState.call(this, this.PanelState.NONE);

            var ret = this._applySuper('_construct', arguments);

            setPanelState.call(this, this.PanelState.CREATED);

            return ret;
        },

        /**
         * 子类不建议override此方法。
         *
         * @override
         */
        dispose: function () {
            // CREATE, READY, DATA_FILLED都可使用此方法，不用进行前置状态检查。

            var ret = this._applySuper('dispose', arguments);

            setPanelState.call(this, this.PanelState.DISPOSED);

            return ret;
        },

        /**
         * 进入。可重复进入。
         * 只有在第一次进入的时候，会触发 _fillContent。
         *
         * @public
         * @param {Object=} options
         */
        enter: function (options) {
            // CREATE, READY, DATA_FILLED都可使用此方法，不用进行前置状态检查。

            // 只有open才能enter
            if (!this.isOpened()) {
                return false;
            }

            if (this.getPanelState() === this.PanelState.CREATED) {
                // 初始化内容
                this._fillContent(options);

                setPanelState.call(this, this.PanelState.READY);
            }

            this._enter(options);

            setPanelState.call(this, this.PanelState.DATA_FILLED);
        },

        /**
         * 第一次enter时会触发，一般用于进行初始化操作。
         * 由子类实现。
         *
         * @protected
         * @param {Object=} options
         */
        _fillContent: $.noop,

        /**
         * 每次enter时被调用，可在其中对子panel进行enter。
         * 由子类实现。
         *
         * @protected
         * @param {Object=} options
         */
        _enter: $.noop,

        /**
         * 清除。
         *
         * @public
         */
        clear: function () {
            // 前置状态检查
            if (!checkPanelState.call(
                this, [this.PanelState.DATA_FILLED, this.PanelState.READY]
            )) {
                return;
            }

            this._clear();
            setPanelState.call(this, this.PanelState.READY);
        },

        /**
         * 清除。
         * 由子类实现。
         *
         * @protected
         */
        _clear: $.noop,

        /**
         * 是否整体panel是打开状态
         *
         * @public
         * @final
         * @return {boolean}
         */
        isOpened: function () {
            var status = this._viewModel().panelOpenStatus;
            return status
                ? status() === 'opened'
                // 无panelOpenStatus时认为不提供open检测功能，永远open。
                : true;
        }

    }));

    /**
     * 定为特殊的名字避免被子类覆盖
     *
     * @const
     */
    var STATE_PROP = '__panelState__' + BasePanel.uid;

    /**
     * 写入state
     *
     * @inner
     * @this {Object} 本BasePanel实例
     */
    function setPanelState(state) {
        inner(this)[STATE_PROP] = state;
    }

    /**
     * 检查当前状态是否在给定的状态列表中。
     *
     * @inner
     * @this {Object} 本panel实例。
     * @param {Array.<string>} stateList 状态名列表，
     *                                   如[this.PanelState.READY, ...]
     * @return {boolean}
     */
    function checkPanelState(stateList) {
        return ~lib.arrayIndexOf(stateList, this.getPanelState());
    }

    return BasePanel;
});
