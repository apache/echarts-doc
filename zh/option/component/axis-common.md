
{{ target: partial-axis-common-axis-line }}

#${prefix} silent(boolean) = false

坐标轴是否是静态无法交互。

#${prefix} triggerEvent(boolean) = false

坐标轴的标签是否响应和触发鼠标事件，默认不响应。

事件参数如下：

```ts
{
    // 组件类型，xAxis, yAxis, radiusAxis, angleAxis
    // 对应组件类型都会有一个属性表示组件的 index，例如 xAxis 就是 xAxisIndex
    componentType: string,
    // 未格式化过的刻度值, 点击刻度标签有效
    value: '',
    // 坐标轴名称, 点击坐标轴名称有效
    name: ''
}
```

{{ if: ${hasJitter|default(false)} }}
#${prefix} jitter(number) = 0

{{ use: partial-version(version = "6.0.0") }}

用于在散点图中防止数据点重叠，通过在数据点的位置上添加少量随机噪音来实现，可以帮助更清晰地可视化数据的分布。仅适用于散点图，且仅在单轴或笛卡尔坐标系下的类目轴中有效。单位是像素。

~[800x500](${galleryViewPath}scatter-jitter&edit=1&reset=1)

#${prefix} jitterOverlap(boolean) = true

{{ use: partial-version(version = "6.0.0") }}

是否允许 [jitter](~${componentType}.jitter) 重叠。如果设为 `false`，将尽可能避免重叠，极端情况下如果重叠是无法避免的，则也可能出现重叠。以下是设为 `false` 的效果：

~[800x500](${galleryViewPath}doc-example/scatter-jitter-avoidOverlap&edit=1&reset=1)

#${prefix} jitterMargin(number) = 2

{{ use: partial-version(version = "6.0.0") }}

在设置了 [jitter](~${componentType}.jitter) 且 [jitterOverlap](~${componentType}.jitterOverlap) 为 `false` 的情况下，两个数据点之间的最小距离。
{{ /if }}



{{ if: ${hasBreakAxis|default(false)} }}
#${prefix} breaks(Array)

{{ use: partial-version(version = "6.0.0") }}

断轴的截断数据，每一个子元素表示一段截断的空间。

~[800x400](${galleryViewPath}intraday-breaks-2&edit=1&reset=1)
~[800x400](${galleryViewPath}intraday-breaks-1&edit=1&reset=1)
~[800x400](${galleryViewPath}bar-breaks-brush&edit=1&reset=1)

**其他例子：** [bar-breaks-simple](${galleryEditorPath}bar-breaks-simple&edit=1&reset=1), [line-fisheye-lens](${galleryEditorPath}line-fisheye-lens&edit=1&reset=1)


> 断轴是一种通过在坐标轴上截断部分区域，从而压缩图表中非关键数据段的展示空间的技术。其核心目的是：
>
> + ​**​突出差异**​​：当数据间存在极端差异时（如一个值远大于其他值），避免大数值柱子压倒性占据空间，导致小数值差异难以辨认。
> + **​​节省空间​**​：减少因极值导致的空白区域，使图表更紧凑。
>
> 请注意仅在必要的时候使用断轴，以免给用户带来理解上的误导。当使用断轴时，通常应当明确示意截断部分和对应的数值。
>
> 断轴无法在类目轴（[type](~${componentType}.type): `'category'`）中使用。

如果 ECharts 的 `import` 方式是 [只 `import` 所需要的组件](${handbookPath}basics/import)，断轴功能需要被手动 `import` 和注册。例如，
```ts
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';

// import 断轴功能
import { AxisBreak } from 'echarts/features';

import { CanvasRenderer } from 'echarts/renderers';

// 注册
echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  AxisBreak,
  CanvasRenderer
]);

var myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
  // ...
});
```

##${prefix} start(string|number|Date)

{{ use: partial-version(version = "6.0.0") }}

开始截断的值。它是业务数据（`series.data`）所定义的值域中的某个值，而非像素值。

{{ use: partial-scale-data-value-desc(
    componentType = ${componentType},
    notSupportCategory = true
) }}

{{ use: partial-axis-break-identifier-desc(
    componentType = ${componentType}
)}}

##${prefix} end(string|number|Date)

{{ use: partial-version(version = "6.0.0") }}

结束截断的值。它是业务数据（`series.data`）所定义的值域中的某个值，而非像素值。

{{ use: partial-scale-data-value-desc(
    componentType = ${componentType},
    notSupportCategory = true
) }}

{{ use: partial-axis-break-identifier-desc(
    componentType = ${componentType}
)}}

##${prefix} gap(number|string)

{{ use: partial-version(version = "6.0.0") }}

决定了断轴截断区域最终展示的尺寸（高或者宽）。其值可为：

+ 百分比（字符串）：

    表示相对于坐标轴的比例。例如 `'5%'`，表示断轴截断区域最终显示的尺寸总为坐标轴尺寸的 `'5%'`。使用百分比能保证断轴截断区域的像素尺寸稳定，不随着 [${componentType}.min](~${componentType}.min)、[${componentType}.max](~${componentType}.max)、[dataZoom](~dataZoom) 变化而变化，因此目前大多数场景都适合使用百分比。
