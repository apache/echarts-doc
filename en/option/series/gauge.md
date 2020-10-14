
{{ target: series-gauge }}

# series.gauge(Object)

**Gauge chart**

**Example: **
~[600x500](${galleryViewPath}gauge-car&reset=1&edit=1)

## type(string) = 'gauge'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-circular-layout() }}

<!-- overwrite radius -->

## radius(number|string) = '75%'

<ExampleUIControlPercent default="75%" />

The radius of gauge chart. It can be a percentage value of the smaller of container half width and half height, also can be an absolute value.

{{ use: partial-legend-hover-link() }}

## startAngle(number) = 225

<ExampleUIControlAngle min="-360" max="360" default="225" step="1" />

The start angle of gauge chart. The direct right side of [circle center](~series-gauge.center) is `0` degree, the right above it is `90` degree, the direct left side of it is `180` degree.

## endAngle(number) = -45

<ExampleUIControlAngle min="-360" max="360" default="-45" step="1" />

The end angle of gauge chart.

## clockwise(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether the scale in gauge chart increases clockwise.

## data(Array)

{{ use: partial-1d-data-desc() }}

{{ use: partial-gauge-title-detail(
    prefix = "##"
) }}

### name(string)

Data name.

### value(number)

<ExampleUIControlNumber default="0" step="1" />

Data value.

## min(number) = 0

<ExampleUIControlNumber default="0" step="1" />

The minimum data value which map to [minAngle](~series-gauge.minAngle).

## max(number) = 100

<ExampleUIControlNumber default="100" step="1" />

The maximum data value which map to  [maxAngle](~series-gauge.maxAngle).

## splitNumber(number) = 10

<ExampleUIControlNumber min="1" default="10" step="1" />

The number of split segments of gauge chart scale.

## axisLine(Object)

The related configuration about the axis line of gauge chart.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the axis line of gauge chart.

{{ use: partial-roundCap(
    prefix = "##"
) }}

### lineStyle(Object)

The style of the axis line of gauge chart.

#### color(Array)

The axis line of gauge chart can be divided to several segments in different colors. The end position and color of each segment can be expressed by an array.

Default value:
```js
[[1, '#E6EBF8']]
```

#### width(number) = 10

The width of axis line.

{{ use: partial-style-shadow-opacity(
    prefix = "###"
) }}

## progress(Object)

{{ use: partial-version(
    version = "5.0"
) }}

Used to show current progress.

### show(boolean) = false

<ExampleUIControlBoolean default="true" />

Whether to show the progress of gauge chart.

### overlap(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether the progress overlaps when there are multiple groups of data.

### width(number) = 10

<ExampleUIControlNumber default="10" min="0" step="0.5" />

The width of progress.

{{ use: partial-roundCap(
    prefix = "##",
    version = "5.0"
) }}

### silent(boolean) = true

<ExampleUIControlBoolean default="true" />

Set this to `false`, to allow interaction with the progress.

{{ use: partial-clip(
    prefix = "##",
    version = "5.0"
) }}

### itemStyle(Object)

The style of progress.

{{ use: partial-item-style(
    prefix = "###"
) }}

## splitLine(Object)

The style of split line.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the split line.

### length(number|string) = 10

<ExampleUIControlPercent default="10" min="0" step="0.5" />

The length of split line, can be a pecentage value relative to radius.

### distance(number) = 10

{{ use: partial-version(
    version = "5.0"
) }}

<ExampleUIControlNumber default="10" min="0" step="0.5" />

The distance between the split line and axis line.

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = '###',
    defaultColor = '#63677A',
    defaultWidth = 3,
    defaultType = "'solid'"
) }}

## axisTick(Object)

The tick line style.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the scale.

### splitNumber(number) = 5

<ExampleUIControlNumber min="1" default="5" step="1" />

The split scale number between split line.

### length(number|string) = 6

<ExampleUIControlPercent default="6" min="0" step="0.5" />

The length of tick line, can be a pecentage value relative to radius.

### distance(number) = 10

{{ use: partial-version(
    version = "5.0"
) }}

<ExampleUIControlNumber default="10" min="0" step="0.5" />

The distance between the tick line and axis line.

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = '###',
    defaultColor = '#63677A',
    defaultWidth = 1,
    defaultType = "'solid'"
) }}

## axisLabel(Object)

Axis tick label.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the label.

### distance(number) = 15

<ExampleUIControlNumber default="15" min="0" step="0.5" />

The distance between the label and tick line.

### formatter(string|Function)

The content formatter of scale label, which supports both string template and callback function.
Example:
```js
// use string template. the template variable {value} represent the default label text
formatter: '{value} kg'

// use function callback. the function parameters are scale values.
formatter: function (value) {
    return value + 'km/h';
}
```

{{ use: partial-text-style(
    prefix = "##",
    noAlign = true,
    noVerticalAlign = true,
    defaultColor = "'#464646'"
) }}

## pointer(Object)

Gauge chart pointer.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the pointer.

### icon(string) = 'default'

{{ use: partial-version(
    version = "5.0"
) }}

{{ use: partial-icon-path() }}

### offsetCenter(Array) = [0, 0]

{{ use: partial-version(
    version = "5.0"
) }}

<ExampleUIControlPercentVector default="0,0" dims="x,y" />

The offset position relative to the center of gauge chart. The first item of array is the horizontal offset; the second item of array is the vertical offset. It could be absolute value and also the percentage relative to the radius of gauge chart.

### length(string|number) = '60%'

<ExampleUIControlPercent default="60%" min="0" step="0.5" />

The length of pointer which could be absolute value and also the percentage relative to [radius](~series-gauge.radius).

### width(number) = 6

<ExampleUIControlNumber default="6" min="0" step="0.5" />

The width of pointer.

### keepAspect(boolean) = false

{{ use: partial-version(
    version = "5.0"
) }}

<ExampleUIControlBoolean default="false" />

Whether to keep aspect for icons in the form of `path://`.

### itemStyle(Object)

The style of pointer.

{{ use: partial-item-style(
    prefix = "###"
) }}

## anchor(Object)

{{ use: partial-version(
    version = "5.0"
) }}

The fixed point of a pointer in a dial.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the anchor.

### anchorSize(number) = 6

<ExampleUIControlNumber default="6" min="0" step="0.5" />

The size of anchor.

### itemStyle(Object)

The style of anchor.

{{ use: partial-item-style(
    prefix = "###",
    defaultColor = "'#fff'",
) }}

#### borderColor(Color) = '#5470c6'

<ExampleUIControlColor default="#5470c6" />

The border color of anchor.

## itemStyle(Object)

The style of gauge chart.

{{ use: partial-item-style(
    prefix = "##"
) }}

<!-- overwrite color -->

### color(Color) = 'auto'

The color of pointer. Defaults to use [the color of section](~series-gauge.axisLine.lineStyle.color) where the numerical value belongs to.

## emphasis(Object)

Configurations of emphasis state.

### itemStyle(*)

{{ use: partial-item-style(
    prefix = "###"
) }}

{{ use: partial-gauge-title-detail(
    prefix = "#"
) }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "gauge"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}

