
{{target: series-map}}

# series.map(Object)

**Map.**

Map is maily used in the visulization of geographic area data, which can be used with [visualMap](~visualMap) component to visualize the datas such as population distribution density in diffrent areas.

Series of same [map type](~series-map.map) will show in one map. At this point, the configuration of the first series will be used for the map configuration.
<!--
**Example: **
~[600x400](${galleryViewPath}doc-example/map-example&reset=1&edit=1) -->


## type(string) = 'map'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-series-name() }}

{{ use: geo-common(
    prefix='#',
    inMap=true,
    galleryEditorPath=${galleryEditorPath},
    galleryViewPath=${galleryViewPath}
) }}

## geoIndex(number) = null

In default case, map series create exclusive `geo` component for themselves. But `geoIndex` can be used to specify an outer [geo component](~geo), which can be shared with other series like [pie](~series-pie). Moreover, the region color of the outer [geo component](~geo) can be controlled by the map series (via [visualMap](~visualMap)).

When `geoIndex` specified, [series-map.map](~series-map.map) other style configurations like [series-map.itemStyle](~series-map.itemStyle) will not work, but cooresponding configurations in [geo component](~geo) will be used.
<!--
For example:
~[600x400](${galleryViewPath}geo-map-scatter&reset=1&edit=1) -->

## mapValueCalculation(string) = 'sum'
Value of multiple series with the same [map type](~series-map.map) can use this option to get a statistical value.

Supported statistical methods:

+ `'sum'`
+ `'average'`
+ `'max'`
+ `'min'`

## showLegendSymbol(boolean)
Show the symbol in related area (dot of series symbol). Available when [legend](~legend) component exists.

## roam(boolean|string) = false
{{ use: partial-roam }}

{{ use: partial-seriesLayoutBy }}

{{ use: partial-datasetIndex }}

## data(Array)
{{ use: partial-1d-data-desc(name="map") }}

### name(string)
The name of the map area where the data belongs to, such as `'China'` or `'United Kingdom'` .

### value(number)
The numerical value of this area.

### selected(boolean) = false
Whether the are selected.


### itemStyle(Object)
Style of item polygon
#### areaColor(Color)
Color of the area.
{{ use: partial-item-style(prefix='####') }}


### label(Object)
{{use: partial-label-desc}}
{{use: partial-label(
    prefix="###",
    defaultPosition="'bottom'",
    formatter=true,
    noAlign=true,
    noVerticalAlign=true
)}}

### emphasis(Object)
#### itemStyle(Object)
##### areaColor(Color)
{{ use: partial-item-style(prefix='####') }}
#### label(Object)
{{use: partial-label(
    prefix="####",
    formatter=true,
    noAlign=true,
    noVerticalAlign=true
)}}

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
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
