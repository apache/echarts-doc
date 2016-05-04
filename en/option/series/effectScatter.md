
{{target: series-effectScatter}}

# series.effectScatter(Object)

the scatter (bubble) graph with ripple animation. The special animation effect could visually highlights some data.

**Tip:**  The special effects of map could be achieved through markPoint in ECharts 2.x. However, in  ECharts 3, effectScatter on geographic coordinate system is recommended for achieving that special effects of map.  

**Here is the example：**
~[600x400](${galleryViewPath}effectScatter-map&edit=1&reset=1)

## type(string) = 'effectScatter'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

## effectType(string) = 'ripple'
Type of special effect. Only ripple effect of `'ripple'` is supported at present.

## showEffectOn(string) = 'render'
Configurate the time to show the special effect.

**Options：**
+ `'render'` show the special effect when drawing is done. 
+ `'emphasis'` show the special effect when it is highlight（hover）.

## rippleEffect(Object)
related configurations about ripple effect.

### period(number) = 4
the duration of animation.

### scale(number) = 2.5
the maximum zooming scale of ripples in animation.
### brushType(string) = 'fill'
the filling method for ripples. options: `'stroke'` and `'fill'`。

{{use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=true
)}}

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    prefix="#"
) }}

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

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
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
#### normal(Object)
{{use:partial-item-style(prefix="####")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}


{{use: partial-mark-point(
    prefix="#",
    seriesType="effectScatter",
    hasCoord=true,
    hasType=true
)}}prefix
{{use: partial-mark-line(
    prefix="#",
    seriesType="effectScatter",
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#"
) }}

{{use: partial-animation(prefix="#")}}

