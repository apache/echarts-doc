{{target: series-scatter}}

# series.scatter(Object)

散点（气泡）图。可以应用在[直角坐标系](~grid)，[极坐标系](~polar)，[地理坐标系](~geo)上。

**Tip:** ECharts 2.x 中在地图上通过 markPoint 标记大量数据点方式在 ECharts 3 中建议通过地理坐标系上的散点图实现。

**如下示例：**
~[600x400](${galleryViewPath}scatter-world-population&edit=1&reset=1)

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

## large(boolean) = true
是否开启大规模散点图的优化，在数据图形特别多的时候（>=2k）可以开启。

开启后配合 [largeThreshold](series-scatter.largeThreshold) 在数据量大于指定阈值的时候对绘制进行优化。

优化后不能自定义设置单个数据项的样式，不能交互。

## largeThreshold(number) = 2000
开启绘制优化的阈值。

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

