
{{ target: component-data-zoom }}

# dataZoom(Array|Object)

`dataZoom` component is used for zooming a specific area, which enables user to investigate data in detail, or get an overview of the data, or get rid of outlier points.

These types of `dataZoom` component are supported:

+ [dataZoomInside](~dataZoom-inside): Data zoom functionalities is embedded inside coordinate systems, enable user to zoom or roam coordinate system by mouse dragging, mouse move or finger touch (in touch screen).

+ [dataZoomSlider](~dataZoom-slider): A special slider bar is provided, on which coordinate systems can be zoomed or roamed by mouse dragging or finger touch (in touch screen).

+ [dataZoomSelect](~toolbox.feature.dataZoom): A marquee tool is provided for zooming or roaming coordinate system. That is [toolbox.feature.dataZoom](~toolbox.feature.dataZoom), which can only be configured in toolbox.


Example:
~[600x400](${galleryViewPath}doc-example/scatter-dataZoom-all&edit=1&reset=1)

<br>

---


**✦ Relationship between dataZoom and axis ✦**

Basically `dataZoom` component operates "window" on axis to zoom or roam coordinate system.

> Use [dataZoom.xAxisIndex](~dataZoom.xAxisIndex) or [dataZoom.yAxisIndex](~dataZoom.yAxisIndex) or [dataZoom.radiusAxisIndex](~dataZoom.radiusAxisIndex) or [dataZoom.angleAxisIndex](~dataZoom.angleAxisIndex) to specify which axes are operated by `dataZoom`.

A single chart instance can contain several `dataZoom` components, each of which controls different axes. The `dataZoom` components that control the same axis will be automatically linked (i.e., all of them will be updated when one of them is updated by user action or API call).

<br>

---


**✦ How dataZoom components operates axes and data ✦**

{{ use: partial-data-zoom-filterMode() }}

Moreover, when `min`, `max` of an axis is set (e.g., `yAxis: {min: 0, max: 400}`), this extent of the axis will not be modified by the behaviour of dataZoom of other axis any more.

<br>

---

**✦ How to set window ✦**

You can set the current window in two forms:

+ percent value: see [dataZoom.start](~dataZoom.start) and [dataZoom.end](~dataZoom.end).

+ absolute value: see [dataZoom.startValue](~dataZoom.startValue) and [dataZoom.endValue](~dataZoom.endValue).

Notice: If use percent value form, and it is in the scenario below, the result of dataZoom depends on the sequence of dataZoom definitions appearing in `option`.


```javascript
option = {
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter',   // Set as 'filter' so that the modification
                                    // of window of xAxis will effect the
                                    // window of yAxis.
            start: 30,
            end: 70
        },
        {
            id: 'dataZoomY',
            type: 'slider',
            yAxisIndex: [0],
            filterMode: 'empty',
            start: 20,
            end: 80
        }
    ],
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
        // Notice there is no min or max set to
        // restrict the view extent of yAxis.
    },
    series{
        type: 'bar',
        data: [
            // The first column corresponds to xAxis,
            // and the second column corresponds to yAxis.
            [12, 24, 36],
            [90, 80, 70],
            [3, 9, 27],
            [1, 11, 111]
        ]
    }
}
```

What is the exact meaning of `start: 20, end: 80` in `dataZoomY` in the example above?

+ If `yAxis.min` and `yAxis.max` are set:

    `start: 20, end: 80` of `dataZoomY` means: from `20%` to `80%` out of `[yAxis.min, yAxis.max]`.

    If one of `yAxis.min` and `yAxis.max` is not set, the corresponding edge of the full extend also follow rule as follows.

+ If `yAxis.min` and `yAxis.max` are not set:

    + If `dataZoomX` is set to be `filterMode: 'empty'`:

        `start: 20, end: 80` of `dataZoomY` means: from `20%` to `80%` out of `[dataMinY to dataMaxY]` of series.data (i.e., `[9, 80]` in the example above).

    + If `dataZoomX` is set to `filterMode: 'filter'`:

        Since `dataZoomX` is defined before `dataZoomY`, `start: 30, end: 70` of `dataZoomX` means: from `30%` to `70%` out of full series.data, whereas `start: 20, end: 80` of `dataZoomY` means: from `20%` to `80%` out of the series.data having been filtered by `dataZoomX`.

        If you want to change the process sequence, you can just change the sequence of the definitions apearing in `option`.

