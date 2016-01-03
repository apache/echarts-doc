{{target: series-scatter}}

# series.scatter(Object)

散点图

## type(string) = 'scatter'

{{use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=true
)}}

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    prefix="#"
) }}

## label(Object)
数据的标签文本样式设置。
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(prefix="###")}}
#### position(string|Array) = 'inside'
{{use:partial-optional-label-position}}
### emphasis(Object)
{{use:partial-label(prefix="###")}}
#### position(string|Array)
{{use:partial-optional-label-position}}



## itemStyle(Object)
数据的标记（气泡）样式设置。
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(prefix="###", useColorPalatte=true)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}



## data(Array)

{{ use: partial-list-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
数据项名称。

### value(Array)
数据项值。

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="##"
) }}

### label(Object)
{{use:partial-label-desc}}
#### normal(Object)
{{use:partial-label(prefix="###")}}
##### position(string|Array) = 'inside'
{{use:partial-optional-label-position}}
#### emphasis(Object)
{{use:partial-label(prefix="###")}}
##### position(string|Array)
{{use:partial-optional-label-position}}


### itemStyle(Object)
单个数据点（气泡）的样式设置
#### normal(Object)
{{use:partial-item-style(prefix="###")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="###")}}

