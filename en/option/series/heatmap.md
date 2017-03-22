
{{target: series-heatmap}}

# series.heatmap(Object)
**heat map**

Heat map mainly use colors to represent values, which must be used along with [visualMap](~visualMap) component.

It can be used in either [rectangular coordinate](~grid) or [geographic coordinate](~geo). But the behaviour on them are quite different. Rectangular coordinate must have two catagories to use it.

Here are the examples using it in rectangular coordinate and geographic coordinate:

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
Blur size of each data point. It is valid with [coordinateSystem](~series-heatmap.coordinateSystem) of 'geo' value.

## minOpacity(number) = 0

Minimum opacity. It is valid with [coordinateSystem](~series-heatmap.coordinateSystem) of 'geo' value.

## maxOpacity(number) = 1

Maximum opacity. It is valid with [coordinateSystem](~series-heatmap.coordinateSystem) of 'geo' value.

## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
Name of data item.

### value(Array)
Value of data item.

### label(Object)
It is valid with [coordinateSystem](~series-heatmap.coordinateSystem) of 'cartesian2d' value.

#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}

### itemStyle(Object)
Style of a single data point. It is valid with [coordinateSystem](~series-heatmap.coordinateSystem) of 'cartesian2d' value.
#### normal(Object)
{{use:partial-item-style(prefix="####")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

{{use: partial-marker(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    seriesType="heatmap"
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="heatmap"
) }}

{{ use:partial-silent(
    prefix="#"
) }}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}
