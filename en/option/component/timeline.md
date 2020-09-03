
{{ target: component-timeline }}

# timeline(Object)

`timeline` component, which provides functions like switching and playing between multiple ECharts `options`.

Here is an example:

~[600x400](${galleryViewPath}doc-example/mix-timeline-all&edit=1&reset=1)

Different from other components, `timeline` component requires multiple options. If the traditional way of ECharts option is called *atomic option*, then, the option used along with timeline should be call a *compound option* composed with multiple atomic options. For example:

```javascript
// In the following example, baseOption is an *atomic option*, so as each item in options array.
// Each of the atomic option follows configuration introduced in this document.
myChart.setOption(
    {
        baseOption: {
            timeline: {
                ...,
                data: ['2002-01-01', '2003-01-01', '2004-01-01']
            },
            title: {
                subtext: ' Data is from National Bureau of Statistics '
            },
            grid: {...},
            xAxis: [...],
            yAxis: [...],
            series: [
                { // other configurations of series 1
                    type: 'bar',
                    ...
                },
                { // other configurations of series 2
                    type: 'line',
                    ...
                },
                { // other configurations of series 3
                    type: 'pie',
                    ...
                }
            ]
        },
        options: [
            { // it is an option corresponding to '2002-01-01'
                title: {
                text: 'the statistics of the year 2002'
                },
                series: [
                    {data: []}, // the data of series 1
                    {data: []}, // the data of series 2
                    {data: []}  // the data of series 3
                ]
            },
            { // it is an option corresponding to '2003-01-01'
                title: {
                    text: 'the statistics of the year 2003'
                },
                series: [
                    {data: []},
                    {data: []},
                    {data: []}
                ]
            },
            { // it is an option corresponding to '2004-01-01'
                title: {
                    text: 'the statistics of the year 2004'
                },
                series: [
                    {data: []},
                    {data: []},
                    {data: []}
                ]
            }
        ]
    }
);
```

In the above example, each item in `timeline.data` corresponds to each `option` of `options` array.

<br>
**Attention and Best Practice: **

+ Shared configuration items are recommended to be set in `baseOption`. When switching in `timeline`, `option` in corresponding `options` array will be merged with `baseOption` to form the final `option`.

+ In `options` array, if an attribute is configured in one of the options, then, it should also be configured in other options. Otherwise, this attribute will be ignored.

+ `options` in *compound option* doesn't support merge.

    That is to say, when calling `chart.setOption(rawOption)` after the first time, if `rawOption` is a *compound option* (meaning that it contains an array of `options`), then the new `rawOption.options` will replace the old one, instead of merging with it. Of course, `rawOption.baseOption` will be merged with that of old option normally.


<br>
**Compatibility with ECharts 2: **

+ ECharts3 doesn't support `timeline.notMerge` parameter any more, which implies *notMerge mode* is no longer supported. If you need this function, you may manage the option in your own program before passing to `setOption(option, true)`.

+ Comparing ECharts 3 with ECharts 2, the definition location of timeline attributes are different. The one in ECharts 3 is moved to  `baseOption` and is regarded as a seperate component, which is also compatible with the timeline definition location of ECharts 2. But it is not recommended to do so.

## show(boolean) = true

Whether to show the `timeline` component. It would not show with a setting of `false`, but its functions still remain.

## type(string) = 'slider'

This attribute has only one valid value as `slider` by now. You don't have to change it.

## axisType(string) = 'time'

Type of axis, whose values may be:

+ `'value'`
    Numeric axis, which is suitable for continuous data.
+ `'category'`
    Category axis, which is suitable for category data.
+ `'time'`
    Time axis, which is suitable for continuous time data. Compared with value axis, time axis is equipped with time formatting function and has a different method when calculating axis ticks. For example, for time axis, axis ticks may vary in choosing unit as month, week, date, or hour based on the range of data.

## currentIndex(number) = 0

