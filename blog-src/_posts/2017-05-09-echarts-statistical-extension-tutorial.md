---
layout: post
title: ECharts 统计扩展教程
description: "你是否想了解一组样本数据的分布情况？你是否想根据用户的数值属性将用户分成不同的群体？你是否想预测两个变量的变化趋势？—— 什么？不需要？不要再违心了，小编已经听到来自你们内心深处的呐喊，今天就为大家推荐一款神器 —— [ECharts 统计扩展](https://github.com/ecomfe/echarts-stat/)，这是一个用来进行数据分析的扩展工具，包含的功能有直方图、聚类、回归、以及常用的汇总统计。通过统计扩展和 [ECharts](http://echarts.baidu.com/) 的结合，可以使大家方便地实现可视分析，也就是将数据分析的结果，通过可视化直观地呈现出来。"
tags: [statistics, extension, tutorial]
lazyLoad: true
image:
  feature: post/2017-05-09-echarts-statistical-logarithmic-regression.png
---

# ECharts 统计扩展教程

你是否想了解一组样本数据的分布情况？你是否想根据用户的数值属性将用户分成不同的群体？你是否想预测两个变量的变化趋势？—— 什么？不需要？不要再违心了，小编已经听到来自你们内心深处的呐喊，今天就为大家推荐一款神器 —— [ECharts 统计扩展](https://github.com/ecomfe/echarts-stat/)，这是一个用来进行数据分析的扩展工具，包含的功能有直方图、聚类、回归、以及常用的汇总统计。通过统计扩展和 [ECharts](http://echarts.baidu.com/) 的结合，可以使大家方便地实现可视分析，也就是将数据分析的结果，通过可视化直观地呈现出来。下面我们就一起来学习一下这些功能。

## 首先引入 JavaScript 文件

如果大家不仅要对数据进行分析，还要将分析的结果呈现出来，那就需要在下载引入扩展文件的同时，下载引入 ECharts 文件。如下：

```html
<script src="echarts.js"></script>
<script src="ecStat.js"></script>

<script>
//具体可视分析的代码
</script>
```

除此之外，还需要指定一个具有高度和宽度的 DOM 元素，作为图表的容器，用来放置将被绘制的图表。如：

```html
<div id="main" style="width=100%; height=100%"></div> 
```

然后传入该 DOM 元素，初始化 ECharts 图表：

```js
var chart = echarts.init(document.getElementById('main'));
```
完成了上面的准备工作，下面将一一介绍统计扩展的功能。

## 直方图

直方图主要用来反映一组样本数据的分布情况，可以近似估计一个数值类变量的概率分布。直方图是一种特殊的柱状图，它的任意两个 bar 之间不允许有间隙，这是因为整个数轴范围被分割成了一个个连续的、相互邻接的小区间。这个分割过程就是由统计扩展做的，用户只需要传入一维的数据，如下：

```js
var girth = [8.3, 8.6, 8.8, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 14.0, 14.2, 14.5, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6];

var bins = ecStat.histogram(girth, 'scott');
```

这里的第二个参数 `'scott'` 是用来指定切割 bin 的方法，有四个选项，分别是 `'squareRoot'` 、 `'scott'` 、 `'freedmanDiaconis'` 、 `'sturges'` ，其中 `'squareRoot'` 是默认的计算方法，也是Excel中直方图使用的计算 bin 的方法
，有关这四种计算方法的详细介绍，请参见 [wikipedia](https://en.wikipedia.org/wiki/Histogram#Mathematical_definition)。使用处理后的 `bins.data` 配置 ECharts 柱状图中的 `option.data` 就可以得到如下的直方图。由于篇幅的问题，这里就不再赘述具体的 `option` 配置，感兴趣的读者可以点击下方的 `代码` 按钮，进入 ECharts Gallery 中查看。

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=xBk5VZddJW&v=4"></iframe>

## 聚类分析

聚类分析用于将原数据集聚合成多个特性不同的数据簇，每个数据簇内的数据对象具有某些相似的特征。通过 ECharts 不仅可以可视化聚类的结果，还可以可视化聚类的过程。具体的使用方式如下：

```js
var result = ecStat.clustering.hierarchicalKMeans(data, clusterNumber, false);
```
其中 `data` 是用户传入的二维数值数组， `clusterNumber` 是由用户设定的数据簇的个数，最后一个 `boolean` 类型的变量是用来指定，静态地可视化聚类的结果，还是动态地可视化聚类的过程。若值为 `false` 则为前者，反之，则为后者。

静态可视化聚类的结果：

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=xSkBOEaGtx&v=10"></iframe>

动态可视化聚类的过程：

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=xHyr-esMtg&v=4"></iframe>

同样，感兴趣的读者可以点击上方实例的 `代码` 按钮，进入 ECharts Gallery 中查看具体的代码，以及 `option` 的配置。

## 回归分析

回归分析就是根据数据集中自变量和因变量的值，拟合出一条曲线，反映它们的变化趋势。在统计扩展中我们实现了四种回归算法，分别是线性回归、指数回归、对数回归、以及多项式回归。使用方式如下：

```js
var myRegression = ecStat.regression(regressionType, data, order);
```
其中，`regressionType` 指的是回归类型，有四种取值，分别是 `'linear'` 、`'exponential'` 、`'logarithmic'` 、`'polynomial'` 。`data` 是用户传入的二维数值数组，分别是自变量和因变量的样本值。最后一个参数 `order` 用于多项式回归，用来指定多项式的阶数。

线性回归：

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=xS1bQ2AMKe&v=6"></iframe>

指数回归：

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=xHyaNv0fFe&v=5"></iframe>

对数回归：

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=xry3aWkmYe&v=4"></iframe>

多项式回归：

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=xB16yW0MFl&v=3"></iframe>

## 常用汇总统计

除了上面提到的数据分析方法之外，统计扩展还包括了常用的汇总统计，如分位数、样本方差、标准差、中位数、平均数、求和、最大值、最小值等。具体的用法，这里就不在展开了，详情请参见 GitHub 上的[详细文档](https://github.com/ecomfe/echarts-stat#statistics)。

最后的最后，提醒大家一句，在参照完 `Gallery` 上 `option` 的设置之后，一定要记得 `setOption` ，如下：

```js
chart.setOption(option);
```





