---
layout: post
enUrl: '2017/02/21/echarts-liquidfill-chart-tutorial-en.html'
title: ECharts 水球图教程
description: "水球图是一种适合于展现单个百分比数据的图表类型，ECharts 的水球图插件使你能够通过非常简单的配置，实现酷炫的数据展示效果。本文将会介绍，如何使用 ECharts 水球图。"
tags: [扩展, 教程]
image:
  feature: post/2017-02-21-echarts-liquidfill-chart-tutorial.gif
---

水球图是一种适合于展现单个百分比数据的图表类型，ECharts 的[水球图插件](https://github.com/ecomfe/echarts-liquidfill)使你能够通过非常简单的配置，实现酷炫的数据展示效果。

<iframe style="width: 100%; height: 350px" src="http://gallery.echartsjs.com/view.html?cid=liquidfill-basic"></iframe>

那么，今天我们就一起来学习一下，如何使用 ECharts 水球图。


## 第一步：引入 JavaScript 文件

ECharts 的水球图是一个*插件*类型的图表。这意味着，在 ECharts 官网下载的完整版本将不包含水球图——这保证了不需要使用该图表的用户能够获得一个尽可能小的代码版本。使用时，需要在引入 `echarts.js` 之后，另外引入水球图对应的 `echarts-liquidfill.js`，可以在 [GitHub](https://github.com/ecomfe/echarts-liquidfill/tree/gh-pages/dist) 找到最新版本。

```html
<script src="echarts.js"></script>
<script src="echarts-liquidfill.js"></script>

<script>
// 使用水球图的代码
</script>
```

## 第二步：指定 DOM 元素作为图表容器

和创建 ECharts 的其他图表一样，我们需要指定 DOM 中的一个有高度和宽度的元素作为图表的容器——也就是图表将会绘制的位置。

```html
<div id="liquidfill-chart" style="width=100%; height = 400px"></div>
```

传入该 DOM 元素，使用 ECharts 初始化图表：

```js
var chart = echarts.init(document.getElementById('liquidfill-chart'));
```

## 第三步：设置水球图参数

和其他 ECharts 图表一样，水球图提供将系列的 `type` 指定为 `'liquidFill'`（注意大小写）来表明这是一个水球图类型。

一个简单的配置项可以是：

```js
var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3]
    }]
};
chart.setOption(option);
```

这样，就能得到文章开头的水球图效果了：

<iframe style="width: 100%; height: 350px" src="http://gallery.echartsjs.com/view.html?cid=liquidfill-basic"></iframe>

> 如果发现图表没有正确显示，你可以检查以下几种可能：
>
> - JS 文件是否正确加载；
> - `echarts` 变量是否存在；
> - 控制台是否报错（如果报错显示 `liquidFill` 系列不存在，则很可能 `echarts-liquidfill.js` 没有正确加载）；
> - DOM 元素在 `echarts.init` 的时候是否有高度和宽度。

可以发现，在上面的代码中，我们只指定了图表类型为 `'liquidFill'`，以及把数据设置为 `[0.6, 0.5, 0.4, 0.3]`（对应生成的四个波浪），而其他的参数都是预设的。

即使不配置很多参数，预设的参数也可以使你获得一个优雅的水球图效果。而如果有特定的需求，ECharts 水球图又支持非常高度定制的效果。下面我们具体说明如何定制化你的水球图。

## 第四步：定制化水球图

水球图支持非常高度定制化的需求，包括颜色（`color`）、大小（`radius`）、波的振幅（`amplitude`）、波长（`waveLength`）、相位（`phase`）、周期（`period`）、移动方向（`direction`）、形状（`shape`）、动画（`waveAnimation`）等等，完整的配置项参数参见[水球图 API](https://github.com/ecomfe/echarts-liquidfill#api)。文档有针对每个配置项的详细说明，这里我们来介绍一些重要的参数。

### 形状与动画

<iframe style="width: 100%; height: 600px" src="http://gallery.echartsjs.com/view.html?cid=xry0tUfcBe"></iframe>

除了默认的圆形（`'circle'`）水球图，还可以将 `shape` 设置为 ECharts *Symbol* 的其他类型：`'rect'`、`'roundRect'`、`'triangle'`、`'diamond'`、`'pin'`、`'arrow'`。甚至，使用 `'path://...'` 的形式，为其[指定一个 SVG 路径](http://gallery.echartsjs.com/editor.html?c=liquidfill-echarts)，得到非常酷炫的效果：

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=liquidfill-echarts"></iframe>


通过将 `direction` 设为 `'left'` 或 `'right'`，指定波浪的移动方向，或者设为 `'none'` 表示静止。

上面的例子完整的配置项代码为：

```js
// run at: http://gallery.echartsjs.com/editor.html?c=xry0tUfcBe
var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '40%',
        shape: 'diamond',
        center: ['25%', '25%']
    }, {
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        direction: 'left',
        radius: '40%',
        shape: 'rect',
        center: ['75%', '25%']
    }, {
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '40%',
        shape: 'roundRect',
        center: ['25%', '75%'],
        backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        outline: {
            show: false
        },
        waveAnimation: false, // 禁止左右波动
    }, {
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '50%',
        shape: 'pin',
        center: ['75%', '75%'],
        amplitude: 0,
        waveAnimation: false,
        outline: {
            show: false
        },
        backgroundStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        }
    }]
};
```

### 单个波的配置

除了对所有水波做的设置之外，每个水波可以进行单独的配置。和 ECharts 的其他配置项一样，对单个数据的配置项将覆盖整个系列的配置项。

<iframe style="width: 100%; height: 350px" src="http://gallery.echartsjs.com/view.html?cid=xry6CHNCVl"></iframe>

在这个例子中，我们将第二条水波设为红色，并且改变其移动方向。

```js
var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, {
            value: 0.5,
            direction: 'left',
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        }, 0.4, 0.3]
    }]
};
```

可以发现，原先 `data` 中的一项是一个数字，而在需要做特殊定制的数据中，我们将其设置为一个对象，`value` 值是原先的数字，其他配置项将覆盖系列配置项的值。


### 文字显示

水球图中间的文字有个酷炫的效果，在水波和背景前的文字颜色是不同的，可以通过 `insideColor` 设置水波处的文字颜色，`color` 设置背景处的文字颜色。

```js
var option = {
    series: [{
        type: 'liquidFill',
        radius: '80%',
        data: [0.5, 0.45, 0.4, 0.3],
        label: {
            normal: {
                textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 50
                }
            }
        }
    }]
};
```

<iframe style="width: 100%; height: 350px" src="http://gallery.echartsjs.com/view.html?cid=xHyUvV_tFe"></iframe>

图表中间默认显示百分比数据，如果你需要将其设置为其他文字内容，可以通过 `formatter` 指定，这与 ECharts 的其他格式化函数也是相同的。

`formatter` 可以是一个字符串，其中 `'{a}'`、`'{b}'`、`'{c}'` 会被分别替换成系列名称、数据名称、数据值。

如：

```js
var option = {
    series: [{
        type: 'liquidFill',
        name: 'Liquid Fill',
        data: [{
            name: 'First Data',
            value: 0.6
        }, 0.5, 0.4, 0.3],
        label: {
            normal: {
                formatter: '{a}\n{b}\nValue: {c}',
                textStyle: {
                    fontSize: 28
                }
            }
        }
    }]
};
```

<iframe style="width: 100%; height: 350px" src="http://gallery.echartsjs.com/view.html?cid=xHk5831cHg"></iframe>

此外，`formatter` 也可以是一个函数，以下代码能得到和上面字符串形式同样的效果。

```js
formatter: function(param) {
    return param.seriesName + '\n'
        + param.name + '\n'
        + 'Value:' + param.value;
}
```

## 小结

以上，我们介绍了 ECharts 水球图的一些基本用法，希望能够给大家启发，创作出更多波涛汹涌的作品。

更完整的配置项请参考 GitHub 上[详细的文档](https://github.com/ecomfe/echarts-liquidfill)，或者到 ECharts Gallery 上查看其它[水球图作品](http://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~query=liquidFill~author=all)。

