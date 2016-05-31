
{{target: series-map}}

# series.map(Object)

**Map.**

Map is maily used in the visulization of geographic area data, which coordinates with [visualMap](~visualMap) component to show the datas such as population distribution density in diffrent areas.     

The same series of multiple [map type](~series-map.map) would show in one map. At this point, the configuration item of the first series should be used as the configuration for map drawing. 

**Tip: **`markLine` and `markPoint` are not recommended any more in ECharts 3.  If you want to realize the visulization of punctual data and line data, you could use the [scatter diagram](~series-scatter)和[line graph](~series-lines) in [geographic coordinate component](~geo).

**Sample: **
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
Multiple series containing the same [map type](~series-map.map) would use the same map to shoe. If several series have values in the same area, ECharts would gather the statistics of these values and then get a data. This configuration item refers to the methods applied in configuration statistics, including:   

+ `'sum'`   sum.
+ `'average'` averaging.
+ `'max'`   maximum value.
+ `'min'`   minimum value.

## selectedMode(boolean|string) = false
selected mode indicating whether to support multiple selected targets, which defaults to be turned off and support boolean value and character string. The value of character string could be `'single'` or `'multiple'`.

## showLegendSymbol(boolean)
Show the color symbol of legend in related area (dot of series symbol). Is valid when [legend](~legend) component exists.

## roam(boolean|string) = false
{{ use: partial-roam }}

## data(Array)
{{ use: partial-1d-data-desc(name="map") }}

### name(string)
The name of the map area where the data belongs to, such as `'Guangdong'` or `'Zhejiang'` .

### value(number)
The numerical value of this area.


