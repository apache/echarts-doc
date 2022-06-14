
{{ target: component-y-axis }}

# yAxis(Object)

The y axis in cartesian(rectangular) coordinate. Usually a single grid component can place at most 2 y axis, one on the left and another on the right. [offset](~yAxis.offset) can be used to avoid overlap when you need to put more than two y axis.

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

<ExampleUIControlBoolean default="true" />

Set this to `false` to prevent the axis from showing.

## gridIndex(number) = 0

The index of grid which the y axis belongs to. Defaults to be in the first grid.

## alignTicks(boolean) = false

{{ use: partial-version(
    version = "5.3.0"
) }}

`alignTicks` turned on to automatically align ticks when multiple numeric y axes. Only available for axes of type `'value'` and `'log'`.

## position(string)

<ExampleUIControlEnum options="left,right" default="left" />

the position of y axis.

options:
+ `'left'`
+ `'right'`

The first y axis in grid defaults to be the left (`'left'`)  of the grid, and the second y axis is on the other side against the first y axis.  
Notice: Set `yAxis.axisLine.onZero` to `false` to activate this option.

## offset(number) = 0

<ExampleUIControlNumber step="0.5" />

Offset of y axis relative to default position. Useful when multiple y axis has same [position](~yAxis.position) value.
Notice: Set `yAxis.axisLine.onZero` to `false` to activate this option.

{{ use: axis-common(
    prefix = '#',
    componentType = 'yAxis',
    axisTypeDefault = "'value'",
    hasSplitLineAndArea = true
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "y axis",
    defaultZ = 0
) }}
