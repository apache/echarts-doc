
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

### lineStyle(Object)

The style of the axis line of gauge chart.

#### color(Array)

The axis line of gauge chart can be divided to several segments in different colors. The end position and color of each segment can be expressed by an array.

Default value:
```js
[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
```

#### width(number) = 30

The width of axis line.

{{ use: partial-style-shadow-opacity(
    prefix = "###"
) }}

## splitLine(Object)

The style of split line.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the split line.

### length(number|string) = 30

<ExampleUIControlPercent default="30" min="0" step="0.5" />

The length of split line, can be a pecentage value relative to radius.

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = '###',
    defaultColor = '#eee',
    defaultWidth = 2,
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

### length(number|string) = 8

<ExampleUIControlPercent default="8" min="0" step="0.5" />

The length of tick line, can be a pecentage value relative to radius.

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = '###',
    defaultColor = '#eee',
    defaultWidth = 1,
    defaultType = "'solid'"
) }}

## axisLabel(Object)

Axis tick label.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the label.

### distance(number) = 5

<ExampleUIControlNumber default="5" min="0" step="0.5" />

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
    noVerticalAlign = true
) }}

## pointer(Object)

Gauge chart pointer.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the pointer.

### length(string|number) = '80%'

<ExampleUIControlPercent default="80%" min="0" step="0.5" />

The length of pointer which could be absolute value and also the percentage relative to [radius](~series-gauge.radius).

### width(number) = 8

<ExampleUIControlNumber default="8" min="0" step="0.5" />

The width of pointer.

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

## title(Object)

The title of gauge chart.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the title.

### offsetCenter(Array) = [0, '-40%']

<ExampleUIControlPercentVector default="0,-40%" dims="x,y" />

The offset position relative to the center of gauge chart. The first item of array is the horizontal offset; the second item of array is the vertical offset. It could be absolute value and also the percentage relative to the radius of gauge chart.

{{ use: partial-text-style(
    prefix = "##",
    defaultColor = "'#333'",
    defaultFontSize = 15,
    noAlign = true,
    noVerticalAlign = true
) }}

## detail(Object)

The detail about gauge chart which is used to show data.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the details.

### width(number) = 100

<ExampleUIControlPercent default="100" min="0" step="1" />

The width of detail.

### height(number) = 40

<ExampleUIControlPercent default="40" min="0" step="1" />

The height of detail.

### backgroundColor(Color) = 'transparent'

<ExampleUIControlColor />

The background color of detail.

### borderWidth(number) = 0

<ExampleUIControlNumber min="0" step="0.5" />

The border width of detail.

### borderColor(Color) = '#ccc'

<ExampleUIControlColor default="#ccc" />

The border color of detail.

### offsetCenter(Array) = [0, '40%']

<ExampleUIControlPercentVector default="0,-40%" dims="x,y" />

The offset position relative to the center of gauge chart. The first item of array is the horizontal offset; the second item of array is the vertical offset. It could be absolute value and also the percentage relative to the radius of gauge chart.

### formatter(Function|string)

Formatter is used to format detail, which supports string template and callback function.

```js
formatter: function (value) {
    return value.toFixed(0);
}
```

{{ use: partial-text-style(
    prefix = "##",
    defaultColor = "'auto'",
    defaultFontSize = 15,
    noAlign = true,
    noVerticalAlign = true
) }}

<!-- overwrite color -->

#### color(Color) = 'auto'

<ExampleUIControlColor />

The text color. Defaults to use [the color of section](~series-gauge.axisLine.lineStyle.color) where the numerical value belongs to.

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

