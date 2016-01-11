
{{target: component-visual-map-continuous}}

# visualMap.continuous(Object)

**连续型视觉映射组件（visualMapContinuous）**

（参考[视觉映射组件（visualMap）的介绍](~visualMap)）

展现形式如下图：
~[600x400](${galleryViewPath}doc-example/map-visualMap-continuous&edit=1&reset=1)

`visualMapContinuous`中，可以通过 [visualMap.calculable](~visualMap.calculable) 来开启或关闭『值域漫游』（即手柄拖拽改变值域的功能）。

<br>
<br>


## type(string) = continuous

类型为连续型。


## min(number)

指定 visualMapContinuous 组件的最小值。`'min'` 必须用户指定。


## max(number)

指定 visualMapContinuous 组件的最大值。`'max'` 必须用户指定。


## calculable(boolean) = false

是否启用值域漫游，即是否有拖拽用的手柄，以及用手柄调整选中范围。

（注：为兼容 ECharts2，当 [visualMap.type](~visualMap.type) 未指定时，假如设置了 `'calculable'`，则`type`自动被设置为`'continuous'`，无视 [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber) 等设置。所以，建议使用者不要不指定 [visualMap.type](~visualMap.type)，否则表意不清晰。）


## realtime(boolean) = true

拖拽时，是否实时更新。

+ 如果为`ture`则拖拽手柄过程中实时更新图表视图。
+ 如果为`false`则拖拽结束时，才更新视图。


## inverse(boolean) = false

是否反转。

当`inverse`为`false`时，数据大小的位置规则，和直角坐标系相同，即：

+ 当 [visualMap.orient](~visualMap.orient) 为`'vertical'`时，数据上大下小。
+ 当 [visualMap.orient](~visualMap.orient) 为`'horizontal'`时，数据右大左小。

当`inverse`为`true`时，相反。


## precision(number) = 0

数据展示的小数精度，默认为0，无小数点。


## itemWidth(number) = 20

图形的宽度，即长条的宽度。


## itemHeight(number) = 140

图形的高度，即长条的高度。


## align: 'auto'

指定组件中手柄和文字的摆放关系，可选值为：

+ `'auto'` 自动决定。
+ `'left'` 手柄和label在右，orient 为 horizontal 时有效。
+ `'right'` 手柄和label在左，orient 为 horizontal 时有效。
+ `'top'` 手柄和label在下，orient 为 vertical 时有效。
+ `'bottom'` 手柄和label在上，orient 为 vertical 时有效。


## text(Array) = null

两端的文本，如 `['High', 'Low']`。[参见例子](${galleryEditorPath}doc-example/map-visualMap-continuous-text&edit=1&reset=1)。

`text` 中的顺序，其实试试就知道。若要看详细的规则，参见 [visualMap.inverse](~visualMap.inverse)。


## textGap(Array) = 10

两端文字主体之间的距离，单位为px。参见 [visualMap-continuous.text](~visualMap-continuous.text)


## handlePosition(string) = 'auto'

`handle` 指『拖拽手柄』。`handlePosition` 指定了手柄的位置。可选值：

+ `'auto'`：自动决定。
+ `'left'` 或 `'right'`：当[visualMap-continuous.orient](~visualMap-continuous.orient) 为`'horizontal'`时，有效。
+ `'top'` 或 `'bottom'`：当[visualMap-continuous.orient](~visualMap-continuous.orient) 为`'vertical'`时，有效。

{{ use: partial-visual-map-common(
    visualMapName='visualMap-continuous',
    galleryEditorPath=${galleryEditorPath}
) }}

