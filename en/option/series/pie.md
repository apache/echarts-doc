{{target:series-pie}}

# series.pie(Object)

**pie chart**

The pie chart is mainly used for showing data proportion in the total in different categories. Each radians represents the proportion of data quantity.


**Tip:** The pie chart is more suitable for presenting the relations such as the percentage of data relative to the total. If you just want to present the different data of various categories, the [bar graph](bar) is more suggested. Compared to tiny length difference,  people is less sensitive to the minor radian difference. Otherwise, it could also be shown as Nightingale chart by allocating the [roseType](~series-pie.roseType), distinguishing different data through radius. 

** The below example is the custom Nightingale chart：**
~[500x400](${galleryViewPath}pie-custom&edit=1&reset=1)

## type(string) = 'pie'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link }}

## hoverAnimation(boolean) = true
Whether to enable the zoom animation effects of hover in the sectors.

## selectedMode(boolean|string) = false
Selected mode, indicating whether to support multiple selected objects. It defaults to be closed, supporting Boolean values and string. The optional string value could be `'single'` or `'multiple'` which respectively indicate single or multiple selecting.


## selectedOffset(number) = 10
the offset distance of selected section.

## clockwise(boolean) = true
Whether the layout of sectors of pie chart is clockwise.

## startAngle(number) = 90
the start angle, which supports the scale of[0, 360].

## minAngle(number) = 0
the minimum angel of sector. It prevents some sector from being too small bacause the some value is too small, which would influence on interaction. 

## roseType(boolean|string) = false
Whether to show as Nightingale chart, which distinguishs data through radius. There are 2 optional modes：

+ `'radius'` area shows the percentage of data, radius shows data size. 
+ `'area'` when all the sectors share the same area, the data size is shown only through radiuses.

## avoidLabelOverlap(boolean) = true
Whether to enable the strategy to avoid labels overlap. It defaults to be enabled to move the label positions in the case of crowded labels overlap to avoid labels overlap.

If this strategy is unnecessary to be enabled，such as in [pie-doughnut](${galleryEditorPath}pie-doughnut), all the labels are compulsoried to be put in the center and the value should be set as `false`. 

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
the style of visual guide line. When [label position](~series-pie.label.normal.position) is set as `'outside'`, the visual guide line would show.           

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
    componentName="pie chart",
    defaultRadius="[0, '75%']"
)}}
You can set a large inside radius for a Donut chart（Donut chart）.  

## data(Array)
{{ use: partial-1d-data-desc }}
### name(string)
the name of data item.
### value(number)
data value.
### selected(boolean) = false
Whether the data items could be selected.

### label(Object)
the label configuration of a single sector.

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

{{use: partial-mark-point(
    prefix="#",
    seriesType="pie"
)}}
{{use: partial-mark-line(
    prefix="#",
    seriesType="pie"
)}}

{{use:partial-animation(prefix="#")}}




{{ target: partial-pie-label }}
#${prefix} show(boolean) = false
{{ if: ${position} }}
#${prefix} position(string) = 'outside'
the position of lable.

**Options：**
+ `'outside'`

    the outside of sectors of pie chart, which relates to corresponding sector through [visual guide line](~series-pie.labelLine).

+ `'inside'`

    the inside of sectors of pie chart.

+ `'inner'` is the same with `'inside'`。
+ `'center'`

    In the center of pie chart. Reference to[pie-doughnut example](${galleryEditorPath}pie-doughnut)

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
the text style of labels.
{{ use:partial-text-style(prefix=${prefix} + '#') }}



{{ target: partial-pie-label-line }}
#${prefix} normal(Object)
the style of visual guide line in normal status.
##${prefix} show(boolean)
Whether to show the visual guide line.
##${prefix} length(number)
the length of the first segment of visual guide line.
##${prefix} length2(number)
the length of the second segment of visual guide line.
##${prefix} smooth(boolean|number) = false
Whether to smooth the visual guide line. It defaults to be unsmooth and could be set as `true` or the values from 0 to 1 which indicating the smoothness.   
##${prefix} lineStyle(Object)
{{use:partial-line-style(prefix="##" + ${prefix})}}

#${prefix} emphasis(Object)
the style of visual guide line in emphasis status.
##${prefix} show(boolean)
Whether to show the visual guide line.

##${prefix} lineStyle(Object)
{{use:partial-line-style(prefix="##" + ${prefix})}}

