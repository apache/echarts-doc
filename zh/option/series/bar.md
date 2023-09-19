
{{ target: series-bar }}

# series.bar(Object)

**柱状图**

柱状图（或称条形图）是一种通过柱形的高度（横向的情况下则是宽度）来表现数据大小的一种常用图表类型。


<ExampleBaseOption name="cartesian-bar" title="直角坐标系上的柱状图" title-en="Bar on Cartesian">
const option = {
    tooltip: {},
    legend: {},
    xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [{
        name: 'Sale',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 4]
    }]
};
</ExampleBaseOption>

<ExampleBaseOption name="polar-bar" title="极坐标系上的柱状图" title-en="Bar on Polar">
const option = {
    angleAxis: {
        max: 30
    },
    radiusAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        z: 10
    },
    polar: {},
    series: [{
        name: 'Sale',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 4],
        coordinateSystem: 'polar'
    }],
    legend: {},
};
</ExampleBaseOption>

<ExampleBaseOption name="cartesian-bar-multiple-series" title="多系列柱状图" title-en="Multiple Series">
option = {
    legend: {
        data: ['Food', 'Cloth', 'Book']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Food',
            type: 'bar',
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: 'Cloth',
            type: 'bar',
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: 'Book',
            type: 'bar',
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};
</ExampleBaseOption>

## type(string) = 'bar'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType = "bar",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = true,
    geo = false
) }}

## roundCap(boolean) = false

<ExampleUIControlBoolean default="${defaultRoundCap|default(false)}" />

{{ use: partial-version(
    version = "4.5.0"
) }}

<ExampleUIControlBoolean clean="true" />

是否在环形柱条两侧使用圆弧效果。

仅对极坐标系柱状图有效。

~[800x500](${galleryViewPath}polar-roundCap&reset=1&edit=1)

## realtimeSort(boolean) = false

是否开启实时排序，用来实现动态排序图效果，具体参见手册中[动态排序柱状图](${handbookPath}how-to/chart-types/bar/bar-race/)的教程。

~[800x500](${galleryViewPath}bar-race-country&reset=1&edit=1)

## showBackground(boolean) = false

{{ use: partial-version(
    version = "4.7.0"
) }}

<ExampleUIControlBoolean clean="true" />

是否显示柱条的背景色。通过 [backgroundStyle](~series-bar.backgroundStyle) 配置背景样式。

~[800x400](${galleryViewPath}bar-background&reset=1&edit=1)

## backgroundStyle(Object)

{{ use: partial-version(
    version = "4.7.0"
) }}

每一个柱条的背景样式。需要将 [showBackground](~series-bar.showBackground) 设置为 `true` 时才有效。

~[800x400](${galleryViewPath}bar-background&reset=1&edit=1)

{{ use: partial-bar-item-style(
    prefix = "##",
    useColorPalatte = false,
    hasCallback = false,
    defaultColor = "'rgba(180, 180, 180, 0.2)'"
) }}

{{ use: partial-bar-state(
    prefix = "#",
    topLevel = true,
    state = 'normal'
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## emphasis(Object)

高亮的图形样式和标签样式。

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    state = 'emphasis'
) }}

## blur(Object)

淡出时的图形样式和标签样式。开启 [emphasis.focus](~series-bar.emphasis.focus) 后有效。

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

数据选中时的图形样式和标签样式。开启 [selectedMode](~series-bar.selectedMode) 后有效。

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## stack(string) = null

数据堆叠，同个类目轴上系列配置相同的 `stack` 值可以堆叠放置。关于如何定制数值的堆叠方式，参见 [stackStrategy](~series-bar.stackStrategy)。

注：目前 `stack` 只支持堆叠于 `'value'` 和 `'log'` 类型的类目轴上，不支持 `'time'` 和 `'category'` 类型的类目轴。

## stackStrategy(string) = 'samesign'

{{ use: partial-version(
    version = '5.3.3'
) }}

堆积数值的策略，前提是[stack](~series-bar.stack)属性已被设置。其值可以是：

+ `'samesign'` 只在要堆叠的值与当前累积的堆叠值具有相同的正负符号时才堆叠。
+ `'all'` 堆叠所有的值，不管当前或累积的堆叠值的正负符号是什么。
+ `'positive'` 只堆积正值。
+ `'negative'` 只堆叠负值。

## sampling(string)

柱状图在数据量远大于像素点时候的降采样策略，开启后可以有效的优化图表的绘制效率，默认关闭，也就是全部绘制不过滤数据点。

可选：
+ `'lttb'` 采用 Largest-Triangle-Three-Bucket 算法，可以最大程度保证采样后线条的趋势，形状和极值。
+ `'average'` 取过滤点的平均值
+ `'max'` 取过滤点的最大值
+ `'min'` 取过滤点的最小值
+ `'sum'` 取过滤点的和

{{ use: partial-cursor() }}

