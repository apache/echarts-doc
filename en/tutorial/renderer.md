{{target: renderer}}

# Render by Canvas or SVG

Most of browser-side charting libraries use SVG or Canvas as their underlying renderer. In the scope of Apache ECharts<sup>TM</sup>, they are usually alternative, without critical differences. But in some environment and scenarios, they show notable differences in performance or functionality.

ECharts has been using Canvas as its renderer (use VML for IE8-) from the beginning. As of [ECharts v3.8](https://github.com/apache/echarts/releases) we provide an SVG renderer (beta version) as another option. Either of them can be used by specifying parameter [renderer](api.html#echarts.init) as `'canvas'` or `'svg'` when initializing a chart instance.

> Both SVG and Canvas, which are very different rendering implementations, are supported in ECharts by leveraging the Canvas and SVG renderers offered by the [zrender](https://github.com/ecomfe/zrender) library.

## How to make a choice?

Generally speaking, Canvas is suitable for cases where there is a large amount of graphical elements (usually due to a large amount of data points), like heatmap and lines or scatter plot with large data in geo or parallel coordinates. In addition, it supports some [special visual effect](${websitePath}/examples/en/editor.html?c=lines-bmap-effect) not supported by SVG. However, in some other scenarios SVG has some critical advantages: it consumes less memory than Canvas (especially in mobile devices), and gives better performance in rendering. Moreover, it never blurs when zooming the viewport of the browser whereas Canvas may blur.

How to make a choice? These factors, hardware and software environment, data amount and functional requirements, should be considered.

+ When not constrained by hardware/software, and the data amount is not large, both should provide equally satisfactory results.
+ When encountering performance issues, we can attempt to get better result by choose appropriate renderer.
    + If lots of ECharts instances have to be created, and it causes the browser crash (probably caused by that the large memory consumption) we can try the SVG renderer. Or, generally, when running on some old Android devices, or if we are using some kind of charts like [liquidfill](https://ecomfe.github.io/echarts-liquidfill/example/), the SVG renderer probably gives a better performance.
    + If visualizing a large amount of data, or complicated human interactions with data is required, the Canvas renderer works better currently.

Therefore [feedback](https://github.com/apache/echarts/issues/new) of experiences and usage scenarios are strongly welcomed, which will help improve the these renderers.

## How to use specify a renderer?

ECharts uses Canvas by default. If a user intends to use the SVG renderer, the module of the SVG renderer should be included in ECharts bundle.

+ In the [pre-build](https://www.jsdelivr.com/package/npm/echarts) of ECharts, the SVG renderer has been included in [common version](https://cdn.jsdelivr.net/npm/echarts/dist/echarts.common.min.js) and [complete version](https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js). But not in [simple version](https://cdn.jsdelivr.net/npm/echarts/dist/echarts.simple.min.js).
+ When [building ECharts online](${websitePath}/en/builder.html), the checkbox "SVG Renderer" should be checked.
+ When [building ECharts offline](tutorial.html#Use%20ECharts%20with%20bundler%20and%20NPM), the SVG renderer module should be imported:

```ts
import 'zrender/lib/svg/svg';
```

Then we can specify renderer by [parameter](api.html#echarts.init):

```ts
// Use the Canvas renderer (default).
var chart = echarts.init(containerDom, null, {renderer: 'canvas'});
// which is equal to:
var chart = echarts.init(containerDom, null, {renderer: 'canvas'});

// Use the SVG renderer.
var chart = echarts.init(containerDom, null, {renderer: 'svg'});
```
