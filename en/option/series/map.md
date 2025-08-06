
{{ target: series-map }}

# series.map(Object)

**Map.**

Map is mainly used in the visualization of geographic area data, which can be used with [visualMap](~visualMap) component to visualize the data such as population distribution density in different areas.

Series of same [map type](~series-map.map) will show in one map. At this point, the configuration of the first series will be used for the map configuration.

## type(string) = 'map'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: geo-common(
    prefix = '#',
    inMap = true,
    labelMargin = true
) }}

{{ use: partial-coord-sys(
    seriesType = "map",
    coordSysDefault = "'geo'",
    geo = true
) }}

## mapValueCalculation(string) = 'sum'

Value of multiple series with the same [map type](~series-map.map) can use this option to get a statistical value.

Supported statistical methods:

+ `'sum'`
+ `'average'`
+ `'max'`
+ `'min'`

## showLegendSymbol(boolean)

Show the symbol in related area (dot of series symbol). Available when [legend](~legend) component exists.


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
    name = "map"
) }}

### name(string)

The name of the map area where the data belongs to, such as `'China'` or `'United Kingdom'` .

### value(number)

The numerical value of this area.

{{ use: partial-data-group-id(
    prefix = '##'
) }}

{{ use: partial-data-child-group-id(
    prefix = '##'
) }}

### selected(boolean) = false

Whether the are selected.

{{ use: partial-silent(
    prefix = "##",
    version = "5.6.0"
) }}

### itemStyle(Object)

Style of item polygon

#### areaColor(Color)

Color of the area.

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
    noVerticalAlign = true,
    labelMargin = true
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

Emphasis state of specified region.

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: map-region-state(
    state = 'emphasis'
) }}

### select(Object)

Select state of polygon.

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

The color of the map area.

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
