
{{ target: component-timeline }}

# timeline(Object)

`timeline` component, which provides functions like switching and playing between multiple ECharts `options`.

Here is an example:

~[600x400](${galleryViewPath}doc-example/mix-timeline-all&edit=1&reset=1)

Different from other cases, `timeline` component requires multiple options. We call first the parameter of `setOption` as `ECOption`, and call the traditional single ECharts option as `ECUnitOption`.

+ In the case that `timeline` and `media query` are not set, an `ECUnitOption` is an `ECOption`.
+ In the case that `timeline` or `media query` are set, an `ECOption` is made up with several `ECUnitOption`s.
    + The properties at the root of `ECOption` form an `ECUnitOption`, which is also called `baseOption`, representing the default settings.
    + Each item of the array `options` form an `ECUnitOption`, which can be also called `switchableOption`, representing options for each time tick.
+ `baseOption` and one `switchableOption` are used to calculate the `finalOption`, based on which the chart will be final rendered.

For example:

```javascript
myChart.setOption({
    // This is the properties of `baseOption`.
    timeline: {
        ...,
        // each item in `timeline.data` corresponds to each
        // `option` in `options` array.
        data: ['2002-01-01', '2003-01-01', '2004-01-01']
    },
    title: {
        subtext: ' Data is from National Bureau of Statistics '
    },
    grid: { ... },
    xAxis: [ ... ],
    yAxis: [ ... ],
    series: [{
        // other configurations of series 1
        type: 'bar',
        ...
    }, {
        // other configurations of series 2
        type: 'line',
        ...
    }, {
        // other configurations of series 3
        type: 'pie',
        ...
    }],
    // `switchableOption`s:
    options: [{
        // it is an option corresponding to '2002-01-01'
        title: {
        text: 'the statistics of the year 2002'
        },
        series: [
            { data: [] }, // the data of series 1
            { data: [] }, // the data of series 2
            { data: [] }  // the data of series 3
        ]
    }, {
        // it is an option corresponding to '2003-01-01'
        title: {
            text: 'the statistics of the year 2003'
        },
        series: [
            { data: [] },
            { data: [] },
            { data: [] }
        ]
    }, {
        // it is an option corresponding to '2004-01-01'
        title: {
            text: 'the statistics of the year 2004'
        },
        series: [
            { data: [] },
            { data: [] },
            { data: [] }
        ]
    }]
});
```

<br>
**How the `finalOption` calculated?**

{{ use: partial-timeline-merge-strategy() }}

<br>
**Compatibility with ECharts 4:**

We also support these equivalent setting styles:
```ts
option = {
    baseOption: {
        timeline: {},
        series: [],
        // ... other properties of baseOption.
    },
    options: []
};
```

## show(boolean) = true

<ExampleUIControlBoolean default="true" />

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

<ExampleUIControlNumber min="0" step="1" />

Indicates which is the currently selected item. For instance, if `currentIndex` is `0`, it indicates that the currently selected item is `timeline.data[0]` (namely, using `options[0]`).

## autoPlay(boolean) = false

<ExampleUIControlBoolean />

Whether to play automatically.

## rewind(boolean) = false

<ExampleUIControlBoolean />

Whether supports playing reversely.

## loop(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to loop playing.

## playInterval(number) = 2000

<ExampleUIControlNumber min="0" step="20" default="2000" />

Indicates play speed (gap time between two state), whose unit is millisecond.

## realtime(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether the view updates in real time during dragging the control dot.

## replaceMerge(Array|string) = undefined

{{ use: partial-timeline-merge-strategy() }}

<br>

The value of `replaceMerge` can be a `mainType` of a component, like `replaceMerge: 'xAxis'`, or an array of `mainType`s, like `replaceMerge: ['xAxis', 'series']`.

`replaceMerge` is usually used in this scenario: if users intending to replace all of the current series with the new series corresponding to the next time tick without any merging, users can set: `replaceMerge: 'series'`, and make sure that the series are in different id or no id.

See this [example](${galleryEditorPath}doc-example/timeline-dynamic-series&edit=1&reset=1).

## controlPosition(string) = 'left'

<ExampleUIControlEnum options="left,right" />

Position of the play button, whose valid values are `'left'` and `'right'`.

{{ use: partial-rect-layout(
    componentName = 'timeline'
) }}

## padding(number|Array) = 5

<ExampleUIControlVector default="5,5,5,5" dims="T,R,B,L" />

{{ use: partial-padding(
    componentName = 'timeline'
) }}

## orient(string) = 'horizontal'

<ExampleUIControlEnum options="horizontal,vertical" default="horizontal" />

Orientation of the component, whose valid values are:

+ `'vertical'`: vertical layout.
+ `'horizontal'`: horizontal layout.

## inverse(boolean) = false

<ExampleUIControlBoolean />

+ Whether to put the `timeline` component reversely, which makes the elements in the front to be at the end.

