{{ target: component-zAxis3D }}

# zAxis3D(Object)

三维笛卡尔坐标系中的 z 轴。可以通过 [grid3DIndex](~zAxis3D.grid3DIndex) 索引所在的[三维笛卡尔坐标系](~grid3D)。

在`zAxis3D`下设置的 [axisLine](~zAxis3D.axisLine), [axisTick](~zAxis3D.axisTick), [axisLabel](~zAxis3D.axisLabel), [splitLine](~zAxis3D.splitLine), [splitArea](~zAxis3D.splitArea), [axisPointer](~zAxis3D.axisPointer) 会覆盖 [grid3D](~grid3D) 下的相应配置项。

## show(boolean)

是否显示 z 轴。

## name(string) = 'Z'

坐标轴名称。

{{ use: component-axis3D-axis-common(
    componentType="zAxis3D",
    componentName='z 轴'
) }}

{{ use: component-axis3D-common(
    prefix="#",
    componentType="zAxis3D",
    componentName='z 轴'
)}}