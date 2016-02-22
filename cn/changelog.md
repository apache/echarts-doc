## v3.1.0
<div class="time">2016-02-22</div>

+ 【\+】新加入 npm 渠道获取 echarts，详细见 [webpack + echarts 教程](./tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

+ [^] 修复动态 markPoint 和 markLine 异常的 bug。Fix [#2522](https://github.com/ecomfe/echarts/issues/2522)

+ [^] 修复 axis interval 回调参数错误的 bug。Fix [#2470](https://github.com/ecomfe/echarts/issues/2470)

+ [^] 修复 graph 中无法自定义每条边的 lineStyle 的 bug。Fix [#2558](https://github.com/ecomfe/echarts/issues/2558)

+ [^] toolbox 中 saveAsImage 支持 IE9+ 和 FireFox。

+ [^] 支持柱形圆角配置。[#2550](https://github.com/ecomfe/echarts/issues/2550)

+ [^] 修复 dataZoom 定位配置项错误的 bug。Fix [#2619](https://github.com/ecomfe/echarts/issues/2619)

+ [^] 修复多次`setOption`有可能出现`id duplicate`的错误。Fix [#2452](https://github.com/ecomfe/echarts/issues/2452)

+ [^] candlestick 和 boxplot 图支持 markPoint 和 markLine。Fix [#2566](https://github.com/ecomfe/echarts/issues/2566)

+ [^] 修复在非 merge 模式`setOption`之后再使用 toolbox 中的 reset 功能出错的 bug。Fix [#2596](https://github.com/ecomfe/echarts/issues/2596)

+ [^] 散点图以及 markPoint 支持在`emphasis`中配置`label`的`formatter`。Fix [#2596](https://github.com/ecomfe/echarts/issues/2596)

+ [^] Treemap 支持`roam`配置项。

+ [^] time 类型的坐标轴支持使用字符串格式的时间数据。

+ [^] 修复折线图和区域图无法切换的 bug 修复。Fix [#2625](https://github.com/ecomfe/echarts/issues/2625)

+ [^] 多系列柱状图 markPoint 的位置优化。Fix [#2623](https://github.com/ecomfe/echarts/issues/2623)

+ [^] 修复 init 时 theme 为字符串并且有 dataZoom 组件时的报错。Fix [#2619](https://github.com/ecomfe/echarts/issues/2619)

+ [^] legend 和 toolbox 支持通过 width 和 height 设置高宽并且自动换行。Fix [#2621](https://github.com/ecomfe/echarts/issues/2621)

+ [^] 折线图平滑优化，加入`smoothMonotone`配置项，详见 [option.html#series-line.smoothMonotone](option.html#series-line.smoothMonotone)，Fix [#2612](https://github.com/ecomfe/echarts/issues/2612)

+ [^] 修复 Surface 等带有触屏的电脑上无法触发鼠标事件的 bug，Fix [#2569](https://github.com/ecomfe/echarts/issues/2569)

## v3.0.2
<div class="time">2016-01-23</div>

+ [^] 修复散点图无法高亮的问题。

+ [^] 优化 tooltip 联动，Fix [#2445](https://github.com/ecomfe/echarts/issues/2445)

+ [^] inside 类型的 dataZoom 支持 zoomLock。

+ [^] 添加地图类型不存在的错误提示。

+ [^] 折线图图例开关的动画优化

+ [^] 修复图例无法动态添加的问题，Fix [#2457](https://github.com/ecomfe/echarts/issues/2457)

+ [^] 修复 timeline 无法配置 show 的问题。

+ [^] 修复 0 数据在 tooltip 中显示 undefined 的问题，Fix [#2463](https://github.com/ecomfe/echarts/issues/2463)

+ [^] 修复 dataZoom 缩略图显示不正确的问题，Fix [#2462](https://github.com/ecomfe/echarts/issues/2462)

+ [^] 修复坐标轴 `min` `max` 是字符串的问题，PR [#2481](https://github.com/ecomfe/echarts/pull/2481)


## v3.0.1
<div class="time">2016-01-18</div>

+ [+] 添加回 [getOption](./api.html#echartsInstance.getOption) 和 [clear](./api.html#echartsInstance.clear) 方法

+ [^] 修复平均值，最大值，最小值标注和标线的标签和 tooltip 无法显示正确值的问题，Fix [#2393](https://github.com/ecomfe/echarts/issues/2393)

+ [^] 修复柱状图在边框宽度大于高度的时候绘制不正确的问题，Fix [#2343](https://github.com/ecomfe/echarts/issues/2343)

+ [^] 修复图例的`show`配置项无法起作用的问题，Fix [#2371](https://github.com/ecomfe/echarts/issues/2371)

+ [^] 地图类型可选 data 属性。

+ [^] 修复平均值标线和标注计算错误，Fix [#2367](https://github.com/ecomfe/echarts/issues/2367)

+ [^] 折线图从`'-'`空数据变成有数据时的动画优化。

+ [^] 鼠标滚轮缩放方向改为常用的习惯方向。

+ [^] 工具栏中的数据区域缩放工具支持指定坐标轴，详见[ toolbox 文档](http://echarts.baidu.com/option.html#toolbox.feature.dataZoom.yAxisIndex)

+ [^] 时间轴上无数据的错误修复，数值轴无数据时的刻度从`[-1, 1]`改为`[0, 1]`

+ [^] 坐标轴 splitArea 绘制错误修复。

+ [^] 修复多个图表示例联动问题。Fix [#2391](https://github.com/ecomfe/echarts/issues/2391)

+ [^] 修复饼图的颜色是回调函数时 legend 上的颜色无法正确显示的问题。Fix [#2372](https://github.com/ecomfe/echarts/issues/2372)

+ [^] 修复饼图数据为 0 时候鼠标的 hover 错误。

+ [^] 饼图数据项都为 0 时扇区改为均匀分布。

+ [^] 修复 IE 8 下背景色设置的错误。

+ [^] 修复 tooltip 组件 dispose 中释放事件不正确的错误。



## v3.0.0
<div class="time">2016-01-12</div>

+ The new echarts