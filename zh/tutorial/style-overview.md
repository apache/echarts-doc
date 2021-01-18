{{target: style-overview}}

# ECharts 中的样式简介

本文主要是大略概述，用哪些方法，可以在 Apache ECharts<sup>TM</sup> 中设置样式，改变图形元素或者文字的颜色、明暗、大小等。

> 之所以用“样式”这种可能不很符合数据可视化思维的词，是因为，比较通俗易懂。

本文介绍这几种方式，他们的功能范畴可能会有交叉（即同一种细节的效果可能可以用不同的方式实现），但是他们各有各的场景偏好。

+ 颜色主题（Theme）
+ 调色盘
+ 直接样式设置（itemStyle、lineStyle、areaStyle、label、...）
+ 视觉映射（visualMap）

其他关于样式的文章，参见：[个性化图表的样式](~%E4%B8%AA%E6%80%A7%E5%8C%96%E5%9B%BE%E8%A1%A8%E7%9A%84%E6%A0%B7%E5%BC%8F)，[数据的视觉映射](~%E6%95%B0%E6%8D%AE%E7%9A%84%E8%A7%86%E8%A7%89%E6%98%A0%E5%B0%84)。



## 颜色主题（Theme）

最简单的更改全局样式的方式，是直接采用颜色主题（theme）。例如，在 [示例集合](${websitePath}/examples/zh/index.html) 中，可以选择 “Theme”，直接看到采用主题的效果。

ECharts4 开始，除了一贯的默认主题外，新内置了两套主题，分别为 `'light'` 和 `'dark'`。可以这么来使用它们：

```js
var chart = echarts.init(dom, 'light');
```

或者

```js
var chart = echarts.init(dom, 'dark');
```

其他的主题，没有内置在 ECharts 中，需要自己加载。这些主题可以在 [主题编辑器](https://echarts.apache.org/zh/theme-builder.html) 里访问到。也可以使用这个主题编辑器，自己编辑主题。下载下来的主题可以这样使用：

如果主题保存为 JSON 文件，那么可以自行加载和注册，例如：
```js
// 假设主题名称是 "vintage"
$.getJSON('xxx/xxx/vintage.json', function (themeJSON) {
    echarts.registerTheme('vintage', JSON.parse(themeJSON))
    var chart = echarts.init(dom, 'vintage');
});
```

如果保存为 UMD 格式的 JS 文件，那么支持了自注册，直接引入 JS 文件即可：
```js
// HTML 引入 vintage.js 文件后（假设主题名称是 "vintage"）
var chart = echarts.init(dom, 'vintage');
// ...
```


## 调色盘

调色盘，可以在 option 中设置。它给定了一组颜色，图形、系列会自动从其中选择颜色。
可以设置全局的调色盘，也可以设置系列自己专属的调色盘。

```js
option = {
    // 全局调色盘。
    color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],

    series: [{
        type: 'bar',
        // 此系列自己的调色盘。
        color: ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'],
        ...
    }, {
        type: 'pie',
        // 此系列自己的调色盘。
        color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
        ...
    }]
}
```



## 直接的样式设置 itemStyle, lineStyle, areaStyle, label, ...

直接的样式设置是比较常用设置方式。纵观 ECharts 的 [option](option.html) 中，很多地方可以设置 [itemStyle](option.html#series.itemStyle)、[lineStyle](option.html#series-line.lineStyle)、[areaStyle](option.html#series-line.areaStyle)、[label](option.html#series.label) 等等。这些的地方可以直接设置图形元素的颜色、线宽、点的大小、标签的文字、标签的样式等等。

一般来说，ECharts 的各个系列和组件，都遵从这些命名习惯，虽然不同图表和组件中，`itemStyle`、`label` 等可能出现在不同的地方。

直接样式设置的另一篇介绍，参见 [个性化图表的样式](~%E4%B8%AA%E6%80%A7%E5%8C%96%E5%9B%BE%E8%A1%A8%E7%9A%84%E6%A0%B7%E5%BC%8F)。




## 高亮的样式：emphasis

在鼠标悬浮到图形元素上时，一般会出现高亮的样式。默认情况下，高亮的样式是根据普通样式自动生成的。但是高亮的样式也可以自己定义，主要是通过 [emphasis](option.html#series-scatter.emphasis) 属性来定制。[emphsis](option.html#series-scatter.emphasis) 中的结构，和普通样式的结构相同，例如：

```js
option = {
    series: {
        type: 'scatter',

        // 普通样式。
        itemStyle: {
            // 点的颜色。
            color: 'red'
        },
        label: {
            show: true,
            // 标签的文字。
            formatter: 'This is a normal label.'
        },

        // 高亮样式。
        emphasis: {
            itemStyle: {
                // 高亮时点的颜色。
                color: 'blue'
            },
            label: {
                show: true,
                // 高亮时标签的文字。
                formatter: 'This is a emphasis label.'
            }
        }
    }
}
```

注意：在 ECharts4 以前，高亮和普通样式的写法，是这样的：

```js
option = {
    series: {
        type: 'scatter',

        itemStyle: {
            // 普通样式。
            normal: {
                // 点的颜色。
                color: 'red'
            },
            // 高亮样式。
            emphasis: {
                // 高亮时点的颜色。
                color: 'blue'
            }
        },

        label: {
            // 普通样式。
            normal: {
                show: true,
                // 标签的文字。
                formatter: 'This is a normal label.'
            },
            // 高亮样式。
            emphasis: {
                show: true,
                // 高亮时标签的文字。
                formatter: 'This is a emphasis label.'
            }
        }
    }
}
```

这种写法 **仍然被兼容**，但是，不再推荐。事实上，多数情况下，使用者只会配置普通状态下的样式，而使用默认的高亮样式。所以在 ECharts4 中，支持不写 `normal` 的配置方法（即本文开头的那种写法），使得配置项更扁平简单。



## 通过 visualMap 组件设定样式

[visualMap 组件](option.html#visualMap) 能指定数据到颜色、图形尺寸的映射规则，详见 [数据的视觉映射](~%E6%95%B0%E6%8D%AE%E7%9A%84%E8%A7%86%E8%A7%89%E6%98%A0%E5%B0%84)。
