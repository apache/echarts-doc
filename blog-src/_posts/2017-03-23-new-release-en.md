---
layout: post
category: en
enUrl: '2017/03/23/new-release-en.html'
title: ECharts v3.5 Released, Publishing Calendar Coordinate System and Enhanced Axis Pointer, Meanwhile Statistic Extension v1.0 Released
description: "We are releasing ECharts v3.5, where calendar coodinate system is supported and axis pointer is enhanced. Meanwhile ECharts statistic extension v1.0 is published."
tags: [new release, extension, tutorial]
lazyLoad: true
image:
  feature: post/2017-01-13-new-release-theme-river.png
---

We are releasing [ECharts v3.5](https://github.com/ecomfe/echarts/releases/tag/3.5.0), where calendar coodinate system is supported and axis pointer is enhanced. Meanwhile [ECharts statistic extension](https://github.com/ecomfe/echarts-stat) v1.0 is published.

Calendar coordiante system is a new type of echarts coordiante system, which can used to locate different charts (For example, scatter, heatmap, graph, pie, or even other coordinate systems like cartesian).

The original axis pointer is enhance significantly, which currently supports text label, a new interaction approach for touch device, and other detailed configurations. Besides, that synchronization between axis pointers of different coordinate systems is supported.

Statistic extension is a JavaScript liberary for statistics and data mining, including two-dimensional regression, multi-dimensional clustering and some commonly used statistical functions in v1.0.



## Statistical Extension

Statistical extension is a statistical and data mining tool for [echarts](https://github.com/ecomfe/echarts). At present, it mainly includes two-dimensional regression, multi-dimensional clustering and some commonly used statistical functions.

The regression algorithm in the extension not only contains the commonly used linear regression, but also contains exponential regression, logarithmic regression, and polynomial regression.

An example of linear regression:
<div class="ec-lazy"
  data-thumb="{{ site.url }}/images/post/2017-03-23/xS1bQ2AMKe.png"
  data-src="http://gallery.echartsjs.com/view.html?cid=xS1bQ2AMKe"
  style="width: 100%; height: 400px"
></div>

An example of logarithmic regression:
<div class="ec-lazy"
  data-thumb="{{ site.url }}/images/post/2017-03-23/xry3aWkmYe.png"
  data-src="http://gallery.echartsjs.com/view.html?cid=xry3aWkmYe"
  style="width: 100%; height: 400px"
></div>

Adhering to the purpose of visual analysis, our multi-dimensional clustering analysis, can not only statically produce the results of clustering of dataset, but also dynamically view the entire clustering analysis process.

An example of the result of dataset clustering:
<div class="ec-lazy"
  data-thumb="{{ site.url }}/images/post/2017-03-23/xSkBOEaGtx.png"
  data-src="http://gallery.echartsjs.com/view.html?cid=xSkBOEaGtx"
  style="width: 100%; height: 400px"
></div>

An example demonstrating the entire process of clustering:
<div class="ec-lazy"
  data-thumb="{{ site.url }}/images/post/2017-03-23/xHyr-esMtg.png"
  data-src="http://gallery.echartsjs.com/view.html?cid=xHyr-esMtg"
  style="width: 100%; height: 400px"
></div>

Unlike built-in charts in echarts, Statistical Extension is a extension of echarts, which is not intergrated by echarts by default, and you need to inclued `ecStat.js` after `echarts.js`. You can find the file `dist/ecStat.js` in the latest released version at [here (GitHub)](https://github.com/ecomfe/echarts-stat/releases/latest).

 If you would like to know more, please visit the [Statistical Extension GitHub Home](https://github.com/ecomfe/echarts-stat)







## Calendar Coordinate System

Calendar coordiante system is a new type of echarts coordiante system, which can used to locate different charts (For example, scatter, heatmap, graph, pie, or even other coordinate systems like cartesian).

Using heatmap in calendar:
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_en }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_en }}?c=calendar-heatmap&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>

Using scatter in calendar:
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_en }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_en }}?c=calendar-effectscatter&edit=1&reset=1"
  style="width: 100%; height: 600px"
></div>

Different types of chart can be place on calendar coordinate system together.

Both place heatmap and graph chart in calendar:
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_en }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_en }}?c=calendar-graph&edit=1&reset=1"
  style="width: 100%; height: 600px"
></div>


**Calendar layout:**

Calendar coordinate system can be placed horizontally or vertically. By convention, the heatmap calendar is horizontal. But if we need bigger cell size in other cases, the total width may be too wide. So [calendar.orient]({{ site.url_ec_option_en }}#calendar.orient) can help in this case.

**Adapt to container size:**

Calendar coordinate system can be configured to adapt to container size, which is useful when page size is not sure. First of all, like other components, those location and size configurations can be specified on canlendar: [left]({{ site.url_ec_option_en }}#calendar.left), [right]({{ site.url_ec_option_en }}#calendar.right), [top]({{ site.url_ec_option_en }}#calendar.top), [bottom](bottom), [width]({{ site.url_ec_option_en }}#calendar.width), [height]({{ site.url_ec_option_en }}#calendar.height), which make calendar possible to modify its size according to container size. Besides, [cellSize]({{ site.url_ec_option_en }}#calendar.cellSize) can be specified to fix the size of each cell of calendar.

**More effects:**

Feel free to combination charts and calendar coordinate systems. You may achieve awesome effects.

For example, using API `chart.convertToPixel` to locate pie charts on calendar.
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_en }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_en }}?c=calendar-pie&edit=1&reset=1"
  style="width: 100%; height: 640px"
></div>


## Axis Pointer

The term "Axis Pointer" refers the appearing line, shadow block and text label when mouse hovering or clicking on a coordinate system, which helps users to have insight into the data.

The original axis pointer is enhance significantly, which currently supports text label, a new approach of interaction on touch device, and other detailed configurations. Besides, that synchronization between axis pointers of different coordinate systems is supported.

An example, where axis pointers can be displayed in candlestick.
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_en }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_en }}?c=doc-example/candlestick-axisPointer&edit=1&reset=1"
  style="width: 100%; height: 450px"
></div>

In the example above, [axisPointer.link]({{ site.url_ec_option_en }}#axisPointer.link) is used to synchronize axes from the two different cartesian coordiante system.

Besides, a approach of interaction on touch devices is supported, where axis pointer is alwayed displayed, and a handle button can be dragged to move the axis pointer, which makes the finger not block the view to charts any more.

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_en }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_en }}?c=line-tooltip-touch&edit=1&reset=1"
  style="width: 100%; height: 400px"
></div>

This is another example:
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=candlestick-touch&edit=1&reset=1"
  style="width: 100%; height: 400px"
></div>

These examples demonstrating the effect of mutiple axes with axis pointers:

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_en }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_en }}?c=multiple-y-axis&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_en }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_en }}?c=multiple-x-axis&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>

At last, let's see a more complicated example, where [axisPointer.link]({{ site.url_ec_option_en }}#axisPointer.link) is also be used to synchronize axis pointers of different axes.

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_en }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_en }}?c=scatter-nutrients-matrix&edit=1&reset=1"
  style="width: 100%; height: 640px"
></div>

