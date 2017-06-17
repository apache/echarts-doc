{{target:series-line}}

# series.line(Object)

**broken line chart**

Broken line chart relates all the data points [symbol](~series-line.symbol) by broken lines, which is used to show the trend of data changing. It could be used in both [rectangular coordinate](~grid) and[polar coordinate](~polar).

**Tip:** When [areaStyle](~series-line.areaStyle) is set, area chart will be drew.

**Tip:** With [visualMap](~visualMap-piecewise) component, Broken line / area chart can have different colors on different sections, as below:

~[600x400](${galleryViewPath}line-aqi&edit=1&reset=1)

## type(string) = 'line'

{{ use: partial-series-name() }}

{{ use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=false
) }}

{{ use:partial-symbol(
    seriesType="line",
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="#",
    hasCallback=true
) }}

## showSymbol(boolean) = true
Whether to show symbol. It would be shown during tooltip hover.

## showAllSymbol(boolean) = false
Symbols are shown when label of main axis is shown. Which means it has same interval strategy with [axisLabel.interval](~xAxis.axisLabel.interval).

If you want to show them all, set this property as `true`.

## hoverAnimation(boolean) = true
Whether to enable the animation effect when mouse is on the symbol.

{{ use: partial-legend-hover-link }}

## stack(string) = null
If stack the value. On the same category axis, the series with the same `stack` name would be put on top of each other.

The effect of the below example could be seen through stack switching of [toolbox](~toolbox) on the top right corner:

~[600x400](${galleryViewPath}doc-example/line-stack-tiled&edit=1&reset=1)

{{ use: partial-cursor }}

## clipOverflow(boolean) = true
Whether to clip the overflowing part, which defaults to clip.

## connectNulls(boolean) = false
Whether to connect the line across null points.

## step(string|boolean) = false
Whether to show as a step line. It can be `true`, `false`. Or `'start'`, `'middle'`, `'end'`. Which will configure the turn point of step line.

See the example using different `step` options:

~[600x400](${galleryViewPath}line-step&edit=1&reset=1)


## label(Object)
{{use: partial-label-desc}}
### normal(Object)
{{use: partial-label(
    prefix="###",
    defaultPosition="'top'",
    formatter=true
)}}
### emphasis(Object)
{{use: partial-label(
    prefix="###",
    formatter=true
)}}

## itemStyle(Object)
The style of the symbol point of broken line.
### normal(Object)
{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{use: partial-item-style(prefix="###")}}

## lineStyle(Object)
Line style.
### normal(Object)
{{use:partial-line-style(prefix="###")}}
### emphasis(Object)
{{use: partial-line-style(prefix="###")}}

## areaStyle(Object)
The style of area.
### normal(Object)
{{use: partial-area-style(prefix="###")}}
### emphasis(Object)
{{use: partial-area-style(prefix="###")}}

## smooth(false) = false
Whether to show as smooth curve.

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
+ `'average'` Use average value of filter points
+ `'max'` Use maximum value of filter points
+ `'min'` Use minimum value of filter points
+ `'sum'` Use sum of filter points


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

### name(string)
The name of data item.

### value(number)
The value of a single data item.

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="##",
    name="single data"
) }}

### label(Object)
The style of the text of single data point.
#### normal(Object)
{{ use: partial-label(
    prefix="####",
    defaultPosition="top"
) }}
#### emphasis(Object)
{{ use: partial-label(prefix="####") }}

### itemStyle(Object)
The style of the symbol of single data point.
#### normal(Object)
{{use: partial-bar-item-style(prefix="####")}}
#### emphasis(Object)
{{use: partial-bar-item-style(prefix="####")}}

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}

{{use: partial-marker(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    seriesType="line",
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="broken line graph"
) }}

{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing='linear'
)}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}
