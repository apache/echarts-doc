
{{ target: partial-mark-line }}

#${prefix} markLine(Object)

Use a line in the chart to illustrate.

{{ use: partial-silent(
    prefix = "#" + ${prefix}
) }}

##${prefix} symbol(string|Array)

Symbol type at the two ends of the mark line. It can be an array for two ends, or assigned separately. See [data.symbol](~series-${seriesType}.markLine.data.0.symbol) for more format information.

##${prefix} symbolSize(number|Array)

Symbol size at the two ends of the mark line. It can be an array for two ends, or assigned separately.

**Attention: ** You cannot assign width and height separately as normal `symbolSize`.

##${prefix} precision(number) = 2

Precision of marking line value, which is useful when displaying average value mark line.

##${prefix} label(Object)

Mark line text.

{{ use: mark-line-label(
    prefix = ${prefix} + '##'
) }}

##${prefix} lineStyle(Object)

Mark line style.

{{ use: partial-line-style(
    prefix = "##" + ${prefix},
    defaultColor = null,
    defaultLineType = 'dashed',
    hasCurveness = true
) }}

##${prefix} emphasis(Object)

Emphasis status of mark line.

{{ use: partial-emphasis-disabled(
    prefix = "##" + ${prefix}
) }}

###${prefix} label(Object)

{{ use: mark-line-label(
    prefix = ${prefix} + '###'
) }}

###${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = "###" + ${prefix}
) }}

##${prefix} blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Whether to blur follows the series.

###${prefix} label(Object)

{{ use: mark-line-label(
    prefix = ${prefix} + '###'
) }}

###${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = "###" + ${prefix}
) }}

##${prefix} data(*)

Data array of marking line. Every array item can be an array of one or two values, representing starting and ending point of the line, and every item is an object. Here are several ways to assign the positions of starting and ending point.

1. Assign coordinate according to container with [x](~series-${seriesType}.markLine.data.0.x), [y](~series-${seriesType}.markLine.data.0.y) attribute, in which pixel values and percentage are supported.

{{ if: ${hasCoord} }}
2. Assign coordinate position with [coord](~series-${seriesType}.markLine.data.0.coord) attribute, in which `'min'`, `'max'`, `'average'` are supported for each dimension.
{{ /if }}{{ if: ${hasType} }}
3. Use [type](~series-${seriesType}.markLine.data.0.type) attribute to mark the maximum and minimum values in the series, in which [valueIndex](~series-${seriesType}.markLine.data.0.valueIndex) or [valueDim](~series-${seriesType}.markLine.data.0.valueDim) can be used to assign the dimension.

4. You may also create a mark line in Cartesian coordinate at a specific position in X or Y axis by assigning `xAxis` or `yAxis`. See [scatter-weight](${galleryEditorPath}scatter-weight) for example.
{{ /if }}

When multiple attributes exist, priority is as the above order.

{{ if: ${hasType} }}
You may also set the type of mark line through `type`, stating whether it is for the maximum value or average value. Likewise, dimensions can be assigned through `valueIndex`.
{{ /if }}

