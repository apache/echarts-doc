
{{ target: component-x-axis }}

# xAxis(Object)

The x axis in cartesian(rectangular) coordinate. Usually a single grid component can place at most 2 x axis, one on the bottom and another on the top. [offset](~xAxis.offset) can be used to avoid overlap when you need to put more than two x axis.

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

<ExampleUIControlBoolean default="true" />

Set this to `false` to prevent the axis from showing.

## gridIndex(number) = 0

The index of grid which the x axis belongs to. Defaults to be in the first grid.

## alignTicks(boolean) = false

{{ use: partial-version(
    version = "5.3.0"
) }}

`alignTicks` turned on to automatically align ticks when multiple numeric x axes. Only available for axes of type `'value'` and `'log'`.

## position(string)

<ExampleUIControlEnum options="top,bottom" default="bottom" />

The position of x axis.

options:
+ `'top'`
+ `'bottom'`

The first x axis in grid defaults to be on the bottom of the grid, and the second x axis is on the other side against the first x axis.  
Notice: Set `xAxis.axisLine.onZero` to `false` to activate this option.

## offset(number) = 0

<ExampleUIControlNumber step="0.5" />

Offset of x axis relative to default position. Useful when multiple x axis has same [position](~xAxis.position) value.  
Notice: Set `xAxis.axisLine.onZero` to `false` to activate this option.

{{ use: axis-common(
    prefix = '#',
    componentType = 'xAxis',
    axisTypeDefault = "'category'",
    hasSplitLineAndArea = true
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "x axis",
    defaultZ = 0
) }}
