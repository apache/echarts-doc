{{target: partial-axis-common-axis-line}}
#${prefix} silent(boolean) = false
True for axis that cannot be interacted with.

#${prefix} triggerEvent(boolean) = false

Whether the labels of axis triggers and reacts to mouse events.

Parameters of event includes:

```js
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

Whether to show the axis line or not.


{{ if: ${componentType} == 'xAxis' || ${componentType} == 'yAxis' }}
##${prefix} onZero(boolean) = true
Specifies whether X or Y axis lies on the other's origin position, where value is 0 on axis. Valid only if the other axis is of value type, and contains 0 value.

##${prefix} onZeroAxisIndex(number)
When mutiple axes exists, this option can be used to specify which axis can be "onZero" to.
{{ /if }}

##${prefix} symbol(string|Array) = 'none'
Symbol of the two ends of the axis. It could be a string, representing the same symbol for two ends; or an array with two string elements, representing the two ends separately. It's set to be `'none'` by default, meaning no arrow for either end. If it is set to be `'arrow'`, there shall be two arrows. If there should only one arrow at the end, it should set to be `['none', 'arrow']`.

##${prefix} symbolSize(Array) = [10, 15]
Size of the arrows at two ends. The first is the width perpendicular to the axis, the next is the width parallel to the axis.

##${prefix} symbolOffset(Array|number) = [0, 0]
Arrow offset of axis. If is array, the first number is the offset of the arrow at the beginning, and the second number is the offset of the arrow at the end. If is number, it means the arrows have the same offset.

##${prefix} lineStyle(Object)
{{ use: partial-line-style(prefix='##' + ${prefix}, defaultColor="'#333'", defaultWidth=1, defaultType="'solid'", name="line style") }}


{{target: partial-axis-common-axis-label}}
#${prefix} axisLabel(Object)

Settings related to axis label.

{{if: !${hideShow} }}

##${prefix} show(boolean) = ${defaultShow|default(true)}

Whether to show the label of axis label or not.

{{ /if }}

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'
{{ use: partial-axis-interval(
    name="Axis label",
    isAxisLabel=true,
    componentType=${componentType}
) }}
{{ /if }}

##${prefix} inside(boolean) = false
Specifies whether the axis label faces Inside. False by default.

{{ if: ${componentType} !== 'angleAxis' }}
##${prefix} rotate(number) = 0
Rotation degree of axis label, which is especially useful when there is no enough space for category axis.

Rotation degree is from -90 to 90.

{{ /if }}

##${prefix} margin(number) = 8

The margin between the axis label and the axis line.

##${prefix} formatter(string|Function) = null

{{use: axis-common-formatter-desc}}

##${prefix} showMinLabel(boolean) = null
Whether to show the label of the min tick. Optional values: `true`, `false`, `null`. It is auto determined by default, that is, if labels are overlapped, the label of the min tick will not be displayed.

##${prefix} showMaxLabel(boolean) = null
Whether to show the label of the max tick. Optional values: `true`, `false`, `null`. It is auto determined by default, that is, if labels are overlapped, the label of the max tick will not be displayed.

{{ use: partial-text-style(
    prefix='#' + ${prefix},
    defaultColor="'#333'"
)}}


<!-- Overwrite color -->
##${prefix} color(Color|Function)

Color of axis label is set to be [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color) by default. Callback function is supported, in the following format:

```js
(val: string) => Color
```

Parameter is the text of label, and return value is the color. See the following example:

```js
textStyle: {
    color: function (value, index) {
        return value >= 0 ? 'green' : 'red';
    }
}
```



{{target: partial-axis-common-axis-tick}}

#${prefix} axisTick(Object)
Settings related to axis tick.

##${prefix} show(boolean) = ${defaultShow|default(true)}
Whether to show the axis tick.

##${prefix} alignWithLabel(boolean) = false
Align axis tick with label, which is available only when `boundaryGap` is set to be `true` in category axis. See the following picture:

![600xauto](~axis-align-with-label.png)

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'
{{ use: partial-axis-interval(
    name="axisTick",
    componentType=${componentType}
) }}
{{ /if }}
##${prefix} inside(boolean) = false
Specifies whether the axis label faces Inside. False by default.
##${prefix} length(number) = 5
The length of the axis tick.

##${prefix} lineStyle(Object)
{{ use: partial-line-style(prefix='##' + ${prefix}, defaultColor="'#333'", defaultWidth=1, defaultType="'solid'", name="axisTick") }}
<!-- Overwrite color -->
###${prefix} color(Color)

Color of axis label is set to be [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color) by default.




{{target: partial-axis-common-split-line}}

#${prefix} splitLine(Object)
SplitLine of axis in [grid](~grid) area.

##${prefix} show(boolean) = ${defaultShow|default(true)}

Whether to show the splitLine. Value axes are shown by default, while category axes are not.

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'
{{ use: partial-axis-interval(
    name="Axis splitLine",
    componentType=${componentType}
) }}
##${prefix} lineStyle(Object)
{{ /if }}

{{ use: partial-line-style(prefix='##' + ${prefix}, defaultColor="'#333'", defaultWidth=1, defaultType="'solid'", name="splitLine") }}

<!-- overwrite color -->
###${prefix} color(Array|string) = ['#ccc']
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





{{target: partial-axis-common-split-area}}

#${prefix} splitArea(Object)

Split area of axis in [grid](~grid) area, not shown by default.


{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'
{{ use: partial-axis-interval(
    name="Axis splitArea",
    componentType=${componentType}
) }}
{{ /if }}

##${prefix} show(boolean) = ${defaultShow|default(false)}
Whether to show the splitArea.
##${prefix} areaStyle(Object)
Split area style.
###${prefix} color(Array) = ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
Color of split area.
SplitArea color could also be set in color array, which the split lines would take as their colors in turns. Dark and light colors in turns are used by default.
{{ use:partial-style-shadow-opacity(prefix='##' + ${prefix}) }}



{{target: axis-common}}

#${prefix} type(string) = ${axisTypeDefault|default('value')}

Type of axis

Option:
+ `'value'`
    Numerical axis, suitable for continuous data.

+ `'category'`
    Category axis, suitable for discrete category data. Data should only be set via [data](~${componentType}.data) for this type.

+ `'time'`
    Time axis, suitable for continuous time series data. As compared to value axis, it has a better formatting for time and a different tick calculation method. For example, it decides to use month, week, day or hour for tick based on the range of span.

+ `'log'`
    Log axis, suitable for log data.

{{ if: ${componentType} !== 'angleAxis' }}
#${prefix} name(string)

Name of axis.

#${prefix} nameLocation(string) = 'end'

Location of axis name.

**Options: **
+ `'start'`
+ `'middle'` or `'center'`
+ `'end'`

#${prefix} nameTextStyle(Object)

Text style of axis name.

{{use: partial-text-style(prefix='#' + ${prefix}, name="axis name")}}
<!-- Overwrite color -->
##${prefix} color(Color)
Color of axis name uses [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color) by default.

#${prefix} nameGap(number) = 15

Gap between axis name and axis line.

#${prefix} nameRotate(number) = null

Rotation of axis name.

#${prefix} inverse(boolean) = false

Whether axis is inversed. New option from ECharts 3.

{{/if}}

#${prefix} boundaryGap(boolean|Array)
The boundary gap on both sides of a coordinate axis. The setting and behavior of category axes and non-category axes are different.

The `boundaryGap` of category axis can be set to either `true` or `false`. Default value is set to be `true`, in which case [axisTick](~${componentType}.axisTick) is served only as a separation line, and labels and data appear only in the center part of two [axis ticks](~${componentType}.axisTick), which is called *band*.

For non-category axis, including time, numerical value, and log axes, `boundaryGap` is an array of two values, representing the spanning range between minimum and maximum value. The value can be set in numeric value or relative percentage, which becomes invalid after setting [min](~${componentType}.min) and [max](~${componentType}.max).
**Example: **
```js
boundaryGap: ['20%', '20%']
```

#${prefix} min(number|string) = null

The minimun value of axis.

It can be set to a special value `'dataMin'` so that the minimum value on this axis is set to be the minimum label.

It will be automatically computed to make sure axis tick is equally distributed when not set.

In category axis, it can also be set as the ordinal number. For example, if a catergory axis has `data: ['categoryA', 'categoryB', 'categoryC']`, and the ordinal `2` represents `'categoryC'`. Moreover, it can be set as negative number, like `-3`.

#${prefix} max(number|string) = null

The maximum value of axis.

It can be set to a special value `'dataMax'` so that the minimum value on this axis is set to be the maximum label.

It will be automatically computed to make sure axis tick is equally distributed when not set.

In category axis, it can also be set as the ordinal number. For example, if a catergory axis has `data: ['categoryA', 'categoryB', 'categoryC']`, and the ordinal `2` represents `'categoryC'`. Moreover, it can be set as negative number, like `-3`.

#${prefix} scale(boolean) = false

It is available only in numerical axis, i.e., [type](~${componentType}.type): 'value'.

It specifies whether not to contain zero position of axis compulsively. When it is set to be `true`, the axis may not contain zero position, which is useful in the scatter chart for both value axes.

This configuration item is unavailable when the [min](~${componentType}.min) and [max](~${componentType}.max) are set.

#${prefix} splitNumber(number) = 5

Number of segments that the axis is split into. Note that this number serves only as a recommendation, and the true segments may be adjusted based on readability.

This is unavailable for category axis.

#${prefix} minInterval(number) = 0

Minimum gap between split lines.

For example, it can be set to be `1` to make sure axis label is show as integer.

```js
{
    minInterval: 1
}
```

It is available only for axis of [type](~${componentType}.type) 'value' or 'time'.

#${prefix} minInterval(number)

Maximum gap between split lines.

For example, in time axis ([type](~${componentType}.type) is 'time'), it can be set to be `3600 * 24 * 1000` to make sure that the gap between axis labels is less than or equal to one day.

```js
{
    maxInterval: 3600 * 1000 * 24
}
```

It is available only for axis of [type](~${componentType}.type) 'value' or 'time'.

#${prefix} interval(number)

Compulsively set segmentation interval for axis.

As [splitNumber](~${componentType}.splitNumber) is a recommendation value, the calculated tick may not be the same as expected. In this case, interval should be used along with [min](~${componentType}.min) and [max](~${componentType}.max) to compulsively set tickings. But in most cases, we do not suggest using this, out automatic calculation is enough for most situations.

This is unavailable for category axis. Timestamp should be passed for [type](~${componentType}.type): 'time' axis. Logged value should be passed for [type](~${componentType}.type): 'log' axis.

#${prefix} logBase(number) = 10
Base of logarithm, which is valid only for numeric axes with [type](~${componentType}.type): 'log'.

{{ use: partial-axis-common-axis-line(
    prefix=${prefix},
    componentType=${componentType}
) }}

{{ use: partial-axis-common-axis-tick(
    prefix=${prefix},
    componentType=${componentType}
) }}

{{ use: partial-axis-common-axis-label(
    prefix=${prefix},
    componentType=${componentType}
) }}

{{ if: ${hasSplitLineAndArea} }}

{{ use: partial-axis-common-split-line(
    prefix=${prefix},
    componentType=${componentType}
) }}

{{ use: partial-axis-common-split-area(
    prefix=${prefix},
    componentType=${componentType}
) }}

{{ /if }}



#${prefix} data(Array)

Category data, available in [type](~${componentType}.type): 'category' axis.

If [type](~${componentType}.type) is not specified, but `axis.data` is specified, the [type](~${componentType}.type) is auto set as `'category'`.

If [type](~${componentType}.type) is specified as `'category'`, but `axis.data` is not specified, `axis.data` will be auto collected from [series.data](~series.data). It brings convenience, but we should notice that `axis.data` provides then value range of the `'category'` axis. If  it is auto collected from [series.data](~series.data), Only the values appearing in [series.data](~series.data) can be collected. For example, if [series.data](~series.data) is empty, nothing will be collected.


Example:

```js
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

