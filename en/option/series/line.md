{{target:series-line}}

# series.line(Object)

**broken line chart**

Broken line chart relates all the data points [symbol](~series-line.symbol) by broken lines, which is used to show the trend of data changing. It could be used in both [rectangular coordinate](~grid) and[polar coordinate](~polar).

**Tip:** When [areaStyle](~series-line.areaStyle) is set, area chart will be drew.

**Tip:** With [visualMap](~visualMap-piecewise) component, Broken line / area chart can have different colors on different sections, as below:

~[600x400](${galleryViewPath}line-aqi&edit=1&reset=1)

## type(string) = 'line'

{{use: partial-component-id(prefix="#")}}

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

## showAllSymbol(boolean) = 'auto'
Only work when main axis is `'category'` axis (`axis.type` is `'category'`). Optional values:
+ `'auto'`: Default value. Show all symbols if there is enough space. Otherwise follow the interval strategy with with [axisLabel.interval](~xAxis.axisLabel.interval).
+ `true`: Show all symbols.
+ `false`: Follow the interval strategy with [axisLabel.interval](~xAxis.axisLabel.interval).

## hoverAnimation(boolean) = true
Set this to `false` to prevent the animation effect when the mouse is hovering over a symbol

{{ use: partial-legend-hover-link }}

## stack(string) = null
If stack the value. On the same category axis, the series with the same `stack` name would be put on top of each other.

The effect of the below example could be seen through stack switching of [toolbox](~toolbox) on the top right corner:

~[600x400](${galleryViewPath}doc-example/line-stack-tiled&edit=1&reset=1)

{{ use: partial-cursor }}

## connectNulls(boolean) = false
Whether to connect the line across null points.

{{use:partial-clip(
    prefix="#"
) }}

## step(string|boolean) = false
Whether to show as a step line. It can be `true`, `false`. Or `'start'`, `'middle'`, `'end'`. Which will configure the turn point of step line.

See the example using different `step` options:

~[600x400](${galleryViewPath}line-step&edit=1&reset=1)


## label(Object)
{{use: partial-label-desc}}
{{use: partial-label(
    prefix="##",
    defaultPosition="'top'",
    formatter=true
)}}

## itemStyle(Object)
The style of the symbol point of broken line.
{{use: partial-item-style(
    prefix="##",
    useColorPalatte=true,
    hasCallback=true
)}}

## lineStyle(Object)
Line style.

{{use:partial-line-style(
    prefix="##",
    defaultWidth=2
)}}

## areaStyle(Object)
The style of area.
{{use: partial-area-style(prefix="##", hasOrigin=true)}}


## emphasis(Object)
Highlight style of the graphic.

### label(Object)
{{use: partial-label(
    prefix="###",
    formatter=true
)}}
### itemStyle(Object)
{{use: partial-item-style(prefix="###")}}


## smooth(boolean|number) = false
Whether to show as smooth curve.

If is typed in `boolean`, then it means whether to enable smoothing. If is typed in `number`, valued from 0 to 1, then it means smoothness. A smaller value makes it less smooth.

Please refer to [smoothMonotone](~series-line.smoothMonotone) to change smoothing algorithm.

## smoothMonotone(string)
Whether the broken line keep the monotonicity when it is smoothed. It can be set as `'x'`, `'y'` to keep the monotonicity on x axis or y axis. Or it can be set to be `'none'` to use non-monotone smoothing algorithm.

From ECharts 4.0.3, we improved our default smoothing algorithm. The old algorithm can be used by setting `smoothMonotone` to be `'none'`. Here's the difference between old and new algorithm. In the following chart, old algorithm is in green color, and new algorithm is in red color.

![600xauto](~smooth-old-vs-new.png)

The old algorithm has many problems:

![600xauto](~smooth-old-problem.png)

Old algorithm uses the previous and next point to form control points' direction, while they are always horizontal (when the first dimension of data is monotone) or vertical (when the second dimension of data is monotone) in new algorithm.

![600xauto](~smooth-algorithm.png)

But new algorithm doesn't work with non-monotone data.

![600xauto](~smooth-non-monotone-x.png)

So we suggest that default value of `smoothMonotone` be used in most situations. If data on Y axis is monotone, it should be set to be `'y'`. If data is non-monotone, it should be set to be `'none'` to use the old algorithm.


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

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="##",
    name="single data"
) }}

### label(Object)
The style of the text of single data point.
{{ use: partial-label(
    prefix="###",
    defaultPosition="top"
) }}

### itemStyle(Object)
The style of the symbol of single data point.
{{use: partial-bar-item-style(prefix="###")}}


### emphasis(Object)

#### itemStyle(Object)
{{use: partial-bar-item-style(prefix="####")}}
#### label(Object)
{{ use: partial-label(prefix="####") }}


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

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing='linear'
)}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}
