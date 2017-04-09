{{ target: series-scatter3D }}

# series.scatter3D(Object)

三维散点/气泡图。可以用于[三维直角坐标系 grid3D](~grid3D)，[三维地理坐标系 geo3D](~geo3D)，[地球 globe](~globe)，通过大小，颜色等属性展示数据。

下图示一个三维的 simplex noise 用气泡图绘制出来的例子。

![500xauto](~scatter3D.png)

## type(string) = 'scatter3D'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    cartesian3D=true,
    geo3D=true,
    globe=true
 ) }}

## symbol(string) = 'circle'
散点的形状。默认为圆形。

{{ use: partial-icon }}

## symbolSize(number|Array|Function) = ${defaultSymbolSize}

${name}标记的大小，可以设置成诸如 `10` 这样单一的数字，也可以用数组分开表示宽和高，例如 `[20, 10]` 表示标记宽为`20`，高为`10`。

如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：
```js
(value: Array|number, params: Object) => number|Array
```
其中第一个参数 `value` 为 [data](~series-${seriesType}.data) 中的数据值。第二个参数`params` 是其它的数据项参数。

## distanceToGlobe(number) = 1.5

距离地球表面的距离，在 [coordinateSystem](~series-scatter3D.coordinateSystem) 为`'globe'`时有效。

## distanceToGeo3D(number) = 1.5

距离 geo3D 的距离，在 [coordinateSystem](~series-scatter3D.coordinateSystem) 为`'globe'`时有效。


## itemStyle(Object)

散点图颜色描边等样式。

{{ use: partial-item-style-scatter3D(
    prefix="##"
)}}

## label(Object)

标签样式

{{ use: partial-label-scatter3D(
    prefix='##',
    hasPosition=true
) }}

## emphasis(Object)

图形和标签高亮的样式。

### itemStyle(Object)
{{ use: partial-item-style-scatter3D(
    prefix="###"
)}}

### label(Object)
{{ use: partial-label-scatter3D(
    prefix="###"
)}}

## data(Array)

三维散点图数据数组。数组每一项为一个数据。通常这个数据是用数组存储数据的每个属性/维度。例如下面：

```js
data: [
    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]
]
```

对于数组中的每一项：

1. 在 [grid3D](~grid3D) 中，每一项的前三个值分别是`x`, `y`, `z`。
2. 在 [geo3D](~geo3D) 以及 [globe](globe) 中，每一项的前两个值分别是经纬度 `lng`, `lat`。

除了默认给坐标系使用的值，每一项还可以加入任意多个值，用于给 [visualMap](~visualMap) 组件映射到颜色等其它图形属性。

{{ use: common-data-option-desc() }}


{{ use: partial-blend-mode() }}

{{ use: partial-zlevel }}




{{ target: partial-item-style-scatter3D }}

{{ use: partial-item-style(
    prefix=${prefix|default('##')},
    defaultOpacity=0.8,
    hasCallback = ${hasCallback},
    useColorPalette = ${useColorPalette}
) }}

#${prefix|default('##')} borderWidth(number)=0
图形描边宽度。

#${prefix|default('##')} borderColor(string)='#fff'
图形描边颜色。


{{ target: partial-label-scatter3D }}

{{ use: partial-label(
    prefix=${prefix},
    defaultShow=${defaultShow},
    hasPosition=true,
    defaultPosition='right',
    defaultDistance=5,
    defaultTextFontSize=14,
    defaultTextColor='#000',
    defaultTextBorderWidth=1,
    defaultTextBorderColor="#fff"
) }}

