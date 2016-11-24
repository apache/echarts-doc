## v3.3.2
<div class="time">2016-11-24</div>

+ [+] Add [graphic](http://echarts.baidu.com/option.html#graphic) in option, enable graphic configuration in option. See examples: <http://echarts.baidu.com/gallery/editor.html?c=line-y-category>, <http://echarts.baidu.com/gallery/editor.html?c=line-draggable> and <http://echarts.baidu.com/gallery/editor.html?c=map-province>.

+ [+] Add [visualMin](http://echarts.baidu.com/option.html#series-treemap.visualMin) and [visualMax](http://echarts.baidu.com/option.html#series-treemap.visualMax), and enhance capability of visual mapping in [treemap](http://echarts.baidu.com/option.html#series-treemap). See [#2509](https://github.com/ecomfe/echarts/issues/2509).

+ [+] Add [tooltip.confine](http://echarts.baidu.com/option.html#tooltip.confine), which can confine tooltip within contianer of echarts instance. It helps a lot in small screen, or in the situation that outer dom is set to be `overflow:hidden`.

+ [^] Fix that erroneously forbiden default pan behavior in touch device. See [#4393](https://github.com/ecomfe/echarts/issues/4393).

+ [^] Enhance user experience for [geo](http://echarts.baidu.com/option.html#geo) / [map](http://echarts.baidu.com/option.html#series-map) in touche device。

+ [^] Fix calculation error of [containPixel](http://echarts.baidu.com/api.html#echartsInstance.containPixel) in [geo](http://echarts.baidu.com/option.html#geo) / [graph](http://echarts.baidu.com/option.html#series-graph). See [#4405](https://github.com/ecomfe/echarts/issues/4405).

+ [^] Enhance gradient [visualMap](http://echarts.baidu.com/option.html#visualMap) for [line](http://echarts.baidu.com/option.html#series-line).

+ [^] Fix symbol mapping in [visualMap](http://echarts.baidu.com/option.html#visualMap).

+ [^] Enable [realtime](http://echarts.baidu.com/option.html#dataZoom.realtime) upating of label in [dataZoom](http://echarts.baidu.com/option.html#dataZoom). See [#4434](https://github.com/ecomfe/echarts/issues/4434).

+ [^] Fix highlight error in [dataZoom](http://echarts.baidu.com/option.html#dataZoom). See [#4475](https://github.com/ecomfe/echarts/issues/4475).

+ [^] Fix that can not save as image in MS Edge browser. See [#2451](https://github.com/ecomfe/echarts/issues/2451) and [#3586](https://github.com/ecomfe/echarts/issues/3586).

+ [^] Fix format problem for `'time'` axis in [tooltip](http://echarts.baidu.com/option.html#tooltip). See [#4398](https://github.com/ecomfe/echarts/issues/4398).

+ [^] Fix [grid.containLabel](http://echarts.baidu.com/option.html#grid.containLabel) not works for large fontSize. See [#3805](https://github.com/ecomfe/echarts/issues/3805).

+ [^] Fix `echarts.extendSeriesModel` error. See [#4397](https://github.com/ecomfe/echarts/issues/4397).

+ [^] Fix render error when `clockwise` is `false` and `minAngle` is used in [pie](http://echarts.baidu.com/option.html#series-pie). See [#4414](https://github.com/ecomfe/echarts/issues/4414).

+ [^] Fix erroneously rendering dot in [tooltip](http://echarts.baidu.com/option.html#tooltip) when using gradient color. See [#3994](https://github.com/ecomfe/echarts/issues/3994).


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

+ 【\+】add in radar chart, see [http://echarts.baidu.com/option.html#series-radar](http://echarts.baidu.com/option.html#series-radar)

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

+ [^] allow to customize toolbox toobar. See details in [toolbox.feature](http://echarts.baidu.com/option.html#toolbox.feature)

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

+ [^] optimization of line chart smooth, add in`smoothMonotone` configuration item, see details in [option.html#series-line.smoothMonotone](http://echarts.baidu.com/option.html#series-line.smoothMonotone), Fix [#2612](https://github.com/ecomfe/echarts/issues/2612)

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

+ [+] add [getOption](http://echarts.baidu.com/api.html#echartsInstance.getOption) and [clear](http://echarts.baidu.com/api.html#echartsInstance.clear) method

+ [^] fix average value, maximum value and minimum vaule label and the incapability to show correct value of tooltip. Fix [#2393](https://github.com/ecomfe/echarts/issues/2393)

+ [^] fix drawing incorrectness when bar chart  has bigger width than height, Fix [#2343](https://github.com/ecomfe/echarts/issues/2343)

+ [^] fix the function problem of legend `show` configuration item. Fix [#2371](https://github.com/ecomfe/echarts/issues/2371)

+ [^] map type can choose data attribute.

+ [^] fix average mark and mark calculation errors, Fix [#2367](https://github.com/ecomfe/echarts/issues/2367)

+ [^] animation optimization when line chart change from `'-'` no data to data.

+ [^] mouse wheel zoom direction change to ommonly used one.

+ [^] data area zoom tool in toolbar support specified axis, see detail in[toolbox document](http://echarts.baidu.com/option.html#toolbox.feature.dataZoom.yAxisIndex)

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