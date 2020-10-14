
{{ target: partial-gauge-title-detail }}

#${prefix|default('#')} title(Object)

仪表盘标题。

##${prefix} show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示标题。

##${prefix} offsetCenter(Array) = [0, '20%']

<ExampleUIControlPercentVector default="0,20%" dims="x,y" />

相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。

{{ use: partial-text-style(
    prefix = ${prefix} + '#',
    defaultColor = "'#464646'",
    defaultFontSize = 16,
    noAlign = true,
    noVerticalAlign = true
) }}

#${prefix|default('#')} detail(Object)

仪表盘详情，用于显示数据。

##${prefix} show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示详情。

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

详情宽度。

##${prefix} height(number) = 40

<ExampleUIControlPercent default="40" min="0" step="1" />

详情高度。

##${prefix} color(Color) = '#464646'

<ExampleUIControlColor />

文本颜色，默认取数值所在的[区间的颜色](~series-gauge.axisLine.lineStyle.color)

##${prefix} backgroundColor(Color) = 'transparent'

<ExampleUIControlColor />

详情背景色。

##${prefix} borderWidth(number) = 0

<ExampleUIControlNumber min="0" step="0.5" />

详情边框宽度。

##${prefix} borderColor(Color) = '#ccc'

<ExampleUIControlColor default="#ccc" />

详情边框颜色。

##${prefix} offsetCenter(Array) = [0, '40%']

<ExampleUIControlPercentVector default="0,-40%" dims="x,y" />

相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。

##${prefix} formatter(Function|string)

格式化函数或者字符串

```js
formatter: function (value) {
    return value.toFixed(0);
}
```
