
{{ target: partial-mark-area }}

#${prefix} markArea(Object)

Used to mark an area in chart. For example, mark a time interval.

{{ use: partial-silent(
    prefix = "#" + ${prefix}
) }}

##${prefix} label(Object)

Label in mark area.

{{ use: partial-label(
    prefix = ${prefix} + '##'
) }}

##${prefix} itemStyle(Object)

Style of the mark area.

{{ use: partial-item-style(
    prefix = "##" + ${prefix}
) }}

##${prefix} emphasis(Object)

Emphasis status of mark area.

{{ use: partial-emphasis-disabled(
    prefix = "##" + ${prefix}
) }}

###${prefix} label(Object)

{{ use: partial-label(
    prefix = ${prefix} + '###'
) }}

###${prefix} itemStyle(*)

{{ use: partial-item-style(
    prefix = "###" + ${prefix}
) }}

##${prefix} blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Whether to blur follows the series.

###${prefix} label(Object)

{{ use: partial-label(
    prefix = ${prefix} + '###'
) }}

###${prefix} itemStyle(*)

{{ use: partial-item-style(
    prefix = "###" + ${prefix}
) }}

##${prefix} data(*)

The scope of the area is defined by `data`, which is an array with two item, representing the left-top point and the right-bottom point of rectangle area. Each item can be defined as follows:

1. Specify the coordinate in screen coordinate system using [x](~series-${seriesType}.markArea.data.0.x), [y](~series-${seriesType}.markArea.data.0.y), where the unit is pixel (e.g., the value is `5`), or percent (e.g., the value is `'35%'`).

{{ if: ${hasCoord} }}
2. Specify the coordinate in data coordinate system (i.e., cartesian) using
[coord](~series-${seriesType}.markArea.data.0.coord), which can be also set as `'min'`, `'max'`, `'average'` (e.g, `coord: [23, 'min']`, or `coord: ['average', 'max']`).
{{ /if }}{{ if: ${hasType} }}
3. Locate the point on the min value or max value of `series.data` using [type](~series-${seriesType}.markArea.data.0.type), where [valueIndex](~series-${seriesType}.markArea.data.0.valueIndex) or [valueDim](~series-${seriesType}.markPoint.data.0.valueDim) can be used to specify the dimension on which the min, max or average are calculated.
4. If in cartesian, you can only specify `xAxis` or `yAxis` to define a mark area based on only X or Y axis, see sample [scatter-weight](${galleryEditorPath}scatter-weight)
{{ /if }}

The priority follows as above if more than one above definition used.

{{ if: ${hasType} }}
{{ /if }}

```
data: [

{{ if: ${hasType} }}
    [
        {
            name: 'From average to max',
            type: 'average'
        },
        {
            type: 'max'
        }
    ],
{{ /if }}{{ if: ${hasCoord} }}
    [
        {
            name: 'Mark area between two points in data coordiantes',
            coord: [10, 20]
        },
        {
            coord: [20, 30]
        }
    ], [
        {
            name: 'From 60 to 80',
            yAxis: 60
        },
        {
            yAxis: 80
        }
    ], [
        {
            name: 'Mark area covers all data'
            coord: ['min', 'min']
        },
        {
            coord: ['max', 'max']
        }
    ],
{{ /if }}[
        {
            name: 'Mark area in two screen points',
            x: 100,
            y: 100
        }, {
            x: '90%',
            y: '10%'
        }
    ]
]
```

###${prefix} 0(Object)

Specify the left-top point.

{{ use: mark-area-data-item-item(
    name = "start",
    prefix = "###"+${prefix},
    seriesType = ${seriesType},
    hasCoord = ${hasCoord},
    hasType = ${hasType},
    index = 0
) }}

###${prefix} 1(Object)

Specify the right-bottom point.

{{ use: mark-area-data-item-item(
    name = "end",
    prefix = "###"+${prefix},
    seriesType = ${seriesType},
    hasCoord = ${hasCoord},
    hasType = ${hasType},
    index = 1
) }}

{{ use: partial-animation(
    prefix = "#" + ${prefix},
    defaultAnimation = 'false'
) }}



{{ target: mark-area-data-item-item }}

{{ if: ${hasType} }}
#${prefix} type(string)

<ExampleUIControlEnum options="min,max,average" />

Specify this item is on min or max or average value.

**Options:**
+ `'min'` max value.
+ `'max'` min value.
+ `'average'` average value.
{{ /if }}

{{ if: ${hasCoord} }}
#${prefix} valueIndex(number)

<ExampleUIControlNumber min="0" max="1" step="1"  />

Specify the dimension on which min, max, average are calculated,
available when [type](~series-${seriesType}.markArea.data.type) used.
The value can be `0` (means xAxis, radiusAxis) or `1` (means yAxis, angleAxis),
using the dimension of the first axis by default.

#${prefix} valueDim(string)

Specify the dimension on which min, max, average are calculated,
available when [type](~series-${seriesType}.markArea.data.type) used.
The value can be the name of the dimension (for example, the value can be `x`, `angle` in line chart, and `open`, `close` in candlestick).

#${prefix} coord(Array)

The format is [start coordinate, end coordinate], where the coordinate system can be `x`, `y` on [cartesian](~grid), or `radius`, `angle` on [polar](~polar).
{{ /if }}

#${prefix} name(string) = '${name}'

Name of the marker, which will display as a label.

#${prefix} x(number)

<ExampleUIControlPercent default="0" />

x value on screen coordinate system, can be pixel number (like `5`), or percent value (like `'20%'`).

#${prefix} y(number)

<ExampleUIControlPercent default="0" />

y value on screen coordinate system, can be pixel number (like `5`), or percent value (like `'20%'`).

#${prefix} value(number)

value of the item, not necessary.

#${prefix} itemStyle(Object)

Style of the item.
`itemStyle` of start point and end point will be merged together.

{{ use: partial-item-style(
    prefix = "#"+${prefix}
) }}

#${prefix} label(Object)

Label style of the item.
Label style of start point and end point will be merged together.

{{ use: partial-label(
    prefix = '#'+${prefix}
) }}

#${prefix} emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "#" + ${prefix}
) }}

##${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "##"+${prefix}
) }}

##${prefix} label(Object)

{{ use: partial-label(
    prefix = '##'+${prefix}
) }}

#${prefix} blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

##${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "##"+${prefix}
) }}

##${prefix} label(Object)

{{ use: partial-label(
    prefix = '##'+${prefix}
) }}

