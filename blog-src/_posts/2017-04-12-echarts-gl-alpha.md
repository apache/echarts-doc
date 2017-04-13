---
layout: post
title: ECharts GL 1.0 Alpha 发布
description: "ECharts GL （原 ECharts-X）发布 1.0 alpha，ECharts GL 是 ECharts 的 WebGL 扩展，其中提供了三维散点图，飞线图，柱状图，曲面图，地球等多种三维可视化方式。并且增加 scatterGL，graphGL系列类型用于二维的散点图，关系图的加速绘制和布局。"
tags: [new release, extension, echarts-gl]
lazyLoad: true
image:
  feature: post/2017-04-12/buildings2.jpg
---

距离 ECharts-X 最近一个版本已经过去了两年多时间，期间我们不断被开发者在各种渠道询问 ECharts-X 为什么还不升级新版本，是不是不再维护了等等，对于这些问题我们只能回答我们还没准备好。尽管这两年时间 ECharts X 没什么动静，但是其它的工作，像 ECharts 3 的架构大改动和后续版本的迭代升级，以及其它 WebGL 产品的开发，都是对新版本架构和技术上的积累。现在我们终于可以说我们准备得差不多了，ECharts-X 的下一代，ECharts-GL 发布 1.0 alpha。

[ECharts GL](https://github.com/ecomfe/echarts-gl) 是 ECharts 的 WebGL 扩展，其中提供了三维散点图，飞线图，柱状图，曲面图，地球等多种三维可视化方式。并且增加 `scatterGL`，`graphGL` 系列类型用于二维的散点图，关系图的加速绘制和布局。

先来一张 Gallery 上 [ECharts GL](https://github.com/ecomfe/echarts-gl) 的示例图片集。

![]({{ site.url }}/images/post/2017-04-12/demos.jpg)

下面会一一介绍 ECharts GL 的特性，如果你已经等不及想尝鲜了，可以直接在 Gallery 上查看编辑 ECharts GL 的示例。

+ [GL 的 Gallery 示例](http://gallery.echartsjs.com/explore.html#tags=echarts-gl)

+ [GL 的配置项手册](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html)

## 一、更便捷的安装和引入

大家用过 ECharts-X 的话，或许曾被其繁琐的引入方式困扰过，甚至可能因为尝试了很多次都没办法正确引入而选择放弃。

ECharts-GL 中大大简化了引入方式，在标签引入的环境下。你可以从 [GitHub](https://github.com/ecomfe/echarts-gl/tree/master/dist) 上获取 ECharts GL 后直接引入构建好的文件.

```js
<script data-src="echarts/dist/echarts.min.js"></script>
<script data-src="echarts-gl/dist/echarts-gl.min.js"></script>
```

如果你用 webpack 和 npm 作为开发环境。也只需要在 `npm install echarts-gl` 之后再`require`引入。

```js
require('echarts-gl');
```

## 二、更多三维可视化类型。

除了老版本的[地球](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#globe)用于地理数据可视化，ECharts GL 新增了三维的[笛卡尔坐标系](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#grid3D)、[地理坐标系](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#geo3D)，并且在这些新的三维坐标系基础上提供了六个新的系列类型，包括 [散点图 scatter3D](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-scatter3D)、[折线图 line3D](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-line3D)、[柱状图 bar3D](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-bar3D)、[曲面图 surface](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-surface)、[飞线图 lines3D](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-lines3D)以及[地图 map3D](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-map3D)

这些新的系列类型以及组件类型都是使用 WebGL 绘制，因此能够保证高质量，高性能的展示出你想要的三维可视化作品。

同时我们在配置项的设计上尽量沿用了 ECharts 的风格，保证简洁统一。比如下面这个配置就能画出一个简单的三维散点图。

```js
option = {
    grid3D: {},
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    series: [{
        type: 'scatter3D',
        symbolSize: 50,
        data: [[-1, -1, -1], [0, 0, 0], [1, 1, 1]],
        itemStyle: {
            opacity: 1
        }
    }]
};
```
> 这里跟 ECharts 有点区别，GL 中尝试了更扁平的 option 设计，使用场景更少的 emphasis 属性将会单独移出来，而原先 normal 这个层级将被移除，itemStyle 下的属性相当于原先 itemStyle.normal 下的属性。如果这次尝试没问题，接下来 ECharts 新的大版本也会使用这种更扁平的设计。
> 具体配置结构见 [https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-scatter3D.itemStyle](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-scatter3D.itemStyle)

大部分 GL 中的三维组件和系列都会带上`3D`后缀以便跟 ECharts 中的组件系列区分开。


下面这个更复杂点的例子使用`scatter3D`可视化了三维的 [Simplex Noise](https://en.wikipedia.org/wiki/Simplex_noise)

<div style="width: 100%; height: 400px; background: #111" class="ec-lazy" class="ec-lazy" data-src="http://gallery.echartsjs.com/view.html?cid=xBkWoZOjTe&v=2"></div>

除了三维的散点图，你也可以在笛卡尔坐标系上画 [折线图 line3D](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-line3D)，[柱状图 bar3D](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-bar3D)，[曲面图 surface](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-surface)。

其中 [line3D](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-line3D)，[bar3D](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-bar3D) 也是对 ECharts 中的折线图，柱状图扩展到了三维的版本。而 [surface](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-surface) 是 ECharts GL 里全新的三维图。

你可以像下面这样用 [surface](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-surface) 画函数曲面。

<div style="width: 100%; height: 400px;" class="ec-lazy" data-src="http://gallery.echartsjs.com/view.html?cid=xHkcYXm9pe"></div>

也可以像这样用曲面去可视化像图片像素这样的数据

<div style="width: 100%; height: 400px;" class="ec-lazy" data-src="http://gallery.echartsjs.com/view.html?cid=xBk5PSvqpx&v=4"></div>

甚至你可以用参数方程构建出下面这样有趣的参数曲面

<div style="width: 100%; height: 400px;" class="ec-lazy" data-src="http://gallery.echartsjs.com/view.html?cid=xHku9OE96l"></div>

除了三维笛卡尔坐标系，像柱状图，散点图也可以显示在[地球](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#globe)，[三维地理坐标系](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#geo3D)上。

比如下面这个例子就是在地球上通过散点图绘制世界人口。

<div style="width: 100%; height: 400px;" class="ec-lazy" data-src="http://gallery.echartsjs.com/view.html?cid=xS1moC0s6x"></div>

你可以大胆的组合不同坐标系和系列，制作出更具创造力的可视化作品！

## 三、高品质的画面

在很多场景里，高品质的画面是一个很重要的需求，例如：

+ 在大屏中，需要提供炫酷的，一下能够抓住人眼球的特效。

+ 生成需要放在文章或者 PPT 中的截图，需要高质量的渲染，不能有廉价三维效果的感觉。

ECharts GL 提供了一系列诸如[景深](http://localhost/echarts-doc/public/cn/option-gl.html#geo3D.postEffect.depthOfField)，[光晕](http://localhost/echarts-doc/public/cn/option-gl.html#geo3D.postEffect.bloom)，[颜色纠正](http://localhost/echarts-doc/public/cn/option-gl.html#geo3D.postEffect.colorCorrection)，[阴影](http://localhost/echarts-doc/public/cn/option-gl.html#geo3D.postEffect.SSAO)，[基于物理的渲染](http://localhost/echarts-doc/public/cn/option-gl.html#geo3D.light.ambientCubemap) 等等开箱即用的配置项让你去方便的提升自己可视化作品的渲染效果。

在这些配置项的基础上，你可以实现这样带景深的微缩模型的效果：

<img src="{{ site.url }}/images/post/2017-04-12/high-quality-1.jpg" style="width:100%;" alt="">

或者这样的基于物理渲染的金属零件的效果：

<img src="{{ site.url }}/images/post/2017-04-12/high-quality-3.jpg" style="width:100%;" alt="">

或者这样 Bling Bling 的影视广告特效：

<img src="{{ site.url }}/images/post/2017-04-12/high-quality-2.jpg" style="width:100%;" alt="">

又或者这样的大规模建筑群：

<img src="{{ site.url }}/images/post/2017-04-12/high-quality-4.jpg" style="width:100%;" alt="">


想要了解更多的效果，可以逛逛我们的[示例集](http://gallery.echartsjs.com/explore.html#tags=echarts-gl)


## 四、二维可视化的加速

除了三维的可视化，ECharts GL 还内置 [scatterGL](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-scatterGL), [graphGL](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-scatterGL) 两个系列，能够大幅度的优化常见的二维散点图和关系图的绘制和布局性能。

散点图也是比较常见的会有大数据量的系列类型。ECharts 尽管能绘制像微博签到图那样上十万的散点图，但是很难做到流畅的交互。拖拽、缩放等操作都会有卡顿。

在 ECharts GL 里利用 WebGL 加速绘制后，可以无压力得绘制和实时的交互十万个数据的散点图了。

<div style="width: 100%; height: 400px; background: #111;" class="ec-lazy" data-src="http://gallery.echartsjs.com/view.html?cid=xHJkXhU9Tg"></div>

而且实现这一切只需要把原先的`scatter`类型改为`scatterGL`类型，不需要再做其它的改动！

对于[关系图 graphGL](https://ecomfe.github.io/echarts-doc/public/cn/option-gl.html#series-scatterGL)除了绘制上有加速之外，我们还在 WebGL 中实现了[力引导布局](https://github.com/gephi/gephi/wiki/Force-Atlas-2)。在高端的显卡上 GPU 布局相对于 CPU 布局甚至能有上百倍的性能提升。

下面是在`GTX1070`和`i7 4GHz`的电脑中对一个`两万`个节点，近`五万`条边的关系图一次布局的迭代的性能对比。

<img src="{{ site.url }}/images/post/2017-04-12/gpu-layout-perf.png" width="400px" alt="">

下面是对这个关系图实时布局的视频。

<video controls width="100%" src="{{ site.url }}/images/post/2017-04-12/graphGL.mp4"></video>


下面对`2500`个节点的网格图进行 GPU 布局的例子（只支持 PC 端）。

<div style="width: 100%; height: 400px; background: #111;" class="ec-lazy" data-src="http://gallery.echartsjs.com/view.html?cid=xrJchBL9ag"></div>

特别感谢 Gephi 提供了 Force Atlas2 这样在大规模网络上能够有稳定优良的布局结果的算法。


## 五、与 ECharts 交互组件的结合

ECharts GL 中提供的系列和组件能够和 ECharts 中的大部分组件，例如 [visualMap](http://echarts.baidu.com/option.html#visualMap)，[legend](http://echarts.baidu.com/option.html#legend)，[tooltip](http://echarts.baidu.com/option.html#tooltip) 等组合使用。

例如下面这个例子用 [visualMap](http://echarts.baidu.com/option.html#visualMap) 组件对柱状图做了颜色的映射，而且能够通过控件筛选出区间内的数据

<div style="width: 100%; height: 400px; background: #111;" class="ec-lazy" data-src="http://gallery.echartsjs.com/view.html?cid=xSyMekmcTx"></div>

## 六、移动端兼容

现在很多移动端的浏览器已经支持 WebGL 了，特别是像 iOS 系统对 WebGL 的扩展特性等支持得非常完善。所以用 ECharts GL 制作的大部分例子都能在 iOS 上流畅无压力的运行。在交互上 ECharts GL 也对移动端做了兼容处理，支持平移，双指缩放等等。

如果你现在不是在手机上浏览这篇文章，可以稍后在手机上打开 [http://gallery.echartsjs.com/](http://gallery.echartsjs.com/) 看看效果。

下面是在 iPhone 6 上实时预览前面示例中参数曲面的效果。

<video controls width="100%" src="{{ site.url }}/images/post/2017-04-12/mobile.mp4"></video>

## 更多

ECharts GL 1.0 Alpha 只是个开始，在正式版发布之前，我们还会对画面，交互的细节，动画，性能等等做更多的优化。大家使用过程中有任何的问题或者建议都可以在 GitHub 上跟我们反馈，
我们也非常期待大家能够利用 ECharts GL 做出让我们想象不到的作品。



