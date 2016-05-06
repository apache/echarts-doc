{{ target: action-series-query }}// Series index can be chosen, this can be an array specifying multiple series.
    seriesIndex?: number|Array,
    // Series names can be chosen, this can be an array assigning multiple series.
    seriesName?: string|Array,{{/target}}

{{ target: action-data-query }}//If index of data is not specified, data can also be specified through name attribute based on name. 
    dataIndex?: number,
    // Data names can be chosen, but can be ingored when dataIndex exists.
    name?: string{{/target}}


{{ target: action }}
# action

Charts supported in ECharts are triggered through [dispatchAction](~echartsInstance.dispatchAction) .

**Attention：**  `?:`in code representing that  this attribute is optional. *EVENT:* is the event that action triggers accordingly. 

## highlight(Action)

Data graphics assigned by highlight.

Specify series through `seriesName` or `seriesIndex`. If another data needs to be specified, then assign another `dataIndex`or`name`.
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

Cancel data garphic assigned by highlight. 

Specify series through `seriesName`or`seriesIndex`.If another data needs to be assigned , then assign another `dataIndex`or`name`.
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

[legend component](option.html#legend) related acts can not be used before introducing [legend component](option.html#legend).

### legendSelect(Action)
Select legend.

```js
dispatchAction({
    type: 'legendSelect',
    // Legend name
    name: string
})
```

**EVENT:** [legendselected](~events.legendselected)

### legendUnSelect(Action)
Uncheck the legend.

```js
dispatchAction({
    type: 'legendUnSelect',
    // legend name
    name: string
})
```

**EVENT:** [legendunselected](~events.legendunselected)

### legendToggleSelect(Action)
Change the legend selected.
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

[tooltip component](option.html#tooltip)related acts can not be used before introducing [tooltip component](option.html#tooltip).

### showTip(Action)

Show tip.

There are two ways as followed. 

1 Display a tooltip at the specified location  in the relative container, if it cannot be displayed at the specified location,then it  is not valid.
```js
dispatchAction({
    type: 'showTip',
    // x coordinate on screen
    x: number,
    // y coordinate on screen
    y: number
})
```

2 Specifying the data graphics, display a tooltip according to the tooltip configuration items.
```js
dispatchAction({
    type: 'showTip',
    // index of series, which is optional when trigger of tooltip is axis.
    seriesIndex?: number,
    {{ use: action-data-query }}
})
```

### hideTip(Action)

Hide tip.

```js
dispatchAction({
    type: 'hideTip'
})
```

<!--============= dataZoom ==========-->
## dataZoom

[data region zoom component](option.html#dataZoom)related acts can not be used before introducing [data region zoom component](option.html#dataZoom).

### dataZoom(Action)

Zoom data region.

```js
dispatchAction({
    type: 'dataZoom',
    // Options are open, index of dataZoom component, available when there are multiple dataZoom components, it is 0 by default.
    dataZoomIndex: number,
    // data value at starting location, 0 - 100
    start: number,
    // data value at finishing location, 0 - 100
    end: number,
    // data value at starting location
    startValue: number,
    // data value at finishing location
    endValue: number
})
```

**EVENT:** [datazoom](~events.datazoom)

<!--============= visualMap ==========-->
## visualMap

[visual mapping component](option.html#visualMap)related acts can not be used before introducing[visual mapping component](option.html#visualMap).

### selectDataRange(Action)

Select data value range of map.

```js
dispatchAction({
    type: 'selectDataRange',
    // Options are open, index of visualMap component, available when there are multiple visualMap components, it is 0 by default.
    visualMapIndex: number,
    // Continuous visualMap is different from discrete visualMap 
    // Continuous visualMap is an array that representing data value range.
    // Discrete visualMap is an object, the key value is the index of the category or section.Value is `true`, `false`
    selected: Object|Array
})
```
?
**For example：**
```js
myChart.dispatchAction({
    type: 'selectDataRange',
    // Select a value range between 20 and 40 
    selected: [20, 40],
    // Cancel selecting second paragraph
    selected: { 1: false },
    // Cancel the selected category `excellent`
    selected: { 'excellent': false }
});

```

**EVENT:** [datarangeselected](~events.datarangeselected)

<!--============= timeline ==========-->
## timeline

[timeline component](option.html#timeline)related acts can not be used before introducing[timeline component](option.html#timeline).

### timelineChange(Action)

Set the current time point.。

```js
dispatchAction({
    type: 'timelineChange',
    // index of time point
    currentIndex: number
})
```

**EVENT:** [timelinechanged](~events.timelinechanged)

### timelinePlayChange(Action)

Switch timeline to play status.

```js
dispatchAction({
    type: 'timelinePlayChange',
    // state of play, true is auto-play
    playState: boolean
})
```

**EVENT:** [timelineplaychanged](~events.timelineplaychanged)

<!--============= toolbox ==========-->
## toolbox

[toolbar component](option.html#toolbox)related acts can not be used before introducing[toolbar component](option.html#toolbox).
### restore(Action)
Reset option.

```js
dispatchAction({
    type: 'restore'
})
```

**EVENT:** [restore](~events.restore)
<!--============= pie ==========-->
## pie

[pie chart](option.html#series-pie)related acts can not be used before introducing[pie chart](option.html#series-pie).

{{ use: action-select(
    componentType='pie',
    name='pie chart'
) }}

<!--============= map ==========-->
## map
[map](option.html#series-map)related acts can not be used before introducing [map](option.html#series-map).
{{ use: action-select(
    componentType='map',
    name='map area'
) }}


{{ target: action-select }}
### ${componentType}Select(Action)
Select the specified ${name}.

```js
dispatchAction({
    type: '${componentType}Select',
    {{ use: action-series-query }}
    {{ use: action-data-query }}
})
```

**EVENT:** [${componentType}selected](~events.${componentType}selected)

### ${componentType}UnSelect(Action)
Cancel the selected specified ${name}.

```js
dispatchAction({
    type: '${componentType}UnSelect',
    {{ use: action-series-query }}
    {{ use: action-data-query }}
})
```
**EVENT:** [${componentType}unselected](~events.${componentType}unselected)

### ${componentType}ToggleSelect(Action)
Change the selected status of specified ${name}.

```js
dispatchAction({
    type: '${componentType}ToggleSelect',
    {{ use: action-series-query }}
    {{ use: action-data-query }}
})
```
**EVENT:** [${componentType}selectchanged](~events.${componentType}selectchanged)