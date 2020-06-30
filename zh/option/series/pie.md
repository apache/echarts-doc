{{target:series-pie}}

# series.pie(Object)

**饼图**

饼图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例。

从 ECharts v4.6.0 版本起，我们提供了 `'labelLine'` 与 `'edge'` 两种新的布局方式。详情参见 [label.alignTo](~series-pie.label.alignTo)。

~[900x250](${galleryViewPath}pie-alignTo&reset=1&edit=1)

对于一个图表中有多个饼图的场景，可以使用 [left](~series-pie.left)、[right](~series-pie.right)、[top](~series-pie.top)、[bottom](~series-pie.bottom)、[width](~series-pie.width)、[height](~series-pie.height) 配置每个饼图系列的位置和视口大小。[radius](~series-pie.radius)、[label.margin](~series-pie.label.margin) 等支持百分比的配置项，是相对于该配置项决定的矩形的大小而言的。

**Tip:** 饼图更适合表现数据相对于总数的百分比等关系。如果只是表示不同类目数据间的大小，建议使用 [柱状图](bar)，人们对于微小的弧度差别相比于微小的长度差别更不敏感，或者也可以通过配置 [roseType](~series-pie.roseType) 显示成南丁格尔图，通过半径大小区分数据的大小。

**下面是自定义南丁格尔图的示例：**
~[500x400](${galleryViewPath}pie-custom&edit=1&reset=1)

<ExampleBaseOption name="pie" title="基础饼图" title-en="Basic Pie">
const option = {
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Apple', 'Grapes', 'Pineapples', 'Oranges', 'Bananas']
    },
    series: [
        {
            type: 'pie',
            data: [
                {value: 335, name: 'Apple'},
                {value: 310, name: 'Grapes'},
                {value: 234, name: 'Pineapples'},
                {value: 135, name: 'Oranges'},
                {value: 1548, name: 'Bananas'}
            ]
        }
    ]
};

</ExampleBaseOption>


## type(string) = 'pie'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link }}

## hoverAnimation(boolean) = true

<ExampleUIControlBoolean default="true" />

是否开启 hover 在扇区上的放大动画效果。

## hoverOffset(number) = 10

<ExampleUIControlNumber min="0" default="10" />

高亮扇区的偏移距离。

## selectedMode(boolean|string) = false

<ExampleUIControlEnum options="true,false,single,multiple" />

选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选`'single'`，`'multiple'`，分别表示单选还是多选。

## selectedOffset(number) = 10

<ExampleUIControlNumber min="0" default="10" />

选中扇区的偏移距离。

## clockwise(boolean) = true

<ExampleUIControlBoolean default="true" />

饼图的扇区是否是顺时针排布。

## startAngle(number) = 90


<ExampleUIControlAngle step="1" min="0" max="360" default="90" />

起始角度，支持范围[0, 360]。

## minAngle(number) = 0

<ExampleUIControlAngle step="1" min="0" max="360" default="0" />

最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互。

## minShowLabelAngle(number) = 0

<ExampleUIControlAngle step="1" min="0" max="360" default="0" />

小于这个角度（0 ~ 360）的扇区，不显示标签（label 和 labelLine）。

## roseType(boolean|string) = false

<ExampleUIControlEnum options="radius,area" />

是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：

+ `'radius'` 扇区圆心角展现数据的百分比，半径展现数据的大小。
+ `'area'` 所有扇区圆心角相同，仅通过半径展现数据大小。

## avoidLabelOverlap(boolean) = true

<ExampleUIControlBoolean default="true" />

是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。

如果不需要开启该策略，例如[圆环图](${galleryEditorPath}pie-doughnut)这个例子中需要强制所有标签放在中心位置，可以将该值设为 `false`。

## stillShowZeroSum(boolean) = true

<ExampleUIControlBoolean default="true" />

是否在数据和为`0`（一般情况下所有数据为`0`） 的时候不显示扇区。

