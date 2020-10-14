
{{ target: series-gauge }}

# series.gauge(Object)

**仪表盘**

**示例：**
~[600x500](${galleryViewPath}gauge-car&reset=1&edit=1)

<ExampleBaseOption name="gauge" title="基础仪表盘" title-en="Basic Gauge">
const option = {
    series: [
        {
            name: 'Indicator',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            data: [{value: 50, name: 'Percent'}]
        }
    ]
};
</ExampleBaseOption>

## type(string) = 'gauge'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-circular-layout() }}

<!-- overwrite radius -->

## radius(number|string) = '75%'

<ExampleUIControlPercent default="75%" />

仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。

{{ use: partial-legend-hover-link() }}

## startAngle(number) = 225

<ExampleUIControlAngle min="-360" max="360" default="225" step="1" />

仪表盘起始角度。[圆心](~series-gauge.center) 正右手侧为`0`度，正上方为`90`度，正左手侧为`180`度。

## endAngle(number) = -45

<ExampleUIControlAngle min="-360" max="360" default="-45" step="1" />

仪表盘结束角度。

## clockwise(boolean) = true

<ExampleUIControlBoolean default="true" />

仪表盘刻度是否是顺时针增长。

## data(Array)

{{ use: partial-1d-data-desc() }}

{{ use: partial-gauge-title-detail(
    prefix = "##"
) }}

### name(string)

数据项名称。

### value(number)

<ExampleUIControlNumber default="0" step="1" />

数据值。

## min(number) = 0

<ExampleUIControlNumber default="0" step="1" />

最小的数据值，映射到 [minAngle](~series-gauge.minAngle)。

## max(number) = 100

<ExampleUIControlNumber default="100" step="1" />

最大的数据值，映射到 [maxAngle](~series-gauge.maxAngle)。

## splitNumber(number) = 10

<ExampleUIControlNumber min="1" default="10" step="1" />

仪表盘刻度的分割段数。

## axisLine(Object)

仪表盘轴线相关配置。

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示仪表盘轴线。

{{ use: partial-roundCap(
    prefix = "##"
) }}

### lineStyle(Object)

仪表盘轴线样式。

#### color(Array)

仪表盘的轴线可以被分成不同颜色的多段。每段的结束位置和颜色可以通过一个数组来表示。

默认取值：
```js
[[1, '#E6EBF8']]
```

#### width(number) = 10

轴线宽度。

{{ use: partial-style-shadow-opacity(
    prefix = "###"
) }}

## progress(Object)

{{ use: partial-version(
    version = "5.0"
) }}

展示当前进度。

### show(boolean) = false

<ExampleUIControlBoolean default="true" />

是否显示进度条。

### overlap(boolean) = true

<ExampleUIControlBoolean default="true" />

多组数据时进度条是否重叠。

### width(number) = 10

<ExampleUIControlBoolean default="true" />

进度条宽度。

{{ use: partial-roundCap(
    prefix = "##"
) }}

### silent(boolean) = true

<ExampleUIControlBoolean default="true" />

收否响应鼠标事件。

{{ use: partial-clip(
    prefix = "##",
    version = "5.0"
) }}

### itemStyle(Object)

进度条样式。

{{ use: partial-item-style(
    prefix = "###"
) }}

## splitLine(Object)

分隔线样式。

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示分隔线。

### length(number|string) = 10

<ExampleUIControlPercent default="10" min="0" step="0.5" />

分隔线线长。支持相对半径的百分比。

### distance(number) = 10

{{ use: partial-version(
    version = "5.0"
) }}

<ExampleUIControlNumber default="10" min="0" step="0.5" />

分隔线与轴线的距离。

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = '###',
    defaultColor = '#63677A',
    defaultWidth = 3,
    defaultType = "'solid'"
) }}

## axisTick(Object)

刻度样式。

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示刻度。

### splitNumber(number) = 5

<ExampleUIControlNumber min="1" default="5" step="1" />

分隔线之间分割的刻度数。

### length(number|string) = 6

<ExampleUIControlPercent default="6" min="0" step="0.5" />

刻度线长。支持相对半径的百分比。

### distance(number) = 10

{{ use: partial-version(
    version = "5.0"
) }}

<ExampleUIControlNumber default="10" min="0" step="0.5" />

刻度线与轴线的距离。

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = '###',
    defaultColor = '#63677A',
    defaultWidth = 1,
    defaultType = "'solid'"
) }}

## axisLabel(Object)

刻度标签。

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示标签。

### distance(number) = 15

<ExampleUIControlNumber default="15" min="0" step="0.5" />

标签与刻度线的距离。

### formatter(string|Function)

刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
示例:
```js
// 使用字符串模板，模板变量为刻度默认标签 {value}
formatter: '{value} kg'

// 使用函数模板，函数参数分别为刻度数值
formatter: function (value) {
    return value + 'km/h';
}
```

{{ use: partial-text-style(
    prefix = "##",
    noAlign = true,
    noVerticalAlign = true,
    defaultColor = "'#464646'"
) }}

## pointer(Object)

仪表盘指针。

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示指针。

### icon(string) = 'default'

{{ use: partial-version(
    version = "5.0"
) }}

{{ use: partial-icon-path() }}

### offsetCenter(Array) = [0, 0]

{{ use: partial-version(
    version = "5.0"
) }}

<ExampleUIControlPercentVector default="0,0" dims="x,y" />

相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。

### length(string|number) = '60%'

<ExampleUIControlPercent default="60%" min="0" step="0.5" />

指针长度，可以是绝对数值，也可以是相对于[半径](~series-gauge.radius)的半分比。

### width(number) = 6

<ExampleUIControlNumber default="6" min="0" step="0.5" />

指针宽度。

### keepAspect(boolean) = false

{{ use: partial-version(
    version = "5.0"
) }}

<ExampleUIControlBoolean default="false" />

如果图标是 `path://` 的形式，是否在缩放时保持该图形的长宽比。

### itemStyle(Object)

指针样式。

{{ use: partial-item-style(
    prefix = "###"
) }}

## anchor(Object)

{{ use: partial-version(
    version = "5.0"
) }}

表盘中指针的固定点。

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示固定点。

### anchorSize(number) = 6

<ExampleUIControlNumber default="6" min="0" step="0.5" />

固定点大小。

### itemStyle(Object)

指针固定点样式。

{{ use: partial-item-style(
    prefix = "###",
    defaultColor = "'#fff'",
) }}
<!-- overwrite borderColor -->
#### borderColor(Color) = '#5470c6'

<ExampleUIControlColor default="#5470c6" />

固定点边框颜色。

## itemStyle(Object)

仪表盘指针样式。

{{ use: partial-item-style(
    prefix = "##"
) }}

<!-- overwrite color -->

### color(Color) = 'auto'

指针颜色，默认取数值所在的[区间的颜色](~series-gauge.axisLine.lineStyle.color)

## emphasis(Object)

高亮的仪表盘指针样式

### itemStyle(*)

{{ use: partial-item-style(
    prefix = "###"
) }}

{{ use: partial-gauge-title-detail(
    prefix = "#"
) }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "gauge"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}

