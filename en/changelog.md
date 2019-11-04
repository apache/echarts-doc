## v4.5.0
<div class="time"></div>

+ [Feature] Add `roundCap` option for round corners on `bar` series width `polar` coordinate system. [#11393](https://github.com/apache/incubator-echarts/pull/11393) ([Wenli Zhang](https://github.com/Ovilia))

+ [Feature] Add event `brushEnd` for `brush` component [#11285](https://github.com/apache/incubator-echarts/pull/11285)([Jian Cui](https://github.com/cuijian-dexter))

+ [Feature] Add `friction` option in force layout of `graph`. [#11276](https://github.com/apache/incubator-echarts/pull/11276) ([Yi Shen](https://github.com/pissang))

+ [Feature] Add `ignoreFoceLayout` option in the `graph` links. [#11445](https://github.com/apache/incubator-echarts/pull/11445) ([TYzzt](https://github.com/TYzzt))

+ [Feature] Add `axisType` in the indicator of `radar` series. [#11324](https://github.com/apache/incubator-echarts/pull/11324)([zifix](https://github.com/zifix))


+ [Feature] Add `clip` option in `candllestick` series. [#11529](https://github.com/apache/incubator-echarts/pull/11529) ([Yi Shen](https://github.com/pissang))

+ [Fix] Fix lots of label positioning issues in SVG renderer. [ecomfe/zrender#519](https://github.com/ecomfe/zrender/pull/519) ([Shuang Su](https://github.com/100pah))

+ [Fix] Fix interval issues related to category axis tick. Like `areaStyle.color` is incorrect in [#10948](https://github.com/apache/incubator-echarts/issues/10948), `xAxis.axisTick.interval` is calculated incorrectly in [#11176](https://github.com/apache/incubator-echarts/pull/11176) . [#11186](https://github.com/apache/incubator-echarts/pull/11186) ([foolzhang](https://github.com/foolzhang))

+ [Fix] Fix tooltip may be covered by the canvas when `-webkit-overflow-scrolling: touch` on iOS 13. [ecomfe/zrender#522](https://github.com/ecomfe/zrender/pull/522) ([Shuang Su](https://github.com/100pah))

+ [Fix] Fix some of labels on category axis may disappear forever after chart resized. [#11536](https://github.com/apache/incubator-echarts/pull/11536) ([Shuang Su](https://github.com/100pah))

+ [Fix] Fix brush drag gets stuck when the mouse leaves the chart area. [#11516](https://github.com/apache/incubator-echarts/pull/11516) ([Shuang Su](https://github.com/100pah))

+ [Fix] Fix image symbol may disappear forever after legend toggled. [#11515](https://github.com/apache/incubator-echarts/pull/11515) ([Feng Yu](https://github.com/yufeng04))

+ [Fix] Fix changing from `'scroll'` type to `'plain'` type not work bug in legend. [#11504](https://github.com/apache/incubator-echarts/pull/11504) ([Feng Yu](https://github.com/yufeng04))

+ [Fix] Optimize bar layout on `time` axis and `value` axis.[#11479](https://github.com/apache/incubator-echarts/pull/11479) ([Wenli Zhang](https://github.com/Ovilia))

+ [Fix] Fix title on toolbox icon may be cut by the container. [#11456](https://github.com/apache/incubator-echarts/pull/11456) ([Wenli Zhang](https://github.com/Ovilia))

+ [Fix] Fix precision issue in the ticks calculating. [#11488](https://github.com/apache/incubator-echarts/pull/11488) ([Wenli Zhang](https://github.com/Ovilia))

+ [Fix] Fix `rotate` property of label not work in `tree` series. [#11457](https://github.com/apache/incubator-echarts/pull/11457) ([Deqing Li](https://github.com/apache/incubator-echarts/pull/11457))

+ [Fix] Fix edge won't disappear after collapsed if the `id` is duplicated in `tree` series. [#11447](https://github.com/apache/incubator-echarts/pull/11447) ([Deqing Li](https://github.com/apache/incubator-echarts/pull/11457))

+ [Fix] Fix data disappear when updating with `dataset` in `gauge` series. [#11373](https://github.com/apache/incubator-echarts/pull/11373) ([Wenli Zhang](https://github.com/Ovilia))

+ [Fix] Fix gradient on bar leaked to label in SVG Renderer. ([Wenli Zhang](https://github.com/Ovilia))


## v4.4.0

<div class="time">2019-09-29</div>

+ [Feature] Add option `clip` for `line`, `bar`, `lines`, `scatter` and `custom series`,
which prevents the shapes overflow the area of the coordinate system. And support setting
`filterMode` on `toolbox.dataZoom`. Fix #9200, #10224, #10748, #11086.

+ [Feature] Support "select all" and "reverse select" buttons in `legend`. See `legend.selector` for details.

+ [Feature] Provide `echarts.graphic.registerShape` and `echarts.graphic.getShapeClass`.
The registered shape classes can be used in `custom series` and `graphic component`.

+ [Feature] Support show border style on `legend` item. Support setting `itemStyle` on `legend`. Fix #7340.

+ [Feature] Support expansion animation for data update, support `pie-series.animationTypeUpdate`. Fix #11029.

+ [Feature] Support setting `rippleEffect.color` in `effectScatter`.

+ [Feature] Support using BaiduMap API version 3.0 in bmap by option `bmap.mapStyleV2`.

+ [Fix] Fix that the stacked bar exceed zoom limit.
Fix #7534, #7672, #7732, #7872, #8069, #8520, #8935, #8955, #9200, #9237, #9847, #10359, #10518, #10972.

+ [Fix] Fix that sometimes when using "toolbox dataZoom" it can not return to the original state. Fix #11055.

+ [Fix] Fix the texture pattern rendering in `map` and `geo`. And Fix that the the shadow of them are different between canvas renderer and SVG renderer. Fix #11055, #5429.

+ [Fix] Fix that data does not rendered after a `NaN` value in candlestick. Fix #11101.

+ [Fix] Fix `geo.label.formatter` does not work. Fix #8489.

+ [Fix] Fix the hover style incorrect in `custom series`. Fix #11103.

+ [Fix] Fix that tree root node disappears after roaming. Fix #10291, #10986, #10164, #9580, #9256, #9216.

+ [Fix] Fix that SVG renderer should render normally despite hover layer set. Fix #11054.

+ [Fix] Add dispose checking for chart instance.



## v4.3.0

<div class="time">2019-08-27</div>

+ [Feature] Sankey diagram enhancement:
Add left/right node align, right in sankey diagram.
Support user to specify the depth of the node.
Enhance sankey node tooltip formatter.
Add depth layout info for each node.

+ [Feature] Support callback in `series.symbol`. Contributed by PR #9664 originally.

+ [Feature] Enhance Pie chart:
Support `minShowLabelAngle`. Contributed by PR #8997 originally.
Support label rotate in pie chart. Fix #10045.

+ [Feature] Support `backgroundColor` for connected charts in toolbox. `toolbox.feature.saveAsImage.connectedBackgroundColor` can be used to set the background color. Fix #10099.

+ [Feature] Enhance toolbox:
Enable to set text style of toolbox.
Support tooltip for toolbox. Fix #10202.

+ [Feature] Enhance dataZoom:
Normalize illegal range setting and get accurate `start`/`end`/`startValue`/`endValue` in `'dataZoom'` event.

+ [Feature] Add `dimensionNames` and `encode` info to callback parameters of formatters. Fix #10248 and Close #10250.

+ [Feature] Funnel enhancement:
`series.label.position` support to set `rightTop`, `rightBottom`, `leftTop`, `leftBottom`. And fix style in funnel text position.

+ [Fix] Support mouse event in iOS when css transform used. Fix #9434, #8326, #5009, #5921.

+ [Fix] Use a clearer warning message when initing dom without size. Fix #10478.

+ [Fix] Fix that the rgba opacity does not work in SVG renderer. Fix #9014

+ [Fix] Enhance funnel chart label display policy PR #8759

+ [Fix] Fix the highlight/downplay of pie graphic.

+ [Fix] Fix the mouse pointer in force graph. Fix #7764, contributed by PR #9134.

+ [Fix] Fix that `symbol` and `symbolSize` and `opacity` does not work in `series[i]-graph.categories[i]`. Fix #8009 and #5969, contributed by PR #9171.

+ [Fix] Fix that `axisLine.show` does not work in the gauge. Fix #9194, contributed by PR #9195.

+ [Fix] Fix a display error when the first data item is '-' in radar. Fix 8962.

+ [Fix] Fix polygon rendering bug when the first value is `NaN`. Fix #8962, contributed by PR #9162.

+ [Fix] Fix text truncate bug in treemap when using SVG renderer.

+ [Fix] Fix that `label.rotate` does not work in graph. Fix #9182, contributed by PR #9210.

+ [Fix] Fix the rich content hiding bug and confine bug in tooltip. Fix ecomfe/echarts-for-weixin#360, ecomfe/echarts-for-weixin#347.

+ [Fix] Fix that callback function params.color is incorrect in sunburst area. Fix #8952, contributed by PR #9238.

+ [Fix] Fix that when `axisLabel.interval` of a category axis is set as `0`, all labels are displayed regardless of overlap. Fix #9589.

+ [Fix] Fix sub-pixel in markLine. Move subPixelOptimize to zrender. Fix #9598.

+ [Fix] Fix that when doing clear on click handler error is thrown. Fix #9649.

+ [Fix] Fix that `false` value in data items effect subsequent items in `visualMap`. Fix #8799.

+ [Fix] Enhance `hoverStyle` and `highlight`/`downplay` API. Support keep highlighted when changing style (e.g., `setOption` or `hoverLink`). Fix the highlight conflict.

+ [Fix] Fix radar line disappear on hover when there is empty value in data.

+ [Fix] Fix that geo map panning not working on Edge browser. Fix #9479.

+ [Fix] Fix map label bugs:
Fix map rich label missing when missing data.
Fix map label miss to enter formatter when missing data.
Fix #9682.

+ [Fix] Enable `triggerEvent` for label of `angleAxis`. Fix #9765.

+ [Fix] Fix that the hover style bugs of graph:
Fix that the hover style is disabled by `focusNodeAdjacency` in graph.
Fix that the line label can not be returned to its original opacity after `"focusNodeAdjacency"`.

+ [Fix] Lift the axis line arrow over splitLine and tick.

+ [Fix] Fix that the scrollable legend pager does not work when the target index is illegal. Fix #7568.

+ [Fix] Exclude padding from tooltip position, since it's included in clientWidth. Contributed by PR #9750.

+ [Fix] Fix `barWidth` calculation when stack on multiple polars. Fix #9626.

+ [Fix] Loop to find the first non-NaN angle for clipPath in pie.

+ [Fix] Fix line width in singleAxis. Fix #9965.

+ [Fix] Fix the label bounding rect calculation error when `rich` used (e.g., containLabel: true while axisLabel has rich).

+ [Fix] Part of emphasis in sunburst do not work. Fix #9563, constributed by PR #9993.

+ [Fix] Add `seriesId` in `pieselectchanged`. Fix #9830.

+ [Fix] Fix that axis name align does not work. Fix #9901.

+ [Fix] Fix taht the strange label position when the pie chart series data value is `null`. Fix #10088.

+ [Fix] Do not create an anchor element if you don't need to in `SaveAsImage`. Contributed by PR #10132.

+ [Fix] Fix that `axisLabel` dost not display correctly in radar. Fix #9282, contributed by PR #10036.

+ [Fix] Fix that bar chart is abnormal when `filterMode` of `dataZoom` is 'empty'. Fix #9882.

+ [Fix] Fix `series.label.formatter` callback bug. Fix #10248, contributed by PR #10250.

+ [Fix] Fix that the last axis labels are duplicated. Fix #10304.

+ [Fix] Fix that setting `emphasis.lineStyle.type` as `solid` dose not work. Fix #9704, close #10129.

+ [Fix] Fix that if some negetive numbers or strings existing in the dimensions array, the corresponding line will not show. Fix #10343.

+ [Fix] Fix that when `'0'` existing in dimentions the chart do not work. Make backward compat when dimention is a number-like string. Fix #9363, contributed by PR #9388.

+ [Fix] Fix hover style on `textStroke` bug in custom series.

+ [Fix] Fix graph bug when data is number typed. Fix #10485.

+ [Fix] Fix that `axisPointer` label padding does not work. Fix #10569.

+ [Fix] Add `dimIndex` for callback formatter in radar. Close #10403, #10180, contributed PR #10437.

+ [Fix] Prevent treamap from using hover layer by default. Fix #10521. Ref #10635.

+ [Fix] Update pointer when type is none. Fix #10570.

+ [Fix] Enhance circular layout: based on symbol size and fix overlap when some value are very smaller than the max value. Fix #10462, Close #10615.

+ [Fix] Support click and tooltip in bar large mode. Fix #10699.





## v4.2.1

<div class="time">2019-03-21</div>

+ [Fix] Fix text cache problem. See [#9190](https://github.com/apache/incubator-echarts/issues/9190), [#9597](https://github.com/apache/incubator-echarts/issues/9597), [#9762](https://github.com/apache/incubator-echarts/issues/9762).

+ [Fix] Fix that in some case re-`setOption` in event handler throws error. See [#9649](https://github.com/apache/incubator-echarts/issues/9649).

+ [Fix] Fix that geo region problem causes `showTip` abnormal. See [#9156](https://github.com/apache/incubator-echarts/issues/9156).

+ [Fix] Fix that stacked bars are over cartesian in some cases. See [#9346](https://github.com/apache/incubator-echarts/issues/9346).

+ [Fix] Fix that legend is not able to scroll when the space is not enough to contain one item. See [#6743](https://github.com/apache/incubator-echarts/issues/6743), [#8971](https://github.com/apache/incubator-echarts/issues/8971), [#9471](https://github.com/apache/incubator-echarts/issues/9471).

+ [Fix] Fix that the centered pie label might has some bias on some angles. See [#9657](https://github.com/apache/incubator-echarts/issues/9657).

+ [Fix] Fix that Geo map panning is not working on MS Edge browser See [#9479](https://github.com/apache/incubator-echarts/issues/9479).

+ [Fix] Fix that label dispaly problem in map series. See [#9682](https://github.com/apache/incubator-echarts/issues/9682).

+ [Fix] Fix that `visualMap: false` set on data items makes subsequent items abnormal. See [#8799](https://github.com/apache/incubator-echarts/issues/8799).

+ [Fix] When `axisLabel.interval` of a category axis is set as `0`, all labels show regardless of overlap. See [#9589](https://github.com/apache/incubator-echarts/issues/9589).

+ [Fix] Fix grid(cartesian) did not render when both containLabel and axisLabel.rich used.

+ [Fix] Fix license statement.

+ [Fix] Fix rich text boundingRect bug.



## v4.2.0.rc2

<div class="time">2018-10-15</div>

Recovery build

Fix the problem that bar progressive was blocked.


## v4.2.0.rc1

<div class="time">2018-09-11</div>

+ **[Feature] Support non-html tooltip**, which enable show tooltip on non-html environment, for example, WeChat Mini App. Use [tooltip.renderMode](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.renderMode) to enable this feature.

+ **[Feature] Support event filtering**, which enable listen event triggered by specified component, series, data items. See [chart.on](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.on) for details, where a new parameter `query` provided this feature. Support event listening for [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom) and [graphic component](https://ecomfe.github.io/echarts-doc/public/en/option.html#graphic.triggerEvent), where specified events from the specified graphic elements can be listened by the `query`.

+ **[Feature] Enable implementing scroll bar** by dataZoom (similar behavior as the browser scroll bar), see [dataZoom-inside.moveOnMouseWheel](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom-inside.moveOnMouseWheel), and see the [Gantt example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=custom-gantt-flight).

+ [Feature] Support focusing node adjacency in sankey diagram. See [focusNodeAdjacency](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey.focusNodeAdjacency) and [example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=sankey-product).

+ [Feature] Support vertical layout of sankey diagram, see [series-sankey.orient](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey.orient) and [Vertical sankey example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=sankey-vertical).

+ [Feature] Support roam for tree diagram. See [series-tree.roam](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.roam).

+ [Feature] Enable to set an axis as `-1` in [encode](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.encode) for [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom), which indicates that the axis and its corresponding dataZoom do not control any dimension of the series (either calculate axis extent by this series nor scale or filter this series). See [Gantt example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=custom-gantt-flight).

+ [Feature] Enable layout `'cover'` in [path shape](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.return_path.shape.layout) for [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom), which brings convenience when using [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) create shapes. See [Gantt example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=custom-gantt-flight).

+ [Feature] Enhance [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom): Added [params.actionType](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.params), enables some optimize. And add[params.coordSys.zoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.params) for geo coordinate system. Add [invisible](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.return_text.invisible) and [ignore](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.return_text.ignore) to enable show and hide graphic elements in different situation.

+ [Feature] Support inner radius for [radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#radar.radius). See [#8717](https://github.com/apache/incubator-echarts/issues/8717).

+ [Fix] Fix polar category axis interval bug. See [#8791](https://github.com/apache/incubator-echarts/issues/8791).

+ [Fix] Do not support set polar center on series. Center should be set on [polar.center](https://ecomfe.github.io/echarts-doc/public/en/option.html#polar.center).

+ [Fix] Update normal shadow style for [sunburst](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst). See [#8583](https://github.com/apache/incubator-echarts/issues/8583).

+ [Fix] Fix empty [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset) problem. See [#8395](https://github.com/apache/incubator-echarts/issues/8395).

+ [Fix] Fix bar start position when multiple axes exists. See [#8747](https://github.com/apache/incubator-echarts/issues/8747).

+ [Fix] Remove clipPath for expansion animation. See [#8994](https://github.com/apache/incubator-echarts/issues/8994).

+ [Fix] Fix axes overlap when two Y axes are on one X axis. See [#8975](https://github.com/apache/incubator-echarts/issues/8975).




## v4.1.0
<div class="time">2018-05-02</div>

+ [Feature] Enable candlestick and bar chart rendering and zooming in a large amount of data (200K). Add option [series-candlestick.progressiveChunkMode](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.progressiveChunkMode) to enhance the effect when progressively rendering. See example [candlestick-large](https://ecomfe.github.io/echarts-examples/public/editor.html?c=candlestick-large).

+ [Feature] Add tree directions from right to left, from bottom to top for tree series. [#7351](https://github.com/apache/incubator-echarts/issues/7351) [#7154](https://github.com/apache/incubator-echarts/issues/7154). See example [tree-orient-right-left](https://ecomfe.github.io/echarts-examples/public/editor.html?c=tree-orient-right-left), [tree-vertical](https://ecomfe.github.io/echarts-examples/public/editor.html?c=tree-vertical).

+ [Feature] Support keeping-aspect for legend path. [#7831](https://github.com/apache/incubator-echarts/issues/7831)

+ [Feature] Support node dragging for sankey chart. See example [sankey-energy](https://ecomfe.github.io/echarts-examples/public/editor.html?c=sankey-energy).

+ [Enhance] Category axis enhancement:
    + Optimize the performance in a large amount of data (> 100K ~ 1M)
    + Enhance the auto interval strategy.
    + Enhance the animation when zooming and moving the data window of cartesian.

+ [Enhance] In line chart, enhance symbol display strategy when using category axis (see `showAllSymbol:'auto'`).

+ [Enhance] Support that lift the brushed elements to the top (add option `visualMap.inRange.liftZ`).

+ [Enhance] Enhance the order of nodes for sankey diagram. [#3390](https://github.com/apache/incubator-echarts/issues/3390) [#3543](https://github.com/apache/incubator-echarts/issues/3543) [#6365](https://github.com/apache/incubator-echarts/issues/6365) [#4880](https://github.com/apache/incubator-echarts/issues/4880) [#4986](https://github.com/apache/incubator-echarts/issues/4986)

+ [Enhance] Enhance sampling performance in progressive mode.

+ [Enhance] Enhance parallel performance in progressive mode.

+ [Enhance] Currently do not filter empty data item in data zoom, which makes line chart keeping broken. [#7955](https://github.com/apache/incubator-echarts/issues/7955)

+ [Enhance] Support toolbox.feature merge.

+ [Fix] Resolve browser become unresponsive when the data of sankey series has cycle. [#7495](https://github.com/apache/incubator-echarts/issues/7495) [#8117](https://github.com/apache/incubator-echarts/issues/8117) [#7583](https://github.com/apache/incubator-echarts/issues/7583) [#7325](https://github.com/apache/incubator-echarts/issues/7325) [#6555](https://github.com/apache/incubator-echarts/issues/6555)

+ [Fix] `yAxis` extent did not update when some of the stacked bar series hide. [#8003](https://github.com/apache/incubator-echarts/issues/8003)

+ [Fix] Currently we fetch name from `dateItem.name` firstly in list. [#7966](https://github.com/apache/incubator-echarts/issues/7966)

+ [Fix] Typed array incorrect usage in WeChat app.

+ [Fix] `option` in axis data item did not work. [#7954](https://github.com/apache/incubator-echarts/issues/7954)

+ [Fix] `markArea` only displayed the last one. [#7902](https://github.com/apache/incubator-echarts/issues/7902)

+ [Fix] Fixed the WeChat environment imprecise detection.

+ [Fix] Rounding error in clip symbol for line chart. [#7913](https://github.com/apache/incubator-echarts/issues/7913)

+ [Fix] The default tooltip in candlestick only showed one item. [#8149](https://github.com/apache/incubator-echarts/issues/8149)

+ [Fix] Bar chart start point was incorrect when multiple axes exist. [#7412](https://github.com/apache/incubator-echarts/issues/7412)

+ [Fix] `markArea` did not display when using ordinal string. [#7849](https://github.com/apache/incubator-echarts/issues/7849)

+ [Fix] `dataZoom` threw error when series was empty. [#7666](https://github.com/apache/incubator-echarts/issues/7666)

+ [Fix] Add compatibility of data exceptions for sankey series. [#2867](https://github.com/apache/incubator-echarts/issues/2867)

+ [Fix] Fix error when removing node or rendering again for the tree series. [#8038](https://github.com/apache/incubator-echarts/issues/8038) [#8040](https://github.com/apache/incubator-echarts/issues/8040) [#7720](https://github.com/apache/incubator-echarts/issues/7720) [#7363](https://github.com/apache/incubator-echarts/issues/7363) [#7315](https://github.com/apache/incubator-echarts/issues/7315)

+ [Fix] `sunburst` chart roll-up element was not removed when chart.setOption called. [#8132](https://github.com/apache/incubator-echarts/issues/8132)

+ [Fix] SVG axisPointer text position bug. [#7947](https://github.com/apache/incubator-echarts/issues/7947)

+ [Fix] Large lines chart render bug in large mode.

+ [Fix] The last day of a month was not displayed in calendar. [#8045](https://github.com/apache/incubator-echarts/issues/8045)

+ [Fix] Data sampling of line chart caused incorrect extent when data had NaN.

+ [Fix] Data sampling of line chart worked abnormally when using `series.encode`. [#8017](https://github.com/apache/incubator-echarts/issues/8017)

+ [Fix] `legendHoverLink: false` did not work appropriately when multiple series had the same name. [#8010](https://github.com/apache/incubator-echarts/issues/8010)

+ [Fix] Some of the graph hover style did not work.

+ [Fix] Fix axis extent calculation error when using stack.




## v4.0.4
<div class="time">2018-02-28</div>

[Recovery Build]

+ [^] Fixed bar layout problem. See [#7831](https://github.com/apache/incubator-echarts/issues/7831).


## v4.0.3
<div class="time">2018-02-27</div>

+ **[+] ECharts has been able to work on WeChat Applet.**

+ [+] Added a new smooth policy, which corrects some undesired smooth result. See details in [series-line.smooth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.smooth) and [series-line.smoothMonotone](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.smoothMonotone). Fixed [#7158](https://github.com/apache/incubator-echarts/issues/7158).

+ [+] Supported [series-line.symbolOffset](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.symbolOffset) of axis arrow. See [#7422](https://github.com/apache/incubator-echarts/issues/7422).

+ [+] Supported [series-sunburst.label.minAngle](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst.label.minAngle), which enables hiding text if the sector is less then the `minAngle`. See [#7614](https://github.com/apache/incubator-echarts/issues/7614).

+ [+] Supported tooltip in [sunburst](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst). See [#7691](https://github.com/apache/incubator-echarts/issues/7691).

+ [+] Supported configuring [series-sunburst.nodeClick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst.nodeClick) in level or single sector. See [#7541](https://github.com/apache/incubator-echarts/issues/7541).

+ [+] Supported [stack data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.stack) by value but not index. Fixed stack bug when using [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset). See [#7535](https://github.com/apache/incubator-echarts/issues/7535), [#7560](https://github.com/apache/incubator-echarts/issues/7560), [#6861](https://github.com/apache/incubator-echarts/issues/6861).

+ [^] Fixed shape clip when [line chart](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line) is overflow cartesian area.

+ [^] Fixed that the last area of [splitArea](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.splitArea) did not display. See [#7118](https://github.com/apache/incubator-echarts/issues/7118).

+ [^] Fixed gradient color bug of [sunburst](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst). See [#7569](https://github.com/apache/incubator-echarts/issues/7569).

+ [^] Fixed the case when [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) component is not imported for [sunburst](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst). See [#7575](https://github.com/apache/incubator-echarts/issues/7575).

+ [^] Fixed that [apendData](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.appendData) did not work when data amount was less then [progressive](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.progressive) limit. See [#7718](https://github.com/apache/incubator-echarts/issues/7718) and [#7625](https://github.com/apache/incubator-echarts/issues/7625).

+ [^] Fixed that [apendData](api.html#echartsInstance.appendData) caused series color changed if series name was not specified.

+ [^] Fixed that [tooltip.axisPointer.label.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.axisPointer.label.show) did not work when set as `false`. See [#7725](https://github.com/apache/incubator-echarts/issues/7725).

+ [^] Fixed that [map](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) could not be selected if an area had no data. See [#7629](https://github.com/apache/incubator-echarts/issues/7629).

+ [^] Fixed [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick) encode problem. See [#7715](https://github.com/apache/incubator-echarts/issues/7715).

+ [^] Fixed the data item empty check logic, which caused that [renderItem](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem) could not enter when value array length not the same, and [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset) could not be displayed. See [#7733](https://github.com/apache/incubator-echarts/issues/7733).

+ [^] Fixed the textStyle compatibility logic.




## v4.0.2
<div class="time">2018-01-18</div>

+ [^] Fixed that in some case the scollable legend (`legend.type: 'scroll'`) caused ghost. See [#7502](https://github.com/apache/incubator-echarts/issues/7502).

+ [^] Fixed that the `selected` option did not work in the data item of [pie](option.html#series-pie). See [#7515](https://github.com/apache/incubator-echarts/issues/7515).

+ [^] Fixed [play button](option.html#timeline.controlStyle.showNextBtn) of timeline component could not be disabled. See [#7506](https://github.com/apache/incubator-echarts/issues/7506).


## v4.0.1
<div class="time">2018-01-17</div>

## v4.0.0
<div class="time">2018-01-16</div>

+ [+] Supported to render up to **tens millions of data** directly. ECharts4 has upgrade to stream architecture, and along with detailed optimization, it has supported to render incrementally loaded data and support progressive rendering.
    + Ten millions of GIS data probably take up to about hundreds MB of space. In this case chunked data loading or WebStock is required for the purpose of display graphics as soon as possible and not blocking the browser while processing loaded data. The samples of incremental data loading can be checked here: [scatterGL-gps](https://ecomfe.github.io/echarts-examples/public/editor.html?c=scatterGL-gps&gl=1) and [linesGL-ny](https://ecomfe.github.io/echarts-examples/public/editor.html?c=linesGL-ny&gl=1), who use ECharts GL, and [lines-ny](https://ecomfe.github.io/echarts-examples/public/editor.html?c=lines-ny), who only uses ECharts.
    + Supported the human interactions in the big data scenario, where continuous interactions (e.g., roam in geo and cartesian) will not block the browser. Benefit from the using of GPU and avoiding of layout recalculation, ECharts GL provides smooth interactions, which has been demonstrated in the examples above. Without WebGL, the basic ECharts implements progressive rendering to support non-blocking interaction, which can be checked at the pan and zoom in [lines-airline](https://ecomfe.github.io/echarts-examples/public/editor.html?c=lines-airline) and [scatter-large](https://ecomfe.github.io/echarts-examples/public/editor.html?c=scatter-large).

+ [+] **Published ZRender SVG Rendering Engine** as an alternative backend of ECharts besides the existing Canvas Rendering Engine. The choice of rendering engine usually depends on the scenario, for example, benefit from the low memory cost, SVG Rendering Engine is suitable for mobile device, or the case that many ECharts instances exists in a single page, while the Canvas Rendering Engine is suitable for big data rendering or when visual effects required. Canvas Rendering Engine is default rendering engine. See [zrender](https://github.com/ecomfe/zrender).

+ [+] **Published Sunburst Chart** to visualize hierarchical data efficiently with excellent interactions. See [examples] and (excellent) and [docs](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst).

+ [+] **Published [dataset](http://echarts.baidu.com/tutorial.html#%E6%95%B0%E6%8D%AE%E9%9B%86%EF%BC%88dataset%EF%BC%89) component** to support data based configuration, visual encoding and data sharing in different series.

+ [+] **Supported WAI-ARIA (the Accessible Rich Internet Applications Suite）** to help the disabled people to access the data visualization in web.

+ [+] Since ECharts4, the options `label` and `itemStyle` has been flattened. The original level of `normal` is not needed any more, which make ECharts option more neat. As always, **The previous option style in ECharts3 is still be compatible**.

+ [+] Added two color themes, named 'light' and 'dark'. Apply them by `echarts.init(dom, themeName);`.

+ [+] Supported that auto collect legend names when [legend.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#legend.data) is not specified.

+ [+] Supported that auto collect category names when `axis.type` is `'category'` and [axis.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.data) is not specified.


## v3.8.4
<div class="time">2017-11-13</div>

+ [^] Fixed that `registerMap` is null on `index*.js`.
+ [^] Fixed some CommonJS incorrect brought by injection.


## v3.8.2
<div class="time">2017-11-10</div>

+ [^] Fixed backward compatibility problems brounght by `3.8.0`:
    + In `3.8.0`, the content in `lib` directory is the same as the content in `src` directory (both are ES Module), which may not compatible with the old verisons of node and webpack. So rollback to commonJS format in `lib` of `3.8.2`.
    + In `3.8.0`, the source code in `src` constains global variable `__DEV__` (which prints dev helper info for echarts users). To get the declaration of the global variable, users should include `echarts/src/config.js` manually or make some settings in `webpack`/`rollup` (Check [custom build tutorial](https://ecomfe.github.io/echarts-doc/public/en/option.html#Create%20Custom%20Build%20of%20ECharts) please), which is not backward compatible. So we have removed `__DEV__` from the codes in `echarts/lib/**` in `3.8.2`. If dev helper info is required, use codes in `echarts/src/**`.
    + After `3.8`, `echarts/src/echarts.js` (the same as `echarts/lib/echarts.js` in `3.8.0`) does not include util methods, which used to be mounted on it. Now util methods are listed in `echarts/src/export` and mounted on `echarts/echarts*.js`. But it is not backward compatibility, so we have rollbacked to mount them on `echarts/lib/echarts.js` in `3.8.2`.
    + The way of including `echarts/extension/dataTool`, havs been rollbacked to the original approach before `3.8`, where it must be included explicitly, and the namespace will be mounted on `echarts` namespame.
+ [^] Fixed the problem that SVG renderer throws error when encounter null value.


## v3.8,0
<div class="time">2017-11-07</div>

+ [+] **Supported [Tree Chart](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree)**, including [horizontal layout](https://ecomfe.github.io/echarts-examples/public/index.html#tree-basic), [vertical layout](https://ecomfe.github.io/echarts-examples/public/index.html#tree-vertical), [radial layout](https://ecomfe.github.io/echarts-examples/public/index.html#tree-radial).

+ [+] **Supported [SVG Renderer (beta)](https://ecomfe.github.io/echarts-doc/public/en/option.html#Render%20by%20Canvas%20or%20SVG)**, enable developers to choose SVG or Canvas renderer based on their platfroms and functional requirments.

+ [+] Source code of echarts has been switched to ES Module, which enabled tree shaking of bundle and reduced size.

+ [+] Supported build scripts for creating custom build, including multiple language support. See [custom build tutorial](https://ecomfe.github.io/echarts-doc/public/en/option.html#Create%20Custom%20Build%20of%20ECharts). And added Finnish support, which is contributed by [xvaara](https://github.com/xvaara) in [PR #6863](https://github.com/apache/incubator-echarts/pull/6863).

+ [+] Supported [axis arrow](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLine.symbol). See [#6675](https://github.com/apache/incubator-echarts/issues/6675).

+ [+] Supported [strokeWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.levels.itemStyle.normal.strokeWidth) and [strokeColor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.levels.itemStyle.normal.strokeColor) in treemap. See [#6804](https://github.com/apache/incubator-echarts/issues/6804).

+ [+] Supported [show adjacent nodes](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.focusNodeAdjacency) in graph. See [#6772](https://github.com/apache/incubator-echarts/issues/6772).

+ [^] Fixed the area calculation when [grid.containLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid.containLabel) is `true` and axis is [rotated](https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis.axisLabel.rotate). Thanks [xvaara](https://github.com/xvaara) for [PR #6951](https://github.com/apache/incubator-echarts/pull/6951).

+ [^] Fixed that the calculation of interval is not incorrect when [axisLabel.rotate](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLabel.rotate) is set in [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type). See [#4170](https://github.com/apache/incubator-echarts/issues/4170). Thanks[lanyuechen](https://github.com/lanyuechen) for [PR #6903](https://github.com/apache/incubator-echarts/pull/6903).

+ [^] Fixed the negative problem in `dataTool.prepareBoxplotData`. Thanks [d-rudolf](https://github.com/d-rudolf) for [PR #6749](https://github.com/apache/incubator-echarts/pull/6749).

+ [^] Enhanced the label interval of [time axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type). Thanks [xiaoshan00](https://github.com/xiaoshan00) for [PR #6808](https://github.com/apache/incubator-echarts/pull/6808).

+ [^] Supported [radiusAxis.inverse](https://ecomfe.github.io/echarts-doc/public/en/option.html#radiusAxis.inverse). See [#6805](https://github.com/apache/incubator-echarts/issues/6805) and [#4253](https://github.com/apache/incubator-echarts/issues/4253).

+ [^] Renamed some variables to avoid webpack special variable name. See [#6788](https://github.com/apache/incubator-echarts/issues/6788).

+ [^] Fixed position problem of [scrollable legend](https://ecomfe.github.io/echarts-examples/public/index.html#pie-legend). See [#6756](https://github.com/apache/incubator-echarts/issues/6756).

+ [^] Fixed that the [themeRiver](https://ecomfe.github.io/echarts-examples/public/index.html#themeRiver-basic) legend color is incorrect. See [#6932](https://github.com/apache/incubator-echarts/issues/6932).

+ [^] Fixed that brush empty value caused error thrown. See [#6892](https://github.com/apache/incubator-echarts/issues/6892).

+ `dist/echarts/echarts.simple.js` do not includ utils, which used to be mounted on `echarts`. `dist/echarts/echarts.common.js` and `dist/echarts/echarts.js` keep including them as before. And developers can [custom build](https://ecomfe.github.io/echarts-doc/public/en/option.html#Create%20Custom%20Build%20of%20ECharts) to include them.

+ Changes about `dataTool`: When using `dist/echarts/echarts.simple.js` or `dist/echarts/echarts.common.js`, `dist/echarts/extension/dataTool.js` should be manually included as before, but the namespace `dataTool` will not be mounted to `echarts`. When using `dist/echarts/echarts.js`, `echarts.dataTool` is included automatically by default.





## v3.7.2
<div class="time">2017-09-27</div>

+ [+] Supported English version build (All default text is in English) in <https://github.com/apache/incubator-echarts/tree/master/dist>. See [#2321](https://github.com/apache/incubator-echarts/issues/2321).

+ [+] Supported [pie.hoverOffset](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.hoverOffset). See [#3857](https://github.com/apache/incubator-echarts/issues/3857).

+ [^] Fixed compatibility of data in [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick). See [#6576](https://github.com/apache/incubator-echarts/issues/6576).

+ [^] Fixed [showMaxLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.showMaxLabel) [showMinLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.showMinLabel).

+ [^] Fixed area chart when all value is negative. See [#6707](https://github.com/apache/incubator-echarts/issues/6707).

+ [^] Made the meaning of `'middle'` and `'center'` consist in [axis.nameLocation](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.nameLocation).

+ [^] Fixed that [markArea.itemStyle.emphasis](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.markArea.itemStyle.emphasis) did not work. See [#5245](https://github.com/apache/incubator-echarts/issues/5245).

+ [^] Fixed the problem of right click in [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap). See [#6313](https://github.com/apache/incubator-echarts/issues/6313).

+ [^] Fixed that calender did not work because of DST (Day Saving Time). See [#6543](https://github.com/apache/incubator-echarts/issues/6543).

+ [^] Enhanced the "save as image" in IE. See [#6279](https://github.com/apache/incubator-echarts/issues/6279).

+ [^] Fixed cleaning for "motion blur". See [#6577](https://github.com/apache/incubator-echarts/issues/6577).

+ [^] Fix doji for k series [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick). See [#6583](https://github.com/apache/incubator-echarts/issues/6583).

+ [^] Fixed the compatibility for `markPoint`. See [#6503](https://github.com/apache/incubator-echarts/issues/6503).




## v3.7.1
<div class="time">2017-08-31</div>

[Recovery Build]

+ [+] Supported function in [axis.min](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.min), [axis.max](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.max). See [#6465](https://github.com/apache/incubator-echarts/issues/6465).

+ [^] Fixed problems of compatibility and emphasis style about textStyle. See [#6491](https://github.com/apache/incubator-echarts/issues/6491)、[#6529](https://github.com/apache/incubator-echarts/issues/6529), [#6516](https://github.com/apache/incubator-echarts/issues/6516), [#6532](https://github.com/apache/incubator-echarts/issues/6532), [#6237](https://github.com/apache/incubator-echarts/issues/6237).

+ [^] Add sub-pixel optimize to [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick).

+ [^] Fixed that emphasis style was not applied when using [graph.focusNodeAdjacency](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.focusNodeAdjacency).




## v3.7.0
<div class="time">2017-08-16</div>

+ **[+] Supported [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)**, which has enabled style configuring to some text snippets or the entire text block, and supported using images in text, and supported alignment or rotation of text block or snippets.

+ **[+] Supported [Scrollable Legend](https://ecomfe.github.io/echarts-doc/public/en/option.html#legend.type)**, which provides a solution for displays planty of legend items. See [vertical legend](https://ecomfe.github.io/echarts-examples/public/editor.html?c=pie-legend) 或 [horizontal legend](https://ecomfe.github.io/echarts-examples/public/editor.html?c=radar2).

+ [+] Flatten `textStyle` option. `textStyle` exist in echarts option everywhere, for example, [series-bar.label.normal.textStyle](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.normal.textStyle), [xAxis.axisLabel.textStyle](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLabel.textStyle). It seems that some of them are to deep and verbose. So we removed the level of `textStyle` to flatten them. That is, previous `label.normal.textStyle.fontSize`, `axisLabel.textStyle.fontSize` is modified to `label.normal.fontSize`, `axisLabel.fontSize` after `v3.7`. Of course, the previous style is compatible all the same. Those options are flattened:
    + `axisPointer.textStyle`
    + `xAxis.axisLabel.textStyle`
    + `yAxis.axisLabel.textStyle`
    + `radar.axisLabel.textStyle`
    + `singleAxis.axisLabel.textStyle`
    + `radiusAxis.axisLabel.textStyle`
    + `angleAxis.axisLabel.textStyle`
    + `parallel.parallelAxisDefault.axisLabel.textStyle`
    + `parallelAxis.axisLabel.textStyle`
    + `series.label[normal|emphasis].textStyle`
    + `series.data.label[normal|emphasis].textStyle`
    + `series-gauge.axisLabel.textStyle`
    + `series-gauge.title.textStyle`
    + `series-gauge.detail.textStyle`
    + `series-treemap.upperLabel[normal|emphasis].textStyle`
    + `series-graph.edgeLabel[normal|emphasis].textStyle`
    + `calendar.dayLabel.textStyle`
    + `calendar.monthLabel.textStyle`
    + `calendar.yearLabel.textStyle`
    + `markPoint.label[normal|emphasis].textStyle`
    + `markPoint.data.label[normal|emphasis].textStyle`
    + `markLine.label[normal|emphasis].textStyle`
    + `markLine.data.label[normal|emphasis].textStyle`
    + `markArea.label[normal|emphasis].textStyle`
    + `markArea.data.label[normal|emphasis].textStyle`
    + `tooltip.axisPointer.crossStyle.textStyle`
    + `axisPointer.label.textStyle`
    + `timeline.label.textStyle`
    + `radar.name.textStyle`

+ [+] Supported [minInterval](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.minInterval) on time axis (that is, [axis.type](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type) is `'time'`), and supported [maxInterval](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.maxInterval) on value axis (that is [axis.type](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type) is `'value'`). So that it is enabled to controll the precision of label when data zooming.

+ [+] Supported [xAxis.axisLine.onZeroAxisIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLine.onZeroAxisIndex), which enables specifing corresponding relationship when multiple axes used and `onZero` is required. See [#5069](https://github.com/apache/incubator-echarts/issues/5069).

+ [+] Supported that do not use [coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.coordinateSystems) in `custom series`.

+ [+] Supported rotation and alignment of label in bar chart. See [rotate](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.normal.rotate), [align](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.normal.align), [verticalAlign](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.normal.verticalAlign). See [example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation). See [#5309](https://github.com/apache/incubator-echarts/issues/5309).

+ [+] Supported [radar.indicator.color](https://ecomfe.github.io/echarts-doc/public/en/option.html#radar.indicator.color), which enables setting different color for each indicator of radar chart. See [#6128](https://github.com/apache/incubator-echarts/issues/6128).

+ [+] Supported [dataZoom.rangeMode](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom.rangeMode), which can fixing zoom window according to data when data updated. See [#6128](https://github.com/apache/incubator-echarts/issues/6040).

+ [+] Supported using `dataIndex` in [action.legend.legendToggleSelect](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.legend.legendToggleSelect), [action.legend.legendSelect](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.legend.legendSelect), [action.legend.legendUnSelect](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.legend.legendUnSelect). See [#4242](https://github.com/apache/incubator-echarts/issues/4242).

+ [+] Supported [map.label.formatter](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.label.formatter), which enables using rich text in map series. See [Map Labels](https://ecomfe.github.io/echarts-examples/public/editor.html?c=map-labels).

+ [+] Supported [title.borderRadius](http://echarts.baidu.com/option.html#title.borderRadius) and [legend.borderRadius](http://echarts.baidu.com/option.html#legend.borderRadius), which enables round corner of background or border in `title` and `legend` component.

+ [^] Fixed that error thrown when using shadow in pie series in some version of IE. See [#5777](https://github.com/apache/incubator-echarts/issues/5777).

+ [^] Fixed that name can not be obtained in `tooltip` when `nameMap` was used in map serise and there was no data in some areas. See [#5633](https://github.com/apache/incubator-echarts/issues/5633).

+ [^] Fixed `tooltip` location incorrect after roamed in bmap extension. See [#6211](https://github.com/apache/incubator-echarts/issues/6211).

+ [^] Fixed null pointer exception of `axisPointer`. See [#6121](https://github.com/apache/incubator-echarts/issues/6121).

+ [^] Fixed that error occured when height of heatmap was 0. See [#6214](https://github.com/apache/incubator-echarts/issues/6214).

+ [+] Fixed the incorrect rendering when the first entry was empty in [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick). See [#6059](https://github.com/apache/incubator-echarts/issues/6059).

+ [^] Fixed that [series-bar.dimensions](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.dimensions) did not work. See [#6252](https://github.com/apache/incubator-echarts/issues/6252).

+ [^] Fixed that when chilren number of group was not fixed, they could not be removed correctly in [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom).

+ [^] Fixed the error that calling `connect` before `setOption` called. See [#6281](https://github.com/apache/incubator-echarts/issues/6281).

+ [^] Fixed the edge judgement of [tooltip.confine](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.confine). See [#6277](https://github.com/apache/incubator-echarts/issues/6277) and [0da06d8](https://github.com/apache/incubator-echarts/commit/0da06d8).

+ [^] Fixed that bar series displayed abnormal when viewport was narrow and bar series were overlapped (both set `barWidth` and `barGap: '-100%'`). See [#6312](https://github.com/apache/incubator-echarts/issues/6312).

+ [^] Fixed precision problems. See [#6371](https://github.com/apache/incubator-echarts/issues/6371).


## v3.6.2
<div class="time">2017-06-15</div>

+ [+] Supported draw [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom) on [Baidu Map (bmap)](https://github.com/apache/incubator-echarts/tree/master/extension/bmap). See [example 1](https://ecomfe.github.io/echarts-examples/public/editor.html?c=map-polygon) and [example 2](https://ecomfe.github.io/echarts-examples/public/editor.html?c=map-bin).

+ [+] Supported show parent labels in [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap). See [example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=treemap-show-parent). See [#5869](https://github.com/apache/incubator-echarts/issues/5869) and [#5579](https://github.com/apache/incubator-echarts/issues/5579).

+ [+] Supported specifying mouse cursor style by: [series-line.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.cursor), [series-bar.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.cursor), [series-pie.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.cursor), [series-scatter.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.cursor), [series-effectScatter.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-effectScatter.cursor), [series-graph.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.cursor), [series-pictorialBar.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pictorialBar.cursor).

+ [+] Support both negative and positive bounding data specified on [series-pictorialBar.symbolBoundingData](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pictorialBar.symbolBoundingData). See [#5793](https://github.com/apache/incubator-echarts/issues/5793).

+ [+] Supported [fixed](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.data.fixed) in `graph`. See [#5966](https://github.com/apache/incubator-echarts/issues/5966).

+ [+] Supported [label.formatter](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.label.normal.formatter)in `treemap`. See [#5757](https://github.com/apache/incubator-echarts/issues/5757).

+ [+] Supported [label.normal.textStyle.align](https://ecomfe.github.io/echarts-doc/public/en/option.html#timeline.label.normal.textStyle.align) and [label.normal.textStyle.basealign](https://ecomfe.github.io/echarts-doc/public/en/option.html#timeline.label.normal.textStyle.basealign) in `timeline`. See [#5960](https://github.com/apache/incubator-echarts/issues/5960).

+ [^] Fixed that `tooltip` did not work when [large scatter](https://ecomfe.github.io/echarts-examples/public/editor.html?c=scatter-large) was zoomed. See[#5837](https://github.com/apache/incubator-echarts/issues/5837).

+ [^] Fixed that parameter `position` did not work when trigger [showTip](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip) action. See [#5874](https://github.com/apache/incubator-echarts/issues/5874).

+ [^] Fixed that sometimes the sum of the percent value is less than `100%` slightly in [pie](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie), which was caused by precision problem. See [#5850](https://github.com/apache/incubator-echarts/issues/5850).

+ [^] Fixed only the last `markPoint` or `markLine` was displayed when `series.name` was the same. See [#5712](https://github.com/apache/incubator-echarts/issues/5712).

+ [^] Fixed that [barBorderRadius](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.normal.barBorderRadius) did not work in horizontal bar. See [#5943](https://github.com/apache/incubator-echarts/issues/5943).

+ [^] Fixed the zoom point error when applying [dataZoom-inside](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom-inside) on Y axis. See [#5278](https://github.com/apache/incubator-echarts/issues/5278).

+ [^] Fixed sometimes [radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar) did not display normally. See [#5986](https://github.com/apache/incubator-echarts/issues/5986).



## v3.6.1
<div class="time">2017-05-26</div>

[Recovery Build]

+ [^] Fixed that [data sampling](http://echarts.baidu.com/option.html#series-line.sampling) did not work.
+ [^] Fixed the problem on ie11 when compiled by webpack. See [zrender/#189](https://github.com/ecomfe/zrender/issues/189).


## v3.6.0
<div class="time">2017-05-25</div>

+ **[+] Published [custom series](http://echarts.baidu.com/option.html#series-custom)**, which enables user to customize render logic and make new types of chart. See [samples](http://echarts.baidu.com/examples.html#chart-type-custom).

+ **[+] Supported polar bar chart**. See [sample1](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-polar-stack), [sample2](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-polar-stack-radial), [sample3](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-polar-real-estate).

+ [+] Supported [encode](http://echarts.baidu.com/option.html#series-scatter.encode), which enable user to specify which dimensions in [data](http://echarts.baidu.com/option.html#series-scatter.data) are mapped to which axis of coordinate system. Or which dimensions will be displayed in [tooltip](http://echarts.baidu.com/option.html#tooltip) or [label](http://echarts.baidu.com/option.html#series-scatter.label). [Break Change]: The default name of the third dimension in `cartesian2d` is changed from `'z'` to `'value'`. If `'z'` is used in [visualMap.dimension](http://echarts.baidu.com/option.html#visualMap.dimension), please modify it to `'value'` or `2`.

+ [+] Supported [dimensions](http://echarts.baidu.com/option.html#series-scatter.dimensions), which enables that specifying names and types for each dimensions in [data](http://echarts.baidu.com/option.html#series-scatter.data). Name can be displayed in [tooltip](http://echarts.baidu.com/option.html#tooltip).

+ [+] Supported [dataZoom.minSpan](http://echarts.baidu.com/option.html#dataZoom.minSpan) and [dataZoom.maxSpan](http://echarts.baidu.com/option.html#dataZoom.maxSpan). See [#2843](https://github.com/apache/incubator-echarts/issues/2843).

+ [+] Supported [dataZoom.moveOnMouseMove](http://echarts.baidu.com/option.html#dataZoom-inside.moveOnMouseMove) and [dataZoom.zoomOnMouseWheel](http://echarts.baidu.com/option.html#dataZoom-inside.zoomOnMouseWheel), which enables that triggering dataZoom only by mouse wheel while holding 'ctrl'/'alt'/'shift'. Moreover, supported [preventDefaultMouseMove](http://echarts.baidu.com/option.html#dataZoom-inside.preventDefaultMouseMove), See [#5769](https://github.com/apache/incubator-echarts/issues/5769).

+ [+] Supported using image in [dataZoom.handleIcon](http://echarts.baidu.com/option.html#dataZoom-slider.handleIcon) setting.

+ [^] Fixed boundary problems on world map.

+ [^] Fixed that [minInterval](http://echarts.baidu.com/option.html#xAxis.minInterval) did not work when [min](http://echarts.baidu.com/option.html#xAxis.min) was set. See [#4838](https://github.com/apache/incubator-echarts/issues/4838).

+ [^] Fixed problems caused by default properties on `Object`. See [#5576](https://github.com/apache/incubator-echarts/issues/5576).

+ [^] Fixed that error was thrown when `setOption` while legend selection changed, which was caused [graphic](http://echarts.baidu.com/option.html#graphic). See [#5783](https://github.com/apache/incubator-echarts/issues/5783).

+ [^] Fixed [parallelAxis.axisLabel.interval](http://echarts.baidu.com/option.html#parallelAxis.axisLabel.interval) supporting. See [#5694](https://github.com/apache/incubator-echarts/issues/5694).

+ [^] Enhanced interaction of `dataZoom`.

+ [^] Fixed the problem about [minAngle](http://echarts.baidu.com/option.html#series-pie.minAngle) on rose chart. See [#5617](https://github.com/apache/incubator-echarts/issues/5617).

+ [^] Fixed the problem when tooltip updating.



## v3.5.4
<div class="time">2017-04-27</div>

+ [^] Fixed the `clipPath` support for [liquidfill](https://github.com/ecomfe/echarts-liquidfill).
+ [^] Fixed the position when `label` is set as `insideTop`.
+ [^] Fixed the problem when transforming [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData).


## v3.5.3
<div class="time">2017-04-14</div>

+ [^] Fixed the problem when both `left` `right` `width` `top` `bottom` `height` are set. See [#5440](https://github.com/apache/incubator-echarts/issues/5440).

+ [^] Fixed the problem when input x,y to [showTip](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip). See [#5449](https://github.com/apache/incubator-echarts/issues/5449).

+ [^] Enhanced the effect of [boundaryGap](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.boundaryGap) when only one data existed. See [#4417](https://github.com/apache/incubator-echarts/issues/4417).

+ [^] Fixed animation easing setting of [gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.animationEasing). See [#5451](https://github.com/apache/incubator-echarts/issues/5451).

+ [^] Made the sorting of [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap) stable when values were the same.

+ [^] Fixed that roam and brush conflicted when components overlaped.

+ [^] Enlarged area of [parallel axis name](https://ecomfe.github.io/echarts-doc/public/en/option.html#parallelAxis.nameRotate) when it rotates.

+ [^] Enabled [toolbox clear button](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature.brush.type) to be able to clear brush box of [parallelAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#parallelAxis).

+ [^] Improved the performance of zrender up to `50%`.


## v3.5.2
<div class="time">2017-04-05</div>

+ [+] Supported [useUTC](https://ecomfe.github.io/echarts-doc/public/en/option.html#useUTC), which enables display `axisLabel` and `tooltip` in local time or UTC. Related default setttings are modified: `axisLabel` and `tooltip` display local time by default, and `data` recognize time string as local time if timezone not specified. See [the time part in series.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.data). Fixed the problem that when `axis.type` is `'time'` tick is determined by UTC and can not align with daytime. Fixed [#5396](https://github.com/apache/incubator-echarts/issues/5396) and [#5393](https://github.com/apache/incubator-echarts/issues/5393).

+ [+] Supported [axisLabel.showMinLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLabel.showMinLabel) and [axisLabel.showMaxLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLabel.showMaxLabel).

+ [+] Supported [funnel.sort](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.sort), which enables sorting funnel by index or customized function.

+ [^] Fixed float error of `axisTick`. See [#5041](https://github.com/apache/incubator-echarts/issues/5041).

+ [^] Fixed that `axisTick` did not display when value was too small. See [#5386](https://github.com/apache/incubator-echarts/issues/5386).

+ [^] Fixed when [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger) was `'axis'`, `dispatchAction` [showTip](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip) did not work. See [#5423](https://github.com/apache/incubator-echarts/issues/5423).

+ [^] Fixed that [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) disabled `itemStyle` of [map](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map). See [#5388](https://github.com/apache/incubator-echarts/issues/5388).

+ [^] Fixed that [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger) did not support `'none'`. See [#5400](https://github.com/apache/incubator-echarts/issues/5400).

+ [^] Fixed problem of [sankey](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey) on ie11. See [#3306](https://github.com/apache/incubator-echarts/issues/3306).

+ [^] Fixed that `data.lineStyle.color` of [parallel](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-parallel) did not work. See [#5363](https://github.com/apache/incubator-echarts/issues/5363).


## v3.5.1
<div class="time">2017-03-23</div>

Recovery Build

+ [^] Fixed [#5352](https://github.com/apache/incubator-echarts/issues/5352).

+ [^] Fixed [#5350](https://github.com/apache/incubator-echarts/issues/5350).


## v3.5.0
<div class="time">2017-03-23</div>

+ **[+] Published [calendar coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#calendar)**. See [examples](https://ecomfe.github.io/echarts-examples/public/index.html#calendar).

+ **[+] Published echarts statistics tools [echarts-stat](https://github.com/ecomfe/echarts-stat)**

+ **[+] Enhanced axis pointer** See examples: [link](https://ecomfe.github.io/echarts-examples/public/index.html#candlestick-brush), [mobile (touch device) 1](https://ecomfe.github.io/echarts-examples/public/index.html#line-tooltip-touch), [mobile (touch device) 2](https://ecomfe.github.io/echarts-examples/public/index.html#candlestick-touch), [analysis](https://ecomfe.github.io/echarts-examples/public/index.html#scatter-nutrients-matrix), [multiple Y axes](https://ecomfe.github.io/echarts-examples/public/index.html#multiple-y-axis), [multiple X axes](https://ecomfe.github.io/echarts-examples/public/index.html#multiple-x-axis). Supported and enhanced [#5040](https://github.com/apache/incubator-echarts/issues/5040), [#5039](https://github.com/apache/incubator-echarts/issues/5039), [#5102](https://github.com/apache/incubator-echarts/issues/5102), [#5262](https://github.com/apache/incubator-echarts/issues/5262), [#4905](https://github.com/apache/incubator-echarts/issues/4905), [#4921](https://github.com/apache/incubator-echarts/issues/4921), [#5091](https://github.com/apache/incubator-echarts/issues/5091).

+ [+] Enhanced method `echarts.util.parseDate`, which have supported parsing different formats of data expression to UTC time. See [time in series.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.data)

+ [^] Enhanced processing of geoJSON.

+ [^] Fixed that [toolbox.feature.dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature.dataZoom) can not control multiple x axes. See [#4896](https://github.com/apache/incubator-echarts/issues/4896).

+ [^] Fixed the default extent of category axis in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#5226](https://github.com/apache/incubator-echarts/issues/5226).

+ [^] Fixed function name of "disConnect". See [#5208](https://github.com/apache/incubator-echarts/issues/5208).

+ [^] Remove incorrect warning specifying `width,height` when initialize echart. See [#4569](https://github.com/apache/incubator-echarts/issues/4569).

+ [^] Fixed that tooltip in [gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.gauge) do not support percentage. See [#4347](https://github.com/apache/incubator-echarts/issues/4347) and [#4332](https://github.com/apache/incubator-echarts/pull/4332).

+ [^] Fixed the behavior when pointer color is 'auto' in [gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.gauge). See [#5109](https://github.com/apache/incubator-echarts/issues/5109).

+ [^] Fixed the problem when [series-gauge.pointer.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.pointer.show) is `false`. See [#4944](https://github.com/apache/incubator-echarts/issues/4944).

+ Fixed the initialization of series-treemap.data is incorrect in one case.

+ Fixed the style of [toolbox](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox). See [#3591](https://github.com/apache/incubator-echarts/issues/3591).

+ Enhanced the behavior of [brush](https://ecomfe.github.io/echarts-doc/public/en/option.html#brush) on category axis.

+ [^] Fixed that visualMap is abnormal when some item of [visualMap-piecewise.categories](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise.categories) is numberic string. See [#4960](https://github.com/apache/incubator-echarts/issues/4960).



## v3.4.0
<div class="time">2017-01-12</div>

+ **[+] Published `pictorialBar` chart：[pictorialBar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pictorialBar). See [example](https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-pictorialBar).**

+ **[+] Published `themeRiver` chart：[themeRiver](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-themeRiver).See [example](https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-themeRiver).**

+ [+] A specified [geo coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) has been able to be used in [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map). (In the past map series could only creat an inner exclusive geo coodinate system). Thus, [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) can be used to control color of a geo component. Moreover, a geo coordinate system can be shared among [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) and other series, like [scatter series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter). See [series-map.geoIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.geoIndex).

+ [+] Added [focusNodeAdjacency action](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.graph.focusNodeAdjacency), which enables trigger adjacent highlight of [graph](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-geo) through API.

+ [+] Added [series-pie.animationType](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.animationType), which enables more animation effects.

+ [+] Callback function have been supported in [animationDuration](https://ecomfe.github.io/echarts-doc/public/en/option.html#animationDuration), which enables different animation duration of data items.

+ [+] [min](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.min) and [max](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.max) have been supported in [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type).

+ [+] [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type) has been changed to show all categories by default, in spite of whether there is data in categories. In the past, categories in the end that has no data will not be displayed.

+ [+] When using [singleAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#singleAxis), `series.data` has supported one-dimension array, like `[11, 23, 44]`.

+ [+] [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom) has supported [singleAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#singleAxis).

+ [+] Exposed throttle util method: `chart.util.throttle`.

+ [+] [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick) has supported [barWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barWidth), [barMinWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barMinWidth) and [barMaxWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barMaxWidth). See [#4783](https://github.com/apache/incubator-echarts/issues/4783).

+ [+] [lines chart](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines) has supported [symbol](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.symbol), [symbolSize](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.symbolSize).

+ [+] Added support for show end text and data label at the same time in [visualMap-piecewise](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise). See [visualMap-piecewise.showLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise.showLabel), and See [#4845](https://github.com/apache/incubator-echarts/issues/4845).

+ [+] When using [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) to control a series, it has supported that some data items escape from the control by visualMap, but use its series visual settings (color, symbol, ...). See the paragraph of `Configure mapping` in [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap).

+ [^] Enhanced the effect of [grid (cartesian)](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid) when on data displayed.

+ [^] Added parameter `dataIndex` in [showTip event](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip).

+ [^] Fixed vulnerability about XSS in tooltip. See [#4769](https://github.com/apache/incubator-echarts/issues/4769).

+ [^] Fixed that some attributes did not work in [series-graph.edgeLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.edgeLabel). See [#4555](https://github.com/apache/incubator-echarts/issues/4555).

+ [^] Fixed tick render problem when `min` `max` is `stirng` in [series-gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge). See [#4617](https://github.com/apache/incubator-echarts/issues/4617).

+ [^] Fixed [series-gauge.pointer.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.pointer.show) problem. See [#4618](https://github.com/apache/incubator-echarts/issues/4618).

+ [^] Fixed [series-radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar) render error in a case that no data exists.

+ [^] Fixed [markArea.label.normal.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.markArea.label.normal.show) problem. See [#4723](https://github.com/apache/incubator-echarts/issues/4723).

+ [^] Enhanced the process when data is equals or less then zero in [log axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis.type). See [#4743](https://github.com/apache/incubator-echarts/issues/4743) and [#3161](https://github.com/apache/incubator-echarts/issues/3161).


## v3.3.2
<div class="time">2016-11-24</div>

+ [+] **Add [graphic](https://ecomfe.github.io/echarts-doc/public/en/option.html#graphic) in option, enable graphic configuration in option. See examples: <http://echarts.baidu.com/gallery/editor.html?c=line-y-category>, <http://echarts.baidu.com/gallery/editor.html?c=line-draggable> and <http://echarts.baidu.com/gallery/editor.html?c=map-province>.**

+ [+] Add [visualMin](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.visualMin) and [visualMax](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.visualMax), and enhance capability of visual mapping in [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap). See [#2509](https://github.com/apache/incubator-echarts/issues/2509).

+ [+] Add [tooltip.confine](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.confine), which can confine tooltip within contianer of echarts instance. It helps a lot in small screen, or in the situation that outer dom is set to be `overflow:hidden`.

+ [^] Fix that erroneously forbiden default pan behavior in touch device. See [#4393](https://github.com/apache/incubator-echarts/issues/4393).

+ [^] Enhance user experience for [geo](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) / [map](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) in touche device.

+ [^] Fix calculation error of [containPixel](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.containPixel) in [geo](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) / [graph](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph). See [#4405](https://github.com/apache/incubator-echarts/issues/4405).

+ [^] Enhance gradient [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) for [line](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line).

+ [^] Fix symbol mapping in [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap).

+ [^] Enable [realtime](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom.realtime) upating of label in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#4434](https://github.com/apache/incubator-echarts/issues/4434).

+ [^] Fix highlight error in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#4475](https://github.com/apache/incubator-echarts/issues/4475).

+ [^] Fix that can not save as image in MS Edge browser. See [#2451](https://github.com/apache/incubator-echarts/issues/2451) and [#3586](https://github.com/apache/incubator-echarts/issues/3586).

+ [^] Fix format problem for `'time'` axis in [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip). See [#4398](https://github.com/apache/incubator-echarts/issues/4398).

+ [^] Fix [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip) may not show bug when first series have null data.

+ [^] Fix [grid.containLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid.containLabel) not works for large fontSize. See [#3805](https://github.com/apache/incubator-echarts/issues/3805).

+ [^] Fix `echarts.extendSeriesModel` error. See [#4397](https://github.com/apache/incubator-echarts/issues/4397).

+ [^] Fix render error when `clockwise` is `false` and `minAngle` is used in [pie](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie). See [#4414](https://github.com/apache/incubator-echarts/issues/4414).

+ [^] Fix erroneously rendering dot in [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip) when using gradient color. See [#3994](https://github.com/apache/incubator-echarts/issues/3994).


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

+ [^] position optimization of average, minimum and maximum value starting point and finishing point. Fix [#2762](https://github.com/apache/incubator-echarts/issues/2762), [#2688](https://github.com/apache/incubator-echarts/issues/2688).

+ [^] fix the only one configuration for ''none'' bug in markLine symbol. See [#2733](https://github.com/apache/incubator-echarts/issues/2733)

+ [^]optimization of vertically centered multiple yext lines.

+ [^] emphasis configuration item of label in data item as pie chart is normal value by dafualt.

+ [^] when introdcued on need, line chart, pie chart and scatter chart introduce grid component by dafault to avoid problems in[#2758](https://github.com/apache/incubator-echarts/issues/2758).

+ [^] fix floating point precision bug in dataZoom component. Fix [#2757](https://github.com/apache/incubator-echarts/issues/2757)

+ [^] unselected legend chart is grey. See [#2615](https://github.com/apache/incubator-echarts/issues/2615)

+ [^] fix  dataZoom position failure bug in media query of 3.1.1. Fix [#2710](https://github.com/apache/incubator-echarts/issues/2710)

+ [^] fix firefox's incapability of triggering wheel events bug in 3.1.1 中. Fix [#2730](https://github.com/apache/incubator-echarts/issues/2730)

+ [^] IE8 optimization.

+ [^] change to webpack to build code.


## v3.1.2
<div class="time">2016-03-01</div>

+ 【\+】provide theme download,see details in [http://echarts.baidu.com/download-theme.html](http://echarts.baidu.com/download-theme.html)

+ [^] fix `the bug that update data can not be shown in `setOption` after emptying line chart data in v3.1.1.

+ [^] fix possiblity of reporting `id duplicates` error in `setOption(chart.getOption())` . Fix [#2635](https://github.com/apache/incubator-echarts/issues/2635)

+ [^] allow to customize toolbox toobar. See details in [toolbox.feature](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature)

+ [^] scale optimization of `'time'` type axis in large-span time range.

+ [^] fix no show of label formatter return to  0.Fix [#2659](https://github.com/apache/incubator-echarts/issues/2659)

+ [^] fix markPoint label display error in charts with vertical axis as category axis.Fix [#2641](https://github.com/apache/incubator-echarts/issues/2641)

+ [^] optimize dataZoom, fix dynamic data update problem in dataZoom chart. Fix [#2667](https://github.com/apache/incubator-echarts/issues/2667)

+ [^] percentage is 0 rather than NaN when all pie chart data are zero. Fix [#2690](https://github.com/apache/incubator-echarts/issues/2667)

+ [^] title alignment optimization.

+ [^] support display of tooltip when charts update. Fix [#2478](https://github.com/apache/incubator-echarts/issues/2478)

+ [^] dashboard `splitLine.length`, `axisTick.length` supports percentage.

+ [^] optimization of line animation feature.

+ [^] optimization of category axis feature of large data amount .

+ [^] fix error reporting bug of markPoint and markLine in IE8.

+ [^] fix error reporting bug under `'use strict'`model. Fix [#2643](https://github.com/apache/incubator-echarts/issues/2643)


## v3.1.1
<div class="time">2016-02-22</div>

+ 【\+】newly add npm channel to obtain echarts, see details in [webpack + echarts tutorial](http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

+ [^] fix abnormal indynamic markPoint and markLine . Fix [#2522](https://github.com/apache/incubator-echarts/issues/2522)

+ [^] fix parameter error in axis interval callback. Fix [#2470](https://github.com/apache/incubator-echarts/issues/2470)

+ [^] fix failure in customizing lineStyle of every edge in graph. Fix [#2558](https://github.com/apache/incubator-echarts/issues/2558)

+ [^] saveAsImage supports IE9+ and FireFox in toolbox.

+ [^] support cylindrical corner configuration. [#2550](https://github.com/apache/incubator-echarts/issues/2550)

+ [^] fix error in dataZoom location configuration item. Fix [#2619](https://github.com/apache/incubator-echarts/issues/2619)

+ [^] fix possible `id duplicate` error when fix `setOption` for too many times.Fix [#2452](https://github.com/apache/incubator-echarts/issues/2452)

+ [^] candlestick and boxplot chart support markPoint and markLine.Fix [#2566](https://github.com/apache/incubator-echarts/issues/2566)

+ [^] fix reset error in toolbox after use `setOption` in non-merge model.Fix [#2596](https://github.com/apache/incubator-echarts/issues/2596)

+ [^] scatter chart and markPoint support configurating `label` `formatter` in `emphasis`. Fix [#2596](https://github.com/apache/incubator-echarts/issues/2596)

+ [^] Treemap supports `roam` configuration item.

+ [^] axis of time type support time data of string format.

+ [^] fix switch problem in Line and area charts. Fix [#2625](https://github.com/apache/incubator-echarts/issues/2625)

+ [^] location optimization of multiple series of bar chart markPoint. Fix [#2623](https://github.com/apache/incubator-echarts/issues/2623)

+ [^] fix error reporting in init when theme is string and has dataZoom component. Fix [#2619](https://github.com/apache/incubator-echarts/issues/2619)

+ [^] legend and toolbox support setting height and width and wrap automatically through width and height.Fix [#2621](https://github.com/apache/incubator-echarts/issues/2621)

+ [^] optimization of line chart smooth, add in`smoothMonotone` configuration item, see details in [option.html#series-line.smoothMonotone](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.smoothMonotone), Fix [#2612](https://github.com/apache/incubator-echarts/issues/2612)

+ [^] fix incapability to trigger mouse events on computers with touch screen like Surface and so on. Fix [#2569](https://github.com/apache/incubator-echarts/issues/2569)

## v3.0.2
<div class="time">2016-01-23</div>

+ [^] fix highlight failture in scatter chart.

+ [^] optimize tooltip linkage. Fix [#2445](https://github.com/apache/incubator-echarts/issues/2445)

+ [^] dataZoom of inside type support zoomLock.

+ [^] add error alert of non-exist map type.

+ [^] optimize legend switch animation of line chart.

+ [^] fix problem about Legends cannot be added dynamically. Fix [#2457](https://github.com/apache/incubator-echarts/issues/2457)

+ [^] fix timeline's incapability to configutate show.

+ [^] fix 0 data shown as undefined in tooltip .Fix [#2463](https://github.com/apache/incubator-echarts/issues/2463)

+ [^] fix incorrect display of dataZoom zoom graphic. Fix [#2462](https://github.com/apache/incubator-echarts/issues/2462)

+ [^] fix the problem of axis `min` `max` as string, PR [#2481](https://github.com/apache/incubator-echarts/pull/2481)

## v3.0.1
<div class="time">2016-01-18</div>

+ [+] add [getOption](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.getOption) and [clear](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.clear) method

+ [^] fix average value, maximum value and minimum vaule label and the incapability to show correct value of tooltip. Fix [#2393](https://github.com/apache/incubator-echarts/issues/2393)

+ [^] fix drawing incorrectness when bar chart  has bigger width than height, Fix [#2343](https://github.com/apache/incubator-echarts/issues/2343)

+ [^] fix the function problem of legend `show` configuration item. Fix [#2371](https://github.com/apache/incubator-echarts/issues/2371)

+ [^] map type can choose data attribute.

+ [^] fix average mark and mark calculation errors, Fix [#2367](https://github.com/apache/incubator-echarts/issues/2367)

+ [^] animation optimization when line chart change from `'-'` no data to data.

+ [^] mouse wheel zoom direction change to ommonly used one.

+ [^] data area zoom tool in toolbar support specified axis, see detail in[toolbox document](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature.dataZoom.yAxisIndex)

+ [^] fix no data error on timeline, scale change from `[-1, 1]` to `[0, 1]` when data value axis has no data.

+ [^] fix drawing error of axis splitArea.

+ [^] fix multiple chart example linkage problem. Fix [#2391](https://github.com/apache/incubator-echarts/issues/2391)

+ [^] fix the problem that color on legend cannot display correctly with pie chart color being callback function. Fix [#2372](https://github.com/apache/incubator-echarts/issues/2372)

+ [^] fix mouse hover errors when pie chart data is 0.

+ [^] when all pie chart data are 0, secotrs changed to uniform distribution.

+ [^] fix errors in background seeting under IE 8.

+ [^] fix incorrect release event in tooltip component dispose.

## v3.0.0
<div class="time">2016-01-12</div>

+ The new echarts