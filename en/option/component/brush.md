
{{ target: component-brush }}

# brush(Object)

`brush` is an area-selecting component, with which user can select part of data from a chart to display in detail, or do calculations with them.

<br>

---

**Brush type and triggering button**

Currently, supported `brush` types include: `scatter`, `bar`, `candlestick`. (Note that `parallel` contains brush function by itself, which is not provided by brush component.)

Click the button in `toolbox` to enable operations like *area selecting*, or *canceling selecting*.

<br>
Example of `horizontal brush`: (Click the button in `toolbox` to enable brushing.)
~[800x500](${galleryViewPath}candlestick-brush&edit=1&reset=1)

<br>
Example of `brush` in `bar` charts:
~[800x400](${galleryViewPath}bar-brush&edit=1&reset=1)


Button for `brush` can be assigned in [`toolbox`](~toolbox.feature.brush.type) or [`brush` configuration](~brush.toolbox).

The following types of brushes are supported: `rect`, `polygon`, `lineX`, `lineY`. See [brush.toolbox](~brush.toolbox) for more information.

`keep` button can be used to toggle a single or multiple selections.

+ Only one select box is available in single selection mode, and the select-box can be removed by clicking on the blank area.
+ Multiple select boxes are available in multiple selection mode, and the select-boxes cannot be removed by click on the blank area. Instead, you need to click the *clear* button.

<br>

---

**Relationship between brush-selecting and coordinates**

{{ use: partial-brush-coord() }}

<br>

---

**Control select-box with API**

`dispatchAction` can be used to render select-box programmatically. For example:

