
{{ target: component-grid }}

# grid(Object)

`grid 组件` 是一个矩形容器，用于绘制二维直角坐标系（`cartesian2d`）。一个 `cartesian2d` 坐标系由一个 [xAxis](~xAixs) 和一个 [yAxis](~yAxis) 构成。一个 `grid 组件` 中可以存在多个 `cartesian2d` 坐标系。即，一个 `grid 组件` 可以配置多个 [xAxis](~xAixs) 和多个 [yAxis](~yAxis)。

[xAxis](~xAixs) 和 [yAxis](~yAxis) 可以被多个 `cartesian2d` 坐标系共享。例如，一个 [xAxis](~xAixs) 和两个 [yAxis](~yAxis) 构成两个 `cartesian2d` 坐标系。

可以在 `grid 组件` 中绘制例如 [折线图](~series-line)，[柱状图](~series-bar)，[散点图（气泡图）](~series-scatter) 等等。

> 在 ECharts 2.x 里单个 echarts 实例中最多只能存在一个 grid 组件，自从 ECharts 3 开始可以存在任意多个 `grid 组件`。

**例如下面这个 Anscombe Quartet 的示例：**

~[600x400](${galleryViewPath}scatter-anscombe-quartet&edit=1&reset=1)

<ExampleBaseOption title="基础网格示例" name="grid" title-en="Basic Grid">
const option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
};

</ExampleBaseOption>

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = false

<ExampleUIControlBoolean default="false" />

是否显示直角坐标系网格。

{{ use: partial-rect-layout-width-height(
    componentName = "直角坐标系（grid）",
    defaultLeft = "'10%'",
    defaultTop = 60,
    defaultRight = "'10%'",
    defaultBottom = 60
) }}

## containLabel(boolean) = false

{{ use: partial-version(version = "6.0.0", deprecated = '参考 [grid.outerBoundsMode](~grid.outerBoundsMode)。') }}

<ExampleUIControlBoolean default="false" />

grid 区域是否包含坐标轴的[刻度标签](~yAxis.axisLabel)。

+ containLabel 为 `false` 的时候：
    + `grid.left` `grid.right` `grid.top` `grid.bottom` `grid.width` `grid.height` 决定的是由坐标轴形成的矩形的尺寸和位置。
    + 这比较适用于多个 `grid` 进行对齐的场景，因为往往多个 `grid` 对齐的时候，是依据坐标轴来对齐的。
+ containLabel 为 `true` 的时候：
    + `grid.left` `grid.right` `grid.top` `grid.bottom` `grid.width` `grid.height` 决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置。
    + 这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。

## outerBoundsMode(string) = 'auto'
{{ use: partial-version(version = "6.0.0") }}

外边界（outer bounds）是一个用于限制轴标签和轴名称溢出的矩形区域。`outerBoundsMode` 用于定义如何确定该“外边界”的策略。

在大多数情况下，无需显式指定 [grid.outerBoundsMode](~grid.outerBoundsMode)、[grid.outerBounds](~grid.outerBounds)、[grid.outerBoundsContain](~grid.outerBoundsContain) 和 [grid.containLabel](~grid.containLabel)，因为默认配置已经能够有效防止轴标签和轴名称溢出画布。

直角坐标系组件（grid）的布局策略如下：
+ 首先，根据 [grid.left](~grid.left)/[right](~grid.right)/[top](~grid.top)/[bottom](~grid.bottom)/[width](~grid.width)/[height](~grid.height) 所定义的矩形区域布置轴线。这可以满足多个 grid 对齐轴线的需求。
+ 然后，如果轴标签或轴名称超出了外边界（outer bounds），则会收缩该矩形区域以避免溢出。其中，[grid.outerBoundsContain](~grid.outerBoundsContain) 可决定轴标签和轴名称是否受外边界的限制。

`outerBoundsMode` 的可选值有：
- `'auto'`/`null`/`undefined`（默认值）：
    - 当 `grid.containLabel: true` 时，行为等同于 `outerBoundsMode: 'same'`。
    - 否则，如果设置了 [grid.outerBounds](~grid.outerBounds)，则使用该值作为外边界（outer bounds）。
    - 否则，自动确定外边界（outer bounds）—— 通常默认为当前 canvas 区域；或者，假如该 grid 被布局在其他坐标系中时（参见 [grid.coordinateSystem](~grid.coordinateSystem)），使用其他坐标系提指定的布局矩形作为外边界。
- `'none'`：强制将外边界（outer bounds）设为无限大（即不作任何限制），无视是否设置了 [grid.outerBounds](~grid.outerBounds)。
- 'same'：强制将外边界（outer bounds）设置为由 [grid.left](~grid.left)/[right](~grid.right)/[top](~grid.top)/[bottom](~grid.bottom)/[width](~grid.width)/[height](~grid.height) 所定义的矩形，无视是否设置了 [grid.outerBounds](~grid.outerBounds)。

> 外边界（outer bounds）已涵盖 [grid.containLabel](~grid.containLabel) 的功能，因此 [grid.containLabel](~grid.containLabel) 被不再推荐使用（deprecated）。
> `grid.containLabel: true` 等价于 `grid: {outerBoundsMode: 'same', outerBoundsContain: 'axisLabel'}`。效果上可能会有细微差别，但通常难以察觉。你可以使用以下代码来强制保持原有效果，不过一般并无此必要。
> ```js
> import {use} from 'echarts/core';
> import {LegacyGridContainLabel} from 'echarts/features';
> use([LegacyGridContainLabel]);
> ```

**示例**: [outerBounds 示例](${galleryEditorPath}doc-example/grid-outerBounds&edit=1&reset=1).


## outerBounds(Object)
{{ use: partial-version(version = "6.0.0") }}

详见 [grid.outerBoundsMode](~grid.outerBoundsMode).

也参见 [outerBounds 示例](${galleryEditorPath}doc-example/grid-outerBounds&edit=1&reset=1).

{{ use: partial-rect-layout-width-height(
    hostName = "外边界（`outerBounds`）",
    version = "6.0.0",
    noZ = true,
    prefix = '##',
    defaultLeft = 0,
    defaultTop = 0,
    defaultRight = 0,
    defaultBottom = 0
) }}

## outerBoundsContain(boolean) = 'auto'
{{ use: partial-version(version = "6.0.0") }}

可选值：
- `'auto'`/`null`/`undefined`（默认）：
    - 若设置了 `containLabel: true`，行为等同于 `outerBoundsContain: 'axisLabel'`。
    - 否则，行为等同于 `outerBoundsContain: 'all'`。
- `'all'`：外边界（outer bounds）会限制直角坐标系（grid）由 x 轴线和 y 轴线决定的矩形区域、轴标签（axis label）和轴名称（axis name）。
- `'axisLabel'`：外边界（outer bounds）会限制直角坐标系（grid）由 x 轴线和 y 轴线决定矩形区域和轴标签（axis label）；不会限制轴名称（axis name）。

更多信息参见 [grid.outerBoundsMode](~grid.outerBoundsMode).

也参见 [outerBounds 示例](${galleryEditorPath}doc-example/grid-outerBounds&edit=1&reset=1).


{{ use: partial-component-common-style(
    componentName = "直角坐标系（grid）",
    prefix = '#',
    needShow = true
) }}

{{ use: partial-tooltip-in-coords() }}

