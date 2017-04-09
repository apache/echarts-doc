{{ target: series-scatterGL }}

# series.scatterGL(Object)

使用 WebGL 绘制的二维散点/气泡图。

使用方式同 [scatter](http://echarts.baidu.com/option.html#series-scatter)。

## type(string) = 'scatterGL'

{{ use: partial-series-name() }}

## coordinateSystem(string) = 'cartesian2d'

使用的坐标系。

同 [scatter.coordinateSystem](http://echarts.baidu.com/option.html#series-scatter.coordinateSystem)

{{ use: partial-symbol() }}

## itemStyle(Object)

散点图的样式设置。

{{ use: partial-item-style-scatter3D(
    prefix="##",
    defaultOpacity=0.8,
    hasCallback = ${hasCallback},
    useColorPalette = ${useColorPalette}
)}}

## data(Array)

散点图的数据集。

数据格式同 [scatter.data](http://echarts.baidu.com/option.html#series-scatter.data)

### name(string)

数据项名称。

### value(number|Array)

数据项值

### itemStyle(Object)

单个数据图形的样式。

{{ use: partial-item-style-scatter3D(
    prefix="###",
    defaultOpacity=0.8
) }}

{{ use: partial-blend-mode() }}

{{ use: partial-zlevel(defaultZLevel=10) }}