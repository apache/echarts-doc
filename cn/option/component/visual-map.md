
{{target: component-visual-map}}

# visualMap(Array|Object)

`visualMap` 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。

视觉元素可以是：<br>
{{use: partial-visual-map-visual-type}}

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







{{target: partial-visual-map-visual-type}}
`图形类别（symbol）`、`图形大小（symbolSize）`<br>
`颜色（color）`、`颜色透明度（colorAlpha）`、<br>
`颜色明暗度（colorLightness）`、`颜色饱和度（colorSaturation）`、`色调（colorHue）`





{{target: partial-visual-map-range}}
`${rangeType}` 能定义目标系列（参见 [${visualMapName}.seriesIndex](~${visualMapName}.seriesIndex)）视觉形式，也同时定义了 `${visualMapName}` 本身的视觉样式。通俗来讲就是，假如 `${visualMapName}`控制的是散点图，那么 `${rangeType}` 同时定义了散点图的 `颜色`、`尺寸` 等，也定义了 `${visualMapName}` 本身的 `颜色`、`尺寸` 等。这二者能对应上。

定义方式，例如：

```javascript
visualMap: [
    {
        ...,
        ${rangeType}: {
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [30, 100]
        }
    }
]
```

如果想分别定义 `${visualMapName}` 本身的视觉样式和 `目标系列` 的视觉样式，则这样定义：

```javascript
visualMap: [
    {
        ...,
        target: { // 表示 目标系列 的视觉样式。
            ${rangeType}: {
                color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
                symbolSize: [60, 200]
            }
        },
        controller: { // 表示 ${visualMapName} 本身的视觉样式。
            ${rangeType}: {
                symbolSize: [30, 100]
            }
        }
    }
]
```

或者这样定义：
```javascript
visualMap: [
    {
        ...,
        ${rangeType}: { // 表示 目标系列 的视觉样式 和 ${visualMapName} 共有的视觉样式。
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [60, 200]
        },
        controller: { // 表示 ${visualMapName} 本身的视觉样式，会覆盖共有的视觉样式。
            ${rangeType}: {
                symbolSize: [30, 100]
            }
        }
    }
]
```

**关于视觉类型**

+ ${rangeType} 中，可以有任意几个的『视觉类型』定义（如 `color`、`symbolSize` 等）。这些视觉类型，会被同时采用。

+ 每个视觉类型的值，都以 `Array` 形式表示（只有在 [visualMap-piecewise.categories](~visualMap-piecewise.categories) 下会以 `Object` 形式表示，下面阐述）。如果写成 `number` 或 `string`，会转成 `Array`。

+ `Array` 的内容：

    + 对于 `图形大小（symbolSize）`、`颜色透明度（colorAlpha）`、`颜色明暗度（colorLightness）`、`颜色饱和度（colorSaturation）`、`色调（colorHue）`：

    `Array` 总是：`[最小数据值对应的视觉值, 最大数据值对应的视觉值]`。

    比如：colorLightness: [0.8, 0.2]，表示所有数据值中，`最小数据值` 映射到 `颜色明暗` 的 `0.8`，`最大数据值` 映射到 `颜色明暗` 的 `0.2`，中间其他数据值，按照线性计算出映射结果。

    + 对于 `颜色（color）` 或 `图形类别（symbol）`：

    `Array` 例如：`['color0', 'color1', 'color2', ...]` 或 `['circle', 'rect', 'diamond', ...]`。

    表示，最小数据值，映射到 `Array` 的第一项，最大数据值映射到 `Array` 的最后一项。其他值，按照线性计算得到结果。

+ 在 [visualMap-piecewise.categories](~visualMap-piecewise.categories) 模式下，视觉定义采用 `Object`。例如（[参见示例](${galleryEditorPath}doc-example/scatter-visualMap-categories&edit=1&reset=1)）：

```javascript
${rangeType}: {
    color: {
        '优': 'red',
        '良': 'black',
        '': 'green' // 空字串，表示其他都是 'green'。
    }
}
```




{{target: partial-visual-map-common}}


## show(boolean) = true

是否显示 ${visualMapName} 组件。如果设置为 `false`，不会显示，但是数据映射的功能还存在。


## dimension(string) = 0

指定用数据的『哪个维度』，映射到视觉元素上。『数据』即 [series.data](~series.data)。
可以把 [series.data](~series.data) 理解成一个二维数组，例如：

```javascript
[
    [12, 23, 43],
    [12, 23, 43],
    [43, 545, 65],
    [92, 23, 33]
]
```

其中每个列是一个维度，即 `dimension`。
例如 `dimension` 为1时，取第二列，映射到视觉元素上。


## seriesIndex(number|Array.<number>)

指定取哪个系列的数据，即哪个系列的 [series.data](~series.data)。

默认取所有系列。


## inRange

定义 **在选中范围中** 的视觉元素。可选的视觉元素有：
{{use: partial-visual-map-visual-type}}

{{use: partial-visual-map-range(
    rangeType='inRange',
    visualMapName=${visualMapName},
    galleryEditorPath=${galleryEditorPath}
)}}


## outOfRange

定义 **在选中范围外** 的视觉元素。可选的视觉元素有：
{{use: partial-visual-map-visual-type}}

{{use: partial-visual-map-range(
    rangeType='outOfRange',
    visualMapName=${visualMapName},
    galleryEditorPath=${galleryEditorPath}
)}}



{{ use: partial-rect-layout(
    componentName="visualMap ",
    defaultZ="4",
    defaultLeft="0",
    defaultRight="auto",
    defaultTop="auto",
    defaultBottom="0"
) }}


## orient(string) = 'vertical'

水平（`'horizontal'`）或者竖直（`'vertical'`）。


## padding(number|Array) = 5

{{ use: partial-padding(componentName=${visualMapName})}}


## backgroundColor(Color) = 'rgba(0,0,0,0)'

背景色。


## borderColor(Color) = '#ccc'

边框颜色。


## borderWidth(number) = 0

边框线宽，单位px。


## formatter(string|Function)

标签的格式化工具。

+ 如果为`string`，表示模板，例如：`aaaa{value}bbbb{value2}`。其中 `{value}` 和 `{value2}` 是当前的范围大小。
+ 如果为 `Function`，表示回调函数，形如：

```javascript
formatter: function (value, value2) {
    return 'aaaa' + value + 'bbbb' + value2; // 范围标签显示内容。
}
```

## color(Array) = ['#bf444c', '#d88273', '#f6efa6']

这个配置项，是为了兼容 ECharts2 而存在，ECharts3 中已经不推荐使用。它的功能已经移到了 [${visualMapName}.inRange](~${visualMapName}.inRange) 和 [${visualMapName}.outOfRange](~${visualMapName}.outOfRange) 中。

如果要使用，则须注意，`color`属性中的顺序是由数值 `大` 到 `小`，但是 [${visualMapName}.inRange](~${visualMapName}.inRange) 或 [${visualMapName}.outOfRange](~${visualMapName}.outOfRange) 中 `color` 的顺序，总是由数值 `小` 到 `大`。二者不一致。


## textStyle

{{ use:partial-text-style(
    prefix='##',
    name='visualMap ',
    defaultColor='#333'
) }}
