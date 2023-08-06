
{{ target: partial-axis-common-axis-line }}

#${prefix} silent(boolean) = false

Set this to `true`, to prevent interaction with the axis.

#${prefix} triggerEvent(boolean) = false

Set this to `true` to enable triggering events.

Parameters of the event include:

```ts
{
    // Component type: xAxis, yAxis, radiusAxis, angleAxis
    // Each of which has an attribute for index, e.g., xAxisIndex for xAxis
    componentType: string,
    // Value on axis before being formatted.
    // Click on value label to trigger event.
    value: '',
    // Name of axis.
    // Click on laben name to trigger event.
    name: ''
}
```

#${prefix} axisLine(Object)

Settings related to axis line.

##${prefix} show(boolean) = ${defaultShow|default(true)}

<ExampleUIControlBoolean default="true" />

Set this to `false` to prevent the axis line from showing.

{{ if: ${componentType} == 'xAxis' || ${componentType} == 'yAxis' }}
> The **value** axis doesn't show the axis line by default since `v5.0.0`, you need to explicitly set `axisLine.show` as `true` to enable it.
{{ /if }}

{{ if: ${componentType} == 'xAxis' || ${componentType} == 'yAxis' }}
##${prefix} onZero(boolean) = true

<ExampleUIControlBoolean default="true" />

Specifies whether X or Y axis lies on the other's origin position, where value is 0 on axis. Valid only if the other axis is of value type, and contains 0 value.

##${prefix} onZeroAxisIndex(number)

When multiple axes exists, this option can be used to specify which axis can be "onZero" to.
{{ /if }}

##${prefix} symbol(string|Array) = 'none'

<ExampleUIControlIcon default="none" />

Symbol of the two ends of the axis. It could be a string, representing the same symbol for two ends; or an array with two string elements, representing the two ends separately. It's set to be `'none'` by default, meaning no arrow for either end. If it is set to be `'arrow'`, there shall be two arrows. If there should only one arrow at the end, it should set to be `['none', 'arrow']`.

##${prefix} symbolSize(Array) = [10, 15]

<ExampleUIControlVector default="10,15" />

Size of the arrows at two ends. The first is the width perpendicular to the axis, the next is the width parallel to the axis.

##${prefix} symbolOffset(Array|number) = [0, 0]

<ExampleUIControlVector default="0,0" />

Arrow offset of axis. If is array, the first number is the offset of the arrow at the beginning, and the second number is the offset of the arrow at the end. If is number, it means the arrows have the same offset.

##${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = '##' + ${prefix},
    defaultColor = "'#333'",
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "line style"
) }}



{{ target: partial-axis-common-axis-label }}

#${prefix} axisLabel(Object)

Settings related to axis label.

{{ if: !${hideShow} }}
##${prefix} show(boolean) = ${defaultShow|default(true)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

Set this to `false` to prevent the axis label from appearing.
{{ /if }}

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'

<ExampleUIControlNumber min="0" step="1" />

{{ use: partial-axis-interval(
    name = "Axis label",
    isAxisLabel = true,
    componentType = ${componentType}
) }}
{{ /if }}

{{ if: ${hasInside|default(true)} }}
##${prefix} inside(boolean) = false

<ExampleUIControlBoolean />

Set this to `true` so the axis labels face the `inside` direction.
{{ /if }}

{{ if: ${componentType} !== 'angleAxis' }}
##${prefix} rotate(number) = 0

<ExampleUIControlAngle min="-90" max="90" step="1" />

Rotation degree of axis label, which is especially useful when there is no enough space for category axis.

Rotation degree is from -90 to 90.
{{ /if }}

##${prefix} margin(number) = 8

<ExampleUIControlNumber default="8" step="0.5" />

The margin between the axis label and the axis line.

##${prefix} formatter(string|Function) = null

{{ use: axis-common-formatter-desc() }}

##${prefix} showMinLabel(boolean) = null

<ExampleUIControlBoolean />

Whether to show the label of the min tick. Optional values: `true`, `false`, `null`. It is auto determined by default, that is, if labels are overlapped, the label of the min tick will not be displayed.

##${prefix} showMaxLabel(boolean) = null

<ExampleUIControlBoolean />

