
{{ target: component-y-axis }}

# yAxis(Object)

The y axis in cartesian(rectangular) coordinate. Usually a single grid component can place at most 2 y axis, one on the left and another on the right. [offset](~yAxis.offset) can be used to avoid overlap when you need to put more than two y axis.

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

Set this to `false` to prevent the axis from showing.

## gridIndex(number) = 0

The index of grid which the y axis belongs to. Defaults to be in the first grid.

## position(string)

the position of y axis.

options:
+ `'left'`
+ `'right'`

The first y axis in grid defaults to be the left (`'left'`)  of the grid, and the second y axis is on the other side against the first y axis.

## offset(number) = 0

Offset of y axis relative to default position. Useful when multiple y axis has same [position](~yAxis.position) value.

## realtimeSort(*) = false

`realtimeSort` is used to enable bar race if set to be `true`. It is only valid if the [type](~yAxis.type) of yAxis is `'value'`.

It should be used along with other options to enable bar race. Please refer to [bar race](tutorial.html#Bar%20Race) tutorial for more details.

## sortSeriesIndex(*) = 0

The index of series used to sort in bar race. Since only one series is supported in bar race, `sortSeriesIndex` should always be `0`. It is only valid if [realtimeSort](~yAxis.realtimeSort) is `true` and [type](~yAxis.type) is `'value'`.

It should be used along with other options to enable bar race. Please refer to [bar race](tutorial.html#Bar%20Race) tutorial for more details.

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

