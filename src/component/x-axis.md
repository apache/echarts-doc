
{{target: component-x-axis}}

# xAxis(Object)

直角坐标系 grid 中的 x 轴，单个 grid 组件最多只能放上下两个 x 轴。

## gridIndex(number) = 0

x 轴所在的 grid 的索引，默认位于第一个 grid。

## position(string)

x 轴的位置。

可选：
+ `'top'`
+ `'bottom'`

默认 grid 中的第一个 x 轴在 grid 的下方（`'bottom'`），第二个 x 轴视第一个 x 轴的位置放在另一侧。

{{ use: axis-common(prefix='#', componentType='xAxis', axisTypeDefault="'category'") }}