Whether to show the label of the max tick. Optional values: `true`, `false`, `null`. It is auto determined by default, that is, if labels are overlapped, the label of the max tick will not be displayed.

##${prefix} hideOverlap(boolean)

<ExampleUIControlBoolean />

{{ use: partial-version(
    version = "5.2.0"
) }}

Whether to hide overlapped labels.

{{ use: partial-text-style(
    prefix = '#' + ${prefix},
    defaultColor = "'#333'"
) }}

<!-- Overwrite color -->

##${prefix} color(Color|Function)

<ExampleUIControlColor />

Color of axis label is set to be [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color) by default. Callback function is supported, in the following format:

```ts
(val: string) => Color
```

Parameter is the text of label, and return value is the color. See the following example:

```ts
textStyle: {
    color: function (value, index) {
        return value >= 0 ? 'green' : 'red';
    }
}
```



{{ target: partial-axis-common-axis-tick }}

#${prefix} axisTick(Object)

Settings related to axis tick.

##${prefix} show(boolean) = ${defaultShow|default(true)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

Set this to `false` to prevent the axis tick from showing.

{{ if: ${componentType} == 'xAxis' || ${componentType} == 'yAxis' }}
> The **value** axis doesn't show the axis ticks by default since `v5.0.0`, you need to explicitly set `axisTick.show` as `true` to enable it.
{{ /if }}

{{ if: ${hasAlignWithLabel|default(true)} }}
##${prefix} alignWithLabel(boolean) = false

<ExampleUIControlBoolean default="false" />

Align axis tick with label, which is available only when `boundaryGap` is set to be `true` in category axis. See the following picture:

![600xauto](~axis-align-with-label.png)
{{ /if }}

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'

<ExampleUIControlNumber min="0" step="1" />

{{ use: partial-axis-interval(
    name = "axisTick",
    componentType = ${componentType}
) }}
{{ /if }}

{{ if: ${hasInside|default(true)} }}
##${prefix} inside(boolean) = false

<ExampleUIControlBoolean />

Set this to `true` so the axis labels face the `inside` direction.
{{ /if }}

##${prefix} length(number) = 5

<ExampleUIControlNumber min="0" step="0.5" default="5" />

The length of the axis tick.

##${prefix} lineStyle(Object)

Line style of axis ticks.

{{ use: partial-line-style(
    prefix = '##' + ${prefix},
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "axisTick"
) }}

<!-- Overwrite color -->

###${prefix} color(Color)

Color of axis label is set to be [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color) by default.



{{ target: partial-axis-common-minor-tick }}

#${prefix} minorTick(Object)

{{ use: partial-version(
    version = "4.6.0"
) }}

Settings related minor ticks.

Note: `minorTick` is not available in the `category` type axis.

Examples:

1) Using minor ticks in function plotting.
~[600x350](${galleryViewPath}line-function&edit=1&reset=1)

2) Using minor ticks in log axis.
~[600x350](${galleryViewPath}line-log&edit=1&reset=1)

##${prefix} show(boolean) = ${defaultShow|default(false)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

If show minor ticks.

##${prefix} splitNumber(number) = 5

<ExampleUIControlNumber min="1" step="1" default="5" />

Number of interval splited by minor ticks.

##${prefix} length(number) = 3

<ExampleUIControlNumber min="0" step="0.5" default="3" />

Length of minor ticks lines。

##${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = '##' + ${prefix},
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "minorTick"
) }}

<!-- Overwrite color -->

###${prefix} color(Color)

<ExampleUIControlColor />

Style configuration of minor ticks lines [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color)。



{{ target: partial-axis-common-split-line }}

#${prefix} splitLine(Object)

Split line of axis in [grid](~grid) area.

##${prefix} show(boolean) = ${defaultShow|default(true)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

Set this to `false` to prevent the splitLine from showing.
`value` type axes are shown by default, while `category` type axes are hidden.

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'

<ExampleUIControlNumber min="0" step="1" />

{{ use: partial-axis-interval(
    name = "Axis splitLine",
    componentType = ${componentType}
) }}
{{ /if }}

##${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = '##' + ${prefix},
    defaultColor = "'#333'",
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "splitLine"
) }}

<!-- overwrite color -->

###${prefix} color(Array|string) = ['#ccc']

<ExampleUIControlColor />

