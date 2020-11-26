
{{ target: series-bar }}

# series.bar(Object)

**bar chart**

Bar chart shows different data through the height of a bar, which is used in [rectangular coordinate](~grid) with at least 1 category axis.

## type(string) = 'bar'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType = "bar",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = false,
    geo = false
) }}

## roundCap(boolean) = false

<ExampleUIControlBoolean default="${defaultRoundCap|default(false)}" />

{{ use: partial-version(
    version = "4.5.0"
) }}

<ExampleUIControlBoolean clean="true" />

Whether to add round caps at the end of the bar sectors. Valid only for bar series on polar coordinates.

~[800x500](${galleryViewPath}polar-roundCap&reset=1&edit=1)

## showBackground(boolean) = false

{{ use: partial-version(
    version = "4.7.0"
) }}

<ExampleUIControlBoolean clean="true" />

Whether to show background behind each bar. Use [backgroundStyle](~series-bar.backgroundStyle) to set background style.

~[800x400](${galleryViewPath}bar-background&reset=1&edit=1)

## backgroundStyle(Object)

{{ use: partial-version(
    version = "4.7.0"
) }}

Background style of each bar if [showBackground](~series-bar.showBackground) is set to be `true`.

~[800x400](${galleryViewPath}bar-background&reset=1&edit=1)

{{ use: partial-bar-item-style(
    prefix = "##",
    useColorPalatte = false,
    hasCallback = true,
    defaultColor = "'rgba(180, 180, 180, 0.2)'"
) }}

{{ use: partial-bar-state(
    prefix = "#",
    topLevel = true,
    isNormal = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-focus-blur-scope() }}

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    isNormal = false
) }}

## blur(Object)

Configurations of blur state. Available when [emphasis.focus](~series-bar.emphasis.focus) is set.

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    isNormal = false
) }}

## select(Object)

Configurations of select state. Available when [selectedMode](~series-bar.selectedMode) is set.

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    isNormal = false
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## stack(string) = null

Name of stack. On the same category axis, the series with the same `stack` name would be put on top of each other.

## sampling(string)

The dowmsampling strategy used when the data size is much larger than pixel size. It will improve the performance when turned on. Defaults to be turned off, indicating that all the data points will be drawn.

Options:
+ `'lttb'` Use Largest-Triangle-Three-Bucket algorithm to filter points. It will keep the trends and extremas.
+ `'average'` Use average value of filter points
+ `'max'` Use maximum value of filter points
+ `'min'` Use minimum value of filter points
+ `'sum'` Use sum of filter points

{{ use: partial-cursor() }}

{{ use: partial-barGrid(
    seriesType = 'bar'
) }}

{{ use: partial-large(
    prefix = "#",
    defaultLargeThreshold = 400
) }}

{{ use: partial-progressive(
    prefix = '#',
    supportProgressiveChunkMode = true,
    defaultProgressive = 5000,
    defaultProgressiveChunkMode = 'mod'
) }}

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

{{ use: partial-seriesLayoutBy() }}

{{ use: partial-datasetIndex() }}

## data(Array)

{{ use: partial-2d-data-desc() }}

### name(string)

The name of data item.

### value(number)

The value of a single data item.

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = false,
    isNormal = true
) }}

### emphasis(Object)

Emphasis state of single data.

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    isNormal = false
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Blur state of single data.

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    isNormal = false
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Select state of single data.

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    isNormal = false
) }}

{{ use: partial-clip(
    prefix = "#"
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "Bar chart "
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-bar-state }}

#${prefix} label(Object)

{{ if: ${topLevel} }}
{{ use: partial-label-desc() }}
{{ else }}
Label style configurations of single data.
{{ /if }}

{{ use: partial-label(
    prefix = "#" + ${prefix},
    defaultPosition = "'inside'",
    formatter = ${topLevel}
) }}

{{ if: ${topLevel && isNormal} }}
##${prefix} valueAnimation(boolean)

Whether to enable text animation of value change.

See this [example](${galleryEditorPath}doc-example/value-animation-simple&edit=1&reset=1).
{{ /if }}

#${prefix} labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '#' + ${prefix},
    length2 = ${isNormal},
    minTurnAngle = ${isNormal},
    showAbove = ${isNormal},
    smooth = ${isNormal}
) }}

#${prefix} itemStyle(Object)

{{ if: ${topLevel} }}
{{ use: partial-item-style-desc() }}
{{ else }}
Rectangle style configurations of single data.
{{ /if }}

{{ use: partial-bar-item-style(
    prefix = "#" + ${prefix},
    useColorPalatte = ${topLevel && isNormal},
    hasCallback = ${topLevel && isNormal}
) }}



{{ target: partial-bar-item-style }}

#${prefix} color(Color) = ${defaultColor|default('auto')}

<ExampleUIControlColor />

Bar color. {{ if: ${useColorPalatte} }} By default, colors from global palette [option.color](~color) is used. {{ /if }}

#${prefix} borderColor(Color) = '#000'

<ExampleUIControlColor value="#000" />

The border color of bar.

#${prefix} borderWidth(number) = 0

<ExampleUIControlNumber value="0" min="0" step="0.5" />

The border width of bar. defaults to have no border.

#${prefix} borderType(string) = 'solid'

<ExampleUIControlEnum default="solid" options="solid,dashed,dotted" />

Border type. Can be `'dashed'`, `'dotted'`.

{{ use: partial-border-radius(
    prefix = ${prefix}
) }}

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix}
) }}