```
data: [

{{ if: ${hasType} }}{
        name: 'average line',
        // 'average', 'min', and 'max' are supported
        type: 'average'
    },
    {
        name: 'Horizontal line with Y value at 100',
        yAxis: 100
    },
    [
        {
            // Use the same name with starting and ending point
            name: 'Minimum to Maximum',
            type: 'min'
        },
        {
            type: 'max'
        }
    ],
{{ /if }}{{ if: ${hasCoord} }}[
        {
            name: 'Markline between two points',
            coord: [10, 20]
        },
        {
            coord: [20, 30]
        }
    ], [{
        // Mark line with a fixed X position in starting point. This is used to generate an arrow pointing to maximum line.
        yAxis: 'max',
        x: '90%'
    }, {
        type: 'max'
    }],
{{ /if }}[
        {
            name: 'Mark line between two points',
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
    name = "starting point",
    prefix = "###"+${prefix},
    seriesType = ${seriesType},
    hasCoord = ${hasCoord},
    hasType = ${hasType},
    index = 0
) }}

###${prefix} 1(Object)

Data of the ending point.

{{ use: mark-line-data-item-item(
    name = "ending point",
    prefix = "###"+${prefix},
    seriesType = ${seriesType},
    hasCoord = ${hasCoord},
    hasType = ${hasType},
    index = 1
) }}

{{ use: partial-animation(
    prefix = "#" + ${prefix}
) }}



{{ target: mark-line-label }}

#${prefix} show(boolean) = ${defaultShowLabel|default(true)}

Whether show label or not.

#${prefix} position(string) = 'end'

Positions of labels can be:
+ `'start'` starting point of the line.
+ `'middle'` middle point of the line.
+ `'end'` ending point of the line.

Since v4.7.0, more label positions are supported: `'start'`, `'middle'`, `'end'`, `'insideStartTop'`, `'insideStartBottom'`, `'insideMiddleTop'`, `'insideMiddleBottom'`, `'insideEndTop'`, `'insideEndBottom'`.

`'insideMiddleBottom'` is the same as `'middle'`. Position is as the following chart.

The distance between labels and mark lines can be set with [label.distance](~series-${seriesType}.markLine.label.distance).

~[800x500](${galleryViewPath}line-markline&reset=1&edit=1)

#${prefix} distance(number|Array)

The distance between labels and mark lines. If it's an array, then the first element is the horizontal distance, and the second element is the vertical distance. If it's a number, then the horizontal and vertical distances are the same.

#${prefix} formatter(string|Function)

{{ use: partial-1d-data-label-formatter() }}

{{ use: partial-text-style(
    prefix = ${prefix},
    noAlign = true,
    noVerticalAlign = true,
    defaultColor = '',
    defaultFontSize = '',
    enableAutoColor = true
) }}



{{ target: mark-line-data-item-item }}

{{ if: ${hasType} }}
#${prefix} type(string)

<ExampleUIControlEnum options="min,max,average" />

Special label types, are used to label maximum value, minimum value and so on.

**Options are:**
+ `'min'` minimum value.
+ `'max'` maximum value.
+ `'average'` average value.
+ `'median'` median value.
{{ /if }}

{{ if: ${hasCoord} }}
#${prefix} valueIndex(number)

<ExampleUIControlNumber min="0" max="1" step="1"  />

Works only when [type](~series-${seriesType}.markLine.data.type) is assigned. It is used to state the dimension used to calculate maximum value or minimum value. It may be `0` (for xAxis, or radiusAxis), or `1` (for yAxis, or angleAxis). Dimension of the first numeric axis is used by default.

#${prefix} valueDim(string)

Works only when [type](~series-${seriesType}.markLine.data.type) is assigned. It is used to state the dimension used to calculate maximum value or minimum value. It may be the direct name of a dimension, like `x`, or `angle` for line charts, or `open`, or `close` for candlestick charts.

#${prefix} coord(Array)

Coordinates of the starting point or ending point, whose format depends on the coordinate of the series. It can be `x`, and `y` for [rectangular coordinates](~grid), or `radius`, and `angle` for [polar coordinates](~polar).

{{ use: marker-coord-explain() }}
{{ /if }}

#${prefix} name(string) = '${name}'

Name of the marker, which will display as a label.

#${prefix} x(number)

<ExampleUIControlPercent default="0" />

X position according to container, in pixel.

#${prefix} y(number)

<ExampleUIControlPercent default="0" />

Y position according to container, in pixel.

#${prefix} xAxis(number|string)

Markline at x at given value, which only works for single data item. Example:

```
data: [{
    name: 'A vertical line with X valued 100',
    xAxis: 100
}]
```

or if xAxis is in `'time'` type, it can be set as:

```
{
    name: 'A vertical line with X valued "2020-01-01"',
    xAxis: '2020-01-01'
}]
```

#${prefix} yAxis(number|string)

Markline at y at given value, which only works for single data item. Example:

```
data: [{
    name: 'A horizontal line with X valued 100',
    yAxis: 100
}]
```

or if yAxis is in `'time'` type, it can be set as:

```
{
    name: 'A horizontal line with Y valued "2020-01-01"',
    yAxis: '2020-01-01'
}]
```

#${prefix} value(number)

Label value, which can be ignored.

{{ use: partial-symbol(
    prefix = ${prefix},
    name = ${index} === 0 ? 'starting point' : 'ending point'
) }}

#${prefix} lineStyle(Object)

Line style of this data item, which will be merged with `lineStyle` of starting point and ending point.

{{ use: partial-line-style(
    prefix = "#"+${prefix},
    hasCurveness = true
) }}

#${prefix} label(Object)

Label of this data item, which will be merged with `label` of starting point and ending point.

{{ use: mark-line-label(
    prefix = '#'+${prefix}
) }}

#${prefix} emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "#" + ${prefix}
) }}

##${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = "##"+${prefix},
    hasCurveness = true
) }}

##${prefix} label(Object)

{{ use: mark-line-label(
    prefix = '##'+${prefix}
) }}

#${prefix} blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

##${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = "##"+${prefix},
    hasCurveness = true
) }}

##${prefix} label(Object)

{{ use: mark-line-label(
    prefix = '##'+${prefix}
) }}