+ 绝对值：

    其单位和 [start](~${componentType}.breaks.start) 与 [end](~${componentType}.breaks.end) 相同，是业务数据（`series.data`）所定义的值域中的某个值，而非像素值。它表示把 `[start, end]` 这个区间映射（替换）为 `[start, start + gap]`。因此，设为绝对值时，断轴截断区域的像素尺寸会随着 [${componentType}.min](~${componentType}.min)、[${componentType}.max](~${componentType}.max)、[dataZoom](~dataZoom) 变化而变化。

**注意：**在一个 [${componentType}.breaks](~${componentType}.breaks) 数组中，`gap` 只允许全使用百分比，或者全使用绝对值，不允许混合使用，否者效果可能不符合预期。

{{ use: partial-axis-break-identifier-desc(
    componentType = ${componentType}
)}}

##${prefix} isExpanded(boolean) = false

{{ use: partial-version(version = "6.0.0") }}

该截断区域是否已展开，默认为 `false`。

{{ use: partial-axis-break-identifier-desc(
    componentType = ${componentType}
)}}

#${prefix} breakArea

{{ use: partial-version(version = "6.0.0") }}

断轴截断区域的样式。

断轴的基本介绍参见 [${componentType}.breaks](~${componentType}breaks)。

##${prefix} show(boolean) = true

{{ use: partial-version(version = "6.0.0") }}

是否显示截断区域。

##${prefix} itemStyle

{{ use: partial-version(version = "6.0.0") }}

截断区域样式。

{{ use: partial-item-style(
    prefix = '###',
    defaultColor = "#fff",
    defaultBorderColor = "'#b7b9be'",
    defaultBorderWidth = 1,
    defaultType = "[3, 3]",
    defaultOpacity = 0.6
) }}

##${prefix} zigzagAmplitude(number) = 4

{{ use: partial-version(version = "6.0.0") }}

锯齿的振幅（垂直于坐标轴方向上）大小。这个大小在不同锯齿上总是相同的。单位为像素。如果设为 `0` 则锯齿退化成一条直线。

##${prefix} zigzagMinSpan(number) = 4

{{ use: partial-version(version = "6.0.0") }}

每个锯齿跨度的最小值。单位为像素。

> 每个锯齿跨度大小是 `zigzagMinSpan` 和 `zigzagMaxSpan` 之间的随机数。通过随机来模拟纸片撕开的效果。

##${prefix} zigzagMaxSpan(number) = 20

{{ use: partial-version(version = "6.0.0") }}

每个锯齿跨度的最大值。单位为像素。

> 每个锯齿跨度大小是 `zigzagMinSpan` 和 `zigzagMaxSpan` 之间的随机数。通过随机来模拟纸片撕开的效果。

##${prefix} zigzagZ(number) = 100

{{ use: partial-version(version = "6.0.0") }}

锯齿的 `z` 值。控制图形的前后顺序。`z` 值小的图形会被 `z` 值大的图形覆盖。

##${prefix} expandOnClick(boolean) = true

{{ use: partial-version(version = "6.0.0") }}

点击断轴截断区域是否展开截断区域。

#${prefix} breakLabelLayout(Object)

{{ use: partial-version(version = "6.0.0") }}

断轴文字布局。

断轴的基本介绍参见 [${componentType}.breaks](~${componentType}breaks)。


##${prefix} moveOverlap(string|boolean) = 'auto'

{{ use: partial-version(version = "6.0.0") }}

当断轴文字重叠时，是否移动文字来避免重叠。

`'auto'` 或 `true` 表示重叠时移动文字来避免重叠；`false` 表示不移动。
{{ /if }}



#${prefix} axisLine(Object)

坐标轴轴线相关设置。

##${prefix} show(boolean) = ${defaultShow|default(true)}

<ExampleUIControlBoolean default="true" />

是否显示坐标轴轴线。

{{ if: ${componentType} == 'xAxis' || ${componentType} == 'yAxis' }}
> 从 `v5.0.0` 开始，数值轴 (`type: 'value'`) 默认不显示轴线，需要显式配置。
{{ /if }}

{{ if: ${componentType} == 'xAxis' || ${componentType} == 'yAxis' }}
##${prefix} onZero(boolean) = true

<ExampleUIControlBoolean default="true" />

X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效。

##${prefix} onZeroAxisIndex(number)

当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上。
{{ /if }}

##${prefix} symbol(string|Array) = 'none'

<ExampleUIControlIcon default="none" />

轴线两边的箭头。可以是字符串，表示两端使用同样的箭头；或者长度为 2 的字符串数组，分别表示两端的箭头。默认不显示箭头，即 `'none'`。两端都显示箭头可以设置为 `'arrow'`，只在末端显示箭头可以设置为 `['none', 'arrow']`。

##${prefix} symbolSize(Array) = [10, 15]

<ExampleUIControlVector default="10,15" />

轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）。

##${prefix} symbolOffset(Array|number) = [0, 0]

<ExampleUIControlVector default="0,0" />

轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移。

##${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = '##' + ${prefix},
    defaultColor = "'#333'",
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "坐标轴线"
) }}



{{ target: partial-axis-common-axis-label }}

#${prefix} axisLabel(Object)

坐标轴刻度标签的相关设置。

{{ if: !${hideShow} }}
##${prefix} show(boolean) = ${defaultShow|default(true)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

是否显示刻度标签。
{{ /if }}

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'

<ExampleUIControlNumber min="0" step="1" />

