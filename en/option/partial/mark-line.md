{{ target: partial-mark-line }}

#${prefix} markLine
mark line of the chart.

##${prefix} symbol(string|Array)
Marking the ends of the tag type, it can be one array referring to both ends respectively or in a unified way, specific format can refer to (~series-${seriesType}.markLine.data.0.symbol)。
##${prefix} symbolSize(number|Array)
Marking the ends of the tag size, it can be one array referring to both ends respectively or in a unified way.

**Attention：** In here, you can not assign height and width through array like the usual symbolSize.

##${prefix} precision(number) = 2
Numerical precison of marking line is useful when presenting average value line.

##${prefix} label(Object)
Mark line text.
###${prefix} normal(Object)
{{ use: mark-line-label(
    prefix=${prefix} + '###'
) }}
###${prefix} emphasis(Object)
{{ use: mark-line-label(
    prefix=${prefix} + '###'
) }}

##${prefix} lineStyle(Object)
###${prefix} normal(Object)
{{ use: partial-line-style(
    prefix="###" + ${prefix},
    defaultColor='self-adaptive',
    defaultLineType='dashed',
    hasCurveness=true
) }}
###${prefix} emphasis(Object)
{{ use: partial-line-style(
    prefix="###" + ${prefix}
) }}

##${prefix} data
Data array of marking line. Every array can be  one with one or two value, representing starting point and finishing point of the line, and every item is an object, followings are several ways to assign the positions of starting point and finishing point.
1. Through [x](~series-${seriesType}.markLine.data.0.x), [y](~series-${seriesType}.markLine.data.0.y) attribute assigns screen coorditaes and per pixel of relative container. 
{{ if: ${hasCoord} }}
2. Use [coord](~series-${seriesType}.markLine.data.0.coord) attribute assigns coordinates position of data in the corresponding coordinate system. 
{{ /if }}{{ if: ${hasType} }}
3. Use [type](~series-${seriesType}.markLine.data.0.type) attribute to label the maximum value and minimum value in the series directly. This is when you can use  [valueIndex](~series-${seriesType}.markLine.data.0.valueIndex) to assign the maximum value, minimum value and average value in any dimensions. Or you can use [valueDim](~series-${seriesType}.markPoint.data.valueDim) to assign the maximum value, minimum value and average value in any dimensions.
{{ /if }}
When multiple attributes exist simultaneously, the order of priority is as described above.

{{if: ${hasType} }}
You can also set the type of the marking line through `type` , whether it is the maximum value or average value. Likewise, dimensions can be assigned through `valueIndex`.
{{ /if }}
```
data: [
    {{if: ${hasType} }}{
        name: 'Average',
        // Support 'average', 'min', 'max'
        type: 'average'
    },
    [
        {
            // Items of starting point and finishing point share one name
            name: 'Minimum value to maximum value',
            type: 'min'
        },
        {
            type: 'max'
        }
    ],
    {{/if}}{{if: ${hasCoord} }}[
        {
            name: 'Marking line between two coordinates',
            coord: [10, 20]
        },
        {
            coord: [20, 30]
        }
    ],
    {{/if}}[
        {
            name: 'Marking line between two screen coordinates',
            x: 100,
            y: 100
        },
        {
            x: 500,
            y: 200
        }
    ]
]
```

###${prefix} 0(Object)
Data of the starting point.
{{ use: mark-line-data-item-item(
    name="starting point",
    prefix="###"+${prefix},
    hasCoord=${hasCoord},
    hasType=${hasType},
    index=0
) }}

###${prefix} 1(Object)
Data of the finishing point.
{{ use: mark-line-data-item-item(
    name="finishing point",
    prefix="###"+${prefix},
    hasCoord=${hasCoord},
    hasType=${hasType},
    index=1
) }}

{{ use: partial-animation(
    prefix="#" + ${prefix}
) }}


{{ target: mark-line-label }}
#${prefix} show(boolean) = ${defaultShowLabel|default(true)}
Whether presnet label or not.
#${prefix} position(string) = 'end'
position of label can be：
+ `'start'` starting point of the line.
+ `'end'`   finishing point of the line.
#${prefix} formatter(string|Function)
{{ use: partial-1d-data-label-formatter }}



{{ target: mark-line-data-item-item }}
{{ if: ${hasType} }}
#${prefix} type(string)
special label types are used to label maximum value, minimum value and so on. 

**Options are:**
+ `'min'` maximum value.
+ `'max'` minimum value.
+ `'average'` average value
{{ /if }}
{{ if: ${hasCoord} }}
#${prefix} valueIndex(number)
Available when using [type](~series-${seriesType}.markLine.data.type), it is used to assign maximum value and minimum value in dimensions, it could be `0`（xAxis, radiusAxis）, `1`（yAxis, angleAxis） and use the first value axis dimension by default.

#${prefix} valueDim(string)
Available when using [type](~series-${seriesType}.markLine.data.type) ,it is used to assign maximum value and minimum value in dimensions, it could be the direct name of the dimension, for example, names could be `x`、`angle`in line chart、`open`、`close`in candlestick chart.

#${prefix} coord(Array)
Coordinates of the starting point or finishing point.Coordinates format depends on the coordinate system of the series.It could be `x`, `y` in [grid coordinates](~grid), or  `radius`, `angle`in [polar coordinates](~polar).

**Attention：**In ECharts 2.x , `xAxis` and `yAxis` will be used to label position in grid coordinates,ECharts 3 is no longer recommended.
{{ /if }}
#${prefix} x(number)
screen x coordinate of relative container, per pixel.

#${prefix} y(number)
screen y coordinate of relative container, per pixel.

#${prefix} value(number)
Label value can be  unset.

{{ use:partial-symbol(
    prefix=${prefix},
    name=${index} === 0 ? 'starting point' : 'finishing point'
) }}

#${prefix} lineStyle(Object)
Format of this data line, `lineStyle` of starting point and finishing point item will be merged together.
##${prefix} normal(Object)
{{ use: partial-line-style(
    prefix="##"+${prefix},
    hasCurveness=true
) }}
##${prefix} emphasis(Object)
{{ use: partial-line-style(
    prefix="##"+${prefix},
    hasCurveness=true
) }}

#${prefix} label(Object)
Format of this data label,`label` of starting point and finishing point item will be merged together.
##${prefix} normal(Object)
{{ use: mark-line-label(
    prefix='##'+${prefix}
) }}
##${prefix} emphasis(Object)
{{ use: mark-line-label(
    prefix='##'+${prefix}
) }}
