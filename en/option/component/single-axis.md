
{{ target: component-single-axis }}

# singleAxis(Object)

An axis with a single dimension. It can be used to display data in one dimension. For example:

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

Orientation of the axis. By default, it's `'horizontal'`. You can set it to be `'vertical'` to make a vertical axis.

{{ use: axis-common(
    prefix = '#',
    componentType = 'singleAxis',
    axisTypeDefault = "'value'",
    hasSplitLineAndArea = true
) }}

{{ use: partial-tooltip-in-coords() }}