<br>
<br>

{{ use: component-data-zoom-inside() }}

{{ use: component-data-zoom-slider() }}



{{ target: partial-data-zoom-axis-example }}

If it is set as a single `number`, one axis is controlled, while if it is set as an `Array` , multiple axes are controlled.

For example:

```javascript
option: {
    ${axisName}: [
        {...}, // The first ${axisName}
        {...}, // The second ${axisName}
        {...}, // The third ${axisName}
        {...}  // The fourth ${axisName}
    ],
    dataZoom: [
        { // The first dataZoom component
            ${axisName}Index: [0, 2] // Indicates that this dataZoom component
                                     // controls the first and the third ${axisName}
        },
        { // The second dataZoom component
            ${axisName}Index: 3      // indicates that this dataZoom component
                                     // controls the fourth ${axisName}
        }
    ]
}
```



{{ target: partial-data-zoom-common }}

## xAxisIndex(number|Array) = null

Specify which [xAxis](~xAxis) is/are controlled by the `${dataZoomName}` when [catesian coordinate system](~grid) is used.

By default the first `xAxis` that parallel to `dataZoom` are controlled when [${dataZoomName}.orient](~${dataZoomName}.orient) is set as `'horizontal'`. But it is recommended to specify it explicitly but not use default value.

{{ use: partial-data-zoom-axis-example(
    axisName = 'xAxis'
) }}

## yAxisIndex(number|Array) = null

Specify which [yAxis](~yAxis) is/are controlled by the `${dataZoomName}` when [catesian coordinate system](~grid) is used.

By default the first `yAxis` that parallel to `dataZoom` are controlled when [${dataZoomName}.orient](~${dataZoomName}.orient) is set as `'vertical'`. But it is recommended to specify it explicitly but not use default value.

{{ use: partial-data-zoom-axis-example(
    axisName = 'yAxis'
) }}

## radiusAxisIndex(number|Array) = null

Specify which [radiusAxis](~radiusAxis) is/are controlled by the `${dataZoomName}` when [polar coordinate system](~polar) is used.

{{ use: partial-data-zoom-axis-example(
    axisName = 'radiusAxis'
) }}

## angleAxisIndex(number|Array) = null

Specify which [angleAxis](~angleAxis) is/are controlled by the `${dataZoomName}` when [polar coordinate system](~polar) is used.

{{ use: partial-data-zoom-axis-example(
    axisName = 'angleAxis'
) }}

## filterMode(string) = 'filter'

<ExampleUIControlEnum options="filter,weakFilter,empty,none" default="filter" />

{{ use: partial-data-zoom-filterMode() }}

## start(number) = 0

<ExampleUIControlNumber min="0" max="100" step="0.5" />

The start percentage of the window out of the data extent, in the range of 0 ~ 100.

[${dataZoomName}.start](~${dataZoomName}.start) and [${dataZoomName}.end](~${dataZoomName}.end) define the window of the data in **percent** form.

More info about the relationship between `${dataZoomName}.start` and axis extent can be checked in [${dataZoomName}.rangeMode](~${dataZoomName}.rangeMode).

## end(number) = 100

<ExampleUIControlNumber min="0" max="100" default="100" step="0.5" />

The end percentage of the window out of the data extent, in the range of 0 ~ 100.

[${dataZoomName}.start](~${dataZoomName}.start) and [${dataZoomName}.end](~${dataZoomName}.end) define the window of the data in **percent** form.

More info about the relationship between `${dataZoomName}.end` and axis extent can be checked in [${dataZoomName}.rangeMode](~${dataZoomName}.rangeMode).

## startValue(number|string|Date) = null

The start absolute value of the window, not works when [${dataZoomName}.start](~${dataZoomName}.start) is set.

[${dataZoomName}.startValue](~${dataZoomName}.startValue) and [${dataZoomName}.endValue](~${dataZoomName}.endValue) define the window of the data window in **absolute value** form.

Notice, if an axis is set to be `category`, `startValue` could be set as `index` of the array of `axis.data` or as the array value itself. In the latter case, it will internally and automatically translate to the index of array.

More info about the relationship between `${dataZoomName}.startValue` and axis extent can be checked in [${dataZoomName}.rangeMode](~${dataZoomName}.rangeMode).

## endValue(number|string|Date) = null

