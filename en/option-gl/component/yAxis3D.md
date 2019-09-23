{{ target: component-yAxis3D }}

# yAxis3D(Object)

The Y-axis in a 3D cartesian coordinate system.
You can use [grid3DIndex](~yAxis3D.grid3DIndex) to index [3D cartesian coordinate system](~grid3D).

The [axisLine](~yAxis3D.axisLine), [axisTick](~yAxis3D.axisTick), [axisLabel](~yAxis3D.axisLabel), [splitLine](~yAxis3D.splitLine), [splitArea](~yAxis3D.splitArea), [axisPointer](~yAxis3D.axisPointer) set separately on [yAxis3D](~yAxis3D) will cover the corresponding configuration items under [grid3D](~grid3D).

## show(boolean)

Whether to display the y-axis.

## name(string) = 'Y'

The name of the axis.

{{ use: component-axis3D-axis-common(
    componentType="yAxis3D",
    componentName='y axis'
) }}

{{ use: component-axis3D-common(
    prefix="#",
    componentType="yAxis3D",
    componentName='y axis'
)}}