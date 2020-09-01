
{{ target: component-single-axis }}

# singleAxis(Object)

单轴。可以被应用到散点图中展现一维数据，如下示例

~[700x500](${galleryViewPath}scatter-single-axis&edit=1&reset=1)

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-rect-layout-width-height(
    componentName = "single",
    defaultLeft = "'5%'",
    defaultTop = "'5%'",
    defaultRight = "'5%'",
    defaultBottom = "'5%'"
) }}

## orient(string) = 'horizontal'

轴的朝向，默认水平朝向，可以设置成 `'vertical'` 垂直朝向。

{{ use: axis-common(
    prefix = '#',
    componentType = 'singleAxis',
    axisTypeDefault = "'value'",
    hasSplitLineAndArea = true
) }}

{{ use: partial-tooltip-in-coords() }}

