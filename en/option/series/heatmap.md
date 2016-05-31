
{{target: series-heatmap}}

# series.heatmap(Object)
**heat map**

Heat map mainly shows the numerical values through colors, which have to coordinate with [visualMap](~visualMap) component. 

It could be applied in both [rectangular coordinate](~grid) and [geographic coordinate](~geo). The patterns of manifestation in these 2 coordinat system are totally different. There must be 2 category axes used in rectangular coordinate.

Here are the examples applied respectively in rectangular coordinate and geographic coordinate: 

**rectangular coordinate: **
~[600x400](${galleryViewPath}heatmap-cartesian&edit=1&reset=1)
**geographic coordinate: **
~[600x400](${galleryViewPath}heatmap-map&edit=1&reset=1)

## type(string) = 'heatmap'

{{ use: partial-series-name() }}

{{use: partial-coord-sys(
    seriesType="heatmap",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=false,
    geo=true
)}}

## blurSize(number) = 20
It is valid in geographic coordinate([coordinateSystem](~series-heatmap.coordinateSystem): 'geo').

## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
name of data item.

### value(Array)
value of data item.

### label(Object)
It is valid in rectangular coordinate([coordinateSystem](~series-heatmap.coordinateSystem): 'cartesian2d').
#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}

### itemStyle(Object)
the style setting of single data point. It is valid in rectangular coordinate([coordinateSystem](~series-heatmap.coordinateSystem): 'cartesian2d').
#### normal(Object)
{{use:partial-item-style(prefix="####")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

{{use: partial-mark-point(
    prefix="#",
    seriesType="heatmap"
)}}
{{use: partial-mark-line(
    prefix="#",
    seriesType="heatmap"
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="heat map"
) }}
