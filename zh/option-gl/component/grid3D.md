{{ target: component-grid3D }}

# grid3D(Object)

三维笛卡尔坐标系组件。需要和 [xAxis3D](~xAxis3D)，[yAxis3D](~yAxis3D)，[zAxis3D](~zAxis3D) 三个坐标轴组件一起使用。

可以在三维笛卡尔坐标系上绘制[三维折线图](~series-line3D)，[三维柱状图](~series-bar3D)，[三维散点/气泡图](~series-scatter3D)，[曲面图](~series-surface)。

你可以设置 [postEffect](~grid3D.postEffect), [light](~grid3D.light) 等配置项提升`grid3D`中三维图表的显示效果。

下面是 grid3D 中坐标轴配置项的说明。

![700xauto](~grid3D.png)

---

> **注意：** [xAxis3D](~xAxis3D)，[yAxis3D](~yAxis3D)，[zAxis3D](~zAxis3D) 上单独设置的 [axisLine](~xAxis3D.axisLine), [axisTick](~xAxis3D.axisTick), [axisLabel](~xAxis3D.axisLabel), [splitLine](~xAxis3D.splitLine), [splitArea](~xAxis3D.splitArea), [axisPointer](~xAxis3D.axisPointer)` 会覆盖[grid3D](~grid3D) 下的相应配置项。



## show(boolean)

是否显示三维笛卡尔坐标系。


{{ use: partial-box-size(
    componentType='grid3D',
    componentName='三维笛卡尔坐标系',
    defaultBoxWidth = 100,
    defaultBoxHeight = 100,
    defaultBoxDepth = 100
) }}

{{ use: component-axis3D-common(
    prefix="#",
    componentType="grid3D",
    componentName='三维笛卡尔坐标系'
)}}

{{ use: partial-environment(
    componentType='grid3D',
    componentName='三维笛卡尔坐标系'
) }}

{{ use: partial-light(
    componentType='grid3D',
    componentName='三维笛卡尔坐标系',
    defaultMainLightAlpha=30,
    defaultMainLightBeta=40
) }}

{{ use: partial-post-effect(
    componentType='grid3D',
    componentName='三维笛卡尔坐标系'
) }}

{{ use: partial-temporal-super-sampling(
    componentType='grid3D',
    componentName='三维笛卡尔坐标系'
) }}

{{ use: partial-view-control(
    componentType='grid3D',
    componentName='三维笛卡尔坐标系',
    defaultAlpha=20,
    defaultBeta=40,
    defaultDistance=200,
    defaultMinDistance=40,
    defaultMaxDistance=400
) }}


{{ use: partial-zlevel }}

{{ use: partial-viewport }}

