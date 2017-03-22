
{{target: component-angle-axis}}

# angleAxis(Object)

极坐标系的角度轴。

## polarIndex(number) = 0

角度轴所在的极坐标系的索引，默认使用第一个极坐标系。

## startAngle(number) = 90

起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方。

如下示例是 startAngle 为 45 的效果：

~[400x400](${galleryViewPath}doc-example/polar-start-angle&edit=1&reset=1)

## clockwise(boolean) = true

刻度增长是否按顺时针，默认顺时针。

如下示例是 clockwise 为 `false` （逆时针）的效果：

~[400x400](${galleryViewPath}doc-example/polar-anticlockwise&edit=1&reset=1)

{{ use: axis-common(
    prefix='#',
    componentType='angleAxis',
    axisTypeDefault="'category'",
    hasSplitLineAndArea=true,
    galleryViewPath=${galleryViewPath},
    galleryEditorPath=${galleryEditorPath}
)}}


{{use:partial-z-zlevel(
    prefix="#",
    componentName="角度轴",
    defaultZ=0
) }}