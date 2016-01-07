
{{target: component-y-axis}}

# yAxis(Object)

直角坐标系 grid 中的 y 轴，单个 grid 组件最多只能放左右两个 y 轴。

## gridIndex(number) = 0

y 轴所在的 grid 的索引，默认位于第一个 grid。

## position(string)

y 轴的位置。

可选：
+ `'left'`
+ `'right'`

默认 grid 中的第一个 y 轴在 grid 的左侧（`'left'`），第二个 y 轴视第一个 y 轴的位置放在另一侧。

{{ use: axis-common(
    prefix='#',
    componentType='yAxis',
    axisTypeDefault="'value'",
    hasSplitLineAndArea=true
)}}
