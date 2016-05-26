
{{target: component-grid}}

# grid(Object)

Drawing grid in rectangular coordinate system. In a single grid, 2 x axis above and below and 2 y axis righ and left could be placed at most.  [broken line chart](~series-line), [bar chart](~series-bar), [scatter diagram (bubble diagram)](~series-scatter) could be drawn in grid.

In ECharts 2.x , there is one grid component at most in a single echarts example; while in ECharts 3, there is no limitation about the quantity of grid component in a single echarts example.

**see the below example of Anscombe Quartet: **

~[600x400](${galleryViewPath}scatter-anscombe-quartet&edit=1&reset=1)

## show(boolean) = false

Specify whether to show the grid in rectangular coordinate system.

{{ use: partial-rect-layout-width-height(
    componentName="grid ",
    defaultLeft="'10%'",
    defaultTop=60,
    defaultRight="'10%'",
    defaultBottom=60
) }}

## containLabel(boolean) = false

Specify whether the grid region contains [tick label](~yAxis.axisLabel) of coordinate axis. When the width of coordinate axis label can not be confirmed and there is no space could be left in a small container, you can set it as  `true` to prevent the label from overflowing the container.

{{ use:partial-component-common-style(componentName="grid", prefix='#', needShow=true) }}
