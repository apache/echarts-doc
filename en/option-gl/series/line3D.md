{{ target: series-line3D }}

# series.line3D(Object)

3D Line. Can be used for [grid3D] (~grid3D)

![600xauto](~line3D.png)

## type(string) = 'line3D'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    defaultCoordinateSystem='cartesian3D',
    cartesian3D=true
) }}

## lineStyle(Object)

The style of the lines.

{{ use: partial-line-style(
    defaultWidth = 2
) }}

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = '###',
    defaultWidth = 2
) }}

## data(Array)

A data array. Each item of the array is a piece of data. Usually this data is an array to store each attribute/dimension of the data. For example below:

```ts
data: [
    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]
]
```

The first three values of each item in the array are `x`, `y`, `z`. In addition to these three values, you can add other values to the [visualMap](~visualMap) component to map to other graphical properties such as colors.

{{ use: common-data-option-desc() }}

### name(string)
The name of data item.

### value(Array)
Data value.

### itemStyle(Object)
The style setting of a single data item.

{{ use: partial-line-style(
    prefix="###"
) }}


{{ use: partial-zlevel }}

{{ use: partial-silent }}

{{ use: partial-animation }}