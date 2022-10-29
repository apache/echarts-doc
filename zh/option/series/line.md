
{{ target: series-line }}

# series.line(Object)

**折线/面积图**

折线图是用折线将各个数据点[标志](~series-line.symbol)连接起来的图表，用于展现数据的变化趋势。可用于[直角坐标系](~grid)和[极坐标系](~polar)上。

**Tip:** 设置 [areaStyle](~series-line.areaStyle) 后可以绘制面积图。

**Tip:** 配合分段型 [visualMap](~visualMap-piecewise) 组件可以将折线/面积图通过不同颜色分区间。如下示例

~[600x400](${galleryViewPath}line-aqi&edit=1&reset=1)

<ExampleBaseOption name="cartesian-line" title="基础折线图" title-en="Basic Line Chart">
const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
</ExampleBaseOption>

<ExampleBaseOption name="cartesian-line-empty-data" title="有空数据的折线图" title-en="Line with Empty Data">
const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [{
        data: [820, 932, 901, '-', 1290, 1330, 1320],
        type: 'line'
    }]
};
</ExampleBaseOption>

## type(string) = 'line'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-coord-sys(
    seriesType = "line",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = true,
    geo = false
) }}

{{ use: partial-symbol(
    seriesType = "line",
    defaultSymbol = "'emptyCircle'",
    defaultSymbolSize = 4,
    prefix = "#",
    hasCallback = true
) }}

## showSymbol(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示 symbol, 如果 `false` 则只有在 tooltip hover 的时候显示。

## showAllSymbol(boolean) = 'auto'

<ExampleUIControlBoolean />

只在主轴为类目轴（`axis.type` 为 `'category'`）时有效。
可选值：
+ `'auto'`：默认，如果有足够空间则显示标志图形，否则随主轴标签间隔隐藏策略。
+ `true`：显示所有图形。
+ `false`：随主轴标签间隔隐藏策略。

{{ use: partial-legend-hover-link() }}

## stack(string) = null

数据堆叠，同个类目轴上系列配置相同的 `stack` 值可以堆叠放置。关于如何定制数值的堆叠方式，参见 [stackStrategy](~series-line.stackStrategy)。

注：目前 `stack` 只支持堆叠于 `'value'` 和 `'log'` 类型的类目轴上，不支持 `'time'` 和 `'category'` 类型的类目轴。

下面示例可以通过右上角 [toolbox](~toolbox) 中的堆叠切换看效果：

~[600x400](${galleryViewPath}doc-example/line-stack-tiled&edit=1&reset=1)

## stackStrategy(string) = 'samesign'

{{ use: partial-version(
    version = '5.3.3'
) }}

堆积数值的策略，前提是[stack](~series-line.stack)属性已被设置。其值可以是：

+ `'samesign'` 只在要堆叠的值与当前累积的堆叠值具有相同的正负符号时才堆叠。
+ `'all'` 堆叠所有的值，不管当前或累积的堆叠值的正负符号是什么。
+ `'positive'` 只堆积正值。
+ `'negative'` 只堆叠负值。

{{ use: partial-cursor() }}

## connectNulls(boolean) = false

<ExampleUIControlBoolean />

是否连接空数据。

{{ use: partial-clip(
    prefix = "#"
) }}

## triggerLineEvent(boolean) = false

{{ use: partial-version(
    version = "5.2.2"
) }}

线条和区域面积是否触发事件

## step(string|boolean) = false

<ExampleUIControlEnum options='start,middle,end' />

是否是阶梯线图。可以设置为 `true` 显示成阶梯线图，也支持设置成 `'start'`, `'middle'`, `'end'` 分别配置在当前点，当前点与下个点的中间点，下个点拐弯。

不同的配置效果如下：

~[600x400](${galleryViewPath}line-step&edit=1&reset=1)

## label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "##",
    defaultPosition = "'top'",
    formatter = true
) }}

## endLabel(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

折线端点的标签。

{{ use: partial-label(
    prefix = "##",
    formatter = true,
    noPosition = true
) }}

### valueAnimation(boolean)

是否开启标签的数字动画。

## labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '##',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## itemStyle(Object)

折线拐点标志的样式。

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = true,
    useDecal = true,
    decalOnlyWithAreaStyle = true
) }}

## lineStyle(Object)

线条样式。

**注：** 修改 `lineStyle` 中的颜色不会影响图例颜色，如果需要图例颜色和折线图颜色一致，需修改 [itemStyle.color](~series-line.itemStyle.color)，线条颜色默认也会取该颜色。

{{ use: partial-line-style(
    prefix = "##",
    defaultWidth = 2
) }}

## areaStyle(Object)