The color of the splitLine, which could be set separately.

SplitLine color could also be set in color array, which the split lines would take as their colors in turns.

Example:
```
splitLine: {
    lineStyle: {
        // Dark and light colors will be used in turns
        color: ['#aaa', '#ddd']
    }
}
```



{{ target: partial-axis-common-minor-split-line }}

#${prefix} minorSplitLine(Object)

{{ use: partial-version(
    version = "4.6.0"
) }}

Minor split lines of axis in the [grid](~grid) area。It will align to the [minorTick](~${componentType}.minorTick)

##${prefix} show(boolean) = ${defaultShow|default(false)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

If show minor split lines.

##${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = '##' + ${prefix},
    defaultColor = "'#eee'",
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "minorSplitLine"
) }}



{{ target: partial-axis-common-split-area }}

#${prefix} splitArea(Object)

Split area of axis in [grid](~grid) area, not shown by default.

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'

<ExampleUIControlNumber min="0" step="1" />

{{ use: partial-axis-interval(
    name = "Axis splitArea",
    componentType = ${componentType}
) }}
{{ /if }}

##${prefix} show(boolean) = ${defaultShow|default(false)}

<ExampleUIControlBoolean default="${defaultShow|default(true)}" />

Set this to `true` to show the splitArea.

##${prefix} areaStyle(Object)

Split area style.

###${prefix} color(Array) = ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']

Color of split area.
SplitArea color could also be set in color array, which the split lines would take as their colors in turns. Dark and light colors in turns are used by default.

{{ use: partial-style-shadow-opacity(
    prefix = '##' + ${prefix}
) }}



{{ target: partial-axis-type-content }}

Type of axis.

Option:
+ `'value'`
    Numerical axis, suitable for continuous data.

+ `'category'`
    Category axis, suitable for discrete category data. Category data can be auto retrieved from [series.data](~series.data) or [dataset.source](~dataset.source){{ if: ${componentType} }}, or can be specified via [${componentType}.data](~${componentType}.data){{ /if }}.

+ `'time'`
    Time axis, suitable for continuous time series data. As compared to value axis, it has a better formatting for time and a different tick calculation method. For example, it decides to use month, week, day or hour for tick based on the range of span.

+ `'log'`
    Log axis, suitable for log data.



{{ target: axis-common }}

#${prefix} type(string) = ${axisTypeDefault|default('value')}

{{ use: partial-axis-type-content(
    componentType = ${componentType}
) }}

{{ if: ${componentType} !== 'angleAxis' }}
#${prefix} name(string)

<ExampleUIControlText />

Name of axis.

#${prefix} nameLocation(string) = 'end'

<ExampleUIControlEnum options="start,middle,end" default="end" />

Location of axis name.

**Options: **
+ `'start'`
+ `'middle'` or `'center'`
+ `'end'`

#${prefix} nameTextStyle(Object)

Text style of axis name.

{{ use: partial-text-style(
    prefix = '#' + ${prefix},
    name = "axis name"
) }}

<!-- Overwrite color -->

##${prefix} color(Color)

<ExampleUIControlColor />

Color of axis name uses [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color) by default.

#${prefix} nameGap(number) = 15

<ExampleUIControlNumber step="0.5" default="15" />

Gap between axis name and axis line.

#${prefix} nameRotate(number) = null

<ExampleUIControlAngle min="-360" max="360" step="1" />

Rotation of axis name.

#${prefix} inverse(boolean) = false

<ExampleUIControlBoolean />

Set this to `true` to invert the axis.
This is a new option available from Echarts 3 and newer.
{{ /if }}

#${prefix} boundaryGap(boolean|Array)

<ExampleUIControlBoolean />

The boundary gap on both sides of a coordinate axis. The setting and behavior of category axes and non-category axes are different.

The `boundaryGap` of category axis can be set to either `true` or `false`. Default value is set to be `true`, in which case [axisTick](~${componentType}.axisTick) is served only as a separation line, and labels and data appear only in the center part of two [axis ticks](~${componentType}.axisTick), which is called *band*.

For non-category axis, including time, numerical value, and log axes, `boundaryGap` is an array of two values, representing the spanning range between minimum and maximum value. The value can be set in numeric value or relative percentage, which becomes invalid after setting [min](~${componentType}.min) and [max](~${componentType}.max).
**Example: **
```ts
boundaryGap: ['20%', '20%']
```

