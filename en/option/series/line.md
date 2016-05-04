{{target:series-line}}

# series.line(Object)

**broken line graph**

Broken line graph relates all the data points [symbol](~series-line.symbol) by broken lines, which is used to show the trend of data changing. It could be used in both [rectangular coordinate system](~grid) and[polar coordinate system](~polar).

**Tip:** When [areaStyle](~series-line.areaStyle) is set, area graph could be drew.

## type(string) = 'line'

{{ use: partial-series-name() }}

{{ use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=false
) }}

{{ use:partial-symbol(
    seriesType="line",
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="#",
    hasCallback=true
) }}

## showSymbol(boolean) = true
Whether to show symbol. It would be shown during tooltip hover.

## showAllSymbol(boolean) = false
symbol graphic element defaults to be shown on main axis(following the label gap of main axis to hide the strategies). If you want to show them all, set showAllSymbol as `true`. 

## hoverAnimation(boolean) = true
Whether to enable the reminding animation effect of hover on inflection point symbol.

{{ use: partial-legend-hover-link }}

## stack(string) = null
data stack. The values with the same series configuration of `stack` on the same category axis could stack.  

The effect of the below example could be seen through stack switching of [toolbox](~toolbox) on the top right corner:

~[600x400](${galleryViewPath}doc-example/line-stack-tiled&edit=1&reset=1)

## clipOverflow(boolean) = true
Whether to clip the overflowing part, which defaults to clip. 

## label(Object)
{{use: partial-label-desc}}
### normal(Object)
{{use: partial-label(
    prefix="###",
    defaultPosition="'top'",
    formatter=true
)}}
### emphasis(Object)
{{use: partial-label(
    prefix="###",
    formatter=true
)}}

## itemStyle(Object)
the style of the inflection point of broken line.
### normal(Object)
{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{use: partial-item-style(prefix="###")}}

## lineStyle(Object)
line style.
### normal(Object)
{{use:partial-line-style(prefix="###")}}
### emphasis(Object)
{{use: partial-line-style(prefix="###")}}

## areaStyle(Object)
the style of area filling.
### normal(Object)
{{use: partial-area-style(prefix="###")}}
### emphasis(Object)
{{use: partial-area-style(prefix="###")}}

## smooth(false) = false
Whether to show as smooth curve.

## smoothMonotone(string)
Whether the broken line could maintain the monotonicity when it becomes smooth. It could be set as `'x'`, `'y'` to confirm that whether it maintains the monotonicity on x axis or y axis.   

It is usually used on double-value axis.

Here are 2 examples of broken line graph in double-value axis, showing the differences when `smoothMonotone` is without any setting, and `smoothMonotone` is set as `'x'`.   

+ no setting about `smoothMonotone`:

![300xauto](~smooth-monotone-none.png)

+ it is set as `'x'`:

![300xauto](~smooth-monotone-x.png)

## sampling(string)

the dowmsampling strategy used when the data size is much larger than piex dot. It could optimize the drawing efficiency when it is turned on. And it defaults to be turned off, indicating that all the drawing would not filter data point.  

Options：
+ `'average'` average the value of filter points
+ `'max'` maximize the value of filter points
+ `'min'` minimize the value of filter points
+ `'sum'` sum the values of filter points

## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
the name of data item.

### value(number)
the value of a single data item.

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="##",
    name="single data"
) }}

### label(Object)
the style setting about the text of single inflection point.  
#### normal(Object)
{{ use: partial-label(
    prefix="####",
    defaultPosition="top"
) }}
#### emphasis(Object)
{{ use: partial-label(prefix="####") }}

### itemStyle(Object)
the style setting about the symbol of single inflection point.  
#### normal(Object)
{{use: partial-bar-item-style(prefix="####")}}
#### emphasis(Object)
{{use: partial-bar-item-style(prefix="####")}}

{{use: partial-mark-point(
    prefix="#",
    seriesType="line",
    hasCoord=true,
    hasType=true
)}}
{{use: partial-mark-line(
    prefix="#",
    seriesType="line",
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="broken line graph"
) }}

{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing='linear'
)}}
