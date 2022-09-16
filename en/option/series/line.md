
{{ target: series-line }}

# series.line(Object)

**broken line chart**

Broken line chart relates all the data points [symbol](~series-line.symbol) by broken lines, which is used to show the trend of data changing. It could be used in both [rectangular coordinate](~grid) and[polar coordinate](~polar).

**Tip:** When [areaStyle](~series-line.areaStyle) is set, area chart will be drawn.

**Tip:** With [visualMap](~visualMap-piecewise) component, Broken line / area chart can have different colors on different sections, as below:

~[600x400](${galleryViewPath}line-aqi&edit=1&reset=1)

## type(string) = 'line'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-coord-sys(
    seriesType = "line",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = true,
    geo = false
) }}

{{ use: partial-symbol(
    seriesType = "line",
    defaultSymbol = "'emptyCircle'",
    defaultSymbolSize = 4,
    prefix = "#",
    hasCallback = true
) }}

## showSymbol(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show symbol. It would be shown during tooltip hover.

## showAllSymbol(boolean) = 'auto'

<ExampleUIControlBoolean />

Only work when main axis is `'category'` axis (`axis.type` is `'category'`). Optional values:
+ `'auto'`: Default value. Show all symbols if there is enough space. Otherwise follow the interval strategy with with [axisLabel.interval](~xAxis.axisLabel.interval).
+ `true`: Show all symbols.
+ `false`: Follow the interval strategy with [axisLabel.interval](~xAxis.axisLabel.interval).

{{ use: partial-legend-hover-link() }}

## stack(string) = null

If stack the value. On the same category axis, the series with the same `stack` name would be put on top of each other.

See also [stackStrategy](~series-line.stackStrategy) on how to customize how values are stacked.

Notice: `stack` only supports stacking on `value` and `log` axis for now. `time` and `category` axis are not supported.

The effect of the below example could be seen through stack switching of [toolbox](~toolbox) on the top right corner:

~[600x400](${galleryViewPath}doc-example/line-stack-tiled&edit=1&reset=1)

## stackStrategy(string) = 'samesign'

{{ use: partial-version(
    version = '5.3.3'
) }}

How to stack values if the [stack](~series-line.stack) property has been set. Options:

+ `'samesign'`: only stack values if the value to be stacked has the same sign as the currently cumulated stacked value.
+ `'all'`: stack all values, irrespective of the signs of the current or cumulative stacked value.
+ `'positive'`: only stack positive values.
+ `'negative'`: only stack negative values.

{{ use: partial-cursor() }}

## connectNulls(boolean) = false

<ExampleUIControlBoolean />

Whether to connect the line across null points.

{{ use: partial-clip(
    prefix = "#"
) }}

## triggerLineEvent(boolean) = false

{{ use: partial-version(
    version = "5.2.2"
) }}

Whether `line` and `area` can trigger the event.

## step(string|boolean) = false

<ExampleUIControlEnum options='start,middle,end' />

Whether to show as a step line. It can be `true`, `false`. Or `'start'`, `'middle'`, `'end'`. Which will configure the turn point of step line.

See the example using different `step` options:

~[600x400](${galleryViewPath}line-step&edit=1&reset=1)

## label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "##",
    defaultPosition = "'top'",
    formatter = true
) }}

## endLabel(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Label on the end of line.

{{ use: partial-label(
    prefix = "##",
    formatter = true,
    noPosition = true
) }}

### valueAnimation(boolean)

Whether to enable text animation of value change.

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

The style of the symbol point of broken line.

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = true,
    useDecal = true,
    decalOnlyWithAreaStyle = true
) }}

## lineStyle(Object)

Line style.

{{ use: partial-line-style(
    prefix = "##",
    defaultWidth = 2
) }}

## areaStyle(Object)

The style of area.

{{ use: partial-area-style(
    prefix = "##",
    hasOrigin = true,
    defaultOpacity = 0.7
) }}

## emphasis(Object)

Highlight style of the graphic.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

### scale(boolean|number) = true

{{ use: partial-version(
    version = "5.0.0"
) }}

Whether to scale to highlight the data in emphasis state. `number` has been supported since `v5.3.2`, the default scale value is 1.1.

{{ use: partial-focus-blur-scope() }}

{{ use: line-state(
    state = 'emphasis'
) }}

### endLabel(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-label(
    prefix = "###",
    formatter = true,
    noPosition = true,
    noDistance = true
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-line.emphasis.focus) is set.

{{ use: line-state(
    state = 'blur'
) }}

### endLabel(Object)

{{ use: partial-label(
    prefix = "###",
    formatter = true,
    noPosition = true,
    noDistance = true
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-line.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: line-state(
    state = 'select'
) }}

### endLabel(Object)

{{ use: partial-label(
    prefix = "###",
    formatter = true,
    noPosition = true,
    noDistance = true
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## smooth(boolean|number) = false

Whether to show as smooth curve.

If is typed in `boolean`, then it means whether to enable smoothing. If is typed in `number`, valued from 0 to 1, then it means smoothness. A smaller value makes it less smooth.

Please refer to [smoothMonotone](~series-line.smoothMonotone) to change smoothing algorithm.

## smoothMonotone(string)

Whether the broken line keep the monotonicity when it is smoothed. It can be set as `'x'`, `'y'` to keep the monotonicity on x axis or y axis.

It is usually used on dual value axis.

Here are 2 examples of broken line chart with dual value axis, showing the differences when `smoothMonotone` is without any setting, and `smoothMonotone` is set as `'x'`.

+ No setting about `smoothMonotone`:

![300xauto](~smooth-monotone-none.png)

+ It is set as `'x'`:

![300xauto](~smooth-monotone-x.png)

## sampling(string)

The dowmsampling strategy used when the data size is much larger than pixel size. It will improve the performance when turned on. Defaults to be turned off, indicating that all the data points will be drawn.

Options:
+ `'lttb'` Use Largest-Triangle-Three-Bucket algorithm to filter points. It will keep the trends and extremas.
+ `'average'` Use average value of filter points
+ `'max'` Use maximum value of filter points
+ `'min'` Use minimum value of filter points
+ `'sum'` Use sum of filter points

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

{{ use: partial-symbol(
    defaultSymbol = "'circle'",
    defaultSymbolSize = 4,
    prefix = "##",
    name = "single data"
) }}

### label(Object)

The style of the text of single data point.

{{ use: partial-label(
    prefix = "###",
    defaultPosition = "top"
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

The style of the symbol of single data point.

{{ use: partial-item-style(
    prefix = "###"
) }}

### emphasis(Object)

Emphasis state of specified single data.

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: line-item-state(
    state = 'emphasis'
) }}

### blur(Object)

Blur state of specified single data.

{{ use: line-item-state(
    state = 'blur'
) }}

### select(Object)

Select state of specified single data.

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: line-item-state(
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "line",
    hasCoord = true,
    hasType = true
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "Line"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#",
    defaultAnimationEasing = 'linear'
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: line-state }}

### label(Object)

{{ use: partial-label(
    prefix = "###",
    formatter = true
) }}

### labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '###'
) }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###",
    hasInherit = ${state} === 'emphasis'
) }}

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = "###",
    defaultWidth = 2,
    hasInherit = ${state} === 'emphasis'
) }}

### areaStyle(Object)

{{ use: partial-area-style(
    prefix = "###"
) }}



{{ target: line-item-state }}

#### label(Object)

{{ use: partial-label(
    prefix = "####"
) }}

#### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "####",
    hasInherit = ${state} === 'emphasis'
) }}
