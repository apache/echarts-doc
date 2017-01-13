---
layout: post
enUrl: '2017/01/13/new-release-en.html'
title: ECharts 3.4 版本发布：新增象形柱图、主题河流图、水球图
description: "在 ECharts 新发布的 3.4 版本中，新增象形柱图、主题河流图、水球图三种新图表。象形柱图利用图片和形状表现数据，主题河流图可以用来表示事件或主题等在一段时间内变化，水球图常用来展现百分比数据。"
tags: [new release, extension, tutorial]
image:
  feature: post/2017-01-13-new-release-theme-river.png
---

在 ECharts 新发布的 3.4 版本中，新增象形柱图、主题河流图、水球图三种新图表。象形柱图利用图片和形状表现数据，主题河流图可以用来表示事件或主题等在一段时间内变化，水球图常用来展现百分比数据。



## 象形柱图

象形柱图是可以设置各种具象图形元素（如图片、[SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) 等）的柱状图。往往用在信息图中，用于有至少一个类目轴或时间轴的[直角坐标系](http://echarts.baidu.com/option.html#grid)上。

它既可以用图形的长宽变形表现数据，也可以用图形的个数、甚至是图形的颜色、透明度变化表现数据。

在下面的例子中，右边的两座山分别是一个图片，而最左侧的纸是由多个图片堆加成的，象形柱图会根据它们所在系列对应的数值，决定其高度。配合动画效果，能够实现很好的视觉效果。

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=pictorialBar-hill"></iframe>


在 [ECharts 圣诞活动页](http://jing.baidu.com/h5/echarts-christmas-2016.html)中，我们制作了以下这个驯鹿和交通方式的速度对比图，这样的图表可以使用 ECharts 象形柱图方便地实现。下图包含两个系列，一个是显示在上方的交通方式矢量图标，象形柱图默认会将每个图标放在对应值所在位置的下方，通过 `symbolSize` 指定图表大小；另一个系列是显示在图标下方的山峰，在不指定 `symbolSize` 的情况下，将填充满所在的“柱子”，因而就有了图示效果。

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=pictorialBar-velocity"></iframe>


除此之外，象形柱图还可以用同一图形的个数表现数值，实现类似 ECharts 圣诞活动页中一群小精灵的效果。因而象形柱图可以很大程度上满足信息图的制图需求。

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=pictorialBar-spirit"></iframe>


从 3.4 版本起，象形柱图将被包含在 [ECharts 下载页面](http://echarts.baidu.com/download.html)的“完整”版本中，无需引入额外文件，通过将系列名称设为 `pictorialBar` 即可使用。

更多例子请前往[官网例子](http://echarts.baidu.com/examples.html#chart-type-pictorialBar)查看。


## 主题河流图

主题河流图是一种特殊的流图，它主要用来表示事件或主题等在一段时间内的变化。

主题河流中不同颜色的条带状河流分支编码了不同的事件或主题，河流分支的宽度编码了原数据集中的 `value` 值。此外，原数据集中的时间属性，映射到单个时间轴上。

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=themeRiver-basic"></iframe>

图中的每一个系列，可以是一个产品市场占有率的变化，也可以表示国家人口的变化等等事件或主题。

更多例子请前往[官网例子](http://echarts.baidu.com/examples.html#chart-type-themeRiver)查看。


## 水球图


水球图的使用方式非常简单，实现以下这样的效果，只需要将系列类型设为 `liquidFill`，并且指定数据即可。

<iframe style="width: 100%; height: 300px" src="http://gallery.echartsjs.com/view.html?cid=liquidfill-basic"></iframe>

对应的代码为：

```js
option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3]
    }]
};
```

水球图的个性化程度非常高，你可以为每个波指定波长、周期、相位、颜色、阴影、透明度等等属性，“水球”的形状可以是圆形、方形、三角形等等，甚至可以指定任意的 [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)，因此可以制作出变化非常的效果。

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=liquidfill-echarts"></iframe>

我们在 ECharts 圣诞主题页实现的雪球下降的效果，即是用水球图实现的。

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=christmas-gift-show"></iframe>

和象形柱图不同的是，水球图是作为插件发布的。这意味着，在 ECharts 官网下载的完整版本将不包含水球图，使用时，需要在引入 `echarts.js` 之后，另外引入水球图对应的 `echarts-liquidfill.js`，可以在 [GitHub](https://github.com/ecomfe/echarts-liquidfill/tree/gh-pages/dist) 找到最新版本。

如果感兴趣的话，可以前往[水球图 GitHub 项目页面](https://github.com/ecomfe/echarts-liquidfill)了解更多，或者在 [Gallery](http://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~query=liquidfill~author=all) 页面查看更多效果。


## 其他更新内容

- [+] [map series](http://echarts.baidu.com/option.html#series-map) 可以使用用户指定的 [geo 坐标系](http://echarts.baidu.com/option.html#geo) 了（原先是只能使用内置的 geo 坐标系）。从而，geo 坐标系可以使用 [map series](http://echarts.baidu.com/option.html#series-map) 控制自身的颜色，并且 [map series](http://echarts.baidu.com/option.html#series-map) 可以和其他类型的 series（如 [scatter series](http://echarts.baidu.com/option.html#series-scatter)）共享 geo 坐标系。参见 [series-map.geoIndex](http://echarts.baidu.com/option.html#series-map.geoIndex)。

- [+] 增加了 [focusNodeAdjacency action](http://echarts.baidu.com/api.html#action.graph.focusNodeAdjacency)，从而能用 API 控制 [graph](http://echarts.baidu.com/option.html#series-geo) 的连接高亮。

- [+] 增加了 [series-pie.animationType](http://echarts.baidu.com/option.html#series-pie.animationType)，支持不同的饼图动画效果。

- [+] [animationDuration](http://echarts.baidu.com/option.html#animationDuration) 增加了回调函数支持，可以根据不同的数据项得到不同的动画时长。

- [+] [category axis](http://echarts.baidu.com/option.html#xAxis.type) 支持了 [min](http://echarts.baidu.com/option.html#xAxis.min) [max](http://echarts.baidu.com/option.html#xAxis.max) 的设置。

- [+] [category axis](http://echarts.baidu.com/option.html#xAxis.type) 默认情况会显示所有的类目，不论是否有类目中没有数据（原先两端的没有数据的类目不会被显示）。

- [+] [singleAxis](http://echarts.baidu.com/option.html#singleAxis) 中的 `data` 支持了一维数组的数据格式，如 `[11, 23, 44]`。

- [+] [dataZoom](http://echarts.baidu.com/option.html#dataZoom) 支持了 [singleAxis](http://echarts.baidu.com/option.html#singleAxis)。

- [+] 开放了 throttle 工具方法：`chart.util.throttle`。

- [+] 优化了 [直角坐标系](http://echarts.baidu.com/option.html#grid) 中数据全不显示时的显示效果。

- [+] [K 线图](http://echarts.baidu.com/option.html#series-candlestick) 支持了 [barWidth](http://echarts.baidu.com/option.html#series-candlestick.barWidth)，[barMinWidth](http://echarts.baidu.com/option.html#series-candlestick.barMinWidth)，[barMaxWidth](http://echarts.baidu.com/option.html#series-candlestick.barMaxWidth) 设置。参见 [#4783](https://github.com/ecomfe/echarts/issues/4783)。

- [+] [线图](http://echarts.baidu.com/option.html#series-lines) 支持了 [symbol](http://echarts.baidu.com/option.html#series-lines.symbol), [symbolSize](http://echarts.baidu.com/option.html#series-lines.symbolSize) 设置。

- [+] 支持了 [visualMap-piecewise](http://echarts.baidu.com/option.html#visualMap-piecewise) 中数据标签和首尾的文本同时显示。参见 [visualMap-piecewise.showLabel](http://echarts.baidu.com/option.html#visualMap-piecewise.showLabel) 参见 [#4845](https://github.com/ecomfe/echarts/issues/4845)。

- [+] 支持了 [visualMap](http://echarts.baidu.com/option.html#visualMap) 支持系列中的某些数据不受 `visualMap` 控制。

- [^] 在 [showTip](http://echarts.baidu.com/api.html#action.tooltip.showTip) 事件中开放了 `dataIndex` 参数。

- [^] 修复了 tooltip 中的 XSS 隐患。参见 [#4769](https://github.com/ecomfe/echarts/issues/4769)。

- [^] 修复了 [series-graph.edgeLabel](http://echarts.baidu.com/option.html#series-graph.edgeLabel) 中部分属性无效的问题。参见 [#4555](https://github.com/ecomfe/echarts/issues/4555)。

- [^] 修复了 [series-gauge](http://echarts.baidu.com/option.html#series-gauge) 中 `min` `max` 是 `stirng` 时的 tick 渲染问题。参见 [#4617](https://github.com/ecomfe/echarts/issues/4617)。

- [^] 修复了 [series-gauge.pointer.show](http://echarts.baidu.com/option.html#series-gauge.pointer.show) 的问题。参见 [#4618](https://github.com/ecomfe/echarts/issues/4618)。

- [^] 修复了 [series-radar](http://echarts.baidu.com/option.html#series-radar) 在无数据时渲染可能抛错的问题。

- [^] 修复了 [markArea.label.normal.show](http://echarts.baidu.com/option.html#series-line.markArea.label.normal.show) 的问题。参见 [#4723](https://github.com/ecomfe/echarts/issues/4723)。

- [^] 优化了 [log 数轴](http://echarts.baidu.com/option.html#yAxis.type) 中，数据小于等于 0 时的处理。参见 [#4743](https://github.com/ecomfe/echarts/issues/4743) 和 [#3161](https://github.com/ecomfe/echarts/issues/3161)。


**欢迎前往 [ECharts Gallery](http://gallery.echartsjs.com/explore.html) 创建自己的 ECharts 图表，更方便地提问，以及建立自己的作品集。2017 年，让我们一起将可视化做得更棒！**

