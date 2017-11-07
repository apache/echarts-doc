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

浏览器端图表库大多会选择 SVG 或者 Canvas 进行渲染。对于绘制图表来说，这两种技术往往是可替换的，效果相近。但是在一些环境和场景中，他们的表现和能力又有一定差异。例如，在不少环境中，SVG 比 Canvas 内存占用低（这对移动端尤其重要）、渲染性能略高、并且支持浏览器内置的缩放功能而不模糊。而 Canvas 更适宜渲染较大的数据量、并且易于实现一些特效。所以他们的表现依据软硬件平台、数据量、功能需求而不同。

让我们来看一下 Canvas 和 SVG 在 ECharts 图表中的性能表现：

![Canvas 和 SVG 在 ECharts 图表中的性能表现]({{ site.url }}/images/post/2017-11-07-canvas-vs-svg.png)

从上图中我们可以发现，在通常情况下，SVG 相比 Canvas 的性能往往更优。这一点常常在严酷的环境中（如设备配置低或数据量大）尤其明显。当然，有些情况下 Canvas 的性能也会比 SVG 更优，如上图所示的 PC 端的柱状图，这是因为 Canvas 在绘制柱状图的矩形区域的时候，效率比 SVG 高很多。

ECharts 之前的版本主要以 Canvas 进行渲染（对于 IE8- 使用 VML）。[v3.8](https://github.com/ecomfe/echarts/releases) 发布了 SVG 渲染引擎（beta 版），提供了一种新的选择。在多数场景下，两种引擎都可以适用，并可以通过 [API 参数](http://echarts.baidu.com/api.html#echarts.init) 来设置，从而用户可以根据自己的功能需求和使用场景，采用最合适自己的渲染引擎。

我们强烈欢迎开发者们 [反馈](https://github.com/ecomfe/echarts/issues/new) 给我们使用的体验和场景，帮助我们更好的做优化。

> SVG 和 Canvas 这两种使用方式差异很大的技术，能够做到同时透明支持，主要归功于 ECharts 底层库 [zender](https://github.com/ecomfe/zrender) 的抽象和实现。

SVG 渲染的使用 [参见教程](http://echarts.baidu.com/tutorial.html#%E4%BD%BF%E7%94%A8%20Canvas%20%E6%88%96%E8%80%85%20SVG%20%E6%B8%B2%E6%9F%93)。

---

## ES Module

从 v3.8 开始，ECharts 源代码的模块系统改用 ES Module，从而可以受益于 tree shaking，减小构建所得 bundle 的体积。并且 ECharts 提供了构建脚本（`echarts/build/build.js`），方便开发者使用命令行定制 bundle，可以选择模块、选择默认的语言。参见教程 [自定义构建](http://echarts.baidu.com/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts)。



更多的升级信息，参见 [changelog](http://echarts.baidu.com/changelog.html)。



