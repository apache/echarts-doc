
{{ target: component-grid }}

# grid(Object)

Drawing grid in rectangular coordinate. In a single grid, at most two X and Y axes each is allowed. [Line chart](~series-line), [bar chart](~series-bar), and [scatter chart (bubble chart)](~series-scatter) can be drawn in grid.

In ECharts 2.x, there could only be one single grid component at most in a single echarts instance. But in ECharts 3, there is no limitation.

**Following is an example of Anscombe Quartet:**

~[600x400](${galleryViewPath}scatter-anscombe-quartet&edit=1&reset=1)

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = false

<ExampleUIControlBoolean default="false" />

Whether to show the grid in rectangular coordinate.

{{ use: partial-rect-layout-width-height(
    componentName = "grid ",
    defaultLeft = "'10%'",
    defaultTop = 60,
    defaultRight = "'10%'",
    defaultBottom = 60
) }}

## containLabel(boolean) = false

<ExampleUIControlBoolean default="false" />

Whether the grid region contains [axis tick label](~yAxis.axisLabel) of axis.

+ When containLabel is `false`:
    + `grid.left` `grid.right` `grid.top` `grid.bottom` `grid.width` `grid.height` decide the location and size of the rectangle that is made of by xAxis and yAxis.
    + Setting to `false` will help when multiple grids need to be aligned at their axes.
+ When containLabel is `true`:
    + `grid.left` `grid.right` `grid.top` `grid.bottom` `grid.width` `grid.height` decide the location and size of the rectangle that contains the axes and the labels of the axes.
    + Setting to `true` will help when the length of axis labels is dynamic and is hard to approximate. This will avoid labels from overflowing the container or overlapping other components.

{{ use: partial-component-common-style(
    componentName = "grid",
    prefix = '#',
    needShow = true
) }}

{{ use: partial-tooltip-in-coords() }}

