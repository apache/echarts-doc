/**
 * @file Common util methods.
 */
define(function (require) {

    var lib = {
        Set: require('./lib/Set')
    };

    extend(
        lib,

        // helpers
        require('./lib/base'),
        require('./lib/json'),
        require('./lib/dataDriven'),
        require('./lib/objectAccess'),
        require('./lib/objectOriented'),
        require('./lib/model'),
        require('./lib/event'),
        require('./lib/enumeration'),
        require('./lib/disable'),
        require('./lib/number'),
        require('./lib/throttle'),
        require('./lib/htmlCleaner'),
        require('./lib/codeStringify'),
        require('./lib/others'),
        require('./lib/liteHashMap'),
        require('./ui/tooltip')
    );

    /**
     * @inner
     * @throws {Error} If key duplicate
     */
    function extend(target) {
        for (var i = 1, len = arguments.length; i < len; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    if (target[key]) {
                        // Check duplicate
                        throw new Error('Duplicate key: ' + key);
                    }
                    target[key] = source[key];
                }
            }
        }

        return target;
    }

    return lib;
});
