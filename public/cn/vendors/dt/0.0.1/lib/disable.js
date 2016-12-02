/**
 * @file 全局的禁用、遮罩
 */

define(function (require) {

    var $ = require('jquery');

    var disable = {};

    var CSS_GLOBAL_MASK = 'dt-global-mask';
    var EVENT_NS = 'dtGlobalMask';

    // 保存所有的mask节点
    var elMasks = {};

    /**
     * 全局禁用
     *
     * @public
     * @param {boolean} dis 禁用或启用
     */
    disable.globalDisable = function (dis) {
        disable.globalMask(dis ? 0 : false);
    };

    /**
     * 全局遮罩
     *
     * @public
     * @param {(number=|boolean)} opacity 0到1之间的浮点数，默认是0.5，如果传入false则解除mask。
     * @param {string=} key 如果传此key，则意为实现此key专有的mask。缺省则表示使用默认的全局mask。
     * @param {string=} css 会以此赋以css class：CSS_GLOBAL_MASK + '-' + key（可用于设定特定的z-index）。
     * @param {Object=} eventHandlers key为eventName，value为handler。hide时handler会被清除。
     */
    disable.globalMask = function (opacity, key, css, eventHandlers) {
        var $elMask;

        if (opacity === false) {
            $elMask = getMaskEl(key);
            $elMask && $elMask.hide().off('.' + EVENT_NS);
        }
        else {
            if (opacity == null) {
                opacity = 0.5;
            }
            $elMask = getMaskEl(key, css, true);
            $elMask.css({opacity: opacity}).show();

            for (var eventName in eventHandlers) {
                if (eventHandlers.hasOwnProperty(eventName)) {
                    $elMask.on(eventName + '.' + EVENT_NS, eventHandlers[eventName]);
                }
            }
        }
    };

    /**
     * dispose全局遮罩
     *
     * @public
     * @param {string} key 指定要dispose的mask的key。
     */
    disable.disposeGlobalMask = function (key) {
        var $elMask = getMaskEl(key);
        $elMask && $elMask.off().remove();
    };

    function getMaskEl(key, css, createWhenNotExist) {
        key = key != null ? key : ''; // 默认key为''
        var $elMask = elMasks[key];

        if (!$elMask && createWhenNotExist) {
            var extraCss = css != null ? (CSS_GLOBAL_MASK + '-' + css) : '';
            $elMask = elMasks[key] = $(
                '<div class="' + CSS_GLOBAL_MASK + ' ' + extraCss + '"></div>'
            ).appendTo(document.body); // 前提是body的margin和padding为0
        }
        return $elMask;
    }

    return disable;

});