{{ use: partial-cursor }}

{{ use: partial-rect-layout-width-height(
    componentName="pie chart",
    defaultLeft=0,
    defaultTop=0,
    defaultRight=0,
    defaultBottom=0
) }}

## label(Object)
{{use:partial-label-desc(name="饼图")}}
{{use:partial-pie-label(
    prefix="##",
    galleryEditorPath = ${galleryEditorPath},
    position=true,
    formatter=true
)}}

### alignTo(string) = 'none'

<ExampleUIControlEnum options="labelLine,edge" />

标签的对齐方式，仅当 `position` 值为 `'outer'` 时有效。

从 ECharts v4.6.0 版本起，我们提供了 `'labelLine'` 与 `'edge'` 两种新的布局方式。

+ `'none'`（默认值）：label line 的长度为固定值，分别为 [labelLine.length](~series-pie.labelLine.length) 及 [labelLine.length2](~series-pie.labelLine.length2)。
+ `'labelLine'`：label line 的末端对齐，其中最短的长度由 [labelLine.length2](~series-pie.labelLine.length2) 决定。
+ `'edge'`：文字对齐，文字的边距由 [label.margin](~series-pie.label.margin) 决定。

~[900x250](${galleryViewPath}pie-alignTo&reset=1&edit=1)

### margin(string|number) = '25%'

<ExampleUIControlPercent default="20%" />

文字边距，仅当 [label.position](~series-pie.label.position) 为 `'outer'` 并且 [label.alignTo](~series-pie.label.alignTo) 为 `'edge'` 时有效。

~[900x250](${galleryViewPath}doc-example/pie-label-margin&edit=1&reset=1)

