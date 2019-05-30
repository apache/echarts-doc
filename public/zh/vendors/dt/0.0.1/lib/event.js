/**
 * @file 事件
 *      主要来自大佛chris(wfsr@foxmail.com)的moye
 */
define(function (require) {

    var $ = require('jquery');

    var isFunction = $.isFunction;
    var inArray = $.inArray;

    /**
     * 使给定对象有事件能力
     *
     * @public
     * @param  {Object} obj 需要加事件能力的对象
     * @return {Object} 有事件能力的原对象
     */
    function enableEvent(obj) {
        return $.extend(obj, eventMethods);
    }

    var eventMethods = {

        /**
         * 添加事件绑定。用法：
         * xx.addEventListener('someType', someListener)
         * xx.addEventListener(someListener) // 表示type为'*'
         *
         * @public
         * @param {string=} type 事件类型。
         *                       如果为'*'，表示所有事件都会触发此listener。
         * @param {Function} listener 要添加绑定的监听器
         */
        addEventListener: function (type, listener) {
            if (isFunction(type)) {
                listener = type;
                type = '*';
            }

            this.__listeners = this.__listeners || {};
            var listeners = this.__listeners[type]
                || (this.__listeners[type] = []);

            if (inArray(listeners, listener) < 0) {
                listeners.push(listener);
            }

            return this;
        },


        /**
         * 解除事件绑定。用法：
         * xx.removeEventListener('someType', someListener)
         * xx.removeEventListener(someListener) // 表示type为'*'
         *
         * @public
         * @param {string=} type 事件类型
         * @param {Function} listener 要解除绑定的监听器
         */
        removeEventListener: function (type, listener) {
            if (isFunction(type)) {
                listener = type;
                type = '*';
            }

            this.__listeners = this.__listeners || {};
            var listeners = this.__listeners[type];

            if (listeners) {
                if (listener) {
                    var index = inArray(listeners, listener);

                    if (~index) {
                        delete listeners[index];
                    }
                }
                else {
                    listeners.length = 0;
                    delete this.__listeners[type];
                }
            }

            return this;
        },

        /**
         * 解除所有事件绑定
         *
         * @public
         */
        removeAllEventListener: function () {
            this.__listeners = [];
            return this;
        },

        /**
         * 触发指定事件
         *
         * @public
         * @param {string} type 事件类型
         * @param {Object} args 透传的事件数据对象
         */
        fire: function (type, args) {
            this.__listeners = this.__listeners || {};
            var listeners = this.__listeners[type];
            var me = this;

            if (listeners) {
                $.each(listeners, function (idx, listener) {
                    args = args || {};
                    args.type = type;
                    listener.call(me, args);
                });
            }

            if (type !== '*') {
                this.fire('*', args);
            }

            return this;
        }
    };

    return {enableEvent: enableEvent};
});
