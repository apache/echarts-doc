{{ target: upgrade-guide-v5 }}

# ECharts 5 升级指南


本指南面向那些希望将 echarts 4.x（以下简称 `v4`）升级到 echarts 5.x（以下简称 `v5`）的用户。大家可以在 [ECharts 5 新特性](tutorial.html#ECharts%205%20新特性) 中了解这次`v5`带来了哪些值得升级的新特性。在绝大多数情况下，开发者用不着为这个升级做什么额外的事，因为 echarts 一直尽可能地保持 API 的稳定和向后兼容。但是，`v5` 仍然带来了一些非兼容改动，需要特别关注。此外，在一些情况下，`v5` 提供了更好的 API 用来取代之前的 API，这些被取代的 API 将不再被推荐使用（当然，我们尽量兼容了这些改动）。我们会在这篇文档里尽量详尽得解释这些改动。

因为我们在 `v5.0.1` 增加了新的[按需引入接口](tutorial.html#%E5%9C%A8%E6%89%93%E5%8C%85%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)，所以本文档基于 `v5.0.1` 或者更高的版本。


## 非兼容性改变


#### 默认主题（theme）

首先是默认主题的改动，`v5` 在配色等主题设计上做了很多的优化来达到更好的视觉效果。如果大家依旧想保留旧版本的颜色，可以手动声明颜色，如下：
```ts
chart.setOption({
    color: [
        '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
        '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
    ],
    // ...
});
```
或者，做一个简单的 `v4` 主题：
```ts
var themeEC4 = {
    color: [
        '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
        '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
    ]
};
var chart = echarts.init(dom, themeEC4);
chart.setOption(/* ... */);
```


#### 引用 ECharts

##### 去除 default exports 的支持

如果使用者在 `v4` 中这样引用了 echarts：
```ts
import echarts from 'echarts';
// 或者按需引入
import echarts from 'echarts/lib/echarts';
```

这两种方式，`v5` 中不再支持了。

使用者需要如下更改代码解决这个问题：
```ts
import * as echarts from 'echarts';
// 按需引入
import * as echarts from 'echarts/lib/echarts';
```


##### 按需引入

在 5.0.1 中，我们引入了新的[按需引入接口](tutorial.html#%E5%9C%A8%E6%89%93%E5%8C%85%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

```ts
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
// 注意，新的接口中默认不再包含 Canvas 渲染器，需要显示引入，如果需要使用 SVG 渲染模式则使用 SVGRenderer
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([BarChart, GridComponent, CanvasRenderer]);
```

如果之前是使用`import 'echarts/lib/chart/bar'`引入，新的接口对应的是`import {BarChart} from 'echarts/charts'`;

为了方便大家了解自己的配置项需要引入哪些模块，我们新的示例编辑页面添加了生成按需引入代码的功能，大家可以在示例编辑页的`完整代码`标签下选中按需引入后查看需要引入的模块以及相关代码。

在大部分情况下，我们都推荐大家尽可能用这套新的按需引入接口，它可以最大程度的利用打包工具 tree-shaking 的能力，并且可以有效解决命名空间冲突的问题而且防止了内部结构的暴露。如果你依旧在使用 CommonJS 的模块写法，之前的方式我们也依旧是支持的：

```ts
const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/grid');
```

其次，因为我们的源代码已使用 TypeScript 重写，`v5` 将不再支持从 `echarts/src` 引用文件，需要改为从`echarts/lib`引入。


##### 依赖调整

> 注意：该部分只针对为了保证较小的打包体积而是用按需引入接口的开发者，如果是全量引入的不需要关注

为了保证 tree-shaking 后的体积足够小，我们去除了一些之前会默认被打包进来的依赖。比如前面提到的在使用新的按需引入接口的时候，`CanvasRenderer`将不再被默认引入，这样可以保证只需要使用 SVG 渲染模式的时候不会把不需要的 Canvas 渲染代码也一起打包进来，除此之外，还有下面这些依赖的改动：

+ 在使用折线图，柱状图中不再默认引入直角坐标系组件，因此之前使用下面的引入方式
```ts
const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/line');
```
需要再单独引入`grid`组件
```ts
require('echarts/lib/component/grid');
```

参考 issue：[#14080](https://github.com/apache/echarts/issues/14080), [#13764](https://github.com/apache/echarts/issues/13764)

+ 默认不再引入`aria`组件，如果需要的话可以手动引入。
```ts
import { AriaComponent } from 'echarts/components';
echarts.use(AriaComponent);
```
或者：
```ts
require('echarts/lib/component/aria');
```

#### 去除内置的 geoJSON

`v5` 移除了内置的 geoJSON（原先在 `echarts/map` 文件夹下）。这些 geoJSON 文件本就一直来源于第三方。如果使用者仍然需要他们，可以去从老版本中得到，或者自己寻找更合适的数据然后通过 registerMap 接口注册到 ECharts 中。

#### 浏览器兼容性

`v5` 不再支持 IE8 浏览器。我们不再继续维护和升级之前的 [VML 渲染器](https://github.com/ecomfe/zrender/tree/4.3.2/src/vml) 来着实现 IE8 的兼容。如果使用者确实有很强的需求，那么欢迎提 pull request 来升级 VML 渲染器，或者单独维护一个第三方 VML 渲染器，我们从 `v5.0.1` 开始支持注册独立的渲染器了。

#### ECharts 配置项调整

##### 视觉样式设置的优先级改变

`v5` 对调了 [visualMap 组件](option.html#visualMap) 和 [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle) 的视觉样式优先级。

具体来说，`v4` 中，[visualMap 组件](option.html#visualMap) 中生成的视觉样式（如，颜色、图形类型、图形尺寸等）的优先级，比开发者在 [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle) 中设置的样式的优先级高，也就是说如果他们同时设置的话，前者会生效而后者不会生效。这带来了些麻烦：假如使用者在使用 [visualMap 组件](option.html#visualMap) 时，又想针对某个数据项对应的图形，设置 [itemStyle](option.html#series-scatter.itemStyle) 样式，则做不到。`v5` 中于是提高了 [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle) 的优先级，使他们能生效。

在绝大多处情况下，这个变化并不会带来什么影响。但是为保险起见，使用者在升级 `v4` 到 `v5` 时，还是可以检查下，是否有同时使用 [visualMap](option.html#visualMap) 和 [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle) 的情况。


##### 富文本的 `padding`

`v5` 调整了 [rich.?.padding](option.html#series-scatter.label.rich.<style_name>.padding) 的格式使其更符合 CSS 的规范。`v4` 里，例如 `rich.?.padding: [11, 22, 33, 44]` 表示 `padding-top` 是 `33` 且 `padding-bottom` 是 `11`。在 `v5` 中调整了上下的位置，`rich.?.padding: [11, 22, 33, 44]` 表示  `padding-top` 是 `11` 且 `padding-bottom` 是 `33`。

如果使用者有在使用 [rich.?.padding](option.html#series-scatter.label.rich.<style_name>.padding)，需要注意调整下这个顺序。

## ECharts 的相关扩展

如果想要升级到 `v5` ，下面这些扩展需要升级到最新的版本实现兼容。

+ [echarts-gl](https://github.com/ecomfe/echarts-gl)
+ [echarts-wordcloud](https://github.com/ecomfe/echarts-wordcloud)
+ [echarts-liquidfill](https://github.com/ecomfe/echarts-liquidfill)



## 不再推荐使用的 API

一些 API（包括接口调用，事件监听和配置项）在 `v5` 中不再推荐使用。当然，使用者仍然可以用他们，只是会在 dev 模式下，在 console 中打印一些 warning，并不会影响功能。但是从长远维护考虑，我们还是推荐升级成新的 API。

下面是不再推荐使用的 API 以及推荐的新 API：

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