The end absolute value of the window, doesn't work when [${dataZoomName}.end](~${dataZoomName}.end) is set.

[${dataZoomName}.startValue](~${dataZoomName}.startValue) and [${dataZoomName}.endValue](~${dataZoomName}.endValue) define the window of the data window in **absolute value** form.

Notice, if an axis is set to be `category`, `startValue` could be set as `index` of the array of `axis.data` or as the array value itself. In the latter case, it will internally and automatically translate to the index of array.

More info about the relationship between `${dataZoomName}.endValue` and axis extent can be checked in [${dataZoomName}.rangeMode](~${dataZoomName}.rangeMode).

## minSpan(number) = null

<ExampleUIControlNumber min="0" max="100" step="0.5" />

Used to restrict minimal window size, in percent, which value is in the range of [0, 100].

If [${dataZoomName}.minValueSpan](~${dataZoomName}.minValueSpan) is set, `minSpan` does not work any more.

## maxSpan(number) = null

<ExampleUIControlNumber min="0" max="100" step="0.5" />

Used to restrict maximal window size, in percent, which value is in the range of [0, 100].

If [${dataZoomName}.maxValueSpan](~${dataZoomName}.maxValueSpan) is set, `maxSpan` does not work any more.

## minValueSpan(number|string|Date) = null

Used to restrict minimal window size.

For example:
In time axis it can be set as `3600 * 24 * 1000 * 5` to represent "5 day".
In category axis it can be set as `5` to represent 5 categories.

## maxValueSpan(number|string|Date) = null

Used to restrict maximal window size.

For example:
In time axis it can be set as `3600 * 24 * 1000 * 5` to represent "5 day".
In category axis it can be set as `5` to represent 5 categories.

## orient(string) = null

<ExampleUIControlEnum options="horizontal,vertical" />

Specify whether the layout of `dataZoom` component is horizontal or vertical. What's more, it indicates whether the horizontal axis or vertical axis is controlled by default in catesian coordinate system.

Valid values:

+ `'horizontal'`: horizontal.

+ `'vertical'`: vertical.

## zoomLock(boolean) = false

<ExampleUIControlBoolean />

Specify whether to lock the size of window (selected area).

When set as `true`, the size of window is locked, that is, only the translation (by mouse drag or touch drag) is available but zoom is not.

## throttle(number) = 100

<ExampleUIControlNumber default="100" min="0" step="20" />

Specify the frame rate of views refreshing, with unit millisecond (ms).


If [animation](~animation) set as `true` and [animationDurationUpdate](~animationDurationUpdate) set as bigger than `0`, you can keep `throttle` as the default value `100` (or set it as a value bigger than `0`), otherwise it might be not smooth when dragging.

If [animation](~animation) set as `false` or [animationDurationUpdate](~animationDurationUpdate) set as `0`, and data size is not very large, and it seems to be not smooth when dragging, you can set `throttle` as `0` to improve that.

## rangeMode(Array)

The format is `[rangeModeForStart, rangeModeForEnd]`.

For example `rangeMode: ['value', 'percent']` means that use absolute value in `start` and percent value in `end`.

Optional value for each item: `'value'`, `'percent'`.

+ `'value'` mode: the axis extent will always only be determined by `dataZoom.startValue` and `dataZoom.endValue`, despite how data like and how `axis.min` and `axis.max` are.
+ `'percent'` mode: `100` represents 100% of the `[dMin, dMax]`, where `dMin` is `axis.min` if `axis.min` specified, otherwise `data.extent[0]`, and `dMax` is `axis.max` if `axis.max` specified, otherwise `data.extent[1]`. Axis extent will only be determined by the result of the percent of `[dMin, dMax]`.

`rangeMode` are auto determined by whether `option.start`/`option.end` are specified (represents `'percent'` mode) or `option.startValue`/`option.endValue` specified (represents `'value'` mode). And when user behavior trigger the changing of the view, the `rangeMode` would be modified automatically. For example, if triggered by `toolbox.dataZoom`, it will be modefied to `'value'`, and if triggered by `dataZoom-inside` or `dataZoom-slider`, it will be modified to `'percent'`.

If we specify `rangeMode` manually in `option`, it only works when both `start` and `startValue` specified or both `end` and `endValue` specified. So usually we do not need to specify `dataZoom.rangeMode` manually.