{{ use: partial-axis-interval(
    name = "坐标轴刻度标签",
    isAxisLabel = true,
    componentType = ${componentType}
) }}
{{ /if }}

{{ if: ${hasInside|default(true)} }}
##${prefix} inside(boolean) = false

<ExampleUIControlBoolean />

刻度标签是否朝内，默认朝外。
{{ /if }}

{{ if: ${componentType} !== 'angleAxis' }}
##${prefix} rotate(number) = 0

<ExampleUIControlAngle min="-90" max="90" step="1" />

刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。

旋转的角度从 -90 度到 90 度。
{{ /if }}

##${prefix} margin(number) = 8

<ExampleUIControlNumber default="8" step="0.5" />

刻度标签与轴线之间的距离。

##${prefix} formatter(string|Function)

{{ use: axis-common-formatter-desc(
    componentType = ${componentType},
    supportAxisBreak = true
) }}

##${prefix} showMinLabel(boolean)

<ExampleUIControlBoolean />

是否显示最小 tick 的 label。可取值 `true`, `false`, `null`。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。

##${prefix} showMaxLabel(boolean)

<ExampleUIControlBoolean />

是否显示最大 tick 的 label。可取值 `true`, `false`, `null`。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）。

{{ if: ${componentType} === 'xAxis' }}

##${prefix} alignMinLabel(string) = null

{{ use: partial-version(version = '5.5.0') }}

最小的坐标刻度标签的对齐方式。如果设置为 `null`，则和其他标签一致。参见 [align](~${componentType}.axisLabel.align)。

可选：
+ `'left'`
+ `'center'`
+ `'right'`
+ `null` (default)

##${prefix} alignMaxLabel(string) = null

{{ use: partial-version(version = '5.5.0') }}

最大的坐标刻度标签的对齐方式。如果设置为 `null`，则和其他标签一致。参见 [align](~${componentType}.axisLabel.align)。

可选：
+ `'left'`
+ `'center'`
+ `'right'`
+ `null` (default)

{{ /if }}

{{ if: ${componentType} === 'yAxis' }}

##${prefix} verticalAlignMinLabel(string) = null

{{ use: partial-version(version = '5.5.0') }}

最小的坐标刻度标签的对齐方式。如果设置为 `null`，则和其他标签一致。参见 [align](~${componentType}.axisLabel.verticalAlign)。

可选：
+ `'top'`
+ `'middle'`
+ `'bottom'`
+ `null` (default)

##${prefix} verticalAlignMaxLabel(string) = null

{{ use: partial-version(version = '5.5.0') }}

最大的坐标刻度标签的对齐方式。如果设置为 `null`，则和其他标签一致。参见 [align](~${componentType}.axisLabel.verticalAlign)。

可选：
+ `'top'`
+ `'middle'`
+ `'bottom'`
+ `null` (default)

{{ /if }}

##${prefix} hideOverlap(boolean)

<ExampleUIControlBoolean />

{{ use: partial-version(
    version = "5.2.0"
) }}

是否隐藏重叠的标签。

##${prefix} customValues(Array)

{{ use: partial-version(
    version = "5.5.1"
) }}

自定义要显示的标签位置。例如：

```ts
axisLabel: {
    customValues: [0, 4, 7, 8, 9]
}
```

![600xauto](~axis-tick-label-custom-values.png)


{{ use: partial-text-style(
    prefix = '#' + ${prefix},
    defaultColor = "'#333'"
) }}

<!-- Overwrite color -->

##${prefix} color(Color|Function)

<ExampleUIControlColor />

刻度标签文字的颜色，默认取 [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color)。支持回调函数，格式如下

```ts
(val: string) => Color
```

参数是标签的文本，返回颜色值，如下示例：

```ts
textStyle: {
    color: function (value, index) {
        return value >= 0 ? 'green' : 'red';
    }
}
```



{{ target: partial-axis-common-axis-tick }}

#${prefix} axisTick(Object)

坐标轴刻度相关设置。

##${prefix} show(boolean) = ${defaultShow|default(true)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

是否显示坐标轴刻度。

{{ if: ${componentType} == 'xAxis' || ${componentType} == 'yAxis' }}
> 从 `v5.0.0` 开始，数值轴 (`type: 'value'`) 默认不显示轴刻度，需要显式配置。
{{ /if }}

{{ if: ${hasAlignWithLabel|default(true)} }}
##${prefix} alignWithLabel(boolean) = false

<ExampleUIControlBoolean default="false" />

类目轴中在 `boundaryGap` 为 `true` 的时候有效，可以保证刻度线和标签对齐。如下图：

![600xauto](~axis-align-with-label.png)
{{ /if }}

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'

<ExampleUIControlNumber min="0" step="1" />

{{ use: partial-axis-interval(
    name = "坐标轴刻度",
    componentType = ${componentType}
) }}
{{ /if }}

{{ if: ${hasInside|default(true)} }}
##${prefix} inside(boolean) = false

<ExampleUIControlBoolean />

坐标轴刻度是否朝内，默认朝外。
{{ /if }}

##${prefix} length(number) = 5

<ExampleUIControlNumber min="0" step="0.5" default="5" />

坐标轴刻度的长度。

##${prefix} lineStyle(Object)

刻度线的样式设置。

