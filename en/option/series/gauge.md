
{{target: series-gauge}}

# series.gauge(Object)

**gauge board**

**sample：**
~[600x500](${galleryViewPath}gauge-car)

## type(string) = 'gauge'

{{ use: partial-series-name() }}

{{ use: partial-circular-layout }}
<!-- overwrite radius -->
## radius(number|string) = '75%'
the radius of gauge board. It could be the half percentage of the smaller item compared with the height and width of container and also could be absolute value. 

{{ use partial-legend-hover-link }}

## startAngle(number) = 225
the start angle of gauge board. The direct right side of [circle center](~series-gauge.center) is `0` degree，the right above it is `90` degree，the direct left side of it is `180` degree.

## endAngle(number) = -45
the end angle of gauge board.

## clockwise(boolean) = true
Whether the scale in gauge board increases clockwise.

## min(number) = 0
the minimum data value which map to [minAngle](~series-gauge.minAngle).

## max(number) = 100
the maximum data value which map to  [maxAngle](~series-gauge.maxAngle).

## splitNumber(number) = 10
the number about split segments of gauge board scale.

## axisLine(Object)
the related configuration about the axis line of gauge board.
### show(boolean) = true
Whether to show the axis line of gauge board.
### lineStyle(Object)
the style of the axis line of gauge board.
#### color(Array)
the axis line of gauge board could be divided to a lot of segments in different colors. The end position and color of each segment could be expressed by an array.

Default value：
```js
[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
```
#### width(number) = 30
the width of axis line.
{{ use: partial-style-shadow-opacity(prefix="###") }}

## splitLine(Object)
the style of split line.
### show(boolean) = true
Whether to show the split line.
### length(number|string) = 30
the length of split line which supports the pecentage of relative radius.
### lineStyle(Object)
{{ use: partial-line-style(
    prefix='###',
    defaultColor='#eee',
    defaultWidth=2,
    defaultType="'solid'"
) }}

## axisTick(Object)
the scale style.
### show(boolean) = true
Whether to show the scale.
### splitNumber(number) = 5
the split scale number between split line.
### length(number|string) = 8
the length of scale line which supports the pecentage of relative radius. 
### lineStyle(Object)
{{ use: partial-line-style(
    prefix='###',
    defaultColor='#eee',
    defaultWidth=1,
    defaultType="'solid'"
) }}

## axisLabel(Object)
scale label.
### show(boolean) = true
Whether to show the label.
### formatter(string|Function)
the content formatter of scale label, which supports both character string template and callback function.
Example:
```js
// use character string template. the template variable defaults to be label {value}
formatter: '{value} kg'

// use function template. the function parameters are respectively scale values.  
formatter: function (value) {
    return value + 'km/h';
}
```
### textStyle(Object)
{{ use: partial-text-style(prefix="###") }}
### color(Color) = 'auto'
scale color


## pointer(Object)
gauge board pointer.
### show(boolean) = true
Whether to show the pointer.
### length(string|number) = '80%'
the length of pointer which could be absolute value and also the percentage relative to [radius](~series-gauge.radius).
### width(number) = 8
the width of pointer.

## itemStyle(Object)
the style of gauge board.
### normal(Object)
{{ use: partial-item-style(prefix="###") }}
<!-- overwrite color -->
#### color(Color) = 'auto'
the color of pointer which defaults to adopt [the color of interzone](~series-gauge.axisLine.lineStyle.color) where the numerical value belongs to.
### emphasis(Object)
{{ use: partial-item-style(prefix="###") }}

## title(Object)
the title of gauge board.
### show(boolean) = true
Whether to show the title.
### offsetCenter(Array) = [0, '-40%']
the offset position relative to the center of gauge board. The first item of array is the horizontal offset; the second item of array is the vertical offset. It could be absolute value and also the percentage relative to the radius of gauge board. 
### textStyle(Object)
{{ use: partial-text-style(
    prefix="###",
    defaultColor = "'#333'",
    defaultFontSize = 15
) }}

## detail(Object)
the detail about gauge board which is used to show data.
### show(boolean) = true
Whether to show the details.
### width(number) = 100
the width of detail.
### height(number) = 40
the height of detail.
### backgroundColor(Color) = 'transparent'
the background color of detail.
### borderWidth(number) = 0
the border width of detail.
### borderColor(Color) = '#ccc'
the border color of detail.
### offsetCenter(Array) = [0, '40%']
the offset position relative to the center of gauge board. The first item of array is the horizontal offset; the second item of array is the vertical offset. It could be absolute value and also the percentage relative to the radius of gauge board. 
### textStyle(Object)
{{ use: partial-text-style(
    prefix="###",
    defaultColor = "'auto'",
    defaultFontSize = 15
) }}
<!-- overwrite color -->
#### color(Color) = 'auto'
the text color, which defaults to adopt [the color of interzone](~series-gauge.axisLine.lineStyle.color) where the numerical value belongs to.

{{use: partial-mark-point(
    prefix="#",
    seriesType="gauge"
)}}
{{use: partial-mark-line(
    prefix="#",
    seriesType="gauge"
)}}

{{use:partial-animation(prefix="#")}}
