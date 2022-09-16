
{{ target: series-themeRiver }}

# series.themeRiver(Object)

** Theme river **

It is a special flow graph which is mainly used to present the changes of an event or theme during a period.

**Sample: **

~[700x580](${galleryViewPath}themeRiver-lastfm&edit=1&reset=1)


<br>
**visual encoding: **

The ribbon-shape river branches in different colors in theme river encode variable events or themes. The width of river branches encode the value of the original dataset.

What's more, the time attribute of the orinigal dataset would map to a single time axis.

## type(string) = 'themeRiver'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby(
    defaultColorBy = "'data'"
) }}

{{ use: partial-rect-layout-width-height(
    componentName = 'thmemRiver',
    defaultLeft = '5%',
    defaultRight = '5%',
    defaultTop = '5%',
    defaultBottom = '5%',
    defaultWidth = 'null',
    defaultHeight = 'null'
) }}

** Notes: **
The positional information of the whole theme river view reuses the positional information of a single time axis, which are left, top, right and bottom.

## coordinateSystem(string) = "single"

coordinate. The theme river adopts single time axis.

## boundaryGap(Array) = ["10%", "10%"]

The boundary gap of the direction orthogonal with coordinate axis in diagram, which is set to adjust the diagram position, keeping it on the screen center instead of the upside or downside of the screen.

## singleAxisIndex(number) = 0

The index of single time axis, which defaults to be 0 because it contains only one axis.

## label(Object)

`label` describes style of text labels with which each ribbon-shape river branch corresponds in theme river.

{{ use: partial-label(
    prefix = "##",
    defaultShowLabel = true,
    defaultPosition = "'left'",
    defaultMargin = 4,
    noAlign = true,
    noVerticalAlign = true,
    defaultColor = "'#000'",
    defaultFontSize = 11
) }}

## labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '##',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## itemStyle(Object)

style of each ribbon-shape river branch in theme river.

{{ use: partial-item-style(
    prefix = "##",
    useDecal = true
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

{{ use: themeRiver-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state.

{{ use: themeRiver-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: themeRiver-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## data(Array)

```ts
data: [
    ["2015/11/09",10,"DQ"],
    ["2015/11/10",10,"DQ"],
    ["2015/11/11",10,"DQ"],
    ["2015/11/08",10,"SS"],
    ["2015/11/09",10,"SS"],
    ["2015/11/10",10,"SS"],
    ["2015/11/11",10,"SS"],
    ["2015/11/12",10,"SS"],
    ["2015/11/13",10,"QG"],
    ["2015/11/08",10,"QG"],
    ["2015/11/11",10,"QG"],
    ["2015/11/13",10,"QG"],
]
```
**data specification: **

As what is shown above, the data format of theme river is double dimensional array. Each item of the inner array consists of the time attribute , the value at a time point and the name of an event or theme. It needs to be noticed that you should provide an event or theme with a complete time quantum as main river. Other events and themes are based on the main river. The default value of time point should be set as 0. That is to say other events or themes are included in the main river. Once they are beyond the main river, the layout would be wrong. That is because a baseline should be calculated to draw each event as ribbon shape when the whole diagram layout is calculated. As the example above, the event "SS" is a main river. After dispose, we would complete these 3 default time points with the format of ["2015/11/08",0,"DQ"], ["2015/11/12",0,"DQ"], ［"2015/11/13",0,"DQ"］, making it align with the main river. From what is mentioned, we could set default value on any position of a complete time period.

### date(string)

the time attribute of time and theme.

### value(number)

the value of an event or theme at a time point.

### name(string)

the name of an event or theme.

{{ use: partial-tooltip-in-series() }}



{{ target: themeRiver-state }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    defaultPosition = "'left'",
    defaultMargin = 4,
    noAlign = true,
    noVerticalAlign = true,
    defaultColor = "'#000'",
    defaultFontSize = 11
) }}

#${prefix} labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '#' + ${prefix}
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

