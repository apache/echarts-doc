{{ target: echarts-instance }}

# echartsInstance(Object)

Instance created through [echarts.init](~echarts.init).

## group(string|number)
Group name to be used in chart [connection](~echarts.connect).

## setOption(Function)
```ts
(option: Object, notMerge?: boolean, lazyUpdate?: boolean)
or
(option: Object, opts?: {
    notMerge?: boolean;
    replaceMerge?: string | string[];
    lazyUpdate?: boolean;
})
```

Configuration item, data, universal interface, all parameters and data can all be modified through `setOption`. ECharts will merge new parameters and data, and then refresh chart. If [animation](option.html#animation) is enabled, ECharts will find the difference between two groups of data and present data changes through proper animation.

**For example: **

~[500x400](${galleryViewPath}dynamic-data&reset=1&edit=1)

**Attention: ** Setting configuration item using `addData` and `setSeries` of ECharts 2.x are no longer supported. `setOption` is used for all these cases in ECharts 3. Please refer to the above example.

**Parameters**

Usage:
```ts
chart.setOption(option, notMerge, lazyUpdate);
```
or
```ts
chart.setOption(option, {
    notMerge: ...,
    lazyUpdate: ...,
    silent: ...
});
```
or
```ts
chart.setOption(option, {
    replaceMerge: ['xAxis', 'yAxis', 'series']
});
```


+ `option`: `ECOption`

    Configuration item and data. Please refer to [configuration item manual](option.html) for more information.

+ opts

    + `notMerge` Optional. Whether not to merge with previous `option`. `false` by default, means merge, see more details in **Component Merging Modes**. If `true`, all of the current components will be removed and new components will be created according to the new `option`.

    + `replaceMerge` Optional. Users can specify "component main types" here, which are the properties under the root of the option tree in [configuration item manual](option.html) (e.g., `xAxis`, `series`). The specified types of component will be merged in the mode "replaceMerge". If users intending to remove some part of components, `replaceMerge` can be used. See more details in **Component Merging Modes**.

    + `lazyUpdate` Opional. Whether not to update chart immediately. `false` by default, stating update chart synchronously. If `true`, the chart will be updated in the next animation frame.

    + `silent` Optional. Whether not to prevent triggering events when calling `setOption`. `false` by default, stating trigger events.


<h4>Component Merging Modes</h4>

Within a specific type of components (more accurately, "component main type". e.g., `xAxis`, `series`):

+ If `opts.notMerge` is set as `true`, the old components will be totally removed and the new component will be created by the incoming `option`.
+ If `opts.notMerge` is set as `false` or not specified:
    + If this component main type is included in `opts.replaceMerge`, these components will be merged in mode `Replace Merge`.
    + Otherwise, these components will be merged in mode `Normal Merge`.

What is `Normal Merge` and `Replace Merge`?

<h5>Normal Merge</h5>

Within a specific component main type (e.g., `xAxis`, `series`), each single "component description" (i.e., like `{type: 'xAxis', id: 'xx', name: 'kk', ...}`) in the incoming `option` will be mapped and merged into the existing components one by one if possible. Otherwise create new component on the tail of the list. The detailed rule is as follows:

+ For each single "component description" that has `id` or `name` specified in `option`, firstly find and merge to existing components that has the same `id` or `name` if possible.
+ Then for each remaining single "component description", find and merge to remaining existing components if possible.
+ Create new components for the remaining "component descriptions" at the tail.

Features:
+ No existing component will be removed. Only add and update are supported in this mode.
+ The index of component(componentIndex) will never be changed.
+ If no `id` and `name` specified in `option` (this is a common case), components can be simply merged intuitively according to where they appear in `option`.

Example:
```ts
// Existing components:
{
    xAxis: [
        { id: 'm', interval: 5 },
        { id: 'n', name: 'nnn', interval: 6 }
        { id: 'q', interval: 7 }
    ]
}
// Incoming option:
chart.setOption({
    xAxis: [
        // No id given. Will be merged to the first unmatched existing component `id: 'q'`
        { interval: 77 },
        // No id given. Will create new component
        { interval: 88 },
        // No id given but name given. Will be merged to `name: 'nnn'`
        { name: 'nnn', interval: 66 },
        // id given. Will be merged to `id: 'm'`.
        { id: 'm', interval: 55 }
    ]
});
// Result components:
{
    xAxis: [
        { id: 'm', interval: 55 },
        { id: 'n', name: 'nnn', interval: 66 },
        { id: 'q', interval: 77 },
        { interval: 88 }
    ]
}
```

<h5>`Replace Merge`</h5>

Within a specific component main type (e.g., `xAxis`, `series`), only the existing components that has its `id` declared in the incoming `option` will be kept, other existing components will be removed or replaced with new created component. the detailed rule is as follows:

+ Firstly Find and merge to existing components that has the same `id` in `option` if possible.
+ Remove the remaining unmatched existing components. (In fact, set to `null` in the component list to make sure there is no change of the indices of the components that not be removed).
+ Create new components for the remaining "component descriptions", and put them on the places that have been free or appended to the tail.

Features:

+ Enable to remove some of the components, which is not supported in `Normal Merge`.
+ The indices of the existing components will never be modified. This is to ensure that the existing references by index still works (e.g., `xAxisIndex: 2`).
+ After replace merged, there might be some "hole", that is, there is no component at some index (because the original component is removed). But this is expectable and controllable by users.

Example:
```ts
// Existing components:
{
    xAxis: [
        { id: 'm', interval: 5, min: 1000 },
        { id: 'n', name: 'nnn', interval: 6, min: 1000 }
        { id: 'q', interval: 7, min: 1000 }
    ]
}
// Incoming option:
chart.setOption({
    xAxis: [
        { interval: 111 },
        // id given. Will be merged to the existing `id: 'q'`.
        { id: 'q', interval: 77 },
        // id given, but can not find in the existing components.
        { id: 't', interval: 222 },
        { interval: 333 }
    ]
}, { replaceMerge: 'xAxis' });
// Result components:
{
    xAxis: [
        // The original component { id: 'm' } has been removed
        // and replaced to this new component. So `min: 1000` is discarded.
        { interval: 111 },
        // The original component { id: 'n' } has been removed
        // and replaced to this new component. So `min: 1000` is discarded.
        { id: 't', interval: 222 },
        // The original component has been merged with this new component.
        // So `min: 1000` is kept.
        { id: 'q', interval: 77, min: 1000 },
        { interval: 333 }
    ]
}
```

<h5>Remove Component</h5>

There are two ways to remove components:
+ Totally removal: use `notMerge: true`, all of the components will be removed.
+ Partially removal: use `replaceMerge: [...]`, the specified types of components will be removed if no id matched. This mode is useful to keep the state (e.g., highlight / animation / selected area) of the other components while make removal.


## getWidth(Function)
```ts
() => number
```

Gets width of ECharts instance container.

## getHeight(Function)
```ts
() => number
```

Gets height of ECharts instance container.


## getDom(Function)
```ts
() => HTMLCanvasElement|HTMLDivElement
```

Gets DOM element of ECharts instance container.


## getOption(Function)
```ts
() => Object
```

Gets `option` object maintained in current instance, which contains configuration item and data merged from previous `setOption` operations by users, along with user interaction states. For example, switching of legend, zooming area of data zoom, and so on. Therefore, a new instance that is exactly the same can be recovered from this option.

**Attention: **Attribute values in each component of the returned option are all in the form of an array, no matter it's single object or array of object when passed by `setOption`.
For example:
```ts
{
    title: [{...}],
    legend: [{...}],
    grid: [{...}]
}
```

Besides, the following style is **not recommended**:
```ts
var option = myChart.getOption();
option.visualMap[0].inRange.color = ...;
myChart.setOption(option);
```

This is because `getOption` contains merged values which could be default values, and may overlaps future values. So, we **recommend** the following style when update part of configuration.
```ts
myChart.setOption({
    visualMap: {
        inRange: {
            color: ...
        }
    }
})
```


## resize(Function)
```ts
(opts?: {
    width?: number|string,
    height?: number|string,
    silent?: boolean,
    animation?: {
        duration?: number
        easing?: string
    }
}) => ECharts
```

Resizes chart, which should be called manually when container size changes.

**Parameters**
+ `opts`

    Optional. Which may contain:

    + `width` Specify width explicitly, in pixel. If setting to `null`/`undefined`/`'auto'`, width of `dom` (instance container) will be used.

    + `height` Specify height explicitly, in pixel. If setting to `null`/`undefined`/`'auto'`, height of `dom` (instance container) will be used.

    + `silent` Specify whether or not to prevent triggering events.

    + `animation` Whether to apply transition animation when resize, including `duration` and `easing`, the default `duration` is 0, that is, no transition animation is applied.

**Tip:**

Sometimes charts may be placed in multiple tabs. Those in hidden labels may fail to initialize due to the ignorance of container width and height. So `resize` should be called manually to get the correct width and height when switching to the corresponding tabs, or specify width/heigth in `opts` explicitly.

## renderToSVGString(Function)

> Since `5.3.0`

```ts
(opts?: {
    useViewBox?: boolean
}) => string
```

Render to a SVG string. Available when setting `renderer: 'svg'` to use SVG rendering mode.

Must use this method to render if server-side rendering is enabled with the `ssr` parameter in `echarts.init`

**Parameters**

+ `opts`

    + `useViewBox` Whether to add [viewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox) in the generated SVG string


## dispatchAction(Function)
```ts
(payload: Object)
```
Triggers chart action, like chart switch `legendToggleSelect`,zoom data area `dataZoom`, show tooltip `showTip` and so on. See [action](~action) and [events](~events) for more information.

`payload` parameter can trigger multiple actions through `batch` attribute.

**Attention: **In ECharts 2.x, triggering chart actions has a long operation path like `myChart.component.tooltip.showTip`, which may also involve with internal component organization. So, `dispatchAction` is used in this case in ECharts 3.

**For example**
```ts
myChart.dispatchAction({
    type: 'dataZoom',
    start: 20,
    end: 30
});
// Multiply actions can be dispatched through batch parameter
myChart.dispatchAction({
    type: 'dataZoom',
    batch: [{
        // first dataZoom component
        start: 20,
        end: 30
    }, {
        // second dataZoom component
        dataZoomIndex: 1,
        start: 10,
        end: 20
    }]
})
```

## on(Function)
```ts
(
    eventName: string,
    handler: Function,
    context?: Object
)
(
    eventName: string,
    query: string|Object,
    handler: Function,
    context?: Object
)
```

Binds event-handling function.

There are two kinds of events in ECharts, one of which is mouse events, which will be triggered when the mouse clicks certain element in the chart, the other kind will be triggered after [dispatchAction](~echartsInstance.dispatchAction) is called. Every action has a corresponding event. Please refer to [action](~action) and [events](~events) for more information.

If event is triggered externally by [dispatchAction](~echartsInstance.dispatchAction), and there is batch attribute in action to trigger batch action, then the corresponding response event parameters be in batch.

**Parameters**
+ `eventName`

    Event names are all in lower-cases, for example, `'click'`, `'mousemove'`, `'legendselected'`

    **Attention: ** ECharts 2.x uses attributes like `CLICK` in `config` object as event name. In ECharts 3, lower-case strings are used as event name to align with DOM events.

+ `query`

    Condition for filtering, optional. `query` enables only call handlers on graphic elements of specified components. Can be `string` or `Object`.

    If `string`, the formatter can be 'mainType' or 'mainType.subType'. For example:
    ```ts
    chart.on('click', 'series', function () {...});
    chart.on('click', 'series.line', function () {...});
    chart.on('click', 'xAxis.category', function () {...});
    ```

    If `Object`, one or more properties below can be included, and any of them is optional.
    ```ts
    {
        <mainType>Index: number // component index
        <mainType>Name: string // component name
        <mainType>Id: string // component id
        dataIndex: number // data item index
        name: string // data item name
        dataType: string // data item type, e.g.,
                         // 'node' and 'edge' in graph.
        element: string // element name in custom series
    }
    ```

    For example:
    ```ts
    chart.setOption({
        // ...
        series: [{
            name: 'uuu'
            // ...
        }]
    });
    chart.on('mouseover', {seriesName: 'uuu'}, function () {
        // When the graphic elements in the series with name 'uuu' mouse overed, this method is called.
    });
    ```

    For example:
    ```ts
    chart.setOption({
        // ...
        series: [{
            // ...
        }, {
            // ...
            data: [
                {name: 'xx', value: 121},
                {name: 'yy', value: 33}
            ]
        }]
    });
    chart.on('mouseover', {seriesIndex: 1, name: 'xx'}, function () {
        // When the graphic elements of the data item with name 'xx' in the series with index 1 mouse overed, this method is called.
    });
    ```

    For example:
    ```ts
    chart.setOption({
        // ...
        series: [{
            type: 'graph',
            nodes: [{name: 'a', value: 10}, {name: 'b', value: 20}],
            edges: [{source: 0, target: 1}]
        }]
    });
    chart.on('click', {dataType: 'node'}, function () {
        // When the nodes of the graph clicked, this method is called.
    });
    chart.on('click', {dataType: 'edge'}, function () {
        // When the edges of the graph clicked, this method is called.
    });
    ```

    For example:
    ```ts
    chart.setOption({
        // ...
        series: {
            // ...
            type: 'custom',
            renderItem: function (params, api) {
                return {
                    type: 'group',
                    children: [{
                        type: 'circle',
                        name: 'my_el',
                        // ...
                    }, {
                        // ...
                    }]
                }
            },
            data: [[12, 33]]
        }
    })
    chart.on('click', {targetName: 'my_el'}, function () {
        // When the element with name 'my_el' clicked, this method is called.
    });
    ```

+ `handler`

    Event-handling function, whose format is as following:
```ts
(event: Object)
```

+ `context`

    Optional; context of callback function, what `this` refers to.


## off(Function)
```ts
(eventName: string, handler?: Function)
```

Unbind event-handler function.

**parameter: **
+ `eventName`

    Event name.

+ `handler`

    Optional. The function to be unbound could be passed. Otherwise, all event functions of this type will be unbound.



## convertToPixel(Function)
```ts
(
    // finder is used to indicate in which coordinate system conversion is performed.
    // Generally, index or id or name can be used to specify coordinate system.
    finder: {
        seriesIndex?: number,
        seriesId?: string,
        seriesName?: string,
        geoIndex?: number,
        geoId?: string,
        geoName?: string,
        xAxisIndex?: number,
        xAxisId?: string,
        xAxisName?: string,
        yAxisIndex?: number,
        yAxisId?: string,
        yAxisName?: string,
        gridIndex?: number,
        gridId?: string,
        gridName?: string
    },
    // The value to be converted.
    value: Array|string
    // Conversion result, in pixel coordinate system, where the origin ([0, 0])
    // is on the left-top of the main dom of echarts instance.
) => Array|string
```

Convert a point from logical coordinate (e.g., in geo, cartesian, graph, ...) to pixel coordinate.


For example:

In [geo](option.html#geo) coordinate system, convert a point from latlong to pixel coordinate:
```ts
// [128.3324, 89.5344] represents [longitude, latitude].
// Perform conversion in the first geo coordinate system:
chart.convertToPixel('geo', [128.3324, 89.5344]); // The parameter 'geo' means {geoIndex: 0}.
// Perform conversion in the second geo coordinate system:
chart.convertToPixel({geoIndex: 1}, [128.3324, 89.5344]);
// Perform conversion in the geo coordinate system with id 'bb':
chart.convertToPixel({geoId: 'bb'}, [128.3324, 89.5344]);
```

In cartesian (see [grid](option.html#grid)), convert a point to pixel coordinate:
```ts
// [300, 900] means [value on xAxis, value on yAxis].
// Notice, there might be more than one xAxis or yAxis in a grid, and each a pair of
// xAxis-yAxis constitudes a cartesian.
// Perform conversion in the cartesian consist of the third xAxis and the yAxis with id 'y1'.
chart.convertToPixel({xAxisIndex: 2, yAxisId: 'y1'}, [300, 900]);
// 使用 id 为 'g1' 的 grid 的第一个 cartesian 进行转换：
// Perform conversion in the first cartesian of the grid with id 'g1'.
chart.convertToPixel({gridId: 'g1'}, [300, 900]);
```

Convert a axis value to pixel value:
```ts
// In the xAxis with id 'x0', convert value 3000 to the horizontal pixel coordinate:
chart.convertToPixel({xAxisId: 'x0'}, 3000); // A number will be returned.
// In the second yAxis, convert value 600 to the vertical pixel coordinate:
chart.convertToPixel({yAxisIndex: 1}, 600); // A number will be returned.
```

In [graph](option.html#series-graph), convert a point to pixel coordinate:
```ts
// Since every graph series maintains a coordinate system for itself, we
// specify the graph series in finder.
chart.convertToPixel({seriesIndex: 0}, [2000, 3500]);
chart.convertToPixel({seriesId: 'k2'}, [100, 500]);
```

In a cooridinate system (cartesian, geo, graph, ...) that contains the given series, convert a point to pixel coordinate:
```ts
// Perform convert in the coordinate system that contains the first series.
chart.convertToPixel({seriesIndex: 0}, [128.3324, 89.5344]);
// Perform convert in the coordinate system that contains the series with id 'k2'.
chart.convertToPixel({seriesId: 'k2'}, [128.3324, 89.5344]);
```


## convertFromPixel(Function)
```ts
(
    // finder is used to indicate in which coordinate system conversion is performed.
    // Generally, index or id or name can be used to specify coordinate system.
    finder: {
        seriesIndex?: number,
        seriesId?: string,
        seriesName?: string,
        geoIndex?: number,
        geoId?: string,
        geoName?: string,
        xAxisIndex?: number,
        xAxisId?: string,
        xAxisName?: string,
        yAxisIndex?: number,
        yAxisId?: string,
        yAxisName?: string,
        gridIndex?: number,
        gridId?: string,
        gridName?: string
    },
    // The value to be converted, in pixel coordinate system, where the origin ([0, 0])
    // is on the left-top of the main dom of echarts instance.
    value: Array|string
    // Conversion result
) => Array|string
```

Convert a point from pixel coordinate to logical coordinate (e.g., in geo, cartesian, graph, ...). This method is the inverse operation of [convertToPixel](~echartsInstance.convertToPixel), where the examples can be referred.


## containPixel(Function)
```ts
(
    // finder is used to specify coordinate systems or series on which the judgement performed.
    // Generally, index or id or name can be used to specify coordinate system.
    finder: {
        seriesIndex?: number,
        seriesId?: string,
        seriesName?: string,
        geoIndex?: number,
        geoId?: string,
        geoName?: string,
        xAxisIndex?: number,
        xAxisId?: string,
        xAxisName?: string,
        yAxisIndex?: number,
        yAxisId?: string,
        yAxisName?: string,
        gridIndex?: number,
        gridId?: string,
        gridName?: string
    },
    // The value to be judged, in pixel coordinate system, where the origin ([0, 0])
    // is on the left-top of the main dom of echarts instance.
    value: Array
) => boolean
```

Determine whether the given point is in the given coordinate systems or series.

These coordinate systems or series are supported currently: [grid](option.html#grid), [polar](option.html#polar), [geo](option.html#geo), [series-map](option.html#series-map), [series-graph](option.html#series-graph), [series-pie](option.html#series-pie).

For example:

```ts
// Determine whether point [23, 44] is in the geo whose geoIndex 0.
chart.containPixel('geo', [23, 44]); // Parameter 'geo' means {geoIndex: 0}
// Determine whether point [23, 44] is in the grid whose gridId is 'z'.
chart.containPixel({gridId: 'z'}, [23, 44]);
// Determine whether point [23, 44] is in series whose index are 1, 4 or 5.
chart.containPixel({seriesIndex: [1, 4, 5]}, [23, 44]);
// Determine whether point [23, 44] is in series whose index are 1, 4 or 5,
// or is in grid whose name is 'a'.
chart.containPixel({seriesIndex: [1, 4, 5], gridName: 'a'}, [23, 44]);
```


## showLoading(Function)
```ts
(type?: string, opts?: Object)
```
Shows loading animation. You can call this interface manually before data is loaded, and call [hideLoading](~echartsInstance.hideLoading) to hide loading animation after data is loaded.

**parameter: **
+ `type`

    Optional; type of loading animation; only `'default'` is supported by far.

+ `opts`

    Optional; configuration item of loading animation, which is related to `type`. Following shows the available configuration items and their default values:

    ```ts
default: {
    text: 'loading',
    color: '#c23531',
    textColor: '#000',
    maskColor: 'rgba(255, 255, 255, 0.8)',
    zlevel: 0,

    // Font size. Available since `v4.8.0`.
    fontSize: 12,
    // Show an animated "spinner" or not. Available since `v4.8.0`.
    showSpinner: true,
    // Radius of the "spinner". Available since `v4.8.0`.
    spinnerRadius: 10,
    // Line width of the "spinner". Available since `v4.8.0`.
    lineWidth: 5,
    // Font thick weight. Available since `v5.0.1`.
    fontWeight: 'normal',
    // Font style. Available since `v5.0.1`.
    fontStyle: 'normal',
    // Font family. Available since `v5.0.1`.
    fontFamily: 'sans-serif'
}
    ```

## hideLoading(Function)

Hides animation loading effect.

## getDataURL(Function)
```ts
(opts: {
    // Exporting format, can be png, jpg, svg.
    // NOTE: png, jpg is only available for canvas renderer. svg is only available for svg renderer.
    type?: string,
    // Resolution ratio of exporting image, 1 by default.
    pixelRatio?: number,
    // Background color of exporting image, use backgroundColor in option by default.
    backgroundColor?: string,
    // Excluded components list. e.g. ['toolbox']
    excludeComponents?: Array.<string>
}) => string
```

Exports chart image; returns a base64 URL; can be set to `src` of `Image`.

**For example: **
```ts
var img = new Image();
img.src = myChart.getDataURL({
    pixelRatio: 2,
    backgroundColor: '#fff'
});
```

## getConnectedDataURL
```ts
(opts: {
    // Exporting format, can be either png, or jpeg
    type?: string,
    // Resolution ratio of exporting image, 1 by default.
    pixelRatio?: number,
    // Background color of exporting image, use backgroundColor in option by default.
    backgroundColor?: string,
    // Excluded components list. e.g. ['toolbox']
    excludeComponents?: Array.<string>
}) => string
```

Exports connected chart image; returns a base64 url; can be set to `src` of `Image`. Position of charts in exported image are related to that of the container.

## appendData
```ts
(opts: {
    // Specify which series the data will be appended to.
    seriesIndex?: string,
    // The data to be appended.
    data?: Array|TypedArray
}) => string
```

The method is used in rendering millions of data (e.g. rendering geo data). In these scenarios, the entire size of data is probably up to 10 or 100 MB, even using binary format. So chunked load data and rendering is required. When using `appendData`, the graphic elements that have been rendered will not be cleared, but keep rendering new graphic elements.

Notice:

+ Currently, when a series is using `dataset`, it is not supported to use `appendData`.
+ Currently, not all types of series support incremental rendering when using `appendData`. Only these types of series support it: scatter and lines of pure echarts, and scatterGL, linesGL and polygons3D of echarts-gl.


## clear

Clears current instance; removes all components and series in current instance.

## isDisposed
```ts
() => boolean
```
Returns whether current instance has been disposed.

## dispose

Disposes instance. Once disposed, the instance can not be used again.
