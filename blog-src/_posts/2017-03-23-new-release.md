---
layout: post
enUrl: '2017/03/23/new-release-en.html'
title: echarts v3.5 发布：新增日历坐标系、坐标轴指示器；同时统计扩展 v1.0 发布
description: "在 echarts 新发布的 3.5 版本中，新增了日历坐标系，增强了坐标轴指示器。同时，echarts 统计扩展 1.0 版本发布了。日历坐标系用于在日历中绘制图表，坐标轴指示器方便用户观察数据内容，统计扩展是一个专门用来进行数据分析的工具。"
tags: [new release, extension, tutorial]
lazyLoad: true
image:
  feature: post/2017-03-23/banner.png
---


在 echarts 新发布的 3.5 版本中，新增了日历坐标系，增强了坐标轴指示器。同时，echarts 统计扩展 1.0 版本发布了。日历坐标系用于在日历中绘制图表，坐标轴指示器方便用户观察数据内容，统计扩展是一个专门用来进行数据分析的工具。


## 统计扩展

统计扩展是一个专门用来进行数据分析的工具，目前主要包含了二维的回归、多维的聚类以及一些常用的统计功能。

扩展中的回归算法不仅包含了常用的线性回归，还包含了指数回归、对数回归、以及多项式回归。

线性回归的示例：
<div class="ec-lazy"
  data-thumb="{{ site.url }}/images/post/2017-03-23/xS1bQ2AMKe.png"
  data-src="http://gallery.echartsjs.com/view.html?cid=xS1bQ2AMKe"
  style="width: 100%; height: 400px"
></div>

对数回归的示例：
<div class="ec-lazy"
  data-thumb="{{ site.url }}/images/post/2017-03-23/xry3aWkmYe.png"
  data-src="http://gallery.echartsjs.com/view.html?cid=xry3aWkmYe"
  style="width: 100%; height: 400px"
></div>

秉承了可视分析的宗旨，我们的多维聚类分析，不仅可以静态地产出数据集聚类的结果，还可以动态地查看整个聚类分析的过程。

静态地产出数据集聚类的结果的示例：
<div class="ec-lazy"
  data-thumb="{{ site.url }}/images/post/2017-03-23/xSkBOEaGtx.png"
  data-src="http://gallery.echartsjs.com/view.html?cid=xSkBOEaGtx"
  style="width: 100%; height: 400px"
></div>

动态地查看整个聚类分析的过程的示例：
<div class="ec-lazy"
  data-thumb="{{ site.url }}/images/post/2017-03-23/xHyr-esMtg.png"
  data-src="http://gallery.echartsjs.com/view.html?cid=xHyr-esMtg"
  style="width: 100%; height: 400px"
></div>

