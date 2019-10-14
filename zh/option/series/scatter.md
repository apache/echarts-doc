{{target: series-scatter}}

# series.scatter(Object)

散点（气泡）图。[直角坐标系](~grid)上的散点图可以用来展现数据的 `x`，`y` 之间的关系，如果数据项有多个维度，其它维度的值可以通过不同大小的 [symbol](~series-scatter.symbol) 展现成气泡图，也可以用颜色来表现。这些可以配合 [visualMap](~visualMap) 组件完成。

可以应用在[直角坐标系](~grid)，[极坐标系](~polar)，[地理坐标系](~geo)上。


## type(string) = 'scatter'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-series-name() }}

{{use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=true,
    calendar=true
)}}

## hoverAnimation(boolean)
是否开启鼠标 hover 的提示动画效果。

{{ use: partial-legend-hover-link }}

{{ use:partial-symbol(
    seriesType="scatter",
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    prefix="#",
    hasCallback=true
) }}

{{use: partial-large(
    prefix="#"
)}}

{{ use: partial-cursor }}

## label(Object)
{{use:partial-label-desc}}
{{use:partial-label(
    prefix="##",
    defaultPosition="'inside'",
    formatter=true
)}}


## itemStyle(Object)
{{use:partial-item-style-desc}}
{{use:partial-item-style(
    prefix="##",
    useColorPalatte=true,
    hasCallback=true
)}}


## emphasis(Object)
高亮的图形和标签样式。
### label(Object)
{{use:partial-label(
    prefix="###",
    formatter=true
)}}
### itemStyle(Object)
{{use:partial-item-style(prefix="###")}}




{{ use:partial-progressive(
    prefix='#'
) }}



{{use:partial-series-dimensions(
    prefix="#"
)}}

{{use:partial-series-encode(
    prefix="#"
)}}

{{ use: partial-seriesLayoutBy }}

{{ use: partial-datasetIndex }}

## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
数据项名称。

### value(Array)
数据项值。

{{ use:partial-symbol(
    prefix="##",
    name="单个数据"
) }}

### label(Object)
{{ use:partial-label(
    prefix="###",
    defaultPosition="inside"
) }}

### itemStyle(Object)
单个数据点（气泡）的样式设置。
{{use:partial-item-style(prefix="###")}}

### emphasis(Object)
单个数据的高亮图形和标签样式。
#### label(Object)
{{ use:partial-label(prefix="####") }}
#### itemStyle(Object)
{{use:partial-item-style(prefix="####")}}


{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}

{{use: partial-marker(
    prefix="#",
    seriesType="scatter",
    galleryEditorPath=${galleryEditorPath},
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="散点图"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}

{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}

