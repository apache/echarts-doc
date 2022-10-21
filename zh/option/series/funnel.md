
{{ target: series-funnel }}

# series.funnel(Object)

**漏斗图**

**示例：**
~[600x400](${galleryViewPath}funnel&reset=1&edit=1)

<ExampleBaseOption name="funnel" tilte="基础漏斗图" title-en="Basic Funnel">
option = {
    legend: {
        data: ['Display','Click','Visit','Consulting','Order']
    },
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            data: [
                {value: 60, name: 'Visit'},
                {value: 40, name: 'Consulting'},
                {value: 20, name: 'Order'},
                {value: 80, name: 'Click'},
                {value: 100, name: 'Display'}
            ]
        }
    ]
};

</ExampleBaseOption>

## type(string) = 'funnel'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby(
    defaultColorBy = "'data'"
) }}

## min(number) = 0

<ExampleUIControlNumber default="0" step="1" />

指定的数据最小值。dynamicHeight为`true`时无效。

## max(number) = 100

<ExampleUIControlNumber default="100" step="1" />

指定的数据最大值。

## minSize(number|string) = '0%'

<ExampleUIControlPercent default="0%" />

数据最小值 [min](~series-funnel.min) 映射的宽度。

可以是绝对的像素大小，也可以是相对[布局宽度](~series-funnel.width)的百分比，如果需要最小值的图形并不是尖端三角，可通过设置该属性实现。

## maxSize(number|string) = '100%'

<ExampleUIControlPercent default="100%" />

数据最大值 [max](~series-funnel.max) 映射的宽度。dynamicHeight为`true`时无效。

可以是绝对的像素大小，也可以是相对[布局宽度](~series-funnel.width)的百分比。

## orient(string) = 'vertical'

<ExampleUIControlEnum options="vertical,horizontal" />

漏斗图朝向，支持配置为`'vertical'`或者`'horizontal'`。

{{ use: partial-version(
    version = "4.9.0"
) }}

## sort(string|Function) = 'descending'

<ExampleUIControlEnum options="none,descending,ascending" default="descending" />

数据排序， 可以取 `'ascending'`，`'descending'`，`'none'`（表示按 data 顺序），或者一个函数（即 `Array.prototype.sort(function (a, b) { ... })`）。

## exitWidth(string)

<ExampleUIControlPercent />

该属性是设置顶部漏斗的出口宽度，也就是最后一个漏斗块的上底边长度，其以自身的下底边为基准取百分比。当 dynamicArea 有效时无效。您可以通过将其设置为 100% 来展平出口。当 showRate 为 true 时，您可以通过将其设置在 0% 和 99% 之间来使顶部为梯形。

## dynamicHeight(boolean)

<ExampleUIControlEnum options="true,false" default="false" />

设置为true使每个数据采用漏斗高度作为映射模式基准。

## showRate(boolean)

<ExampleUIControlEnum options="true,false" default="false" />

在默认的映射模式下，此属性将显示每个数据之间的转化率块，当 dynamicHeight 或 dynamicArea 为 true 时无效。(由于label限制，其他两种模式暂时不支持)

## dynamicArea(boolean)

<ExampleUIControlEnum options="true,false" default="false" />

这个属性会让每个数据以漏斗的面积作为映射基准，优先级低于 dynamciHeight。

## gap(number) = 0

<ExampleUIControlNumber default="0" min="0" step="0.5" />

数据图形间距。

{{ use: partial-legend-hover-link() }}

## funnelAlign(string) = 'center'

<ExampleUIControlEnum options="left,center,right" default="center" />

水平方向对齐布局类型，默认居中对齐，可用选项还有：'left' | 'right' | 'center'

## label(Object)

{{ use: partial-label-desc(
    name = "漏斗图"
) }}

{{ use: partial-funnel-label(
    prefix = "##",
    position = true,
    formatter = true
) }}

## rateLabel(Object)

{{ use: partial-label-desc(
    name = "funnel rate"
) }}

### formatter(string|function)

漏斗数据转化率标签, 支持 ```label.formatter``` 所支持的一切，并且添加了如下特性.

_String template_

新添加的模版都有:

- ```{e}```: 当前转化率前一个数据的名称.
- ```{f}```: 当前转化率后一个数据的名称.
- ```{g}```: 当前转化率.

_Callback function_

转化率回到和 ```label.formatter``` 的形式一样.

并且params在```label.formatter```的基础上添加了如下属性.

