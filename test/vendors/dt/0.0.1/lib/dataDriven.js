/**
 * @file observable、data-driven 机制相关
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var base = require('./base');
    var $ = require('jquery');
    var throttle = require('./throttle');
    var arraySlice = Array.prototype.slice;

    // 虽然 knockout（ko、mvvm）会带来较清洁的程序结构和编码方便，
    // 但是决定不从底层使用其data-bind和template，原因是：
    // 当 ko 和 jq/其他已有控件 混用时，不容易避免内存泄露。
    // 当不使用ko提供的dom操作删除dom时，内存泄露可能发生在：
    //  · 为dom节点建立的computed的难于析构（尽管有默认的disposeWhen，也不是一定会触发）。
    //  · 在dom节点中建立的bindingContext的引用的难于解除。
    // 但是 ko 的 observer 机制，以及数据驱动的方式，是可以利用的，
    // 认为会对组件交互较多的程序结构带来益处。
    var lib = {};

    // ko只提供了observable和computed的区分，
    // 没有提供observable和observableArray的区分，所以加标志。
    var OB_TYPE_PROP = '\x0E__ob__type__';
    var PROP = '\x0E__prop__'; // 为了避免错误的编码方式：扩展时访问私有变量
    var DEFAULT_EVENT = 'change';
    var ARRAY_CHANGE_EVENT = 'arrayChange';
    var UNDEFINED;


    // ---------------------------------------------------------
    // subscribable
    // ---------------------------------------------------------



    /**
     * 加事件功能。重写了这个因为需要一些改变
     *
     * @public
     */
    lib.subscribable = function (o) {
        base.assign(o, subscribableMethods);
        o._subscriptions = {};
    };

    var subscribableMethods = {

        subscribe: function (callback, scope, event) {
            event = event || DEFAULT_EVENT; // 缺省则是change事件
            var subscList = this._subscriptions[event]
                || (this._subscriptions[event] = []);

            var subscription = new Subscription(
                callback,
                scope,
                function () {// disposer
                    base.arrayRemoveItem(subscList, subscription);
                }
            );

            subscList.push(subscription);
            return subscription;
        },

        notify: function (args, event) {
            event = event || DEFAULT_EVENT; // 缺省则是change事件
            if (!this.hasSubscriptionsForEvent(event)) {
                return;
            }
            // 克隆一份因为过程中可能有dispose
            var subscList = this._subscriptions[event].slice();
            for (var i = 0, subsc; subsc = subscList[i]; i++) {
                subsc.callback(args);
            }
        },

        hasSubscriptionsForEvent: function (event) {
            return this._subscriptions[event] && this._subscriptions[event].length;
        },

        isDifferent: function (oldValue, newValue) {
            return !this.equalityComparer || !this.equalityComparer(oldValue, newValue);
        },

        equalityComparer: valuesArePrimitiveAndEqual
    };

    var primitiveTypes = {'undefined': 1, 'boolean': 1, 'number': 1, 'string': 1};
    // 对于非primitive的值，无论如何都会different，从而触发change事件。
    // 如果不这样处理，非primitive的值修改后触发change事件会有困难。
    function valuesArePrimitiveAndEqual(a, b) {
        var oldValueIsPrimitive = (a === null) || ($.type(a) in primitiveTypes);
        return oldValueIsPrimitive ? (a === b) : false;
    }



    // ---------------------------------------------------------
    // subscription
    // ---------------------------------------------------------



    /**
     * @class
     */
    var Subscription = function (callback, callbackScope, disposeCallback) {
        this[PROP + 'callback'] = callback;
        this[PROP + 'callbackScope'] = callbackScope;
        this[PROP + 'disposeCallback'] = disposeCallback;
        this[PROP + 'isDisposed'] = false;
    };

    var subscriptionProto = Subscription.prototype;

    subscriptionProto.callback = function (args) {
        if (!this[PROP + 'isDisposed']) {
            this[PROP + 'callback'].apply(this[PROP + 'callbackScope'], args || []);
        }
        return this;
    };

    // 设置callback
    subscriptionProto.setCallback = function (callback) {
        this[PROP + 'callback'] = callback;
        return this;
    };

    // 得到callback
    subscriptionProto.getCallback = function () {
        return this[PROP + 'callback'];
    };

    subscriptionProto.dispose = function () {
        this[PROP + 'isDisposed'] = true;
        this[PROP + 'disposeCallback']();
        return this;
    };

    // 如果反复调用的间隔低于limit，则会按limit给定的频率执行。
    subscriptionProto.throttle = function (limit) {
        this[PROP + 'callback'] = throttle.fixedRate(this[PROP + 'callback'], limit);
        return this;
    };

    // 在limit给定的时间间隔内反复调用，只执行最后一次。
    subscriptionProto.debounce = function (limit) {
        this[PROP + 'callback'] = throttle.debounce(this[PROP + 'callback'], limit);
        return this;
    };




    // ---------------------------------------------------------
    // composite subscription
    // ---------------------------------------------------------




    /**
     * 组合的subscription
     *
     * @class
     */
    var CompositeSubscription = function (subscriptions) {
        this[PROP + 'children'] = $.extend([], subscriptions);
    };

    var compositeSubscriptionProto = CompositeSubscription.prototype;

    compositeSubscriptionProto.callback = function (args) {
        for (var i = 0, child; child = this[PROP + 'children'][i]; i++) {
            child.callback(args);
        }
    };

    compositeSubscriptionProto.dispose = function () {
        for (var i = 0, child; child = this[PROP + 'children'][i]; i++) {
            child.dispose();
        }
    };

    // 如果反复调用的间隔低于limit，则会按limit给定的频率执行。
    compositeSubscriptionProto.throttle = function (limit) {
        compositeSubscriptionDelay.call(this, limit, throttle.fixedRate);
        return this;
    };

    // 在limit给定的时间间隔内反复调用，只执行最后一次。
    compositeSubscriptionProto.debounce = function (limit) {
        compositeSubscriptionDelay.call(this, limit, throttle.debounce);
        return this;
    };

    function compositeSubscriptionDelay(limit, delayMethod) {
        var fns = [];
        var i;
        var child;
        var children = this[PROP + 'children'];

        for (i = 0; child = children[i]; i++) {
            fns.push(child.getCallback());
        }

        fns = delayMethod(fns, limit);

        for (i = 0; child = children[i]; i++) {
            child.setCallback(fns[i]);
        }
    }



    // ---------------------------------------------------------
    // observable
    // ---------------------------------------------------------



    /**
     * 创建一个ob（observable）实例。
     * 这个简写“ob”是为了编码方便。ob，在本工程内多处使用。是基础概念。
     *
     * @public
     * @param {(*|ob)} initValue 初始值。
     *                           如果传入ob，则从此ob中peek出初始值来初始化。
     * @param {*} initValueInfo 初始值描述。
     * @param {Object=} options
     * @param {string=} options.authKey 设置一个authKey，则以后每次更新时必须传入同样authKey才能更新，否则抛出异常。
     * @return {ob} observable
     */
    lib.ob = lib.observable = function (initValue, initValueInfo, options) {
        if (obTypeOf(initValue)) {
            initValue = initValue.peek();
            initValueInfo = initValue.peekValueInfo();
        }

        /**
         * observable实例
         *
         * @param {*=} value 要设置的新值。如果缺省，表示要读取值。
         * @param {*=} valueInfo 额外的信息，可用于描述value。
         * @param {Object=} options
         * @param {string=} options.authKey
         * @param {boolea=} options.force
         * @param {boolea=} options.silent
         */
        function observable(value, valueInfo, options) {
            // Write
            if (arguments.length > 0) {
                observable[PROP + 'writer'](value, valueInfo, options);
                return;
            }
            // Read
            else {
                return observable[PROP + 'currValue'];
            }
        }

        // Private Members
        observable[PROP + 'currValue'] = initValue; // 当前
        observable[PROP + 'currValueInfo'] = initValueInfo; // 当前
        observable[PROP + 'authKey'] = options ? options.authKey : null;

        lib.subscribable(observable);
        base.assign(observable, obMethods);

        observable[OB_TYPE_PROP] = 'ob';

        /**
         * 原始的写入器。
         *
         * @private
         * @param {*} value
         * @param {*=} valueInfo
         * @param {Object=} options
         * @param {string=} options.authKey
         * @param {boolea=} options.force 默认false
         * @param {boolea=} options.silent 默认false
         * @param {Array=} options.volatiles 例如['aa']，表示valueInfo中aa字段不持久化，事件触发完即删除。
         */
        observable[PROP + 'writer'] = function (value, valueInfo, options) {
            observable.validateAuthKey(options ? options.authKey : null);

            // value info 每次都会写入
            base.assert(valueInfo == null || $.isPlainObject(valueInfo));
            observable[PROP + 'currValueInfo'] = valueInfo;

            // 如果值没有变化，则不会设值，除非extend了always
            var force = options && options.force;
            if (force || observable.isDifferent(observable[PROP + 'currValue'], value)) {
                (!options || !options.silent) && observable.valueWillMutate();
                observable[PROP + 'currValue'] = value;
                (!options || !options.silent) && observable.valueHasMutated();
            }

            deleteVolatiles(this, options);
        };

        return observable;
    };

    var obMethods = {

        /**
         * 强制写入，忽视isDifferent判断
         *
         * @public
         * @param {*} value
         * @param {*=} valueInfo
         * @param {Object=} options
         * @param {string=} options.authKey
         * @param {boolean=} options.silent
         * @param {Array=} options.volatiles
         */
        force: function (value, valueInfo, options) {
            options = options || {};
            options.force = true;
            this[PROP + 'writer'](value, valueInfo, options);
        },

        /**
         * 得到当前值
         *
         * @public
         * @return {*}
         */
        peek: function () {
            return this[PROP + 'currValue'];
        },

        /**
         * 得到ob的value info。
         *
         * @public
         * @param {string=} key 如果给定key，则认为valueInfo是object，并从中取出value。
         * @return {*} valueInfo
         */
        peekValueInfo: function (key) {
            if (arguments.length === 0) {
                var obj = this[PROP + 'currValueInfo'];
                if (obj) {
                    obj = $.extend({}, obj);
                }
                return obj;
            }
            else if (base.isObject(this[PROP + 'currValueInfo'])) {
                return this[PROP + 'currValueInfo'][key];
            }
        },

        /**
         * 扩展writer方法。
         *
         * @public
         * @param {Function} fn 扩展的方法
         *                      参数为 {Function} writer, {*} value, {*} valueInfo, {boolean} force；
         *                      this为 ob 自身。
         *                      扩展方法中，在合适的地方可以调用 writer(value, valueInfo)，真正设值。
         * @return {ob}
         */
        extendWriter: function (fn) {
            var observable = this;
            var old = observable[PROP + 'writer'];

            this[PROP + 'writer'] = function (value, valueInfo, options) {
                observable.validateAuthKey(options ? options.authKey : null);

                fn.call(observable, old, value, valueInfo, options);
            };

            return this;
        },

        /**
         * value 被更新后调用。有时在对ob的行为进行扩展的场景会手动调用。
         *
         * @public
         */
        valueHasMutated: function () {
            this.notify([this[PROP + 'currValue'], this]);
        },

        /**
         * 较少使用，value 被更新前调用。有时在对ob的行为进行扩展的场景会手动调用。
         *
         * @pubilc
         */
        valueWillMutate: function () {
            this.notify([this[PROP + 'currValue'], this], 'beforeChange');
        },

        /**
         * @public
         */
        validateAuthKey: function (inputAuthKey) {
            var authKey = this[PROP + 'authKey'];
            if (authKey != null && inputAuthKey !== authKey) {
                throw new Error('AuthKey error: ' + inputAuthKey);
            }
        }
    };


    /**
     * 创建 obHash 实例。
     * 使用obHash.prop()方法来set值，则会触发change事件。
     *
     * @public
     * @param {Object} v 原始对象
     * @return {obHash} observableHash
     */
    lib.obHash = function (v) {
        var ob = lib.ob(v || {});
        ob[OB_TYPE_PROP] = 'obHash';
        // 增补了prop方法，用于get set属性（并触发change事件）
        ob.prop = obHashProp;
        return ob;
    };

    /**
     * 设置 或者 获取 obHash 的属性值。
     * 设置属性值的时候，如果于源属性值不同，则会触发change事件。
     *
     * @public
     * @param {string} key 属性名
     * @param {*=} value 如不传，表示取值
     * @param {Object=} options
     * @param {boolean=} options.force
     * @param {boolean=} options.silent
     * @param {Array=} options.volatiles
     * @return {*} 取到的值，或者设置的值回传
     */
    function obHashProp(key, value, valueInfo, options) {
        // Write
        if (arguments.length > 1) {
            this[PROP + 'currValueInfo'] = valueInfo;
            var innerObj = this();

            if ((options && options.force) || this.isDifferent(innerObj[key], value)) {
                (!options || !options.silent) && this.valueWillMutate();
                innerObj[key] = value;
                (!options || !options.silent) && this.valueHasMutated();
            }

            deleteVolatiles(this, options);
        }
        // Read
        else {
            return this()[key];
        }
    }

    /**
     * 创建 subscribable dependency 包装。
     * 不推荐使用此方法。推荐使用 ob.subscribe + lib.fixedRate or lib.debounce。
     * 严重注意：
     *  （1）慎用computed，除非你能明确控制 fn 中对ob进行的求值。
     *      因为每次求值都会建立对ob的依赖关系。
     *      注意，fn的代码中的函数调用里是否又有对ob的求值，并不那么容易发现，也不易于代码可读。
     *  （2）对ob的监听函数，如果对执行顺序有要求，则尽量不用computed。
     *      因为其不完全能保证执行顺序（详情参见ko源码）。
     *  （3）创建computed时，fn 会首先自动执行一次。
     *
     * @param {Function} fn 依赖描述函数
     * @param {Object} scope
     * @return {ob} dependentObservable
     */
    // lib.obComputed = function (fn, scope) {
    //     var o = ko.dependentObservable(fn, scope);
    //     o[OB_TYPE_PROP] = 'obComputed';
    //     return o;
    // };

    /**
     * 创建 obArray 实例
     *
     * @public
     * @param {Array} v 原始数组
     * @return {obArray} observableArray
     */
    lib.obArray = function (v) {
        base.assert(v === UNDEFINED || $.isArray(v));
        var o = lib.ob(v || []);
        base.assign(o, obArrayMethods);

        o[OB_TYPE_PROP] = 'obArray';
        return o;
    };

    var obArrayMethods = {

        /**
         * 删除所有value
         *
         * @public
         * @param {*|Function} valueOrPredicate 要被删除的值，或匹配函数。
         *                                      如果为匹配函数，则输入为每项，输入为true则表示删除。
         * @return {Array} 被删除的内容
         */
        remove: function (valueOrPredicate) {
            var arr = this();
            var removed = [];
            var willInvoked;
            var indexes = [];

            for (var i = 0, len = arr.length; i < len;) {
                if (typeof valueOrPredicate === 'function'
                    ? valueOrPredicate(arr[i])
                    : arr[i] === valueOrPredicate
                ) {
                    if (!willInvoked) {
                        this.valueWillMutate();
                        willInvoked = true;
                    }
                    removed.push(arr.splice(i, 1));
                    indexes.push(i);
                    len--;
                }
                else {
                    i++;
                }
            }

            if (removed.length) {
                var op = {key: ChangeKey.REMOVE, indexes: indexes};
                this.notify([op, this], ARRAY_CHANGE_EVENT);
                this.valueHasMutated();
            }

            return removed;
        },

        /**
         * 删除所有
         *
         * @public
         * @return {Array} 被删除的内容
         */
        removeAll: function () {
            return this.splice(0, this.count());
        },

        /**
         * 从前向后的第一个value的index。未找到返回-1。
         *
         * @public
         */
        indexOf: function (value) {
            return base.arrayIndexOf(this(), value);
        },

        /**
         * @public
         */
        pop: function () {
            return this.splice(this.count() - 1, 1);
        },

        /**
         * @public
         * @param {*...} value 可多个value
         */
        push: function () {
            return this.splice.apply(
                this, [this.count(), 0].concat(arraySlice.call(arguments))
            );
        },

        /**
         * @public
         */
        shift: function () {
            return this.splice(0, 1);
        },

        /**
         * @public
         */
        unshift: function (value) {
            return this.splice(0, 0, value);
        },

        /**
         * 参数并不完全按照Array splice的规约，如果没有满足如下限定，则什么也不做。
         *
         * @public
         * @param {number} index 起始，范围是：0到当前length。
         * @param {number=} removeCount 删除长度，如果非大于等于0则表示0，如果缺省表示全删除。
         * @param {*...} ... 要增加的项
         * @return {Array} 被删除的项
         */
        splice: function (index, removeCount) {
            var arr = this();
            var len = arr.length;
            var argLen = arguments.length;

            // 什么也不做的情况
            if (!argLen
                || !(index >= 0 && index <= len)
            ) {
                return [];
            }

            // 修正removeCount
            if (argLen === 1) {
                removeCount = len;
            }
            else if (!(removeCount >= 0)) {// jshint ignore:line
                removeCount = 0;
            }
            else if (removeCount > len - index) {
                removeCount = len - index;
            }

            this.valueWillMutate();

            var ret = arr.splice.apply(arr, arguments);

            var op = {
                key: ChangeKey.SPLICE,
                index: index,
                removeCount: removeCount,
                added: arraySlice.call(arguments, 2)
            };
            this.notify([op, this], ARRAY_CHANGE_EVENT);
            this.valueHasMutated();

            return ret;
        },

        /**
         * @public
         */
        slice: function () {
            return arraySlice.apply(this(), arguments);
        },

        /**
         * 增补方法，批量push
         *
         * @public
         * @param {Array} arr
         */
        pushArray: function (arr) {
            return this.push.apply(this, arr || []);
        },

        /**
         * 增补方法，得到长度
         *
         * @public
         * @return {number} 当前长度
         */
        count: function () {
            return this().length;
        },

        /**
         * 增补方法，交换两个元素
         *
         * @public
         * @param {number} originIndex
         * @param {number} finalIndex
         */
        move: function (originIndex, finalIndex) {
            var arr = this();
            var len = arr.length;

            // 什么也不做的情况
            if (originIndex < 0
                || originIndex >= len
                || finalIndex < 0
                || finalIndex >= len
                || originIndex === finalIndex
            ) {
                return;
            }

            // 修正removeCount
            this.valueWillMutate();

            var value = arr.splice(originIndex, 1)[0];
            arr.splice(finalIndex, 0, value);

            var op = {
                key: ChangeKey.MOVE,
                originIndex: originIndex,
                finalIndex: finalIndex
            };
            this.notify([op, this], ARRAY_CHANGE_EVENT);
            this.valueHasMutated();
        }
    };

    /**
     * 用于arrayChange事件
     */
    var ChangeKey = lib.obArray.ChangeKey = {
        REMOVE: 'remove', // 参数：indexes
        SPLICE: 'splice', // 参数：index, removeCount, added
        MOVE: 'move' // 参数：originIndex, finalIndex
    };


    // ---------------------------------------------------------
    // utilities
    // ---------------------------------------------------------




    /**
     * 注册监听。
     * 可传入多个ob，意思任意一个ob都可以触发这个监听。
     * 并且同样可以在返回的subscription对象上施加 throttle 或 debounce
     *
     * @param {(Object|Array.<Object>)} ob 如果不是ob，则什么也不做。
     * @param {Function} fn 回调函数
     * @param {Object} scope
     * @param {string=} event 如果缺省，则取ob.subscribe(...)的默认行为
     * @return {Object=} subscription对象
     */
    lib.obSubscribe = function (ob, fn, scope, event) {
        // 单个ob的情况
        if (obTypeOf(ob)) {
            return ob.subscribe(fn, scope, event);
        }
        // 多个ob的情况
        else if ($.isArray(ob)) {
            var subscList = [];

            for (var i = 0, len = ob.length; i < len; i++) {
                if (obTypeOf(ob[i])) {
                    subscList.push(ob[i].subscribe(fn, scope, event));
                }
            }
            return new CompositeSubscription(subscList);
        }
    };

    /**
     * 得到值。自动类型判断。适应ko等情况
     *
     * @public
     * @param {*} target
     * @return {*} value
     */
    lib.value = function (target) {
        return obTypeOf(target) ? target() : target;
    };

    /**
     * 得到值。
     * 和val区别是：如果在lib.obComputed中执行，不会建立依赖。
     *
     * @public
     * @param {*} target
     * @return {*} value
     */
    lib.peek = function (target) {
        return obTypeOf(target) ? target.peek() : target;
    };

    /**
     * 向ob设置值。一般使用方式：
     *  some = lib.setValue(some, 'zzzzzz');
     *  some = lib.setValue(some, anotherOb);
     * 这样不论some是否是ob，都可以被成功设值
     *
     * @public
     * @param {*} target
     * @param {*} newVal
     * @param {*=} valueInfo
     * @return {*} target or newVal
     */
    lib.setValue = function (target, newVal, valueInfo) {
        newVal = lib.peek(newVal);
        return isValueOb(target)
            ? (target(newVal, valueInfo), target) : newVal;
    };

    /**
     * 标准化的 valueInfo
     *
     * @public
     * @param {(Object|string)} infoOrType 如果是Object，表示info对象。如果是string表示type
     * @param {*=} info 例如可为控件的uid。
     */
    lib.valueInfo = function (infoOrType, info) {
        if (base.isObject(infoOrType)) {
            return base.assign({}, infoOrType, ['type', 'info']);
        }
        else {
            return {type: infoOrType, info: info};
        }
    };

    /**
     * valueInfo类型，作为常量是为了统一概念
     */
    lib.valueInfo.CONFIRMED = 'confirmed'; // 确认值变更，从而可以向server端发起存储

    /**
     * 一个常用简写
     *
     * @public
     * @param {*=} uid 控件的uid。
     * @param {Object=} extraData 额外的信息
     */
    lib.valueInfoForConfirmed = function (uid, extraData) {
        var valueInfo = lib.valueInfo(lib.valueInfo.CONFIRMED, uid);
        if (extraData) {
            base.assign(valueInfo, extraData, null, ['type', 'info']);
        }
        return valueInfo;
    };

    /**
     * 检查valueInfo的方便方法
     *
     * @public
     * @param {(Object|string)} obOrValueInfo。为空时总返回false。
     * @param {string=} type 参见lib.valueInfo的类型，不传则不检查此项
     * @param {*=} info 不传则不检查此项
     * @return {boolean} 是否通过检查
     */
    lib.checkValueInfo = function (obOrValueInfo, type, info) {
        var valueInfo = lib.obTypeOf(obOrValueInfo)
            ? obOrValueInfo.peekValueInfo()
            : obOrValueInfo;

        return base.isObject(valueInfo) // 须是标准的valueInfo
            && (type == null || valueInfo.type === type)
            && (info == null || valueInfo.info === info);
    };

    /**
     * 一个常用简写
     *
     * @public
     * @param {Object} ob observable object
     * @param {*=} uid 控件的uid。如果不传，则不检查uid。
     * @return {boolean} whether confirmed.
     */
    lib.checkValueInfoForConfirmed = function (ob, uid) {
        return lib.checkValueInfo(ob, lib.valueInfo.CONFIRMED, uid);
    };

    /**
     * 得到ob类型
     *
     * @public
     * @param {*} o
     * @return {*} 值
     */
    var obTypeOf = lib.obTypeOf = function (o) {
        return Object(o) === o && o[OB_TYPE_PROP];
    };

    /**
     * 是否是值型的ob
     *
     * @private
     * @param {string=} o 如果为'value'，表示值型的ob。一般内部使用。
     * @return {boolean}
     */
    function isValueOb(o) {
        return ({ob: 1, obArray: 1, obHash: 1}).hasOwnProperty(obTypeOf(o));
    }

    /**
     * @private
     */
    function deleteVolatiles(ob, options) {
        var volatiles = options && options.volatiles || [];
        var valueInfo = ob[PROP + 'currValueInfo'];
        for (var i = 0, len = volatiles.length; i < len; i++) {
            delete valueInfo[volatiles[i]];
        }
    }

    return lib;
});
