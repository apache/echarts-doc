{{ target: series-scatterGL }}

# series.scatterGL(Object)

使用 WebGL 绘制的二维散点/气泡图。

使用方式同 [scatter](https://echarts.apache.org/zh/option.html#series-scatter)。

## type(string) = 'scatterGL'

{{ use: partial-series-name() }}

## coordinateSystem(string) = 'cartesian2d'

使用的坐标系。

同 [scatter.coordinateSystem](https://echarts.apache.org/zh/option.html#series-scatter.coordinateSystem)

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

数据格式同 [scatter.data](https://echarts.apache.org/zh/option.html#series-scatter.data)

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


## progressiveThreshold(number) = 1e5

启用渐进渲染的阈值，渐进渲染可以让你在加载画面的过程中不会有阻塞。

## progressive(number) = 1e5

渐进渲染每次渲染的数据量。