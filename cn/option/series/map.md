
{{target: series-map}}

# series.map(Object)

**地图。**

地图主要用于地理区域数据的可视化，配合 [visualMap](~visualMap) 组件用于展示不同区域的人口分布密度等数据。

多个[地图类型](~series-map.map)相同的系列会在同一地图上显示，这时候使用第一个系列的配置项作为地图绘制的配置。

**Tip: **在 ECharts 3 中不再建议在地图类型的图表使用 `markLine` 和 `markPoint`。如果要实现点数据或者线数据的可视化，可以使用在[地理坐标系组件](~geo)上的[散点图](~series-scatter)和[线图](~series-lines)。

**示例：**
~[600x400](${galleryViewPath}doc-example/map-example&reset=1&edit=1)


## type(string) = 'map'

{{ use: partial-series-name() }}

{{ use: geo-common(
    prefix='#',
    inMap=true,
    galleryEditorPath=${galleryEditorPath},
    galleryViewPath=${galleryViewPath}
) }}

## geoIndex(number) = null

默认情况下，map series 会自己生成内部专用的 `geo` 组件。但是也可以用这个 `geoIndex` 指定一个 [geo](~geo) 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 [geo](~geo) 组件了。并且，[geo](~geo) 组件的颜色也可以被这个 map series 控制，从而用 [visualMap](~visualMap) 来更改。

当设定了 `geoIndex` 后，[series-map.map](~series-map.map) 属性，以及 [series-map.itemStyle](~series-map.itemStyle) 等样式配置不再起作用，而是采用 [geo](~geo) 中的相应属性。

参见：
~[600x400](${galleryViewPath}geo-map-scatter&reset=1&edit=1)

## mapValueCalculation(string) = 'sum'
多个拥有相同[地图类型](~series-map.map)的系列会使用同一个地图展现，如果多个系列都在同一个区域有值，ECharts 会对这些值统计得到一个数据。这个配置项就是用于配置统计的方式，目前有：

+ `'sum'`   取和。
+ `'average'` 取平均值。
+ `'max'`   取最大值。
+ `'min'`   取最小值。

## showLegendSymbol(boolean)
在图例相应区域显示图例的颜色标识（系列标识的小圆点），存在 [legend](~legend) 组件时生效。

## roam(boolean|string) = false
{{ use: partial-roam }}

## data(Array)
{{ use: partial-1d-data-desc(name="地图") }}

### name(string)
数据所对应的地图区域的名称，例如 `'广东'`，`'浙江'`。

### value(number)
该区域的数据值。

### selected(boolean) = false
该区域是否选中。

### itemStyle(Object)
该数据所在区域的多边形样式设置
#### areaColor(Color)
地图区域的颜色。
{{ use: partial-item-style(prefix='####') }}
#### emphasis(Object)
##### areaColor(Color)
地图区域的颜色。
{{ use: partial-item-style(prefix='####') }}

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


## label(Object)
{{use: partial-label-desc}}
{{use: partial-label(
    prefix="##",
    defaultPosition="'bottom'",
    formatter=true,
    noAlign=true,
    noVerticalAlign=true
)}}
### emphasis(Object)
{{use: partial-label(
    prefix="###",
    formatter=true,
    noAlign=true,
    noVerticalAlign=true
)}}


{{use: partial-marker(
    prefix="#",
    seriesType="map",
    galleryEditorPath=${galleryEditorPath},
    hasCoord=true
)}}

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}