#${prefix} min(number|string|Function) = null

<ExampleUIControlNumber />

The minimum value of axis.

It can be set to a special value `'dataMin'` so that the minimum value on this axis is set to be the minimum label.

It will be automatically computed to make sure axis tick is equally distributed when not set.

In category axis, it can also be set as the ordinal number. For example, if a catergory axis has `data: ['categoryA', 'categoryB', 'categoryC']`, and the ordinal `2` represents `'categoryC'`. Moreover, it can be set as negative number, like `-3`.

If `min` is specified as a function, it should return a min value, like:
```ts
min: function (value) {
    return value.min - 20;
}
```

`value` is an object, containing the `min` value and `max` value of the data. This function should return the min value of axis, or return `null`/`undefined` to make echarts use the auto calculated min value (`null`/`undefined` return is only supported since `v4.8.0`).

#${prefix} max(number|string|Function) = null

<ExampleUIControlNumber />

The maximum value of axis.

It can be set to a special value `'dataMax'` so that the minimum value on this axis is set to be the maximum label.

It will be automatically computed to make sure axis tick is equally distributed when not set.

In category axis, it can also be set as the ordinal number. For example, if a catergory axis has `data: ['categoryA', 'categoryB', 'categoryC']`, and the ordinal `2` represents `'categoryC'`. Moreover, it can be set as negative number, like `-3`.

If `max` is specified as a function, it should return a max value, like:
```ts
max: function (value) {
    return value.max - 20;
}
```

`value` is an object, containing the `min` value and `max` value of the data. This function should return the max value of axis, or return `null`/`undefined` to make echarts use the auto calculated max value (`null`/`undefined` return is only supported since `v4.8.0`).

#${prefix} scale(boolean) = false

<ExampleUIControlBoolean />

It is available only in numerical axis, i.e., [type](~${componentType}.type): 'value'.

It specifies whether not to contain zero position of axis compulsively. When it is set to be `true`, the axis may not contain zero position, which is useful in the scatter chart for both value axes.

This configuration item is unavailable when the [min](~${componentType}.min) and [max](~${componentType}.max) are set.

#${prefix} splitNumber(number) = 5

<ExampleUIControlNumber min="1" step="1" default="5" />

Number of segments that the axis is split into. Note that this number serves only as a recommendation, and the true segments may be adjusted based on readability.

This is unavailable for category axis.

#${prefix} minInterval(number) = 0

<ExampleUIControlNumber />

Minimum gap between split lines.

For example, it can be set to be `1` to make sure axis label is show as integer.

```ts
{
    minInterval: 1
}
```

It is available only for axis of [type](~${componentType}.type) 'value' or 'time'.

#${prefix} maxInterval(number)

<ExampleUIControlNumber />

Maximum gap between split lines.

For example, in time axis ([type](~${componentType}.type) is 'time'), it can be set to be `3600 * 24 * 1000` to make sure that the gap between axis labels is less than or equal to one day.

```ts
{
    maxInterval: 3600 * 1000 * 24
}
```

It is available only for axis of [type](~${componentType}.type) 'value' or 'time'.

#${prefix} interval(number)

<ExampleUIControlNumber />

Compulsively set segmentation interval for axis.

As [splitNumber](~${componentType}.splitNumber) is a recommendation value, the calculated tick may not be the same as expected. In this case, interval should be used along with [min](~${componentType}.min) and [max](~${componentType}.max) to compulsively set tickings. But in most cases, we do not suggest using this, our automatic calculation is enough for most situations.

This is unavailable for category axis. Timestamp should be passed for [type](~${componentType}.type): 'time' axis. Logged value should be passed for [type](~${componentType}.type): 'log' axis.

#${prefix} logBase(number) = 10

<ExampleUIControlNumber default="10" />

Base of logarithm, which is valid only for numeric axes with [type](~${componentType}.type): 'log'.

