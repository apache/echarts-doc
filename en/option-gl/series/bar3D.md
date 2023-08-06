{{ target: series-bar3D }}

# series.bar3D(Object)

3D bar. It can be used to display data in [grid3D](~grid3D), [ geo3D](~geo3D), [globe](~globe) using attributes such as size 、color and so on.

The figure below shows the population density data of the world through a 3D bar chart on [geo3D] (~geo3D).

![700xauto](~geo-bar3D.jpg)

## type(string) = 'bar3D'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    defaultCoordinateSystem='cartesian3D',
    cartesian3D=true,
    geo3D=true,
    globe=true
) }}

## bevelSize(number) = 0


The size of the bevel.
Support for setting values from 0 to 1. The default is 0, which means there is no bevel.

Below are the differences between beveling and no beveling.

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/bar3D-no-bevel.png" width="100%" title="bevelSize: 0">
    <img src="documents/asset/gl/img/bar3D-bevel.png" width="100%" title="bevelSize: 0.3">
</div>

## bevelSmoothness(number) = 2

The smoothness of the bevel, the larger the value, the smoother.

## stack(string)

Stacking of bar chart. On the same category axis, the series with the same `stack` name would be put on top of each other. Note that the data items that need to be stack in different series must have the same index in the array.

See also [stackStrategy](~series-bar3D.stackStrategy) on how to customize how values are stacked.

Notice: `stack` only supports stacking on `value` and `log` axis for now. `time` and `category` axis are not supported.

## stackStrategy(string) = 'samesign'

{{ use: partial-version(
    isECharts = true,
    version = '5.3.3'
) }}

How to stack values if the [stack](~series-bar3D.stack) property has been set. Options:
+ `'samesign'`: only stack values if the value to be stacked has the same sign as the currently cumulated stacked value.
+ `'all'`: stack all values, irrespective of the signs of the current or cumulative stacked value.
+ `'positive'`: only stack positive values.
+ `'negative'`: only stack negative values.

## minHeight(number) = 0

The minimum width of the bar.

## itemStyle(Object)

The style of the bar, including color and opacity.

{{ use: partial-item-style(
    useColorPalette=true,
    hasCallback=true
) }}

## label(Object)
Configure the label of the bar.
{{ use: partial-label(
    defaultDistance=2,
    defaultTextFontSize=20,
    defaultTextBorderWidth=1,
    defaultTextBorderColor='#fff'
) }}

## emphasis(Object)
Configure labels and styles for bar highlighting.

### itemStyle(Object)
{{ use: partial-item-style(
    prefix="###"
) }}

### label(Object)
{{ use: partial-label(
    prefix="###",
    defaultShow=true,
    defaultDistance=2,
    defaultTextFontSize=20,
    defaultTextBorderWidth=1,
    defaultTextBorderColor='#fff'
) }}

## data(Array)

A data array of 3D bar. Each item of the array is a piece of data. Usually this data is an array to store each attribute/dimension of the data. For example below:

```ts
data: [
    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]
]
```
For each item in the array:

1. In [grid3D] (~grid3D), the first three values of each item are `x`, `y`, `z`.
2. In [geo3D](~geo3D) and [globe](~globe), the first two values of each item are longitude `lng`, latitude `lat`, and the third value indicates the size of the value, such as the number of people.  This value will be mapped to the range of [minHeight](~series-bar3D.minHeight) ~ [maxHeight](~series-bar3D.maxHeight).

In addition to the three values used by default for the coordinate system, each item can be added with any number of values for mapping the [visualMap](~visualMap) component to other graphical properties such as color.

{{ use: common-data-option-desc() }}

### name(string)
The name of data item.

### value(Array)
Data value.

### itemStyle(Object)
The style setting of a single data item.

{{ use: partial-item-style(
    prefix="###"
) }}

### label(Object)

The label setting of a single data item.
{{ use: partial-label(
    prefix="###",
    defaultDistance=2,
    defaultTextFontSize=20,
    defaultTextBorderWidth=1,
    defaultTextBorderColor='#fff'
) }}

### emphasis(Object)
Configure labels and styles for a single data item highlighting.

#### itemStyle(Object)
{{ use: partial-item-style(
    prefix="####"
) }}

#### label(Object)
{{ use: partial-label(
    prefix="####",
    defaultShow=true,
    defaultDistance=2,
    defaultTextFontSize=20,
    defaultTextBorderWidth=1,
    defaultTextBorderColor='#fff'
) }}


{{ use: partial-shading(
    componentType='series-bar3D',
    componentName='3D Bar'
) }}


{{ use: partial-zlevel }}

{{ use: partial-silent }}

{{ use: partial-animation }}