{{ use: partial-line-style(
    prefix = '##' + ${prefix},
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "坐标轴刻度"
) }}

<!-- Overwrite color -->

###${prefix} color(Color)

刻度线的颜色，默认取 [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color)。

##${prefix} customValues(Array)

{{ use: partial-version(
    version = "5.5.1"
) }}

自定义要显示的坐标轴刻度位置。例如：

```ts
axisTick: {
    alignWithLabel: true,
    customValues: [0, 0.5, 1, 1.5, 2, 8, 9]
}
```

![600xauto](~axis-tick-label-custom-values.png)


{{ target: partial-axis-common-minor-tick }}

#${prefix} minorTick(Object)

{{ use: partial-version(
    version = "4.6.0"
) }}

坐标轴次刻度线相关设置。

注意：次刻度线无法在类目轴（[type](~${componentType}.type): `'category'`）中使用。

示例：

1) 函数绘图中使用次刻度线
~[600x350](${galleryViewPath}line-function&edit=1&reset=1)

2) 在对数轴中使用次刻度线
~[600x350](${galleryViewPath}line-log&edit=1&reset=1)

##${prefix} show(boolean) = ${defaultShow|default(false)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

是否显示次刻度线。

##${prefix} splitNumber(number) = 5

<ExampleUIControlNumber min="1" step="1" default="5" />

次刻度线分割数，默认会分割成 5 段

##${prefix} length(number) = 3

<ExampleUIControlNumber min="0" step="0.5" default="3" />

次刻度线的长度。

##${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = '##' + ${prefix},
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "次刻度线"
) }}

<!-- Overwrite color -->

###${prefix} color(Color)

<ExampleUIControlColor />

刻度线的颜色，默认取 [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color)。



{{ target: partial-axis-common-split-line }}

#${prefix} splitLine(Object)

坐标轴在 [grid](~grid) 区域中的分隔线。

##${prefix} show(boolean) = ${defaultShow|default(true)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

是否显示分隔线。默认数值轴显示，类目轴不显示。

##${prefix} showMinLine(boolean) = true

<ExampleUIControlBoolean />

{{ use: partial-version(
    version = "5.6.0"
) }}

是否显示最小 tick 的分隔线。默认为 `true`。

##${prefix} showMaxLine(boolean) = true

<ExampleUIControlBoolean />

{{ use: partial-version(
    version = "5.6.0"
) }}

是否显示最大 tick 的分隔线。默认为 `true`。

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'

<ExampleUIControlNumber min="0" step="1" />

{{ use: partial-axis-interval(
    name = "坐标轴分隔线",
    componentType = ${componentType}
) }}
{{ /if }}

##${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = '##' + ${prefix},
    defaultColor = "'#333'",
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "分隔线"
) }}

<!-- overwrite color -->

###${prefix} color(Array|string) = ['#ccc']

<ExampleUIControlColor />

分隔线颜色，可以设置成单个颜色。

也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色。

示例
```
splitLine: {
    lineStyle: {
        // 使用深浅的间隔色
        color: ['#aaa', '#ddd']
    }
}
```



{{ target: partial-axis-common-minor-split-line }}

#${prefix} minorSplitLine(Object)

{{ use: partial-version(
    version = "4.6.0"
) }}

坐标轴在 [grid](~grid) 区域中的次分隔线。次分割线会对齐次刻度线 [minorTick](~${componentType}.minorTick)

##${prefix} show(boolean) = ${defaultShow|default(false)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

是否显示次分隔线。默认不显示。

##${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = '##' + ${prefix},
    defaultColor = "'#eee'",
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "次分隔线"
) }}



{{ target: partial-axis-common-split-area }}

#${prefix} splitArea(Object)

坐标轴在 [grid](~grid) 区域中的分隔区域，默认不显示。

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'

<ExampleUIControlNumber min="0" step="1" />

{{ use: partial-axis-interval(
    name = "坐标轴分隔区域",
    componentType = ${componentType}
) }}
{{ /if }}

##${prefix} show(boolean) = ${defaultShow|default(false)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

是否显示分隔区域。

##${prefix} areaStyle(Object)

分隔区域的样式设置。

###${prefix} color(Array) = ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']

分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。

{{ use: partial-style-shadow-opacity(
    prefix = '##' + ${prefix}
) }}



{{ target: partial-axis-type-content }}

坐标轴类型。

可选：
+ `'value'`
    数值轴，适用于连续数据。

+ `'category'`
    类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 [series.data](~series.data) 或 [dataset.source](~dataset.source) 中取{{ if: ${componentType} }}，或者可通过 [${componentType}.data](~${componentType}.data) 设置类目数据{{ /if }}。

+ `'time'`
    时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。

+ `'log'`
    对数轴。适用于对数数据。对数轴下的堆积柱状图或堆积折线图可能带来很大的视觉误差，并且在一定情况下可能存在非预期效果，应避免使用。


{{ target: axis-common }}

#${prefix} type(string) = ${axisTypeDefault|default('value')}

{{ use: partial-axis-type-content(
    componentType = ${componentType}
) }}

{{ if: ${componentType} !== 'angleAxis' }}
#${prefix} name(string)

<ExampleUIControlText />

坐标轴名称。

#${prefix} nameLocation(string) = 'end'

<ExampleUIControlEnum options="start,middle,end" default="end" />

坐标轴名称显示位置。

