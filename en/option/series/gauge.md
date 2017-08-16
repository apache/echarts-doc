
{{target: series-gauge}}

# series.gauge(Object)

**Gauge chart**

**Example: **
~[600x500](${galleryViewPath}gauge-car)

## type(string) = 'gauge'

{{ use: partial-series-name() }}

{{ use: partial-circular-layout }}
<!-- overwrite radius -->
## radius(number|string) = '75%'
The radius of gauge chart. It can be a percentage value of the smaller of container half width and half height, also can be an absolute value.

{{ use partial-legend-hover-link }}

## startAngle(number) = 225
The start angle of gauge chart. The direct right side of [circle center](~series-gauge.center) is `0` degree, the right above it is `90` degree, the direct left side of it is `180` degree.

## endAngle(number) = -45
The end angle of gauge chart.

## clockwise(boolean) = true
Whether the scale in gauge chart increases clockwise.

## min(number) = 0
The minimum data value which map to [minAngle](~series-gauge.minAngle).

## max(number) = 100
The maximum data value which map to  [maxAngle](~series-gauge.maxAngle).

## splitNumber(number) = 10
The number of split segments of gauge chart scale.

## axisLine(Object)
The related configuration about the axis line of gauge chart.
### show(boolean) = true
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
{{ use: partial-style-shadow-opacity(prefix="###") }}

## splitLine(Object)
The style of split line.
### show(boolean) = true
Whether to show the split line.
### length(number|string) = 30
The length of split line, can be a pecentage value relative to radius.
### lineStyle(Object)
{{ use: partial-line-style(
    prefix='###',
    defaultColor='#eee',
    defaultWidth=2,
    defaultType="'solid'"
) }}

## axisTick(Object)
The tick line style.
### show(boolean) = true
Whether to show the scale.
### splitNumber(number) = 5
The split scale number between split line.
### length(number|string) = 8
The length of tick line, can be a pecentage value relative to radius.
### lineStyle(Object)
{{ use: partial-line-style(
    prefix='###',
    defaultColor='#eee',
    defaultWidth=1,
    defaultType="'solid'"
) }}

## axisLabel(Object)
Axis tick label.
### show(boolean) = true
Whether to show the label.
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
{{ use: partial-text-style(prefix="##") }}


## pointer(Object)
Gauge chart pointer.
### show(boolean) = true
Whether to show the pointer.
### length(string|number) = '80%'
The length of pointer which could be absolute value and also the percentage relative to [radius](~series-gauge.radius).
### width(number) = 8
The width of pointer.

## itemStyle(Object)
The style of gauge chart.
### normal(Object)
{{ use: partial-item-style(prefix="###") }}
<!-- overwrite color -->
#### color(Color) = 'auto'
The color of pointer. Defaults to use [the color of section](~series-gauge.axisLine.lineStyle.color) where the numerical value belongs to.
### emphasis(Object)
{{ use: partial-item-style(prefix="###") }}

## title(Object)
The title of gauge chart.
### show(boolean) = true
Whether to show the title.
### offsetCenter(Array) = [0, '-40%']
The offset position relative to the center of gauge chart. The first item of array is the horizontal offset; the second item of array is the vertical offset. It could be absolute value and also the percentage relative to the radius of gauge chart.
{{ use: partial-text-style(
    prefix="##",
    defaultColor = "'#333'",
    defaultFontSize = 15
) }}

## detail(Object)
The detail about gauge chart which is used to show data.
### show(boolean) = true
Whether to show the details.
### width(number) = 100
The width of detail.
### height(number) = 40
The height of detail.
### backgroundColor(Color) = 'transparent'
The background color of detail.
### borderWidth(number) = 0
The border width of detail.
### borderColor(Color) = '#ccc'
The border color of detail.
### offsetCenter(Array) = [0, '40%']
The offset position relative to the center of gauge chart. The first item of array is the horizontal offset; the second item of array is the vertical offset. It could be absolute value and also the percentage relative to the radius of gauge chart.
{{ use: partial-text-style(
    prefix="##",
    defaultColor = "'auto'",
    defaultFontSize = 15
) }}
<!-- overwrite color -->
#### color(Color) = 'auto'
The text color. Defaults to use [the color of section](~series-gauge.axisLine.lineStyle.color) where the numerical value belongs to.

{{use: partial-marker(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    seriesType="gauge"
)}}

{{use:partial-animation(prefix="#")}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}