```javascript
myChart.dispatchAction({
    type: 'brush',
    areas: [
        {
            geoIndex: 0,
            // Assign select-box type
            brushType: 'polygon',
            // Assign select-box shape
            coordRange: [[119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77]]
        }
    ]
});
```
Please refer to [action.brush](api.html#action.brush) for more information.

<br>

---

**brushLink**

{{ use: partial-brush-brushLink() }}

Please refer to [brush.brushLink](~brush.brushLink).



<br>

---

**throttle / debounce**

{{ use: partial-brush-throttle() }}

<br>

---

**Visual configurations of selected and unselected items**

Refer to [brush.inBrush](~brush.inBrush) and [brush.outOfBrush](~brush.outOfBrush).


<br>

---

Here is the configuration in detail.

{{ use: partial-component-id(
    prefix = "#"
) }}

## toolbox(Array) = ['rect', 'polygon', 'keep', 'clear']

Use the buttons in toolbox.

{{ use: partial-brush-toolbox-buttons() }}

## brushLink(Array|string) = null

{{ use: partial-brush-brushLink() }}

## seriesIndex(Array|number|string) = 'all'

Assigns which of the series can use brush selecting, whose value can be:

+ `'all'`: all series;
+ `'Array'`: series index array;
+ `'number'`: certain series index.

## geoIndex(Array|number|string) = null

Assigns which of the geo can use brush selecting.

{{ use: partial-brush-coord() }}

## xAxisIndex(Array|number|string) = null

Assigns which of the xAxisIndex can use brush selecting.

{{ use: partial-brush-coord() }}

## yAxisIndex(Array|number|string) = null

Assigns which of the yAxisIndex can use brush selecting.

{{ use: partial-brush-coord() }}

## brushType(string) = 'rect'

Default type of brush.

{{ use: partial-brush-type() }}

## brushMode(string) = 'single'

Default brush mode, whose value can be:

+ `'single'`: for single selection;
+ `'multiple'`: for multiple selection.

## transformable(boolean) = true

Determines whether a selected box can be changed in shape or translated.

## brushStyle(Object)

Default brush style, whose value is:

```javascript
{
    borderWidth: 1,
    color: 'rgba(120,140,180,0.3)',
    borderColor: 'rgba(120,140,180,0.8)'
},
```

## throttleType(string) = 'fixRate'

{{ use: partial-brush-throttle() }}

## throttleDelay(number) = 0

`0` for disabling throttle.

{{ use: partial-brush-throttle() }}

## removeOnClick(boolean) = true

Defined whether *clearing all select-boxes on click* is enabled when [brush.brushMode](~brush.brushMode) is `'single'`.

## inBrush(Object)

Defines visual effects of items in selection.

Available visual effects include:

{{ use: partial-visual-map-visual-type() }}

In most cases, inBrush can be left unassigned, in which case default visual configuration remains.

## outOfBrush(Object)

Defines visual effects of items out of selection.

Available visual effects include:

{{ use: partial-visual-map-visual-type() }}

**Note:** If `outOfBrush` is not assigned, `color` will be set to be `'#ddd'` by default. If the color is not desired, you can use:

```javascript
brush: {
    ...,
    outOfBrush: {
        colorAlpha: 0.1
    }
}
```

## z(number) = 10000

z-index of brush cover box. It can be adjusted when incorrect overlap occurs.



{{ target: partial-brush-coord }}

`brush` can be set to be *global*, or *belonging to a particular coordinate*.

**Global brushes**

Selecting is enabled for everywhere in ECharts's instance in this case. This is the default situation, when brush is not set to be global.

**Coordinate brushes**

Selecting is enabled only in the assigned coordinates in this case. Selecting-box will be altered according to scaling and translating of coordinate (see `roam` and `dataZoom`).

In practice, you may often find coordinate brush to be a more frequently made choice, particularly in `geo` charts.

By assigning [brush.geoIndex](~brush.geoIndex), or [brush.xAxisIndex](~brush.xAxisIndex), or [brush.yAxisIndex](~brush.yAxisIndex), brush selecting axes can be assigned, whose value can be:

+ `'all'`: for all axes;
+ `number`: like `0`, for a particular coordinate with that index;
+ `Array`: like `[0, 4, 2]`, for coordinates with those indexes;
+ `'none'`, or `null`, or `undefined`: for not assigning.

Example:
```javascript
option = {
    geo: {
        ...
    },
    brush: {
        geoIndex: 'all', // brush selecting is enabled only in all geo charts above
        ...
    }
};
```

Example:
```javascript
option = {
    grid: [
        {...}, // grid 0
        {...}  // grid 1
    ],
    xAxis: [
        {gridIndex: 1, ...}, // xAxis 0 for grid 1
        {gridIndex: 0, ...}  // xAxis 1 for grid 0
    ],
    yAxis: [
        {gridIndex: 1, ...}, // yAxis 0 for grid 1
        {gridIndex: 0, ...}  // yAxis 1 for grid 0
    ],
    brush: {
        xAxisIndex: [0, 1], // brush selecting is enabled only in coordinates with xAxisIndex as `0` or `1`
        ...
    }
};
```



{{ target: partial-brush-brushLink }}

Links interaction between selected items in different series.

Following is an example of enabling selected effect for `scatter` and `parallel` charts once a scatter chart is selected.

`brushLink` is an array of `seriesIndex`es, which assigns the series that can be interacted. For example, it can be:

+ `[3, 4, 5]` for interacting series with seriesIndex as `3`, `4`, or `5`;
+ `'all'` for interacting all series;
+ `'none'`, or `null`, or `undefined` for disabling `brushLink`.

**Attention**

`brushLink` is a mapping of `dataIndex`. So **`data` of every series with `brushLink` should be guaranteed to correspond to the other**.

Example:
```javascript
option = {
    brush: {
        brushLink: [0, 1]
    },
    series: [
        {
            type: 'bar'
            data: [232,    4434,    545,      654]     // data has 4 items
        },
        {
            type: 'parallel',
            data: [[4, 5], [3, 5], [66, 33], [99, 66]] // data also has 4 items, which correspond to the data above
        }
    ]
};
```



{{ target: partial-brush-throttle }}

By default, `brushSelected` is always triggered when selection-box is selected or moved, to tell the outside about the event.

But efficiency problems may occur when events are triggered too frequently, or the animation result may be affected. So brush components provides [brush.throttleType](~brush.throttleType) and [brush.throttleDelay](~brush.throttleDelay) to solve this problem.

Valid `throttleType` values can be:
+ `'debounce'`: for triggering events only when the action has been stopped (no action after some duration). Time threshold can be assigned with [brush.throttleDelay](~brush.throttleDelay);
+ `'fixRate'`: for triggering event with a certain frequency. The frequency can be assigned with [brush.throttleDelay](~brush.throttleDelay).


In this [example](${galleryViewPath}scatter-map-brush&edit=1&reset=1), `debounce` is used to make sure the bar chart is updated only when the user has stopped action. In other cases, the animation result may not be so good.



{{ target: partial-brush-toolbox-buttons }}

Buttons in toolbox that is related to brush includes:

+ `'rect'`: for selection-box in rectangle shape;
+ `'polygon'`: for selection-box in polygon shape;
+ `'lineX'`: for horizontal selection-box;
+ `'lineY'`: for vertical selection-box;
+ `'keep'`: for setting mode between `single` and `multiple` selection, the former of which supports clearing selection on click, and the latter selecting multiple areas;
+ `'clear'`: for clearing all selections.



{{ target: partial-brush-type }}

+ `'rect'`: for selection-box in rectangle shape;
+ `'polygon'`: for selection-box in polygon shape;
+ `'lineX'`: for horizontal selection-box;
+ `'lineY'`: for vertical selection-box;