Take a scenario as an example. When we are using dynamic data (update data periodically via `setOption`), if in `'value`' mode, the window will be kept in a fixed value range despite how data are appended, while if in `'percent'` mode, whe window range will be changed alone with the appended data (suppose `axis.min` and `axis.max` are not specified).



{{ target: partial-data-zoom-filterMode }}

Generally `dataZoom` component zoom or roam coordinate system through data filtering and set the windows of axes internally.

Its behaviours vary according to filtering mode settings ([dataZoom.filterMode](~dataZoom.filterMode)).

Possible values:

+ 'filter': data that outside the window will be **filtered**, which may lead to some changes of windows of other axes. For each data item, it will be filtered if one of the relevant dimensions is out of the window.

+ 'weakFilter': data that outside the window will be **filtered**, which may lead to some changes of windows of other axes. For each data item, it will be filtered only if all of the relevant dimensions are out of the same side of the window.

+ 'empty': data that outside the window will be **set to NaN**, which will not lead to changes of windows of other axes.

+ 'none': Do not filter data.

How to set `filterMode` is up to users, depending on the requirements and scenarios. Expirically:

+ If only `xAxis` or only `yAxis` is controlled by `dataZoom`, `filterMode: 'filter'` is typically used, which enable the other axis auto adapte its window to the extent of the filtered data.

+ If both `xAxis` and `yAxis` are operated by `dataZoom`:

    + If `xAxis` and `yAxis` should not effect mutually (e.g. a scatter chart with both axes on the type of `'value'`), they should be set to be `filterMode: 'empty'`.

    + If `xAxis` is the main axis and `yAxis` is the auxiliary axis (or vise versa) (e.g., in a bar chart, when dragging `dataZoomX` to change the window of xAxis, we need the yAxis to adapt to the clipped data, but when dragging `dataZoomY` to change the window of yAxis, we need the xAxis not to be changed), in this case, `xAxis` should be set to be `filterMode: 'filter'`, while `yAxis` should be set to be `filterMode: 'empty'`.

It can be demonstrated by the sample:

```javascript
option = {
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter'
        },
        {
            id: 'dataZoomY',
            type: 'slider',
            yAxisIndex: [0],
            filterMode: 'empty'
        }
    ],
    xAxis: {type: 'value'},
    yAxis: {type: 'value'},
    series{
        type: 'bar',
        data: [
            // The first column corresponds to xAxis,
            // and the second column corresponds to yAxis.
            [12, 24, 36],
            [90, 80, 70],
            [3, 9, 27],
            [1, 11, 111]
        ]
    }
}
```

In the sample above, `dataZoomX` is set as `filterMode: 'filter'`. When use drags `dataZoomX` (do not touch `dataZoomY`) and the valueWindow of `xAxis` is changed to `[2, 50]` consequently, `dataZoomX` travel the first column of series.data and filter items that out of the window. The series.data turns out to be:

```javascript
[
    [12, 24, 36],
    // [90, 80, 70] This item is filtered, as 90 is out of the window.
    [3, 9, 27]
    // [1, 11, 111] This item is filtered, as 1 is out of the window.
]
```

Before filtering, the second column, which corresponds to yAxis, has values `24`, `80`, `9`, `11`. After filtering, only `24` and `9` are left. Then the extent of `yAxis` is adjusted to adapt the two values (if `yAxis.min` and `yAxis.max` are not set).

So `filterMode: 'filter'` can be used to enable the other axis to auto adapt the filtered data.

Then let's review the sample from the beginning, `dataZoomY` is set as `filterMode: 'empty'`. So if user drags `dataZoomY` (do not touch `dataZoomX`) and its window is changed to `[10, 60]` consequently, `dataZoomY` travels the second column of series.data and set NaN to all of the values that outside the window (NaN cause the graphical elements, i.e., bar elements, do not show, but still hold the place). The series.data turns out to be:

```javascript
[
    [12, 24, 36],
    [90, NaN, 70], // Set to NaN
    [3, NaN, 27],  // Set to NaN
    [1, 11, 111]
]
```

In this case, the first column (i.e., `12`, `90`, `3`, `1`, which corresponds to `xAxis`), will not be changed at all. So dragging `yAxis` will not change extent of `xAxis`, which is good for requirements like outlier filtering.

See this example:
~[600x400](${galleryViewPath}doc-example/bar-dataZoom-filterMode&edit=1&reset=1)

