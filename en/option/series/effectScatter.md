
{{target: series-effectScatter}}

# series.effectScatter(Object)

The scatter (bubble) graph with ripple animation. The special animation effect can visually highlights some data.

**Tip:**  The effects of map was achieved through markPoint in ECharts 2.x. However, in  ECharts 3, effectScatter on geographic coordinate is recommended for achieving that effects of map.

## type(string) = 'effectScatter'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

## effectType(string) = 'ripple'
Type of effect. Only ripple effect of `'ripple'` is supported currently.

## showEffectOn(string) = 'render'
When to show the effect.

**Options: **
+ `'render'` Show the effect when rendering is done.
+ `'emphasis'` Show the effect when it is highlight (hover).

## rippleEffect(Object)
Related configurations about ripple effect.

### color(string)
Color of the ripple rings. The default value is the color of scatter.

### period(number) = 4
The period duration of animation, in seconds.

### scale(number) = 2.5
The maximum zooming scale of ripples in animation.
### brushType(string) = 'fill'
The brush type for ripples. options: `'stroke'` and `'fill'`.

{{use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=true,
    calendar=true
)}}

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    prefix="#"
) }}

{{ use: partial-cursor }}

## label(Object)
{{use:partial-label-desc}}
{{use:partial-label(
    prefix="##",
    defaultPosition="'inside'",
    formatter=true
)}}

## itemStyle(Object)
{{use:partial-item-style-desc}}
{{use:partial-item-style(
    prefix="##",
    useColorPalatte=true,
    hasCallback=true
)}}


## emphasis(Object)

### label(Object)

{{use:partial-label(
    prefix="###",
    formatter=true
)}}

### itemStyle(Object)

{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}

{{ use: partial-seriesLayoutBy }}

{{ use: partial-datasetIndex }}

{{use:partial-series-dimensions(
    prefix="#"
)}}

{{use:partial-series-encode(
    prefix="#"
)}}

## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="##",
    name="single data"
) }}

### label(Object)
{{ use:partial-label(
    prefix="###",
    defaultPosition="inside"
) }}

### itemStyle(Object)
{{use:partial-item-style(prefix="###")}}

### emphasis(Object)

#### label(Object)

{{ use:partial-label(prefix="####") }}

#### itemStyle(Object)

{{use:partial-item-style(prefix="####")}}


{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}

{{use: partial-marker(
    prefix="#",
    seriesType="effectScatter",
    hasCoord=true,
    hasType=true
)}}


{{use:partial-z-zlevel(
    prefix="#"
) }}

{{use: partial-animation(prefix="#")}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}