{{ use: partial-symbol(
    prefix = '#',
    defaultSymbol = "'emptyCircle'",
    defaultSymbolSize = 10,
    name = 'timeline'
) }}

## lineStyle(Object)

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the axis. It can be set to be `false` to hide the axis line to make a different style.

{{ use: partial-line-style(
    prefix = "##",
    name = "timeline ",
    defaultWidth = 2,
    defaultColor = "'#DAE1F5'"
) }}

## label(Object)

Label axis, `emphasis` is the highlighted style of text. For instance, text style in `emphasis` would be used when mouse hovers or legend connects.

### position(string|number) = 'auto'

<ExampleUIControlBoolean default="true" />

<ExampleUIControlEnum options="auto,left,right,top,bottom" />

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
    textStyleDefaultColor = "'#A4B1D7'"
) }}

## itemStyle(Object)

{{ use: partial-item-style-desc(
    name = "timeline "
) }}

{{ use: partial-item-style(
    prefix = "##",
    name = "timeline ",
    defaultColor = "'#A4B1D7'",
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

{{ use: partial-item-style(
    prefix = '##',
    defaultColor = "'#316bf3'",
    defaultBorderColor = "'#fff'",
    defaultBorderWidth = 2,
    defaultShadowBlur = 2,
    defaultShadowOffsetX = 1,
    defaultShadowOffsetY = 1,
    defaultShadowColor = "'rgba(0, 0, 0, 0.3)'"
) }}

### animation(boolean) = true

<ExampleUIControlBoolean default="true" />

In `timeline` component, whether there is animation in `checkpoint` moving during the process of `timeline` playing and switching.

### animationDuration(number) = 300

<ExampleUIControlNumber min="0" step="20" default="300" />

The animation duration of `checkpoint` in `timeline` component.

### animationEasing(string) = 'quinticInOut'

<ExampleUIControlEnum default="quinticInOut" options="linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut" />

The easing effect of animation of `checkpoint` in `timeline` component. Refers to [easing sample](${galleryViewPath}line-easing) for different easing effects.

## controlStyle(Object)

The style of *control button*, which includes: *play button*, *previous button*, and *next button*.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show control button. `false` for hide all.

### showPlayBtn(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show play button.

### showPrevBtn(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show previous button.

### showNextBtn(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show next button.

### itemSize(number) = 22

<ExampleUIControlNumber min="0" step="0.5" default="22" />

Size of *control button*, in pixels (px).

### itemGap(number) = 12

<ExampleUIControlNumber min="0" step="0.5" default="12" />

Interval between *control button*, in pixels (px).

### position(string) = 'left'

<ExampleUIControlEnum options="left,right,top,bottom" />

the location of *control button*.

+ When [timeline.orient](~timeline.orient) is set to be `'horizontal'`, `'left'` and `'right'`are valid.

+ When [timeline.orient](~timeline.orient) is set to be `'vertical'`, `'top'` and `'bottom'`are valid.

### playIcon(string)

<ExampleUIControlIcon />

Icon of *play status* for *play button*.

{{ use: partial-icon-image-path() }}

### stopIcon(string)

<ExampleUIControlIcon />

Icon of *stop status* for *play button*.

{{ use: partial-icon-image-path() }}

### prevIcon(string)

<ExampleUIControlIcon />

Icon of *previous button*.

{{ use: partial-icon-image-path() }}

### nextIcon(string)

<ExampleUIControlIcon />

Icon of *next button*.

{{ use: partial-icon-image-path() }}

{{ use: partial-item-style(
    prefix = '##',
    defaultColor = "'#A4B1D7'",
    defaultBorderColor = "'#A4B1D7'",
    defaultBorderWidth = 1
) }}

## progress(Object)

Styles of line, labels and symbols in progress.

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = "###",
    defaultColor = "'#316BF3'"
) }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###",
    defaultColor = "'#316BF3'"
) }}

### label(Object)

{{ use: partial-timeline-label(
    prefix = "###",
    textStyleDefaultColor = "'#6f778d'"
) }}

## emphasis(Object)

### label(Object)

{{ use: partial-timeline-label(
    prefix = "###",
    state = "emphasis",
    textStyleDefaultColor = "'#6f778d'"
) }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###",
    name = "timeline ",
    defaultColor = "'#316BF3'",
    defaultBorderWidth = 1
) }}

### checkpointStyle(Object)

Style of the checkpoint.

### controlStyle(Object)

Style of the control button.

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

<ExampleUIControlBoolean default="true" />

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



{{ target: partial-timeline-merge-strategy }}

When initializing, a `switchableOption` corresponding to the current time tick are merged into `baseOption` to form the `finalOption`. Each time the current tick changed, the new `switchableOption` corresponding to the new time tick are merged into the `finalOption`.

There are two merging strategy.
+ By default, use `NORMAL_MERGE`.
+ If [timeline.replaceMerge](~option.html#timeline.replaceMerge) is set, use `REPLACE_MERGE`. See [setOption](~api.html#echartsInstance.setOption) for more details of `REPLACE_MERGE`.

