{{ target: component-axis3D-axis-common }}

## grid3DIndex(number) = 0

The index of the [grid3D](~grid3D) component used by the axis. The default is to use the first [grid3D](~grid3D) component.

## nameTextStyle(Object)

Text style of axis name.

{{ use: partial-text-style(
    prefix='##',
    defaultFontSize=16
)}}

### color(Color)

Color of axis name uses [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color) by default.

## nameGap(number) = 20

The gap between the axis name and axis line. Note the distance is in 3D space, not the screen pixel value.

## type(string) = ${axisTypeDefault|default('value')}

The type of the axis.

Optional:
+ `'value'`
    The value axis. Suitable for continuous data.

+ `'category'`
    The category axis. Suitable for the discrete category data. For this type, the category data must be set through [data](~${componentType}.data).

+ `'time'`
    The timeline. Suitable for the continuous timing data. The time axis has a time format compared to the value axis, and the scale calculation is also different. For example, the scale of the month, week, day, and hour ranges can be determined according to the range of the span.

+ `'log'`
    Logarithmic axis. Suitable for the logarithmic data.

## min(number|string) = null

The minimum value of axis.

It can be set to a special value `'dataMin'` so that the minimum value on this axis is set to be the minimum label.

It will be automatically computed to make sure the axis tick is equally distributed when not set.

In the category axis, it can also be set as the ordinal number. For example, if a category axis has `data: ['categoryA', 'categoryB', 'categoryC']`, and the ordinal `2` represents `'categoryC'`. Moreover, it can be set as a negative number, like `-3`.

## max(number|string) = null

The maximum value of the axis.

It can be set to a special value `'dataMax'` so that the minimum value on this axis is set to be the maximum label.

It will be automatically computed to make sure the axis tick is equally distributed when not set.

In the category axis, it can also be set as the ordinal number. For example, if a category axis has `data: ['categoryA', 'categoryB', 'categoryC']`, and the ordinal `2` represents `'categoryC'`. Moreover, it can be set as a negative number, like `-3`.

## scale(boolean) = false

It is available only in numerical axis, i.e., [type](~${componentType}.type): 'value'.

It specifies whether not to contain zero position of axis compulsively. When it is set to be `true`, the axis may not contain zero position, which is useful in the scatter chart for both value axes.

This configuration item is unavailable when the [min](~${componentType}.min) and [max](~${componentType}.max) are set.

## splitNumber(number) = 5

The number of segments that the axis is split into. Note that this number serves only as a recommendation, and the true segments may be adjusted based on readability.

This is unavailable for the category axis.

## minInterval(number) = 0

Minimum gap between split lines.

For example, it can be set to be `1` to make sure the axis label is shown as an integer.

```ts
{
    minInterval: 1
}
```

It is available only for axis of [type](~${componentType}.type) 'value' or 'time'.

## interval(number)

Compulsively set segmentation interval for axis.

As [splitNumber](~${componentType}.splitNumber) is a recommendation value, the calculated tick may not be the same as expected. In this case, interval should be used along with [min](~${componentType}.min) and [max](~${componentType}.max) to compulsively set tickings. But in most cases, we do not suggest using this, out automatic calculation is enough for most situations.

This is unavailable for category axis. Timestamp should be passed for [type](~${componentType}.type): 'time' axis. Logged value should be passed for [type](~${componentType}.type): 'log' axis.

## logBase(number) = 10

Base of logarithm, which is valid only for numeric axes with [type](~${componentType}.type): 'log'.

## data(Array)

Category data, available in [type](~${componentType}.type): 'category' axis.

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

### value(string)

Name of a category.

### textStyle(Object)

Text style of the category.

{{ use:partial-text-style(
    prefix='###'
) }}
