{{ target: series-scatter3D }}

# series.scatter3D(Object)

3D scatter chart. It can be used to display data in [grid3D](~grid3D), [ geo3D](~geo3D), [globe](~globe) using attributes such as size、color and so on.

This example is a 3D simplex noise drawn with a bubble chart.

![500xauto](~scatter3D.png)

## type(string) = 'scatter3D'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    cartesian3D=true,
    geo3D=true,
    globe=true
 ) }}

{{ use: partial-symbol() }}

## itemStyle(Object)

Sets the style of scatter such as colors, strokes, etc.

{{ use: partial-item-style-scatter3D(
    prefix="##"
)}}

## label(Object)

Sets the style of label.

{{ use: partial-label-scatter3D(
    prefix='##',
    hasPosition=true
) }}

## emphasis(Object)

Graphics and labels are highlighted.

### itemStyle(Object)
{{ use: partial-item-style-scatter3D(
    prefix="###"
)}}

### label(Object)
{{ use: partial-label-scatter3D(
    prefix="###"
)}}

## data(Array)

The data array of scatter3D. Each item in the array is a piece of data. Usually, this data stores each attribute/dimension of the data in an array. As Follows:
```ts
data: [
    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]
]
```

For each item in the array：

1. In [grid3D](~grid3D) ,the first three values of each item are`x`, `y`, `z`.
2. In [geo3D](~geo3D) and [globe](globe) ,the first two values of each item  are longitude `lng`, latitude `lat`,

In addition to the default values for the coordinates, each item can be added with any number of values to [visualMap](~visualMap) the component for any other graphical property, such as color, etc.

{{ use: common-data-option-desc() }}


{{ use: partial-blend-mode() }}

{{ use: partial-zlevel }}

{{ use: partial-silent }}

{{ use: partial-animation }}



{{ target: partial-item-style-scatter3D }}

{{ use: partial-item-style(
    prefix=${prefix|default('##')},
    defaultOpacity=${defaultOpacity|default(0.8)},
    hasCallback = ${hasCallback},
    useColorPalette = ${useColorPalette}
) }}

#${prefix|default('##')} borderWidth(number)=0
Sets the width of the border.

#${prefix|default('##')} borderColor(string)='#fff'
Sets the color of the border.


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

