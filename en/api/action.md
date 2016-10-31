{{ target: action-series-query }}// optional; series index; could be an array of multiple series
    seriesIndex?: number|Array,
    // optional; series name; could be an array of multiple series
    seriesName?: string|Array,{{/target}}

{{ target: action-data-query }}// data index; could assign by name attribute when not defined
    dataIndex?: number,
    // optional; data name; ignored when dataIndex is defined
    name?: string{{/target}}


{{ target: action }}
# action

Chart actions supported by ECharts are triggered through [dispatchAction](~echartsInstance.dispatchAction).

**Attention: ** The `?:` note in the code shows that this attribute is optional. *EVENT:* stands for the event that triggers action.

## highlight(Action)

Highlights the given graphic element.

Series is specified through `seriesName` or `seriesIndex`. If another data needs to be specified, then use `dataIndex` or `name`.
```js
dispatchAction({
    type: 'highlight',
    {{ use: action-series-query }}
    // options are index of data
    dataIndex?: number,
    // options are data name
    name?: string
})
```

## downplay(Action)

Cancels highlighting graphic element.

Series is specified through `seriesName` or `seriesIndex`. If another data needs to be specified, then use `dataIndex` or `name`.
```js
dispatchAction({
    type: 'downplay',
    {{ use: action-series-query }}
    // options are index of data
    dataIndex?: number,
    // options are data name
    name?: string
})
```


<!--============= legend ==========-->
## legend

Actions related to [legend component](option.html#legend), which should include [legend component](option.html#legend) before use.

### legendSelect(Action)
Selects legend.

```js
dispatchAction({
    type: 'legendSelect',
    // legend name
    name: string
})
```

**EVENT:** [legendselected](~events.legendselected)

### legendUnSelect(Action)
Unselects the legend.

```js
dispatchAction({
    type: 'legendUnSelect',
    // legend name
    name: string
})
```

**EVENT:** [legendunselected](~events.legendunselected)

### legendToggleSelect(Action)
Toggles legend selecting state.
```js
dispatchAction({
    type: 'legendToggleSelect',
    // legend name
    name: string
})
```

**EVENT:** [legendselectchanged](~events.legendselectchanged)

<!--============= tooltip ==========-->
## tooltip

Actions related to [tooltip component](option.html#tooltip), which should include [tooltip component](option.html#tooltip) before use.

### showTip(Action)

Shows tooltip.

There are two usages as followed.

1 Display tooltip at certain position relative to container. If it cannot be displayed at the specified location, then it is invalid.
```js
dispatchAction({
    type: 'showTip',
    // x coordinate on screen
    x: number,
    // y coordinate on screen
    y: number,
    // Position of tooltip. Only works in this action.
    // Use tooltip.position in option by default.
    position: Array.<number>|string|Function
})
```

2 Specify graphic element, and display tooltip according to the tooltip configuration item.
```js
dispatchAction({
    type: 'showTip',
    // index of series, which is optional when trigger of tooltip is axis
    seriesIndex?: number,
    {{ use: action-data-query }},
    // Position of tooltip. Only works in this action.
    // Use tooltip.position in option by default.
    position: Array.<number>|string|Function
})
```

Parameter `position` is the same as [tooltip.position](option.html#tooltip.position).


### hideTip(Action)

Hides tooltip.

```js
dispatchAction({
    type: 'hideTip'
})
```

<!--============= dataZoom ==========-->
## dataZoom

Actions related to [data region zoom component](option.html#dataZoom), which should include [data region zoom component](option.html#dataZoom) before use.

### dataZoom(Action)

Zoom data region.

```js
dispatchAction({
    type: 'dataZoom',
    // optional; index of dataZoom component; useful for are multiple dataZoom components; 0 by default
    dataZoomIndex: number,
    // percentage of starting position; 0 - 100
    start: number,
    // percentage of ending position; 0 - 100
    end: number,
    // data value at starting location
    startValue: number,
    // data value at ending location
    endValue: number
})
```

**EVENT:** [datazoom](~events.datazoom)

<!--============= visualMap ==========-->
## visualMap

Actions related to [visual mapping component](option.html#visualMap), which should include [visual mapping component](option.html#visualMap) before use.

### selectDataRange(Action)

Selects data range of visual mapping.

```js
dispatchAction({
    type: 'selectDataRange',
    // optional; index of visualMap component; useful for are multiple visualMap components; 0 by default
    visualMapIndex: number,
    // continuous visualMap is different from discrete one
    // continuous visualMap is an array representing range of data values.
    // discrete visualMap is an object, whose key is category or piece index; value is `true` or `false`
    selected: Object|Array
})
```
?
**For example: **
```js
myChart.dispatchAction({
    type: 'selectDataRange',
    // select a value range between 20 and 40
    selected: [20, 40],
    // cancel selecting the second range
    selected: { 1: false },
    // cancel selecting `excellent` category
    selected: { 'excellent': false }
});

```

**EVENT:** [datarangeselected](~events.datarangeselected)

<!--============= timeline ==========-->
## timeline

Actions related to [timeline component](option.html#timeline), which should include [timeline component](option.html#timeline) before use.

### timelineChange(Action)

Sets the current time point.

```js
dispatchAction({
    type: 'timelineChange',
    // index of time point
    currentIndex: number
})
```

**EVENT:** [timelinechanged](~events.timelinechanged)

### timelinePlayChange(Action)

Toggles playing status of timeline.

```js
dispatchAction({
    type: 'timelinePlayChange',
    // laying status; true for auto-play
    playState: boolean
})
```

**EVENT:** [timelineplaychanged](~events.timelineplaychanged)

<!--============= toolbox ==========-->
## toolbox

Actions related to [toolbox component](option.html#toolbox), which should include [toolbox component](option.html#toolbox) before use.

### restore(Action)
Resets option.

```js
dispatchAction({
    type: 'restore'
})
```

**EVENT:** [restore](~events.restore)
<!--============= pie ==========-->
## pie

Actions related to [pie chart](option.html#series-pie), which should include [pie chart](option.html#series-pie) before use.

{{ use: action-select(
    componentType='pie',
    name='pie chart'
) }}

<!--============= map ==========-->
## map
Actions related to [map](option.html#series-map), which should include [map](option.html#series-map) before use.
{{ use: action-select(
    componentType='map',
    name='map area'
) }}


{{ target: action-select }}
### ${componentType}Select(Action)
Selects the specified ${name}.

```js
dispatchAction({
    type: '${componentType}Select',
    {{ use: action-series-query }}
    {{ use: action-data-query }}
})
```

**EVENT:** [${componentType}selected](~events.${componentType}selected)

### ${componentType}UnSelect(Action)
Cancels selecting specified ${name}.

```js
dispatchAction({
    type: '${componentType}UnSelect',
    {{ use: action-series-query }}
    {{ use: action-data-query }}
})
```
**EVENT:** [${componentType}unselected](~events.${componentType}unselected)

### ${componentType}ToggleSelect(Action)
Toggles selecting status of specified ${name}.

```js
dispatchAction({
    type: '${componentType}ToggleSelect',
    {{ use: action-series-query }}
    {{ use: action-data-query }}
})
```
**EVENT:** [${componentType}selectchanged](~events.${componentType}selectchanged)
