
{{target: series-map}}

# series.map(Object)

**Map.**

Map is maily used in the visulization of geographic area data, which can be used with [visualMap](~visualMap) component to visualize the datas such as population distribution density in diffrent areas.

Series of same [map type](~series-map.map) will show in one map. At this point, the configuration of the first series will be used for the map configuration.

**Example: **
~[600x400](${galleryViewPath}doc-example/map-example&reset=1&edit=1)


## type(string) = 'map'

{{ use: partial-series-name() }}

{{ use: geo-common(
    prefix='#',
    inMap=true,
    galleryEditorPath=${galleryEditorPath},
    galleryViewPath=${galleryViewPath}
) }}

## mapValueCalculation(string) = 'sum'
Value of ultiple series with the same [map type](~series-map.map) can use this option to get a statistical value.

Supported statistical methods:

+ `'sum'`
+ `'average'`
+ `'max'`
+ `'min'`

## selectedMode(boolean|string) = false

Selected mode of map. It is enabled by default, and you may set it to be `false` to disabled it.

Besides, it can be set to `'single'` or `'multiple'`, for single selection and multiple selection.


## showLegendSymbol(boolean)
Show the symbol in related area (dot of series symbol). Available when [legend](~legend) component exists.

## roam(boolean|string) = false
{{ use: partial-roam }}

## data(Array)
{{ use: partial-1d-data-desc(name="map") }}

### name(string)
The name of the map area where the data belongs to, such as `'China'` or `'United Kingdom'` .

### value(number)
The numerical value of this area.


