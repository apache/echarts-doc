---
layout: post
category: en
cnUrl: '2017/01/13/new-release.html'
title: 'ECharts Released v3.4, supporting three new chart types'
description: "TODO"
tags: [new release, extension, tutorial]
image:
  feature: post/2017-01-13-new-release-theme-river.png
---

We are releasing ECharts v3.4, supporting three new types of charts, namely, pictorial-bar charts, theme-river charts, and liquid-fill charts. Pictorial-bar charts use images and shapes to represent data; theme-river charts are used to show the evolution of events or themes during a period; and liquid-fill charts are usually used to represent data in percentage.

## Pictorial-bar Charts

Pictorial-bar chart is a type of bar chart that customized glyph (like images, [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)) can be used instead of rectangular bar. This kind of chart is usually used in infographic.

Pictorial bar chart can only be used in [rectangular coordinate](~grid) with at least 1 category axis.

It can use the width or height of the graphic elements, or its number, color, opacity, and *etc.* to represent data.

In the example below, the mountains at the right side are two images, while the pile of paper are composed with multiple images. Pictorial bar chart will compute their height with their values, and make a nice visual effect with animation like this example do.

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=pictorialBar-hill"></iframe>


In [ECharts Christmas Event Pages](http://jing.baidu.com/h5/echarts-christmas-2016.html), we used pictorial-bar chart to make a chart comparing the speed of Santa's reindeer and other transportation methods. The following chart contains two series, the first of which contains vector images of transportation methods, and the other the mountains below. Pictorial-bar charts compute the position of each graphic element based on its `value` and put it below that position. `symbolSize` can be used to specify image size, and will automatically fill the *bar* when it is not given.

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=pictorialBar-velocity"></iframe>

Besides, pictorial-bar charts can use the amount of the same graph element to represent data. The spirits chart of ECharts Christmas Event Pages is made with this type of pictorial-bar chart. In this way, pictorial-bar chart can be largely used in infographic.

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=pictorialBar-spirit"></iframe>

From ECharts v3.4, pictorial-bar chart is included in *full version* in [ECharts download page](http://echarts.baidu.com/download.html), so that you can use it by assigning series name to be `pictorialBar` without using an extra file.

You may refer to [official examples](http://echarts.baidu.com/examples.html#chart-type-pictorialBar) for more information.


## Theme-river Charts

Theme-river chart is a special flow graph which is mainly used to present the changes of an event or theme during a period.

The ribbon-shape river branches in different colors in theme river encode variable events or themes. The width of river branches encode the value of the original dataset.

What's more, the time attribute of the orinigal dataset would map to a single time axis.

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=themeRiver-basic"></iframe>

Each series can be changing of market share of a product overtime, or the changing of population of a country, and *etc*.

You may refer to [official examples](http://echarts.baidu.com/examples.html#chart-type-themeRiver) for more information.


## Liquid-fill Charts

Liquid-fill charts are very easy to use. To make the following chart, you only need to set series type to be `liquidFill` and assign values.

<iframe style="width: 100%; height: 300px" src="http://gallery.echartsjs.com/view.html?cid=liquidfill-basic"></iframe>

Corresponding code is:

```js
option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3]
    }]
};
```

Liquid-fill charts have a great ability to be customized. You can assign each wave's attributes like wave length, period, phase, color, shadow, opacity, and *etc*. The shape of the *ball* can be circle, rectangular, triangle, or even a random shape with [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData), giving it a great ability to make amazing charts.

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=liquidfill-echarts"></iframe>

The snowing chart in ECharts Christmas Event Pages is made with liquid-fill chart.

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=christmas-gift-show"></iframe>

Unlike pictorial-bar chart or theme-river chart, liquid-fill chart is released as an ECharts plugin. This means, it is not included in the full version in ECharts download page, and you need to include `echarts-liquidfill.js` after `echarts.js`. You may find the latest liquid-fill chart at [GitHub](https://github.com/ecomfe/echarts-liquidfill/tree/gh-pages/dist).

You may find more information at [Liquid-fill GitHub repo](https://github.com/ecomfe/echarts-liquidfill), or visit [Gallery](http://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~query=liquidfill~author=all) for more application.


## Other Updates

- [+] A specified [geo coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) has been able to be used in [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map). (In the past map series could only creat an inner exclusive geo coodinate system). Thus, [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) can be used to control color of a geo component. Moreover, a geo coordinate system can be shared among [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) and other series, like [scatter series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter). See [series-map.geoIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.geoIndex).

- [+] Added [focusNodeAdjacency action](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.graph.focusNodeAdjacency), which enables trigger adjacent highlight of [graph](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-geo) through API.

- [+] Added [series-pie.animationType](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.animationType), which enables more animation effects.

- [+] Callback function have been supported in [animationDuration](https://ecomfe.github.io/echarts-doc/public/en/option.html#animationDuration), which enables different animation duration of data items.

- [+] [min](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.min) and [max](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.max) have been supported in [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type).

- [+] [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type) has been changed to show all categories by default, in spite of whether there is data in categories. In the past, categories in the end that has no data will not be displayed.

- [+] When using [singleAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#singleAxis), `series.data` has supported one-dimension array, like `[11, 23, 44]`.

- [+] [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom) has supported [singleAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#singleAxis).

- [+] Exposed throttle util method: `chart.util.throttle`.

- [+] [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick) has supported [barWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barWidth), [barMinWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barMinWidth) and [barMaxWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barMaxWidth). See [#4783](https://github.com/ecomfe/echarts/issues/4783).

- [+] [lines chart](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines) has supported [symbol](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.symbol), [symbolSize](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.symbolSize).

- [+] Added support for show end text and data label at the same time in [visualMap-piecewise](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise). See [visualMap-piecewise.showLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise.showLabel), and See [#4845](https://github.com/ecomfe/echarts/issues/4845).

- [+] When using [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) to control a series, it has supported that some data items escape from the control by visualMap, but use its series visual settings (color, symbol, ...). See the paragraph of `Configure mapping` in [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap).

- [^] Enhanced the effect of [grid (cartesian)](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid) when on data displayed.

- [^] Added parameter `dataIndex` in [showTip event](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip).

- [^] Fixed vulnerability about XSS in tooltip. See [#4769](https://github.com/ecomfe/echarts/issues/4769).

- [^] Fixed that some attributes did not work in [series-graph.edgeLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.edgeLabel). See [#4555](https://github.com/ecomfe/echarts/issues/4555).

- [^] Fixed tick render problem when `min` `max` is `stirng` in [series-gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge). See [#4617](https://github.com/ecomfe/echarts/issues/4617).

- [^] Fixed [series-gauge.pointer.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.pointer.show) problem. See [#4618](https://github.com/ecomfe/echarts/issues/4618).

- [^] Fixed [series-radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar) render error in a case that no data exists.

- [^] Fixed [markArea.label.normal.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.markArea.label.normal.show) problem. See [#4723](https://github.com/ecomfe/echarts/issues/4723).

- [^] Enhanced the process when data is equals or less then zero in [log axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis.type). See [#4743](https://github.com/ecomfe/echarts/issues/4743) and [#3161](https://github.com/ecomfe/echarts/issues/3161).


**Please visit [ECharts Gallery](http://gallery.echartsjs.com/explore.html) to create charts with ECharts, for sharing when asking others for help, or make your own portfolio. Let's make better visualization products in 2017!**
