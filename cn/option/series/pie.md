{{target:series-pie}}

# series.pie(Object)

**饼图**

饼图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例。

**Tip:** 饼图更适合表现数据相对于总数的百分比等关系。如果只是表示不同类目数据间的大小，建议使用 [柱状图](bar)，人们对于微小的弧度差别相比于微小的长度差别更不敏感，或者也可以通过配置 [roseType](~series-pie.roseType) 显示成南丁格尔图，通过半径大小区分数据的大小。

**下面是自定义南丁格尔图的示例：**
~[500x400](${galleryViewPath}pie-custom&edit=1&reset=1)

## type(string) = 'pie'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link }}

## hoverAnimation(boolean) = true
是否开启 hover 在扇区上的放大动画效果。

## selectedMode(boolean|string) = false
选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选`'single'`，`'multiple'`，分别表示单选还是多选。

## selectedOffset(number) = 10
选中扇区的偏移距离。

## clockwise(boolean) = true
饼图的扇区是否是顺时针排布。

## startAngle(number) = 90
起始角度，支持范围[0, 360]。

## minAngle(number) = 0
最小的扇区角度，用于防止某个值过小导致扇区太小影响交互。

## roseType(boolean|string) = false
是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：

+ `'radius'` 面积展现数据的百分比，半径展现数据的大小。
+ `'area'` 所有扇区面积相同，仅通过半径展现数据大小。

## avoidLabelOverlap(boolean) = true
是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。

如果不需要开启该策略，例如[圆环图](${galleryEditorPath}pie-doughnut)这个例子中需要强制所有标签放在中心位置，可以将该值设为 `false`。

## label(Object)
{{use:partial-label-desc(name="饼图")}}
### normal(Object)
{{use:partial-pie-label(
    prefix="###",
    galleryEditorPath = ${galleryEditorPath},
    position=true,
    formatter=true
)}}
### emphasis(Object)
{{use:partial-pie-label(
    prefix="###",
    position=false,
    formatter=true
)}}

## labelLine(Object)
标签的视觉引导线样式，在 [label 位置](~series-pie.label.normal.position) 设置为`'outside'`的时候会显示视觉引导线。
{{ use: partial-pie-label-line(prefix='##') }}

## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{ use:partial-item-style(prefix="###") }}

{{use: component-circular-layout(
    componentName="饼图",
    defaultRadius="[0, '75%']"
)}}
可以将内半径设大显示成圆环图（Donut chart）。

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
#### normal(Object)
{{use:partial-pie-label(
    prefix="####",
    galleryEditorPath = ${galleryEditorPath},
    position=true,
    formatter=false
)}}
#### emphasis(Object)
{{use:partial-pie-label(
    prefix="####",
    position=false,
    formatter=false
)}}

### labelLine(Object)
{{ use: partial-pie-label-line(prefix='###') }}

### itemStyle(Object)
{{use:partial-item-style-desc}}
#### normal(Object)
{{use:partial-item-style(prefix="####")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

{{use: partial-marker(
    prefix="#",
    seriesType="pie"
)}}

{{ use:partial-silent(
    prefix="#"
) }}

{{use:partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
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
#${prefix} textStyle(Object)
标签的字体样式。
{{ use:partial-text-style(prefix=${prefix} + '#') }}



{{ target: partial-pie-label-line }}
#${prefix} normal(Object)
普通状态下视觉引导线的样式。
##${prefix} show(boolean)
是否显示视觉引导线。
##${prefix} length(number)
视觉引导线第一段的长度。
##${prefix} length2(number)
视觉引导项第二段的长度。
##${prefix} smooth(boolean|number) = false
是否平滑视觉引导线，默认不平滑，可以设置成 `true` 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。
##${prefix} lineStyle(Object)
{{use:partial-line-style(prefix="##" + ${prefix})}}

#${prefix} emphasis(Object)
高亮状态下视觉引导线的样式。
##${prefix} show(boolean)
是否显示视觉引导线。
##${prefix} lineStyle(Object)
{{use:partial-line-style(prefix="##" + ${prefix})}}

