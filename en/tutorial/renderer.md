{{target: renderer}}

# Render by Canvas or SVG

Most of browser-side charting libraries use SVG or Canvas as their underlying renderer. In the scope of charts, they are usually alternative, without critical differences. But in some environment and scenarios, they show notable differences in performance or functionality.

ECharts has been using Canvas as its renderer (use VML for IE8-) from the begining. Now, from [ECharts v3.8](https://github.com/apache/incubator-echarts/releases) we provide a SVG renderer (beta version) as another option. Either of them can be used by specifing parameter [renderer](api.html#echarts.init) as `'canvas'` or `'svg'` when initailizing a chart instance.

> That both SVG and Canvas, who are very different in use, are able to be supported in ECharts owns to the abstruction in its underlying render library [zender](https://github.com/ecomfe/zrender), where they are implemented as a Canvas renderer and a alternative SVG renderer.

## How to make a choice?

Generally speaking, Canvas is suitable for the case that there is a large amount of grpahic elements (which basically due to a large amount of data), like heatmap and lines or scatter plot with large data in geo or parallel coordinates. Besides it supports some [special visual effect](${websitePath}/examples/en/editor.html?c=lines-bmap-effect). But in some other scenarios SVG has some critical advantages: it consumes less memory then Canvas (especially in mobile device), and gives better performance in rendering. Moreover, it never blurs when zooming the viewport of browser whereas Canvas may blurs. For example, we have tried to render line, bar, pie charts with the Canvas renderer and the SVG renderer, and recorded the frame rate during the the stage that the initial animation performed:

~[90%x400](${galleryViewPath}doc-example/canvas-vs-svg-en&reset=1)

In the scenarios above, the SVG renderer has provided a better FPS performance in mobile devices. In some other scenarios, where big data amount or certain kinds of human interactions exists, the SVG renderer is still not as good as the Canvas renderer in performance, but two options provides the ability to optimize the performance according to the requirements of each developer.

How to make a choice? These factors, hardware and software environment, data amount and functional requirements, should be considered.

+ If the environment is not harsh and the data amount is not large, both of them can be used, no need to pay attention too much.
+ If some harsh environment caused performance problem, we can attempt to get better result by choose appropriate renderer.
    + If lots of echarts instances have to be created and it cause browser crash (it probably caused by that the large memory consumption of those Canvas instances is beyond the limit of some mobile devices) we can try the SVG renderer. Or, generally, if charts runs in some old Android devices, or if we are using some kind of charts like [liquidfill](https://ecomfe.github.io/echarts-liquidfill/example/), the SVG renderer probably gives a better performance.
    + If visualizing a large amount of data, or complicated human interactions with data is required, the Canvas renderer works better currently.

Therefore [feedback](https://github.com/apache/incubator-echarts/issues/new) of experiences and usage scenarios are strongly welcomed, which will make the these renderers better and better.


Notice: The features of rich text, shadow and texture have not been supported yet in the current beta version of the SVG renderer.


## How to use specify a renderer?

ECharts uses Canvas by default. If user intends to use the SVG renderer, the module of the SVG renderer should be included in ECharts bundle.

+ In the [pre-build](https://www.jsdelivr.com/package/npm/echarts) of ECharts, the SVG renderer has been included in [common version](https://cdn.jsdelivr.net/npm/echarts/dist/echarts.common.min.js) and [complete version](https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js). But not in [simple version](https://cdn.jsdelivr.net/npm/echarts/dist/echarts.simple.min.js).
+ If [build ECharts online](${websitePath}/en/builder.html), the checkbox "SVG Renderer" should be checked.
+ If [build ECharts offline](tutorial.html#Create%20Custom%20Build%20of%20ECharts), the module of the SVG renderer should be imported:

```js
import 'zrender/lib/svg/svg';
```

Then wen can specify renderer by [parameter](api.html#echarts.init):

```js
// Use the Canvas renderer (default).
var chart = echarts.init(containerDom, null, {renderer: 'canvas'});
// which is equal to:
var chart = echarts.init(containerDom, null, {renderer: 'canvas'});

// Use the SVG renderer.
var chart = echarts.init(containerDom, null, {renderer: 'svg'});
```
