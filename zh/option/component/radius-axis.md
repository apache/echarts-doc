
{{target: component-radius-axis}}

# radiusAxis(Object)

极坐标系的径向轴。

{{use: partial-component-id(prefix="#")}}

## polarIndex(number) = 0

径向轴所在的极坐标系的索引，默认使用第一个极坐标系。

{{ use: axis-common(
    prefix='#',
    componentType='radiusAxis',
    axisTypeDefault="'value'",
    hasSplitLineAndArea=true,
    galleryViewPath=${galleryViewPath},
    galleryEditorPath=${galleryEditorPath}
)}}


{{use:partial-z-zlevel(
    prefix="#",
    componentName="半径轴",
    defaultZ=0
) }}
