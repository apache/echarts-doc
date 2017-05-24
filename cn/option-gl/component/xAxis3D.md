{{ target: component-xAxis3D }}

# xAxis3D(Object)

三维笛卡尔坐标系中的 x 轴。可以通过 [grid3DIndex](~xAxis3D.grid3DIndex) 索引所在的[三维笛卡尔坐标系](~grid3D)。

在`xAxis3D`下设置的 [axisLine](~xAxis3D.axisLine), [axisTick](~xAxis3D.axisTick), [axisLabel](~xAxis3D.axisLabel), [splitLine](~xAxis3D.splitLine), [splitArea](~xAxis3D.splitArea), [axisPointer](~xAxis3D.axisPointer) 会覆盖 [grid3D](~grid3D) 下的相应配置项。

## show(boolean)

是否显示 x 轴。

## name(string) = 'X'

坐标轴名称。

{{ use: component-axis3D-axis-common(
    componentType="xAxis3D",
    componentName='x 轴'
) }}

{{ use: component-axis3D-common(
    prefix="#",
    componentType="xAxis3D",
    componentName='x 轴'
)}}