Indicates which is the currently selected item. For instance, if `currentIndex` is `0`, it indicates that the currently selected item is `timeline.data[0]` (namely, using `options[0]`).

## autoPlay(boolean) = false

Whether to play automatically.

## rewind(boolean) = false

Whether supports playing reversely.

## loop(boolean) = true

Whether to loop playing.

## playInterval(number) = 2000

Indicates play speed (gap time between two state), whose unit is millisecond.

## realtime(boolean) = true

Whether the view updates in real time during dragging the control dot.

## controlPosition(string) = 'left'

Position of the play button, whose valid values are `'left'` and `'right'`.

{{ use: partial-rect-layout(
    componentName = 'timeline'
) }}

## padding(number|Array) = 5

{{ use: partial-padding(
    componentName = 'timeline'
) }}

## orient(string) = 'horizontal'

Orientation of the component, whose valid values are:

+ `'vertical'`: vertical layout.
+ `'horizontal'`: horizontal layout.

## inverse(boolean) = false

+ Whether to put the `timeline` component reversely, which makes the elements in the front to be at the end.

{{ use: partial-symbol(
    prefix = '#',
    defaultSymbol = "'emptyCircle'",
    defaultSymbolSize = 10,
    name = 'timeline'
) }}

## lineStyle(Object)

### show(boolean) = true

Whether to show the axis. It can be set to be `false` to hide the axis line to make a different style.

{{ use: partial-line-style(
    prefix = "##",
    name = "timeline ",
    defaultWidth = 2,
    defaultColor = "'#304654'"
) }}

## label(Object)

Label axis, `emphasis` is the highlighted style of text. For instance, text style in `emphasis` would be used when mouse hovers or legend connects.

### position(string|number) = 'auto'

Configurations:

+ `'auto'`:
    Automatic layout.

+ `'left'`:
    Put it along the left margin.
    It is valid when [timline.orient](~timeline.orient) is set as `'horizontal'` .

+ `'right'`:
    Put it along the right margin.
    It is valid when [timline.orient](~timeline.orient) is set as `'horizontal'`.

+ `'top'`:
    Put it along the margin of the top.
    It is valid when [timline.orient](~timeline.orient) is set as `'vertical'`.

+ `'bottom'`:
    Put it along the margin of the bottom.
    It is valid when [timline.orient](~timeline.orient) is set as `'vertical'`.

+ `number`:
    When it is assigned to be a a number value, it indicates the distance between `label` and axis. If it is set to be `0` , `label` would be at the same position with axis. Negative value is valid for the other side of the axis.

{{ use: partial-timeline-label(
    prefix = "##",
    state = "normal",
    textStyleDefaultColor = "'#304654'"
) }}

### emphasis(Object)

{{ use: partial-timeline-label(
    prefix = "###",
    state = "emphasis",
    textStyleDefaultColor = "'#c23531'"
) }}

## itemStyle(Object)

{{ use: partial-item-style-desc(
    name = "timeline "
) }}

{{ use: partial-item-style(
    prefix = "##",
    name = "timeline ",
    defaultColor = "'#304654'",
    defaultBorderWidth = 1
) }}

### emphasis(Object)

{{ use: partial-item-style(
    prefix = "###",
    name = "timeline ",
    defaultColor = "'#c23531'",
    defaultBorderWidth = 1
) }}

## checkpointStyle(Object)

Style of the selected item (`checkpoint`).

{{ use: partial-symbol(
    prefix = '##',
    defaultSymbol = "'circle'",
    defaultSymbolSize = 13,
    name = 'timeline.checkpointStyle '
) }}

### color(Color) = '#c23531'

Color of `checkpoint` in `timeline` component.

### borderWidth(number) = 5

The border-width of `checkpoint` in `timeline` component.

### borderColor(Color) = 'rgba(194,53,49, 0.5)'

The border-color of `checkpoint` in `timeline` component.

### animation(boolean) = true

