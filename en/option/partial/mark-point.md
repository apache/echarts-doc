
{{ target: partial-mark-point }}

#${prefix} markPoint(Object)

Mark point in a chart.

{{ use: partial-symbol(
    name = ${name},
    seriesType = ${seriesType},
    defaultSymbol = "'pin'",
    defaultSymbolSize = 50,
    prefix = "#" + ${prefix},
    hasCallback = true
) }}

{{ use: partial-silent(
    prefix = "#" + ${prefix}
) }}

##${prefix} label(Object)

Label of mark point.

{{ use: partial-label(
    prefix = "##" + ${prefix},
    defaultShowLabel = true,
    defaultPosition = "'inside'",
    formatter = true
) }}

###${prefix} emphasis(Object)

{{ use: partial-label(
    prefix = "###" + ${prefix},
    formatter = true
) }}

##${prefix} itemStyle(Object)

Mark point style.

{{ use: partial-item-style(
    prefix = "##" + ${prefix}
) }}

###${prefix} emphasis(Object)

{{ use: partial-item-style(
    prefix = "###" + ${prefix}
) }}

##${prefix} data(Array)

Data array for mark points, each of which is an object. Here are some ways to assign mark point position.
1. Assign coordinate according to container with [x](~series-${seriesType}.markPoint.data.x), [y](~series-${seriesType}.markPoint.data.y) attribute, in which pixel values and percentage are supported.
{{ if: ${hasCoord} }}
2. Assign coordinate position with [coord](~series-${seriesType}.markPoint.data.coord) attribute, in which `'min'`, `'max'`, `'average'` are supported for each dimension.
{{ /if }}{{ if: ${hasType} }}
3. Use [type](~series-${seriesType}.markPoint.data.type) attribute to mark the maximum and minimum values in the series, in which [valueIndex](~series-${seriesType}.markPoint.data.valueIndex) or [valueDim](~series-${seriesType}.markPoint.data.valueDim) can be used to assign the dimension.
{{ /if }}
When multiple attributes exist, priority is as the above order.

**For example: **
```js
data: [{{ if: ${hasType} }}
    {
        name: 'maximum',
        type: 'max'
    }, {{ /if }}{{ if: ${hasCoord} }}
    {
        name: 'coordinate',
        coord: [10, 20]
    }, {
        name: 'fixed x position',
        yAxis: 10,
        x: '90%'
    }, {{ /if }}
    {
        name: 'screen coordinate',
        x: 100,
        y: 100
    }
]
```

###${prefix} name(string) = ''

Mark point name.
{{ if: ${hasType} }}

###${prefix} type(string)

Special label types, are used to label maximum value, minimum value and so on.

**Options are:**
+ `'min'` maximum value.
+ `'max'` minimum value.
+ `'average'` average value.
{{ /if }}
{{ if: ${hasCoord} }}

###${prefix} valueIndex(number)

Available when using [type](~series-${seriesType}.markPoint.data.type) it is used to assign maximum value and minimum value in dimensions, it could be `0` (xAxis, radiusAxis), `1` (yAxis, angleAxis), and use the first value axis dimension by default.

###${prefix} valueDim(string)

Works only when [type](~series-${seriesType}.markPoint.data.type) is assigned. It is used to state the dimension used to calculate maximum value or minimum value. It may be the direct name of a dimension, like `x`, or `angle` for line charts, or `open`, or `close` for candlestick charts.

###${prefix} coord(Array)

Coordinates of the starting point or ending point, whose format depends on the coordinate of the series. It can be `x`, and `y` for [rectangular coordinates](~grid), or `radius`, and `angle` for [polar coordinates](~polar).

{{ use: marker-coord-explain }}

{{ /if }}

###${prefix} x(number)

X position according to container, in pixel.

###${prefix} y(number)

Y position according to container, in pixel.

###${prefix} value(number)

Label value, which can be ignored.

{{ use: partial-symbol(
    prefix = "##" + ${prefix},
    seriesType = ${seriesType},
    name = ${name}
) }}

###${prefix} itemStyle(Object)

Mark point style.

{{ use: partial-item-style(
    prefix = "###" + ${prefix}
) }}

####${prefix} emphasis(Object)

{{ use: partial-item-style(
    prefix = "####" + ${prefix}
) }}

###${prefix} label(Object)

{{ use: partial-label(
    prefix = ${prefix} + '###'
) }}

####${prefix} emphasis(Object)

{{ use: partial-label(
    prefix = ${prefix} + '####'
) }}

{{ use: partial-animation(
    prefix = "#" + ${prefix}
) }}

