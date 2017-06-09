{{target:series-pie}}

# series.pie(Object)

**pie chart**

The pie chart is mainly used for showing proportion of different categories. Each arc length represents the proportion of data quantity.


**Tip:** The pie chart is more suitable for illustrating the numerical proportion. If you just to present the numerical differences of various categories, the [bar graph](bar) chart is more suggested. Because compared to tiny length difference,  people is less sensitive to the minor radian difference. Otherwise, it can also be shown as Nightingale chart by using the [roseType](~series-pie.roseType) to distinguish different data through radius.

** The below example shows a customized Nightingale chart: **
~[500x400](${galleryViewPath}pie-custom&edit=1&reset=1)

## type(string) = 'pie'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link }}

## hoverAnimation(boolean) = true
Whether to enable the zoom animation effects when hovering sectors.

## selectedMode(boolean|string) = false

Selected mode of pie.  It is enabled by default, and you may set it to be `false` to disabled it.

Besides, it can be set to `'single'` or `'multiple'`, for single selection and multiple selection.


## selectedOffset(number) = 10
The offset distance of selected sector.

## clockwise(boolean) = true
Whether the layout of sectors of pie chart is clockwise.

## startAngle(number) = 90
The start angle, which range is [0, 360].

## minAngle(number) = 0
The minimum angle of sector (0 ~ 360). It prevents some sector from being too small when value is small, which will affect user interaction.

## roseType(boolean|string) = false
Whether to show as Nightingale chart, which distinguishs data through radius. There are 2 optional modes:

+ `'radius'` Use central angle to show the percentage of data, radius to show data size.
+ `'area'` All the sectors will share the same central angle, the data size is shown only through radiuses.

## avoidLabelOverlap(boolean) = true
Whether to enable the strategy to avoid labels overlap. Defaults to be enabled, which will move the label positions in the case of labels overlapping

## stillShowZeroSum(boolean) = true
Whether to show sector when all data are zero.

## label(Object)
{{use:partial-label-desc(name="pie chart")}}
### normal(Object)
{{use:partial-pie-label(
    prefix="###",
    galleryEditorPath = ${galleryEditorPath},
    position=true,
    formatter=true
)}}
### emphasis(Object)
{{use:partial-pie-label(
    prefix="###",
    position=false,
    formatter=true
)}}

## labelLine(Object)
The style of visual guide line. Will show when [label position](~series-pie.label.normal.position) is set as `'outside'`.

{{ use: partial-pie-label-line(prefix='##') }}

## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{ use:partial-item-style(prefix="###") }}

{{use: component-circular-layout(
    componentName="Pie chart",
    defaultRadius="[0, '75%']"
)}}
You can set a large inner radius for a Donut chart.

## data(Array)
{{ use: partial-1d-data-desc }}
### name(string)
The name of data item.
### value(number)
Data value.
### selected(boolean) = false
Whether the data item is selected.

### label(Object)
The label configuration of a single sector.

#### normal(Object)
{{use:partial-pie-label(
    prefix="####",
    galleryEditorPath = ${galleryEditorPath},
    position=true,
    formatter=false
)}}
#### emphasis(Object)
{{use:partial-pie-label(
    prefix="####",
    position=false,
    formatter=false
)}}

### labelLine(Object)
{{ use: partial-pie-label-line(prefix='###') }}

### itemStyle(Object)
{{use:partial-item-style-desc}}
#### normal(Object)
{{use:partial-item-style(prefix="####")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}

{{use: partial-marker(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    seriesType="pie"
)}}

{{ use:partial-silent(
    prefix="#"
) }}

## animationType(string) = 'expansion'
Initial animation type.
+ `'expansion'` Default expansion animation.
+ `'scale'` Scale animation. You can use it with `animationEasing='elasticOut'` to have popup effect.

{{use:partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}



{{ target: partial-pie-label }}
#${prefix} show(boolean) = false
{{ if: ${position} }}
#${prefix} position(string) = 'outside'
The position of label.

**Options: **
+ `'outside'`

    Outside of sectors of pie chart, which relates to corresponding sector through [visual guide line](~series-pie.labelLine).

+ `'inside'`

    Inside the sectors of pie chart.

+ `'inner'` is the same with `'inside'`.
+ `'center'`

    In the center of pie chart. See [pie-doughnut example](${galleryEditorPath}pie-doughnut)

{{ /if }}
{{ if: ${formatter} }}
#${prefix} formatter(string|Function)
{{ use: partial-1d-data-label-formatter(extra = {
    percent: {
        desc: 'percentage',
        type: 'number'
    }
}) }}
{{ /if }}
#${prefix} textStyle(Object)
The text style of labels.
{{ use:partial-text-style(prefix=${prefix} + '#') }}



{{ target: partial-pie-label-line }}
#${prefix} normal(Object)
The style of visual guide line in normal status.
##${prefix} show(boolean)
Whether to show the visual guide ine in normal status.
##${prefix} length(number)
The length of the first segment of visual guide line.
##${prefix} length2(number)
The length of the second segment of visual guide line.
##${prefix} smooth(boolean|number) = false
Whether to smooth the visual guide line. It defaults to be unsmooth and can be set as `true` or the values from 0 to 1 which indicating the smoothness.
##${prefix} lineStyle(Object)
{{use:partial-line-style(prefix="##" + ${prefix})}}

#${prefix} emphasis(Object)
The style of visual guide line in emphasis status.
##${prefix} show(boolean)
Whether to show the visual guide line in emphasis status.

##${prefix} lineStyle(Object)
{{use:partial-line-style(prefix="##" + ${prefix})}}

