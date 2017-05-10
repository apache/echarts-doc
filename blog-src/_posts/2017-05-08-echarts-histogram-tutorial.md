---
layout: post
title: 那些年我们一起学过的直方图
description: "某天下午小编正在安安静静地撸代码，突然听说在我们的[gallery](http://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all)上，有用户提出，[ECharts](http://echarts.baidu.com/index.html)不支持直方图，什么？这怎么能忍？于是小编将珍藏已久的机械键盘拿出来，摆好姿势，通宵达旦地为用户大大们加好了直方图，并于上周四悄悄上线了，对，我们就是这么低调。然而，很多大大们表示，直方图还是柱状图？傻傻分不清。小编深感这年头光有图怕是不行了，必须得有个教程，要做到图文并茂。下面小编就从直方图是什么，为什么要用直方图，以及如何使用[ECharts](http://echarts.baidu.com/index.html)制作直方图三个方面，为各位大大们上点干货。"
tags: [histogram, tutorial]
image:
  feature:
  post/2017-05-08-echarts-histogram-height-of-tree.png
---

某天下午小编正在安安静静地撸代码，突然听说在我们的[gallery](http://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all)上，有用户提出，[ECharts](http://echarts.baidu.com/index.html)不支持直方图，什么？这怎么能忍？于是小编将珍藏已久的机械键盘拿出来，摆好姿势，通宵达旦地为用户大大们加好了直方图，并于上周四悄悄上线了，对，我们就是这么低调。然而，很多大大们表示，直方图还是柱状图？傻傻分不清。小编深感这年头光有图怕是不行了，必须得有个教程，要做到图文并茂。下面小编就从直方图是什么，为什么要用直方图，以及如何使用[ECharts](http://echarts.baidu.com/index.html)制作直方图三个方面，为各位大大们上点干货。

## 直方图是什么

直方图主要用来反映一组样本数据的分布情况。从图的形式来看，它属于柱状图的一种，但它和柱状图相比还是有很多不同之处的。首先，直方图的任意两个bar之间不允许有间隙，这是因为原始样本值被分割成一系列连续的、相互邻接的小区间，每一个小区间都是左闭右开的，除了最后一个，如[x0, x1), [x1,x2), [x2,x3]，在直方图中小区间又被称为“bin”。其中bin的高度是由落入该区间中样本值的个数决定的；其次，在ECharts中绘制双数值轴（这里的双数值轴指的是x轴和y轴都是数值类型的）柱状图，用户需要传入二维的数组，如 array1 = [[1, 2], [3, 4]]，而绘制直方图，用户只需要传入一维的数组，如 array2 = [1, 2, 3, 4]，然后由[ECharts统计扩展](https://github.com/ecomfe/echarts-stat)将一维的样本值分割成一个个具体的bin，并计算输出每一个bin的绘制信息，然后选用ECharts柱状图绘制具体的直方图。

## 为什么要用直方图

前面已经提到了，直方图主要用来反映样本数据的分布，如下图，这是使用著名的[虹膜花数据集](https://en.wikipedia.org/wiki/Iris_flower_data_set)中的花瓣长度这一维度所作的直方图。从图中可以直观地看出该维度样本数据不符合正态分布，有多个峰值，具有明显的差异。这说明不同种类虹膜花的花瓣长度，受多个因素的影响，同时也表明在进一步的数据分析中，所有基于正态分布假设的分析，都不适合该维度数据。

![petal-width]({{ site.url }}/images/post/2017-05-08-echarts-histogram-petal-length-iris.png)

除此之外，直方图还可以用来进行数据审查。所谓的数据审查，是指在数据预处理之前，通过直方图直观地审视样本数据中的每个维度，检查是否有异常值的同时，了解值的分布。如图，这是记录31颗黑樱桃树周长的样本数据，从图中可以明显地看出有三个异常值，因为树的周长肯定大于0，不会出现小于0的负数，而[-5, 0)这个区间内有三个样本值，这就需要通过数据清洗将异常值过滤掉。

![girth-tree]({{ site.url }}/images/post/2017-05-08-echarts-histogram-girth-of-tree.png)

## 如何使用[ECharts](http://echarts.baidu.com/index.html)制作直方图

ECharts是一个强大的可视化图表库，并不是一个统计分析的工具，所以我们将处理原始数据并分割成一个个具体的bin这一部分放在了echarts的[统计扩展](https://github.com/ecomfe/echarts-stat)中实现。这就需要我们在引入 `echarts.js` 的同时，引入统计扩展对应的 `ecStat.js`，如：

```html
<script src="echarts.js"></script>
<script src="ecStat.js"></script>

<script>

var height = [70, 65, 63, 72, 81, 83, 66, 75, 80, 75, 79, 76, 76, 69, 75, 74, 85, 86, 71, 64, 78, 80, 74, 72, 77, 81, 82, 80, 80, 80, 87];

var bins = ecStat.histogram(height);

</script>
```
然后使用统计扩展处理过后的数据，配置ECharts柱状图中的option，如：

```js
var option = {
    color: ['rgb(25, 183, 207)'],
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        //这个一定要设，不然barWidth和bins对应不上
        scale: true, 
    }],
    yAxis: [{
        type: 'value',
    }],
    series: [{
        type: 'bar',
        barWidth: '99.3%',
        label: {
            normal: {
                show: true,
                position: 'insideTop',
                formatter: function (params) {
                    return params.value[1];
                }
            }
        },
        data: bins.data
    }]
};

```
这样就得到了如下的直方图：

![height-tree]({{ site.url }}/images/post/2017-05-08-echarts-histogram-height-of-tree.png)

这里不得不说的是，由于历史遗留的问题，ECharts中的柱状图并不能完美地支持直方图的绘制，所以不得不使用一些小的trick，如设置 `xAxis` 的 `scale` 为 `true`，调整 `barWidth` 的值等。不过，大家不用担心，作为一个良心以及正义感爆棚的团队，我们即将发布一款新的自定义图表类型。经小编亲测，该图表类型可以画出狂拽酷炫屌炸天的直方图，敬请期待哦。



