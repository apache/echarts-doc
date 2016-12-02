/**
 * API doc helper.
 */
define(function (require) {

    var hasher = require('hasher');
    var dtLib = require('dt/lib');

    /**
     * @public
     * @type {Object}
     */
    var helper = {};

    /**
     * @public
     */
    helper.initHash = function (parseHash) {
        hasher.prependHash = '';
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    };

    /**
     * @public
     * @param {string} hash 'asdf' 可以不包括'#'
     * @return {Object} {category: ..., queryString: ...}
     */
    helper.parseHash = function (hash) {
        dtLib.assert(hasher.isActive());
        var result = {};
        if (hash) {
            var regResult = /^#?(?:([^~]*)~)?(.*)$/.exec(hash);
            result.category = regResult[1];
            result.queryString = regResult[2];
        }
        return result;
    };

    /**
     * @public
     * @returns {Object} {category: ..., queryString: ...}
     */
    helper.getHashInfo = function () {
        return helper.parseHash(hasher.getHash());
    };

    /**
     * @public
     * @param {Object} options
     * @param {string=} [options.category] 为空则当前hash中此项保留
     * @param {string=} [options.queryString] 为空则当前hash中此项保留
     */
    helper.hashRoute = function (options) {
        dtLib.assert(hasher.isActive());
        var hashInfo = helper.getHashInfo();
        dtLib.assign(hashInfo, options);

        var hashString = '';
        if (hashInfo.category) {
            hashString += hashInfo.category + '~';
        }
        if (hashInfo.queryString) {
            hashString += hashInfo.queryString;
        }

        hasher.setHash(hashString);
    };

    return helper;
});
