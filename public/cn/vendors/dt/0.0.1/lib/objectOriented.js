/**
 * @file 面向对象 类 的实现工具
 *      主要修改自大佛chris(wfsr@foxmail.com)的moye。
 */
define(function (require, exports) {

    var base = require('./base');

    var PRIVATE_AREA_KEY = '\x0E\x0EprivateProps';

    /**
     * 创建新类。
     * prototype中：
     *      _applySuper、_superClass 为内置属性禁止覆盖。
     *      _define、_construct为特定功用属性，供用户override。
     * 不支持自定义类似C++/Java的“自动执行父类构造函数”（因为事实上不是必须，并易引起使用者关于override的某些困惑）。
     * 构造时须执行的逻辑，可在porototype._construct中传入。
     * prototype._construct可继承。
     * 不自动调用父类的_construct，如需要可手动用this._applySuper('_construct')（不要使用SuperClass(this)的方式）。
     *
     * @param {Object} prototype 类的原型对象
     * @return {Function} 新类构造函数
     */
    exports.newClass = function (prototype) {

        var Class = function () {
            return isFunction(this._construct)
                ? this._construct.apply(this, arguments)
                : this;
        };
        Class.extend = extend;
        Class.implement = implement;

        attrCopy(Class.defineProperties = {}, prototype._define);
        prototype._define = null;

        Class.implement(prototype);
        Class.uid = 'Class_' + base.localUID();
        Class.prototype._prop = prop;

        return Class;
    };

    /**
     * 调用父类方法。
     * 使用方法：this._applySuper('_someMethod', arguments)
     *
     * @protected
     * @final
     * @param {string} name 父类方法名
     * @param {Array...} ... 其他参数数组。
     *                用数组的形式，是为了调用起来比较方便，很多场景下需要把所有参数都传给super。
     */
    function applySuper(name, args) {
        var SuperClass = this.constructor;
        var thisMethod = this[name];
        var method;

        // 向祖先找到第一个和thisMethod不一样的method
        // 如果不这么做，则可能导致死循环，例如：
        // 类A有方法f，
        // 类B继承类A，override方法f，f中有调用applySuper('f')，
        // 类C继承类B，没有override方法f，
        // 则类C的实例调用f时，死循环（因为applySuper中得到的super永远是B）。
        while (
            (SuperClass = SuperClass.prototype._superClass)
            && (method = SuperClass.prototype[name])
            && method === thisMethod
        ) {/*jshint noempty:false */}

        if (method) {
            return method.apply(this, args || []);
        }
        throw new Error('parent Class has no method named ' + name);
    }

    /**
     * 设置或得到本实例的私有属性。
     * 业务代码中一般不需要使用，只有如Component这样的基类中，
     * 为了避免子类覆盖父类的私有属性，所以用此方法建立私有的属性域。
     *
     * @protected
     * @final
     * @param {string} key 属性名
     * @param {*=} value 属性值，缺省则表示要获取属性值
     */
    function prop(key, value) {
        var privatePropArea = this[PRIVATE_AREA_KEY]
            || (this[PRIVATE_AREA_KEY] = {});

        return arguments.length > 1
            ? (privatePropArea[key] = value)
            : privatePropArea[key];
    }

    /**
     * 继承（泛化）生成子类
     *
     * @inner
     * @this {Class} 父类
     * @param {Object} prototype 子类的方法集合
     * @return {Class} 新的子类
     */
    function extend(prototype) {
        var SuperClass = this;
        var SubClass = exports.newClass(
            {_define: SuperClass.defineProperties}
        );
        var F = function () {};
        F.prototype = SuperClass.prototype;

        var newSubProto = SubClass.prototype = new F();

        attrCopy(SubClass.defineProperties, prototype._define);
        prototype._define = null;

        SubClass.implement(prototype);

        newSubProto._applySuper = applySuper;
        newSubProto._superClass = SuperClass;
        newSubProto.constructor = SubClass;

        return SubClass;
    }

    /**
     * 扩展类方法
     *
     * @inner
     * @this {Class} 要扩展的类
     * @param {Object} params 扩展的方法集
     * @return {Class} 扩展后的类
     */
    function implement(params) {
        return attrCopy(this.prototype, params);
    }

    /**
     * @inner
     */
    function attrCopy(target, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
        return target;
    }

    /**
     * @inner
     */
    function isFunction(o) {
        return Object.prototype.toString.call(o) === '[object Function]';
    }

    /**
     * 提供另一种非常简单的面向对象继承，适用于没有用前述newClass生成的类。
     * 父类的构造函数需要在子类的构造函数中手动调用，如：SuperClass.apply(this, arguments);
     * 会向SubClass.prototype挂_superClass和_applySuper
     *
     * @public
     * @param {Function} SubClass 子类
     * @param {Function} SuperClass 父类
     * @return {Function} SubClass
     */
    exports.simpleInherit = function (SubClass, SuperClass) {
        var oriSubProto = SubClass.prototype;
        var Clz = new Function(); // jshint ignore:line

        Clz.prototype = SuperClass.prototype;
        var newSubProto = SubClass.prototype = new Clz();

        attrCopy(newSubProto, oriSubProto);

        newSubProto._applySuper = applySuper;
        newSubProto._superClass = SuperClass;
        newSubProto.constructor = SubClass;

        return SubClass;
    };

    return exports;
});
