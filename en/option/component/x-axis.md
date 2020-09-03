
{{ target: component-x-axis }}

# xAxis(Object)

The x axis in cartesian(rectangular) coordinate. Usually a single grid component can place at most 2 x axis, one on the bottom and another on the top. [offset](~xAxis.offset) can be used to avoid overlap when you need to put more than two x axis.

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

Set this to `false` to prevent the axis from showing.

## gridIndex(number) = 0

The index of grid which the x axis belongs to. Defaults to be in the first grid.

## position(string)

The position of x axis.

options:
+ `'top'`
+ `'bottom'`

The first x axis in grid defaults to be on the bottom of the grid, and the second x axis is on the other side against the first x axis.

## offset(number) = 0

Offset of x axis relative to default position. Useful when multiple x axis has same [position](~xAxis.position) value.

## realtimeSort(*) = false

`realtimeSort` is used to enable bar race if set to be `true`. It is only valid if the [type](~xAxis.type) of xAxis is `'value'`.

It should be used along with other options to enable bar race. Please refer to [bar race](tutorial.html#Bar%20Race) tutorial for more details.

## sortSeriesIndex(*) = 0

The index of series used to sort in bar race. Since only one series is supported in bar race, `sortSeriesIndex` should always be `0`. It is only valid if [realtimeSort](~xAxis.realtimeSort) is `true` and [type](~xAxis.type) is `'value'`.

It should be used along with other options to enable bar race. Please refer to [bar race](tutorial.html#Bar%20Race) tutorial for more details.

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