{{ use: partial-barGrid(
    seriesType = 'bar'
) }}

{{ use: partial-large(
    prefix = "#",
    defaultLargeThreshold = 400
) }}

{{ use: partial-progressive(
    prefix = '#',
    supportProgressiveChunkMode = true,
    defaultProgressive = 5000,
    defaultProgressiveChunkMode = 'mod'
) }}

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

{{ use: partial-seriesLayoutBy() }}

{{ use: partial-datasetIndex() }}

{{ use: partial-series-group-id() }}

## data(Array)

{{ use: partial-2d-data-desc() }}

### name(string)

数据项名称。

### value(number)

单个数据项的数值。

{{ use: partial-data-group-id(
    prefix = '##'
) }}

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = false,
    state = 'normal'
) }}

### emphasis(Object)

单个数据的高亮状态配置。

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

单个数据的淡出状态配置。

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

单个数据的选中状态配置。

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    state = 'select'
) }}

{{ use: partial-clip(
    prefix = "#"
) }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "bar",
    hasCoord = true,
    hasType = true
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "柱状图"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-bar-state }}

#${prefix} label(Object)

{{ if: ${topLevel} }}
{{ use: partial-label-desc() }}
{{ else }}
单个数据的文本配置。
{{ /if }}

{{ use: partial-label(
    prefix = "#" + ${prefix},
    defaultPosition = "'inside'",
    noPosition = true,
    formatter = ${topLevel}
) }}

##${prefix} position(string|Array) = 'inside'

<ExampleUIControlEnum options="top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside" />

标签的位置。

+ 可以通过内置的语义声明位置：

    示例：
    ```ts
    position: 'top'
    ```

    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`。

+ 也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。

    示例：
    ```ts
    // 绝对的像素值
    position: [10, 10],
    // 相对的百分比
    position: ['50%', '50%']
    ```

参见：[label position](${galleryViewPath}doc-example/label-position)。

+ 极坐标系柱状图除了上述取值之外，还支持：`start` / `insideStart` / `middle` / `insideEnd` / `end`。

{{ use: partial-version(
    version = '5.2.0'
) }}

~[800x500](${galleryViewPath}doc-example/bar-polar-label-radial-multiple&reset=1&edit=1)

~[800x500](${galleryViewPath}doc-example/bar-polar-label-tangential-multiple&reset=1&edit=1)

{{ if: ${topLevel && isNormal} }}
##${prefix} valueAnimation(boolean)

是否开启标签的数字动画。

参考这个 [示例](${galleryEditorPath}doc-example/value-animation-simple&edit=1&reset=1)。
{{ /if }}

#${prefix} labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '#' + ${prefix},
    length2 = ${isNormal},
    minTurnAngle = ${isNormal},
    showAbove = ${isNormal},
    smooth = ${isNormal}
) }}

#${prefix} itemStyle(Object)

{{ if: ${topLevel} }}
{{ use: partial-item-style-desc() }}
{{ else }}
单个数据的图形样式设置。
{{ /if }}

{{ use: partial-bar-item-style(
    prefix = "#" + ${prefix},
    useColorPalatte = ${topLevel} && ${state} === 'normal',
    useDecal = ${state} === 'normal',
    hasCallback = ${topLevel} && ${state} === 'normal',
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: partial-bar-item-style }}

#${prefix} color(Color{{ if: ${hasCallback} }}|Function{{ /if }}) = ${defaultColor|default("'auto'")}

<ExampleUIControlColor />

柱条的颜色。{{ if: ${useColorPalatte} }} 默认从全局调色盘 [option.color](~color) 获取颜色。 {{ /if }} {{ if: ${hasInherit} }} 在`emphasis`状态中支持设置为 `'inherit'` 取消高亮。 {{ /if }}

{{ use: partial-color-desc() }}

{{ if: ${hasCallback} }}
支持使用回调函数。回调函数格式如下：
```ts
(params: Object) => Color
```
传入的是数据项 `seriesIndex`, `dataIndex`, `data`, `value` 等各个参数。
{{ /if }}

#${prefix} borderColor(Color) = '#000'

<ExampleUIControlColor value="#000" />

柱条的描边颜色。

#${prefix} borderWidth(number) = 0

<ExampleUIControlNumber value="0" min="0" step="0.5" />

柱条的描边宽度，默认不描边。

#${prefix} borderType(string) = 'solid'

<ExampleUIControlEnum default="solid" options="solid,dashed,dotted" />

柱条的描边类型，默认为实线，支持 `'dashed'`, `'dotted'`。

{{ use: partial-border-radius(
    prefix = ${prefix}
) }}

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix}
) }}

{{ if: ${useDecal} }}
#${prefix} decal(Object)

{{ use: partial-decal-desc() }}

{{ use: partial-decal(
    prefix = '#' + ${prefix}
) }}
{{ /if }}