{{ use: partial-axis-common-axis-line(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ use: partial-axis-common-axis-tick(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ use: partial-axis-common-minor-tick(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ use: partial-axis-common-axis-label(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ if: ${hasSplitLineAndArea} }}
{{ use: partial-axis-common-split-line(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ use: partial-axis-common-minor-split-line(
    prefix = ${prefix},
    componentType = ${componentType}
) }}

{{ use: partial-axis-common-split-area(
    prefix = ${prefix},
    componentType = ${componentType}
) }}
{{ /if }}

#${prefix} data(Array)

Category data, available in [type](~${componentType}.type): 'category' axis.

If [type](~${componentType}.type) is not specified, but `axis.data` is specified, the [type](~${componentType}.type) is auto set as `'category'`.

If [type](~${componentType}.type) is specified as `'category'`, but `axis.data` is not specified, `axis.data` will be auto collected from [series.data](~series.data). It brings convenience, but we should notice that `axis.data` provides then value range of the `'category'` axis. If  it is auto collected from [series.data](~series.data), Only the values appearing in [series.data](~series.data) can be collected. For example, if [series.data](~series.data) is empty, nothing will be collected.


Example:

```ts
// Name list of all categories
data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// Each item could also be a specific configuration item.
// In this case, `value` is used as the category name.
data: [{
    value: 'Monday',
    // Highlight Monday
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
}, 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```

##${prefix} value(string)

Name of a category.

##${prefix} textStyle(Object)

Text style of the category.

{{ use: partial-text-style(
    prefix = '##' + ${prefix}
) }}

{{ if: !${noAxisPointer} }}
#${prefix} axisPointer(Object)

axisPointer settings on the axis.

{{ use: partial-axisPointer-common(
    prefix = "#" + ${prefix}
) }}
{{ /if }}

{{ use: partial-animation(
    prefix = ${prefix}
) }}



{{ target: partial-axis-interval }}

Interval of ${name}, which is available in category axis. {{ if: !${isAxisLabel} }} is set to be the same as [axisLabel.interval](~${componentType}.axisLabel.interval) by default.{{ /if }}

It uses a strategy that labels do not overlap by default.

You may set it to be 0 to display all labels compulsively.

If it is set to be 1, it means that labels are shown once after one label. And if it is set to be 2, it means labels are shown once after two labels, and so on.

On the other hand, you can control by callback function, whose format is shown below:
```ts
(index:number, value: string) => boolean
```
The first parameter is index of category, and the second parameter is the name of category. The return values decides whether to display label.



{{ target: axis-common-formatter-desc }}

Formatter of axis label, which supports string template and callback function.

Example:
```ts
// Use string template; template variable is the default label of axis {value}
formatter: '{value} kg'
// Use callback.
formatter: function (value, index) {
    return value + 'kg';
}
```

---

For axes of time [type](~${componentType}.type): `'time'`, `formatter` supports the following forms:

- **String Templates**: an easy and fast way to make frequently used date/time template, formed in `string`
- **Callback Functions**: customized formatter to make complex format, formed in `Function`
- **Cascading Templates**: to adopt different formatters for different time granularity, formed in `object`

Next, we are going to introduce these three forms one by one.

** String Templates **

Using string templates is an easy way to format date/time with frequently used formats. If it can be used to make what you want, you are advised to do so. If not, you could then consider the others. Supported formats are:

| Group        | Template | Value (EN)                                                    | Value (ZH)                                                               |
|--------------|----------|----------------------------------------------------------------|----------------------------------------------------------------------------|
| Year         | {yyyy}     | e.g., 2020, 2021, ...                                          | 例：2020, 2021, ...                                                        |
|              | {yy}       | 00-99                                                          | 00-99                                                                      |
| Quarter      | {Q}        | 1, 2, 3, 4                                                     | 1, 2, 3, 4                                                                 |
| Month        | {MMMM}     | e.g., January, February, ...                                   | 一月、二月、…… |
|              | {MMM}      | e.g., Jan, Feb, ...                                            | 1月、2月、……              |
|              | {MM}       | 01-12                                                          | 01-12                                                                      |
|              | {M}        | 1-12                                                           | 1-12                                                                       |
| Day of Month | {dd}       | 01-31                                                          | 01-31                                                                      |
|              | {d}        | 1-31                                                           | 1-31                                                                       |
| Day of Week  | {eeee}     | Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday | 星期日、星期一、星期二、星期三、星期四、星期五、星期六                     |
|              | {ee}       | Sun, Mon, Tues, Wed, Thu, Fri, Sat                             | 日、一、二、三、四、五、六                                                 |
|              | {e}        | 1-54                                                           | 1-54                                                                       |
| Hour         | {HH}       | 00-23                                                          | 00-23                                                                      |
|              | {H}        | 0-23                                                           | 0-23                                                                       |
|              | {hh}       | 01-12                                                          | 01-12                                                                      |
|              | {h}        | 1-12                                                           | 1-12                                                                       |
| Minute       | {mm}       | 00-59                                                          | 00-59                                                                      |
|              | {m}        | 0-59                                                           | 0-59                                                                       |
| Second       | {ss}       | 00-59                                                          | 00-59                                                                      |
|              | {s}        | 0-59                                                           | 0-59                                                                       |
| Millisecond  | {SSS}      | 000-999                                                        | 000-999                                                                    |
|              | {S}        | 0-999                                                          | 0-999                                                                      |

> Templates of other languages can be found in [the language package](https://github.com/apache/echarts/tree/master/src/i18n). Please refer to [echarts.registerLocale](api.html#echarts.registerLocale) to register a language.

Example:
```ts
formatter: '{yyyy}-{MM}-{dd}' // gets labels like '2020-12-02'
formatter: 'Day {d}' // gets labels like 'Day 2'
```

** Callback Functions **

Callback functions can be used to get different formats for different axis tick values. Sometimes, if you have complex date/time formatting requirement, third-party libraries like [Moment.js](https://momentjs.com/) or [date-fns](https://date-fns.org/) can be used to return formatted labels.

Example:
```ts
// Use callback function; function parameters are axis index
formatter: function (value, index) {
    // Formatted to be month/day; display year only in the first label
    var date = new Date(value);
    var texts = [(date.getMonth() + 1), date.getDate()];
    if (index === 0) {
        texts.unshift(date.getFullYear());
    }
    return texts.join('/');
}
```

** Cascading Templates **

Sometimes, we wish to use different formats for different time granularity. For example, in a quarter-year chart, we may wish to see the month name with the first date of the month, while see the date name with others. This can be made with:

Example:
```ts
formatter: {
    month: '{MMMM}', // Jan, Feb, ...
    day: '{d}' // 1, 2, ...
}
```

Supported levels and their default formatters are:
```ts
{
    year: '{yyyy}',
    month: '{MMM}',
    day: '{d}',
    hour: '{HH}:{mm}',
    minute: '{HH}:{mm}',
    second: '{HH}:{mm}:{ss}',
    millisecond: '{hh}:{mm}:{ss} {SSS}',
    none: '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}'
}
```

Let's take `day` for example. When a tick value is `0` for its hour, minute, second, and millisecond, `day` level will be used to make formatter. `none` is used when no other level fulfills, which is for tick values with millisecond values other than `0`.

** Rich Text **

The above three forms all support rich text, so it can be used to make some complex effects.

Example:
```ts
xAxis: {
    type: 'time',
    axisLabel: {
        formatter: {
            // Display year and month information on the first data of a year
            year: '{yearStyle|{yyyy}}\n{monthStyle|{MMM}}',
            month: '{monthStyle|{MMM}}'
        },
        rich: {
            yearStyle: {
                // Make yearly text more standing out
                color: '#000',
                fontWeight: 'bold'
            },
            monthStyle: {
                color: '#999'
            }
        }
    }
},
```

The above example can also be made with a callback function:

Example:
```ts
xAxis: {
    type: 'time',
    axisLabel: {
        formatter: function (value) {
            const date = new Date(value);
            const yearStart = new Date(value);
            yearStart.setMonth(0);
            yearStart.setDate(1);
            yearStart.setHours(0);
            yearStart.setMinutes(0);
            yearStart.setSeconds(0);
            yearStart.setMilliseconds(0);
            // Whether a tick value is the start of a year
            if (date.getTime() === yearStart.getTime()) {
                return '{year|' + date.getFullYear() + '}\n'
                    + '{month|' + (date.getMonth() + 1) + '月}';
            }
            else {
                return '{month|' + (date.getMonth() + 1) + '月}'
            }
        },
        rich: {
            year: {
                color: '#000',
                fontWeight: 'bold'
            },
            month: {
                color: '#999'
            }
        }
    }
},
```