**可选：**
+ `'start'`
+ `'middle'` 或者 `'center'`
+ `'end'`

#${prefix} nameTextStyle(Object)

坐标轴名称的文字样式。

{{ use: partial-text-style(
    prefix = '#' + ${prefix},
    name = "坐标轴名称"
) }}

<!-- Overwrite color -->

##${prefix} color(Color)

<ExampleUIControlColor />

坐标轴名称的颜色，默认取 [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color)。

#${prefix} nameGap(number) = 15

<ExampleUIControlNumber step="0.5" default="15" />

坐标轴名称与轴线之间的距离。

#${prefix} nameRotate(number) = null

<ExampleUIControlAngle min="-360" max="360" step="1" />

坐标轴名字旋转，角度值。

#${prefix} nameTruncate(Object)

坐标轴名字的截断。

##${prefix} maxWidth(number)

截断文本的最大长度，超过此长度会被截断。

##${prefix} ellipsis(string) = '...'

截断后文字末尾显示的内容。

{{ if: ${componentType} === 'xAxis' || ${componentType} === 'yAxis' }}
#${prefix} nameMoveOverlap(boolean) = true

<ExampleUIControlBoolean default="true"/>

{{ use: partial-version(version = "6.0.0") }}

当 axis name 和 axis label 重叠时，是否自动移动 axis name 来避免重叠。
{{ /if }}

#${prefix} inverse(boolean) = false

<ExampleUIControlBoolean />

是否是反向坐标轴。
{{ /if }}

#${prefix} boundaryGap(boolean|Array)

<ExampleUIControlBoolean />

坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。

类目轴中 `boundaryGap` 可以配置为 `true` 和 `false`。默认为 `true`，这时候[刻度](~${componentType}.axisTick)只是作为分隔线，标签和数据点都会在两个[刻度](~${componentType}.axisTick)之间的带(band)中间。

非类目轴，包括时间，数值，对数轴，`boundaryGap`是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 [min](~${componentType}.min) 和 [max](~${componentType}.max) 后无效。
**示例：**
```ts
boundaryGap: ['20%', '20%']
```

#${prefix} min(number|string|Function) = null

<ExampleUIControlNumber />

坐标轴刻度最小值。

可以设置成特殊值 `'dataMin'`，此时取数据在该轴上的最小值作为最小刻度。

不设置时会自动计算最小值保证坐标轴刻度的均匀分布。

{{ use: partial-scale-data-value-desc() }}

当设置成 `function` 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值。如：

```ts
min: function (value) {
    return value.min - 20;
}
```

其中 `value` 是一个包含 `min` 和 `max` 的对象，分别表示数据的最大最小值，这个函数可返回坐标轴的最小值，也可返回 `null`/`undefined` 来表示“自动计算最小值”（返回 `null`/`undefined` 从 `v4.8.0` 开始支持）。

#${prefix} max(number|string|Function) = null

<ExampleUIControlNumber />

坐标轴刻度最大值。

可以设置成特殊值 `'dataMax'`，此时取数据在该轴上的最大值作为最大刻度。

不设置时会自动计算最大值保证坐标轴刻度的均匀分布。

{{ use: partial-scale-data-value-desc() }}

当设置成 `function` 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值。如：

```ts
max: function (value) {
    return value.max - 20;
}
```

其中 `value` 是一个包含 `min` 和 `max` 的对象，分别表示数据的最大最小值，这个函数可返回坐标轴的最大值，也可返回 `null`/`undefined` 来表示“自动计算最大值”（返回 `null`/`undefined` 从 `v4.8.0` 开始支持）。

#${prefix} dataMin(number) = null

<ExampleUIControlNumber />

{{ use: partial-version(
    version = '6.0.1'
) }}

指定数据最小值，用于扩展坐标轴范围同时保持自动刻度优化。

只在数值轴、对数轴、时间轴中（[type](~${componentType}.type): 'value'、'log' 或 'time'）有效。

**工作原理：**

`dataMin` 的效果好似在数据中插入了一个虚拟的数据点，但这个点只参与坐标轴范围的计算，不会实际显示在图表中。

- 当 `dataMin` **小于**实际数据最小值时：坐标轴会扩展以包含这个值，使用一个不大于 `dataMin` 的整齐刻度值作为坐标轴最小值
- 当 `dataMin` **大于等于**实际数据最小值时：不产生任何影响，按原有逻辑计算

**适用场景：**

- 确保坐标轴包含某个参考值（如及格线、目标值等）
- 需要为数据留出一定的视觉空间

**与 [min](~${componentType}.min) 的区别：**
- `min` 会固定坐标轴最小值，禁用自动刻度优化
- `dataMin` 只影响坐标轴范围，仍保持自动刻度优化

#${prefix} dataMax(number) = null

<ExampleUIControlNumber />

{{ use: partial-version(
    version = '6.0.1'
) }}

指定数据最大值，用于扩展坐标轴范围同时保持自动刻度优化。

只在数值轴、对数轴、时间轴中（[type](~${componentType}.type): 'value'、'log' 或 'time'）有效。

**工作原理：**

`dataMax` 的效果好似在数据中插入了一个虚拟的数据点，但这个点只参与坐标轴范围的计算，不会实际显示在图表中。