In `timeline` component, whether there is animation in `checkpoint` moving during the process of `timeline` playing and switching.

### animationDuration(number) = 300

The animation duration of `checkpoint` in `timeline` component.

### animationEasing(string) = 'quinticInOut'

The easing effect of animation of `checkpoint` in `timeline` component. Refers to [easing sample](${galleryViewPath}line-easing) for different easing effects.

## controlStyle(Object)

The style of *control button*, which includes: *play button*, *previous button*, and *next button*.

### show(boolean) = true

Whether to show control button. `false` for hide all.

### showPlayBtn(boolean) = true

Whether to show play button.

### showPrevBtn(boolean) = true

Whether to show previous button.

### showNextBtn(boolean) = true

Whether to show next button.

### itemSize(number) = 22

Size of *control button*, in pixels (px).

### itemGap(number) = 12

Interval between *control button*, in pixels (px).

### position(string) = 'left'

the location of *control button*.

+ When [timeline.orient](~timeline.orient) is set to be `'horizontal'`, `'left'` and `'right'`are valid.

+ When [timeline.orient](~timeline.orient) is set to be `'vertical'`, `'top'` and `'bottom'`are valid.

### playIcon(string)

Icon of *play status* for *play button*.

{{ use: partial-icon-image-path() }}

### stopIcon(string)

Icon of *stop status* for *play button*.

{{ use: partial-icon-image-path() }}

### prevIcon(string)

Icon of *previous button*.

{{ use: partial-icon-image-path() }}

### nextIcon(string)

Icon of *next button*.

{{ use: partial-icon-image-path() }}

### color(Color) = '#304654'

Button color.

### borderColor(Color) = '#304654'

Color of button border.

### borderWidth(number) = 1

Border width of button.

### emphasis(Object)

Button style in *highlighted state* (when it's hovered by mouse).

#### color(Color) = '#c23531'

Button color.

#### borderColor(Color) = '#c23531'

Color of button border.

#### borderWidth(number) = 2

Width of button border.

## data(Array)

`timeline` data. Each item of `Array` can be a instant value. If you need to set style individually for a data item, the `data` item should be written as `Object`. In then `Object`, the attribute of `value` is numerical value. Other attributes, such as shown the examples below, could cover the attribute configurations in `timeline`.



as follows:

```javascript
[
    '2002-01-01',
    '2003-01-01',
    '2004-01-01',
    {
        value: '2005-01-01',
        tooltip: {          // enables `tooltip` to be displayed as mouse hovering to this item.
            formatter: '{b} xxxx'
        },
        symbol: 'diamond',  // the special setting of this item's symbol.
        symbolSize: 16      // the special setting of this item's size.
    },
    '2006-01-01',
    '2007-01-01',
    '2008-01-01',
    '2009-01-01',
    '2010-01-01',
    {
        value: '2011-01-01',
        tooltip: {          // enables `tooltip` to be displayed as mouse hovering to this item.
            formatter: function (params) {
                return params.name + 'xxxx';
            }
        },
        symbol: 'diamond',
        symbolSize: 18
    },
]
```



{{ target: partial-timeline-label }}

#${prefix} show(boolean) = true

Whether to show the label.

#${prefix} interval(string|number) = 'auto'

Interval of `label`. When it is assigned with a numerical value, such as  `2`, a label would show every 2 items.

#${prefix} rotate(prefix) = 0

Rotation angle of `label`, in which positive values refer to counter clockwise rotation.

#${prefix} formatter(string|Function) = null

{{ use: axis-common-formatter-desc() }}

{{ if: ${state} }}
{{ use: partial-text-style(
    prefix = ${prefix},
    name = "timeline.lable." + ${state},
    defaultColor = ${textStyleDefaultColor}
) }}

{{ else }}
{{ use: partial-text-style(
    prefix = ${prefix},
    name = "timeline.lable",
    defaultColor = ${textStyleDefaultColor}
) }}
{{ /if }}

