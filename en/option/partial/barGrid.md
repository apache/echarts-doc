{{target:partial-barGrid}}

## barWidth(number) = null
The width of the bar. Adaptive when not specified.

## barMaxWidth(number) = null
The maximum width of the bar. Adaptive when not specified.

## barMinHeight(number) = 0
The minimum width of bar. It could be used to avoid the following situation: the interaction would be affected when the value of some data item is too small.

## barGap(string) = ${barGapDefault|default('30%')}
The gap between bars, can be set as a fixed value like `20`, or a percent value like `'30%'`, which means `30%` of the bar width.

Set barGap as `'-100%'` can overlap bars that belong to different series, which is useful when making a series of bar be background.

For example:
~[600x400](${galleryViewPath}doc-example/barGrid-barGap&reset=1&edit=1)

## barCategoryGap(string) = '20%'
The bar gap between each category of bar, defaults to be `20%` of the category gap, can be set as a fixed value.
