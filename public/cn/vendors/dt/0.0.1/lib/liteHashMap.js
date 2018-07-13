define(function (require) {

    var base = require('./base');

    /**
     * @constructor
     * @param {Object} obj Only apply `ownProperty`.
     */
    function LiteHashMap(obj) {
        var thisMap = this;

        if (obj instanceof LiteHashMap) {
            obj.each(function (value, key) {
                thisMap.set(key, value);
            });
        }
        else if ($.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
                thisMap.set(obj[i], i);
            }
        }
        else if (obj) {
            base.objForEach(obj, function (key, value) {
                thisMap.set(key, value);
            });
        }
    }

    // Add prefix to avoid conflict with Object.prototype.

    LiteHashMap.prototype = {
        constructor: LiteHashMap,
        // Do not provide `has` method to avoid defining what is `has`.
        // (We usually treat `null` and `undefined` as the same, different
        // from ES6 Map).
        get: function (key) {
            return this.hasOwnProperty(key) ? this[key] : null;
        },
        set: function (key, value) {
            // Comparing with invocation chaining, `return value` is more commonly
            // used in this case: `var someVal = map.set('a', genVal());`
            return (this[key] = value);
        },
        // Although util.each can be performed on this hashMap directly, user
        // should not use the exposed keys, who are prefixed.
        each: function (cb, context) {
            context !== void 0 && (cb = $.proxy(cb, context));
            for (var key in this) {
                this.hasOwnProperty(key) && cb(this[key], key);
            }
        },
        // Do not use this method if performance sensitive.
        removeKey: function (key) {
            delete this[key];
        }
    };

    return {
        createLiteHashMap: function (obj) {
            return new LiteHashMap(obj);
        }
    };

});