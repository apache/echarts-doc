{{target: series-scatter}}

# series.scatter(Object)

散点（气泡）图。[直角坐标系](~grid)上的散点图可以用来展现数据的 `x`，`y` 之间的关系，如果数据项有多个维度，其它维度的值可以通过不同大小的 [symbol](~series-scatter.symbol) 展现成气泡图，也可以用颜色来表现。这些可以配合 [visualMap](~visualMap) 组件完成。

可以应用在[直角坐标系](~grid)，[极坐标系](~polar)，[地理坐标系](~geo)上。

**Tip:** ECharts 2.x 中在地图上通过 markPoint 标记大量数据点方式在 ECharts 3 中建议通过[地理坐标系](~geo)上的 scatter 实现。下面示例就是在中国地图上用散点图展现了空气质量的分布。并且用 [visualMap](~visualMap) 组件将 PM2.5 映射到了颜色。
~[600x400](${galleryViewPath}scatter-map&edit=1&reset=1)

## type(string) = 'scatter'

{{ use: partial-series-name() }}

{{use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=true
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

## large(boolean) = true
是否开启大规模散点图的优化，在数据图形特别多的时候（>=5k）可以开启。

开启后配合 [largeThreshold](~series-scatter.largeThreshold) 在数据量大于指定阈值的时候对绘制进行优化。

缺点：优化后不能自定义设置单个数据项的样式。

## largeThreshold(number) = 2000
开启绘制优化的阈值。

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###",
    formatter=true
)}}


## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}


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
#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}


### itemStyle(Object)
单个数据点（气泡）的样式设置。
#### normal(Object)
{{use:partial-item-style(prefix="####")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

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

