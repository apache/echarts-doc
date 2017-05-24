{{target: series-scatter}}

# series.scatter(Object)

Scatter (bubble) chart . The scatter chart in [rectangular coordinate](~grid) could be used to present the relation between  `x` and `y`. If data have multiple dimensions, the values of the other dimensions can be visualized through [symbol](~series-scatter.symbol) with various sizes and colors, which becomes a bubble chart. These can be done by using with [visualMap](~visualMap) component.


It could be used with [rectangular coordinate](~grid) and [polar coordinate](~polar) and [geographical coordinate](~geo).


~[600x400](${galleryViewPath}scatter-map&edit=1&reset=1)

## type(string) = 'scatter'

{{ use: partial-series-name() }}

{{use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=true,
    calendar=true
)}}

## hoverAnimation(boolean)
Whether to enable the animation effect when mouse is on the symbol.

{{ use: partial-legend-hover-link }}

{{ use:partial-symbol(
    seriesType="scatter",
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    prefix="#",
    hasCallback=true
) }}

## large(boolean) = true
Whether to enable the optimization of large-scale scatter graph. It could be enabled when there is a particularly large number of data(>=5k) .

After being enabled, [largeThreshold](~series-scatter.largeThreshold) can be used to indicate the minimum number for turning on the optimization.

The style of a single data item can't be customided.

## largeThreshold(number) = 2000
The threshold enabling the drawing optimization.

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###",
    formatter=true
)}}


## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}


## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
the name of data item.

### value(Array)
the value of data item.

{{ use:partial-symbol(
    prefix="##",
    name="single data"
) }}

### label(Object)
#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}


### itemStyle(Object)
the style setting about single data point(bubble).
#### normal(Object)
{{use:partial-item-style(prefix="####")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


{{use: partial-marker(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    seriesType="scatter",
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="scatter chart"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}
