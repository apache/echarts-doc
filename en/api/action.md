{{ target: action-series-query }}// Find ${componentType} by index or id or name.
    // Can be an array to find multiple components.
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],{{/target}}

{{ target: action-data-query-multiple }}// data index; could assign by name attribute when not defined
    dataIndex?: number | number[],
    // optional; data name; ignored when dataIndex is defined
    name?: string | string[],{{/target}}

{{ target: action-data-query-single }}// data index; could assign by name attribute when not defined
    dataIndex?: number,
    // optional; data name; ignored when dataIndex is defined
    name?: string,{{/target}}

{{ target: action-component-query }}// Find ${componentType} by index or id or name.
    // Can be an array to find multiple components.
    ${componentType}Index?: number | number[],
    ${componentType}Id?: string | string[],
    ${componentType}Name?: string | string[],{{/target}}

{{ target: action-component-item-query-multiple }}// ${componentItemDesc} in ${componentType} component.
    // Can be an array to specify multiple names.
    name?: string | string[],{{/target}}

{{ target: action-component-item-query-single }}// ${componentItemDesc} name in ${componentType} component.
    name?: string,{{/target}}



{{ target: action }}
# action

Chart actions supported by ECharts are triggered through [dispatchAction](~echartsInstance.dispatchAction).

**Attention: ** The `?:` note in the code shows that this attribute is optional. *EVENT:* stands for the event that triggers action.

## highlight(Action)

Highlights specified data graphics.

```ts
// If highlight series:
dispatchAction({
    type: 'highlight',

    {{ use: action-series-query }}

    {{ use: action-data-query-multiple }}
});

// If highlight geo component (since v5.1.0):
dispatchAction({
    type: 'highlight',

    {{ use: action-component-query(componentType = 'geo') }}

    {{ use: action-component-item-query-multiple(componentType = 'geo', componentItemDesc = 'region') }}
});
```


## downplay(Action)

Downplay specified data graphics.

```ts
// If downplay series:
dispatchAction({
    type: 'downplay',

    {{ use: action-series-query }}

    {{ use: action-data-query-multiple }}
});

// If downplay geo component (since v5.1.0):
dispatchAction({
    type: 'downplay',

    {{ use: action-component-query(componentType = 'geo') }}

    {{ use: action-component-item-query-multiple(componentType = 'geo', componentItemDesc = 'region') }}
});
```

## select(Action)

