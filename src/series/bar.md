{{ target:partial-bar-item-style }}

#${prefix} color(string) = 自适应

柱条的颜色。{{ if: ${useColorPalatte} }} 默认从全局调色盘 [option.color](~color) 获取颜色 {{/if}}

#${prefix} barBorderColor(string) = '#000'

柱条的描边颜色。

#${prefix} barBorderWidth(number) = 0

柱条的描边宽度，默认不描边。

{{ use:partial-style-shadow-opacity(prefix=${prefix}) }}


{{target:series-bar}}

# series.bar(Object)

柱状图

## type(string) = 'bar'

{{use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=false,
    geo=false
)}}

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(prefix="###")}}
#### position(string|Array) = 'inside'
{{use:partial-optional-label-position}}
### emphasis(Object)
{{use:partial-label(prefix="###")}}
#### position(string|Array.<string>)
{{use:partial-optional-label-position}}

## itemStyle(Object)
{{use:partial-bar-item-style-desc}}
### normal(Object)
{{use:partial-bar-item-style(prefix="###", useColorPalatte=true)}}
### emphasis(Object)
{{use:partial-bar-item-style(prefix="###")}}


## stack(string) = null
组合名称，双数值轴时无效，多组数据的堆积图时使用，eg：stack:'group1'，则series数组中stack值等于'group1'的数据做堆积计算

## barWidth(number) = 自适应
柱条的宽度，不设时自适应

## barMaxWidth(number) = 自适应
柱条的最大宽度，不设时自适应

## legendHoverLink(boolean) = true
是否启用图例（legend）hover时的联动响应（高亮显示）

## barMinHeight(number) = 0
柱条最小高度，可用于防止某数据项的值过小而影响交互

## barGap(string) = '30%'
柱间距离，默认为柱形宽度的30%，可设固定值

## barCategoryGap(string) = '20%'
类目间柱形距离，默认为类目间距的20%，可设固定值

## data(Array)

{{ use: partial-list-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### value(number)
单个数据项的数值。

### label(Object)
#### normal(Object)
##### position(string|Array) = 'inside'
{{ use:partial-optional-label-position }}
{{ use:partial-label(prefix="####") }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}

### itemStyle(Object)
#### normal(Object)
{{use:partial-bar-item-style(prefix="####")}}
#### emphasis(Object)
{{use:partial-bar-item-style(prefix="####")}}



{{use:partial-animation(prefix="#")}}
