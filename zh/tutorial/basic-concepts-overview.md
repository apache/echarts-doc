{{ target: basic-concept-overview }}

# ECharts 基础概念概览

本文介绍 echarts 最基本的名词和概念。

## echarts 实例

一个网页中可以创建多个 `echarts 实例`。每个 `echarts 实例` 中可以创建多个图表和坐标系等等。准备一个 DOM 节点（作为 echarts 的渲染容器），就可以在上面创建一个 echarts 实例。每个 echarts 实例独占一个 DOM 节点。

![500xauto](~basic-concepts-overview/multiple-ec-instance.jpg)


## 系列（series）

`系列`（`series`）是很常见的名词。在 echarts 里，`系列`（`series`）是指：一组数值以及他们映射成的图。“系列”这个词原本可能来源于“一系列的数据”，而在 echarts 中取其扩展的概念，不仅表示数据，也表示数据映射成为的图。所以，一个 `系列` 包含的要素有：一组数值、图表类型（`series.type`）、以及其他的对于该图的的设定参数。

echarts 里系列类型（`series.type`）就是图表类型。系列类型（`series.type`）至少有：`line`（折线图）、`bar`（柱状图）、`pie`（饼图）、`scatter`（散点图）、`graph`（关系图）、`tree`（树图）、...

如下图，右侧的 `option` 中声明了三个 `系列`（`series`）：`pie`（饼图系列）、`line`（折线图系列）、`bar`（柱状图系列），每个系列中有他所需要的数据（`series.data`）。

![700xauto](~basic-concepts-overview/series-all-a.jpg)

类同地，下图中是另一种配置方式，系列的数据从 [dataset](option.html#dataset) 中取：

![600xauto](~basic-concepts-overview/series-all-b.jpg)


## 组件（component）

在系列之上，echarts 中各种内容，被抽象为“组件”。例如，echarts 中至少有这些组件：`xAxis`（直角坐标系 X 轴）、`yAxis`（直角坐标系 Y 轴）、`grid`（直角坐标系底板）、`angleAxis`（极坐标系角度轴）、`radiusAxis`（极坐标系半径轴）、`polar`（极坐标系底板）、`geo`（地理坐标系）、`dataZoom`（数据区缩放组件）、`visualMap`（视觉映射组件）、`tooltip`（提示框组件）、`toolbox`（工具栏组件）、`series`（系列）、...

我们注意到，其实系列（`series`）也是一种组件，可以理解为：系列是专门绘制“图”的组件。

如下图，右侧的 `option` 中声明了各个组件（包括系列），各个组件就出现在图中。

![800xauto](~basic-concepts-overview/components.jpg)

注：因为系列是一种特殊的组件，所以有时候也会出现 “组件和系列” 这样的描述，这种语境下的 “组件” 是指：除了 “系列” 以外的其他组件。

## 用 option 描述图表

上面已经出现了 `option` 这个概念。echarts 的使用者，使用 `option` 来描述其对图表的各种需求，包括：有什么数据、要画什么图表、图表长什么样子、含有什么组件、组件能操作什么事情等等。简而言之，`option` 表述了：`数据`、`数据如何映射成图形`、`交互行为`。

```js
// 创建 echarts 实例。
var dom = document.getElementById('dom-id');
var chart = echarts.init(dom);

// 用 option 描述 `数据`、`数据如何映射成图形`、`交互行为` 等。
// option 是个大的 JavaScript 对象。
var option = {
    // option 每个属性是一类组件。
    legend: {...},
    grid: {...},
    tooltip: {...},
    toolbox: {...},
    dataZoom: {...},
    visualMap: {...},
    // 如果有多个同类组件，那么就是个数组。例如这里有三个 X 轴。
    xAxis: [
        // 数组每项表示一个组件实例，用 type 描述“子类型”。
        {type: 'category', ...},
        {type: 'category', ...},
        {type: 'value', ...}
    ],
    yAxis: [{...}, {...}],
    // 这里有多个系列，也是构成一个数组。
    series: [
        // 每个系列，也有 type 描述“子类型”，即“图表类型”。
        {type: 'line', data: [...]},
        {type: 'line', data: [...]},
        {type: 'line', data: [...]}
    }]
};

// 调用 setOption 将 option 输入 echarts，然后 echarts 渲染图表。
chart.setOption(option);
```


## 组件的定位

不同的组件、系列，常有不同的定位方式。但是往往首先有一种通用的定位方式：基于 `top` / `right` / `down` / `left` / `width` / `height` 的绝对定位。这种绝对定位的方式，类似于 `CSS` 的绝对定位（`position: absolute`）。绝对定位基于的是 echarts 容器 DOM 节点。

其中，他们每个值都可以是：
+ 绝对数值（例如 `bottom: 54` 表示：距离 echarts 容器底边界 `54` 像素）。
+ 或者基于 echarts 容器高宽的百分比（例如 `right: '20%'` 表示：距离 echarts 容器右边界的距离是 echarts 容器高度的 `20%`）。

如下图的例子，对 `grid` 组件（也就是直角坐标系的底板）设置 `left`、`right`、`height`、`bottom` 达到的效果。

![800xauto](~basic-concepts-overview/locate.jpg)

我们可以注意到，`left` `right` `width` 是一组（横向）、`top` `bottom` `height` 是另一组（纵向）。这两组没有什么关联。每组中，至多设置两项就可以了，第三项会被自动算出。例如，设置了 `left` 和 `right` 就可以了，`width` 会被自动算出。