- 当 `dataMax` **大于**实际数据最大值时：坐标轴会扩展以包含这个值，使用一个不小于 `dataMax` 的整齐刻度值作为坐标轴最大值
- 当 `dataMax` **小于等于**实际数据最大值时：不产生任何影响，按原有逻辑计算

**适用场景：**

- 确保坐标轴包含目标值或上限值
- 为数据预留视觉空间，使图表更美观
- 使多个相似的图表保持一致的坐标轴范围

**与 [max](~${componentType}.max) 的区别：**
- `max` 会固定坐标轴最大值，禁用自动刻度优化
- `dataMax` 只影响坐标轴范围，仍保持自动刻度优化


#${prefix} scale(boolean) = false

<ExampleUIControlBoolean />

只在数值轴中（[type](~${componentType}.type): 'value'）有效。

是否是脱离 0 值比例。设置成 `true` 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。

在设置 [min](~${componentType}.min) 和 [max](~${componentType}.max) 之后该配置项无效。

#${prefix} splitNumber(number) = 5

<ExampleUIControlNumber min="1" step="1" default="5" />

坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。

在类目轴中无效。

#${prefix} minInterval(number) = 0

<ExampleUIControlNumber />

自动计算的坐标轴最小间隔大小。

例如可以设置成`1`保证坐标轴分割刻度显示成整数。

```ts
{
    minInterval: 1
}
```

只在数值轴或时间轴中（[type](~${componentType}.type): 'value' 或 'time'）有效。

#${prefix} maxInterval(number)

<ExampleUIControlNumber />

自动计算的坐标轴最大间隔大小。

例如，在时间轴（（[type](~${componentType}.type): 'time'））可以设置成 `3600 * 24 * 1000` 保证坐标轴分割刻度最大为一天。

```ts
{
    maxInterval: 3600 * 24 * 1000
}
```

只在数值轴或时间轴中（[type](~${componentType}.type): 'value' 或 'time'）有效。

#${prefix} interval(number)

<ExampleUIControlNumber />

强制设置坐标轴分割间隔。

因为 [splitNumber](~${componentType}.splitNumber) 是预估的值，实际根据策略计算出来的刻度可能无法达到想要的效果，这时候可以使用 interval 配合 [min](~${componentType}.min)、[max](~${componentType}.max) 强制设定刻度划分，一般不建议使用。

无法在类目轴中使用。在时间轴（[type](~${componentType}.type): 'time'）中需要传时间戳，在对数轴（[type](~${componentType}.type): 'log'）中需要传指数值。

#${prefix} logBase(number) = 10

<ExampleUIControlNumber default="10" />

对数轴的底数，只在对数轴中（[type](~${componentType}.type): 'log'）有效。

#${prefix} startValue(number)

<ExampleUIControlNumber />

{{ use: partial-version(
    version = '5.5.1'
) }}

用于指定轴的起始值。

{{ use: partial-axis-common-axis-line(
    prefix = ${prefix},
    componentType = ${componentType},
    hasJitter = ${hasJitter},
    hasBreakAxis = ${hasBreakAxis}
) }}

