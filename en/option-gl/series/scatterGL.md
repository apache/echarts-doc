{{ target: series-scatterGL }}

# series.scatterGL(Object)

A 2D scatter/bubble plot drawn using WebGL.

It is used in the same way as [scatter](http://echarts.baidu.com/option.html#series-scatter)。

## type(string) = 'scatterGL'

{{ use: partial-series-name() }}

## coordinateSystem(string) = 'cartesian2d'

The coordinate system used.

Same as [scatter.coordinateSystem](http://echarts.baidu.com/option.html#series-scatter.coordinateSystem)

{{ use: partial-symbol() }}

## itemStyle(Object)

Sets the style of scatter

{{ use: partial-item-style-scatter3D(
    prefix="##",
    defaultOpacity=0.8,
    hasCallback = ${hasCallback},
    useColorPalette = ${useColorPalette}
)}}

## data(Array)

The data array of scatter.

The data format is the same as [scatter.data](http://echarts.baidu.com/option.html#series-scatter.data)

### name(string)

The name of the data item.

### value(number|Array)

Data item value

### itemStyle(Object)

The style of a single data graphic.

{{ use: partial-item-style-scatter3D(
    prefix="###",
    defaultOpacity=0.8
) }}

{{ use: partial-blend-mode() }}

{{ use: partial-zlevel(defaultZLevel=10) }}


## progressiveThreshold(number) = 1e5

Enable progressive rendering thresholds, progressive rendering can be loading the screen without blocking.

## progressive(number) = 1e5

Progressively render the amount of data per render.