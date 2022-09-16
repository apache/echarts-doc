
{{ target: series-effectScatter }}

# series.effectScatter(Object)

The scatter (bubble) graph with ripple animation. The special animation effect can visually highlights some data.

**Tip:**  The effects of map was achieved through markPoint in ECharts 2.x. However, in  ECharts 3, effectScatter on geographic coordinate is recommended for achieving that effects of map.

## type(string) = 'effectScatter'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-legend-hover-link() }}

## effectType(string) = 'ripple'

<ExampleUIControlEnum options="ripple" />

Type of effect. Only ripple effect of `'ripple'` is supported currently.

## showEffectOn(string) = 'render'

<ExampleUIControlEnum options="render,emphasis" default="render" />

When to show the effect.

**Options: **
+ `'render'` Show the effect when rendering is done.
+ `'emphasis'` Show the effect when it is highlight (hover).

## rippleEffect(Object)

Related configurations about ripple effect.

### color(string)

{{ use: partial-version(
    version = "4.4.0"
) }}

<ExampleUIControlColor />

Color of the ripple rings. The default value is the color of scatter.

### number(number) = 3

{{ use: partial-version(
    version = "5.2.0"
) }}

<ExampleUIControlNumber min="0" default="3" step="1" />

The number of ripples.

### period(number) = 4

<ExampleUIControlNumber min="0" default="4" step="0.1" />

The period duration of animation, in seconds.

### scale(number) = 2.5

<ExampleUIControlNumber min="1" default="2.5" step="0.1" />

The maximum zooming scale of ripples in animation.

### brushType(string) = 'fill'

<ExampleUIControlEnum options="stroke,fill" default="fill" />

The brush type for ripples. options: `'stroke'` and `'fill'`.

{{ use: partial-coord-sys(
    seriesType = "effectScatter",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = true,
    geo = true,
    calendar = true
) }}

{{ use: partial-symbol(
    seriesType = "effectScatter",
    defaultSymbol = "'circle'",
    defaultSymbolSize = 10,
    prefix = "#",
    hasCallback = true
) }}

{{ use: partial-cursor() }}

## label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "##",
    defaultPosition = "'inside'",
    formatter = true
) }}

## labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '##',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## itemStyle(Object)

{{ use: partial-item-style-desc() }}

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = true
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

### scale(boolean|number) = true

{{ use: partial-version(
    version = "5.0.0"
) }}

<ExampleUIControlBoolean default="true" />

Whether to scale to highlight the data in emphasis state. `number` has been supported since `v5.3.2`, the default scale value is 1.1.

{{ use: partial-focus-blur-scope() }}

{{ use: effectScatter-state(
    prefix = "##"
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-effectScatter.emphasis.focus) is set.

{{ use: effectScatter-state(
    prefix = "##"
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-effectScatter.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: effectScatter-state(
    prefix = "##"
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: partial-seriesLayoutBy() }}

{{ use: partial-datasetIndex() }}

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

## data(Array)

{{ use: partial-2d-data-desc() }}

{{ use: partial-symbol(
    seriesType = "effectScatter",
    defaultSymbol = "'circle'",
    defaultSymbolSize = 4,
    prefix = "##",
    name = "single data"
) }}

### label(Object)

{{ use: partial-label(
    prefix = "###",
    defaultPosition = "inside"
) }}

### labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '###',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###"
) }}

### emphasis(Object)

Emphasis state of the specified single data.

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: effectScatter-state(
    prefix = "###"
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Blur state of the specified single data.

{{ use: effectScatter-state(
    prefix = "###"
) }}

### select(Object)

Select state of the specified single data.

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: effectScatter-state(
    prefix = "###"
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "effectScatter",
    hasCoord = true,
    hasType = true
) }}

{{ use: partial-clip(
    prefix = "#",
    version = "5.1.0"
) }}

{{ use: partial-z-zlevel(
    prefix = "#"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: effectScatter-state }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter = ${prefix} === '##'
) }}

#${prefix} labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '#' + ${prefix}
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix}
) }}