通常来说，对于移动端等分辨率较小的情况，`margin` 值设为比较小的值（比如 `10`）能在有限的空间内显示更多文字，而不是被裁剪为 `...`。但是对于分辨率更大的场景，百分比的值可以避免 label line 过长。如果你需要在不同分辨率下使用，建议使用[响应式图表设计](tutorial.html#移动端自适应)为不同的分辨率设置不同的 `margin` 值。

### bleedMargin(number) = 10

<ExampleUIControlNumber default="10" min="0" step="1" />

文字的出血线大小，超过出血线的文字将被裁剪为 `'...'`。仅当 [label.position](~series-pie.label.position) 为 `'outer'` 并且 [label.alignTo](~series-pie.label.alignTo) 为 `'none'` 或 `'labelLine'` 的情况有效。

~[800x250](${galleryViewPath}doc-example/pie-label-bleedMargin&edit=1&reset=1)

### distanceToLabelLine(number) = 5

<ExampleUIControlNumber default="5" min="0" step="0.5" />

文字与 label line 之间的距离。

~[800x250](${galleryViewPath}doc-example/pie-label-distanceToLabelLine&edit=1&reset=1)

## labelLine(Object)
标签的视觉引导线样式，在 [label 位置](~series-pie.label.position) 设置为`'outside'`的时候会显示视觉引导线。
{{ use: partial-pie-label-line(
    prefix='##',
    length=true,
    length2=true,
    smooth=true
)}}

## itemStyle(Object)
{{use:partial-item-style-desc}}
{{use:partial-item-style(
    prefix="##",
    useColorPalatte=true,
    hasCallback=true
)}}

## emphasis(Object)
高亮的扇区和标签样式。
### label(Object)
{{use:partial-pie-label(
    prefix="###",
    position=false,
    formatter=true
)}}

### labelLine(Object)
{{use: partial-pie-label-line(
    prefix='###',
    length=false,
    length2=false,
    smooth=false
)}}

### itemStyle(Object)
{{ use:partial-item-style(prefix="###") }}

{{use: component-circular-layout(
    componentName="饼图",
    defaultRadius="[0, '75%']"
)}}
可以将内半径设大显示成圆环图（Donut chart）。

{{ use: partial-seriesLayoutBy }}

{{ use: partial-datasetIndex }}

{{use:partial-series-dimensions(
    prefix="#"
)}}

{{use:partial-series-encode(
    prefix="#"
)}}

## data(Array)
{{ use: partial-1d-data-desc }}
### name(string)
数据项名称。
### value(number)
数据值。
### selected(boolean) = false
该数据项是否被选中。

### label(Object)
单个扇区的标签配置。
{{use:partial-pie-label(
    prefix="###",
    galleryEditorPath = ${galleryEditorPath},
    position=true,
    formatter=false
)}}

### labelLine(Object)
{{use: partial-pie-label-line(
    prefix='###',
    length=true,
    length2=true,
    smooth=true
)}}

### itemStyle(Object)
{{use:partial-item-style-desc}}
{{use:partial-item-style(prefix="###")}}

### emphasis(Object)

#### label(Object)
{{use:partial-pie-label(
    prefix="####",
    position=false,
    formatter=false
)}}

#### labelLine(Object)
{{use: partial-pie-label-line(
    prefix='####',
    length=false,
    length2=false,
    smooth=false
)}}

#### itemStyle(Object)
{{use:partial-item-style(prefix="####")}}

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


{{use: partial-marker(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    seriesType="pie"
)}}

{{ use:partial-silent(
    prefix="#"
) }}

## animationType(string) = 'expansion'

<ExampleUIControlEnum options="expansion,scale" />

初始动画效果，可选
+ `'expansion'` 默认沿圆弧展开的效果。
+ `'scale'` 缩放效果，配合设置 `animationEasing='elasticOut'` 可以做成 popup 的效果。

## animationTypeUpdate(string) = 'transition'

<ExampleUIControlEnum options="expansion,transition" />

{{ use: partial-version(version = "4.4.0") }}
更新数据时的动画效果，可选：
+ `'transition'` 通过改变起始和终止角度，从之前的数据过渡到新的数据。
+ `'expansion'` 数据将整体重新沿圆弧展开。

{{use:partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}

{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}


{{ target: partial-pie-label }}
#${prefix} show(boolean) = false
{{ if: ${position} }}
#${prefix} position(string) = 'outside'
标签的位置。

**可选：**
+ `'outside'`

    饼图扇区外侧，通过[视觉引导线](~series-pie.labelLine)连到相应的扇区。

+ `'inside'`

    饼图扇区内部。

+ `'inner'` 同 `'inside'`。
+ `'center'`

    在饼图中心位置。见[圆环图示例](${galleryEditorPath}pie-doughnut)

{{ /if }}
{{ if: ${formatter} }}
#${prefix} formatter(string|Function)
{{ use: partial-1d-data-label-formatter(extra = {
    percent: {
        desc: '百分比',
        type: 'number'
    }
}) }}
{{ /if }}
#${prefix} rotate(boolean|number) = null
标签旋转：

+ 如果为 `true`，则为径向排布。
+ 如果为 `number` ，旋转指定角度，从 -90 度到 90 度。正值是逆时针。

{{ use:partial-text-style(prefix=${prefix}) }}



{{ target: partial-pie-label-line }}
#${prefix} show(boolean)

<ExampleUIControlBoolean />

是否显示视觉引导线。
{{ if: ${length} }}
#${prefix} length(number)

<ExampleUIControlNumber default="15" min="0" step="1" />

视觉引导线第一段的长度。
{{ /if }}
{{ if: ${length2} }}
#${prefix} length2(number)
<ExampleUIControlNumber default="15" min="0" step="1" />
视觉引导项第二段的长度。
{{ /if }}
{{ if: ${smooth} }}
#${prefix} smooth(boolean|number) = false

<ExampleUIControlBoolean />

是否平滑视觉引导线，默认不平滑，可以设置成 `true` 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。
{{ /if }}
#${prefix} lineStyle(Object)
{{use:partial-line-style(prefix="#" + ${prefix})}}
