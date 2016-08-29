
{{target: component-grid}}

# grid(Object)

Drawing grid in rectangular coordinate. In a single grid, at most two X and Y axes each is allowed. [Line chart](~series-line), [bar chart](~series-bar), and [scatter chart (bubble chart)](~series-scatter) can be drawn in grid.

In ECharts 2.x, there could only be one single grid component at most in a single echarts instance. But in ECharts 3, there is no limitation.

**Following is an example of Anscombe Quartet:**

~[600x400](${galleryViewPath}scatter-anscombe-quartet&edit=1&reset=1)

## show(boolean) = false

Whether to show the grid in rectangular coordinate.

{{ use: partial-rect-layout-width-height(
    componentName="grid ",
    defaultLeft="'10%'",
    defaultTop=60,
    defaultRight="'10%'",
    defaultBottom=60
) }}

## containLabel(boolean) = false

Whether the grid region contains [axis tick label](~yAxis.axisLabel) of axis. When the width of coordinate axis label is unknown, and there may not be enough space for a small container, you can set it to be `true` to prevent the label from overflowing the container.

{{ use:partial-component-common-style(componentName="grid", prefix='#', needShow=true) }}