和 echarts 中的原生图表不一样，统计扩展是作为一个扩展工具发布的。这意味着，在 echarts 官网下载的完整版本将不包含该扩展包。统计扩展和 echarts 结合使用时，需要在引入 `echarts.js` 之后，另外引入统计扩展对应的 `ecStat.js`。可以在 [这里 (GitHub)](https://github.com/ecomfe/echarts-stat/releases/latest) 找到最新版本，其中 `dist/ecStat.js` 可作为单文件引用。

如果想了解更多内容请前往 [统计扩展 GitHub 首页](https://github.com/ecomfe/echarts-stat)。



## 日历坐标系

日历坐标系，是一种新的 echarts 坐标系，提供了在日历上绘制图表的能力。例如可以在日历坐标系上放置热力图、散点图、关系图等。如下示例：

在日历坐标系中使用热力图：
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=calendar-heatmap&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>

在日历坐标系中使用散点图：
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=calendar-effectscatter&edit=1&reset=1"
  style="width: 100%; height: 600px"
></div>

还可以混合放置不同的图表，例如下例子，同时放置了热力图和关系图：
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=calendar-graph&edit=1&reset=1"
  style="width: 100%; height: 600px"
></div>

**水平和垂直放置日历**

在日历坐标系可以水平放置，也可以垂直放置。如上面的例子，使用热力图时，经常是水平放置的。但是如果需要格子的尺寸大些，水平放置就过于宽了，于是也可以选择垂直放置。参见 [calendar.orient]({{ site.url_ec_option_cn }}#calendar.orient)。


**尺寸的自适应**

日历坐标系支持不同尺寸的容器（页面）大小变化的自适应。首先，和 echarts 其他组件一样，日历坐标系可以选择使用 [left]({{ site.url_ec_option_cn }}#calendar.left)，[right]({{ site.url_ec_option_cn }}#calendar.right)，[top]({{ site.url_ec_option_cn }}#calendar.top)，[bottom](bottom)，[width]({{ site.url_ec_option_cn }}#calendar.width)，[height]({{ site.url_ec_option_cn }}#calendar.height) 来描述尺寸和位置，从而将日历摆放在上下左右各种位置，并随着页面尺寸变动而改变自身尺寸。另外，也可以使用 [cellSize]({{ site.url_ec_option_cn }}#calendar.cellSize) 来固定日历格子的长宽。


**中西方日历习惯的支持**

中西方日历有所差别，西方常使用星期日作为一周的第一天，中国使用星期一为一周的第一天。日历坐标系做了这种切换的支持。参见 [calendar.dayLabel.firstDay]({{ site.url_ec_option_cn }}#calendar.dayLabel.firstDay)。

另外，日历上的『月份』和『星期几』的文字，也可以较方便的切换中英文，甚至自定义。参见 [calendar.dayLabel.nameMap]({{ site.url_ec_option_cn }}#calendar.dayLabel.nameMap) [calendar.monthLabel.nameMap]({{ site.url_ec_option_cn }}#calendar.monthLabel.nameMap)。


**其他更丰富的效果**

灵活利用 echarts 图表和坐标系的组合，以及 API，可以实现更丰富的效果。

例如，制作农历：
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=calendar-lunar&edit=1&reset=1"
  style="width: 100%; height: 500px"
></div>

下面这个例子，使用 `chart.convertToPixel` 接口，实现了饼图放置在日历坐标系中的效果。
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=calendar-pie&edit=1&reset=1"
  style="width: 100%; height: 640px"
></div>


## 坐标轴指示器

坐标轴指示器 （axisPointer）指的是，鼠标悬浮到坐标系上时出现的竖线、阴影区域等。它能帮助用户观察数据。echarts 原有的坐标轴指示器本次被整理和增强了，加入了文本标签，自动吸附到数据，以及移动触屏的手柄拖拽交互，以及支持了多个坐标系中指示器的联动。

下面是一个K线图的示例。使用坐标轴指示器，能够比较方便得观察到每一项对应的 y 值。
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=doc-example/candlestick-axisPointer&edit=1&reset=1"
  style="width: 100%; height: 450px"
></div>

上例中，使用了 [axisPointer.link]({{ site.url_ec_option_cn }}#axisPointer.link) 来关联上下两个直角坐标系的 axisPointer，使他们同步运动。

坐标轴指示器也提供了一种适合触屏的交互方式，使用手柄来拖拽坐标轴指示器。如果触屏上和鼠标操作一样，在坐标系内部拖拽操作坐标轴指示器，那么手指可能会挡住图表，并且可能和『数据区域缩放移动』操作冲突。用单独的拖拽手柄，可以改善这个问题。

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=line-tooltip-touch&edit=1&reset=1"
  style="width: 100%; height: 400px"
></div>

这是另一个例子：
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=candlestick-touch&edit=1&reset=1"
  style="width: 100%; height: 400px"
></div>

坐标轴指示器在多轴的场景能起到辅助作用，清晰得显示出对比数值，甚至可以在坐标轴指示器的文本标签内定制表达更多信息：

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=multiple-y-axis&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=multiple-x-axis&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>

最后提供一个内容更丰富些的例子，其中也使用了 [axisPointer.link]({{ site.url_ec_option_cn }}#axisPointer.link) 来联动不同的坐标轴指示器。他关联和高亮了处于不同坐标系中的相互对应的点。

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bubble-gradient.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=scatter-nutrients-matrix&edit=1&reset=1"
  style="width: 100%; height: 640px"
></div>

## 其他更新内容

参见 [changelog](http://echarts.baidu.com/changelog.html)