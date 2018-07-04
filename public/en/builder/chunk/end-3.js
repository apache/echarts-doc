var echarts = require('echarts');

echarts.graphic = require('echarts/util/graphic');
echarts.number = require('echarts/util/number');
echarts.format = require('echarts/util/format');

/** for: ${charts} as ${chart} */
require('${chart}');
/** /for */
/** for: ${components} as ${component} */
require('${component}');
/** /for */

/** if: ${vml} */
require('zrender/vml/vml');
/** /if */

return echarts;
}));