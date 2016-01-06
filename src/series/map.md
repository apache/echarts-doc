
{{target: series-map}}

# series.map(Object)

**地图。**

地图主要用于地理区域数据的可视化，配合 [visualMap](~visualMap) 组件用于展示不同区域的人口分布密度等数据。

**示例：**
~[600x400](${galleryViewPath}doc-example/map-example&reset=1&edit=1)

## type(string) = 'map'

{{ use: geo-common(
    prefix='#',
    inMap=true
) }}

## mapValueCalculation(string) = 'sum'
多个拥有相同[地图类型](~series-map.map)的系列会使用同一个地图展现，如果多个系列都在同一个区域有值，ECharts 会对这些值统计得到一个数据。这个配置项就是用于配置统计的方式，目前有：

+ `'sum'`   取和。
+ `'average'` 取平均值。
+ `'max'`   取最大值。
+ `'min'`   取最小值。

## selectedMode(boolean|string) = false
选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选 `'single'`，`'multiple'`。

## showLegendSymbol(boolean)
在图例相应区域显示图例的颜色标识（系列标识的小圆点），存在 [legend](~legend) 组件时生效。

## roam(boolean|string) = false
{{ use: partial-roam }}

## data(Array)
{{ use: partial-1d-data-desc }}

### name(string)
数据所对应的地图区域的名称，例如 `'广东'`，`'浙江'`。

### value(number)
数据值。


