
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

指定的数据最小值。

## max(number) = 100

<ExampleUIControlNumber default="100" step="1" />

指定的数据最大值。

## minSize(number|string) = '0%'

<ExampleUIControlPercent default="0%" />

数据最小值 [min](~series-funnel.min) 映射的宽度。

可以是绝对的像素大小，也可以是相对[布局宽度](~series-funnel.width)的百分比，如果需要最小值的图形并不是尖端三角，可通过设置该属性实现。

## maxSize(number|string) = '100%'

<ExampleUIControlPercent default="100%" />

数据最大值 [max](~series-funnel.max) 映射的宽度。

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

