
{{target: series-funnel}}

# series.funnel(Object)

**funnel plot**

**sample: **
~[600x400](${galleryViewPath}funnel&reset=1&edit=1)

## type(string) = 'funnel'

{{ use: partial-series-name() }}

## min(number) = 0
Assigned minimum data value.

## max(number) = 100
Assigned maximum data value.

## minSize(string) = '0%'
 the width of minimum data value [min](~series-funnel.min) map.

It could be absolut pixel and also the percentage of relative [layout width](~series-funnel.width). If you don't want the graph with minimum value to be triangle with sharp tips, you can set up this attribute to realize it. 

## maxSize(string) = '100%'
 the width of maximum data value [max](~series-funnel.max) map.


It could be absolut pixel and also the percentage of relative [layout width](~series-funnel.width).

## sort(string) = 'descending'
data sorting,  which could adopt `'ascending'`, `'descending'`.

## gap(number) = 0
data graph gap.

{{ use: partial-legend-hover-link }}

## funnelAlign(string) = 'center'
horizontal align layout. It defaults to align center. Optional items are: 'left' | 'right' | 'center'

## label(Object)
{{use:partial-label-desc(name="funnel plot")}}
### normal(Object)
{{use:partial-funnel-label(
    prefix="###",
    position=true,
    formatter=true
)}}
### emphasis(Object)
{{use:partial-funnel-label(
    prefix="###",
    position=false,
    formatter=true
)}}

## labelLine(Object)
the visual guide line style of label. When [label position](~series-funnel.label.normal.position) is set as `'left'`or`'right'`, the visual guide line would show.
{{ use: partial-funnel-label-line(prefix='##') }}

## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}


{{ use: component-rect-layout-width-height(
    componentName="funnel plot",
    defaultLeft=80,
    defaultTop=60,
    defaultRight=80,
    defaultBottom=60
) }}


## data(Array)
{{ use: partial-1d-data-desc }}
### name(string)
the name of data item.
### value(number)
data value.

### label(Object)
the label configuration of single data.
#### normal(Object)
{{use:partial-funnel-label(
    prefix="####",
    position=true,
    formatter=false
)}}
#### emphasis(Object)
{{use:partial-funnel-label(
    prefix="####",
    position=false,
    formatter=false
)}}

### labelLine(Object)
{{ use: partial-funnel-label-line(prefix='###') }}

### itemStyle(Object)
{{use:partial-item-style-desc}}
#### normal(Object)
{{use:partial-item-style(prefix="####")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

{{use: partial-mark-point(
    prefix="#",
    seriesType="funnel"
)}}
{{use: partial-mark-line(
    prefix="#",
    seriesType="funnel"
)}}

{{use:partial-animation(prefix="#")}}




{{ target: partial-funnel-label }}
#${prefix} show(boolean) = false
{{ if: ${position} }}
#${prefix} position(string) = 'outside'
label position.

**Options: **
+ `'left'`

    left side of funnel plot. The corresponding trapezoid would be related to through [visual guide line](~series-funnel.labelLine).

+ `'right'`

   right side of funnel plot. The corresponding trapezoid would be related to through [visual guide line](~series-funnel.labelLine).

+ `'inside'`

    the inside part of trapezoid in funnel plot. 

+ `'inner'` equals to `'inside'`. 
+ `'center'` equals to `'inside'`. 

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
the font style of lable.
{{ use:partial-text-style(prefix=${prefix} + '#') }}


{{ target: partial-funnel-label-line }}
#${prefix} normal(Object)
the style of visual guide line in normal status.
##${prefix} show(boolean)
Whether to show visual guide line.
##${prefix} length(number)
the length of the first part from visual guide line.
##${prefix} lineStyle(Object)
{{use:partial-line-style(prefix="##" + ${prefix})}}
#${prefix} emphasis(Object)
the style of visual guide line in emphasis status.
##${prefix} show(boolean)
Whether to show visual guide line.
##${prefix} lineStyle(Object)
{{use:partial-line-style(prefix="##" + ${prefix})}}


