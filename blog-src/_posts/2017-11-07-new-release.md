---
layout: post
enUrl: '2017/08/16/new-release-en.html'
title: ECharts v3.8 发布：树图，SVG 渲染（beta），ES Module
description: "在 ECharts 新发布的 3.8 版本中，新加入了树图，支持横纵向布局和径向布局；新加入了 SVG 渲染（beta 版）的支持，从而可以根据自己的需要，选择 SVG 或者 Canvas 作为渲染引擎；代码的模块系统改用 ES Module，从而能够受益于 tree shaking 减小 bundle 的体积；同时开放了构建脚本协助用户进行自定义模块、语言地构建。"
tags: [新版本, 扩展, 教程]
lazyLoad: true
---


在 ECharts 新发布的 [3.8 版本](https://github.com/ecomfe/echarts/releases/tag/3.8.0) 中，新加入了 [树图](http://echarts.baidu.com/option.html#series-tree)，支持 [横向布局](http://echarts.baidu.com/demo.html#tree-basic)、[纵向布局](http://echarts.baidu.com/demo.html#tree-vertical)、[径向布局](http://echarts.baidu.com/demo.html#tree-radial)；新加入了 [SVG 渲染支持（beta 版）](http://echarts.baidu.com/tutorial.html#%E4%BD%BF%E7%94%A8%20Canvas%20%E6%88%96%E8%80%85%20SVG%20%E6%B8%B2%E6%9F%93) 的支持，从而可以根据自己的需要，选择 SVG 或者 Canvas 作为渲染引擎；代码的模块系统改用 ES Module，从而能够受益于 tree shaking 减小 bundle 的体积；同时开放了构建脚本协助用户进行 [自定义模块、语言地构建](http://echarts.baidu.com/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts)。

---

## 树图

[树图](http://echarts.baidu.com/option.html#series-tree) 主要用来可视化树形数据结构，是一种特殊的层次类型，具有唯一的根节点，左子树，和右子树。点击树的节点，可以展开收缩子树。

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/tree-basic.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=tree-basic&edit=1&reset=1"
  style="width: 100%; height: 400px"
></div>

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/tree-radial.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=tree-radial&edit=1&reset=1"
  style="width: 100%; height: 400px"
></div>

---

## SVG 支持


浏览器端图表库大多会选择 SVG 或者 Canvas 进行渲染。对于绘制图表来说，这两种技术往往是可替换的，效果相近。但是在一些场景中，他们的表现和能力又有一定差异。于是，对它们的选择取舍，就成为了一个一直存在的不易有标准答案的话题。

ECharts 从初始一直使用 Canvas 绘制图表（除了对 IE8- 使用 VML）。而 [ECharts v3.8](https://github.com/ecomfe/echarts/releases) 发布了 SVG 渲染器（beta 版），从而提供了一种新的选择。只须在初始化一个图表实例时，设置 [renderer 参数](http://echarts.baidu.com/api.html#echarts.init) 为 `'canvas'` 或 `'svg'` 即可指定渲染器，比较方便。

> SVG 和 Canvas 这两种使用方式差异很大的技术，能够做到同时被透明支持，主要归功于 ECharts 底层库 [ZRender](https://github.com/ecomfe/zrender) 的抽象和实现，形成可互换的 SVG 渲染器和 Canvas 渲染器。

一般来说，Canvas 更适合绘制图形元素数量非常大（这一般是由数据量大导致）的图表（如热力图、地理坐标系或平行坐标系上的大规模线图或散点图等），也利于实现某些视觉 [特效](http://echarts.baidu.com/demo.html#lines-bmap-effect)。但是，在不少场景中，SVG 具有重要的优势：它的内存占用更低（这对移动端尤其重要）、渲染性能略高、并且用户使用浏览器内置的缩放功能时不会模糊。例如，我们在一些硬件环境中分别使用 Canvas 渲染器和 SVG 渲染器绘制中等数据量的折、柱、饼，统计初始动画阶段的帧率，得到了一个性能对比图：

![性能表现试验]({{ site.url }}/images/post/2017-11-07-canvas-vs-svg.png)

上图显示出，在这些场景中，SVG 渲染器相比 Canvas 渲染器在移动端的总体表现更好。当然，这个实验并非是全面的评测，在另一些数据量较大或者有图表交互动画的场景中，目前的 SVG 渲染器的性能还比不过 Canvas 渲染器。但是同时有这两个选项，为开发者们根据自己的情况优化性能提供了更广阔的空间。

选择哪种渲染器，我们可以根据软硬件环境、数据量、功能需求综合考虑。
+ 在软硬件环境较好，数据量不大的场景下（例如 PC 端做商务报表），两种渲染器都可以适用，并不需要太多纠结。
+ 在环境较差，出现性能问题需要优化的场景下，可以通过试验来确定使用哪种渲染器。比如有这些经验：
    + 在须要创建很多 ECharts 实例且浏览器易崩溃的情况下（可能是因为 Canvas 数量多导致内存占用超出手机承受能力），可以使用 SVG 渲染器来进行改善。大略得说，如果图表运行在低端安卓机，或者我们在使用一些特定图表如 [水球图](https://ecomfe.github.io/echarts-liquidfill/example/) 等，SVG 渲染器可能效果更好。
    + 数据量很大、较多交互时，可以选用 Canvas 渲染器。

我们强烈欢迎开发者们 [反馈](https://github.com/ecomfe/echarts/issues/new) 给我们使用的体验和场景，帮助我们更好的做优化。

SVG 渲染的使用 [参见教程](http://echarts.baidu.com/tutorial.html#%E4%BD%BF%E7%94%A8%20Canvas%20%E6%88%96%E8%80%85%20SVG%20%E6%B8%B2%E6%9F%93)。

---

## ES Module

从 v3.8 开始，ECharts 源代码的模块系统改用 ES Module，从而可以受益于 tree shaking，减小构建所得 bundle 的体积。并且 ECharts 提供了构建脚本（`echarts/build/build.js`），方便开发者使用命令行定制 bundle，可以选择模块、选择默认的语言。参见教程 [自定义构建](http://echarts.baidu.com/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts)。



更多的升级信息，参见 [changelog](http://echarts.baidu.com/changelog.html)。


