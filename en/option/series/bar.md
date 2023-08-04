
{{ target: series-bar }}

# series.bar(Object)

**bar chart**

Bar chart shows different data through the height of a bar, which is used in [rectangular coordinate](~grid) with at least 1 category axis.

## type(string) = 'bar'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType = "bar",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = true,
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

## realtimeSort(boolean) = false

Whether to enable realtime sorting, which is used for bar-racing effect. Please refer to the tutorial [Dynamic Sorting Bar Chart](${handbookPath}how-to/chart-types/bar/bar-race/) in the Handbook.

~[800x500](${galleryViewPath}bar-race-country&reset=1&edit=1)

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
    hasCallback = false,
    defaultColor = "'rgba(180, 180, 180, 0.2)'"
) }}

{{ use: partial-bar-state(
    prefix = "#",
    topLevel = true,
    state = 'normal'
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    state = 'emphasis'
) }}

## blur(Object)

Configurations of blur state. Available when [emphasis.focus](~series-bar.emphasis.focus) is set.

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-bar.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## stack(string) = null

Name of stack. On the same category axis, the series with the same `stack` name would be put on top of each other.

See also [stackStrategy](~series-bar.stackStrategy) on how to customize how values are stacked.

Notice: `stack` only supports stacking on `value` and `log` axis for now. `time` and `category` axis are not supported.

## stackStrategy(string) = 'samesign'

{{ use: partial-version(
    version = '5.3.3'
) }}

How to stack values if the [stack](~series-bar.stack) property has been set. Options:

+ `'samesign'`: only stack values if the value to be stacked has the same sign as the currently cumulated stacked value.
+ `'all'`: stack all values, irrespective of the signs of the current or cumulative stacked value.
+ `'positive'`: only stack positive values.
+ `'negative'`: only stack negative values.

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

{{ use: partial-series-group-id() }}

## data(Array)

{{ use: partial-2d-data-desc() }}

### name(string)

The name of data item.

### value(number)

The value of a single data item.

{{ use: partial-data-group-id(
    prefix = '##'
) }}

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = false,
    state = 'normal'
) }}

### emphasis(Object)

Emphasis state of single data.

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Blur state of single data.

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Select state of single data.

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    state = 'select'
) }}

{{ use: partial-clip(
    prefix = "#"
) }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "bar",
    hasCoord = true,
    hasType = true
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

{{ use: partial-universal-transition(
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
    noPosition = true,
    formatter = ${topLevel}
) }}

##${prefix} position(string|Array) = 'inside'

<ExampleUIControlEnum options="top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside" />

Label position.

**Followings are the options: **

+ [x, y]

    Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.
    For example:
    ```ts
    // Absolute pixel values
    position: [10, 10],
    // Relative percentage
    position: ['50%', '50%']
    ```

+ 'top'
+ 'left'
+ 'right'
+ 'bottom'
+ 'inside'
+ 'insideLeft'
+ 'insideRight'
+ 'insideTop'
+ 'insideBottom'
+ 'insideTopLeft'
+ 'insideBottomLeft'
+ 'insideTopRight'
+ 'insideBottomRight'

See: [label position](${galleryViewPath}doc-example/label-position).

+ Additional positions are supported for bar series under polar coordinates: `start` / `insideStart` / `middle` / `insideEnd` / `end`.

{{ use: partial-version(
    version = '5.2.0'
) }}

~[800x500](${galleryViewPath}doc-example/bar-polar-label-radial-multiple&reset=1&edit=1)

~[800x500](${galleryViewPath}doc-example/bar-polar-label-tangential-multiple&reset=1&edit=1)

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
    useColorPalatte = ${topLevel} && ${state} === 'normal',
    useDecal = ${state} === 'normal',
    hasCallback = ${topLevel} && ${state} === 'normal',
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: partial-bar-item-style }}

#${prefix} color(Color{{ if: ${hasCallback} }}|Function{{ /if }}) = ${defaultColor|default("'auto'")}

<ExampleUIControlColor />

Bar color. {{ if: ${useColorPalatte} }}By default, colors from global palette [option.color](~color) is used.{{ /if }}{{ if: ${hasInherit} }}Can set to `'inherit'` in the `emphasis` state to disable color highlight.{{ /if }}

{{ use: partial-color-desc() }}

{{ if: ${hasCallback} }}
Supports callback functions, in the form of:
```ts
(params: Object) => Color
```
Input parameters are `seriesIndex`, `dataIndex`, `data`, `value`, and etc. of data item.
{{ /if }}

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

{{ if: ${useDecal} }}
#${prefix} decal(Object)

{{ use: partial-decal-desc() }}

{{ use: partial-decal(
    prefix = '#' + ${prefix}
) }}
{{ /if }}
