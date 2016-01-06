
{{target: component-visual-map-continuous}}

# visualMap.continuous(Object)

**连续型视觉映射组件（visualMapContinuous）**

（参考[视觉映射组件（visualMap）的介绍](~visualMap)）

展现形式如下图：
~[600x400](${galleryViewPath}doc-example/map-visualMap-continouse&edit=1&reset=1)

`visualMapContinuous`中，可以通过 [visualMap.calculable](~visualMap.calculable) 来开启或关闭『值域漫游』（即手柄拖拽改变值域的功能）。

<br>
<br>

## type(string) = continuous

类型为连续型。

## min(number)

指定 visualMapContinuous 组件的最小值。`min` 必须用户指定。

## max(number)

指定 visualMapContinuous 组件的最大值。`max` 必须用户指定。


## calculable(boolean) = false

是否启用值域漫游，即是否有拖拽用的手柄，以及用手柄调整选中范围。

（注：为兼容 ECharts2，当 [visualMap.type](~visualMap.type) 未指定时，假如设置了 `calculable`，则`type`自动被设置为`continuous`，无视 [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber) 等设置。所以，建议使用者不要不指定 [visualMap.type](~visualMap.type)，否则表意不清晰。）


## realtime(boolean) = true

## textGap(Array) = 10

## handlePosition(string) = 'auto'

,     // 'auto', 'left', 'right', 'top', 'bottom'

{{ use: component-visual-map-common(
    itemWidth: 20,
    itemHeight: 140
) }}

