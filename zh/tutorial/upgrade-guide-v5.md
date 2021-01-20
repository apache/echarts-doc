{{ target: upgrade-guide-v5 }}

# ECharst 5 升级指南


本指南面向那些希望将 echarts 4.x（以下简称 `v4`）升级到 echarts 5.x（以下简称 `v5`）的用户。echarts 5 的新功能可以在这个 [文档](xxx) 中查看。绝大多数情况下，我们用不着为这个升级做什么额外的事，因为 echarts 一直尽可能地保持 API 的稳定和向后兼容。但是，echarts 5 仍然带来了一些非兼容改动。此外，在一些情况下，echarts 5 提供了一些更好的 API，并不再推荐使用一些以前的 API（当然，仍保持兼容他们）。这篇文档，会尽力详尽得解释它们。

因为 `v5.0.1` 带来了一个重要功能，[模块注册](tutorial.html#%E5%9C%A8%E6%89%93%E5%8C%85%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)。所以本文档基于 `v5.0.1` 或者更高的版本。


## 非兼容性改变


### 默认主题（theme）

`v5` 改变了默认主题中的颜色。如果使用者想改回 `v4` 的颜色，可以手动声明颜色，如下：
```js
chart.setOption({
    color: [
        '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
        '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
    ],
    // ...
});
```
或者，做一个简单的 `v4` 主题：
```js
var themeEC4 = {
    color: [
        '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
        '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
    ]
};
var chart = echarts.init(dom, themeEC4);
chart.setOption(/* ... */);
```


### 引用 ECharts


#### 从 `lib` 中引用

如果使用者在 `v4` 中这样引用了 echarts：
```js
import echarts from 'echarts/lib/echarts';
```
或者
```js
import echarts from 'echarts';
```

这两种方式，`v5` 中不再支持了。

使用者需要如下更改代码解决这个问题：
```js
import * as echarts from 'echarts/lib/echarts';
```
或者
```js
import * as echarts from 'echarts';
```


#### 从 `src` 中引用

如果一个使用 echarts 的 JavaScript 工程，在 `v4` 中引用了 `src/echarts.js`，`src/chart/*.js` 或 `src/component/*.js`，例如：
```js
import * as echarts from 'echarts/src/echarts';
import 'echarts/src/chart/bar';
import 'echarts/src/component/grid';
```
`v5` 不再支持这种做法，因为所有 `echarts/src` 中的文件，都已经变为了 `*.ts`，不再是 `js` 文件。

其实 `v5` 不再推荐从 `echarts/src` 引用文件。使用者可以这样更改代码：
```js
import * as echarts from 'echarts/index.blank';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';

echarts.use([BarChart, GridComponent]);
```

charts 和 components 的完整列表，见 [charts@5.0.1](https://cdn.jsdelivr.net/npm/echarts@5.0.1/lib/export/charts.js)，[components@5.0.1](https://cdn.jsdelivr.net/npm/echarts@5.0.1/lib/export/components.js)。



#### 无障碍访问（`aria`）的引用

`v5` 里 [echarts/dist/echarts.simple(.min).js](https://cdn.jsdelivr.net/npm/echarts@5.0.1/dist/echarts.simple.js) 和 [echarts/index.simple.js](https://cdn.jsdelivr.net/npm/echarts@5.0.1/index.simple.js) 不再默认引用 [无障碍访问（aria）](option.html#aria) 了。

如果使用者在用 [echarts/dist/echarts(.min).js](https://cdn.jsdelivr.net/npm/echarts@5.0.1/dist/echarts.js) 或者 [echarts/dist/echarts.common(.min).js](https://cdn.jsdelivr.net/npm/echarts@5.0.1/dist/echarts.common.js) 或者
```js
import * as echarts from 'echarts';
```
或者
```js
import * as echarts from 'echarts/index.common';
```
那么，关于 [无障碍访问（aria）](option.html#aria)，开发者不用改任何东西。因为上述文件和模块仍然对其有默认引用。

但是，如果使用者在用 [echarts/dist/echarts.simple(.min).js](https://cdn.jsdelivr.net/npm/echarts@5.0.1/dist/echarts.simple.js) 或者
```js
import * as echarts from 'echarts/index.simple';
```
那么需要更改代码，手动引用一下 [无障碍访问（aria）](option.html#aria) 模块，例如：
```js
import * as echarts from 'echarts/index.simple';
import { AriaComponent } from 'echarts/components';

echarts.use([AriaComponent]);
```


### 内置的 geoJSON

`v5` 移除了内置的 geoJSON（原先在 `echarts/map` 文件夹下）。这些 geoJSON 文件本就一直来源于第三方。如果使用者仍然需要他们，可以去从老版本中得到，或者自己准备它们。


### 老 IE8

`v5` 不再支持老 IE8 。具体来说，之前的 [VML 渲染器](https://github.com/ecomfe/zrender/tree/4.3.2/src/vml)（IE8 渲染所须）没有再取升级使它能运行在 `v5` 里。如果使用者确实有很强的需求，那么欢迎提 pull request 来升级 VML 渲染器，或者做个第三方 VML 渲染器，以为 `v5.0.1` 开始已经可以注册独立的渲染器了。


### ECharts Option

#### 视觉样式设置的优先级改变

`v5` 对调了 [visualMap 组件](option.html#visualMap) 和 [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle) 的视觉样式优先级。

具体来说，`v4` 中，[visualMap 组件](option.html#visualMap) 中生成的视觉样式（如，颜色、图形类型、图形尺寸等）的优先级，比开发者在 [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle) 中设置的样式的优先级高，也就是说如果他们同时设置的话，前者会生效而后者不会生效。这带来了些麻烦：假如使用者在使用 [visualMap 组件](option.html#visualMap) 时，又想针对某个数据项对应的图形，设置 [itemStyle](option.html#series-scatter.itemStyle) 样式，则做不到。`v5` 中于是提高了 [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle) 的优先级，使他们能生效。

在绝大多处情况下，这个变化并不会带来什么影响。但是为保险起见，使用者在升级 `v4` 到 `v5` 时，还是可以检查下，是否有同时使用 [visualMap](option.html#visualMap) 和 [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle) 的情况。


#### 富文本的 `padding`

`v5` 修正了 `v4` 里 [rich.?.padding](option.html#series-scatter.label.rich.<style_name>.padding) 的含义问题。`v4` 里，例如 `rich.?.padding: [11, 22, 33, 44]` 表示 `padding-top` 是 `33` 且 `padding-bottom` 是 `11`。这是个有问题的实现，因为它和 CSS 的习惯做法不符合。`v5` 改为了符合习惯的解释方式，`rich.?.padding: [11, 22, 33, 44]` 表示  `padding-top` 是 `11` 且 `padding-bottom` 是 `33`。

如果使用者有在使用 [rich.?.padding](option.html#series-scatter.label.rich.<style_name>.padding)，需要修改他们。


## ECharts 的相关扩展

[这个列表](https://echarts.apache.org/en/download-extension.html) 有 ECharts 的诸多扩展，但也不限于这个列表。如果想要升级到 `v5` ，有些扩展需要使用者升级扩展本身的版本，有些不用。已知需要使用者升级版本的扩展，见下表：

+ [echarts-gl](https://github.com/ecomfe/echarts-gl)
+ [echarts-wordcloud](https://github.com/ecomfe/echarts-wordcloud)
+ [echarts-liquidfill](https://github.com/ecomfe/echarts-liquidfill)

这个列表会持续更新。



## 不再推荐使用的 API

一些 API（包括函数接口和 echarts option）在 `v5` 中不再推荐使用。当然，使用者**仍然可以用他们**，只会在 dev 模式下，在 console 中打印一些 warning，其他并不会有什么影响。但是从长远维护考虑，如果使用者有时间的话，还是推荐升级成新的替代 API。

这些不再推荐使用的 API 和他们的替代品，列表如下：

+ 图形元素 transform 相关的属性被改变了：
    + 变更点：
        + `position: [number, number]` 改为 `x: number` / `y: number`。
        + `scale: [number, number]` 改为 `scaleX: number` / `scaleY: number`。
        + `origin: [number, number]` 改为 `originX: number` / `originY: number`。
    + `position`、`scale` 和 `origin` 仍然支持，但已不推荐使用。
    + 它影响到这些地方：
        + 在`graphic`组件中：每个元素的声明。
        + 在 `custom series` 中：`renderItem` 返回的每个元素的声明。
        + 直接使用 zrender 图形元素时。
+ Text 相关的属性被改变：
    + 变更点：
        + 图形元素附带的文本的声明方式被改变：
            + 除了 `Text` 元素之外，其他元素中的属性 `style.text` 都不推荐使用了。取而代之的是新属性 `textContent` 和 `textConfig`，他们能带来更丰富的功能。
            + 其中，下面左边部分的这些属性已不推荐使用或废弃。请使用下面的右边部分的属性：
                + textPosition => textConfig.position
                + textOffset => textConfig.offset
                + textRotation => textConfig.rotation
                + textDistance => textConfig.distance
        + 下面左边部分的属性在 `style` 和 `style.rich.?` 中已不推荐使用或废弃。请使用下面右边的属性：
            + textFill => fill
            + textStroke => stroke
            + textFont => font
            + textStrokeWidth => lineWidth
            + textAlign => align
            + textVerticalAlign => verticalAlign
            + textLineHeight =>
            + textWidth => width
            + textHeight => hight
            + textBackgroundColor => backgroundColor
            + textPadding => padding
            + textBorderColor => borderColor
            + textBorderWidth => borderWidth
            + textBorderRadius => borderRadius
            + textBoxShadowColor => shadowColor
            + textBoxShadowBlur => shadowBlur
            + textBoxShadowOffsetX => shadowOffsetX
            + textBoxShadowOffsetY => shadowOffsetY
        + 注：这些属性并没有变化：
            + textShadowColor
            + textShadowBlur
            + textShadowOffsetX
            + textShadowOffsetY
    + 它影响到这些地方：
        + 在 `graphic` 组件中：每个元素的声明。（原来的写法仍兼容，但在一些很复杂的情况下，可能效果不完全一致。）
        + 在自定义系列（`custom series`）中：`renderItem` 返回中的每个元素的声明。（原来的写法仍兼容，但在一些很复杂的情况下，可能效果不完全一致。）
        + 直接使用 zrender API 创建图形元素。（不再兼容，原写法被废弃。）
+ 图表实例上的 API：
    + `chart.one(...)` 已不推荐使用。
+ `label`。
    + 属性 `color`、`textBorderColor`、`backgroundColor`、`borderColor` 中，值 `auto` 已不推荐使用，而推荐使用 `'inherit'` 代替。
+ `hoverAnimation`:
    + 选项 `series.hoverAnimation` 已不推荐使用，使用 `series.emphasis.scale` 代替之。
+ 折线图（`line series`）：
    + 选项 `series.clipOverflow` 已不推荐使用，使用 `series.clip` 代替之。
+ 自定义系列（`custom series`）。
    + 在 `renderItem` 中，`api.style(...)` 和 `api.styleEmphasis(...)` 已不推荐使用。因为这两个接口其实并不真正必要，也很难保证向后兼容。用户可以通过 `api.visual(...)` 获取系统自动分配的视觉信息。
+ 旭日图（`sunburst`）：
    + 动作类型 `highlight` 已被弃用，请使用 `sunburstHighlight` 代替。
    + 动作类型 `downplay` 已被弃用，请使用 `sunburstUnhighlight` 代替。
    + 选项 `series.downplay` 已被弃用，请使用 `series.blur` 代替。
    + 选项 `series.highlightPolicy` 已不适用，请使用 `series.emphasis.focus` 代替。
+ 饼图（`pie`）：
    + 下面左边部分的 action 名已经不推荐使用。请使用右边的 action 名。
        + `pieToggleSelect` => `toggleSelect`。
        + `pieSelect` => `select`。
        + `pieUnSelect` => `unselect`。
    + 下面左边部分的事件名已经不推荐使用。请使用右边的事件名。
        + `pieselectchanged` => `selectchanged`。
        + `pieselected` => `selected`。
        + `pieunselected` => `unselected`。
    + 选项 `series.label.margin` 已经不推荐使用。使用 `series.label.edgeDistance` 代替。
    + 选项 `series.clockWise` 已经不推荐使用。使用 `series.clockwise` 代替。
    + 选项 `series.hoverOffset` 已经不推荐使用。使用 `series.emphasis.scaleSize` 代替。
+ 地图（`map series`）：
    + 下文左边部分的 action 名已经不推荐使用。请使用右边的 action 名。
        + `mapToggleSelect` => `toggleSelect`。
        + `mapSelect` => `select`。
        + `mapUnSelect` => `unselect`。
    + 下面左边部分的事件名已经不推荐使用。请使用右边的事件名。
        + `mapselectchanged` => `selectchanged`。
        + `mapselected` => `selected`。
        + `mapunselected` => `unselected`。
    + 选项 `series.mapType` 已经不推荐使用。使用 `series.map` 代替。
    + 选项 `series.mapLocation` 已经不推荐使用。
+ 关系图（`graph series`）：
    + 选项 `series.focusNodeAdjacency` 已经不推荐使用。使用 `series.emphasis: { focus: 'adjacency'}` 代替。
+ 仪表盘（`gauge series`）：
    + 选项 `series.clockWise` 已经不推荐使用。使用 `series.clockwise` 代替。
    + 选项 `series.hoverOffset` 已经不推荐使用。使用 `series.emphasis.scaleSize` 代替。
+ `dataZoom` 组件：
    + 选项 `dataZoom.handleIcon` 如果使用 `SVGPath`，需要前缀 `path://`。
+ 雷达图（`radar`）：
    + 选项 `radar.name` 已经不推荐使用。使用 `radar.axisName` 代替。
    + 选项 `radar.nameGap` 已经不推荐使用。使用 `radar.axisNameGap` 代替。
+ Parse and format：
    + `echarts.format.formatTime` 已经不推荐使用。使用 `echarts.time.format` 代替。
    + `echarts.number.parseDate` 已经不推荐使用。使用 `echarts.time.parse` 代替。
    + `echarts.format.getTextRect` 已经不推荐使用。

