
{{target: component-visual-map}}

# visualMap(Array|Object)

`visualMap` 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。

视觉元素可以是：<br>
`图形类别（symbol）`、`图形大小（symbolSize）`<br>
`颜色（color）`、`颜色透明度（colorAlpha）`、<br>
`颜色明暗度（colorLightness）`、`颜色饱和度（colorSaturation）`、`色调（colorHue）`

`visualMap` 组件可以定义多个，从而可以同时对数据中的多个维度进行视觉映射。

`visualMap` 组件可以定义为 [分段型（visualMapPiecewise）](~visualMap-piecewise) 或 [连续型（visualMapContinuous）](~visualMap-continuous)，通过 `type` 来区分。例如：

```javascript
option = {
    visualMap: [
        { // 第一个 visualMap 组件
            type: 'continuous', // 定义为连续型 viusalMap
            ...
        },
        { // 第二个 visualMap 组件
            type: 'piecewise', // 定义为分段型 visualMap
            ...
        }
    ],
    ...
};
```

<br>
**视觉映射方式的配置**

既然是『数据』到『视觉元素』的映射，`visualMap` 中可以指定数据的『哪个维度』（参见[visualMap.dimension](~visualMap.dimension)）映射到哪些『视觉元素』（参见[visualMap.inRange](~visualMap.inRange) 和 [visualMap.outOfRange](~visualMap.outOfRange)）中。


<br>
**与 ECharts2 中 dataRange 的关系**

`visualMap` 是由 ECharts2 中的 `dataRange` 组件改名以及扩展而来。ECharts3里 `option` 中的 `dataRange` 配置项仍然被兼容，会自动转换成 `visualMap` 配置项。在option中推荐写 `visualMap` 而非 `dataRange`。

<br>
**以下是visualMap各组件的详细介绍**

<br>
<br>

{{import: component-visual-map-continuous}}
{{import: component-visual-map-piecewise}}


{{target: component-visual-map-common}}

## show(boolean) = true

是否显示直 visualMap 组件。

## dimension(string)

## seriesIndex(number) = 0

## inRange

## outOfRange

## precision(number) = 0

,              // 小数精度，默认为0，无小数点

{{ use: partial-rect-layout(
    componentName="vissualMap ",
    defaultZ="4",
    defaultLeft="0",
    defaultRight="auto",
    defaultTop="auto",
    defaultBottom="0"
) }}

## itemWidth(number) = ${itemWidth}

,             // 值域图形宽度，线性渐变水平布局宽度为该值 * 10

## itemHeight(number) = ${itemHeight}

,            // 值域图形高度，线性渐变垂直布局高度为该值 * 10


## inverse(boolean) = false

## orient(string) = 'vertical'

    // 'horizontal' ¦ 'vertical'

## padding(number|Array) = 5

## backgroundColor(color) = 'rgba(0,0,0,0)'

## borderColor(color) = '#ccc'

,       // 值域边框颜色

## contentColor(color) = '#5793f3'

## inactiveColor(color) = '#aaa'

## borderWidth(number) = 0

,            // 值域边框线宽，单位px，默认为0（无边框）


## formatter(string|Function)

## color(Array) = ['#bf444c', '#d88273', '#f6efa6']

,//颜色（deprecated，兼容ec2，对应数值由高到低）

## text: null,                // 文本，如['高', '低']，兼容ec2，text[0]对应高值，text[1]对应低值


## textStyle

    color: '#333'          // 值域文字颜色

