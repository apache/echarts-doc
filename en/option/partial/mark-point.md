{{ target: partial-mark-point }}

#${prefix} markPoint(Object)
Chart callouts.

{{ use:partial-symbol(
    defaultSymbol="'pin'",
    defaultSymbolSize=50,
    prefix="#" + ${prefix},
    hasCallback=true
) }}

##${prefix} label(Object)
Callout text.
###${prefix} normal(Object)
{{use:partial-label(
    prefix="###" + ${prefix},
    defaultPosition="'inside'",
    formatter=true
)}}
###${prefix} emphasis(Object)
{{use:partial-label(
    prefix="###" + ${prefix},
    formatter=true
)}}

##${prefix} itemStyle(Object)
Callout style.
###${prefix} normal(Object)
{{use:partial-item-style(
    prefix="###" + ${prefix}
)}}
###${prefix} emphasis(Object)
{{use:partial-item-style(prefix="###" + ${prefix})}}

##${prefix} data(Array)
Label data array. Every array is an object, followings are several ways to assign the position the labeling.
1. Through [x](~series-${seriesType}.markPoint.data.x), [y](~series-${seriesType}.markPoint.data.y) attribute assigns screen coorditaes and per pixel of relative container.
{{ if: ${hasCoord} }}
2. Use [coord](~series-${seriesType}.markPoint.data.coord) attribute assigns coordinates position of data in the corresponding coordinate system. 
{{ /if }}{{ if: ${hasType} }}
3. Use [type](~series-${seriesType}.markPoint.data.type) attribute to label the maximum value and minimum value in the series directly.This is when you can use  [valueIndex](~series-${seriesType}.markPoint.data.valueIndex)to assign the maximum value, minimum value and average value in any dimensions. Or use [valueDim](~series-${seriesType}.markPoint.data.valueDim) to assign the maximum value, minimum value and average value in any dimensions.
{{ /if }}

When multiple attributes exist simultaneously, the order of priority is as described above.

**For example：**
```js
data: [{{if: ${hasType} }}
    {
        name: 'maximum',
        type: 'max'
    }, {{/if}}{{if: ${hasCoord} }}
    {
        name: 'certain coordinate',
        coord: [10, 20]
    }, {{/if}}
    {
        name: 'cetain screen coordinate',
        x: 100,
        y: 100
    }
]
```
###${prefix} name(string) = ''
Label name.
{{ if: ${hasType} }}
###${prefix} type(string)
special label types are used to label maximum value, minimum value and so on.

**Options are:**
+ `'min'` minimum.
+ `'max'` maximum.
+ `'average'` average value
{{ /if }}
{{ if: ${hasCoord} }}
###${prefix} valueIndex(number)
Available when using [type](~series-${seriesType}.markPoint.data.type) it is used to assign maximum value and minimum value in dimensions, it could be `0`（xAxis, radiusAxis）, `1`（yAxis, angleAxis）, and use the first value axis dimension by default.


###${prefix} valueDim(string)
Available when using  [type](~series-${seriesType}.markPoint.data.type) ,it is used to assign maximum value and minimum value in dimensions, it could be the direct name of the dimension, for example, names could be `x`、`angle`in line chart、`open`、`close`in candlestick chart.

###${prefix} coord(Array)
Coordinate of the label.Coordinates format depends on the coordinate system of the series.It could be `x`, `y` in [grid coordinates](~grid), or  `radius`, `angle`in [polar coordinates](~polar).

**Attention：**In ECharts 2.x , `xAxis` and `yAxis` will be used to label position in grid coordinates,ECharts 3 is no longer recommended.
{{ /if }}
###${prefix} x(number)
screen x coordinate of relative container, per pixel.

###${prefix} y(number)
screen y coordinate of relative container, per pixel.

###${prefix} value(number)
Label value can be  unset.

{{ use:partial-symbol(
    prefix="##" + ${prefix}
) }}

###${prefix} itemStyle(Object)
The callout style.
####${prefix} normal(Object)
{{ use: partial-item-style(prefix="####" + ${prefix}) }}
####${prefix} emphasis(Object)
{{ use: partial-item-style(prefix="####" + ${prefix}) }}

###${prefix} label(Object)
####${prefix} normal(Object)
{{ use: partial-label(
    prefix=${prefix} + '####'
) }}
####${prefix} emphasis(Object)
{{ use: partial-label(
    prefix=${prefix} + '####'
) }}


{{ use: partial-animation(
    prefix="#" + ${prefix}
) }}

