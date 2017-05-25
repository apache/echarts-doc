---
layout: post
enUrl: '2017/05/25/new-release-en.html'
title: ECharts v3.6 发布：自定义系列、极坐标柱状图
description: "在 ECharts 新发布的 3.6 版本中，新增了自定义系列，能让用户定制渲染逻辑，从而在已有坐标系中创造新的图表。此外还有极坐标柱状图、自定义维度映射、dataZoom 等其他一些增强。"
tags: [新版本, 扩展, 教程]
lazyLoad: true
image:
  feature: post/2017-05-25-banner.png
---


在 ECharts 新发布的 [3.6 版本](https://github.com/ecomfe/echarts/releases/tag/3.6.0)中，新增了 [自定义系列（custom series）](http://echarts.baidu.com/option.html#series-custom)，能让用户定制渲染逻辑，从而在已有坐标系中创造新的图表。此外还有极坐标柱状图、自定义维度映射、dataZoom 等其他一些增强。


## 自定义系列

图表的类型多种多样，有些大众有些小众，echarts 难于内置得支持所有类型的图表。所以推出了 [自定义系列（custom series）](http://echarts.baidu.com/option.html#series-custom)。

自定义系列可以自定义系列中的图形元素渲染。从而能扩展出不同的图表。同时，echarts 会统一管理图形的创建删除、动画、与其他组件（如 [dataZoom](http://echarts.baidu.com/option.html#dataZoom)、[visualMap](http://echarts.baidu.com/option.html#visualMap)）的联动，使用户不必纠结这些细节。


**例如，下面的例子使用 custom series 扩展出了 x-range 图：**
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/custom-profile.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=custom-profile&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>

可以注意到，里面须用户自定义的渲染逻辑，在 `renderItem` 这个函数中，并不十分复杂。但是得到的功能是比较完备的。

```js
var option = {
    ...,
    series: [{
        type: 'custom',
        renderItem: function (params, api) {
            var categoryIndex = api.value(0);
            var start = api.coord([api.value(1), categoryIndex]);
            var end = api.coord([api.value(2), categoryIndex]);
            var height = api.size([0, 1])[1] * 0.6;

            return {
                type: 'rect',
                shape: echarts.graphic.clipRectByRect({
                    x: start[0],
                    y: start[1] - height / 2,
                    width: end[0] - start[0],
                    height: height
                }, {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height
                }),
                style: api.style()
            };
        },
        data: data
    }]
}
```


**下面的两个例子使用 custom series 扩展出了 error-chart 图：**
<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/custom-error-bar.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=custom-error-bar&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/custom-error-scatter.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=custom-error-scatter&edit=1&reset=1"
  style="width: 100%; height: 400px"
></div>

**下面是其他一些例子：**

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/custom-bar-trend.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=custom-bar-trend&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/custom-profit.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=custom-profit&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/custom-hexbin.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=custom-hexbin&edit=1&reset=1"
  style="width: 100%; height: 500px"
></div>


## 极坐标柱状图

极坐标中的柱状图，可以按径向排布或者切向排布。

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bar-polar-stack.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=bar-polar-stack&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>

<div class="ec-lazy"
  data-thumb="{{ site.url_ec_examples_thumb_cn }}/bar-polar-stack-radial.png"
  data-src="{{ site.url_ec_examples_view_cn }}?c=bar-polar-stack-radial&edit=1&reset=1"
  style="width: 100%; height: 300px"
></div>


## 其他

此外，

+ 支持了[encode](http://echarts.baidu.com/option.html#series-scatter.encode) 设定，可以指定 [data](http://echarts.baidu.com/option.html#series-scatter.data) 中哪些维度映射到坐标系中哪个轴，或者哪些维度在 [tooltip](http://echarts.baidu.com/option.html#tooltip) 以及 [label](http://echarts.baidu.com/option.html#series-scatter.label) 中显示。
+ 支持了 [dimensions](http://echarts.baidu.com/option.html#series-scatter.dimensions) 设定，能指定 [data](http://echarts.baidu.com/option.html#series-scatter.data) 中每个维度的名称和类型。名称可以显示在默认 [tooltip](http://echarts.baidu.com/option.html#tooltip) 中。
+ `dataZoom` 组件进行了增强。比如，支持了『按住 `'ctrl'`/`'alt'`/`'shift'` 和滚轮时才能出发缩放平移』功能，避免和页面的滚动冲突（参见 [moveOnMouseMove](http://echarts.baidu.com/option.html#dataZoom-inside.moveOnMouseMove) 和 [zoomOnMouseWheel](http://echarts.baidu.com/option.html#dataZoom-inside.zoomOnMouseWheel)。另外支持了 [minSpan](http://echarts.baidu.com/option.html#dataZoom.minSpan) 和 [maxSpan](http://echarts.baidu.com/option.html#dataZoom.maxSpan) 等细节配置。

更多的升级信息，参见 [changelog](http://echarts.baidu.com/changelog.html)。
