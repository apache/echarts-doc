{{target:series-bar}}

# series.bar(Object)

**bar graph**

Bar graph shows different datas through the height of a bar, which is used in [rectangular coordinate system](~grid) with at least 1 category axis.

## type(string) = 'bar'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=false,
    geo=false
) }}

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###",
    formatter=true
)}}

## itemStyle(Object)
{{use:partial-bar-item-style-desc}}
### normal(Object)
{{use:partial-bar-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true,
    barBorderRadius=true
)}}
### emphasis(Object)
{{use:partial-bar-item-style(prefix="###")}}


## stack(string) = null
data stack. On the same category axis, the `stack` values with the same series configuration could stack.

## barWidth(number) = self-adaptation
the bar width would adapt by itself when it is not set up. 

## barMaxWidth(number) = self-adaptation
the maximum  width of bar would adapt by itself when it is not set up. 

## barMinHeight(number) = 0
the minimum width of bar. It could be used to avoid the following situation: the interaction would be affected when the value of some data item is too small. 

## barGap(string) = '30%'
the gap between bars, which defaults to be 30% of the bar width and also could be set as a fixed value.    

## barCategoryGap(string) = '20%'
The bar gap between categories, which defaults to be 20% of the category gap and also could be set as a fixed value.    

## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
The name of data item.

### value(number)
The numeriacal value of a single data item.

### label(Object)
the style setting of the text in a single bar.

#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}

### itemStyle(Object)
#### normal(Object)
{{use:partial-bar-item-style(
    prefix="####",
    barBorderRadius=true
)}}
#### emphasis(Object)
{{use:partial-bar-item-style(prefix="####")}}

{{use: partial-mark-point(
    prefix="#",
    seriesType="bar",
    hasCoord=true,
    hasType=true
)}}prefix
{{use: partial-mark-line(
    prefix="#",
    seriesType="bar",
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="bar graph"
) }}

{{use:partial-animation(prefix="#")}}


{{ target:partial-bar-item-style }}

#${prefix} color(Color) = self-adaptation

bar color.{{ if: ${useColorPalatte} }} defaults to acquire colors {{/if}} from overall palette [option.color](~color).

#${prefix} barBorderColor(Color) = '#000'

The bodrder color of bar.

#${prefix} barBorderWidth(number) = 0

The bodrder width of bar. It defaults to have no border. 

{{ if: ${barBorderRadius} }}
#${prefix} barBorderRadius(number|Array) = 0
the  rounded corner of bar border. Its unit is px. And it supports introducing array to respectively assign the 4 corner radiuses of the bar. 

For example:
```
barBorderRadius: 5, // consistently set the size of 4 rounded corners
barBorderRadius: [5, 5, 0, 0] //（clockwise upper left, upper right, bottom right and bottom left）
```
{{ /if }}

{{ use:partial-style-shadow-opacity(prefix=${prefix}) }}

