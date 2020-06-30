{{ target: echarts-instance }}

# echartsInstance(Object)

Instance created through [echarts.init](~echarts.init).

## group(string|number)
Group name to be used in chart [connection](~echarts.connect).

## setOption(Function)
```js
(option: Object, notMerge?: boolean, lazyUpdate?: boolean)
or
(option: Object, opts?: Object)
```

Configuration item, data, universal interface, all parameters and data can all be modified through `setOption`. ECharts will merge new parameters and data, and then refresh chart. If [animation](option.html#animation) is enabled, ECharts will find the difference between two groups of data and present data changes through proper animation.

**For example: **

~[500x400](${galleryViewPath}dynamic-data&reset=1&edit=1)

**Attention: ** Setting configuration item using `addData` and `setSeries` of ECharts 2.x are no longer supported. `setOption` is used for all these cases in ECharts 3. Please refer to the above example.

**Parameters**

Invoke approaches:
```js
chart.setOption(option, notMerge, lazyUpdate);
```
or
```js
chart.setOption(option, {
    notMerge: ...,
    lazyUpdate: ...,
    silent: ...
});
```

+ `option`

    Configuration item and data. Please refer to [configuration item manual](option.html) for more information.

+ `notMerge`

    Optional; states whether not to merge with previous `option`; `false` by default, stating merging.

+ `lazyUpdate`

    Optional; states whether not to update chart immediately; `false` by default, stating update immediately.

+ `silent`

    Optional; states whether not to prevent triggering events when calling `setOption`; `false` by default, stating trigger events.


## getWidth(Function)
```js
() => number
```

Gets width of ECharts instance container.

## getHeight(Function)
```js
() => number
```

Gets height of ECharts instance container.


## getDom(Function)
```js
() => HTMLCanvasElement|HTMLDivElement
```

Gets DOM element of ECharts instance container.


## getOption(Function)
```js
() => Object
```

Gets `option` object maintained in current instance, which contains configuration item and data merged from previous `setOption` operations by users, along with user interaction states. For example, switching of legend, zooming area of data zoom, and so on. Therefore, a new instance that is exactly the same can be recovered from this option.

**Attention: **Attribute values in each component of the returned option are all in the form of an array, no matter it's single object or array of object when passed by `setOption`.
For example:
```js
{
    title: [{...}],
    legend: [{...}],
    grid: [{...}]
}
```

Besides, the following style is **not recommended**:
```js
var option = myChart.getOption();
option.visualMap[0].inRange.color = ...;
myChart.setOption(option);
```

This is because `getOption` contains merged values which could be default values, and may overlaps future values. So, we **recommend** the following style when update part of configuration.
```js
myChart.setOption({
    visualMap: {
        inRange: {
            color: ...
        }
    }
})
```


## resize(Function)
```js
(opts?: {
    width?: number|string,
    height?: number|string,
    silent?: boolean
}) => ECharts
```

Resizes chart, which should be called manually when container size changes.

**Parameters**
+ `opts`

    Optional; which may contain:

    + `width`

        Specify width explicitly, in pixel. If setting to `null`/`undefined`/`'auto'`, width of `dom` (instance container) will be used.

    + `height`

        Specify height explicitly, in pixel. If setting to `null`/`undefined`/`'auto'`, height of `dom` (instance container) will be used.

    + `silent`

        Specify whether or not to prevent triggering events.

**Tip:** Sometimes charts may be placed in multiple tabs. Those in hidden labels may fail to initialize due to the ignorance of container width and height. So `resize` should be called manually to get the correct width and height when switching to the corresponding tabs, or specify width/heigth in `opts` explicitly.

## dispatchAction(Function)
```js
(payload: Object)
```
Triggers chart action, like chart switch `legendToggleSelect`,zoom data area `dataZoom`, show tooltip `showTip` and so on. See [action](~action) and [events](~events) for more information.

`payload` parameter can trigger multiple actions through `batch` attribute.

**Attention: **In ECharts 2.x, triggering chart actions has a long operation path like `myChart.component.tooltip.showTip`, which may also involve with internal component organization. So, `dispatchAction` is used in this case in ECharts 3.

**For example**
```js
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
```js
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
    ```js
    chart.on('click', 'series', function () {...});
    chart.on('click', 'series.line', function () {...});
    chart.on('click', 'dataZoom', function () {...});
    chart.on('click', 'xAxis.category', function () {...});
    ```

    If `Object`, one or more properties below can be included, and any of them is optional.
    ```js
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
    ```js
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
    ```js
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
    ```js
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
    ```js
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
```js
(event: Object)
```

+ `context`

    Optional; context of callback function, what `this` refers to.


## off(Function)
```js
(eventName: string, handler?: Function)
```

Unbind event-handler function.

**parameter: **
+ `eventName`

    Event name.

+ `handler`

    Optional. The function to be unbound could be passed. Otherwise, all event functions of this type will be unbound.



## convertToPixel(Function)
```js
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
```js
// [128.3324, 89.5344] represents [longitude, latitude].
// Perform conversion in the first geo coordinate system:
chart.convertToPixel('geo', [128.3324, 89.5344]); // The parameter 'geo' means {geoIndex: 0}.
// Perform conversion in the second geo coordinate system:
chart.convertToPixel({geoIndex: 1}, [128.3324, 89.5344]);
// Perform conversion in the geo coordinate system with id 'bb':
chart.convertToPixel({geoId: 'bb'}, [128.3324, 89.5344]);
```

In cartesian (see [grid](option.html#grid)), convert a point to pixel coordinate:
```js
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
```js
// In the xAxis with id 'x0', convert value 3000 to the horizontal pixel coordinate:
chart.convertToPixel({xAxisId: 'x0'}, 3000); // A number will be returned.
// In the second yAxis, convert value 600 to the vertical pixel coordinate:
chart.convertToPixel({yAxisIndex: 1}, 600); // A number will be returned.
```

In [graph](option.html#series-graph), convert a point to pixel coordinate:
```js
// Since every graph series maintains a coordinate system for itself, we
// specify the graph series in finder.
chart.convertToPixel({seriesIndex: 0}, [2000, 3500]);
chart.convertToPixel({seriesId: 'k2'}, [100, 500]);
```

In a cooridinate system (cartesian, geo, graph, ...) that contains the given series, convert a point to pixel coordinate:
```js
// Perform convert in the coordinate system that contains the first series.
chart.convertToPixel({seriesIndex: 0}, [128.3324, 89.5344]);
// Perform convert in the coordinate system that contains the series with id 'k2'.
chart.convertToPixel({seriesId: 'k2'}, [128.3324, 89.5344]);
```


## convertFromPixel(Function)
```js
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
```js
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

```js
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
```js
(type?: string, opts?: Object)
```
Shows loading animation. You can call this interface manually before data is loaded, and call [hideLoading](~echartsInstance.hideLoading) to hide loading animation after data is loaded.

**parameter: **
+ `type`

    Optional; type of loading animation; only `'default'` is supported by far.

+ `opts`

    Optional; configuration item of loading animation, which is related to `type`. Following shows the available configuration items and their default values:

    ```js
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
    lineWidth: 5
}
    ```

## hideLoading(Function)

Hides animation loading effect.

## getDataURL(Function)
```js
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

Exports chart image; returns a base64 URL; can be set to `src` of `Image`.

**For example: **
```js
var img = new Image();
img.src = myChart.getDataURL({
    pixelRatio: 2,
    backgroundColor: '#fff'
});
```

## getConnectedDataURL
```js
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
```js
(opts: {
    // Specify which series the data will be appended to.
    seriesIndex?: string,
    // The data to be appended.
    data?: Array|TypedArray
}) => string
```

The method is used in rendering millions of data (e.g. rendering geo data). In these scenario, the entire size of data is probably up to 10 or 100 MB, even using binary format. So chunked load data and rendering is required. When using `appendData`, the graphic elements that have been rendered will not be cleared, but keep rendering new graphic elements.

Notice:

+ Currently, when a series is using `dataset`, it is not supported to use `appendData`.
+ Currently not all types of series supported incremental rendering when using `appendData`. Only these types of series support it: scatter and lines of pure echarts, and scatterGL, linesGL and polygons3D of echarts-gl.


## clear

Clears current instance; removes all components and series in current instance.

## isDisposed
```js
() => boolean
```
Returns whether current instance has been disposed.

## dispose

Disposes instance. Once disposed, the instance can not be used again.
