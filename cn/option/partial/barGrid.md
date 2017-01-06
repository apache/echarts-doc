{{target:partial-barGrid}}

## barWidth(number|string) = 自适应
柱条的宽度，不设时自适应。支持设置成相对于类目宽度的百分比。

## barMaxWidth(number|string) = 自适应
柱条的最大宽度，不设时自适应。支持设置成相对于类目宽度的百分比。

## barMinHeight(number) = 0
柱条最小高度，可用于防止某数据项的值过小而影响交互。

## barGap(string) = ${barGapDefault|default('30%')}
柱间距离，可设固定值（如 `20`）或者百分比（如 `'30%'`，表示柱子宽度的 `30%`）。

如果想要两个系列的柱子重叠，可以设置 barGap 为 `'-100%'`。这在用柱子做背景的时候有用。

例子：
~[600x400](${galleryViewPath}doc-example/barGrid-barGap&reset=1&edit=1)

## barCategoryGap(string) = '20%'
类目间柱形距离，默认为类目间距的20%，可设固定值
