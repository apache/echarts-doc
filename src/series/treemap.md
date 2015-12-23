
{{target: series-treemap}}

# series.treemap(Object)

## type(string) = 'treemap'

{{use: series-common}}

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


## clickable(boolean)
是否支持点击

## roam(boolean)
是否开启拖拽漫游，默认为false（关闭），其他有效输入为true（开启）

## squareRatio(number)
单个矩形展示时期望达到的长宽比，默认是黄金分割

## root(string)
设置根树节点，仅在节点id存在时有效

## visualDimension()
默认第一个维度。

## zoomToNodeRatio(number)
缩放至节点时，节点占可视区域的面积比例

## animation(boolean)

## animationDurationUpdate(number)
默认1500

## animationEasing(string)
可选

## childrenVisibleMin(number)

## levels(Object)
### color(Array)
颜色数组，默认['#d14a61']
### itemStyle(Object)
### visibleMin
### visualDimension
### label

## breadcrumb(Object)
{{use: series-common}}
### emptyItemWidth(number)
空节点宽度

## color(Array)
表示同一level的color选取列表，默认为空时选取系统color列表

## colorAlpha(Array)
表示同一level的color alpha 选取范围

## colorSaturation(number)

## colorMappingBy(string)
可选value、index、id

## visibleMin(number)
仅在sort取值asc或者desc时有效













