/**
 * @file 组件基类
 * @author sushuang(sushuang@baidu.com)
 */
/* jshint evil:true */
define(function (require) {

    var $ = require('jquery');
    var lib = require('dt/lib');
    var tpl = require('dt/tpl');
    var getByPath = lib.getByPath;
    var setByPath = lib.setByPath;
    var inner = lib.makeInner();

    // 基础css class
    var BASE_CSS = 'dtui-cpt';
    var ORIGINAL_HTML_KEY = '\x06\x06\x06__originalHTML';

    /**
     * 使用例子（模板以etpl为例）：
     *
     * 首先在 componentConfig.js 中挂上 someCpt 对应的 AMD module：
     *     cptClasses['someCpt'] = require('some/some/some');
     *
     * 能够在本component的模板中声明子component：
     *     {{ target: tplOfThisComponent }}
     *     ...
     *     <div data-cpt="
     *         type: 'someCpt',
     *         name: 'aSubCpt'
     *         viewModel: {
     *             someAttr1: viewModel.some,
     *             someAttr2: lib.ob(123)
     *         }"></div>
     *     ...
     *     {{ /target }}
     *
     * 另一个例子：
     *     {{ target: tplOfThisComponent }}
     *     ...
     *     <div data-cpt="
     *         type: 'someCpt',
     *         name: 'aSubCpt',
     *         viewModelGet: 'someData'"></div>
     *     ...
     *     {{ /target }}
     *
     *     然后在 本Component的_prepare 方法中，
     *     把子component的初始化数据挂在 this._viewModel().someData 上即可传入子component。
     *
     * data-cpt中可使用的属性：
     *      type: 必选。表示组件类的别名。
     *      name: 可选，给定name则能在父component取得子component实例。
     *            例如：name为'aSubCpt'，则 this._sub('aSubCpt') 就是子component实例。
     *            支持对象和数组，例如：
     *            name为'items[aSubCpt]', 则 this._sub('items')是包含子component的数组。
     *            name为'items.aa.bb.aSubCpt', 则 this._sub('items.aa')是 {bb: subComponent}。
     *      viewModel: 可选。表示要传入的viewModel，如 viewModel: {list: this.viewModel('dataList')}。
     *      viewModelGet: 可选。表示viewModel的引用路径，如 viewModel: 'dataList'。
     *
     * 父component被dispose时，会自动dispose用模板声明方式建立起来的子component。
     *
     * 每个component自动含有这两个observable对象：
     * this.viewModel('visiable') // 控制可见性（display:none)
     * this.viewModel('disabled') // 控制disabled状态（css加class：xxx-disabled）
     * 两个对象均可依据外部传入的值进行初始化，如：
     *     <div data-cpt="
     *         type: 'someCpt',
     *         viewModel: {disabled: viewModel.disabled}"></div>
     *
     * 在component内部手动创建一些实体时，如果需要进行dispose，可方便得使用_disposable方法。
     *
     * 如果想延迟模板的渲染和子component的创建，可不设定tplTarget，并在适当时机手动调用_applyTpl方法。
     *
     * @exports Component
     */
    var Component = inner.attach(lib.newClass(lib.enableEvent({

        /**
         * 代码中获取define中内容，请使用：this._getDefineProperty('nameKey')
         *
         * @protected
         */
        _define: {

            /**
             * 本组件对应的tpl内容
             * 例如使用 require('tpl!somefile.html') 得到
             * （构建的时候会自动合并所有tpl文件）
             * 或者直接在js中写html内容
             *
             * @type {string}
             * @protected
             */
            tpl: '',

            /**
             * 本组件对应的tpl的target（参见etpl）
             * 如果被设定，则在component创建过程中自动进行_applyTpl。
             *
             * @type {string}
             * @protected
             */
            tplTarget: '',

            /**
             * 本组件对应的默认的css类型，可以不设置。
             * 如需要多个css，请传数组。
             *
             * @type {(string|Array)}
             * @protected
             */
            css: '',

            /**
             * 本component的属性，以及默认值。
             * 会和祖先类的viewModel merge。
             * 控件初始化传入的viewModel中的属性，必须现在此处定义。
             * 设定成“函数”而非直接对象，因为不应在prototype上挂单例
             *（否则就需要viewModel里面的数据提供clone能力了），
             * 而应是每次实例构造时候生成实例。
             *
             * @protected
             * @return {Object} viewModel
             */
            viewModel: function () {
                return {
                    // 本文中 disabled 表示不能接受用户输入，
                    // 但是并不表示不能被程序更新，也不意味着不可见。
                    // 在initMainEl中进行初始化
                    // @type {lib.ob}
                    disabled: null,
                    // 可见与否。不可从外部传入。
                    // 在initMainEl中进行初始化，根据主元素的初始display状态来初始化。
                    // @type {lib.ob}
                    visible: null,
                    // 额外的css class。如果需要多个css，请传数组：['css1', 'css2']
                    // @type {(string|Array.<string>)}
                    css: '',
                    // 如果需要的话，可以从外部传入基础模板target（很少会这么做）
                    // @type {string}
                    tplTarget: null,
                    // 默认是innerHTML方式，还可设为'prepend', 'append'方式
                    // @type {string}
                    tplRenderMode: 'html'
                };
            },

            /**
             * @see this.viewModel(path)
             * @see lib.getByPath
             * 默认viewModel中的内容是private的。
             * 在此处可以定义public的属性路径（复杂路径可为a.b[3]）。
             * 从而可用 this.viewModel(path) 获取。
             * 默认全private是为了避免对象细节不受控得暴露，从而以后难于修改。
             *
             * @type {Array}
             * @protected
             */
            viewModelPublic: ['disabled', 'visible'],

            /**
             * 每项为viewModel第一层属性名。
             * 设置此项时，此项指定的viewModel中第一层属性，会被clone赋值
             *（无法clone的部分引用赋值，无法clone @see lib/model.js）。
             * 此项为空时，外部传入的viewModel对第一层以下的内容全是引用赋值。
             *
             * @type {Array}
             */
            viewModelMerge: [],

            /**
             * 是否只有viewModel中规定的属性可以传进来。
             * 默认true。
             *
             * @type {boolean}
             */
            viewModelOnlyAccessDeclaredProperties: true,

            /**
             * 是否阻止初始化子Componnet。某些Component不希望拥有子Component，
             * 而是使子Component隶属于祖先（例如tab控件）。
             *
             * @type {Boolean}
             */
            suppressConstructSub: false

        }, // end _define

        /**
         * 渲染前的准备
         * 子类来实现此方法
         *
         * @protected
         */
        _prepare: $.noop,

        /**
         * 自身的初始化
         * 子类来实现此方法
         *
         * @protected
         */
        _init: $.noop,

        /**
         * 自身的析构，在子组件析构前执行。
         * 子类来实现此方法。
         *
         * @protected
         */
        _dispose: $.noop,

        /**
         * 自身的析构，最后执行。
         * 子类来实现此方法。
         *
         * @protected
         */
        _disposeFinally: $.noop,

        /**
         * 自身的初始化后的执行逻辑，可能反复调用。
         * 子类来实现此方法。
         *
         * @protected
         * @param {boolean} isRefresh 初始化后第一次执行则值为false，以后均为true
         */
        _run: $.noop,

        /**
         * 得到带有本实例的 namespace 的 dom event。
         * 带有 namespace 的 dom event 会在 dispose 时自动被 off 掉。
         * 所以约定所有的 dom event 都要用此方法生成，例如：
         * $el.on(this._event('click'), function () {... handler ... });
         *
         * @protected
         * @param {string=} eventName dom事件名。
         *                            如果缺省，则返回事件 namespace，可直接用来el.off()。
         *                            例如：$el.off(this._event())。
         * @return {string} 加上了本实例的 namespace 的 dom事件名；或者事件 namespace。
         */
        _event: function (eventName) {
            var ns = inner(this).eventNamespace;
            return (eventName != null ? eventName : '') + ns;
        },

        /**
         * parse构造时传入的viewModel。如需要可override。不要去直接调用此方法。
         *
         * @protected
         * @param {*} inputViewModel 输入的viewModel
         * @param {Object} cptDef 模板中的配置参数
         * @return {Object} inputViewModel 输入的viewModel
         */
        _parseViewModel: function (inputViewModel, cptDef) {
            return inputViewModel;
        },

        /**
         * parse构造时传入的def。如需要可override。不要去直接调用此方法。
         *
         * @protected
         * @param {Object} cptDef cpt定义
         * @return {Object} cptDef cpt定义
         */
        _parseCptDef: function (cptDef) {
            return cptDef;
        },

        /**
         * 构造。不建议override此方法。
         *
         * @protected
         * @param {(HTMLElement|jQuery)=} $el 主容器
         * @param {Object=} viewModel viewModel
         * @param {Object=} def 模板中data-cpt中声明的变量
         */
        _construct: function ($el, viewModel, def) {
            arguments.length > 0 && lib.assert($el != null); // 这种错误太常见了

            // 可以初始化无主元素的component
            if (!$el || $.isPlainObject($el)) {
                def = viewModel;
                viewModel = $el;
                $el = null;
            }
            else {
                $el = $($el);
            }

            def = $.extend({}, def);
            lib.isComponent(this, true); // 标记为Component。

            var innerThis = inner(this);
            innerThis.cptDef = def;
            // 事件的名空间
            innerThis.eventNamespace = '.namespace' + lib.localUID();
            // 存放子组件，格式为：{name: someSubComponent}
            innerThis.subComponents = {};
            innerThis.sub$Els = {};
            innerThis.disposed = false;
            innerThis.cptDisposableArea = {};
            innerThis.cptInstanceUID = 'cpt-instance-' + lib.localUID();


            initViewModelControlMap.call(this);
            viewModel = this._parseViewModel(viewModel || {}, def) || {};
            setViewModel.call(this, viewModel);

            initCssDefine.call(this);
            initInnerViewModel.call(this);
            initMainEl.call(this, $el);

            this._prepare();
            applyBaseTpl.call(this);
            this._init();
        },

        /**
         * 析构。不建议override此方法。
         * 此方法只可被使用一次。析构完后不能再运行。
         *
         * @public
         */
        dispose: function () {
            var innerThis = inner(this);
            if (!innerThis.disposed) {
                var el = this.el();
                var originInnerHTML = this[ORIGINAL_HTML_KEY] || '';
                // 最先自己进行清除
                this._dispose();
                disposeSub.call(this);
                disposeEls.call(this);
                this._disposable(false);
                disposeBase.call(this);
                // 最后一次机会自己清除
                this._disposeFinally();
                el.innerHTML = originInnerHTML;
                innerThis.disposed = true;
            }
        },

        /**
         * @public
         */
        isDisposed: function () {
            return !!inner(this).disposed;
        },

        /**
         * 一般用此来判断是否可以响应用户交互，或者响应异步回调。
         *
         * @public
         */
        isFrozen: function () {
            return this._viewModel().disabled() || this.isDisposed();
        },

        /**
         * 只是 syntactic sugar。
         * 匿名注册需要被自动dispose的对象：this._disposable(obj); // obj 对象有dispose方法。
         * 实名注册需要被自动dispose的对象：this._disposable(obj, 'someName');
         * 指定名称执行dispose：this._disposable('someName');
         * 无论是匿名还是实名，注册的对象 obj，会自动在整个cpt dispose时自动被调用dispose。
         * 派生类不可使用_disposable(false)，因为它只可被使用一次，析构完后不能再运行。
         *
         * @protected
         * @param {(Object|jQuery|string|boolean)} o 要被dispose的对象（需要有dispose方法），或者是name。
         * @param {string=} name 一般不需要，除非想指定名称去dispose。
         * @return {Object} o
         */
        _disposable: function (o, name) {
            lib.assert(o != null); // 常见的错误
            var area = inner(this).cptDisposableArea;

            // o为 null 或 undefined 时什么也不做，这是为了支持编码的简洁
            if (o == null) {
                return o;
            }
            // 全部dispose
            else if (o === false) {
                for (var n in area) {
                    if (area.hasOwnProperty(n)) {
                        disposeDisposable.call(this, area[n]);
                        area[n] = null;
                    }
                }
            }
            // 指定名称进行dispose
            else if ($.type(o) === 'string') {
                disposeDisposable.call(this, area[o]);
                area[o] = null;
            }
            // 注册可以被dispose的对象
            else {
                lib.assert($.isFunction(o.dispose) || lib.isJQuery(o), 'No dispose method nor not jQuery!');
                name = name || '\x0E\x0E-component-anonymouse-disposable' + lib.localUID();
                area[name] = o;
            }

            return o;
        },

        /**
         * 通常情况下并不需要去实现resize，除非Component不得不手动resize。
         * （例如缓存了offsetXXX、使用了canvas等等）
         *
         * @public
         */
        resize: $.noop,

        /**
         * 延迟创建$el并初始化。
         * 在构建Component时，可以不传入el，而后准备好el和tpl后手动调用此方法进行初始化。
         *
         * @protected
         * @param {(HTMLElement|jQuery)} $el 主元素
         */
        _manuInitView: function ($el) {
            initMainEl.call(this, $el);
            this._constructSub($el);
        },

        /**
         * 模板渲染，并创建子控件。
         * Component子类中，可使用此方法，渲染模板片段。
         *（一般用在存在异步获取数据后再渲染的情况下）
         * 注意：此方法不支持多次使用。
         *
         * @protected
         * @param {HTMLElement|jQuery} el 在此容器上渲染模板。
         * @param {string} tplTarget tpl的target名
         */
        _applyTpl: function (el, tplTarget) {
            if (tplTarget) {
                this._renderTpl(tplTarget, null, el);
                this._constructSub(el);
            }
        },

        /**
         * 渲染模板。直接渲染到dom中 或者 只返回html字符串
         *
         * @protected
         * @param {string} tplTarget 模板的target名
         * @param {Object=} viewModel 渲染用的model。缺省则为this._viewModel()
         * @param {(HTMLElement|jQuery)=} el 如果传此参数，则渲染到此el中；否则，仅返回结果html。
         * @return {string} 模板渲染结果html
         */
        _renderTpl: function (tplTarget, viewModel, el) {
            var model = {
                // 模板中直接引用 viewModel.something
                viewModel: viewModel || this._viewModel(),
                // 语言字符从中取得，模板中使用方式例如：lang.html.some1，lang.string.some2
                lang: this.getLang(),
                constant: this.getConstant()
            };

            var result = tpl.render(
                tplTarget, model, this._getDefineProperty('tpl')
            ) || '';

            el && $(el)[this._viewModel().tplRenderMode](result);

            return result;
        },

        /**
         * 解析模板创建子cpt。一般此方法自动被调用，不手动调用。
         *
         * @protected
         * @param {HTMLElement|jQuery} container 在此容器内检查子cpt并创建。
         * @param {boolean} includeContainer 是否也解析container上的data-cpt。默认false
         */
        _constructSub: function (container, includeContainer) {
            var $container = $(container);
            lib.assert($container.length);

            if (includeContainer && $container.data('cpt')) {
                this._constructSubCpt.call(this, container);
            }

            var that = this;
            $('*[data-cpt]', $container).each(function (index, subEl) {
                that._constructSubCpt(subEl);
            });
        },

        /**
         * @protected
         */
        _constructSubCpt: function (subEl) {
            var $subEl = $(subEl);
            var originInnerHTML = subEl.innerHTML;
            var thisViewModel = this._viewModel();

            var def = this._parseCptDef(
                (new Function(
                    'viewModel', 'lib', 'lang', 'constant',
                    'return {' + $subEl.data('cpt') + '};'
                )).call(this, thisViewModel, lib, this.getLang(), this.getConstant())
            );
            var Clz = this.getCptClass(def.type);

            var subViewModel = def.viewModelGet
                 ? getByPath(def.viewModelGet, thisViewModel)
                 : def.viewModel;

            var subCpt = new Clz(subEl, subViewModel, def);
            subCpt[ORIGINAL_HTML_KEY] = originInnerHTML;

            return this._sub(
                // 如果没定义name，则表示匿名
                def.name || ('\x0E\x0F-sub-cpt-name-' + lib.localUID()),
                subCpt
            );
        },

        /**
         * 依照模板的定义，重新创建子component，旧的子component被dispose。
         * 如果组件的dispose没有写完整，则可能出现内存泄露、事件处理器指向旧对象等问题。
         *
         * @public
         * @param {string} subPath 如：'zzz.xxx'
         */
        recreateSubCpt: function (subPath) {
            var subCpt = this._sub(subPath);
            if (!subCpt) {
                return;
            }

            var subEl = subCpt.el();
            subCpt.dispose();
            this._sub(subPath, null);
            this._constructSubCpt(subEl);
        },

        /**
         * 构造完成后执行，可反复调用
         *
         * @public
         * @param {boolean} isRefresh 初始化后第一次执行则值为false，以后均为true
         */
        traversalRun: function (isRefresh) {
            // 先执行sub
            traverseSub(
                inner(this).subComponents,
                function (subCpt) {
                    subCpt.traversalRun(isRefresh);
                }
            );
            // 最后执行自己
            this._run(isRefresh);
        },

        /**
         * 设置或得到子component
         *
         * @protected
         * @param {string} name 子component路径。可以为xxx.xxx[2]这样的object路径。
         * @param {*} o 一般为子component，或者array等。如果缺省，则表示意图是“get Component”
         * @param {boolean} overlapSilently 当set时，是否可以overlap，默认false
         * @return {Component} 子组件实例
         */
        _sub: function (name, o, overlapSilently) {
            var subComponents = inner(this).subComponents;
            if (arguments.length < 2) {
                return getByPath(
                    name,
                    subComponents,
                    getByPath.actionChoice.notPlainReturn
                );
            }
            else {
                setByPath(
                    name,
                    o,
                    subComponents,
                    overlapSilently
                        ? setByPath.actionChoice.notPlainOverlap
                        : setByPath.actionChoice.notPlainThrow
                );
                return o;
            }
        },

        /**
         * 得到_define中的内容
         *
         * @protected
         * @param {string} key define property key
         * @return {*} define property
         */
        _getDefineProperty: function (key) {
            return this.constructor.defineProperties[key];
        },

        /**
         * 得到本component的主元素
         *
         * @public
         * @return {HTMLElemnet} 主元素dom节点
         */
        el: function () {
            return inner(this).el;
        },

        /**
         * 设置或得到元素（jquery）
         * 如果缺省参数，得到的是本component的主元素。
         * 这些元素会在dispose时自动off(this._event());
         *
         * @public
         * @param {string=} name 自己起名字。
         *  可以为xxx.xxx[2]这样的object路径。
         *  如果缺省表示得到主元素
         * @param {*} o 一般为要设置的元素，或者数组等
         *  如果缺省表示得到主元素
         * @param {boolean} overlapSilently 当set时，是否可以overlap，默认false
         * @return {HTMLElemnet}
         */
        $el: function (name, o, overlapSilently) {
            var innerThis = inner(this);
            if (arguments.length === 0) {
                // 得到主元素
                return innerThis.$el;
            }

            if (arguments.length === 1) {
                return getByPath(
                    name,
                    innerThis.sub$Els,
                    getByPath.actionChoice.notPlainReturn
                );
            }
            else {
                setByPath(
                    name,
                    o,
                    innerThis.sub$Els,
                    overlapSilently
                        ? setByPath.actionChoice.notPlainOverlap
                        : setByPath.actionChoice.notPlainThrow
                );
                return o;
            }
        },

        /**
         * 得到本component的基础css
         *
         * @public
         * @return {HTMLElemnet}
         */
        css: function () {
            return this._getDefineProperty('css') || '';
        },

        /**
         * 返回 view model中的指定内容
         *
         * @public
         * @param {string=} path 如可以为：'xxxx.bbbb[3]'
         * @return {*}
         */
        viewModel: function (path) {
            if (canPublic.call(this, path)) {
                return getByPath(path, inner(this).viewModel);
            }
            else {
                throw new Error(path + ' is private!');
            }
        },

        /**
         * 返回 view model 整体，私有，外部不可调用
         *
         * @protected
         * @return {Object} viewModel
         */
        _viewModel: function () {
            return inner(this).viewModel;
        },

        /**
         * 得到cpt的定义
         *
         * @public
         * @param {string} key 则返回def的某个key对应的值。如：'some/some/some'
         * @return {Class} component类定义
         */
        getCptClass: function (key) {
            return Component.cptClasses[key];
        },

        /**
         * 得到本component的定义
         *
         * @public
         * @param {string} key 则返回def的某个key对应的值。
         * @return {*}
         */
        getCptDef: function (key) {
            return inner(this).cptDef[key];
        },

        /**
         * 得到本component的uid
         *
         * @public
         * @return {string} uid
         */
        uid: function () {
            return inner(this).cptInstanceUID;
        },

        /**
         * 得到本component的基本css class
         *
         * @public
         * @param {string=} suffix 例如'-disabled'
         * @return {Array} 例如['cpt', 'someThisCss', 'someInputExtraCss']
         */
        getFullCss: function (suffix) {
            var csses = [BASE_CSS];
            var innerThis = inner(this);
            csses.push.apply(csses, innerThis.basicCss || []);
            csses.push.apply(csses, innerThis.extraCss || []);

            return $.map(
                csses,
                function (css) {
                    return css + (suffix || '');
                }
            );
        },

        /**
         * 是否禁用了
         *
         * @public
         * @return {boolean} 是否禁用
         */
        isDisabled: function () {
            return !!lib.peek(this._viewModel().disabled);
        },

        /**
         * @public
         * @protected
         */
        getLang: function () {
            // 可以在业务中自己配置，或者重载 getLang 方法
            return Component.defaultLanguageSet;
        },

        /**
         * @public
         * @protected
         */
        getConstant: function () {
            // 可以在业务中自己配置，或者重载 getLang 方法
            return Component.defaultConstant;
        },

        /**
         * 生成本对象的副本。一般不需要用到。子类可重载。
         * @see lib.cloneAtom
         *
         * @public
         * @return {Object} component instance
         */
        clone: $.noop,

        /**
         * 从最祖先类遍历到本类
         *
         * @protected
         * @param {Function} callback callback
         */
        _traverseFromAncestor: function (callback) {
            var clzChain = [];

            for (
                var Clz = this.constructor;
                Clz;
                Clz = Clz.prototype._superClass
            ) {
                clzChain.push(Clz);
            }

            for (var i = clzChain.length; i--;) {
                callback.call(this, clzChain[i]);
            }
        },

        /**
         * 创建或得到或清除local observable对象。
         * 用于提供“Component间局部通讯”功能（例如某panel由子Component触发刷新）。
         * 此对象在以自身为根的树上，对于子Component可见。
         * 如果本Component没有主dom（this.el()为空），则不支持local observable功能。
         *
         * 使用方式：
         * 创建：this.localOb('LOCAL_OB_SOME', lib.ob());
         * 移除：this.localOb('LOCAL_OB_SOME', false); // 一般不需要这么做。
         * 获得并注册监听：lib.localOb('LOCAL_OB_SOME').subscribe(someHandlerFn, this);
         * 向最近祖先上的localOb发消息：this.getAncestorLocalOb('LOCAL_OB_SOME')({someDataKey: 'someData'});
         *
         * @public
         * @param {string} key 如：'LOCAL_OB_SCROLL_RESIZE', 见contant.LocalObKey。
         * @param {(Object|Function|false)=} ob obsevable对象，参见dataDriven.js，或函数。
         *                                      如果此参数为false，表示删除此local ob。
         * @return {Object} observable对象
         */
        localOb: function (key, ob) {
            var ret;
            var innerThis = inner(this);
            var localObRepo = innerThis.localObRepo || (innerThis.localObRepo = {});

            if (arguments.length > 1) {
                if (ob === false) { // 清除local observable。
                    ret = localObRepo[key];
                    delete localObRepo[key];
                }
                else { // 增添local observable
                    lib.assert(localObRepo[key] == null); // 不允许覆盖防止编码错误
                    ret = localObRepo[key] = ob;
                }
            }
            else {
                ret = localObRepo[key];
            }

            return ret;
        },

        /**
         * 得到祖先中最近出现的匹配给定key的local observable对象。
         * 使用这种设定的原因是，例如这个场景：
         * 某外层Component有key为'refresh'的localOb，
         * 中层的Component也可设key为'refresh'的localOb，并在ob的监听函数中触发外层的refresh localOb。
         * 从而内层的Component可以触发这个链式refresh。
         *
         * @public
         * @param {string} key 如：'LOCAL_OB_SCROLL_RESIZE', 见contant.LocalObKey。
         * @return {Object} localOb
         */
        getAncestorLocalOb: function (key) {
            // 因为不维护Component的父指针（为了灵活和简化），所以按照dom结构向上找。
            var $el = this.$el();
            var cpt;
            var localOb;

            while (
                ($el = $el && $el.parent())[0]
                && !(localOb = (cpt = lib.getComponent($el)) && cpt.localOb(key))
                && $el[0] !== document.body // 最高到body（含）停止
            ) {} // jshint ignore:line

            return localOb; // jshint ignore:line
        }

    })));

    /**
     * 各种component类型的定义集合。
     * 约定外部只在componentConfig.js中使用。
     *
     * @public
     */
    Component.cptClasses = {};

    /**
     * 各种语言的话术集合。
     * 约定外部只在componentConfig.js中使用。
     *
     * @public
     */
    Component.defaultLanguageSet = {};

    /**
     * 常量集合。
     * 约定外部只在componentConfig.js中使用。
     *
     * @public
     */
    Component.defaultConstant = {};

    /**
     * @inner
     */
    function initInnerViewModel() {
        var viewModel = this._viewModel();

        // visible不可从外部传入，因为基于css的display，
        // 不需要和其他cpt（尤其不应该和子cpt）分享。
        viewModel.visible = lib.ob(true);

        // disabledOb允许从外部传入，本Component的disabledOb自动监听传入的disabledOb。
        // 从而外部的disabledOb可以控制本Component，而反之不可。
        var outerDisabledOb = viewModel.disabled;
        viewModel.disabled = lib.ob(false);

        if (outerDisabledOb != null) {
            this._disposable(outerDisabledOb.subscribe(handleDisable, this));
        }

        function handleDisable(val) {
            viewModel.disabled(val);
        }
    }

    /**
     * 主节点初始化。
     *
     * @inner
     * @param {(HTMLElement|jQuery)} $el 主节点
     */
    function initMainEl($el) {
        if (!$el) {
            return;
        }

        var innerThis = inner(this);
        $el = innerThis.$el = $($el);
        innerThis.el = $el[0];

        // 设置componentEl标志
        lib.bindComponent($el, this);

        $el.addClass(this.getFullCss().join(' '));

        var viewModel = this._viewModel();
        var disabledOb = viewModel.disabled;
        var visibleOb = viewModel.visible;

        this._disposable(disabledOb.subscribe(elChangeDisable, this));
        this._disposable(visibleOb.subscribe(elChangeVisible, this));

        // 设置disable初始状态
        elChangeDisable.call(this, disabledOb());

        // 用当前mainEl的display来初始化visible。
        // 这么做的原因是：
        // （1）符合设style="display:none"的习惯。
        // （2）方便于多个component控制一个dom时行为不冲突。
        //  例如：tab的content也是cpt时，tab改变了display，但是cpt还没有初始化，就造成了不一致。
        visibleOb($el[0].style.display !== 'none');
    }

    function elChangeDisable(v) {
        this.$el()[v ? 'addClass' : 'removeClass'](
            this.getFullCss('-disabled').join(' ')
        );
    }

    function elChangeVisible(v) {
        this.$el()[v ? 'show' : 'hide']();
    }

    function applyBaseTpl() {
        var tplTarget = inner(this).cptDef.tplTarget
            || this._getDefineProperty('tplTarget');
        var $el = this.$el();

        if (tplTarget && $el && $el.length) {
            this._renderTpl(tplTarget, null, $el);
        }
        if (!this._getDefineProperty('suppressConstructSub') && $el && $el.length) {
            this._constructSub($el);
        }
    }

    // 析构基础
    // （此方法写在闭包中是为了禁止子类调用）
    function disposeBase() {
        var $el = this.$el();
        var innerThis = inner(this);

        // 清除自己的事件挂载
        $el.off(innerThis.eventNamespace);
        $el.removeClass(
            this.getFullCss().join(' ')
        );

        // 并不默认清除 main el 中的内容，因为可能并不属于自身可控。
        innerThis.viewModel = null;

        innerThis.el = null;
        innerThis.$el = null;
        innerThis.subComponents = null;
        innerThis.sub$Els = null;

        lib.bindComponent($el, false);
    }

    // 递归dispose component
    function traverseSub(o, callback, elOrCpt) {
        if (
            (!elOrCpt && lib.isComponent(o))
            || (elOrCpt && lib.isJQuery(o))
        ) {
            callback(o);
        }
        else if ($.type(o) === 'object' && !lib.isAtom(o)) {
            for (var i in o) {
                if (o.hasOwnProperty(i)
                    // 当subcpt移除时会设为null。虽然如果编码错误也可能导致为null，
                    // 但这两种情况不好区分，所以暂时不fail fast了。
                    && o[i] != null
                ) {
                    traverseSub(o[i], callback, elOrCpt);
                }
            }
        }
    }

    /**
     * 设置view model
     *
     * @inner
     * @param {Object=} viewModel 外部输入的viewModel
     * @return {Object} viewModel
     */
    function setViewModel(viewModel) {

        // 初始化 viewModel，从祖先类开始 merge。
        var innerThis = inner(this);
        var base = innerThis.viewModel = {};
        var that = this;

        this._traverseFromAncestor(function (Clz) {
            base = lib.merge(
                base,
                // 定义中的viewModel是个函数
                Clz.defineProperties.viewModel.call(that),
                {
                    onlyMergeOwnPropertyInTarget: false,
                    levelOneNeedMerge: null,
                    clone: false
                }
            );
        });

        // 注意，如果viewModel是atom的（@see lib.atom），则会直接引用传递。
        base = lib.merge(
            base,
            viewModel,
            // 规定：只有base中有声明（表示默认值），才能被设值
            {
                onlyMergeOwnPropertyInTarget:
                    !!this._getDefineProperty('viewModelOnlyAccessDeclaredProperties'),
                levelOneNeedMerge: innerThis.viewModelMergeMap || {}
            }
        );

        innerThis.viewModel = base;
        return base;
    }

    function initViewModelControlMap() {
        // 缓存成map便于查询
        var innerThis = inner(this);
        var viewModelPublicMap = innerThis.viewModelPublicMap = {};
        var viewModelMergeMap = innerThis.viewModelMergeMap = {};

        // 从祖先开始merge
        this._traverseFromAncestor(function (Clz) {
            var pub = Clz.defineProperties.viewModelPublic || [];
            for (var i = 0, len = pub.length; i < len; i++) {
                viewModelPublicMap[pub[i]] = 1;
            }
            var mrg = Clz.defineProperties.viewModelMerge || [];
            for (var i = 0, len = mrg.length; i < len; i++) {
                viewModelMergeMap[mrg[i]] = 1;
            }
        });
    }

    function initCssDefine() {
        var viewModel = this._viewModel();
        var innerThis = inner(this);

        // 从祖先遍历到本类，找到所有基础css。
        var basicCss = [];
        this._traverseFromAncestor(function (Clz) {
            var css = Clz.defineProperties.css;
            if ($.isArray(css)) {
                basicCss.push.apply(basicCss, css);
            }
            else if (css) {
                basicCss.push(css);
            }
        });
        innerThis.basicCss = basicCss;

        // 可多个extra c
        var extraCss = viewModel && viewModel.css || [];
        if (!$.isArray(extraCss)) {
            extraCss = [extraCss];
        }
        innerThis.extraCss = extraCss;
    }

    function canPublic(path) {
        path = getByPath.normalizePath(path);
        return !!inner(this).viewModelPublicMap[path];
    }

    function disposeDisposable(o) {
        // o 为含有 dispose方法 的对象 或 jQuery
        // jQuery时意为清除本名空间的事件
        if (o && $.isFunction(o.dispose)) {
            try {
                o.dispose();
            }
            catch (ex) {
                if (Component.debug) {
                    throw ex;
                }
                // 线上为了减少用户影响，吞食dispose的ex。
                else if (Component.printLog) {
                    Component.printLog.error(ex);
                }
            }
        }
        else if (o && lib.isJQuery(o)) {
            o.off(this._event());
        }
    }

    /**
     * 递归dispose所有子component 或 指定根节点的子components。
     *
     * @inner
     * @param {*} root 如果缺省则默认为 inner(this).subComponents
     */
    function disposeSub(root) {
        root = root || inner(this).subComponents;
        traverseSub(
            root,
            function (subCpt) {
                try {
                    subCpt.dispose();
                }
                catch (ex) {
                    if (Component.debug) {
                        throw ex;
                    }
                    // 线上为了减少用户影响，吞食dispose的ex。
                    else if (Component.printLog) {
                        Component.printLog.error(ex);
                    }
                }
            }
        );
        // 清空root
        if (!lib.isAtom(root)) {
            for (var i in root) {
                if (root.hasOwnProperty(i)) {
                    root[i] = null;
                }
            }
        }
    }

    /**
     * 递归dispose所有存储的el 或 指定根节点的存储的el。
     *
     * @inner
     * @param {*} root 如果缺省则默认为 inner(this).sub$els
     */
    function disposeEls(root) {
        root = root || inner(this).sub$els;
        var ns = this._event();
        traverseSub(
            root,
            function ($el) {
                $el.off(ns);
            },
            true
        );
        // 清空root
        if (!lib.isAtom(root)) {
            for (var i in root) {
                if (root.hasOwnProperty(i)) {
                    root[i] = null;
                }
            }
        }
    }

    /**
     * 打log到debug控制台（如果浏览器支持的话）.
     * 可手动挂载到Component.printLog上。
     *
     * @public
     * @param {string} data
     */
    Component.consoleLog = function (data) {
        var console = window.console;
        if (lib.isObject(console) && typeof console.log === 'function') {
            console.log(lib.stringifyJSON(data));
        }
    };

    return Component;
});
