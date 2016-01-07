
{{target: series-treemap}}

# series.treemap(Object)

[Treemap](https://en.wikipedia.org/wiki/Treemapping) 是一种常见的表达『层级数据』『树状数据』的可视化形式。它主要用面积的方式，便于突出展现出『树』的各层级中重要的节点。

**示例：**

~[700x580](${galleryViewPath}treemap-obama&edit=1&reset=1)

<br>
注：treemap 的配置项 和 ECharts2 相比有一些变化，一些不太成熟的配置方式不再支持或不再兼容：

+ `center/size` 方式的定位不再支持，而是统一使用 `left/top/bottom/right/width/height` 方式定位。

+ `breadcrumb` 的配置被移动到了 `itemStyle.normal/itemStyle.emphasis` 外部，和 `itemStyle` 平级。

+ `root` 的设置暂时不支持。目前可以使用 `zoom` 的方式来查看树更下层次的细节。

+ `label` 的配置被移动到了 `itemStyle.normal/itemStyle.emphasis` 外部，和 `itemStyle` 平级。

+ `itemStyle.normal.childBorderWidth`、`itemStyle.normal.childBorderColor`不再支持（因为这个配置方式只能定义两层的treemap）。统一使用 [treemap.levels](~treemap.levels) 来进行各层级的定义。

<br>
<br>

## type(string) = 'treemap'



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













