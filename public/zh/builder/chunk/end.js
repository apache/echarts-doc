
var zrender = require('zrender');
zrender.tool = {
    color: require('zrender/tool/color'),
    math: require('zrender/tool/math'),
    util: require('zrender/tool/util'),
    vector: require('zrender/tool/vector'),
    area: require('zrender/tool/area'),
    event: require('zrender/tool/event')
}

zrender.animation = {
    Animation: require('zrender/animation/Animation'),
    Cip: require('zrender/animation/Clip'),
    easing: require('zrender/animation/easing')
}
var echarts = require('echarts');
echarts.config = require('echarts/config');

/** if: ${hasMap} */
echarts.util = {
    mapData: {
        params: require('echarts/util/mapData/params')
    }
}
/** /if */
/** for: ${charts} as ${chart} */
require("${chart}");
/** /for */
_global['echarts'] = echarts;
_global['zrender'] = zrender;

return echarts;

})(window);
