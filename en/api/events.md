{{ target: events }}
# events

Event-handling functions are mainly added through [on](~echartsInstance.on) in ECharts. This document describes all event list in ECharts.

Event in ECharts can be divided in two kinds. One is mouse event, which is triggered when mouse clicks on certain component, the other is triggered after dispatches [dispatchAction](~echartsInstance.dispatchAction).

**For example:**
```js
myChart.on('click', function (params) {
    console.log(params);
});

myChart.on('legendselectchanged', function (params) {
    console.log(params);
});

chart.on('click', 'series.line', function (params) {
    console.log(params);
});

chart.on('mouseover', {seriesIndex: 1, name: 'xx'}, function (params) {
    console.log(params);
});
```

See [on](~echartsInstance.on) for more detailed info.

## Mouse events

Event parameters of mouse events are attributes of event object. The following shows basic parameters for chart click events. Other charts, like pie charts, may have additional parameters like `percent`. Please refer to callback `params` of each chart's label formatter.

```js
{
    // type of the component to which the clicked glyph belongs
    // i.e., 'series', 'markLine', 'markPoint', 'timeLine'
    componentType: string,
    // series type (make sense when componentType is 'series')
    // i.e., 'line', 'bar', 'pie'
    seriesType: string,
    // series index in incoming option.series (make sense when componentType is 'series')
    seriesIndex: number,
    // series name (make sense when componentType is 'series')
    seriesName: string,
    // data name, category name
    name: string,
    // data index in incoming data array
    dataIndex: number,
    // incoming rwa data item
    data: Object,
    // Some series, such as sankey or graph, maintains more than
    // one types of data (nodeData and edgeData), which can be
    // distinguished from each other by dataType with its value
    // 'node' and 'edge'.
    // On the other hand, most series has only one type of data,
    // where dataType is not needed.
    dataType: string,
    // incoming data value
    value: number|Array,
    // color of component (make sense when componentType is 'series')
    color: string,
    // User info (only available in graphic component
    // and custom series, if element option has info
    // property, e.g., {type: 'circle', info: {some: 123}})
    info: *
}
```

Mouse events contain `'click'`, `'dblclick'`, `'mousedown'`, `'mousemove'`, `'mouseup'`, `'mouseover'`, `'mouseout'`, `'globalout'`, `'contextmenu'`.

