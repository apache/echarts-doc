{{ target: series-line3D }}

# series.line3D(Object)

三维折线图。可以用于[三维直角坐标系 grid3D](~grid3D)。

![600xauto](~line3D.png)

## type(string) = 'line3D'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    defaultCoordinateSystem='cartesian3D',
    cartesian3D=true
) }}

## lineStyle(Object)

线条样式。

{{ use: partial-line-style(
    defaultWidth = 2
) }}

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = '###',
    defaultWidth = 2
) }}

## data(Array)

数据数组。数组每一项为一个数据。通常这个数据是用数组存储数据的每个属性/维度。例如下面：

```ts
data: [
    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]
]
```

数组中的每一项的前三个值分别是`x`, `y`, `z`。除了这三个值也可以添加其它值给 [visualMap](~visualMap) 组件映射到颜色等其它图形属性。

{{ use: common-data-option-desc() }}

### name(string)
数据项名称。

### value(Array)
数据项值。

### lineStyle(Object)
单个数据项的样式设置。

{{ use: partial-line-style(
    prefix="###"
) }}


{{ use: partial-zlevel }}

{{ use: partial-silent }}

{{ use: partial-animation }}