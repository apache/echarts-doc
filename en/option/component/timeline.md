
{{target: component-timeline}}

# timeline(Object)

`timeline` component, which provides different operational functions such as switch function between multiple `ECharts option` and play function.  

Here is the example: 

~[600x400](${galleryViewPath}doc-example/mix-timeline-all&edit=1&reset=1)

Different from other components, `timeline` component need to operate 『multiple options』  `timeline` .
Assume that a traditional ECharts option was called `atom option`. When `timeline` is used, the option which is introduced into ECharts becomes a `compound option`, a collection of multiple `atom option`.  As shown in the following example: 

```javascript
// as follows, baseOption is a 『atom option』, and every item in options array is also a 『atom option』.
// each『atom option』is a type of configuration items described in this document.
myChart.setOption(
    {
        baseOption: {
            timeline: {
                ...,
                data: ['2002-01-01', '2003-01-01', '2004-01-01']
            },
            title: {
                subtext: ' the data is from National Bureau of Statistics '
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

In the previous examples, every item in `timeline.data` corresponds to every `option` of `options` array. 

<br>
**precautions for use and the best practice: **

+ communal configuration item, which is recommended to be allocated in  `baseOption`. As `timeline` switching and playing, the corresponding  `option` in `option` array would merge with `baseOption` to become the final `option`.

+ In `options` array, if an array item was allocated with an attribute, every other array item must be allocated with a `options`, no defaults, or this attribute's operational effect would be left over. 


<br>
**Its compatibility with ECharts2: **

+ ECharts3 doesn't support timeline.notMerge parameter, which implies notMerge mode would not be supported any more. If this scene was needed, the option management could be conducted outside with a notMerge setting like setOption(option, true). 

+ Comparing ECharts3 with ECharts2, the define locations of their timeline attributes are different. The one in ECharts3 is moved to  `baseOption` and is regarded as a common component, which is also compatible with the timeline difine location of ECharts2. It is just not recommended to be written anymore.  


## show(boolean) = true

Specify whether to show the `timeline` component. It would not show under a setting of `false`, but its function still remains.  


## type(string) = 'slider'

At present, this attribute would be valid only if it is set as `slider`. It's unnecessary to change it.  


## axisType(string) = 'time'

types of axis. optional values: 

+ `'value'`
    value axis, applied to continuous data.
+ `'category'`
    category axis, applied to discrete category data.

+ `'time'`
    time axis, applied to continuous time. Compared with value axis, time axis is equiped with time formatting series data and calculate the scale differently. For example, for time axis, the span range decide whether month, week or day would be the minimum scale.   


## currentIndex(number) = 0

Indicating which is the currently selected item. For instance,if `currentIndex` is `0`, it indicates that the currently selected item is `timeline.data[0]` (namely, using `options[0]`). 


## autoPlay(boolean) = false

Specify whether to play automatically.


## rewind(boolean) = false

Indicates whether to play reversely.


## loop(boolean) = true

Indicates whether to loop playback.


## playInterval(number) = 2000

Refers to the play speed(interval between beats ), unit is millisecond(ms)  .



## realtime(boolean) = true,

Whether the view updates in real time during dragging a dot. 

## controlPosition(string) = 'left'

Refer to the location of『play』buttom. optional values: `'left'`、`'right'`. 


{{ use: partial-rect-layout(
    componentName='timeline'
) }}


## padding(number|Array) = 5

{{ use: partial-padding(componentName='timeline')}}


## orient(string) = 'horizontal'

format of layout, optional values are: 

+ `'vertical'`: vertical layout.
+ `'horizontal'`: horizontal layout.


## inverse(boolean) = false

+ Whether to reversely put the `timeline`, which means put it upside and down.


{{ use: partial-symbol(
    prefix='#',
    defaultSymbol="'emptyCircle'",
    defaultSymbolSize=10,
    name='timeline'
) }}


## lineStyle(Object)


### show(boolean) = true

Whether to show the axis. It could be set as `false` to not show the axis. It could also be endowed with various styles.  

{{ use:partial-line-style(
    prefix="##",
    name="timeline ",
    defaultWidth=2,
    defaultColor="'#304654'"
)}}


## label(Object)

There are 2 status text labels of axis, which are `normal` and `emphasis`. `normal` refers to the normal style of text, while `emphasis` is the highlighted style of text. For instance, `emphasis` would be adopted as text style for mouse hover and highlighted legend linkage.


### position(string|number) = 'auto'

the optional methods of configuration:

+ `'auto'`: 
    completely automatical deciding.

+ `'left'`: 
    Put it along the left margin.
    It is valid as [timline.orient](~timeline.orient) is set as `'horizontal'` .

+ `'right'`: It is valid as [timline.orient](~timeline.orient) is set as `'horizontal'`.
    Put it along the right margin.

+ `'top'`: 
    Put it along the margin of the top.

    It is valid as [timline.orient](~timeline.orient) is set as `'vertical'`.

+ `'bottom'`: 
    Put it along the margin of the bottom.
    It is valid as [timline.orient](~timeline.orient) is set as `'vertical'`.

+ `number`: 
    When it is assigned with a value, it indicates the distance between  `label` and axis. If it was `0` , `label` would be coincident with axis. It can be both positive and negtive value, deciding on which side of the axis the location of `label` would be.   


### normal(Object)

{{ use: partial-timeline-label(
    prefix="###",
    state="normal",
    textStyleDefaultColor="'#304654'"
) }}


### emphasis(Object)

{{ use: partial-timeline-label(
    prefix="###",
    state="emphasis",
    textStyleDefaultColor="'#c23531'"
) }}


## itemStyle(Object)

{{use:partial-item-style-desc(
    name="timeline "
) }}


### normal(Object)

{{ use:partial-item-style(
    prefix="###",
    name="timeline ",
    defaultColor="'#304654'",
    defaultBorderWidth=1
) }}


### emphasis(Object)

{{ use:partial-item-style(
    prefix="###",
    name="timeline ",
    defaultColor="'#c23531'",
    defaultBorderWidth=1
) }}


## checkpointStyle(Object)

The Graphic Styles of『current item』 (`checkpoint`).

{{ use: partial-symbol(
    prefix='##',
    defaultSymbol="'circle'",
    defaultSymbolSize=13,
    name='timeline.checkpointStyle '
) }}


### color(Color) = '#c23531'

The color of『current item』 (`checkpoint`)  in `timeline` component.

### borderWidth(number) = 5


The border-width of『current item』 (`checkpoint`)  in `timeline` component. 


### borderColor(Color) = 'rgba(194,53,49, 0.5)'

The border-color of『current item』 (`checkpoint`)  in `timeline` component. 


### animation(boolean) = true

In `timeline` component, whether there is animation in 『current item』 (`checkpoint`)  moving during the process of `timeline` playing and switching. 


### animationDuration(number) = 300

The animation duration of『current item』 (`checkpoint`)  in `timeline` component. 


### animationEasing(string) = 'quinticInOut'

The easing effect of animation of『current item』 (`checkpoint`)  in `timeline` component. Different easing effect could refers to [easing sample](${galleryViewPath}line-easing). 


## controlStyle(Object)

The style of『control button』.『control button』includes: 『play button』、『previous button』、『next button』.

### show(boolean) = true

Whether to show 『control button』. When it is set as, it would not show at all. 

### showPlayBtn(boolean) = true

Whether to show 『play button』.


### showPrevBtn(boolean) = true

Whether to show 『previous button』.


### showNextBtn(boolean) = true

Whether to show 『next button』.


### itemSize(number) = 22

the size of『control button』, and its unit is pixel (px).


### itemGap(number) = 12

the interval between『control button』, and its unit is pixel (px).


### position(string) = 'left'

the location of 『control button』.

+ As [timeline.orient](~timeline.orient) is set as `'horizontal'`, `'left'`、`'right'`are valid.

+ As [timeline.orient](~timeline.orient) is set as `'vertical'`, `'top'`、`'bottom'`are valid.


### playIcon(string)

the icon of 『play status』for『play button』.
{{ use: partial-icon-path }}


### stopIcon(string)

the icon of 『stop status』for『play button』.
{{ use: partial-icon-path }}


### prevIcon(string)

the icon of 『previous button』
{{ use: partial-icon-path }}


### nextIcon(string)

the icon of 『next button』
{{ use: partial-icon-path }}


### normal(Object)

the style of 『normal status』for control button.


#### color(Color) = '#304654'

button color.


#### borderColor(Color) = '#304654'

the color of button border.


#### borderWidth(number) = 1

the border width of button.


### emphasis(Object)

the button style in 『highlighted status』 (during its hover).


#### color(Color) = '#c23531'

button color.


#### borderColor(Color) = '#c23531'

the color of button border.


#### borderWidth(number) = 2

the width of button border.


## data(Array)

`timeline` data. Every item of `Array`, it could be a direct numerical. If you need to individually endow each data item with a style definition, the data item should be written as `Object`. In `Object`, the attribute of `value` is numerical value. Other attributes, such as the examples below, could cover the attribute configuration in  `timeline`.  



as follows: 

```javascript
[
    '2002-01-01',
    '2003-01-01',
    '2004-01-01',
    {
        value: '2005-01-01',
        tooltip: {          // Let `tooltip` to be displayed as mouse hovering to this item.
            formatter: '{b} xxxx'
        },
        symbol: 'diamond',  // the special setting of this item's figure.
        symbolSize: 16      // the special setting of this item's size.
    },
    '2006-01-01',
    '2007-01-01',
    '2008-01-01',
    '2009-01-01',
    '2010-01-01',
    {
        value: '2011-01-01',
        tooltip: {          // Let `tooltip` to be displayed as mouse hovering to this item.
            formatter: function (params) {
                return params.name + 'xxxx';
            }
        },
        symbol: 'diamond',
        symbolSize: 18
    },
]
```





{{target: partial-timeline-label}}

#${prefix} show(boolean) = true

Whether to show the label.


#${prefix} interval(string|number) = 'auto'

The interval of `label`. When it is assigned with a numerical value, such as  `2`, a label would show every 2 items.


#${prefix} rotate(prefix) = 0

the rotation angle of `label` . Positive values refer to counter clockwise rotation. 

#${prefix} formatter(string|Function) = null

{{use: axis-common-formatter-desc}}


#${prefix} textStyle(Object)

{{ use: partial-text-style(
    prefix="#" + ${prefix},
    name="timeline.lable." + ${state},
    defaultColor=${textStyleDefaultColor}
) }}
