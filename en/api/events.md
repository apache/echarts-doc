{{ target: events }}
# events

ECharts mainly adds event-handling function through [on](~echartsInstance.on), this document describes all event list in ECharts.

Event list in ECharts can be divided in two kinds, one is mouse event, which is triggered when mouse clicking certain graphic, another is event triggered after dispatches[dispatchAction](~echartsInstance.dispatchAction).

## Mouse event

Event parameter is each attribute of event data, See label formatter callback function for each chart type params parameters.

### click(Event)
### dblclick(Event)
### mousedown(Event)
### mousemove(Event)
### mouseup(Event)
### mouseover(Event)
### mouseout(Event)

## legendselectchanged(Event)
**ACTION:** [legendToggleSelect](~action.legend.legendToggleSelect)
Change event after selecting legend.

**Attention: ** This event will be triggered when legend component users change legend switch.
```js
{
    type: 'legendselectchanged',
    // change legend name
    name: string
    // Table of all selected legend.
    selected: Object
}
```
## legendselected(Event)
**ACTION:** [legendSelect](~action.legend.legendSelect)
Event after selecting legend.

```js
{
    type: 'legendselected',
    // Name of selected legend
    name: string
    // Table of all selected legend
    selected: Object
}
```

**Attention: ** In ECharts 2.x, event related to user switch lengend changes from  `legendselected` to [legendselectchanged](~events.legendselectchanged). 

## legendunselected(Event)
**ACTION:** [legendUnSelect](~action.legend.legendUnSelect)
Event after unselecting legend.

```js
{
    type: 'legendunselected',
    // Name of unselected legend
    name: string
    // Table of all selected legend
    selected: Object
}
```
## datazoom(Event)
**ACTION:** [dataZoom](~action.dataZoom.dataZoom)

Event after data area zoom.

```js
{
    type: 'datazoom',
    // Percentage of zoom of start position, 0 - 100
    start: number
    //Percentage of zoom of finish position, 0 - 100
    end: number
    // Data value of zoom of start position, only exist in event of zooming toolbar.
    startValue?: number
    // Data value of zoom of finish position, only exist in event of zooming toolbar.
    endValue?: number
}
```
## datarangeselected(Event)
**ACTION:** [selectDataRange](~action.dataRange.selectDataRange)
Selected event of data value range of map in visual map component.

```js
{
    type: 'datarangeselected',
    // Continuous visualMap is different from discrete visualMap 
    // Continuous visualMap is an array representing range of data value.
    // Discrete visualMap is an object, key value is the index of category or subparagraph. Value is `true`, `false`
    selected: Object|Array
}
```

## timelinechanged(Event)
**ACTION:** [timelineChange](~action.timeline.timelineChange)
Event after time point in timeline changes. 

```js
{
    type: 'timelinechanged',
    // index of time point
    currentIndex: number
}
```

## timelineplaychanged(Event)
**ACTION:** [timelinePlayChange](~action.timeline.timelinePlayChange)
Switch event of play state in timeline.

```js
{
    type: 'timelineplaychanged',
    // play state, true is auto play
    playState: boolean
}
```

## restore(Event)
**ACTION:** [restore](~action.toolbox.restore)
Reset option event.
```js
{
    type: 'restore'
}
```

## dataviewchanged(Event)
[Data view in toolbox](option.html#toolbox.feature.dataView) change event.
```js
{
    type: 'dataviewchanged'
}
```

## magictypechanged(Event)
[magic type in toolbox](option.html#toolbox.feature.magicType) change event. 
```js
{
    type: 'magictypechanged',
    // click to change current type, same as type attribute in echarts 2.x 
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



{{ target: event-select }}
## ${componentType}selectchanged(Event)
**ACTION:** [${componentType}ToggleSelect](~action.${componentType}.${componentType}ToggleSelect)

${name}change selected event.

User will trigger this event by clicking select.

```js
{
    type: '${componentType}selectchanged',
    // series ID, can incoming in option
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

Use `dispatchAction` can trigger this event, but user clicking this event won't trigger this（User clicking event please use [${componentType}selectchanged](~events.${componentType}selectchanged)）.

```js
{
    type: '${componentType}selected',
    // series ID, can incoming in option
    seriesId: string
    // data name
    name: name,
    // table of all selected data.
    selected: Object
}
```

**Attention: **Events corresponding to user switch legend in ECharts 2.x change from `${componentType}selected` to [${componentType}selectchanged](~events.${componentType}selectchanged).

## ${componentType}unselected(Event)
**ACTION:** [${componentType}UnSelect](~action.${componentType}.${componentType}UnSelect)

${name}Cancel selected event.

Use `dispatchAction` can trigger this event, but user clicking this event won't trigger this（User clicking event please use [${componentType}selectchanged](~events.${componentType}selectchanged)）.

```js
{
    type: '${componentType}unselected',
    // series ID, can incoming in option
    seriesId: string
    // data name
    name: name,
    // table of all selected data.
    selected: Object
}
```

