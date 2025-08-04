
{{ target: component-grid }}

# grid(Object)

The `grid component` is a rectangular container, used to lay out two-dimensional rectangular coordinate system (also known as `cartesian2d` coordinate system).

A `cartesian2d` coordinate system is composed fo an [xAxis](~xAixs) and a [yAxis](~yAxis). Multiple `cartesian2d` coordinate systems can be arranged within a single `grid component` - that is, multiple [xAxis](~xAixs) and multiple [yAxis](~yAxis) instances can be configured within one `grid component`.

An [xAxis](~xAixs) or a [yAxis](~yAxis) can be shared by multiple `cartesian2d` coordinate systems. For example, one [xAxis](~xAixs) and two [yAxis](~yAxis) form two `cartesian2d` coordinate systems.

[Line chart](~series-line), [bar chart](~series-bar), and [scatter chart (bubble chart)](~series-scatter), etc., can be drawn in `grid component`.

> In ECharts 2.x, there could only be one single grid component at most in a single echarts instance. But since ECharts 3, there is no limitation.

**Following is an example of Anscombe Quartet:**

~[600x400](${galleryViewPath}scatter-anscombe-quartet&edit=1&reset=1)

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = false

<ExampleUIControlBoolean default="false" />

Whether to show the grid in rectangular coordinate.

{{ use: partial-rect-layout-width-height(
    componentName = "grid",
    defaultLeft = "'10%'",
    defaultTop = 60,
    defaultRight = "'10%'",
    defaultBottom = 60
) }}

## containLabel(boolean) = false
<ExampleUIControlBoolean default="false" />

{{ use: partial-version(version = "6.0.0", deprecated = 'See [grid.outerBoundsMode](~grid.outerBoundsMode).') }}

Whether the grid region contains [axis tick label](~yAxis.axisLabel).

+ When containLabel is `false`:
    + `grid.left` `grid.right` `grid.top` `grid.bottom` `grid.width` `grid.height` decide the location and size of the rectangle that is made of by xAxis and yAxis.
    + Setting to `false` will help when multiple grids need to be aligned at their axes.
+ When containLabel is `true`:
    + `grid.left` `grid.right` `grid.top` `grid.bottom` `grid.width` `grid.height` decide the location and size of the rectangle that contains the axes, and the labels of the axes.
    + Setting to `true` will help when the length of axis labels is dynamic and is hard to approximate. This will avoid labels from overflowing the container or overlapping other components.

## outerBoundsMode(string) = 'auto'
{{ use: partial-version(version = "6.0.0") }}

The "outer bounds" is a constraint rectangle used to prevent axis labels and axis names from overflowing. `outerBoundsMode` defines the strategy for determining the "outer bounds".

In most cases, we do not need to specify [grid.outerBoundsMode](~grid.outerBoundsMode), [grid.outerBounds](~grid.outerBounds), [grid.outerBoundsContain](~grid.outerBoundsContain) and [grid.containLabel](~grid.containLabel), as the default settings can prevent axis labels and axis names from overflowing the canvas.

The grid component (Cartesian) layout strategy:
+ First, lay out axis lines based on the rect defined by [grid.left](~grid.left)/[right](~grid.right)/[top](~grid.top)/[bottom](~grid.bottom)/[width](~grid.width)/[height](~grid.height). This can meet the requirement of aligning axis lines across multiple grids.
+ Then, if axis labels and/or axis names overflow the "outer bounds", shrink the rectangle to prevent that overflow. [grid.outerBoundsContain](~grid.outerBoundsContain) determines whether axis label and axis name is confined by the "outer bounds".

Options of `outerBoundsMode`:
- `'auto'`/`null`/`undefined` (default):
    - Behave the same as `outerBoundsMode: 'same'` when `grid.containLabel: true`.
    - Otherwise, the "outer bounds" is determined by [grid.outerBounds](~grid.outerBounds) if specified.
    - Otherwise, automatically determine the "outer bounds" - typically defaulting to the current canvas, or a assigned layout rectangle if this `grid` is laid out in another coordinate system (see [grid.coordinateSystem](~grid.coordinateSystem)).
- `'none'`: Force the "outer bounds" to be infinity (i.e., no constraint), regardless of the specified [grid.outerBounds](~grid.outerBounds).
- `'same'`: Force the "outer bounds" to be the same as the layout rectangle defined by [grid.left](~grid.left)/[right](~grid.right)/[top](~grid.top)/[bottom](~grid.bottom)/[width](~grid.width)/[height](~grid.height), regardless of the specified [grid.outerBounds](~grid.outerBounds).

> The "outer bounds" encompasses the functionality of [grid.containLabel](~grid.containLabel); therefore, [grid.containLabel](~grid.containLabel) is deprecated. `grid.containLabel: true` is equivalent to `grid: {outerBoundsMode: 'same', outerBoundsContain: 'axisLabel'}`.
> The effect might be slightly different, but usually indiscernible. You can use the code below to enforce the previous effect, though it's unnecessary in most cases.
> ```js
> import {use} from 'echarts/core';
> import {LegacyGridContainLabel} from 'echarts/features';
> use([LegacyGridContainLabel]);
> ```

**Demo**: [outerBounds example](${galleryEditorPath}doc-example/grid-outerBounds&edit=1&reset=1).


## outerBounds(Object)
{{ use: partial-version(version = "6.0.0") }}

See details in [grid.outerBoundsMode](~grid.outerBoundsMode).

See also [outerBounds example](${galleryEditorPath}doc-example/grid-outerBounds&edit=1&reset=1).

{{ use: partial-rect-layout-width-height(
    hostName = "`outerBounds`",
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

Options:
- `'auto'`/`null`/`undefined` (default):
    - Behave the same as `outerBoundsContain: 'axisLabel'` if `containLabel: true`.
    - Otherwise, behave the same as `outerBoundsContain: 'all'`.
- `'all'`: The "outer bounds" constrain the grid (Cartesian) rectangle (determined by the x-axis and y-axis lines) and axis labels and axis names.
- `'axisLabel'`: The "outer bounds" constrain the grid (Cartesian) rectangle (determined by the x-axis and y-axis lines) and axis labels, but exclude axis names.

For more details, see [grid.outerBoundsMode](~grid.outerBoundsMode).

See also [outerBounds example](${galleryEditorPath}doc-example/grid-outerBounds&edit=1&reset=1).


{{ use: partial-component-common-style(
    componentName = "grid",
    prefix = '#',
    needShow = true
) }}

{{ use: partial-tooltip-in-coords() }}

{{ use: partial-coord-sys(
    version = '6.0.0',
    nonSeriesComponentMainType = "grid",
    coordSysDefault = "'none'",
    matrix = true,
    calendar = true,
    none = true
) }}
