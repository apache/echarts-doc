{{target:series-bar}}

# series.bar(Object)

**柱状图**

柱状图通过柱形的高度来表现数据的大小，用于有至少一个类目轴的[直角坐标系](~grid)上。

## type(string) = 'bar'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=false,
    geo=false
) }}

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###",
    formatter=true
)}}

## itemStyle(Object)
{{use:partial-bar-item-style-desc}}
### normal(Object)
{{use:partial-bar-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true,
    barBorderRadius=true
)}}
### emphasis(Object)
{{use:partial-bar-item-style(prefix="###")}}


## stack(string) = null
数据堆叠，同个类目轴上系列配置相同的`stack`值可以堆叠放置。

## barWidth(number) = 自适应
柱条的宽度，不设时自适应

## barMaxWidth(number) = 自适应
柱条的最大宽度，不设时自适应

## barMinHeight(number) = 0
柱条最小高度，可用于防止某数据项的值过小而影响交互。

## barGap(string) = '30%'
柱间距离，默认为柱形宽度的30%，可设固定值

## barCategoryGap(string) = '20%'
类目间柱形距离，默认为类目间距的20%，可设固定值

## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
数据项名称。

### value(number)
单个数据项的数值。

### label(Object)
单个柱条文本的样式设置。
#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}

### itemStyle(Object)
#### normal(Object)
{{use:partial-bar-item-style(
    prefix="####",
    barBorderRadius=true
)}}
#### emphasis(Object)
{{use:partial-bar-item-style(prefix="####")}}

{{use: partial-marker(
    prefix="#",
    seriesType="bar",
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="柱状图"
) }}
{{ use:partial-silent(
    prefix="#"
) }}

{{use:partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}


{{ target:partial-bar-item-style }}

#${prefix} color(Color) = 自适应

柱条的颜色。{{ if: ${useColorPalatte} }} 默认从全局调色盘 [option.color](~color) 获取颜色 {{/if}}

#${prefix} barBorderColor(Color) = '#000'

柱条的描边颜色。

#${prefix} barBorderWidth(number) = 0

柱条的描边宽度，默认不描边。

{{ if: ${barBorderRadius} }}
#${prefix} barBorderRadius(number|Array) = 0
柱形边框圆角半径，单位px，支持传入数组分别指定柱形4个圆角半径。
如:
```
barBorderRadius: 5, // 统一设置四个角的圆角大小
barBorderRadius: [5, 5, 0, 0] //（顺时针左上，右上，右下，左下）
```
{{ /if }}

{{ use:partial-style-shadow-opacity(prefix=${prefix}) }}

