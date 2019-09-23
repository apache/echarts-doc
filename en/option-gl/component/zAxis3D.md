{{ target: component-zAxis3D }}

# zAxis3D(Object)

The Z-axis in a 3D cartesian coordinate system.
You can use [grid3DIndex](~zAxis3D.grid3DIndex) to index [3D cartesian coordinate system](~grid3D).

The [axisLine](~zAxis3D.axisLine), [axisTick](~zAxis3D.axisTick), [axisLabel](~zAxis3D.axisLabel), [splitLine](~zAxis3D.splitLine), [splitArea](~zAxis3D.splitArea), [axisPointer](~zAxis3D.axisPointer) set separately on [zAxis3D](~zAxis3D) will cover the corresponding configuration items under [grid3D](~grid3D).

## show(boolean)

Whether to display the z-axis.

## name(string) = 'Z'

The name of the axis.

{{ use: component-axis3D-axis-common(
    componentType="zAxis3D",
    componentName='z axis'
) }}

{{ use: component-axis3D-common(
    prefix="#",
    componentType="zAxis3D",
    componentName='z axis'
)}}