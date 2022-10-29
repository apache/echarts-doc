
{{ target: series-scatter }}

# series.scatter(Object)

Scatter (bubble) chart . The scatter chart in [rectangular coordinate](~grid) could be used to present the relation between  `x` and `y`. If data have multiple dimensions, the values of the other dimensions can be visualized through [symbol](~series-scatter.symbol) with various sizes and colors, which becomes a bubble chart. These can be done by using with [visualMap](~visualMap) component.


It could be used with [rectangular coordinate](~grid) and [polar coordinate](~polar) and [geographical coordinate](~geo).

## type(string) = 'scatter'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-coord-sys(
    seriesType = "scatter",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = true,
    geo = true,
    calendar = true
) }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-symbol(
    seriesType = "scatter",
    defaultSymbol = "'circle'",
    defaultSymbolSize = 10,
    prefix = "#",
    hasCallback = true
) }}

{{ use: partial-large(
    prefix = "#"
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
    defaultOpacity = 0.8,
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

{{ use: scatter-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-scatter.emphasis.focus) is set.

{{ use: scatter-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-scatter.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: scatter-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: partial-progressive(
    prefix = '#'
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

the name of data item.

### value(Array)

the value of data item.

{{ use: partial-data-group-id(
    prefix = '##'
) }}

{{ use: partial-symbol(
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

the style setting about single data point(bubble).

{{ use: partial-item-style(
    prefix = "###"
) }}

### emphasis(Object)

Emphasis state of single data.

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: scatter-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Blur state of single data.

{{ use: scatter-state(
    prefix = "###",
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

{{ use: scatter-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "scatter",
    hasCoord = true,
    hasType = true
) }}

{{ use: partial-clip(
    prefix = "#"
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "Scatter"
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



{{ target: scatter-state }}

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
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

