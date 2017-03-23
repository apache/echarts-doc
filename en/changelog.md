## v3.5.0
<div class="time">2017-03-23</div>

+ **[+] Published [calendar coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#calendar)** 参见 [示例](https://ecomfe.github.io/echarts-examples/public/index.html#calendar).

+ **[+] Published echarts statistics tools [echarts-stat](https://github.com/ecomfe/echarts-stat)**

+ **[+] Enhanced axis pointer** See examples: [link](https://ecomfe.github.io/echarts-examples/public/index.html#candlestick-brush), [mobile (touch device) 1](https://ecomfe.github.io/echarts-examples/public/index.html#line-tooltip-touch), [mobile (touch device) 2](https://ecomfe.github.io/echarts-examples/public/index.html#candlestick-touch), [analysis](https://ecomfe.github.io/echarts-examples/public/index.html#scatter-nutrients-matrix), [multiple Y axes](https://ecomfe.github.io/echarts-examples/public/index.html#multiple-y-axis), [multiple X axes](https://ecomfe.github.io/echarts-examples/public/index.html#multiple-x-axis). Supported and enhanced [#5040](https://github.com/ecomfe/echarts/issues/5040), [#5039](https://github.com/ecomfe/echarts/issues/5039), [#5102](https://github.com/ecomfe/echarts/issues/5102), [#5262](https://github.com/ecomfe/echarts/issues/5262), [#4905](https://github.com/ecomfe/echarts/issues/4905), [#4921](https://github.com/ecomfe/echarts/issues/4921), [#5091](https://github.com/ecomfe/echarts/issues/5091).

+ [+] Enhanced method `echarts.util.parseDate`, which have supported parsing different formats of data expression to UTC time. See [time in series.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.data)

+ [^] Enhanced processing of geoJSON.

+ [^] Fixed that [toolbox.feature.dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature.dataZoom) can not control multiple x axes. See [#4896](https://github.com/ecomfe/echarts/issues/4896).

+ [^] Fixed the default extent of category axis in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#5226](https://github.com/ecomfe/echarts/issues/5226).

+ [^] Fixed function name of "disConnect". See [#5208](https://github.com/ecomfe/echarts/issues/5208).

+ [^] Remove incorrect warning specifying `width,height` when initialize echart. See [#4569](https://github.com/ecomfe/echarts/issues/4569).

+ [^] Fixed that tooltip in [gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.gauge) do not support percentage. See [#4347](https://github.com/ecomfe/echarts/issues/4347) and [#4332](https://github.com/ecomfe/echarts/pull/4332).

+ [^] Fixed the behavior when pointer color is 'auto' in [gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.gauge). See [#5109](https://github.com/ecomfe/echarts/issues/5109).

+ [^] Fixed the problem when [series-gauge.pointer.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.pointer.show) is `false`. See [#4944](https://github.com/ecomfe/echarts/issues/4944).

+ Fixed the initialization of series-treemap.data is incorrect in one case.

+ Fixed the style of [toolbox](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox). See [#3591](https://github.com/ecomfe/echarts/issues/3591).

+ Enhanced the behavior of [brush](https://ecomfe.github.io/echarts-doc/public/en/option.html#brush) on category axis.

+ [^] Fixed that visualMap is abnormal when some item of [visualMap-piecewise.categories](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise.categories) is numberic string. See [#4960](https://github.com/ecomfe/echarts/issues/4960).



## v3.4.0
<div class="time">2017-01-12</div>

+ **[+] Published `pictorialBar` chart：[pictorialBar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pictorialBar)。See [example](https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-pictorialBar)。**

+ **[+] Published `themeRiver` chart：[themeRiver](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-themeRiver)。See [example](https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-themeRiver)。**

+ [+] A specified [geo coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) has been able to be used in [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map). (In the past map series could only creat an inner exclusive geo coodinate system). Thus, [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) can be used to control color of a geo component. Moreover, a geo coordinate system can be shared among [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) and other series, like [scatter series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter). See [series-map.geoIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.geoIndex).

+ [+] Added [focusNodeAdjacency action](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.graph.focusNodeAdjacency), which enables trigger adjacent highlight of [graph](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-geo) through API.

+ [+] Added [series-pie.animationType](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.animationType), which enables more animation effects.

+ [+] Callback function have been supported in [animationDuration](https://ecomfe.github.io/echarts-doc/public/en/option.html#animationDuration), which enables different animation duration of data items.

+ [+] [min](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.min) and [max](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.max) have been supported in [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type).

+ [+] [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type) has been changed to show all categories by default, in spite of whether there is data in categories. In the past, categories in the end that has no data will not be displayed.

+ [+] When using [singleAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#singleAxis), `series.data` has supported one-dimension array, like `[11, 23, 44]`.

+ [+] [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom) has supported [singleAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#singleAxis).

+ [+] Exposed throttle util method: `chart.util.throttle`.

+ [+] [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick) has supported [barWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barWidth), [barMinWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barMinWidth) and [barMaxWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barMaxWidth). See [#4783](https://github.com/ecomfe/echarts/issues/4783).

+ [+] [lines chart](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines) has supported [symbol](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.symbol), [symbolSize](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.symbolSize).

+ [+] Added support for show end text and data label at the same time in [visualMap-piecewise](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise). See [visualMap-piecewise.showLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise.showLabel), and See [#4845](https://github.com/ecomfe/echarts/issues/4845).

+ [+] When using [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) to control a series, it has supported that some data items escape from the control by visualMap, but use its series visual settings (color, symbol, ...). See the paragraph of `Configure mapping` in [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap).

+ [^] Enhanced the effect of [grid (cartesian)](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid) when on data displayed.

+ [^] Added parameter `dataIndex` in [showTip event](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip).

+ [^] Fixed vulnerability about XSS in tooltip. See [#4769](https://github.com/ecomfe/echarts/issues/4769).

+ [^] Fixed that some attributes did not work in [series-graph.edgeLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.edgeLabel). See [#4555](https://github.com/ecomfe/echarts/issues/4555).

+ [^] Fixed tick render problem when `min` `max` is `stirng` in [series-gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge). See [#4617](https://github.com/ecomfe/echarts/issues/4617).

+ [^] Fixed [series-gauge.pointer.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.pointer.show) problem. See [#4618](https://github.com/ecomfe/echarts/issues/4618).

+ [^] Fixed [series-radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar) render error in a case that no data exists.

+ [^] Fixed [markArea.label.normal.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.markArea.label.normal.show) problem. See [#4723](https://github.com/ecomfe/echarts/issues/4723).

+ [^] Enhanced the process when data is equals or less then zero in [log axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis.type). See [#4743](https://github.com/ecomfe/echarts/issues/4743) and [#3161](https://github.com/ecomfe/echarts/issues/3161).


## v3.3.2
<div class="time">2016-11-24</div>

+ [+] **Add [graphic](https://ecomfe.github.io/echarts-doc/public/en/option.html#graphic) in option, enable graphic configuration in option. See examples: <http://echarts.baidu.com/gallery/editor.html?c=line-y-category>, <http://echarts.baidu.com/gallery/editor.html?c=line-draggable> and <http://echarts.baidu.com/gallery/editor.html?c=map-province>.**

+ [+] Add [visualMin](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.visualMin) and [visualMax](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.visualMax), and enhance capability of visual mapping in [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap). See [#2509](https://github.com/ecomfe/echarts/issues/2509).

+ [+] Add [tooltip.confine](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.confine), which can confine tooltip within contianer of echarts instance. It helps a lot in small screen, or in the situation that outer dom is set to be `overflow:hidden`.

+ [^] Fix that erroneously forbiden default pan behavior in touch device. See [#4393](https://github.com/ecomfe/echarts/issues/4393).

+ [^] Enhance user experience for [geo](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) / [map](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) in touche device。

+ [^] Fix calculation error of [containPixel](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.containPixel) in [geo](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) / [graph](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph). See [#4405](https://github.com/ecomfe/echarts/issues/4405).

+ [^] Enhance gradient [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) for [line](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line).

+ [^] Fix symbol mapping in [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap).

+ [^] Enable [realtime](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom.realtime) upating of label in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#4434](https://github.com/ecomfe/echarts/issues/4434).

+ [^] Fix highlight error in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#4475](https://github.com/ecomfe/echarts/issues/4475).

+ [^] Fix that can not save as image in MS Edge browser. See [#2451](https://github.com/ecomfe/echarts/issues/2451) and [#3586](https://github.com/ecomfe/echarts/issues/3586).

+ [^] Fix format problem for `'time'` axis in [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip). See [#4398](https://github.com/ecomfe/echarts/issues/4398).

+ [^] Fix [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip) may not show bug when first series have null data.

+ [^] Fix [grid.containLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid.containLabel) not works for large fontSize. See [#3805](https://github.com/ecomfe/echarts/issues/3805).

+ [^] Fix `echarts.extendSeriesModel` error. See [#4397](https://github.com/ecomfe/echarts/issues/4397).

+ [^] Fix render error when `clockwise` is `false` and `minAngle` is used in [pie](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie). See [#4414](https://github.com/ecomfe/echarts/issues/4414).

+ [^] Fix erroneously rendering dot in [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip) when using gradient color. See [#3994](https://github.com/ecomfe/echarts/issues/3994).


## v3.3.1
<div class="time">2016-11-03</div>


## v3.3.0
<div class="time">2016-11-01</div>


## v3.2.3
<div class="time">2016-08-16</div>


## v3.2.2
<div class="time">2016-07-11</div>


## v3.2.1
<div class="time">2016-07-04</div>


## v3.2.0
<div class="time">2016-06-30</div>


## v3.1.10
<div class="time">2016-05-19</div>


## v3.1.9
<div class="time">2016-05-12</div>


## v3.1.8
<div class="time">2016-05-11</div>


## v3.1.7
<div class="time">2016-04-21</div>


## v3.1.6
<div class="time">2016-04-11</div>


## v3.1.5
<div class="time">2016-03-29</div>


## v3.1.4
<div class="time">2016-03-21</div>


## v3.1.3
<div class="time">2016-03-10</div>

+ 【\+】add in radar chart, see [https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar)

+ [^] position optimization of average, minimum and maximum value starting point and finishing point. Fix [#2762](https://github.com/ecomfe/echarts/issues/2762), [#2688](https://github.com/ecomfe/echarts/issues/2688).

+ [^] fix the only one configuration for ''none'' bug in markLine symbol. See [#2733](https://github.com/ecomfe/echarts/issues/2733)

+ [^]optimization of vertically centered multiple yext lines.

+ [^] emphasis configuration item of label in data item as pie chart is normal value by dafualt.

+ [^] when introdcued on need, line chart, pie chart and scatter chart introduce grid component by dafault to avoid problems in[#2758](https://github.com/ecomfe/echarts/issues/2758).

+ [^] fix floating point precision bug in dataZoom component. Fix [#2757](https://github.com/ecomfe/echarts/issues/2757)

+ [^] unselected legend chart is grey. See [#2615](https://github.com/ecomfe/echarts/issues/2615)

+ [^] fix  dataZoom position failure bug in media query of 3.1.1. Fix [#2710](https://github.com/ecomfe/echarts/issues/2710)

+ [^] fix firefox's incapability of triggering wheel events bug in 3.1.1 中. Fix [#2730](https://github.com/ecomfe/echarts/issues/2730)

+ [^] IE8 optimization.

+ [^] change to webpack to build code.


## v3.1.2
<div class="time">2016-03-01</div>

+ 【\+】provide theme download,see details in [http://echarts.baidu.com/download-theme.html](http://echarts.baidu.com/download-theme.html)

+ [^] fix `the bug that update data can not be shown in `setOption` after emptying line chart data in v3.1.1.

+ [^] fix possiblity of reporting `id duplicates` error in `setOption(chart.getOption())` . Fix [#2635](https://github.com/ecomfe/echarts/issues/2635)

+ [^] allow to customize toolbox toobar. See details in [toolbox.feature](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature)

+ [^] scale optimization of `'time'` type axis in large-span time range.

+ [^] fix no show of label formatter return to  0.Fix [#2659](https://github.com/ecomfe/echarts/issues/2659)

+ [^] fix markPoint label display error in charts with vertical axis as category axis.Fix [#2641](https://github.com/ecomfe/echarts/issues/2641)

+ [^] optimize dataZoom, fix dynamic data update problem in dataZoom chart. Fix [#2667](https://github.com/ecomfe/echarts/issues/2667)

+ [^] percentage is 0 rather than NaN when all pie chart data are zero. Fix [#2690](https://github.com/ecomfe/echarts/issues/2667)

+ [^] title alignment optimization.

+ [^] support display of tooltip when charts update. Fix [#2478](https://github.com/ecomfe/echarts/issues/2478)

+ [^] dashboard `splitLine.length`, `axisTick.length` supports percentage.

+ [^] optimization of line animation feature.

+ [^] optimization of category axis feature of large data amount .

+ [^] fix error reporting bug of markPoint and markLine in IE8.

+ [^] fix error reporting bug under `'use strict'`model. Fix [#2643](https://github.com/ecomfe/echarts/issues/2643)


## v3.1.1
<div class="time">2016-02-22</div>

+ 【\+】newly add npm channel to obtain echarts, see details in [webpack + echarts tutorial](http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

+ [^] fix abnormal indynamic markPoint and markLine . Fix [#2522](https://github.com/ecomfe/echarts/issues/2522)

+ [^] fix parameter error in axis interval callback. Fix [#2470](https://github.com/ecomfe/echarts/issues/2470)

+ [^] fix failure in customizing lineStyle of every edge in graph. Fix [#2558](https://github.com/ecomfe/echarts/issues/2558)

+ [^] saveAsImage supports IE9+ and FireFox in toolbox.

+ [^] support cylindrical corner configuration. [#2550](https://github.com/ecomfe/echarts/issues/2550)

+ [^] fix error in dataZoom location configuration item. Fix [#2619](https://github.com/ecomfe/echarts/issues/2619)

+ [^] fix possible `id duplicate` error when fix `setOption` for too many times.Fix [#2452](https://github.com/ecomfe/echarts/issues/2452)

+ [^] candlestick and boxplot chart support markPoint and markLine.Fix [#2566](https://github.com/ecomfe/echarts/issues/2566)

+ [^] fix reset error in toolbox after use `setOption` in non-merge model.Fix [#2596](https://github.com/ecomfe/echarts/issues/2596)

+ [^] scatter chart and markPoint support configurating `label` `formatter` in `emphasis`. Fix [#2596](https://github.com/ecomfe/echarts/issues/2596)

+ [^] Treemap supports `roam` configuration item.

+ [^] axis of time type support time data of string format.

+ [^] fix switch problem in Line and area charts. Fix [#2625](https://github.com/ecomfe/echarts/issues/2625)

+ [^] location optimization of multiple series of bar chart markPoint. Fix [#2623](https://github.com/ecomfe/echarts/issues/2623)

+ [^] fix error reporting in init when theme is string and has dataZoom component. Fix [#2619](https://github.com/ecomfe/echarts/issues/2619)

+ [^] legend and toolbox support setting height and width and wrap automatically through width and height.Fix [#2621](https://github.com/ecomfe/echarts/issues/2621)

+ [^] optimization of line chart smooth, add in`smoothMonotone` configuration item, see details in [option.html#series-line.smoothMonotone](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.smoothMonotone), Fix [#2612](https://github.com/ecomfe/echarts/issues/2612)

+ [^] fix incapability to trigger mouse events on computers with touch screen like Surface and so on. Fix [#2569](https://github.com/ecomfe/echarts/issues/2569)

## v3.0.2
<div class="time">2016-01-23</div>

+ [^] fix highlight failture in scatter chart.

+ [^] optimize tooltip linkage. Fix [#2445](https://github.com/ecomfe/echarts/issues/2445)

+ [^] dataZoom of inside type support zoomLock.

+ [^] add error alert of non-exist map type.

+ [^] optimize legend switch animation of line chart.

+ [^] fix problem about Legends cannot be added dynamically. Fix [#2457](https://github.com/ecomfe/echarts/issues/2457)

+ [^] fix timeline's incapability to configutate show.

+ [^] fix 0 data shown as undefined in tooltip .Fix [#2463](https://github.com/ecomfe/echarts/issues/2463)

+ [^] fix incorrect display of dataZoom zoom graphic. Fix [#2462](https://github.com/ecomfe/echarts/issues/2462)

+ [^] fix the problem of axis `min` `max` as string, PR [#2481](https://github.com/ecomfe/echarts/pull/2481)

## v3.0.1
<div class="time">2016-01-18</div>

+ [+] add [getOption](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.getOption) and [clear](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.clear) method

+ [^] fix average value, maximum value and minimum vaule label and the incapability to show correct value of tooltip. Fix [#2393](https://github.com/ecomfe/echarts/issues/2393)

+ [^] fix drawing incorrectness when bar chart  has bigger width than height, Fix [#2343](https://github.com/ecomfe/echarts/issues/2343)

+ [^] fix the function problem of legend `show` configuration item. Fix [#2371](https://github.com/ecomfe/echarts/issues/2371)

+ [^] map type can choose data attribute.

+ [^] fix average mark and mark calculation errors, Fix [#2367](https://github.com/ecomfe/echarts/issues/2367)

+ [^] animation optimization when line chart change from `'-'` no data to data.

+ [^] mouse wheel zoom direction change to ommonly used one.

+ [^] data area zoom tool in toolbar support specified axis, see detail in[toolbox document](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature.dataZoom.yAxisIndex)

+ [^] fix no data error on timeline, scale change from `[-1, 1]` to `[0, 1]` when data value axis has no data.

+ [^] fix drawing error of axis splitArea.

+ [^] fix multiple chart example linkage problem. Fix [#2391](https://github.com/ecomfe/echarts/issues/2391)

+ [^] fix the problem that color on legend cannot display correctly with pie chart color being callback function. Fix [#2372](https://github.com/ecomfe/echarts/issues/2372)

+ [^] fix mouse hover errors when pie chart data is 0.

+ [^] when all pie chart data are 0, secotrs changed to uniform distribution.

+ [^] fix errors in background seeting under IE 8.

+ [^] fix incorrect release event in tooltip component dispose.



## v3.0.0
<div class="time">2016-01-12</div>

+ The new echarts