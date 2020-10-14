
{{ target: partial-gauge-title-detail }}

#${prefix|default('#')} title(Object)

The title of gauge chart.

##${prefix} show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the title.

##${prefix} offsetCenter(Array) = [0, '20%']

<ExampleUIControlPercentVector default="0,20%" dims="x,y" />

The offset position relative to the center of gauge chart. The first item of array is the horizontal offset; the second item of array is the vertical offset. It could be absolute value and also the percentage relative to the radius of gauge chart.

{{ use: partial-text-style(
    prefix = ${prefix} + '#',
    defaultColor = "'#464646'",
    defaultFontSize = 16,
    noAlign = true,
    noVerticalAlign = true
) }}

#${prefix|default('#')} detail(Object)

The detail about gauge chart which is used to show data.

##${prefix} show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the details.

{{ use: partial-text-style(
    prefix = ${prefix} + '#',
    defaultColor = "'#464646'",
    defaultFontSize = 30,
    defaultFontWeight = "'bold'",
    defaultLineHeight = 30,
    noAlign = true,
    noVerticalAlign = true
) }}

##${prefix} width(number) = 100

<ExampleUIControlPercent default="100" min="0" step="1" />

The width of detail.

##${prefix} height(number) = 40

<ExampleUIControlPercent default="40" min="0" step="1" />

The height of detail.

##${prefix} color(Color) = '#464646'

<ExampleUIControlColor />

The text color. Defaults to use [the color of section](~series-gauge.axisLine.lineStyle.color) where the numerical value belongs to.

##${prefix} backgroundColor(Color) = 'transparent'

<ExampleUIControlColor />

The background color of detail.

##${prefix} borderWidth(number) = 0

<ExampleUIControlNumber min="0" step="0.5" />

The border width of detail.

##${prefix} borderColor(Color) = '#ccc'

<ExampleUIControlColor default="#ccc" />

The border color of detail.

##${prefix} offsetCenter(Array) = [0, '40%']

<ExampleUIControlPercentVector default="0,40%" dims="x,y" />

The offset position relative to the center of gauge chart. The first item of array is the horizontal offset; the second item of array is the vertical offset. It could be absolute value and also the percentage relative to the radius of gauge chart.

##${prefix} formatter(Function|string)

Formatter is used to format detail, which supports string template and callback function.

```js
formatter: function (value) {
    return value.toFixed(0);
}
```