{{ use: partial-axis-common-axis-tick(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ use: partial-axis-common-minor-tick(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ use: partial-axis-common-axis-label(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ if: ${hasSplitLineAndArea} }}
{{ use: partial-axis-common-split-line(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ use: partial-axis-common-minor-split-line(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ use: partial-axis-common-split-area(
    prefix = ${prefix},
    componentType = ${componentType}
) }}
{{ /if }}

#${prefix} data(Array)

类目数据，在类目轴（[type](~${componentType}.type): `'category'`）中有效。

如果没有设置 [type](~${componentType}.type)，但是设置了 `axis.data`，则认为 `type` 是 `'category'`。

如果设置了 [type](~${componentType}.type) 是 `'category'`，但没有设置 `axis.data`，则 `axis.data` 的内容会自动从 [series.data](~series.data) 中获取，这会比较方便。不过注意，`axis.data` 指明的是 `'category'` 轴的取值范围。如果不指定而是从 [series.data](~series.data) 中获取，那么只能获取到 [series.data](~series.data) 中出现的值。比如说，假如 [series.data](~series.data) 为空时，就什么也获取不到。

示例：

```ts
// 所有类目名称列表
data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
// 每一项也可以是具体的配置项，此时取配置项中的 `value` 为类目名
data: [{
    value: '周一',
    // 突出周一
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
}, '周二', '周三', '周四', '周五', '周六', '周日']
```

##${prefix} value(string)

单个类目名称。

##${prefix} textStyle(Object)

类目标签的文字样式。

{{ use: partial-text-style(
    prefix = '##' + ${prefix}
) }}

{{ if: !${noAxisPointer} }}
#${prefix} axisPointer(Object)

坐标轴指示器配置项。

{{ use: partial-axisPointer-common(
    prefix = "#" + ${prefix}
) }}
{{ /if }}

{{ use: partial-axis-tooltip(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ use: partial-animation(
    prefix = ${prefix}
) }}



{{ target: partial-axis-interval }}

${name}的显示间隔，在类目轴中有效。{{ if: !${isAxisLabel} }}默认同 [axisLabel.interval](~${componentType}.axisLabel.interval) 一样。{{ /if }}

默认会采用标签不重叠的策略间隔显示标签。

可以设置成 0 强制显示所有标签。

如果设置为 `1`，表示『隔一个标签显示一个标签』，如果值为 `2`，表示隔两个标签显示一个标签，以此类推。

可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
```ts
(index:number, value: string) => boolean
```
第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 `false`。



{{ target: axis-common-formatter-desc }}

{{ if: !${axisTypeProp} }}
{{ var: axisTypeProp = 'type' }}
{{ /if }}

刻度标签的内容格式器，支持字符串模板和回调函数两种形式。

示例:
```ts
// 使用字符串模板，模板变量为刻度默认标签 {value}
formatter: '{value} kg'
// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
formatter: function (value, index, extra?) {
    return value + 'kg';
}
```

---

<br>

{{ if: ${supportAxisBreak} }}
**如果使用了 [axis break](${componentType}.breaks)**

break 信息可以在参数 `extra` 里被获取：
```ts
type AxisLabelFormatterExtraBreakPart = {
    // 如果这个 label 是 break 的 start 或者 end
    break?: {
        type: 'start' | 'end';
        // 这是解析过的 `start`/`end` 值，必然为 number，且进行过排序和重叠
        // 去除，所以不一定和原先输入的 `start`/`end` 的类型和值相同。
        start: number;
        end: number;
    }
}
formatter = function (value, index, extra: AxisLabelFormatterExtraBreakPart) {
    if (extra && extra.break) {
        console.log(extra.break);
    }
    return value + 'kg';
}
```
注意：使用前需要判空。
{{ /if }}

---

<br>

**对于时间轴（[`${componentType}.${axisTypeProp}: 'time'`](~${componentType}.${axisTypeProp})）**

`formatter` 的字符串模板支持多种形式：
- **字符串模板**：简单快速实现常用日期时间模板，`string` 类型
- **回调函数**：自定义 formatter，可以用来实现复杂高级的格式，`Function` 类型
- **分级模板**：为不同时间粒度的标签使用不同的 formatter，`object` 类型

下面我们分别介绍这三种形式。

** 字符串模板 **

使用字符串模板是一种方便实现常用日期时间格式化方式的形式。如果字符串模板可以实现你的效果，那我们优先推荐使用此方式；如果无法实现，再考虑其他两种更复杂的方式。支持的模板如下：

| 分类        | 模板 | 取值（英文）                                                    | 取值（中文）                                                                |
|--------------|----------|----------------------------------------------------------------|----------------------------------------------------------------------------|
| Year         | {yyyy}     | e.g., 2020, 2021, ...                                          | 例：2020, 2021, ...                                                        |
|              | {yy}       | 00-99                                                          | 00-99                                                                      |
| Quarter      | {Q}        | 1, 2, 3, 4                                                     | 1, 2, 3, 4                                                                 |
| Month        | {MMMM}     | e.g., January, February, ...                                   | 一月、二月、…… |
|              | {MMM}      | e.g., Jan, Feb, ...                                            | 1月、2月、……              |
|              | {MM}       | 01-12                                                          | 01-12                                                                      |
|              | {M}        | 1-12                                                           | 1-12                                                                       |
| Day of Month | {dd}       | 01-31                                                          | 01-31                                                                      |
|              | {d}        | 1-31                                                           | 1-31                                                                       |
| Day of Week  | {eeee}     | Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday | 星期日、星期一、星期二、星期三、星期四、星期五、星期六                     |
|              | {ee}       | Sun, Mon, Tues, Wed, Thu, Fri, Sat                             | 日、一、二、三、四、五、六                                                 |
|              | {e}        | 1-54                                                           | 1-54                                                                       |
| Hour         | {HH}       | 00-23                                                          | 00-23                                                                      |
|              | {H}        | 0-23                                                           | 0-23                                                                       |
|              | {hh}       | 01-12                                                          | 01-12                                                                      |
|              | {h}        | 1-12                                                           | 1-12                                                                       |
| Minute       | {mm}       | 00-59                                                          | 00-59                                                                      |
|              | {m}        | 0-59                                                           | 0-59                                                                       |
| Second       | {ss}       | 00-59                                                          | 00-59                                                                      |
|              | {s}        | 0-59                                                           | 0-59                                                                       |
| Millisecond  | {SSS}      | 000-999                                                        | 000-999                                                                    |
|              | {S}        | 0-999                                                          | 0-999                                                                      |

> 其他语言请参考相应[语言包](https://github.com/apache/echarts/tree/master/src/i18n)中的定义，语言包可以通过 [echarts.registerLocale](api.html#echarts.registerLocale) 注册。

示例:
```ts
formatter: '{yyyy}-{MM}-{dd}' // 得到的 label 形如：'2020-12-02'
formatter: '{d}日' // 得到的 label 形如：'2日'
```

** 回调函数 **

回调函数可以根据刻度值返回不同的格式，如果有复杂的时间格式化需求，也可以引用第三方的日期时间相关的库（如 [Moment.js](https://momentjs.com/)、[date-fns](https://date-fns.org/) 等），返回显示的文本。

示例：
```ts
// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
formatter: function (value, index) {
    // 格式化成月/日，只在第一个刻度显示年份
    var date = new Date(value);
    var texts = [(date.getMonth() + 1), date.getDate()];
    if (index === 0) {
        texts.unshift(date.getFullYear());
    }
    return texts.join('/');
}

// 另外，`echarts.time.format` 也可以被使用：
formatter: function (value, index) {
    // 时间模版的规则如上描述。
    const timeStrLocal = echarts.time.format(value, '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}');
    // 第三个参数表示，基于 UTC 解析时间。
    const timeStrUTC = echarts.time.format(value, '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}', true);
    // 注意：如果使用 UTC，${optionDocPath}#useUTC 也要设置为 `true`，保持一致。
    return timeStrLocal;
}
```

** 分级模板 **

有时候，我们希望对不同的时间粒度采用不同的格式化策略。例如，在季度图表中，我们可能希望对每个月的第一天显示月份，而其他日期显示日期。我们可以使用以下方式实现该效果：

示例：
```ts
formatter: {
    month: '{MMMM}', // 一月、二月、……
    day: '{d}日' // 1日、2日、……
}
```

支持的分级以及各自默认的取值为：
```ts
{
    year: '{yyyy}',
    month: '{MMM}',
    day: '{d}',
    hour: '{HH}:{mm}',
    minute: '{HH}:{mm}',
    second: '{HH}:{mm}:{ss}',
    millisecond: '{hh}:{mm}:{ss} {SSS}',
    none: '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}'
}
```

以 `day` 为例，当一个刻度点的值的小时、分钟、秒、毫秒都为 `0` 时，将采用 `day` 的分级值作为模板。`none` 表示当其他规则都不适用时采用的模板，也就是带有毫秒值的刻度点的模板。


** 富文本 **

以上这三种形式的 formatter 都支持富文本，所以可以做成一些复杂的效果。

示例：
```ts
xAxis: {
    type: 'time',
    axisLabel: {
        formatter: {
            // 一年的第一个月显示年度信息和月份信息
            year: '{yearStyle|{yyyy}}\n{monthStyle|{MMM}}',
            month: '{monthStyle|{MMM}}'
        },
        rich: {
            yearStyle: {
                // 让年度信息更醒目
                color: '#000',
                fontWeight: 'bold'
            },
            monthStyle: {
                color: '#999'
            }
        }
    }
},
```

使用回调函数形式实现上面例子同样的效果：

示例：
```ts
xAxis: {
    type: 'time',
    axisLabel: {
        formatter: function (value) {
            const date = new Date(value);
            const yearStart = new Date(value);
            yearStart.setMonth(0);
            yearStart.setDate(1);
            yearStart.setHours(0);
            yearStart.setMinutes(0);
            yearStart.setSeconds(0);
            yearStart.setMilliseconds(0);
            // 判断一个刻度值知否为一年的开始
            if (date.getTime() === yearStart.getTime()) {
                return '{year|' + date.getFullYear() + '}\n'
                    + '{month|' + (date.getMonth() + 1) + '月}';
            }
            else {
                return '{month|' + (date.getMonth() + 1) + '月}'
            }
        },
        rich: {
            year: {
                color: '#000',
                fontWeight: 'bold'
            },
            month: {
                color: '#999'
            }
        }
    }
},
```


{{ target: partial-axis-tooltip }}

#${prefix} tooltip(Object)

{{ use: partial-version(version = '5.6.0') }}

坐标轴 tooltip 设置，注意需设置 [triggerEvent](~${componentType}.triggerEvent) 为 `true` 并启用全局 [option.tooltip](~tooltip) 组件。

##${prefix} show(boolean) = false

<ExampleUIControlBoolean default="false" />

是否显示提示框组件，默认不启用。

{{ use: partial-tooltip-common(
    prefix = '#' + ${prefix},
    noValueFormatter = true
) }}



{{ target: partial-scale-data-value-desc }}

- 如果 [axis.type](~${componentType}.type) 是 `'value'` 或 `'log'`，则使用 `number` 类型的值。
{{ if: ${notSupportCategory} }}
- 如果 [axis.type](~${componentType}.type) 是 `'category'`：不支持。
{{ else }}
- 如果 [axis.type](~${componentType}.type) 是 `'category'`，值可以是：
    - 原始字符串，例如 `'categoryA'`、`'categoryB'`。
    - 序号。例如，如果类目轴定义为 `data: ['categoryA', 'categoryB', 'categoryC']`，则序号 `2` 表示 `'categoryC'`（从 `0` 开始计数）。此外，也可以设置为负数，例如 `-3`。
{{ /if }}
- 如果 [axis.type](~${componentType}.type) 是 `'time'`，值可以是：
    - `string` 类型，表示任意能被 [方法 `parseDate` (`echarts/src/util/number.ts`)](https://github.com/apache/echarts/blob/master/src/util/number.ts) 解析的时间格式，例如 `'2024-04-09 13:00:00'`。
    - `number` 类型，表示时间戳，例如 `1712667600000`。
    - `Date` 类型的时间对象，例如 `new Date('2024-04-09T13:00:00Z')`。



{{ target: partial-axis-break-identifier-desc }}

注：[${componentType}.breaks.start](~${componentType}.breaks.start) 和 [${componentType}.breaks.end](~${componentType}.breaks.end) 是每个 break 项的唯一标志。当调用 [chart.setOption](api.html#echartsInstance.setOption) 修改 [${componentType}.breaks.gap](~${componentType}.breaks.gap) 或 [${componentType}.breaks.isExpanded](~${componentType}.breaks.isExpanded) 时，`start` `end` 必须指定，且如果 `start` `end` 不修改才会有更新动画，修改了则无。
