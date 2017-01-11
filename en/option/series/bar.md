{{target:series-bar}}

# series.bar(Object)

**bar chart**

Bar chart shows different data through the height of a bar, which is used in [rectangular coordinate](~grid) with at least 1 category axis.

## type(string) = 'bar'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=false,
    geo=false
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
{{use:partial-bar-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true,
    barBorderRadius=true
)}}
### emphasis(Object)
{{use:partial-bar-item-style(prefix="###")}}


## stack(string) = null
Name of stack. On the same category axis, the series with the same `stack` name would be put on top of each other.

{{use: partial-barGrid(
    seriesType='bar',
    galleryViewPath=${galleryViewPath}
)}}


## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
The name of data item.

### value(number)
The value of a single data item.

### label(Object)
The style setting of the text label in a single bar.

#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}

### itemStyle(Object)
#### normal(Object)
{{use:partial-bar-item-style(
    prefix="####",
    barBorderRadius=true
)}}
#### emphasis(Object)
{{use:partial-bar-item-style(prefix="####")}}

{{use: partial-marker(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    seriesType="bar",
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="bar chart"
) }}

{{use:partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}


{{ target:partial-bar-item-style }}

#${prefix} color(Color) = 'auto'

Bar color.{{ if: ${useColorPalatte} }} defaults to acquire colors from global palette [option.color](~color) {{/if}}.

#${prefix} barBorderColor(Color) = '#000'

The bodrder color of bar.

#${prefix} barBorderWidth(number) = 0

The bodrder width of bar. defaults to have no border.

{{ if: ${barBorderRadius} }}
#${prefix} barBorderRadius(number|Array) = 0
The radius of rounded corner of bar border. Its unit is px. And it supports use array to respectively specify the 4 corner radiuses of the bar.

For example:
```
barBorderRadius: 5, // consistently set the size of 4 rounded corners
barBorderRadius: [5, 5, 0, 0] // (clockwise upper left, upper right, bottom right and bottom left)
```
{{ /if }}

{{ use:partial-style-shadow-opacity(prefix=${prefix}) }}