Select specified data. Selected data will apply the style of [select](option.html#series-bar.select).

```ts
dispatchAction({
    type: 'select',

    {{ use: action-series-query }}

    {{ use: action-data-query-multiple }}
})
```

## unselect(Action)

Unselect specified data.

```ts
dispatchAction({
    type: 'unselect',

    {{ use: action-series-query }}

    {{ use: action-data-query-multiple }}
})
```

## toggleSelect(Action)

Toggle selected status of specified data.

```ts
dispatchAction({
    type: 'toggleSelect',

    {{ use: action-series-query }}

    {{ use: action-data-query-multiple }}
})
```

## legend

Actions related to [legend component](option.html#legend), [legend component](option.html#legend) should be imported before use.

### legendSelect(Action)
Selects legend.

```ts
dispatchAction({
    type: 'legendSelect',
    // legend name
    name: string
})
```

**EVENT:** [legendselected](~events.legendselected)

### legendUnSelect(Action)
Unselects the legend.

```ts
dispatchAction({
    type: 'legendUnSelect',
    // legend name
    name: string
})
```

**EVENT:** [legendunselected](~events.legendunselected)

### legendToggleSelect(Action)
Toggles legend selecting state.
```ts
dispatchAction({
    type: 'legendToggleSelect',
    // legend name
    name: string
})
```

**EVENT:** [legendselectchanged](~events.legendselectchanged)

### legendAllSelect(Action)
Selects all legends.

```ts
dispatchAction({
    type: 'legendAllSelect'
})
```

**EVENT:** [legendselectall](~events.legendselectall)

### legendInverseSelect(Action)
Inverses all legends.

```ts
dispatchAction({
    type: 'legendInverseSelect'
})
```

**EVENT:** [legendinverseselect](~events.legendinverseselect)

### legendScroll(Action)
Control the scrolling of legend. It works when [legend.type](option.html#legend.type) is `'scroll'`.
```ts
dispatchAction({
    type: 'legendScroll',
    scrollDataIndex: number,
    legendId: string
})
```

**EVENT:** [legendscroll](~events.legendscroll)

## tooltip

Actions related to [tooltip component](option.html#tooltip), [tooltip component](option.html#tooltip) should be imported before use.

### showTip(Action)

Shows tooltip.

There are several usages as followed.

1 Display tooltip at certain position relative to container. If it cannot be displayed at the specified location, then it is invalid.
```ts
dispatchAction({
    type: 'showTip',
    // x coordinate on screen
    x: number,
    // y coordinate on screen
    y: number,
    // Position of tooltip. Only works in this action.
    // Use tooltip.position in option by default.
    position: number[] | string | Function,
})
```

2 Specify graphic element in series, and display tooltip according to the tooltip configuration.
```ts
dispatchAction({
    type: 'showTip',
    // index of series, which is optional when trigger of tooltip is axis
    seriesIndex?: number,
    {{ use: action-data-query-single }},
    // Position of tooltip. Only works in this action.
    // Use tooltip.position in option by default.
    position: number[] | string | Function,
})
```

3 Specify graphic element in geo component, and display tooltip according to the tooltip configuration.
{{ use: partial-version(version: '5.1.0') }}
```ts
dispatchAction({
    type: 'showTip',
    {{ use: action-component-query(componentType = 'geo') }}
    {{ use: action-component-item-query-single(componentType = 'geo', componentItemDesc = 'region') }}
    // Position of tooltip. Only works in this action.
    // Use tooltip.position in option by default.
    position: number[] | string | Function
})
```

Parameter `position` is the same as [tooltip.position](option.html#tooltip.position).


### hideTip(Action)

Hides tooltip.

```ts
dispatchAction({
    type: 'hideTip'
})
```

## dataZoom

Actions related to [data region zoom component](option.html#dataZoom), [data region zoom component](option.html#dataZoom) should be imported before use.

### dataZoom(Action)

Zoom data region.

```ts
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

### takeGlobalCursor(Action)

Activate or inactivate `dataZoom` buttom in `toolbox`.

```ts
myChart.dispatchAction({
    type: 'takeGlobalCursor',
    key: 'dataZoomSelect',
    // Activate or inactivate.
    dataZoomSelectActive: true
});
```



## visualMap

Actions related to [visual mapping component](option.html#visualMap), [visual mapping component](option.html#visualMap) should be imported before use.

### selectDataRange(Action)

Selects data range of visual mapping.

```ts
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
```ts
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

## timeline

Actions related to [timeline component](option.html#timeline), [timeline component](option.html#timeline) should be imported before use.

### timelineChange(Action)

Sets the current time point.

```ts
dispatchAction({
    type: 'timelineChange',
    // index of time point
    currentIndex: number
})
```

**EVENT:** [timelinechanged](~events.timelinechanged)

### timelinePlayChange(Action)

Toggles playing status of timeline.

```ts
dispatchAction({
    type: 'timelinePlayChange',
    // laying status; true for auto-play
    playState: boolean
})
```

**EVENT:** [timelineplaychanged](~events.timelineplaychanged)

## toolbox

Actions related to [toolbox component](option.html#toolbox), [toolbox component](option.html#toolbox) should be imported before use.

### restore(Action)
Resets option.

```ts
dispatchAction({
    type: 'restore'
})
```

**EVENT:** [restore](~events.restore)

## geo

Actions related to [geo](option.html#geo) component, [geo](option.html#geo) should be imported before use.

{{ use: action-select(
    componentType='geo',
    name='geo region',
    single=true
) }}


## brush
[brush](option.html#brush) related actions.

### brush

This action is dispatched when the "brush" behavior is performing.
It sets select-boxes (areas) in this chart. For example:

```javascript
myChart.dispatchAction({
    type: 'brush',
    areas: [ // "areas" means select-boxes. Multi-boxes can be specified.
             // If "areas" is empty, all of the select-boxes will be deleted.
        { // The first area.

            // Indicate that this area is a "coordinate system area", belonging
            // to a geo coordinate system with getIndex: 0.
            // We can also use xAxisIndex or yAxisIndex to indicate that
            // this area belongs to a catesian coordinate system.
            // If no coordinate system is specified, this area is a
            // "global area", which does not belong to any coordinate system.
            // If an area belongs to a coordinate system, this area moves
            // and scales alone with the coordinate system.
            geoIndex: 0,
            // xAxisIndex: 0,
            // yAxisIndex: 0,

            // Optional: 'polygon', 'rect', 'lineX', 'lineY'
            brushType: 'polygon',

            // Only for "global area", define the area with the pixel coordinates.
            range: [
                ...
            ],

            // Only for "coordinate system area", define the area with the
            // coordinates.
            coordRange: [
                // In this case, the area is in a geo coordinate system, so
                // this is [longitude, latitude].
                [119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77]
            ]
        },
        ... // Other areas.
    ]
});
```

The content of `range` and `coordRange` can be:

+ If `brushType` is 'rect':
    `range` and `coordRange` is: `[[minX, maxX], [minY, maxY]]`
+ If `brushType` is 'lineX' or 'lineY':
    `range` and `coordRange` is: [min, maxX]
+ If `brushType` is 'polygon':
    `range` and `coordRange` is: [[point1X, point1X], [point2X, point2X], ...]

The difference between `range` and `coordRange` is:

+ If the area is "global area", we should use `range`.
+ If the area is "coordinate system area" (i.e., `geoIndex` or `xAxisIndex` or `yAxisIndex` is specified), we should use `coordRange`.
+ The unit of `range` is "pixel", while the unit of `coordRange` should be the save as the unit of the coordinate system. For example, in geo coordinate system, `coordRange` should be [`longitude`, `latitude`], and in cartesian, it should be [`axis A value`, `axis B value`, `axis C value`, ...].


### brushEnd
{{ use: partial-version(version = "4.5.0") }}
This action is dispatched when the "brush" behavior finished.
The parameters are the same as [action brush](~action.brush.brush).


### takeGlobalCursor

The switch of the brush. This action can make the mouse enabled/disabled to brush.
In fact, the brush buttons in [toolbox](option.html#toolbox.feature.brush) just use this aciton.

This event corresponding to this action is [globalCursorTaken](~events.globalCursorTaken).

```ts
api.dispatchAction({
    type: 'takeGlobalCursor',
    // If intending to enable brush, must set. Otherwise, the mouse will be disabled to brush.
    key: 'brush',
    brushOption: {
        // See more info in the `brushType` of "brush component".
        // If set as `false`, the mouse is disabled to brush.
        brushType: string,
        // See more info in the `brushModel` of "brush component".
        // IF not set, use the `brushMode` of brush component.
        brushMode: string
    }
});
```

## treemap

Actions related to [treemap series](option.html#series-treemap).

### treemapZoomToNode(Action)
Zoom to the target node.

```ts
dispatchAction({
    type: 'treemapZoomToNode',

    {{ use: action-series-query }}

    // target node id or name (`name` is invalid if the target node has `id`)
    targetNodeId: string
})
```

### treemapRootToNode(Action)
Zoom to and enter the target node.

```ts
dispatchAction({
    type: 'treemapRootToNode',

    {{ use: action-series-query }}

    // target node `id` or `name` (`name` is invalid if the target node has `id`)
    targetNodeId: string
})
```



{{ target: action-select }}
### ${componentType}Select(Action)
Selects the specified ${name}.

```ts
dispatchAction({
    type: '${componentType}Select',

    {{ use: action-component-query(componentType = 'geo') }}

    {{ if: ${single} }}
    {{ use: action-component-item-query-single(componentType = 'geo', componentItemDesc = 'region') }}
    {{ else }}
    {{ use: action-component-item-query-multiple(componentType = 'geo', componentItemDesc = 'region') }}
    {{ /if }}
})
```

**EVENT:** [${componentType}selected](~events.${componentType}selected)

### ${componentType}UnSelect(Action)
Cancels selecting specified ${name}.

```ts
dispatchAction({
    type: '${componentType}UnSelect',

    {{ use: action-component-query(componentType = 'geo') }}

    {{ if: ${single} }}
    {{ use: action-component-item-query-single(componentType = 'geo', componentItemDesc = 'region') }}
    {{ else }}
    {{ use: action-component-item-query-multiple(componentType = 'geo', componentItemDesc = 'region') }}
    {{ /if }}
})
```
**EVENT:** [${componentType}unselected](~events.${componentType}unselected)

### ${componentType}ToggleSelect(Action)
Toggles selecting status of specified ${name}.

```ts
dispatchAction({
    type: '${componentType}ToggleSelect',

    {{ use: action-component-query(componentType = 'geo') }}

    {{ if: ${single} }}
    {{ use: action-component-item-query-single(componentType = 'geo', componentItemDesc = 'region') }}
    {{ else }}
    {{ use: action-component-item-query-multiple(componentType = 'geo', componentItemDesc = 'region') }}
    {{ /if }}
})
```
**EVENT:** [${componentType}selectchanged](~events.${componentType}selectchanged)
