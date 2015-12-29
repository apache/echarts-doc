{{target:series-bar}}

# series.bar(Object)

柱状图

## type(string) = 'bar'

{{use: series-common(cartesian2d=true,polar=false,geo=false)}}

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(prefix="###")}}
#### position(string|Array.<string>)
{{use:partial-optional-label-position}}
### emphasis(Object)
{{use:partial-label(prefix="###")}}
#### position(string|Array.<string>)
{{use:partial-optional-label-position}}

## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(prefix="###", useColorPalatte=true)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}

## clickable(boolean) = true
数据图形是否可点击，默认开启，如果没有click事件响应可以关闭

## stack(string) = null
组合名称，双数值轴时无效，多组数据的堆积图时使用，eg：stack:'group1'，则series数组中stack值等于'group1'的数据做堆积计算

## barWidth(number) = 自适应
柱条的宽度，不设时自适应

## barMaxWidth(number) = 自适应
柱条的最大宽度，不设时自适应

## legendHoverLink(boolean) = true
是否启用图例（legend）hover时的联动响应（高亮显示）

## barMinHeight(number) = 0
柱条最小高度，可用于防止某item的值过小而影响交互

## barGap(string) = '30%'
柱间距离，默认为柱形宽度的30%，可设固定值

## barCategoryGap(string) = '20%'
类目间柱形距离，默认为类目间距的20%，可设固定值

## data(Array)
data的每个数组项是一个x坐标值