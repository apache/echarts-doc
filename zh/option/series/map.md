
{{ target: series-map }}

# series.map(Object)

**地图。**

地图主要用于地理区域数据的可视化，配合 [visualMap](~visualMap) 组件用于展示不同区域的人口分布密度等数据。

多个[地图类型](~series-map.map)相同的系列会在同一地图上显示，这时候使用第一个系列的配置项作为地图绘制的配置。

**Tip: **在 ECharts 3 中不再建议在地图类型的图表使用 `markLine` 和 `markPoint`。如果要实现点数据或者线数据的可视化，可以使用在[地理坐标系组件](~geo)上的[散点图](~series-scatter)和[线图](~series-lines)。

## type(string) = 'map'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: geo-common(
    prefix = '#',
    inMap = true
) }}

## center(Array)

当前视角的中心点。可以是包含两个 `number` 类型（表示像素值）或 `string` 类型（表示相对容器的百分比）的数组。
从 `5.3.3` 版本开始支持 `string` 类型。

例如：
```ts
center: [115.97, '30%']
```

## geoIndex(number) = null

默认情况下，map series 会自己生成内部专用的 `geo` 组件。但是也可以用这个 `geoIndex` 指定一个 [geo](~geo) 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 [geo](~geo) 组件了。并且，[geo](~geo) 组件的颜色也可以被这个 map series 控制，从而用 [visualMap](~visualMap) 来更改。

当设定了 `geoIndex` 后，[series-map.map](~series-map.map) 属性，以及 [series-map.itemStyle](~series-map.itemStyle) 等样式配置不再起作用，而是采用 [geo](~geo) 中的相应属性。

## mapValueCalculation(string) = 'sum'

多个拥有相同[地图类型](~series-map.map)的系列会使用同一个地图展现，如果多个系列都在同一个区域有值，ECharts 会对这些值统计得到一个数据。这个配置项就是用于配置统计的方式，目前有：

+ `'sum'`   取和。
+ `'average'` 取平均值。
+ `'max'`   取最大值。
+ `'min'`   取最小值。

## showLegendSymbol(boolean)

在图例相应区域显示图例的颜色标识（系列标识的小圆点），存在 [legend](~legend) 组件时生效。

## roam(boolean|string) = false

{{ use: partial-roam() }}

{{ use: partial-seriesLayoutBy() }}

{{ use: partial-datasetIndex() }}

{{ use: partial-series-group-id() }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '##',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

## data(Array)

{{ use: partial-1d-data-desc(
    name = "地图"
) }}

### name(string)

数据所对应的地图区域的名称，例如 `'广东'`，`'浙江'`。

### value(number)

该区域的数据值。

{{ use: partial-data-group-id(
    prefix = '##'
) }}

### selected(boolean) = false

该区域是否选中。

### itemStyle(Object)

该数据所在区域的多边形样式设置

#### areaColor(Color)

地图区域的颜色。

{{ use: partial-color-desc() }}

{{ use: partial-item-style(
    prefix = '###'
) }}

### label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "###",
    defaultPosition = "'bottom'",
    formatter = true,
    noAlign = true,
    noVerticalAlign = true
) }}

### labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '###',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

### emphasis(Object)

该数据所在区域的多边形高亮状态

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: map-region-state(
    state = 'emphasis'
) }}

### select(Object)

该数据所在区域的多边形选中状态

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: map-region-state(
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "map",
    hasCoord = true
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: map-region-state }}

#### itemStyle(Object)

##### areaColor(Color)

地图区域的颜色。

{{ use: partial-color-desc() }}

{{ use: partial-item-style(
    prefix = '####',
    hasInherit = ${state} === 'emphasis'
) }}

#### label(Object)

{{ use: partial-label(
    prefix = "####",
    formatter = true,
    noAlign = true,
    noVerticalAlign = true
) }}

#### labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '####'
) }}