{{ use:partial-text-style(
    prefix='##' + ${prefix}
) }}

{{if: !${noAxisPointer} }}
#${prefix} axisPointer(Object)

axisPointer settings on the axis.

{{ use: partial-axisPointer-common(
    prefix="#" + ${prefix},
    galleryViewPath=${galleryViewPath},
    galleryEditorPath=${galleryEditorPath}
)}}
{{/if}}












{ target: partial-axis-interval }}
Interval of ${name}, which is available in category axis. {{ if: !${isAxisLabel} }} is set to be the same as [axisLabel.interval](~${componentType}.axisLabel.interval) by default.{{ /if }}

It uses a strategy that labels do not overlap by default.

You may set it to be 0 to display all labels compulsively.

If it is set to be 1, it means that labels are shown once after one label. And if it is set to be 2, it means labels are shown once after two labels, and so on.

On the other hand, you can control by callback function, whose format is shown below:
```js
(index:number, value: string) => boolean
```
The first parameter is index of category, and the second parameter is the name of category. The return values decides whether to display label.


{{target: axis-common-formatter-desc}}

Formatter of axis label, which supports string template and callback function.

Example:
```js
// Use string template; template variable is the default label of axis {value}
formatter: '{value} kg'

// Use callback function; function parameters are axis index
formatter: function (value, index) {
    // Formatted to be month/day; display year only in the first label
    var date = new Date(value);
    var texts = [(date.getMonth() + 1), date.getDate()];
    if (idx === 0) {
        texts.unshift(date.getYear());
    }
    return texts.join('/');
}
```