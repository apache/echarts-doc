{{target:partial-barGrid}}

## barWidth(number|string) = 自适应
柱条的宽度，不设时自适应。支持设置成相对于类目宽度的百分比。

{{use:partial-barGrid-share-desc(seriesType=${seriesType})}}

## barMaxWidth(number|string) = 自适应
柱条的最大宽度，不设时自适应。支持设置成相对于类目宽度的百分比。

{{use:partial-barGrid-share-desc(seriesType=${seriesType})}}

## barMinHeight(number) = 0
柱条最小高度，可用于防止某数据项的值过小而影响交互。

## barGap(string) = ${barGapDefault|default('30%')}
不同系列的柱间距离，为百分比（如 `'30%'`，表示柱子宽度的 `30%`）。

如果想要两个系列的柱子重叠，可以设置 barGap 为 `'-100%'`。这在用柱子做背景的时候有用。

{{use:partial-barGrid-share-desc(seriesType=${seriesType})}}

例子：
~[600x400](${galleryViewPath}doc-example/barGrid-barGap&reset=1&edit=1)

## barCategoryGap(string) = '20%'
同一系列的柱间距离，默认为类目间距的20%，可设固定值

{{use:partial-barGrid-share-desc(seriesType=${seriesType})}}





{{target:partial-barGrid-share-desc}}

在同一坐标系上，此属性会被多个 `'${seriesType}'` 系列共享。此属性应设置于此坐标系中最后一个 `'${seriesType}'` 系列上才会生效，并且是对此坐标系中所有 `'${seriesType}'` 系列生效。