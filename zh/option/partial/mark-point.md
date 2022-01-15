
{{ target: partial-mark-point }}

#${prefix} markPoint(Object)

图表标注。

{{ use: partial-symbol(
    seriesType = ${seriesType},
    defaultSymbol = "'pin'",
    defaultSymbolSize = 50,
    prefix = "#" + ${prefix},
    hasCallback = true,
    name = ${name}
) }}

{{ use: partial-silent(
    prefix = "#" + ${prefix}
) }}

##${prefix} label(Object)

标注的文本。

{{ use: partial-label(
    prefix = "##" + ${prefix},
    defaultShowLabel = true,
    defaultPosition = "'inside'",
    formatter = true
) }}

##${prefix} itemStyle(Object)

标注的样式。

{{ use: partial-item-style(
    prefix = "##" + ${prefix}
) }}

##${prefix} emphasis(Object)

标注的高亮样式。

{{ use: partial-emphasis-disabled(
    prefix = "##" + ${prefix}
) }}

###${prefix} label(Object)

{{ use: partial-label(
    prefix = "###" + ${prefix},
    formatter = true
) }}

###${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###" + ${prefix}
) }}

##${prefix} blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

标注的淡出样式。淡出的规则跟随所在系列。

###${prefix} label(Object)

{{ use: partial-label(
    prefix = "###" + ${prefix},
    formatter = true
) }}

###${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###" + ${prefix}
) }}

##${prefix} data(Array)

标注的数据数组。每个数组项是一个对象，有下面几种方式指定标注的位置。
1. 通过 [x](~series-${seriesType}.markPoint.data.x), [y](~series-${seriesType}.markPoint.data.y) 属性指定相对容器的屏幕坐标，单位像素，支持百分比。

{{ if: ${hasCoord} }}
2. 用 [coord](~series-${seriesType}.markPoint.data.coord) 属性指定数据在相应坐标系上的坐标位置，单个维度支持设置 `'min'`, `'max'`, `'average'`。
{{ /if }}{{ if: ${hasType} }}
3. 直接用 [type](~series-${seriesType}.markPoint.data.type) 属性标注系列中的最大值，最小值。这时候可以使用 [valueIndex](~series-${seriesType}.markPoint.data.valueIndex) 或者 [valueDim](~series-${seriesType}.markPoint.data.valueDim) 指定是在哪个维度上的最大值、最小值、平均值。
{{ /if }}

当多个属性同时存在时，优先级按上述的顺序。

**示例：**
```ts
data: [{{ if: ${hasType} }}
    {
        name: '最大值',
        type: 'max'
    }, {{ /if }}{{ if: ${hasCoord} }}
    {
        name: '某个坐标',
        coord: [10, 20]
    }, {
        name: '固定 x 像素位置',
        yAxis: 10,
        x: '90%'
    }, {{ /if }}

    {
        name: '某个屏幕坐标',
        x: 100,
        y: 100
    }
]
```

###${prefix} name(string) = ''

标注名称。

{{ if: ${hasType} }}
###${prefix} type(string)

<ExampleUIControlEnum options="min,max,average" />

特殊的标注类型，用于标注最大值最小值等。

**可选:**
+ `'min'` 最小值。
+ `'max'` 最大值。
+ `'average'` 平均值。
{{ /if }}

{{ if: ${hasCoord} }}
###${prefix} valueIndex(number)

<ExampleUIControlNumber min="0" max="1" step="1"  />

在使用 [type](~series-${seriesType}.markPoint.data.type) 时有效，用于指定在哪个维度上指定最大值最小值，可以是 `0`（xAxis, radiusAxis），`1`（yAxis, angleAxis），默认使用第一个数值轴所在的维度。

###${prefix} valueDim(string)

在使用 [type](~series-${seriesType}.markPoint.data.type) 时有效，用于指定在哪个维度上指定最大值最小值。这可以是维度的直接名称，例如折线图时可以是`x`、`angle`等、candlestick 图时可以是`open`、`close`等维度名称。

###${prefix} coord(Array)

标注的坐标。坐标格式视系列的坐标系而定，可以是[直角坐标系](~grid)上的 `x`, `y`，也可以是[极坐标系](~polar)上的 `radius`, `angle`。例如 [121, 2323]、['aa', 998]。

{{ use: marker-coord-explain() }}
{{ /if }}

###${prefix} x(number)

<ExampleUIControlPercent default="0" />

相对容器的屏幕 x 坐标，单位像素。

###${prefix} y(number)

<ExampleUIControlPercent default="0" />

相对容器的屏幕 y 坐标，单位像素。

###${prefix} value(number)

标注值，可以不设。

{{ use: partial-symbol(
    prefix = "##" + ${prefix},
    seriesType = ${seriesType}
) }}

###${prefix} itemStyle(Object)

该标注的样式。

{{ use: partial-item-style(
    prefix = "###" + ${prefix}
) }}

###${prefix} label(Object)

{{ use: partial-label(
    prefix = ${prefix} + '###'
) }}

###${prefix} emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###" + ${prefix}
) }}

####${prefix} label(Object)

{{ use: partial-label(
    prefix = ${prefix} + '####'
) }}

####${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "####" + ${prefix}
) }}

{{ use: partial-animation(
    prefix = "#" + ${prefix}
) }}

###${prefix} blur(Object)

####${prefix} label(Object)

{{ use: partial-label(
    prefix = ${prefix} + '####'
) }}

####${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "####" + ${prefix}
) }}

{{ use: partial-animation(
    prefix = "#" + ${prefix}
) }}

