{{target:series-bar}}

# series.bar(Object)

**bar chart**

Bar chart shows different data through the height of a bar, which is used in [rectangular coordinate](~grid) with at least 1 category axis.

## type(string) = 'bar'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=false,
    geo=false
) }}

## roundCap(boolean) = false
{{ use: partial-version(version = "4.5.0") }}
If to add round caps at the end of the bar sectors. Valid only for bar series on polar coordinates.

~[800x500](${galleryViewPath}polar-roundCap&reset=1&edit=1)

## label(Object)
{{use:partial-label-desc}}
{{use:partial-label(
    prefix="##",
    defaultPosition="'inside'",
    formatter=true
)}}

## itemStyle(Object)
{{use:partial-item-style-desc}}
{{use:partial-bar-item-style(
    prefix="##",
    useColorPalatte=true,
    hasCallback=true
)}}

## showBackground(boolean) = false
{{ use: partial-version(version = "4.7.0") }}
Whether to show background behind each bar. Use [backgroundStyle](~series-bar.backgroundStyle) to set background style.

~[800x400](${galleryViewPath}bar-background&reset=1&edit=1)

## backgroundStyle(Object)
{{ use: partial-version(version = "4.7.0") }}
Background style of each bar if [showBackground](~series-bar.showBackground) is set to be `true`.

~[800x400](${galleryViewPath}bar-background&reset=1&edit=1)

{{use:partial-bar-item-style(
    prefix="##",
    useColorPalatte=false,
    hasCallback=true,
    defaultColor="'rgba(180, 180, 180, 0.2)'"
)}}

## emphasis(Object)

### label(Object)
{{use:partial-label(
    prefix="###",
    formatter=true
)}}

### itemStyle(Object)
{{use:partial-bar-item-style(prefix="###")}}


## stack(string) = null
Name of stack. On the same category axis, the series with the same `stack` name would be put on top of each other.

{{ use: partial-cursor }}

{{use: partial-barGrid(
    seriesType='bar',
    galleryViewPath=${galleryViewPath}
)}}

{{use: partial-large(
    prefix="#",
    defaultLargeThreshold=400
)}}

{{ use:partial-progressive(
    prefix='#',
    supportProgressiveChunkMode=true,
    defaultProgressive=5000,
    defaultProgressiveChunkMode='mod'
) }}

{{use:partial-series-dimensions(
    prefix="#"
)}}

{{use:partial-series-encode(
    prefix="#"
)}}

{{ use: partial-seriesLayoutBy }}

{{ use: partial-datasetIndex }}

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

{{ use:partial-label(
    prefix="###",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}

### itemStyle(Object)
{{use:partial-bar-item-style(
    prefix="###"
)}}
#### emphasis(Object)
{{use:partial-bar-item-style(prefix="####")}}

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


{{use: partial-marker(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    seriesType="bar",
    hasCoord=true,
    hasType=true,
    name="mark point"
)}}

{{use:partial-clip(
    prefix="#"
) }}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="bar chart"
) }}

{{use:partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}




{{ target:partial-bar-item-style }}

#${prefix} color(Color) = ${defaultColor|default('auto')}

Bar color. {{ if: ${useColorPalatte} }} By default, colors from global palette [option.color](~color) is used. {{/if}}

#${prefix} borderColor(Color) = '#000'

The border color of bar.

#${prefix} borderWidth(number) = 0

The border width of bar. defaults to have no border.

{{use: partial-border-radius(
    propName: 'barBorderRadius',
    prefix: ${prefix}
)}}

{{ use:partial-style-shadow-opacity(prefix=${prefix}) }}