区域填充样式。设置后显示成区域面积图。

{{ use: partial-area-style(
    prefix = "##",
    hasOrigin = true,
    defaultOpacity = 0.7
) }}

## emphasis(Object)

折线图的高亮状态。

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

### scale(boolean|number) = true

{{ use: partial-version(
    version = "5.0.0"
) }}

是否开启 hover 在拐点标志上的放大效果。从 `5.3.2` 版本开始支持 `number`，用以设置高亮放大倍数，默认放大 1.1 倍。

{{ use: partial-focus-blur-scope() }}

{{ use: line-state(
    state = 'emphasis'
) }}

### endLabel(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-label(
    prefix = "###",
    formatter = true,
    noPosition = true,
    noDistance = true
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

折线图的淡出状态。开启 [emphasis.focus](~series-line.emphasis.focus) 后有效。

{{ use: line-state(
    state = 'blur'
) }}

### endLabel(Object)

{{ use: partial-label(
    prefix = "###",
    formatter = true,
    noPosition = true,
    noDistance = true
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

折线图的选中状态。开启 [selectedMode](~series-line.selectedMode) 后有效。

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: line-state(
    state = 'select'
) }}

### endLabel(Object)

{{ use: partial-label(
    prefix = "###",
    formatter = true,
    noPosition = true,
    noDistance = true
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## smooth(boolean|number) = false

是否平滑曲线显示。

如果是 `boolean` 类型，则表示是否开启平滑处理。如果是 `number` 类型（取值范围 0 到 1），表示平滑程度，越小表示越接近折线段，反之则反。设为 `true` 时相当于设为 `0.5`。

如果需要修改平滑算法，请参考 [smoothMonotone](~series-line.smoothMonotone)。

## smoothMonotone(string)

折线平滑后是否在一个维度上保持单调性，可以设置成`'x'`, `'y'`来指明是在 x 轴或者 y 轴上保持单调性。

通常在双数值轴上使用。

下面两张图分别是双数值轴中的折线图`smoothMonotone`不设置以及设置为`'x'`的区别。

+ 不设置`smoothMonotone`:

![300xauto](~smooth-monotone-none.png)

+ 设置为 `'x'`:

![300xauto](~smooth-monotone-x.png)

## sampling(string)

折线图在数据量远大于像素点时候的降采样策略，开启后可以有效的优化图表的绘制效率，默认关闭，也就是全部绘制不过滤数据点。

可选：
+ `'lttb'` 采用 Largest-Triangle-Three-Bucket 算法，可以最大程度保证采样后线条的趋势，形状和极值。
+ `'average'` 取过滤点的平均值
+ `'max'` 取过滤点的最大值
+ `'min'` 取过滤点的最小值
+ `'sum'` 取过滤点的和

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

{{ use: partial-seriesLayoutBy() }}

{{ use: partial-datasetIndex() }}

{{ use: partial-series-group-id() }}

## data(Array)

{{ use: partial-2d-data-desc() }}

### name(string)

数据项名称。

### value(number)

单个数据项的数值。

{{ use: partial-data-group-id(
    prefix = '##'
) }}

{{ use: partial-symbol(
    defaultSymbol = "'circle'",
    defaultSymbolSize = 4,
    prefix = "##",
    name = "单个数据"
) }}

### label(Object)

单个拐点文本的样式设置。

{{ use: partial-label(
    prefix = "###",
    defaultPosition = "top"
) }}

### labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '###',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

### itemStyle(Object)

单个拐点标志的样式设置。

{{ use: partial-item-style(
    prefix = "###"
) }}

### emphasis(Object)

单个拐点的高亮样式和标签设置。

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: line-item-state(
    state = 'emphasis'
) }}

### blur(Object)

单个拐点的淡出样式和标签设置。

{{ use: line-item-state(
    state = 'blur'
) }}

### select(Object)

单个拐点的选中样式和标签设置。

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: line-item-state(
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "line",
    hasCoord = true,
    hasType = true
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "折线图"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#",
    defaultAnimationEasing = 'linear'
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: line-state }}

### label(Object)

{{ use: partial-label(
    prefix = "###",
    formatter = true
) }}

### labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '###'
) }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###",
    hasInherit = ${state} === 'emphasis'
) }}

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = "###",
    defaultWidth = 2,
    hasInherit = ${state} === 'emphasis'
) }}

### areaStyle(Object)

{{ use: partial-area-style(
    prefix = "###"
) }}



{{ target: line-item-state }}

#### label(Object)

{{ use: partial-label(
    prefix = "####"
) }}

#### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "####",
    hasInherit = ${state} === 'emphasis'
) }}
