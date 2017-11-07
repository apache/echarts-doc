{{target: renderer}}

# Render by Canvas or SVG

Most of browser-side charting libraries use SVG or Canvas as their underlying renderer. In the scope of charts, usually they are alternative, without critical differences. But in some environment and scenarios, they show notable differences in performance or functionality. For example, in some platforms, SVG consumes less memory then Canvas (especially in mobile device), and gives better performance in rendering, and supports built-in zooming of browser without blur. Whereas Canvas brings ability of large data rendering, and supports some special effects. So the selection is based on platform, data size and functional requirements.

Here's a comparison of rendering efficiency with Canvas and SVG.

~[100%x400](${galleryViewPath}doc-example/canvas-vs-svg-en&reset=1&edit=1)

As we can see, SVG has a better FPS performance in most cases above, especially in harsh conditions, like when the device is not very good, or the data amount is big. In some cases, however, Canvas has a greater FPS than SVG, like bar series on PC. This is mainly because Canvas is more efficient when drawing rectangles of bar series.

ECharts has been using Canvas as its renderer (uses VML for IE8-). Now, from [ECharts v3.8](https://github.com/ecomfe/echarts/releases) we provide SVG renderer (beta version) as another option. In most cases, either one can be used, and can be specified by [API parameter](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.init), which enables users to choose the more suitable one for their scenarios and functional requirements.

Therefore [feedback](https://github.com/ecomfe/echarts/issues/new) of experiences and usage scenarios are strongly welcomed, which will make the feature better and better.

> That SVG and Canvas, who are very different in use, are both supported in ECharts owns to the abstruction and implementation in the underlying render library [zender](https://github.com/ecomfe/zrender).


Notice: The features of shadow and texture have not been supported yet in the current beta version of SVG renderer.


## Specify renderer

ECharts uses Canvas by default. If user intends to use SVG renderer, the module of SVG renderer should be included in ECharts bundle.

+ In the [pre-build](https://ecomfe.github.io/echarts-doc/public/en/download.html) of ECharts, SVG renderer has been included in [common version](https://raw.githubusercontent.com/ecomfe/echarts/3.7.2/dist/echarts.common.min.js) and [complete version](https://raw.githubusercontent.com/ecomfe/echarts/3.7.2/dist/echarts.min.js). But not in [simple version](https://raw.githubusercontent.com/ecomfe/echarts/3.7.2/dist/echarts.simple.min.js).
+ If [build ECharts online](http://echarts.baidu.com/builder.html), the checkbox "SVG 渲染" should be checked.
+ If [build ECharts offline](http://echarts.baidu.com/tutorial.html#Create%20Custom%20Build%20of%20ECharts), the module of SVG renderer should be imported:

```js
import 'zrender/src/svg/svg';
```

Then wen can specify renderer by [parameter](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.init):

```js
// Use Canvas renderer (default).
var chart = echarts.init(containerDom, null, {renderer: 'canvas'});
// which is equal to:
var chart = echarts.init(containerDom, null, {renderer: 'canvas'});

// Use SVG renderer.
var chart = echarts.init(containerDom, null, {renderer: 'svg'});
```
