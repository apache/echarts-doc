
{{ target: series-heatmap }}

# series.heatmap(Object)

**heat map**

Heat map mainly use colors to represent values, which must be used along with [visualMap](~visualMap) component.

It can be used in either [rectangular coordinate](~grid) or [geographic coordinate](~geo). But the behaviour on them are quite different. Rectangular coordinate must have two categories to use it.

Here are the examples using it in rectangular coordinate and geographic coordinate:

**rectangular coordinate: **
~[600x400](${galleryViewPath}heatmap-cartesian&edit=1&reset=1)

## type(string) = 'heatmap'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-coord-sys(
    seriesType = "heatmap",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = false,
    geo = true,
    calendar = true
) }}

## pointSize(number) = 20

Point size of each data point. It is valid with [coordinateSystem](~series-heatmap.coordinateSystem) of 'geo' value.

## blurSize(number) = 20

Blur size of each data point. It is valid with [coordinateSystem](~series-heatmap.coordinateSystem) of 'geo' value.

## minOpacity(number) = 0

Minimum opacity. It is valid with [coordinateSystem](~series-heatmap.coordinateSystem) of 'geo' value.

## maxOpacity(number) = 1

Maximum opacity. It is valid with [coordinateSystem](~series-heatmap.coordinateSystem) of 'geo' value.

{{ use: partial-progressive(
    prefix = '#'
) }}

## label(Object)

Work for [coordinateSystem](~series-heatmap.coordinateSystem): 'cartesian2d'.

{{ use: partial-label(
    prefix = "##",
    defaultPosition = "inside",
    minMargin = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## itemStyle(Object)

Work for [coordinateSystem](~series-heatmap.coordinateSystem): 'cartesian2d'.

{{ use: partial-item-style(
    prefix = "##"
) }}

{{ use: partial-border-radius(
    prefix = "##",
    version = "5.3.1"
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

{{ use: heatmap-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-heatmap.emphasis.focus) is set.

{{ use: heatmap-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-heatmap.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: heatmap-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
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

Name of data item.

### value(Array)

Value of data item.

{{ use: partial-data-group-id(
    prefix = '##'
) }}

{{ use: partial-data-child-group-id(
    prefix = '##'
) }}

### label(Object)

It is valid with [coordinateSystem](~series-heatmap.coordinateSystem) of 'cartesian2d' value.

{{ use: partial-label(
    prefix = "###",
    defaultPosition = "inside",
    minMargin = true
) }}

### itemStyle(Object)

Style of a single data point. It is valid with [coordinateSystem](~series-heatmap.coordinateSystem) of 'cartesian2d' value.

{{ use: partial-item-style(
    prefix = "###"
) }}

{{ use: partial-border-radius(
    prefix = "###",
    version = "5.3.1"
) }}

### emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

#### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "####",
    hasInherit = true
) }}

#### label(Object)

{{ use: partial-label(
    prefix = "####",
    defaultPosition = "inside"
) }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "heatmap"
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "heatmap"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: heatmap-state }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    defaultPosition = "inside"
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

