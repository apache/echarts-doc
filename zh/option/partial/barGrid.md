
{{ target: partial-barGrid }}

## barWidth(number|string) = 自适应

柱条的宽度，不设时自适应。

<ExampleUIControlPercent />

{{ use: partial-barGrid-value-absolute-or-percent() }}

{{ use: partial-barGrid-share-desc(
    seriesType = ${seriesType}
) }}

## barMaxWidth(number|string) = null

柱条的最大宽度。

比 [barWidth](~series-bar.barWidth) 优先级高。

{{ use: partial-barGrid-value-absolute-or-percent() }}

{{ use: partial-barGrid-share-desc(
    seriesType = ${seriesType}
) }}

## barMinWidth(number|string)

柱条的最小宽度。在直角坐标系中，默认值是 `1`。否则默认值是 `null`。

比 [barWidth](~series-bar.barWidth) 优先级高。

{{ use: partial-barGrid-value-absolute-or-percent() }}

{{ use: partial-barGrid-share-desc(
    seriesType = ${seriesType}
) }}

## barMinHeight(number) = 0

柱条最小高度，可用于防止某数据项的值过小而影响交互。

## barMinAngle(number) = 0

柱条最小角度，可用于防止某数据项的值过小而影响交互。

仅对极坐标系柱状图有效。

<ExampleUIControlNumber min="0" />

## barGap(string) = ${barGapDefault|default('20%')}

<ExampleUIControlPercent default="20%"/>

不同系列的柱间距离，为百分比（如 `'20%'`，表示柱子宽度的 `20%`）。

如果想要两个系列的柱子重叠，可以设置 barGap 为 `'-100%'`。这在用柱子做背景的时候有用。

{{ use: partial-barGrid-share-desc(
    seriesType = ${seriesType}
) }}

例子：
~[600x400](${galleryViewPath}doc-example/barGrid-barGap&reset=1&edit=1)

## barCategoryGap(number|string)

<ExampleUIControlPercent />

同一系列的柱间距离，默认情况下根据柱状图的系列数量计算得到合适的间距，系列较多时间距会适当调小，可设固定值

{{ use: partial-barGrid-share-desc(
    seriesType = ${seriesType}
) }}



{{ target: partial-barGrid-share-desc }}

在同一坐标系上，此属性会被多个 `'${seriesType}'` 系列共享。此属性应设置于此坐标系中最后一个 `'${seriesType}'` 系列上才会生效，并且是对此坐标系中所有 `'${seriesType}'` 系列生效。



{{ target: partial-barGrid-value-absolute-or-percent }}

可以是绝对值例如 `40` 或者百分数例如 `'60%'`。百分数基于自动计算出的每一类目的宽度。