```ts
    preName: string,
    // 当前转化率前一个数据的名称
    nextName: string,
    // 当前转化率后一个数据的名称
    rate: string,
    // 当前转化率
    isLastPiece: boolean
    // 当前数据是否是最后一个数据，如果是最后一个，转化率为整体转化率
```

{{ use: partial-funnel-label(
    prefix = "##",
    position = false,
    formatter = false
) }}

## labelLine(Object)

标签的视觉引导线样式，在 [label 位置](~series-funnel.label.position) 设置为`'left'`或者`'right'`的时候会显示视觉引导线。

{{ use: partial-funnel-label-line(
    prefix = '##',
    length = true
) }}

## itemStyle(Object)

{{ use: partial-item-style-desc() }}

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = true,
    useDecal = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## emphasis(Object)

高亮的标签和图形样式。

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

{{ use: partial-funnel-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

淡出时的图形样式和标签样式。开启 [emphasis.focus](~series-funnel.emphasis.focus) 后有效

{{ use: partial-funnel-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

数据选中时的图形样式和标签样式。开启 [selectedMode](~series-funnel.selectedMode) 后有效。

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: partial-funnel-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: partial-rect-layout-width-height(
    componentName = "漏斗图",
    defaultLeft = 80,
    defaultTop = 60,
    defaultRight = 80,
    defaultBottom = 60
) }}

{{ use: partial-seriesLayoutBy() }}

{{ use: partial-datasetIndex() }}

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

{{ use: partial-series-group-id() }}

## data(Array)

{{ use: partial-1d-data-desc() }}

### name(string)

数据项名称。

### value(number)

数据值。

### itemStyle(Object)

{{ use: partial-item-style-desc() }}

#### height(string|number)

该数据项的高度。默认平均分配高度，如果需要修改，可以将其设为百分比（如：`'10%'`）或像素值（如：`20px`）。需要注意总和应为 100%。

{{ use: partial-item-style(
    prefix = "###",
    useDecal = true
) }}

### label(Object)

单个数据的标签配置。

{{ use: partial-funnel-label(
    prefix = "###",
    position = true,
    formatter = false
) }}

### labelLine(Object)

{{ use: partial-funnel-label-line(
    prefix = '###',
    length = true
) }}

### emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: partial-funnel-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-funnel-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: partial-funnel-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "funnel"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-funnel-state }}

#${prefix} label(Object)

{{ use: partial-funnel-label(
    prefix = "#" + ${prefix},
    position = false,
    formatter = true
) }}

#${prefix} labelLine(Object)

{{ use: partial-funnel-label-line(
    prefix = "#" + ${prefix},
    length = false
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: partial-funnel-label }}

#${prefix} show(boolean) = false

{{ if: ${position} }}
#${prefix} position(string) = 'outside'

标签的位置。

**可选：**
+ `'left'` 漏斗图左侧，[orient](~series-funnel.orient) 为`'vertical'`时有效。
+ `'right'` 漏斗图右侧，[orient](~series-funnel.orient) 为`'vertical'`时有效。
+ `'top'` 漏斗图上侧，[orient](~series-funnel.orient) 为`'horizontal'`时有效。
+ `'bottom'` 漏斗图下侧，[orient](~series-funnel.orient) 为`'horizontal'`时有效。
+ `'inside'` 漏斗图梯形内部。
+ `'insideRight'` 漏斗图梯形内部右侧。
+ `'insideLeft'` 漏斗图梯形内部左侧。
+ `'leftTop'` 漏斗图左侧上部。
+ `'leftBottom'`  漏斗图左侧下部。
+ `'rightTop'`  漏斗图右侧上部。
+ `'rightBottom'`  漏斗图右侧下部。
+ `'inner'` 同 `'inside'`。
+ `'center'` 同 `'inside'`。

在不是配置为内部的时候标签可以通过[视觉引导线](~series-funnel.labelLine)连到相应的梯形。
通过[视觉引导线](~series-funnel.labelLine)连到相应的梯形。
{{ /if }}

{{ if: ${formatter} }}
#${prefix} formatter(string|Function)

{{ use: partial-1d-data-label-formatter(
    extra = {
    percent: {
        desc: '百分比',
        type: 'number'
    }
}
) }}
{{ /if }}

{{ use: partial-text-style(
    prefix = ${prefix}
) }}



{{ target: partial-funnel-label-line }}

#${prefix} show(boolean)

是否显示视觉引导线。

{{ if: ${length} }}
#${prefix} length(number)

视觉引导线的长度。
{{ /if }}

#${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = "#" + ${prefix}
) }}

