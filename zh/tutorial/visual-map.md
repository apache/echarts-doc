
{{target: visual-map}}

# 数据的视觉映射

数据可视化是 **数据** 到 **视觉元素** 的映射过程（这个过程也可称为视觉编码，视觉元素也可称为视觉通道）。

Apache ECharts<sup>TM</sup> 的每种图表本身就内置了这种映射过程，比如折线图把数据映射到『线』，柱状图把数据映射到『长度』。一些更复杂的图表，如 `graph`、`事件河流图`、`treemap` 也都会做出他们内置的映射。

此外，ECharts 还提供了 [visualMap 组件](option.html#visualMap) 来提供通用的视觉映射。`visualMap` 组件中可以使用的视觉元素有：<br>
`图形类别（symbol）`、`图形大小（symbolSize）`<br>
`颜色（color）`、`透明度（opacity）`、`颜色透明度（colorAlpha）`、<br>
`颜色明暗度（colorLightness）`、`颜色饱和度（colorSaturation）`、`色调（colorHue）`

下面对 `visualMap` 组件的使用方式进行简要的介绍。


## 数据和维度

ECharts中的数据，一般存放于 [series.data](option.html#series.data) 中。根据图表类型不同，数据的具体形式也可能有些许差异。比如可能是『线性表』、『树』、『图』等。但他们都有个共性：都是『数据项（dataItem）』的集合。每个数据项含有『数据值（value）』和其他信息（如果需要的话）。每个数据值，可以是单一的数值（一维）或者一个数组（多维）。

例如，[series.data](option.html#series.data) 最常见的形式，是『线性表』，即一个普通数组：

```javascript
series: {
    data: [
        {       // 这里每一个项就是数据项（dataItem）
            value: 2323, // 这是数据项的数据值（value）
            itemStyle: {...}
        },
        1212,   // 也可以直接是 dataItem 的 value，这更常见。
        2323,   // 每个 value 都是『一维』的。
        4343,
        3434
    ]
}
```

```javascript
series: {
    data: [
        {                        // 这里每一个项就是数据项（dataItem）
            value: [3434, 129,  '圣马力诺'], // 这是数据项的数据值（value）
            itemStyle: {...}
        },
        [1212, 5454, '梵蒂冈'],   // 也可以直接是 dataItem 的 value，这更常见。
        [2323, 3223, '瑙鲁'],     // 每个 value 都是『三维』的，每列是一个维度。
        [4343, 23,   '图瓦卢']    // 假如是『气泡图』，常见第一维度映射到x轴，
                                 // 第二维度映射到y轴，
                                 // 第三维度映射到气泡半径（symbolSize）
    ]
}
```

在图表中，往往默认把 value 的前一两个维度进行映射，比如取第一个维度映射到x轴，取第二个维度映射到y轴。如果想要把更多的维度展现出来，可以借助 `visualMap` 。最常见的情况，[气泡图（scatter）](option.html#series-scatter) 使用半径展现了第三个维度。




## visualMap 组件

visualMap 组件定义了把数据的『哪个维度』映射到『什么视觉元素上』。

现在提供如下两种类型的visualMap组件，通过 [visualMap.type](option.html#visualMap.type) 来区分。

其定义结构例如：

```javascript
option = {
    visualMap: [ // 可以同时定义多个 visualMap 组件。
        { // 第一个 visualMap 组件
            type: 'continuous', // 定义为连续型 visualMap
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

[连续型（visualMapContinuous）](option.html#visualMap-continuous)

[分段型（visualMapPiecewise）](option.html#visualMap-piecewise)：

分段型视觉映射组件（visualMapPiecewise），有三种模式：

+ 连续型数据平均分段: 依据 [visualMap-piecewise.splitNumber](option.html#visualMap-piecewise.splitNumber) 来自动平均分割成若干块。
+ 连续型数据自定义分段: 依据 [visualMap-piecewise.pieces](option.html#visualMap-piecewise.pieces) 来定义每块范围。
+ 离散数据（类别性数据）: 类别定义在 [visualMap-piecewise.categories](option.html#visualMap-piecewise.categories) 中。


<br>
**视觉映射方式的配置**

既然是『数据』到『视觉元素』的映射，`visualMap` 中可以指定数据的『哪个维度』（参见[visualMap.dimension](~visualMap.dimension)）映射到哪些『视觉元素』（参见 [visualMap.inRange](option.html#visualMap.inRange) 和 [visualMap.outOfRange](option.html#visualMap.outOfRange)）中。


例一：

```javascript
option = {
    visualMap: [
        {
            type: 'piecewise',
            min: 0,
            max: 5000,
            dimension: 3,       // series.data 的第四个维度（即 value[3]）被映射
            seriesIndex: 4,     // 对第四个系列进行映射。
            inRange: {          // 选中范围中的视觉配置
                color: ['blue', '#121122', 'red'], // 定义了图形颜色映射的颜色列表，
                                                    // 数据最小值映射到'blue'上，
                                                    // 最大值映射到'red'上，
                                                    // 其余自动线性计算。
                symbolSize: [30, 100]               // 定义了图形尺寸的映射范围，
                                                    // 数据最小值映射到30上，
                                                    // 最大值映射到100上，
                                                    // 其余自动线性计算。
            },
            outOfRange: {       // 选中范围外的视觉配置
                symbolSize: [30, 100]
            }
        },
        ...
    ]
};
```

例二：
```javascript
option = {
    visualMap: [
        {
            ...,
            inRange: {          // 选中范围中的视觉配置
                colorLightness: [0.2, 1], // 映射到明暗度上。也就是对本来的颜色进行明暗度处理。
                                          // 本来的颜色可能是从全局色板中选取的颜色，visualMap组件并不关心。
                symbolSize: [30, 100]
            },
            ...
        },
        ...
    ]
};
```

更多详情，参见 [visualMap.inRange](option.html#visualMap.inRange) 和 [visualMap.outOfRange](option.html#visualMap.outOfRange)。
