
{{target: component-grid}}

# grid(Object)

直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制[折线图](~series-line)，[柱状图](~series-bar)，[散点图（气泡图）](~series-scatter)。

在 ECharts 2.x 里单个 echarts 实例中最多只能存在一个 grid 组件，在 ECharts 3 中可以存在任意个 grid 组件。

**例如下面这个 Anscombe Quartet 的示例：**

~[600x400](${galleryViewPath}scatter-anscombe-quartet&edit=1&reset=1)

## show(boolean) = false

是否显示直角坐标系网格。

{{ use: partial-rect-layout-width-height(
    componentName="grid ",
    defaultLeft="'10%'",
    defaultTop=60,
    defaultRight="'10%'",
    defaultBottom=60
) }}

## containLabel(boolean) = false

grid 区域是否包含坐标轴的[刻度标签](~yAxis.axisLabel)，在无法确定坐标轴标签的宽度，容器有比较小无法预留较多空间的时候，可以设为 `true` 防止标签溢出容器。

{{ use:partial-component-common-style(componentName="网格", prefix='#', needShow=true) }}
