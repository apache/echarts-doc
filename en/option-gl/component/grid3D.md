{{ target: component-grid3D }}

# grid3D(Object)
3D cartesian coordinate system component. It requires [xAxis3D](~xAxis3D), [yAxis3D](~yAxis3D)and [zAxis3D](~zAxis3D) axis components to be used together.

You can draw [3D Lines](~series-line3D), [3D Bar](~series-bar3D), [3D Scatter](~series-scatter3D), [surface](~series-surface) on the 3D Cartesian coordinate system.

You can set the [postEffect](~grid3D.postEffect), [light](~grid3D.light) and other configuration items to improve the display of 3D charts in `grid3D`.

Below is a description of the axis configuration items in grid3D. 

![700xauto](~grid3D.png)

---

**Note：** The [axisLine](~xAxis3D.axisLine), [axisTick](~xAxis3D.axisTick), [axisLabel](~xAxis3D.axisLabel), [splitLine](~xAxis3D.splitLine), [splitArea](~xAxis3D.splitArea), [axisPointer](~xAxis3D.axisPointer) set separately on [xAxis3D](~xAxis3D), [yAxis3D](~yAxis3D), [zAxis3D](~zAxis3D) will cover the corresponding configuration items under [grid3D](~grid3D).


## show(boolean)
Whether to display a 3D cartesian coordinate system component.


{{ use: partial-box-size(
    componentType='grid3D',
    componentName='3D cartesian coordinate system',
    defaultBoxWidth = 100,
    defaultBoxHeight = 100,
    defaultBoxDepth = 100
) }}

{{ use: component-axis3D-common(
    prefix="#",
    componentType="grid3D",
    componentName='3D cartesian coordinate system'
)}}

{{ use: partial-environment(
    componentType='grid3D',
    componentName='3D cartesian coordinate system'
) }}

{{ use: partial-light(
    componentType='grid3D',
    componentName='3D cartesian coordinate system',
    defaultMainLightAlpha=30,
    defaultMainLightBeta=40
) }}

{{ use: partial-post-effect(
    componentType='grid3D',
    componentName='3D cartesian coordinate system'
) }}

{{ use: partial-temporal-super-sampling(
    componentType='grid3D',
    componentName='3D cartesian coordinate system'
) }}

{{ use: partial-view-control(
    componentType='grid3D',
    componentName='3D cartesian coordinate system',
    defaultAlpha=20,
    defaultBeta=40,
    defaultDistance=200,
    defaultMinDistance=40,
    defaultMaxDistance=400
) }}


{{ use: partial-zlevel }}

{{ use: partial-viewport }}

