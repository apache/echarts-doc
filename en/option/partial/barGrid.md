{{target:partial-barGrid}}

## barWidth(number) = null
The width of the bar. Adaptive when not specified.

{{use:partial-barGrid-share-desc(seriesType=${seriesType})}}

## barMaxWidth(number) = null
The maximum width of the bar. Adaptive when not specified.

{{use:partial-barGrid-share-desc(seriesType=${seriesType})}}

## barMinHeight(number) = 0
The minimum width of bar. It could be used to avoid the following situation: the interaction would be affected when the value of some data item is too small.

## barGap(string) = ${barGapDefault|default('30%')}
The gap between bars between different series, can be set as a fixed value like `20`, or a percent value like `'30%'`, which means `30%` of the bar width.

Set barGap as `'-100%'` can overlap bars that belong to different series, which is useful when making a series of bar be background.

{{use:partial-barGrid-share-desc(seriesType=${seriesType})}}

For example:
~[600x400](${galleryViewPath}doc-example/barGrid-barGap&reset=1&edit=1)

## barCategoryGap(string) = '20%'
The bar gap of a single series, defaults to be `20%` of the category gap, can be set as a fixed value.

{{use:partial-barGrid-share-desc(seriesType=${seriesType})}}




{{target:partial-barGrid-share-desc}}

In a single coodinate system, this attribute is shared by multiple `'${seriesType}'` series. This attribute should be set on the last `'${seriesType}'` series in the coodinate system, then it will be adopted by all `'${seriesType}'` series in the coordinate system.