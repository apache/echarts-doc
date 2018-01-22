{{ target: component-yAxis3D }}

# yAxis3D(Object)

三维笛卡尔坐标系中的 y 轴。可以通过 [grid3DIndex](~yAxis3D.grid3DIndex) 索引所在的[三维笛卡尔坐标系](~grid3D)。

在`yAxis3D`下设置的 [axisLine](~yAxis3D.axisLine), [axisTick](~yAxis3D.axisTick), [axisLabel](~yAxis3D.axisLabel), [splitLine](~yAxis3D.splitLine), [splitArea](~yAxis3D.splitArea), [axisPointer](~yAxis3D.axisPointer) 会覆盖 [grid3D](~grid3D) 下的相应配置项。

## show(boolean)

是否显示 y 轴。

## name(string) = 'Y'

坐标轴名称。

{{ use: component-axis3D-axis-common(
    componentType="yAxis3D",
    componentName='y 轴'
) }}

{{ use: component-axis3D-common(
    prefix="#",
    componentType="yAxis3D",
    componentName='y 轴'
)}}