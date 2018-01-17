## v4.0.0
<div class="time">2018-01-16</div>

+ [+] **支持最高达千万级数据量渲染**。ECharts4 变更为流式结构，并且配合各种细致的优化，对于大数据量的渲染场景，支持了增量加载数据和渐进渲染。几千万的地理坐标数据就算使用二进制存储也要占上百 MB 的空间，增量加载数据可以支持用户对数据分块后加载，或者使用 WebSocket，从而能很快的渲染出结果并且不会阻塞浏览器。增量加载的例子可以参考使用了 ECharts GL 的 [scatterGL-gps](http://echarts.baidu.com/examples/editor.html?c=scatterGL-gps&gl=1) 和 [linesGL-ny](http://echarts.baidu.com/examples/editor.html?c=linesGL-gps&gl=1)，以及单使用 ECharts 基础库的 [lines-ny](http://echarts.baidu.com/examples/editor.html?c=lines-ny)。对于大数据量下的用户交互，能做到浏览器中的布局重绘等计算不会阻塞连续交互操作（常见如持续的平移缩放等）。其中，ECharts GL 下因 GPU 计算和省去了重布局等操作，会有效果很平滑的效果的交互体验，参见上面的例子。而 ECharts 基础库也使用了渐进渲染来支持交互的无阻塞，参见 [lines-airline](http://echarts.baidu.com/examples/editor.html?c=lines-airline) 和 [lines-airline](http://echarts.baidu.com/examples/editor.html?c=scatter-large) 的缩放平移。

+ [+] **zrender SVG 渲染引擎发布，从而支持 Canvas / SVG 双引擎渲染，可进按照场景所需进行切换。例如，SVG 可适用于移动端、单页多图表等场景，Canvas 适用于大数据量、视觉特效需求等场景。Canvas 渲染引擎仍为默认引擎。**

+ [+] **发布旭日图（sunburst）**，高效表达带有层次结构的数据占比情况，并有良好的交互体验。参见 [旭日图](http://echarts.baidu.com/demo.html#chart-type-sunburst)。

+ [+] **新增 [dataset](http://echarts.baidu.com/tutorial.html#%E6%95%B0%E6%8D%AE%E9%9B%86%EF%BC%88dataset%EF%BC%89) 组件**，从而能够数据与样式分离，便于单独管理数据，支持数据映射到视觉配置，可以多个系列共享数据，也省去数据分割处理的步骤。

+ [+] **支持无障碍富互联网应用规范集（WAI-ARIA，the Accessible Rich Internet Applications Suite）**，致力于使得网⻚内容和网⻚应，用能够被更多残障人士访问。

+ [+] ECharts4 开始，`label`、`itemStyle` 等配置被扁平化了，去掉了原先的 `normal` 层级，使得 `option` 更为清爽。**ECharts3 的配置方式也仍然被兼容**。

+ [+] 新增了两套内置的颜色主题，名为 'light', 'dark'，可通过 `echarts.init(dom, themeName);` 来使用它们。

+ [+] 支持 [legend.data](http://echarts.baidu.com/option.html#legend.data) 不指定时，自动根据系列生成。

+ [+] 支持类目轴（`axis.type: 'category'`）中 [axis.data](http://echarts.baidu.com/option.html#xAxis.data) 不指定时，自动根据数据生成。





## v3.8.4
<div class="time">2017-11-13</div>

+ [^] 修复了 `index*.js` 中的 `registerMap` 问题。
+ [^] 修复了注入导致的个别 CommonJS 模块错误。


## v3.8.2
<div class="time">2017-11-10</div>

+ [^] 修复了 `3.8.0` 中向后兼容的几个问题：
    + `3.8.0` 的 `lib` 目录中和 `src` 是一样的内容（ES Module）。而老版本的 node 和 webpack 不能支持。所以 `3.8.2` 中 `lib` 仍然恢复为 commonJS 格式。
    + `3.8.0` 的 `src` 中的源代码含有 `__DEV__` 全局变量（这个标志里的代码段，用于为 echarts 的使用者打印开发帮助信息），全局变量的声明需要手动引入 `echarts/src/config.js` 或者在 `webpack`/`rollup` 中做相应配置（参见 [自定义构建](http://echarts.baidu.com/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts)）。但是这并不向后兼容。所以在 `3.8.2` 中的 `echarts/lib/**` 中的代码，去掉了 `__DEV__` 变量。如果需要有开发者帮助的版本，请引用 `echarts/src/**`。
    + `3.8` 以后，`echarts/src/echarts.js`（即 `echarts/lib/echarts.js`）中并不会包括之前挂载于其上的工具方法，对外开放的工具方法汇总在 `echarts/src/export` 并挂载在 `echarts/echarts*.js`。但是这并不向后兼容。所以 `3.8.2` 改回为 `echarts/lib/echarts.js` 会像原来一样挂载这些方法。
    + `echarts/extension/dataTool` 的引用和挂载方式，改为为 `3.8` 之前的方式：必须手动引用，引用则会挂载到 `echarts` 名空间上。
+ [^] 修复了 SVG 渲染器的空值抛错问题。



## v3.8.0
<div class="time">2017-11-07</div>

+ [+] **新增 [树图](http://echarts.baidu.com/option.html#series-tree)**。其中支持 [横向布局](http://echarts.baidu.com/demo.html#tree-basic)、[纵向布局](http://echarts.baidu.com/demo.html#tree-vertical)、[径向布局](http://echarts.baidu.com/demo.html#tree-radial)。

+ [+] **新增 [SVG 渲染支持（beta 版）](http://echarts.baidu.com/tutorial.html#%E4%BD%BF%E7%94%A8%20Canvas%20%E6%88%96%E8%80%85%20SVG%20%E6%B8%B2%E6%9F%93)**。从而可以根据自己的需要，选择 SVG 或者 Canvas 作为渲染引擎。

+ [+] 源代码的模块系统改用 ES Module。从而可以受益于 tree shaking，减小构建所得 bundle 的体积。

+ [+] 提供了构建脚本，方便于灵活引用模块和多语言构建，参见 [自定义构建](http://echarts.baidu.com/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts)。并且加入了 [xvaara](https://github.com/xvaara) 提供的芬兰语（[PR #6863](https://github.com/ecomfe/echarts/pull/6863)）。

+ [+] 支持了 [axis arrow](http://echarts.baidu.com/option.html#xAxis.axisLine.symbol). 参见 [#6675](https://github.com/ecomfe/echarts/issues/6675)。

+ [+] treemap 中支持了 [strokeWidth](http://echarts.baidu.com/option.html#series-treemap.levels.itemStyle.normal.strokeWidth) 和 [strokeColor](http://echarts.baidu.com/option.html#series-treemap.levels.itemStyle.normal.strokeColor)。参见 [#6804](https://github.com/ecomfe/echarts/issues/6804)。

+ [+] graph 图中支持了鼠标悬浮到边上时也 [显示相邻点](http://echarts.baidu.com/option.html#series-graph.focusNodeAdjacency) 的功能。参见 [#6772](https://github.com/ecomfe/echarts/issues/6772)。

+ [^] 修复了 [grid.containLabel](http://echarts.baidu.com/option.html#grid.containLabel) 为 `true` 且 [轴标签旋转](http://echarts.baidu.com/option.html#yAxis.axisLabel.rotate) 时的坐标系范围判断。感谢 [xvaara](https://github.com/xvaara) 提供的 [PR #6951](https://github.com/ecomfe/echarts/pull/6951)。

+ [^] 修复设置了 [类目轴](http://echarts.baidu.com/option.html#xAxis.type) 中设置了 [axisLabel.rotate](http://echarts.baidu.com/option.html#xAxis.axisLabel.rotate) 以后，interval 计算有误的 bug。参见 [#4170](https://github.com/ecomfe/echarts/issues/4170)。感谢 [lanyuechen](https://github.com/lanyuechen) 提供的 [PR #6903](https://github.com/ecomfe/echarts/pull/6903)。

+ [^] 修复了 `dataTool.prepareBoxplotData` 的负值问题。感谢 [d-rudolf](https://github.com/d-rudolf) 提供的 [PR #6749](https://github.com/ecomfe/echarts/pull/6749)。

+ [^] 优化了 [时间类型坐标轴](http://echarts.baidu.com/option.html#xAxis.type) 的刻度显示。感谢 [xiaoshan00](https://github.com/xiaoshan00) 提供的 [PR #6808](https://github.com/ecomfe/echarts/pull/6808)。

+ [^] 支持了 [radiusAxis.inverse](http://echarts.baidu.com/option.html#radiusAxis.inverse)。参见 [#6805](https://github.com/ecomfe/echarts/issues/6805) 和 [#4253](https://github.com/ecomfe/echarts/issues/4253)。

+ [^] 修复了和 webpack 中约定特殊变量重名的问题。参见 [#6788](https://github.com/ecomfe/echarts/issues/6788)。

+ [^] 修复了 [可滚动图例](http://echarts.baidu.com/demo.html#pie-legend) 定位不准确问题。参见 [#6756](https://github.com/ecomfe/echarts/issues/6756)。

+ [^] 修复了 [themeRiver](http://echarts.baidu.com/demo.html#themeRiver-basic) 图例颜色不正确的问题。参见 [#6932](https://github.com/ecomfe/echarts/issues/6932)。

+ [^] 修复了刷选时如果存在空值则报错的问题。参见 [#6892](https://github.com/ecomfe/echarts/issues/6892)。

+ `dist/echarts/echarts.simple.js` 中不再包含 echarts 上所挂载的工具方法。如果需要使用工具方法，可使用 `dist/echarts/echarts.common.js` 或者 `dist/echarts/echarts.js`，或者 [自定义构建](http://echarts.baidu.com/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts)。

+ 对于 dataTool 的变化：使用 `dist/echarts/echarts.simple.js` 和 `dist/echarts/echarts.common.js`，和之前相同，须自行引入 `dist/echarts/extension/dataTool.js`，但是不会挂载成 `echarts.dataTool`。使用 `dist/echarts/echarts.js` 时，默认包含 `echarts.dataTool`。

详细的介绍见 [ECharts 3.8.0 介绍](http://efe.baidu.com/blog/echarts-3.8.0/)







## v3.7.2
<div class="time">2017-09-27</div>

+ [+] 支持了纯英文版 echarts（即默认文字提示为英文）。在 <https://github.com/ecomfe/echarts/tree/master/dist> 中。参见 [#2321](https://github.com/ecomfe/echarts/issues/2321)。

+ [+] 支持了设置饼图高亮扇区偏移量：[pie.hoverOffset](http://echarts.baidu.com/option.html#series-pie.hoverOffset)。参见 [#3857](https://github.com/ecomfe/echarts/issues/3857)。

+ [^] 修复了 [K线图（candlestick）](http://echarts.baidu.com/option.html#series-candlestick) 中 data 的兼容性。参见 [#6576](https://github.com/ecomfe/echarts/issues/6576)。

+ [^] 修复了 [showMaxLabel](http://echarts.baidu.com/option.html#xAxis.showMaxLabel) [showMinLabel](http://echarts.baidu.com/option.html#xAxis.showMinLabel)。

+ [^] 修复了负值时区域图的朝向。参见 [#6707](https://github.com/ecomfe/echarts/issues/6707)。

+ [^] 统一了 [axis.nameLocation](http://echarts.baidu.com/option.html#xAxis.nameLocation) 取值为 `'middle'` 和 `'center'` 的表现。

+ [^] 修复了 [markArea.itemStyle.emphasis](http://echarts.baidu.com/option.html#series-line.markArea.itemStyle.emphasis) 无效的问题。参见 [#5245](https://github.com/ecomfe/echarts/issues/5245)。

+ [^] 修复了 [treemap](http://echarts.baidu.com/option.html#series-treemap) 右键点击问题。参见 [#6313](https://github.com/ecomfe/echarts/issues/6313)。

+ [^] 修复了在有 DST (Day Saving Time) 的地区的 calendar 出错的问题。参见 [#6543](https://github.com/ecomfe/echarts/issues/6543)。

+ [^] 优化了 IE 高版本保存为图片功能。参见 [#6279](https://github.com/ecomfe/echarts/issues/6279)。

+ [^] 修复了尾迹特效清除问题。参见 [#6577](https://github.com/ecomfe/echarts/issues/6577)。

+ [^] 修复了 [K线图（candlestick）](http://echarts.baidu.com/option.html#series-candlestick) 中开盘收盘相等时颜色问题。参见 [#6583](https://github.com/ecomfe/echarts/issues/6583)。

+ [^] 修复了 `markPoint` 向后兼容的问题。参见 [#6503](https://github.com/ecomfe/echarts/issues/6503)。




## v3.7.1
<div class="time">2017-08-31</div>

[Recovery Build]

+ [+] [axis.min](http://echarts.baidu.com/option.html#xAxis.min), [axis.max](http://echarts.baidu.com/option.html#xAxis.max) 支持了设置函数。参见 [#6465](https://github.com/ecomfe/echarts/issues/6465)。

+ [^] 修复了 textStyle 相关兼容性和 emphasis style 问题，参见 [#6491](https://github.com/ecomfe/echarts/issues/6491)、[#6529](https://github.com/ecomfe/echarts/issues/6529)、[#6516](https://github.com/ecomfe/echarts/issues/6516)、[#6532](https://github.com/ecomfe/echarts/issues/6532)、[#6237](https://github.com/ecomfe/echarts/issues/6237)。

+ [^] 改善了 [K线图](http://echarts.baidu.com/option.html#series-candlestick) 边界模糊的问题。

+ [^] 修复了关系图在 [focusNodeAdjacency](http://echarts.baidu.com/option.html#series-graph.focusNodeAdjacency) 状态下不能采用 emphasis style 的问题。



## v3.7.0
<div class="time">2017-08-16</div>

+ **[+] 支持了 [富文本标签](http://echarts.baidu.com/tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)**。富文本标签能够对文本块、文本的部分片段进行样式设置，以及支持在文本中使用图片，并且支持了更多的对齐、旋转能力，从而可以形成丰富的效果。

+ **[+] 支持了 [可翻页的图例](http://echarts.baidu.com/option.html#legend.type)**，提供一种方案解决图例过多页面放不下或者难于自适应的问题。参见 [垂直图例](http://echarts.baidu.com/demo.html#pie-legend) 或 [水平图例](http://echarts.baidu.com/demo.html#radar2)。

+ [+] `textStyle` 配置项扁平化。在 echarts 中有众多的 `textStyle` 设置，例如 [series-bar.label.normal.textStyle](http://echarts.baidu.com/option.html#series-bar.label.normal.textStyle)、[xAxis.axisLabel.textStyle](http://echarts.baidu.com/option.html#xAxis.axisLabel.textStyle) 等等。这些 `textStyle` 有些层级过深和语法冗余，导致不方便，所以进行了扁平化，去掉了他们的 `textStyle` 这个层级。也就是从前是这种写法：`label.normal.textStyle.fontSize`、`axisLabel.textStyle.fontSize`，`v3.7` 之后，推荐这种写法 `label.normal.fontSize`、`axisLabel.fontSize`。当然，之前的写法仍然被兼容。有这些地方进行了扁平化：
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

+ [+] 对于时间坐标轴（即 [axis.type](http://echarts.baidu.com/option.html#xAxis.type) 为 `'time'`）支持了 [minInterval](http://echarts.baidu.com/option.html#xAxis.minInterval)。对于时间坐标轴和数值坐标轴（即 [axis.type](http://echarts.baidu.com/option.html#xAxis.type) 为 `'value'`）支持了 [maxInterval](http://echarts.baidu.com/option.html#xAxis.maxInterval)，从而能控制缩放（如 dataZoom）时刻度的最大最小范围。

+ [+] 支持了 [xAxis.axisLine.onZeroAxisIndex](http://echarts.baidu.com/option.html#xAxis.axisLine.onZeroAxisIndex)，从而能在多轴并且需要轴 `onZero` 的场景下，灵活设置轴互相的对应关系。参见 [#5069](https://github.com/ecomfe/echarts/issues/5069)。

+ [+] 支持了 `自定义系列(custom series)` 不使用 [坐标系](http://echarts.baidu.com/option.html#series-custom.coordinateSystems)。

+ [+] 支持了柱状图标签的旋转。参见 [rotate](http://echarts.baidu.com/option.html#series-bar.label.normal.rotate)、[align](http://echarts.baidu.com/option.html#series-bar.label.normal.align)、[verticalAlign](http://echarts.baidu.com/option.html#series-bar.label.normal.verticalAlign)。参见 [例子](http://echarts.baidu.com/demo.html#bar-label-rotation)。参见 [#5309](https://github.com/ecomfe/echarts/issues/5309)。

+ [+] 支持了 [radar.indicator.color](http://echarts.baidu.com/option.html#radar.indicator.color)，从而雷达每个标签能设置不同颜色。参见 [#6128](https://github.com/ecomfe/echarts/issues/6128)。

+ [+] 支持了 [dataZoom.rangeMode](http://echarts.baidu.com/option.html#dataZoom.rangeMode)，从而能在数据更新时固定缩放区域。参见 [#6128](https://github.com/ecomfe/echarts/issues/6040)。

+ [+] 支持了 [action.legend.legendToggleSelect](http://echarts.baidu.com/api.html#action.legend.legendToggleSelect), [action.legend.legendSelect](http://echarts.baidu.com/api.html#action.legend.legendSelect), [action.legend.legendUnSelect](http://echarts.baidu.com/api.html#action.legend.legendUnSelect) 中使用 `dataIndex`。参见 [#4242](https://github.com/ecomfe/echarts/issues/4242)。

+ [+] 支持了 [map.label.formatter](http://echarts.baidu.com/option.html#series-map.label.formatter)，从而方便于在地图系列中使用富文本标签。参见：[地图标签](http://echarts.baidu.com/demo.html#map-labels)。

+ [+] 支持了 [title.borderRadius](http://echarts.baidu.com/option.html#title.borderRadius) 和 [legend.borderRadius](http://echarts.baidu.com/option.html#legend.borderRadius)，从而他们能绘制圆角的背景或边框。

+ [^] 修复了在 IE 某些版本中饼图和折线图中设置了阴影效果后偶见的异常。参见 [#5777](https://github.com/ecomfe/echarts/issues/5777)。

+ [^] 修复了地图中如果 `nameMap` 被设置且某些区域没有数据时，`tooltip` 中得不到区域名的问题。参见 [#5633](https://github.com/ecomfe/echarts/issues/5633)。

+ [^] 修复了百度地图扩展中，地图平移后 tooltip 位置错误的问题。参见 [#6211](https://github.com/ecomfe/echarts/issues/6211)。

+ [^] 修复了 `axisPointer` 偶发的报错。参见 [#6121](https://github.com/ecomfe/echarts/issues/6121)。

+ [^] 修复了热力图高度为 0 时的报错。参见 [#6214](https://github.com/ecomfe/echarts/issues/6214)。

+ [+] 修复了 [candlestick](http://echarts.baidu.com/option.html#series-candlestick) 第一个数据项为空时的异常。参见 [#6059](https://github.com/ecomfe/echarts/issues/6059)。

+ [^] 修复了 [series-bar.dimensions](http://echarts.baidu.com/option.html#series-bar.dimensions) 无效的问题。参见 [#6252](https://github.com/ecomfe/echarts/issues/6252)。

+ [^] 修复了 [自定义系列(custom series)](http://echarts.baidu.com/option.html#series-custom) 中 `group` 中子元素数目不确定时不能正确删除的问题。

+ [^] 修复了 在 `setOption` 执行之前调用 `connect` 时会抛出的异常。参见 [#6281](https://github.com/ecomfe/echarts/issues/6281)。

+ [^] 修复了 [tooltip.confine](http://echarts.baidu.com/option.html#tooltip.confine) 时的边界判断。参见 [#6277](https://github.com/ecomfe/echarts/issues/6277) 和 [0da06d8](https://github.com/ecomfe/echarts/commit/0da06d8)。

+ [^] 修复了柱状图重叠（同时设置了 `barWidth` 和 `barGap: '-100%'`）时在窄窗中的不正常。参见 [#6312](https://github.com/ecomfe/echarts/issues/6312)。

+ [^] 修复了精度问题。参见 [#6371](https://github.com/ecomfe/echarts/issues/6371)。



## v3.6.2
<div class="time">2017-06-15</div>

+ [+] [自定义系列（custom series）](http://echarts.baidu.com/option.html#series-custom) 支持 [百度地图插件（bmap）](https://github.com/ecomfe/echarts/tree/master/extension/bmap)。参见 [示例 1](http://echarts.baidu.com/demo.html#map-polygon) 和 [示例 2](http://echarts.baidu.com/demo.html#map-bin)。

+ [+] [treemap](http://echarts.baidu.com/option.html#series-treemap) 支持父节点标签的显示。参见 [示例](http://echarts.baidu.com/demo.html#treemap-show-parent)。参见：[#5869](https://github.com/ecomfe/echarts/issues/5869)、[#5579](https://github.com/ecomfe/echarts/issues/5579)。

+ [+] 支持图形元素上的鼠标 cursor 样式指定：[series-line.cursor](http://echarts.baidu.com/option.html#series-line.cursor)、[series-bar.cursor](http://echarts.baidu.com/option.html#series-bar.cursor)、[series-pie.cursor](http://echarts.baidu.com/option.html#series-pie.cursor)、[series-scatter.cursor](http://echarts.baidu.com/option.html#series-scatter.cursor)、[series-effectScatter.cursor](http://echarts.baidu.com/option.html#series-effectScatter.cursor)、[series-graph.cursor](http://echarts.baidu.com/option.html#series-graph.cursor)、[series-pictorialBar.cursor](http://echarts.baidu.com/option.html#series-pictorialBar.cursor)。

+ [+] 支持了 [series-pictorialBar.symbolBoundingData](http://echarts.baidu.com/option.html#series-pictorialBar.symbolBoundingData) 可以同时设置正向的值和负向的值。参见 [#5793](https://github.com/ecomfe/echarts/issues/5793)。

+ [+] `graph` 支持通过设置 [fixed](http://echarts.baidu.com/option.html#series-graph.data.fixed) 固定力引导布局中的指定节点。参见 [#5966](https://github.com/ecomfe/echarts/issues/5966)。

+ [+] `treemap` 支持了 [label.formatter](http://echarts.baidu.com/option.html#series-treemap.label.normal.formatter)。参见 [#5757](https://github.com/ecomfe/echarts/issues/5757)。

+ [+] `timeline` 支持了 [label.normal.textStyle.align](http://echarts.baidu.com/option.html#timeline.label.normal.textStyle.align) 和 [label.normal.textStyle.basealign](http://echarts.baidu.com/option.html#timeline.label.normal.textStyle.basealign)。参见 [#5960](https://github.com/ecomfe/echarts/issues/5960)。

+ [^] 修正了当 [large scatter](http://echarts.baidu.com/demo.html#scatter-large) 缩放后，`tooltip` 不显示的问题。参见 [#5837](https://github.com/ecomfe/echarts/issues/5837)。

+ [^] 修正了触发 [showTip](http://echarts.baidu.com/api.html#action.tooltip.showTip) action 时 `position` 参数无效的问题。参见 [#5874](https://github.com/ecomfe/echarts/issues/5874)。

+ [^] 修正了因精度导致的有时 [pie](http://echarts.baidu.com/option.html#series-pie) 显示出的百分比总值不足 `100%` 的问题。参见 [#5850](https://github.com/ecomfe/echarts/issues/5850)。

+ [^] 修正了当 `series.name` 相同时，只会显示最后一个系列的 `markPoint` 或 `markLine` 的问题。参见 [#5712](https://github.com/ecomfe/echarts/issues/5712)。

+ [^] 修正了 [barBorderRadius](http://echarts.baidu.com/option.html#series-bar.itemStyle.normal.barBorderRadius) 在水平条形图中不工作的问题。参见 [#5943](https://github.com/ecomfe/echarts/issues/5943)。

+ [^] 修正了 [dataZoom-inside](http://echarts.baidu.com/option.html#dataZoom-inside) 使用在 Y 轴时缩放点错误的问题。参见 [#5278](https://github.com/ecomfe/echarts/issues/5278)。

+ [^] 修正了 [radar](http://echarts.baidu.com/option.html#series-radar) 在某些数据中绘制不出的问题。参见 [#5986](https://github.com/ecomfe/echarts/issues/5986)。



## v3.6.1
<div class="time">2017-05-26</div>

[Recovery Build]

+ [^] 修正了 [data sampling](http://echarts.baidu.com/option.html#series-line.sampling) 的失效。
+ [^] 修正了 使用 webpack 编译时在 ie11 中的问题。参见 [zrender/#189](https://github.com/ecomfe/zrender/issues/189)。


## v3.6.0
<div class="time">2017-05-25</div>

+ **[+] 发布自定义系列 [custom series](http://echarts.baidu.com/option.html#series-custom)** 自定义系列能让用户定制渲染逻辑，从而在已有坐标系中绘制自定义的图表。参见 [示例](http://echarts.baidu.com/examples.html#chart-type-custom)。

+ **[+] 支持极坐标柱状图** 参见 [示例1](http://echarts.baidu.com/demo.html#bar-polar-stack)、[示例2](http://echarts.baidu.com/demo.html#bar-polar-stack-radial)、[示例3](http://echarts.baidu.com/demo.html#bar-polar-real-estate)。

+ [+] 支持了 [encode](http://echarts.baidu.com/option.html#series-scatter.encode) 设定，可以指定 [data](http://echarts.baidu.com/option.html#series-scatter.data) 中哪些维度映射到坐标系中哪个轴，或者哪些维度在 [tooltip](http://echarts.baidu.com/option.html#tooltip) 以及 [label](http://echarts.baidu.com/option.html#series-scatter.label) 中显示。[Break Change]: `cartesian2d` 中的第三个维度的默认名称从 `'z'` 改为了 `'value'`，如果在 [visualMap.dimension](http://echarts.baidu.com/option.html#visualMap.dimension) 中使用了 `'z'` 这个名称，请改为 `'value'` 或者 `2`。

+ [+] 支持了 [dimensions](http://echarts.baidu.com/option.html#series-scatter.dimensions) 设定，能指定 [data](http://echarts.baidu.com/option.html#series-scatter.data) 中每个维度的名称和类型。名称可以显示在默认 [tooltip](http://echarts.baidu.com/option.html#tooltip) 中。

+ [+] `dataZoom` 支持了 [minSpan](http://echarts.baidu.com/option.html#dataZoom.minSpan) 和 [maxSpan](http://echarts.baidu.com/option.html#dataZoom.maxSpan)。参见 [#2843](https://github.com/ecomfe/echarts/issues/2843)。

+ [+] `dataZoom` 支持了 [moveOnMouseMove](http://echarts.baidu.com/option.html#dataZoom-inside.moveOnMouseMove) 和 [zoomOnMouseWheel](http://echarts.baidu.com/option.html#dataZoom-inside.zoomOnMouseWheel)，从而能够设定按住 'ctrl' 键或者 'alt' 键或者 'shift' 键同时滚动滚轮触发 dataZoom。此外，支持了 [preventDefaultMouseMove](http://echarts.baidu.com/option.html#dataZoom-inside.preventDefaultMouseMove) 设置，参见 [#5769](https://github.com/ecomfe/echarts/issues/5769)。

+ [+] `dataZoom` 的 [handleIcon](http://echarts.baidu.com/option.html#dataZoom-slider.handleIcon) 支持使用 image。

+ [^] 修正了世界地图的边界问题。

+ [^] 修正了当 [min](http://echarts.baidu.com/option.html#xAxis.min) 被设置时，[minInterval](http://echarts.baidu.com/option.html#xAxis.minInterval) 不能正常工作的问题。参见 [#4838](https://github.com/ecomfe/echarts/issues/4838)。

+ [^] 修正了 Object 默认属性导致的问题。参见 [#5576](https://github.com/ecomfe/echarts/issues/5576)。

+ [^] 修正了 legend 选择变化时进行 `setOption` 时 [graphic](http://echarts.baidu.com/option.html#graphic) 导致的错误。参见 [#5783](https://github.com/ecomfe/echarts/issues/5783)。

+ [^] 修正了 `parallel` 对 [axisLabel.interval](http://echarts.baidu.com/option.html#parallelAxis.axisLabel.interval) 的支持。参见 [#5694](https://github.com/ecomfe/echarts/issues/5694)。

+ [^] 增强了 `dataZoom` 控件的交互。

+ [^] 修正了 [minAngle](http://echarts.baidu.com/option.html#series-pie.minAngle) 在玫瑰图上的问题。参见 [#5617](https://github.com/ecomfe/echarts/issues/5617)。

+ [^] 修正了 tooltip 更新时报错的问题。


## v3.5.4
<div class="time">2017-04-27</div>

+ [^] 修复了对 [水球图](https://github.com/ecomfe/echarts-liquidfill) clipPath 的支持问题。
+ [^] 修复了 `label` 设置为 `insideTop` 时的位置。
+ [^] 修复了 [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) transform 时的问题。


## v3.5.3
<div class="time">2017-04-14</div>

+ [^] 修复了 `option` 中 `left` `right` `width` `top` `bottom` `height` 的默认选取问题。参见 [#5440](https://github.com/ecomfe/echarts/issues/5440)。

+ [^] 修复了 [showTip](http://echarts.baidu.com/api.html#action.tooltip.showTip) 使用像素点位置传入时的问题。参见 [#5449](https://github.com/ecomfe/echarts/issues/5449)。

+ [^] 优化了只有一个数据时 [boundaryGap](http://echarts.baidu.com/option.html#xAxis.boundaryGap) 的效果。参见 [#4417](https://github.com/ecomfe/echarts/issues/4417)。

+ [^] 修复了 [gauge](http://echarts.baidu.com/option.html#series-gauge.animationEasing) 的动画效果设置。参见 [#5451](https://github.com/ecomfe/echarts/issues/5451)。

+ [^] 修复了 [treemap](http://echarts.baidu.com/option.html#series-treemap) 数据值相同时，排序不稳定的问题。

+ [^] 修正了组件重叠时 roam 以及 brush 之间的冲突。

+ [^] 扩大了 [parallel axis name](http://echarts.baidu.com/option.html#parallelAxis.nameRotate) 倾斜时的文字可显示区域，能显示更长的维度标题。

+ [^] 使 [toolbox 清除选区按钮](http://echarts.baidu.com/option.html#toolbox.feature.brush.type) 能够清除[parallelAxis](http://echarts.baidu.com/option.html#parallelAxis) 的选区。

+ [^] 优化了 `zrender` 图形性能，最高提升 50%。


## v3.5.2
<div class="time">2017-04-05</div>

+ [+] 增加了 [useUTC](http://echarts.baidu.com/option.html#useUTC) 配置项，支持按照 UTC 或本地时间显示 `axisLabel` 和 `tooltip`。并且修改了时间解析和显示的默认设定：默认在 `axisLabel` 和 `tooltip` 中显示本地时间，`data` 中使用没指定时区的时间字符串时默认解析为本地时间。参见 [series.data 中时间类型部分](http://echarts.baidu.com/option.html#series-line.data)。修复了 `axis.type` 为 `'time'` 时默认按照 UTC 取刻度的问题。修复了 [#5396](https://github.com/ecomfe/echarts/issues/5396) 和 [#5393](https://github.com/ecomfe/echarts/issues/5393)。

+ [+] 增加了 [axisLabel.showMinLabel](http://echarts.baidu.com/option.html#xAxis.axisLabel.showMinLabel) 和 [axisLabel.showMaxLabel](http://echarts.baidu.com/option.html#xAxis.axisLabel.showMaxLabel)。

+ [+] 支持 [funnel.sort](http://echarts.baidu.com/option.html#series-funnel.sort) 按照 index 排序或自定义排序。

+ [^] 修复了 `axisTick` 浮点数精度错误的问题。参见 [#5041](https://github.com/ecomfe/echarts/issues/5041)。

+ [^] 修复了 `axisTick` 数值过小时不显示的问题。参见 [#5386](https://github.com/ecomfe/echarts/issues/5386)。

+ [^] 修复了 [tooltip.trigger](http://echarts.baidu.com/option.html#tooltip.trigger) 为 `'axis'` 时使用 `dispatchAction` 触发 [showTip](http://echarts.baidu.com/api.html#action.tooltip.showTip) 无效的问题。参见 [#5423](https://github.com/ecomfe/echarts/issues/5423)。

+ [^] 修复了 [visualMap](http://echarts.baidu.com/option.html#visualMap) 使 [map](http://echarts.baidu.com/option.html#series-map) 的 `itemStyle` 失效的问题。参见 [#5388](https://github.com/ecomfe/echarts/issues/5388)。

+ [^] 修复了 [tooltip.trigger](http://echarts.baidu.com/option.html#tooltip.trigger) 不支持 `'none'` 的问题。参见 [#5400](https://github.com/ecomfe/echarts/issues/5400)。

+ [^] 修复了 [sankey](http://echarts.baidu.com/option.html#series-sankey) 在 ie11 上的问题。参见 [#3306](https://github.com/ecomfe/echarts/issues/3306)。

+ [^] 修复了 [parallel](http://echarts.baidu.com/option.html#series-parallel) 的 `data.lineStyle.color` 无效的问题。参见 [#5363](https://github.com/ecomfe/echarts/issues/5363)。


## v3.5.1
<div class="time">2017-03-23</div>

Recovery Build

+ [^] 修复了 [tooltip.formatter](http://echarts.baidu.com/option.html#tooltip.formatter) 为函数时返回值为 `null`/`undefined` 时显示 `"undefined"` 的问题。参见 [#5352](https://github.com/ecomfe/echarts/issues/5352)。

+ [^] 修复了 [visualMap 组件](http://echarts.baidu.com/option.html#visualMap) 处理 rgba 不正确的问题。参见 [#5350](https://github.com/ecomfe/echarts/issues/5350)。


## v3.5.0
<div class="time">2017-03-23</div>

+ **[+] 发布日历图（日历坐标系）[calendar](http://echarts.baidu.com/option.html#calendar)** 参见 [示例](http://echarts.baidu.com/examples.html#calendar)。

+ **[+] 发布统计插件 [echarts-stat](https://github.com/ecomfe/echarts-stat)**

+ **[+] 坐标轴指示器增强** 参见示例：[联动](http://echarts.baidu.com/examples.html#candlestick-brush)、 [移动端（触屏）1](http://echarts.baidu.com/examples.html#line-tooltip-touch)、[移动端（触屏）2](http://echarts.baidu.com/examples.html#candlestick-touch)、[分析](http://echarts.baidu.com/examples.html#scatter-nutrients-matrix)、[多Y轴](http://echarts.baidu.com/examples.html#multiple-y-axis)、[多X轴](http://echarts.baidu.com/examples.html#multiple-x-axis)。支持和修复了 [#5040](https://github.com/ecomfe/echarts/issues/5040)，[#5039](https://github.com/ecomfe/echarts/issues/5039)，[#5102](https://github.com/ecomfe/echarts/issues/5102)，[#5262](https://github.com/ecomfe/echarts/issues/5262)，[#4905](https://github.com/ecomfe/echarts/issues/4905)，[#4921](https://github.com/ecomfe/echarts/issues/4921)，[#5091](https://github.com/ecomfe/echarts/issues/5091)

+ [+] 增强了 `echarts.util.parseDate` 方法，支持多种日期表达式的统一解析成 UTC 时间。参见 [series.data 中时间类型部分](http://echarts.baidu.com/option.html#series-line.data)

+ [^] 优化了 GeoJSON 的处理。

+ [^] 修复了 [toolbox 中 dataZoom](http://echarts.baidu.com/option.html#toolbox.feature.dataZoom) 不能同时控制多个 x 轴问题。参见 [#4896](https://github.com/ecomfe/echarts/issues/4896)。

+ [^] 修复了 [dataZoom](http://echarts.baidu.com/option.html#dataZoom) 中 category 轴的默认范围。参见 [#5226](https://github.com/ecomfe/echarts/issues/5226)。

+ [^] disConnect 函数命名修改为 disconnect。参见 [#5208](https://github.com/ecomfe/echarts/issues/5208)。

+ [^] 去除了指定 `width,height` 初始化 echarts 时的不正确提示。参见 [#4569](https://github.com/ecomfe/echarts/issues/4569)。

+ [^] 修复漏斗图 tooltip 不能支持百分比问题。参见 [#4347](https://github.com/ecomfe/echarts/issues/4347) 和 [#4332](https://github.com/ecomfe/echarts/pull/4332)。

+ [^] 修复了 [gauge](http://echarts.baidu.com/option.html#series.gauge) 指针颜色的 `'auto'` 模式。参见 [#5109](https://github.com/ecomfe/echarts/issues/5109)。

+ [^] 修复了 [series-gauge.pointer.show](http://echarts.baidu.com/option.html#series-gauge.pointer.show) 为 `false` 时出错的问题。参见 [#4944](https://github.com/ecomfe/echarts/issues/4944)。

+ 修复 treemap 数据初始化使自动类型判断的不准确。

+ 修复了 [toolbox](http://echarts.baidu.com/option.html#toolbox) 样式。参见 [#3591](https://github.com/ecomfe/echarts/issues/3591)。

+ 改进了在类目轴（category axis）上的 [刷选](http://echarts.baidu.com/option.html#brush)行为。

+ [^] 修复了 [visualMap-piecewise.categories](http://echarts.baidu.com/option.html#visualMap-piecewise.categories) 如果是数字字符串则不正常的问题。参见 [#4960](https://github.com/ecomfe/echarts/issues/4960)。



## v3.4.0
<div class="time">2017-01-12</div>

+ **[+] 发布象形柱图：[pictorialBar](http://echarts.baidu.com/option.html#series-pictorialBar)。参见[例子](http://echarts.baidu.com/examples.html#chart-type-pictorialBar)。**

+ **[+] 发布主题河流图：[themeRiver](http://echarts.baidu.com/option.html#series-themeRiver)。参见[例子](http://echarts.baidu.com/examples.html#chart-type-themeRiver)。**

+ [+] [map series](http://echarts.baidu.com/option.html#series-map) 可以使用用户指定的 [geo 坐标系](http://echarts.baidu.com/option.html#geo) 了（原先是只能使用内置的 geo 坐标系）。从而，geo 坐标系可以使用 [map series](http://echarts.baidu.com/option.html#series-map) 控制自身的颜色，并且 [map series](http://echarts.baidu.com/option.html#series-map) 可以和其他类型的 series（如 [scatter series](http://echarts.baidu.com/option.html#series-scatter)）共享 geo 坐标系。参见 [series-map.geoIndex](http://echarts.baidu.com/option.html#series-map.geoIndex)。

+ [+] 增加了 [focusNodeAdjacency action](http://echarts.baidu.com/api.html#action.graph.focusNodeAdjacency)，从而能用 API 控制 [graph](http://echarts.baidu.com/option.html#series-geo) 的连接高亮。

+ [+] 增加了 [series-pie.animationType](http://echarts.baidu.com/option.html#series-pie.animationType)，支持不同的饼图动画效果。

+ [+] [animationDuration](http://echarts.baidu.com/option.html#animationDuration) 增加了回调函数支持，可以根据不同的数据项得到不同的动画时长。

+ [+] [category axis](http://echarts.baidu.com/option.html#xAxis.type) 支持了 [min](http://echarts.baidu.com/option.html#xAxis.min) [max](http://echarts.baidu.com/option.html#xAxis.max) 的设置。

+ [+] [category axis](http://echarts.baidu.com/option.html#xAxis.type) 默认情况会显示所有的类目，不论是否有类目中没有数据（原先两端的没有数据的类目不会被显示）。

+ [+] 使用 [singleAxis](http://echarts.baidu.com/option.html#singleAxis) 时，`series.data` 支持了一维数组的数据格式，如 `[11, 23, 44]`。

+ [+] [dataZoom](http://echarts.baidu.com/option.html#dataZoom) 支持了 [singleAxis](http://echarts.baidu.com/option.html#singleAxis)。

+ [+] 开放了 throttle 工具方法：`chart.util.throttle`。

+ [+] [K 线图](http://echarts.baidu.com/option.html#series-candlestick) 支持了 [barWidth](http://echarts.baidu.com/option.html#series-candlestick.barWidth)，[barMinWidth](http://echarts.baidu.com/option.html#series-candlestick.barMinWidth)，[barMaxWidth](http://echarts.baidu.com/option.html#series-candlestick.barMaxWidth) 设置。参见 [#4783](https://github.com/ecomfe/echarts/issues/4783)。

+ [+] [线图](http://echarts.baidu.com/option.html#series-lines) 支持了 [symbol](http://echarts.baidu.com/option.html#series-lines.symbol), [symbolSize](http://echarts.baidu.com/option.html#series-lines.symbolSize) 设置。

+ [+] 支持了 [visualMap-piecewise](http://echarts.baidu.com/option.html#visualMap-piecewise) 中数据标签和首尾的文本同时显示。参见 [visualMap-piecewise.showLabel](http://echarts.baidu.com/option.html#visualMap-piecewise.showLabel) 参见 [#4845](https://github.com/ecomfe/echarts/issues/4845)。

+ [+] 一个系列使用 [visualMap](http://echarts.baidu.com/option.html#visualMap) 做视觉映射时，现在允许了系列中的某些数据项不受 `visualMap` 控制，从而能使用系列的自身的视觉定义定义（颜色、形状等）。参见 [visualMap](http://echarts.baidu.com/option.html#visualMap) 中 `视觉映射方式的配置` 一节的描述。

+ [^] 优化了 [直角坐标系](http://echarts.baidu.com/option.html#grid) 中数据全不显示时的显示效果。

+ [^] 在 [showTip](http://echarts.baidu.com/api.html#action.tooltip.showTip) 事件中开放了 `dataIndex` 参数。

+ [^] 修复了 tooltip 中的 XSS 隐患。参见 [#4769](https://github.com/ecomfe/echarts/issues/4769)。

+ [^] 修复了 [series-graph.edgeLabel](http://echarts.baidu.com/option.html#series-graph.edgeLabel) 中部分属性无效的问题。参见 [#4555](https://github.com/ecomfe/echarts/issues/4555)。

+ [^] 修复了 [series-gauge](http://echarts.baidu.com/option.html#series-gauge) 中 `min` `max` 是 `stirng` 时的 tick 渲染问题。参见 [#4617](https://github.com/ecomfe/echarts/issues/4617)。

+ [^] 修复了 [series-gauge.pointer.show](http://echarts.baidu.com/option.html#series-gauge.pointer.show) 的问题。参见 [#4618](https://github.com/ecomfe/echarts/issues/4618)。

+ [^] 修复了 [series-radar](http://echarts.baidu.com/option.html#series-radar) 在无数据时渲染可能抛错的问题。

+ [^] 修复了 [markArea.label.normal.show](http://echarts.baidu.com/option.html#series-line.markArea.label.normal.show) 的问题。参见 [#4723](https://github.com/ecomfe/echarts/issues/4723)。

+ [^] 优化了 [log 数轴](http://echarts.baidu.com/option.html#yAxis.type) 中，数据小于等于 0 时的处理。参见 [#4743](https://github.com/ecomfe/echarts/issues/4743) 和 [#3161](https://github.com/ecomfe/echarts/issues/3161)。


## v3.3.2
<div class="time">2016-11-24</div>

+ **[+] 开放图形元素设置：[graphic](http://echarts.baidu.com/option.html#graphic)。参见<http://echarts.baidu.com/gallery/editor.html?c=line-y-category> 和 <http://echarts.baidu.com/gallery/editor.html?c=line-draggable> 和 <http://echarts.baidu.com/gallery/editor.html?c=map-province>。**

+ [+] 增加了 [visualMin](http://echarts.baidu.com/option.html#series-treemap.visualMin) 和 [visualMax](http://echarts.baidu.com/option.html#series-treemap.visualMax)，增强了 [treemap](http://echarts.baidu.com/option.html#series-treemap) 的颜色映射能力。参见 [#2509](https://github.com/ecomfe/echarts/issues/2509)。

+ [+] 增加了 [tooltip.confine](http://echarts.baidu.com/option.html#tooltip.confine)，可以把 tooltip 限制在 chart 主容器范围中。这对于小屏、以及外层 dom 有设 `overflow:hidden` 的场景比较有用。

+ [^] 改善了 [geo](http://echarts.baidu.com/option.html#geo) / [map](http://echarts.baidu.com/option.html#series-map) 在触屏上的选择和 roam 体验。

+ [^] 修复 [containPixel](http://echarts.baidu.com/api.html#echartsInstance.containPixel) 在 [geo](http://echarts.baidu.com/option.html#geo) / [graph](http://echarts.baidu.com/option.html#series-graph) 中的判断错误。参见 [#4405](https://github.com/ecomfe/echarts/issues/4405)。

+ [^] 增强了 [visualMap](http://echarts.baidu.com/option.html#visualMap) 对 [line](http://echarts.baidu.com/option.html#series-line) 图的映射。

+ [^] 修正了 [visualMap](http://echarts.baidu.com/option.html#visualMap) 对于 symbol 的映射问题。

+ [^] 使 [dataZoom](http://echarts.baidu.com/option.html#dataZoom) 的 label 在非 [realtime](http://echarts.baidu.com/option.html#dataZoom.realtime) 情况下实时更新。参见 [#4434](https://github.com/ecomfe/echarts/issues/4434)。

+ [^] 修复 [dataZoom](http://echarts.baidu.com/option.html#dataZoom) 缩放时高亮不正确问题。参见 [#4475](https://github.com/ecomfe/echarts/issues/4475)。

+ [^] 修复了移动端禁止了浏览器默认滑动的错误。参见 [#4393](https://github.com/ecomfe/echarts/issues/4393)。

+ [^] 修复 MS Edge 浏览器中不能保存为图片的问题。参见 [#2451](https://github.com/ecomfe/echarts/issues/2451) 和 [#3586](https://github.com/ecomfe/echarts/issues/3586)。

+ [^] 修复 [tooltip](http://echarts.baidu.com/option.html#tooltip) 中对 `'time'` 类型的轴的格式化问题。参见 [#4398](https://github.com/ecomfe/echarts/issues/4398)。

+ [^] 修复第一个系列为空数据的时候多系列 [tooltip](http://echarts.baidu.com/option.html#tooltip) 可能不显示的 bug。

+ [^] 修复 [grid.containLabel](http://echarts.baidu.com/option.html#grid.containLabel) 对大 fontSize 无效的问题。参见 [#3805](https://github.com/ecomfe/echarts/issues/3805)。

+ [^] 修复 `echarts.extendSeriesModel` 错误。参见 [#4397](https://github.com/ecomfe/echarts/issues/4397)。

+ [^] 修复 [pie](http://echarts.baidu.com/option.html#series-pie) 中 `clockwise` 设置为 `false` 并且使用了 `minAngle` 时的渲染错误。参见 [#4414](https://github.com/ecomfe/echarts/issues/4414)。

+ [^] 修复使用 gradient color 时 [tooltip](http://echarts.baidu.com/option.html#tooltip) 中圆点颜色错误，参见 [#3994](https://github.com/ecomfe/echarts/issues/3994)。



## v3.3.1
<div class="time">2016-11-03</div>

Recovery Build

+ [^] 修复移动端 touch 事件出错的问题，参见 [#4384](https://github.com/ecomfe/echarts/issues/4384)。


## v3.3.0
<div class="time">2016-11-01</div>

+ [+] 开放坐标转换 API：[convertToPixel](http://echarts.baidu.com/api.html#echartsInstance.convertToPixel) 和 [convertFromPixel](http://echarts.baidu.com/api.html#echartsInstance.convertFromPixel)。参见例子 [http://echarts.baidu.com/gallery/editor.html?c=line-draggable] 和 [http://echarts.baidu.com/gallery/editor.html?c=line-pen]

+ [+] 开放坐标判断 API：[containPixel](http://echarts.baidu.com/api.html#echartsInstance.containPixel)。

+ [+] [polar](http://echarts.baidu.com/option.html#polar) 支持了 [dataZoom](http://echarts.baidu.com/option.html#dataZoom)。参见 [#4090](https://github.com/ecomfe/echarts/issues/4090)。

+ [+] 支持在 echarts 初始化时直接显式指定 `width`/`height`，参见 [echarts.init](http://echarts.baidu.com/api.html#echarts.init)。这可以方便某些『在 container dom 渲染之前就需要初始化 echarts』的场景。

+ [+] 在 [toolbox](http://echarts.baidu.com/option.html#toolbox) 中加入了 [textPosition](http://echarts.baidu.com/option.html#toolbox.iconStyle.normal.textPosition) 和 [textAlign](http://echarts.baidu.com/option.html#toolbox.iconStyle.normal.textAlign) 的设置。参见 [#4104](https://github.com/ecomfe/echarts/issues/4104)。

+ [+] visualMap 新加配置 [visualMap-piecewise.minOpen](http://echarts.baidu.com/option.html#visualMap-piecewise.minOpen) 和 [visualMap-piecewise.maxOpen](http://echarts.baidu.com/option.html#visualMap-piecewise.maxOpen)。

+ [^] 修复 setOption 时 `series.name` 不更新的问题。参见 [#4033](https://github.com/ecomfe/echarts/issues/4033)。

+ [^] 修复了对 echarts 使用 css-transform 后，鼠标响应位置错误的问题。

+ [^] 修复了 JavaScript 的 `Object.prototype` 被扩展后，会出错的问题。参见 [#4129](https://github.com/ecomfe/echarts/issues/4129)。

+ [^] 修复了 ios10、macOS 上圆形 emptySymbol 被绘制为方形的问题。参见 [#4136](https://github.com/ecomfe/echarts/issues/4136) 和 [#4150](https://github.com/ecomfe/echarts/issues/4150)。

+ [^] 修复了 [lines](http://echarts.baidu.com/option.html#series-lines) 图中，使用 [polyLine](http://echarts.baidu.com/option.html#series-lines.polyline) 时图标不能朝向运行方向的问题。参见 [#4060](https://github.com/ecomfe/echarts/issues/4060)。以及其他小问题 [#4346](https://github.com/ecomfe/echarts/issues/4346)。

+ [^] 修复了 对 [line](http://echarts.baidu.com/option.html#series-line) 释以 [visualMap](http://echarts.baidu.com/option.html#visualMap) 时区间过小导致线消失的问题。参见 [#4221](https://github.com/ecomfe/echarts/issues/4221)。

+ [^] 修复了 [tooltip](http://echarts.baidu.com/option.html#tooltip) 在触屏上不灵便的问题。参见 [#3900](https://github.com/ecomfe/echarts/issues/3900)。

+ [^] 修复了开启动画时区域图更细问题。参见 [#3956](https://github.com/ecomfe/echarts/issues/3956)。

+ [^] 修复了 [timelinechanged](http://echarts.baidu.com/api.html#events.timelinechanged) 事件中 currentIndex 不一致问题。参见 [#4161](https://github.com/ecomfe/echarts/issues/4161)。

+ [^] 修复了某些图中使用 [clear](http://echarts.baidu.com/api.html#echartsInstance.clear) 时内存不能释放的问题。参见 [#4105](https://github.com/ecomfe/echarts/issues/4105)。

+ [^] 修复了 [globalout](http://echarts.baidu.com/api.html#events.%E9%BC%A0%E6%A0%87%E4%BA%8B%E4%BB%B6.globalout) 事件无效的问题。参见 [#4169](https://github.com/ecomfe/echarts/issues/4169)。

+ [^] 修复了 [graph](http://echarts.baidu.com/option.html#graph) 在环形布局时可能节点重叠的问题。参见 [#4084](https://github.com/ecomfe/echarts/issues/4084)。

+ [^] 修复了 [对数轴](http://echarts.baidu.com/option.html#xAxis.type) 的 label 的显示精度问题。参见 [#4158](https://github.com/ecomfe/echarts/issues/4158)。

+ [^] 当 [axis.type](http://echarts.baidu.com/option.html#xAxis.type) 为 `'time'` 时，支持 [axis.min](http://echarts.baidu.com/option.html#xAxis.min) / [axis.max](http://echarts.baidu.com/option.html#xAxis.max) 设置为 Date 类型。参见 [#4097](https://github.com/ecomfe/echarts/issues/4097)。

+ [^] 修复了使用 [minInterval](http://echarts.baidu.com/option.html#xAxis.minInterval) 时轴的错误。参见 [#4162](https://github.com/ecomfe/echarts/issues/4162)。

+ [^] 优化 [treemap.breadcrumb](http://echarts.baidu.com/option.html#series-treemap.breadcrumb)。参见 [#4209](https://github.com/ecomfe/echarts/issues/4209) 和 [#4256](https://github.com/ecomfe/echarts/issues/4256) 和 [#4291](https://github.com/ecomfe/echarts/issues/4291)。

+ [^] 修复了在 [map](http://echarts.baidu.com/option.html#series-map) 上使用 [showTip](http://echarts.baidu.com/api.html#action.tooltip.showTip) 时 tooltip 位置不正确的问题。参见 [#3490](https://github.com/ecomfe/echarts/issues/3490)。

+ [^] 修复了 [radar](http://echarts.baidu.com/option.html#series-radar) 的问题：[#4249](https://github.com/ecomfe/echarts/issues/4249) 和 [#3934](https://github.com/ecomfe/echarts/issues/3934)。

+ [^] 修正了事件参数中的`dataIndex`的含义，统一均为原始数据的 index。参见 [#2920](https://github.com/ecomfe/echarts/issues/2920)。

+ [^] 修复部分数据可能会抛出`RangeError`的异常。参见 [#4164](https://github.com/ecomfe/echarts/issues/4164)

+ [^] 修复 IE8 中调用 resize 无效的 bug。参见 [#3923](https://github.com/ecomfe/echarts/issues/3923)

+ [^] 修复 IE8 中调用 dispose 报错的 bug。参见 [#3874](https://github.com/ecomfe/echarts/issues/3874)

## v3.2.3
<div class="time">2016-08-16</div>

+ [^] [Graph](http://echarts.baidu.com/option.html#series-graph) 环形布局支持设置 [rotateLabel](http://echarts.baidu.com/option.html#series-graph.circular.rotateLabel) 旋转标签，见示例 [graph-circular-layout](http://echarts.baidu.com/gallery/editor.html?c=graph-circular-layout)

+ [^] 修复雷达图中 indicator 无法同时设置 [min](http://echarts.baidu.com/option.html#radar.indicator.min), [max](http://echarts.baidu.com/option.html#radar.indicator.max) 的 bug。见 [#3628](https://github.com/ecomfe/echarts/issues/3628)

+ [^] 修复关闭动画时阶梯线图刷新会变成普通折线图的 bug。见 [#3645](https://github.com/ecomfe/echarts/issues/3645)

+ [^] [setOption](http://echarts.baidu.com/api.html#echartsInstance.setOption) 第三个参数调整为 lazyUpdate, 从原先的不立即重绘画布改为不立即更新图表，从而优化在多处地方多次 setOption 设置同一个图表会产生的性能问题。

+ [^] 修复 [graph](http://echarts.baidu.com/option.html#series-graph) 中曲线两边的 [edgeSymbol](http://echarts.baidu.com/option.html#series-graph.edgeSymbol) 有可能无法对齐节点的 bug。

+ [^] 修复 [graph](http://echarts.baidu.com/option.html#series-graph) 中 [symbolSize](http://echarts.baidu.com/option.html#series-graph.symbolSize) 为数组时无法绘制带有 [edgeSymbol](http://echarts.baidu.com/option.html#series-graph.edgeSymbol) 的直线的 bug。

+ [^] 修复饼图中关闭图例会导致颜色显示不一致的 bug。见 [#3735](https://github.com/ecomfe/echarts/issues/3735)

+ [^] 优化对数轴，新加参数 [logBase](http://echarts.baidu.com/option.html#yAxis.logBase)。见 [#3749](https://github.com/ecomfe/echarts/issues/3749)

+ [^] 地图拖拽性能优化。

## v3.2.2
<div class="time">2016-07-11</div>

+ [+] [xAxis](http://echarts.baidu.com/option.html#xAxis) 和 [yAxis](http://echarts.baidu.com/option.html#yAxis) 新增 [offset](http://echarts.baidu.com/option.html#yAxis.offset) 属性用于多 Y 轴场景。见 [多 Y 轴示例](http://echarts.baidu.com/gallery/editor.html?c=multiple-y-axis)

+ [+] 类目轴新增 [axisTick.alignWithLabel](http://echarts.baidu.com/option.html#xAxis.axisTick.alignWithLabel) 属性保证刻度线与刻度标签的对齐。见 [坐标轴刻度与标签对齐示例](http://echarts.baidu.com/gallery/editor.html?c=bar-tick-align)

+ [+] [legend](http://echarts.baidu.com/option.html#legend) 支持显示 [tooltip](http://echarts.baidu.com/option.html#legend.tooltip)。


+ [+] [geo](http://echarts.baidu.com/option.html#geo) 组件和 [map](http://echarts.baidu.com/option.html#series-map) 系列新增 [layoutCenter](http://echarts.baidu.com/option.html#geo.layoutCenter) 和 [layoutSize](http://echarts.baidu.com/option.html#geo.layoutSize) 属性用于基于中心位置的布局。

+ [^] 支持在`time`类型的坐标轴上显示柱状图。

+ [^] 修复系列数据和坐标轴类目数量不一致时 tooltip 显示错误的 bug。

+ [^] 修复折线图和地图混搭时再使用多个 visualMap 组件可能会报错的 bug。见 [#3544](https://github.com/ecomfe/echarts/issues/3544)

+ [^] 修复坐标轴轴线设置渐变色报错的 bug。见 [#3577](https://github.com/ecomfe/echarts/issues/3577)

+ [^] 修复数据都相同的折线图中使用 visualMap 时可能会报错的 bug。见 [#3582](https://github.com/ecomfe/echarts/issues/3582)

+ [^] 优化坐标轴刻度的划分。

+ [^] 修复当字符串类型数据 tooltip 默认显示为 `'-'` 的问题。见 [#3307](https://github.com/ecomfe/echarts/issues/3307)。优化时间类型数据的默认 tooltip。

+ [^] 数据项支持 tooltip 配置为字符串。如下示例

    ```js
    data: [{
        name: 'First',
        tooltip: 'First tooltip',
        value: 0
    }]
    ```

+ [^] 保证图形的绘制顺序与数据数组的顺序相同。

+ [^] 修复 3.2.1 中散点图边框无法设置的 bug。

+ [^] 坐标轴鼠标事件触发改为通过 [triggerEvent](http://echarts.baidu.com/option.html#xAxis.triggerEvent) 配置

## v3.2.1
<div class="time">2016-07-04</div>

+ [^] 修复 `brushAction` 文件名大小写错误导致 linux 和 windows 环境下无法正确引用模块的 bug。

+ [^] 修复散点图 `large` 为 `true` 时可能导致圆形绘制错误的问题。

+ [^] 移除默认柱状图边框样式。

+ [^] dataZoom 对 xAxisIndex 的处理更鲁棒。

## v3.2.0
<div class="time">2016-06-30</div>

详细的变动介绍见 [ECharts 3.2.0 变动介绍](http://efe.baidu.com/blog/echarts-3.2.0/)

+ **[+] 新加刷选 [brush](http://echarts.baidu.com/option.html#brush) 组件。** 见下面几个 Brushing and Linking 的例子：

    + [地图与平行坐标](http://echarts.baidu.com/gallery/editor.html?c=map-parallel-prices)，[K线图与柱状图](http://echarts.baidu.com/gallery/editor.html?c=candlestick-brush)，[散点矩阵与平行坐标](http://echarts.baidu.com/gallery/editor.html?c=scatter-matrix)

+ **[+] 新加标域 [markArea](http://echarts.baidu.com/option.html#markArea) 组件。** 见示例 [用电量分布](http://echarts.baidu.com/gallery/editor.html?c=line-sections)，[男女身高体重分布](http://echarts.baidu.com/gallery/editor.html?c=scatter-weight)

+ **[+] 新加单轴 [singleAxis](http://echarts.baidu.com/option.html#singleAxis) 组件。** 见示例 [单轴散点图](http://echarts.baidu.com/gallery/editor.html?c=scatter-single-axis)

+ [^] 折线图优化
    + [+] 新增 [step](http://echarts.baidu.com/option#series-line.step) 属性显示成阶梯线图。见示例 [Step Line](http://echarts.baidu.com/gallery/editor.html?c=line-step)
    + [^] 优化与 visualMap 的结合，支持分段显示不同颜色。见示例 [北京 AQI](http://echarts.baidu.com/gallery/editor.html?c=line-aqi)，[用电量分布](http://echarts.baidu.com/gallery/editor.html?c=line-sections)

+ [^] 线图优化

    + [+] 新增 `polyline` 属性，支持显示多段的轨迹路线。见示例 [北京公交路线图](http://echarts.baidu.com/gallery/editor.html?c=lines-bmap-bus)，以及 [带有特效的北京公交路线图](http://echarts.baidu.com/gallery/editor.html?c=lines-bmap-effect)

    + [+] 新增 [large](http://echarts.baidu.com/option.html#series-lines.large) 和 [largeThreshold](http://echarts.baidu.com/option.html#series-lines.largeThreshold) 配置项支持大规模线图的绘制。见示例 [65k 条飞机航线的可视化](http://echarts.baidu.com/gallery/editor.html?c=lines-airline)

    + [+] [effect](http://echarts.baidu.com/option.html#series-lines.effect) 新增 [constantSpeed](http://echarts.baidu.com/option.html#series-lines.effect.constantSpeed) 和 [loop](http://echarts.baidu.com/option.html#series-lines.effect.loop)

    + [^] 数据格式变动，从原先的 `data: [ [{ coord: [lng, lat] }, { coord: [lng, lat]}] ]` 改为 `data: [ { coords: [[lng, lat], [lng, lat]] } ]`。统一在一个属性里存放坐标点是为了更好的支持 `polyline` 为 true 的时候配置多个坐标点。原先的方式也兼容，但是不建议继续使用。


+ [^] Graph 优化

    + [+] 新加 [focusNodeAdjacency](http://echarts.baidu.com/option.html#series-graph.focusNodeAdjacency) 配置项用于开启鼠标 hover 高亮节点及相邻边和节点的效果。
    + [+] 边颜色 [lineStyle.normal.color](http://echarts.baidu.com/option.html#series-graph.lineStyle.normal.color) 支持配置为 `'source'` 或者 `'target'` 取源节点和目标节点的颜色。见示例 [Les Miserables](http://echarts.baidu.com/gallery/editor.html?c=graph)
    + [+] 改为使用默认取全局的调色盘
    + 修复 [edgeSymbolSize](http://echarts.baidu.com/option.html#series-graph.edgeSymbolSize) 为数组时边无法显示的 bug。
    + 修复同时配置 [edgeSymbol](http://echarts.baidu.com/option.html#series-graph.edgeSymbol) 和 [force layout](http://echarts.baidu.com/option.html#series-graph.layout) 时会导致布局抽搐的 bug。

+ [^] dataZoom 优化

    + [+] 新增 [handleIcon](http://echarts.baidu.com/option.html#dataZoom-slider.handleIcon) 配置项用于配置手柄形状。[handleSize](http://echarts.baidu.com/option.html#dataZoom-slider.handleIcon) 修改为相对于 dataZoom 高度的百分比大小。见示例 [2015 年上证指数](http://echarts.baidu.com/gallery/editor.html?c=candlestick-sh-2015)

    + [+] 新增 [handleStyle](http://echarts.baidu.com/option.html#dataZoom-slider.handleStyle) 配置项用于配置更丰富的手柄细节样式。取代原先的 `handleColor` 配置项。

    + [+] 新增 [dataBackground](http://echarts.baidu.com/option.html#dataZoom-slider.dataBackground) 配置项用于配置更丰富的数据预览样式。取代原先的 `dataBackgroundColor` 配置项。

+ [^] 平行坐标优化

    + [^] 新增 [parallel.axisExpandable](http://echarts.baidu.com/option.html#parallel.axisExpandable)，改善高维数据（大量坐标轴）的展示。参见例子 [http://echarts.baidu.com/gallery/editor.html?c=map-parallel-prices]

    + [^] 新增 [parallelAxis.realtime](http://echarts.baidu.com/option.html#parallelAxis.realtime)

+ [^] 坐标轴优化

    + [^] 坐标轴支持过渡动画。见示例 [动态数据](http://echarts.baidu.com/gallery/editor.html?c=dynamic-data2)
    + [^] 优化坐标轴轴线和刻度线的绘制效果。
    + [^] 类目轴默认不显示分隔线 splitLine。
    + [^] 类目轴自动间隔的计算优化。修复类目轴在数据很多的时候有可能出现标签重叠的问题。
    + [^] [axisTick](http://echarts.baidu.com/option.html#xAxis.axisTick), [axisLabel](http://echarts.baidu.com/option.html#xAxis.axisLabel) 默认取 [axisLine](http://echarts.baidu.com/option.html#xAxis.axisLine) 的颜色。
    + [^] 修复双类目轴时数据无法使用类目值的 bug。见 [#3494](https://github.com/ecomfe/echarts/issues/3494)

+ [^] 桑基图 优化

    + [+] 边颜色 [lineStyle.normal.color](http://echarts.baidu.com/option.html#series-sankey.lineStyle.normal.color) 支持配置为 `'source'` 或者 `'target'` 取源节点和目标节点的颜色。

+ [^] visualMap 组件优化

    + [+] 新增 [realtime](http://echarts.baidu.com/option.html#visualMap-continuous.realtime) 配置项。
    + [^] 分段区间配置 [pieces](http://echarts.baidu.com/option.html#visualMap-piecewise.pieces) 改为通过 `lt`, `lte`, `gt`, `gte` 更细致的配置区间和区间的开闭。

+ [^] markPoint 和 markLine 优化

    + [+] 新增 `silent` 配置项用于关闭交互。
    + [^] 数据配置更加灵活，支持每个维度 (xAxis, yAxis) 配置为`'min'`, `'max'`, `'average'`。
    + [^] 平均值计算忽略控制。见 [#3367](https://github.com/ecomfe/echarts/issues/3367)

+ [^] 散点图在 [large](http://echarts.baidu.com/option.html#series-scatter.large) 模式下也支持 tooltip 和鼠标事件触发。

+ [^] 工具栏组件的 [dataZoom](http://echarts.baidu.com/option.html#toolbox.feature.dataZoom) 支持通过配置 `yAxisIndex: 'none'` 或者 `yAxisIndex: 'none'` 设置单轴上的框选。

+ [+] 图例新增 [inactiveColor](http://echarts.baidu.com/option.html#legend.inactiveColor) 配置图例关闭时的颜色。

+ [+] 标题组件新增 [textBaseline](http://echarts.baidu.com/option.html#title.textBaseline) 用于配置标题文字的垂直对齐。

+ [+] 新增 [hoverLayerThreshold](http://echarts.baidu.com/option.html#hoverLayerThreshold) 配置项

+ [+] 新增 [progressive](http://echarts.baidu.com/option.html#progressive) 和 [progressiveThreshold](http://echarts.baidu.com/option.html#progressiveThreshold) 配置用于配置渐进式渲染。见示例 [parallel-nutrients](http://echarts.baidu.com/gallery/editor.html?c=parallel-nutrients)

+ [+] 新增 [blendMode](http://echarts.baidu.com/option.html#blendMode) 配置图形的混合模式。

+ [+] `itemStyle` 新增 [borderType](http://echarts.baidu.com/option.html#series-bar.itemStyle.normal.borderType) 配置边框类型。

+ [+] 调色盘取色优化，相同名称的数据默认取相同的颜色。

+ [+] 仪表盘新增 [axisLabel.distance](http://echarts.baidu.com/option.html#xAxis.axisLabel.distance) 配置项。

+ [^] 颜色支持配置为渐变色和纹理。见 [itemStyle.normal.color](http://echarts.baidu.com/option.html#series-pie.itemStyle.normal.color)。示例 [渐变](http://echarts.baidu.com/gallery/editor.html?c=bubble-gradient)，[纹理](http://echarts.baidu.com/gallery/editor.html?c=pie-pattern)

+ [^] 修复多个系列的地图 tooltip 和 symbol 显示不正确的 bug。见 [#3436](https://github.com/ecomfe/echarts/issues/3436) [#3320](https://github.com/ecomfe/echarts/issues/3320)

+ [^] 优化 effectScatter 在 setOption 更新数据时动画不连贯的问题。见 [#3439](https://github.com/ecomfe/echarts/issues/3439)

+ [^] 优化 tooltip，返回空字符串的话不显示浮层。

+ [^] 修复 splitArea 会覆盖 splitLine 的问题。

+ [^] 修复雷达图不能修改线条颜色的 bug。见 [#3441](https://github.com/ecomfe/echarts/issues/3441)

+ [^] 修复数据刷新可能会导致事件绑定的内存泄露。见 [#3500](https://github.com/ecomfe/echarts/issues/3500)

+ [^] ZRender 性能优化，重绘性能为原先的 2x ~ 3x。

+ [^] 构建文件调整，压缩前的[开发版本](http://echarts.baidu.com/dist/echarts.js)加入了更细致的错误提示和警告，压缩后的[生产版本](http://echarts.baidu.com/dist/echarts.min.js)去掉了这些错误提示和警告。因此建议开发环境中使用[开发版本](http://echarts.baidu.com/dist/echarts.js)


## v3.1.10
<div class="time">2016-05-19</div>

+ **[^] [geo](http://echarts.baidu.com/option.html#geo) 优化**
    + [+] 支持监听鼠标事件，见 [geo](http://echarts.baidu.com/option.html#geo)
    + [+] 支持通过 [regions](http://echarts.baidu.com/option.html#geo.regions) 配置每个区域的样式
    + [+] 支持通过 [selectedMode](http://echarts.baidu.com/option.html#geo.selectedMode) 配置是否区域可选，区域的选择会抛出 [geoselectchanged](http://echarts.baidu.com/api.html#events.geoselectchanged) 事件

+ [^] 优化部分字体，例如微软雅黑的垂直对齐，见 [#2983](https://github.com/ecomfe/echarts/issues/2983)

+ [^] graph 动画优化，见示例 [graph-life-expectancy](http://echarts.baidu.com/gallery/editor.html?c=graph-life-expectancy)

+ [+] 数值轴新加 [minInterval](http://echarts.baidu.com/option.html#xAxis.minInterval)，见 [#3115](https://github.com/ecomfe/echarts/issues/3115)

+ [+] treemap 新增下钻功能，参见 [leafDepth](http://echarts.baidu.com/option.html#series-treemap.leafDepth)，和示例 [treemap-drill-down](http://echarts.baidu.com/gallery/editor.html?c=treemap-drill-down)

+ [^] markLine 优化，支持在直角坐标系中如下设置成水平线或者垂直线。

    ```js
    data: [{
        // Y 轴值为 100 的水平线
        yAxis: 100
    }]
    ```

    方便柱状图只有单个值的时候能够正确设置显示成某个值的水平标线。

+ [^] 桑基图支持单个节点自定义样式。

+ [^] 修复单个 echarts 实例中有多个 geo 组件并且都没有指定 name 时可能会导致单个组件在拖拽时影响其它组件散点图位置的问题。

+ [^] dataZoom 精度问题优化，见 [#3228](https://github.com/ecomfe/echarts/issues/3228)

+ [^] 修复 3.1.8 中雷达图点显示为黑色的 bug。

+ [^] 修复 3.1.8 中 graph 会在 safari 下报错的 bug。见 [#3220](https://github.com/ecomfe/echarts/issues/3220)

+ [^] 修复 [effectScatter](http://echarts.baidu.com/option.html#series-effectScatter) 中特效图形不能设置旋转的问题。

+ [^] 修复 timeline、mediaQuery 在进行第二次 setOption 时会失效的 bug。


## v3.1.9
<div class="time">2016-05-12</div>

+ [^] 修复 3.1.8 中`image://`类型的 symbol 无法显示的 bug。

+ [^] 修复使用笛卡尔坐标系的 graph 第二次 setOption 会报错的 bug。

## v3.1.8
<div class="time">2016-05-11</div>

+ **[^] Graph 优化**
    + [+] 支持通过 [edgeLabel](http://echarts.baidu.com/option.html#series-graph.edgeLabel) 配置边标签，见示例 [graph-simple](http://echarts.baidu.com/gallery/editor.html?c=graph-simple)
    + [+] 支持通过 [edgeSymbol](http://echarts.baidu.com/option.html#series-graph.edgeSymbol) 配置边两端的图形，见示例 [graph-simple](http://echarts.baidu.com/gallery/editor.html?c=graph-simple)
    + [^] 支持笛卡尔坐标系，极坐标与地理坐标系，见示例 [graph-grid](http://echarts.baidu.com/gallery/editor.html?c=graph-grid)
    + [^] 鼠标事件参数新加`dataType`参数用于判断是`'node'`还是`'edge'`

+ **[^] 地图优化**
    + [+] 加入 [zoom](http://echarts.baidu.com/option.html#series-map.zoom) 和 [center](http://echarts.baidu.com/option.html#series-map.center) 配置项用于定位，参见示例 [map-locate](http://echarts.baidu.com/gallery/editor.html?c=map-locate)
    + [^] 修复 `scaleLimit.min` 大于 1 时可能导致散点图布局错误的 bug。
    + [^] 绘制性能优化

+ **[^] treemap 优化**
    + [^] 修复无法只在高亮的时候显示 label 的问题。Fix [#2975](https://github.com/ecomfe/echarts/issues/2975)
    + [^] 修复中事件参数不正确的 bug。见 [#3063](https://github.com/ecomfe/echarts/issues/3063)

+ **[^] visualMap 组件优化**
    + [+] 支持映射到 `opacity`。见 [visualMap.inRange](http://echarts.baidu.com/option.html#visualMap-continuous.inRange)。
    + [+] 加入配置项 [visualMap.hoverLink](http://echarts.baidu.com/option.html#visualMap-continuous.hoverLink)，支持 visualMap 组件与图表图形的联动。
    + [^] visual 的值之前支持设置为单个数字，例如 `0.2`。
    + [^] 修复使用 merge 模式第二次 setOption 时，viusal 配置无法保持的 bug。
    + [^] 修复使用 `colorHue` 时，visualMap 控制条颜色渐变不对的 bug。

+ [+] 折线图加入 [connectNulls](http://echarts.baidu.com/option.html#series-line.connectNulls) 配置项，见 [#2579](https://github.com/ecomfe/echarts/issues/2579)

+ [+] markLine 标签位置支持配置为中间 `'middle'`。

+ [+] 加入 [animationDelay](http://echarts.baidu.com/option.html#animationDelay) 和 [animationDelayUpdate]((http://echarts.baidu.com/option.html#animationDelayUpdate) 配置项用于展现更丰富和戏剧性的动画效果，参见示例 [bar-animation-delay](http://echarts.baidu.com/gallery/editor.html?c=bar-animation-delay)

+ [^] 修正 markPoint 、markLine、timeLine 鼠标事件参数中的`componentType`属性，可以通过该判断鼠标事件的触发对象。

+ [^] 修正了 [tooltip.show](http://echarts.baidu.com/option.html#tooltip.show) 功能,同时控制`提示框浮层`和`axisPointer`的隐藏和显示。[tooltip.showContent](http://echarts.baidu.com/option.html#tooltip.showContent) 仅控制`提示框浮层`的隐藏和显示。

+ [^] 仪表盘优化超出范围的数据的展现。见 [#3067](https://github.com/ecomfe/echarts/issues/3067)

+ [^] 修复 3.1.7 中多系列饼图图例绘制错误的 bug。

+ [^] markPoint 和 markLine 的位置属性`x`, `y`支持百分比。

+ [^] 修复图形高亮时刷新整个图表会导致高亮图形样式错误的 bug。

+ [^] 修复 setOption 无法清除之前设置的阴影样式的 bug。

+ [^] 修复柱状图中渐变色无法正确显示的 bug，见 [#3065](https://github.com/ecomfe/echarts/issues/3065)

+ [^] 修复桑基图中关闭动画会导致右侧标签显示不全的 bug。

+ [^] 优化折线图中可能会裁剪掉一半最顶端水平线，使得顶端水平线看起来更细的情况。

+ [^] 修复 IE8 中饼图 0 数据显示为圆形的 bug。见 [#3128](https://github.com/ecomfe/echarts/issues/3128)

+ [^] 修复 IE8 只有高亮显示标签可能会无效的 bug。


## v3.1.7
<div class="time">2016-04-21</div>

+ [+] visualMap 组件新加入 [align](http://echarts.baidu.com/option.html#visualMap-continuous.align) 属性。

+ [+] 坐标轴刻度标签支持可点击的配置，见 [xAxis.silent](http://echarts.baidu.com/option.html#xAxis.silent)。

+ [+] tooltip 加入 [showDelay](http://echarts.baidu.com/option.html#tooltip.showDelay)。

+ [^] 修复数据精度很高时 dataZoom 会产生错误的截断的 bug。

+ [^] 修复 k 线图联动的 bug。Fix [#2992](https://github.com/ecomfe/echarts/issues/2992)

+ [^] 修复 resize 会错误的触发 tooltip 的 bug。 Fix [#2988](https://github.com/ecomfe/echarts/issues/2988)

+ [^] `axisLabel.textStyle.color` 支持回调函数，见 [#2796](https://github.com/ecomfe/echarts/issues/2796)

+ [^] 修复 IE8 下 dataZoom 区间缩小后折线图会错误绘制的 bug。

+ [^] 优化饼图，漏斗图的图例绘制，支持`''`, `'\n'`换行，见 [#3039](https://github.com/ecomfe/echarts/issues/3039)

## v3.1.6
<div class="time">2016-04-11</div>

+ [^] 环形图内标签 inside 位置优化。见 [#2949](https://github.com/ecomfe/echarts/issues/2949)

+ [^] 修复 IE8 下单个数据的饼图无法显示的 bug。Fix [#2961](https://github.com/ecomfe/echarts/issues/2961)

+ [^] 修复柱状图 `itemStyle.emphasis.barBorderWidth` 不生效的 bug。

+ [^] 修复工具栏堆叠和平铺切换导致类目轴 boundaryGap 错误设置的 bug。



## v3.1.5
<div class="time">2016-03-29</div>

+ [\+] heatmap 加入配置项 [minOpacity](http://echarts.baidu.com/option.html#series-heatmap.minOpacity), [maxOpacity](http://echarts.baidu.com/option.html#series-heatmap.maxOpacity)。

+ [\+] `toolbox.feature.dataView` 加入配置项 [optionToContent](http://echarts.baidu.com/option.html#toolbox.feature.dataView.optionToContent), [contentToOption](http://echarts.baidu.com/option.html#toolbox.feature.dataView.contentToOption)。

+ [\+] map 图表和 geo 组件加入配置项 [scaleLimit](http://echarts.baidu.com/option.html#geo.scaleLimit)

+ [^] 修复 `toolbox.feature.magicType` 中 option 和 seriesIndex 不起作用的问题。Fix [#2855](https://github.com/ecomfe/echarts/issues/2855)

+ [^] 工具栏中折柱切换的时候自动调整类目轴的 boundaryGap。

+ [^] 修复 3.1.4 中 timeline 节点 hover 报错的 bug。Fix [#2897](https://github.com/ecomfe/echarts/issues/2897)

+ [^] 修复 inside 类型的 dataZoom 无法作用于多个直角坐标系中的坐标轴的 bug。Fix [#2752](https://github.com/ecomfe/echarts/issues/2752)

+ [^] 修复 3.1.4 中南丁格尔图标签布局的问题。Fix [#2910](https://github.com/ecomfe/echarts/issues/2910)

+ [^] 修复 connect 调用已经释放的图表实例报错的问题。Fix [#2908](https://github.com/ecomfe/echarts/issues/2908)

+ [^] 修复 3.1.4 中地图上的 markPoint 无法跟随地图漫游的问题。

+ [^] 修复 visualMap 组件中 color 无法被动态修改的问题。

## v3.1.4
<div class="time">2016-03-21</div>

+ [^] 优化默认的 tooltip，加入图形的颜色提示，回调加入 color 参数。

+ [^] 修复 dataZoom 无法 resize 的 bug。

+ [^] 修复多次执行`showLoading`导致的 bug。Fix [#2821](https://github.com/ecomfe/echarts/issues/2821)

+ [^] 饼图，地图等非笛卡尔坐标系和极坐标系的图表支持 markPoint 和 markLine。

+ [^] 饼图标签布局优化。

+ [^] tooltip 加入 extraCssText 配置项用于配置浮层样式，见 [http://echarts.baidu.com/option.html#tooltip.extraCssText](http://echarts.baidu.com/option.html#tooltip.extraCssText)

+ [^] 修复 3.1.3 中 dataZoom 不设置坐标轴 min， max 的 bug。

+ [^] 修复当纵轴为类目轴且 series 的 data 为二维数组时，tooltip 里无法取到正确的 name 的bug。Fix [#2822](https://github.com/ecomfe/echarts/issues/2822)

+ [^] 修复圆角的柱形图 hover 错误的 bug，Fix [#2806](https://github.com/ecomfe/echarts/issues/2806)

+ [^] 雷达图 indicator 配置项默认值策略优化。

## v3.1.3
<div class="time">2016-03-10</div>

+ **[+]加入雷达图，见 [http://echarts.baidu.com/option.html#series-radar](http://echarts.baidu.com/option.html#series-radar)**

+ [^] 平均值，最小值，最大值 markLine 起点和终点位置优化。Fix [#2762](https://github.com/ecomfe/echarts/issues/2762)，[#2688](https://github.com/ecomfe/echarts/issues/2688)。

+ [^] 修复 markLine 的 symbol 只有一个配置为 `'none'` 的 bug。见 [#2733](https://github.com/ecomfe/echarts/issues/2733)

+ [^] 多行文本的垂直居中优化。

+ [^] 饼图等数据项中 label 的 emphasis 配置项默认取 normal 中的值。

+ [^] 按需引入时，折线图，饼图，散点图默认引入 grid 组件。避免 [#2758](https://github.com/ecomfe/echarts/issues/2758) 中的问题。

+ [^] 修复 dataZoom 组件浮点精度的 bug。Fix [#2757](https://github.com/ecomfe/echarts/issues/2757)

+ [^] 未选中的图例文本显示为灰色。见 [#2615](https://github.com/ecomfe/echarts/issues/2615)

+ [^] 修复 3.1.1 中 media query 中 dataZoom 位置失效的 bug。Fix [#2710](https://github.com/ecomfe/echarts/issues/2710)

+ [^] 修复 3.1.1 中 firefox 无法触发滚轮事件的 bug，Fix [#2730](https://github.com/ecomfe/echarts/issues/2730)

+ [^] IE8 优化。

+ [^] 代码改用 webpack 构建。


## v3.1.2
<div class="time">2016-03-01</div>

+ **[+]提供主题下载，详细见 [http://echarts.baidu.com/download-theme.html](http://echarts.baidu.com/download-theme.html)**

+ [^] 修复 v3.1.1 中折线图空数据后 `setOption` 更新数据无法显示的 bug。

+ [^] 修复 `setOption(chart.getOption())` 有可能报`id duplicates`的错误。Fix [#2635](https://github.com/ecomfe/echarts/issues/2635)

+ [^] 允许自定义 toolbox 工具栏。详见 [toolbox.feature](http://echarts.baidu.com/option.html#toolbox.feature)

+ [^] `'time'` 类型的坐标轴在大跨度时间范围的刻度优化。

+ [^] 修复 label 的 formatter 返回 0 不显示的 bug。Fix [#2659](https://github.com/ecomfe/echarts/issues/2659)

+ [^] 修复纵轴为类目轴的图表中 markPoint 标签显示错误的问题。Fix [#2641](https://github.com/ecomfe/echarts/issues/2641)

+ [^] 优化 dataZoom，修复有 dataZoom 的图表中动态数据更新错误的问题。Fix [#2667](https://github.com/ecomfe/echarts/issues/2667)

+ [^] 饼图所有数据为 0 时百分比取 0 而非 NaN。Fix [#2690](https://github.com/ecomfe/echarts/issues/2667)

+ [^] 标题对齐优化。

+ [^] 图表刷新时保持 tooltip 显示。Fix [#2478](https://github.com/ecomfe/echarts/issues/2478)

+ [^] 仪表盘 `splitLine.length`, `axisTick.length` 支持百分比。

+ [^] 折线动画性能优化。

+ [^] 大数据量的类目轴性能优化。

+ [^] 修复 IE8 下 markPoint 和 markLine 报错的 bug。

+ [^] 修复 `'use strict'` 模式下报错的 bug。Fix [#2643](https://github.com/ecomfe/echarts/issues/2643)


## v3.1.1
<div class="time">2016-02-22</div>

+ **[+]新加入 npm 渠道获取 echarts，详细见 [webpack + echarts 教程](http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)**

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

+ [^] 折线图平滑优化，加入`smoothMonotone`配置项，详见 [option.html#series-line.smoothMonotone](http://echarts.baidu.com/option.html#series-line.smoothMonotone)，Fix [#2612](https://github.com/ecomfe/echarts/issues/2612)

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

+ [+] 添加回 [getOption](http://echarts.baidu.com/api.html#echartsInstance.getOption) 和 [clear](http://echarts.baidu.com/api.html#echartsInstance.clear) 方法

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