See [Events and actions in ECharts](tutorial.html#Events%20and%20actions%20in%20ECharts%0D)

### click(Event)
### dblclick(Event)
### mousedown(Event)
### mousemove(Event)
### mouseup(Event)
### mouseover(Event)
### mouseout(Event)
### globalout(Event)
### contextmenu(Event)

## legendselectchanged(Event)
**ACTION:** [legendToggleSelect](~action.legend.legendToggleSelect)
Event emitted after legend selecting state changes.

**Attention: ** This event will be emitted when users toggle legend button in legend component.
```js
{
    type: 'legendselectchanged',
    // change legend name
    name: string
    // table of all legend selecting states
    selected: Object
}
```
## legendselected(Event)
**ACTION:** [legendSelect](~action.legend.legendSelect)
Event emitted after legend is selected.

```js
{
    type: 'legendselected',
    // name of selected legend
    name: string
    // table of all legend selecting states
    selected: Object
}
```

**Attention: ** In ECharts 2.x, event related to user switching lengend is now changed from  `legendselected` to [legendselectchanged](~events.legendselectchanged).

## legendunselected(Event)
**ACTION:** [legendUnSelect](~action.legend.legendUnSelect)
Event emitted after unselecting legend.

```js
{
    type: 'legendunselected',
    // name of unselected legend
    name: string
    // table of all legend selecting states
    selected: Object
}
```

## legendselectall(Event)
**ACTION:** [legendAllSelect](~action.legend.legendAllSelect)
Event emitted after all legends are selected.

```js
{
    type: 'legendselectall',
    // table of all legend selecting states
    selected: Object
}
```


## legendinverseselect(Event)
**ACTION:** [legendInverseSelect](~action.legend.legendInverseSelect)
Event emitted after inversing all legends.

```js
{
    type: 'legendinverseselect',
    // table of all legend selecting states
    selected: Object
}
```


## legendscroll(Event)
**ACTION:** [legendscroll](~action.legend.legendScroll)
Event when trigger legend scroll.

```js
{
    type: 'legendscroll',
    scrollDataIndex: number
    legendId: string
}
```



## datazoom(Event)
**ACTION:** [dataZoom](~action.dataZoom.dataZoom)

Event emitted after zooming data area.

```js
{
    type: 'datazoom',
    // percentage of zoom start position, 0 - 100
    start: number
    // percentage of zoom finish position, 0 - 100
    end: number
    // data value of zoom start position; only exists in zoom event of triggered by toolbar
    startValue?: number
    // data value of zoom finish position; only exists in zoom event of triggered by toolbar
    endValue?: number
}
```
## datarangeselected(Event)
**ACTION:** [selectDataRange](~action.dataRange.selectDataRange)
Event emitted after range is changed in visualMap.

```js
{
    type: 'datarangeselected',
    // continuous visualMap is different from discrete one
    // continuous visualMap is an array representing range of data values.
    // discrete visualMap is an object, whose key is category or piece index; value is `true` or `false`
    selected: Object|Array
}
```

## timelinechanged(Event)
**ACTION:** [timelineChange](~action.timeline.timelineChange)
Event emitted after time point in timeline is changed.

```js
{
    type: 'timelinechanged',
    // index of time point
    currentIndex: number
}
```

## timelineplaychanged(Event)
**ACTION:** [timelinePlayChange](~action.timeline.timelinePlayChange)
Switching event of play state in timeline.

```js
{
    type: 'timelineplaychanged',
    // play state, true for auto play
    playState: boolean
}
```

## restore(Event)
**ACTION:** [restore](~action.toolbox.restore)
Resets option event.
```js
{
    type: 'restore'
}
```

## dataviewchanged(Event)
Changing event of [data view tool in toolbox](option.html#toolbox.feature.dataView).
```js
{
    type: 'dataviewchanged'
}
```

## magictypechanged(Event)
Switching event of [magic type tool in toolbox](option.html#toolbox.feature.magicType).
```js
{
    type: 'magictypechanged',
    // click to change current type; same as type attribute in echarts 2.x
    currentType: string
}
```


{{ use: event-select(
    componentType='pie',
    name='pie chart'
) }}

{{ use: event-select(
    componentType='map',
    name='map region'
) }}


## axisareaselected(Event)
Selecting event of range of [parallel axis](option.html#parallelAxis).

When selecting axis range, the following method can be used to get data indices of currently highlight lines, which is the list of indices in `data` of `series`.

```javascript
chart.on('axisareaselected', function () {
    var series1 = chart.getModel().getSeries()[0];
    var series2 = chart.getModel().getSeries()[0];
    var indices1 = series1.getRawIndicesByActiveState('active');
    var indices2 = series2.getRawIndicesByActiveState('active');
    console.log(indices1);
    console.log(indices2);
});
```


## focusnodeadjacency(Event)
Adjacent nodes highlight event in [graph](option.html#graph).

See [focusNodeAdjacency](~action.graph.focusNodeAdjacency).


## unfocusnodeadjacency(Event)
Adjacent nodes reverse-highlight event in [graph](option.html#graph).

See [unfocusNodeAdjacency](~action.graph.unfocusNodeAdjacency).


## brush(Event)

Event triggered after action [brush](~action.brush.brush) dispatched.

## brushEnd(Event)
{{ use: partial-version(version = "4.5.0") }}
Event triggered after action [brushEnd](~action.brush.brushEnd) dispatched.


## brushselected(Event)

Notice what are selected.

See [brush component](option.html#brush).

This event will be triggered when `dispatchAction` called, or use do brush behavior.
But this event will not be triggered in `setOption`.

Properties in this event.
```javascript
{
    type: 'brushselected',
    batch: [
        {
            // Id of the brush component. In most case, only one brush component is used, so do not care about this property.
            brushId: string,
            // Index of the brush component.
            brushIndex: number,
            // Name of the brush component.
            brushName: string,

            // The brush areas (that is, select-boxes)
            areas: [
                { // The first area.
                    // `range`/`coordRange` is used to record the current
                    // range of the area, see the definitions in "brush
                    // action".

                    // If this area is "glboal arae" (that is, it does not
                    // belong to any coordinate system), use `range`, where
                    // the values are pixel.
                    range: Array.<number>,

                    // If the area is "coordinate system area', use `coordRange`,
                    // where the values are coordinates.
                    coordRange: Array.<number>,
                    // Specially, if the area belongs to an axis of a "grid" (e.g., set
                    // `xAxisIndex: 0`), and the axis belongs to more than one cartesian
                    // e.g., the `xAxis` corresponds to two `yAxis`), `coordRanges` is
                    // used to record the coordinates of this area in each cartesian,
                    // and `coordRange` is `coordRanges[0]`.
                    coordRanges: Array.<Array.<number>>,
                },
                ...
            ],

            // The selected items in each series.
            // Notice, if a series do not support `brush`, its cooresponding item still appear in this array. Namely, the index this array is the same as `seriesIndex`.
            selected: [
                { // The selected items in series 0.
                    seriesIndex: number,
                    // dataIndex can be used to find value in original data.
                    dataIndex: [ 3, 6, 12, 23 ]
                },
                { // The selected items in series 0.
                    seriesIndex: number,
                    dataIndex: []
                },
                ...
            ]
        },
        ...
    ]
}
```

Usage example of this event:

```javascript
var dataBySeries = [
    [ 12, 23, 54, 6 ], // Data of series 0.
    [ 34, 34433, 2223, 21122, 1232, 34 ] // Data of series 1.
];

chart.setOption({
    ...,
    brush: {
        ...
    },
    series: [
        { // series 0
            data: dataBySeries[0]
        },
        { // series 1
            data: dataBySeries[1]
        }
    ]
});

chart.on('brushSelected', function (params) {
    var brushComponent = params.batch[0];

    var sum = 0; // The sum of all selected values.

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var dataIndices = brushComponent.selected[sIdx].dataIndex;

        for (var i = 0; i < dataIndices.length; i++) {
            var dataIndex = dataIndices[i];
            sum += dataBySeries[sIdx][dataIndex];
        }
    }
    console.log(sum);
});
```

**Tip: **
[brush.throttleType](option.html#brush.throttleType) can be used to avoid triggering this event too frequently.



## globalcursortaken(Event)

See [takeGlobalCursor](~action.brush.takeGlobalCursor).



## rendered(Event)

Trigger when a frame rendered. Notice that the `rendered` event does not indicate that the animation finished (see [animation](~animation) and relevant options) or progressive rendering finished (see [progressive](~series-scatter.progressive) and relevant options).

For example:
```js
var snapshotImage = new Image();
document.body.append(snapshotImage);
chart.on('rendered', function () {
    snapshotImage.src = chart.getDataURL();
});
```


## finished(Event)

Triggered when render finished, that is, when animation finished (see [animation](~animation) and relevant options) and progressive rendering finished (see [progressive](~series-scatter.progressive) and relevant options).


```js
var snapshotImage = new Image();
document.body.append(snapshotImage);
chart.on('finished', function () {
    snapshotImage.src = chart.getDataURL();
});
```



{{ target: event-select }}
## ${componentType}selectchanged(Event)
**ACTION:** [${componentType}ToggleSelect](~action.${componentType}.${componentType}ToggleSelect)

Event emitted after ${name} selecting state changes.

It will be triggered when user clicks to select.

```js
{
    type: '${componentType}selectchanged',
    // series ID, can be passed in option
    seriesId: string
    // data name
    name: name,
    // table of all selected data.
    selected: Object
}
```
**Attention: ** This event is the same as event `${componentType}Selected` in ECharts 2.

## ${componentType}selected(Event)
**ACTION:** [${componentType}Select](~action.${componentType}.${componentType}Select)

${name}Event after selecting.

Use `dispatchAction` can trigger this event, but user clicking this event won't trigger this (User clicking event please use [${componentType}selectchanged](~events.${componentType}selectchanged)).

```js
{
    type: '${componentType}selected',
    // series ID, can incoming in option
    seriesId: string
    // data name
    name: name,
    // table of all legend selecting states
    selected: Object
}
```

**Attention: **Event triggered by user switching legend in ECharts 2.x is changed from `${componentType}selected` to [${componentType}selectchanged](~events.${componentType}selectchanged).

## ${componentType}unselected(Event)
**ACTION:** [${componentType}UnSelect](~action.${componentType}.${componentType}UnSelect)

${name} cancels selected event.

Use `dispatchAction` will trigger this event, but user clicking won't trigger it. (For user clicking event, please refer to [${componentType}selectchanged](~events.${componentType}selectchanged)).

```js
{
    type: '${componentType}unselected',
    // series ID, can incoming in option
    seriesId: string
    // data name
    name: name,
    // table of all legend selecting states
    selected: Object
}
```

