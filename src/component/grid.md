
{{target: component-grid}}

# grid(Object)

直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。

在 ECharts 2.x 里单个 echarts 实例中最多只能存在一个 grid 组件，在 ECharts 3 中可以存在任意个 grid 组件。

例如下面这个 Anscombe Quartet 的示例：

~[600x500](${galleryViewPath}scatter-anscombe-quartet&edit=1&reset=1)

## show(boolean) = false

是否显示直角坐标系网格。

{{ use:partial-component-common-style(componentName="网格", prefix='#') }}

{{ use: partial-rect-layout(componentName="grid ") }}