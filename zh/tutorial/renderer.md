{{target: renderer}}

# 使用 Canvas 或者 SVG 渲染

浏览器端图表库大多会选择 SVG 或者 Canvas 进行渲染。对于绘制图表来说，这两种技术往往是可替换的，效果相近。但是在一些场景中，他们的表现和能力又有一定差异。于是，对它们的选择取舍，就成为了一个一直存在的不易有标准答案的话题。

Apache ECharts<sup>TM</sup> 从初始一直使用 Canvas 绘制图表（除了对 IE8- 使用 VML）。而 [ECharts v4.0](https://github.com/apache/echarts/releases) 发布了 SVG 渲染器，从而提供了一种新的选择。只须在初始化一个图表实例时，设置 [renderer 参数](api.html#echarts.init) 为 `'canvas'` 或 `'svg'` 即可指定渲染器，比较方便。

> SVG 和 Canvas 这两种使用方式差异很大的技术，能够做到同时被透明支持，主要归功于 ECharts 底层库 [ZRender](https://github.com/ecomfe/zrender) 的抽象和实现，形成可互换的 SVG 渲染器和 Canvas 渲染器。

## 选择哪种渲染器

一般来说，Canvas 更适合绘制图形元素数量非常大（这一般是由数据量大导致）的图表（如热力图、地理坐标系或平行坐标系上的大规模线图或散点图等），也利于实现某些视觉 [特效](${galleryEditorPath}lines-bmap-effect)。但是，在不少场景中，SVG 具有重要的优势：它的内存占用更低（这对移动端尤其重要）、渲染性能略高、并且用户使用浏览器内置的缩放功能时不会模糊。

选择哪种渲染器，我们可以根据软硬件环境、数据量、功能需求综合考虑。
+ 在软硬件环境较好，数据量不大的场景下（例如 PC 端做商务报表），两种渲染器都可以适用，并不需要太多纠结。
+ 在环境较差，出现性能问题需要优化的场景下，可以通过试验来确定使用哪种渲染器。比如有这些经验：
    + 在须要创建很多 ECharts 实例且浏览器易崩溃的情况下（可能是因为 Canvas 数量多导致内存占用超出手机承受能力），可以使用 SVG 渲染器来进行改善。大略得说，如果图表运行在低端安卓机，或者我们在使用一些特定图表如 [水球图](https://ecomfe.github.io/echarts-liquidfill/example/) 等，SVG 渲染器可能效果更好。
    + 数据量很大、较多交互时，可以选用 Canvas 渲染器。

我们强烈欢迎开发者们 [反馈](https://github.com/apache/echarts/issues/new) 给我们使用的体验和场景，帮助我们更好的做优化。


注：除了某些特殊的渲染可能依赖 Canvas：如[炫光尾迹特效](option.html#series-lines.effect)、[带有混合效果的热力图](${galleryEditorPath}heatmap-bmap)等，绝大部分功能 SVG 都是支持的。


## 如何使用渲染器

ECharts 默认使用 Canvas 渲染。如果想使用 SVG 渲染，ECharts 代码中须包括有 SVG 渲染器模块。

+ ECharts 的 [预构建文件](https://www.jsdelivr.com/package/npm/echarts) 中，[常用版](https://cdn.jsdelivr.net/npm/echarts/dist/echarts.common.min.js) 和 [完整版](https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js) 已经包含了 SVG 渲染器，可直接使用。而 [精简版](https://cdn.jsdelivr.net/npm/echarts/dist/echarts.simple.min.js) 没有包括。
+ 如果 [在线自定义构建 ECharts](${websitePath}/zh/builder.html)，则需要勾上页面下方的 “SVG 渲染”。
+ 如果 [线下自定义构建 ECharts](tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts)，则须引入 SVG 渲染器模块，即：

```ts
import 'zrender/lib/svg/svg';
```

然后，我们就可以在代码中，初始化图表实例时，[传入参数](api.html#echarts.init) 选择渲染器类型：

```ts
// 使用 Canvas 渲染器（默认）
var chart = echarts.init(containerDom, null, {renderer: 'canvas'});
// 等价于：
var chart = echarts.init(containerDom);

// 使用 SVG 渲染器
var chart = echarts.init(containerDom, null, {renderer: 'svg'});
```
