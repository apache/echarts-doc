{{ target: component-xAxis3D }}

# xAxis3D(Object)

The X-axis in a 3D cartesian coordinate system.
You can use [grid3DIndex](~xAxis3D.grid3DIndex) to index [3D cartesian coordinate system](~grid3D).

The [axisLine](~xAxis3D.axisLine), [axisTick](~xAxis3D.axisTick), [axisLabel](~xAxis3D.axisLabel), [splitLine](~xAxis3D.splitLine), [splitArea](~xAxis3D.splitArea), [axisPointer](~xAxis3D.axisPointer) set separately on [xAxis3D](~xAxis3D) will cover the corresponding configuration items under [grid3D](~grid3D).

## show(boolean)

Whether to display the x-axis.

## name(string) = 'X'

The name of the axis.

{{ use: component-axis3D-axis-common(
    componentType="xAxis3D",
    componentName='x axis'
) }}

{{ use: component-axis3D-common(
    prefix="#",
    componentType="xAxis3D",
    componentName='x axis'
)}}