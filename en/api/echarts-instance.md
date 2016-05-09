{{ target: echarts-instance }}

# echartsInstance(Object)

Instance created through [echarts.init](~echarts.init).

## group(string|number)
Group name to be used in chart [connection](~echarts.connect).

## setOption(Function)
```js
(option: Object, notMerge: boolean, notRefreshImmediately: boolean)
```

Configuration item, data, universal interface, all parameters and data can all be modified through `setOption`. ECharts will merge new parameters and data, and then refresh chart. If [animation](~option.animation) is enabled, ECharts will find the difference between two groups of data and present data changes through proper animation.

**For example: **

~[500x400](${galleryViewPath}dynamic-data&reset=1&edit=1)

**Attention: ** Setting configuration item using `addData` and `setSeries` of ECharts 2.x are no longer supported. `setOption` is used for all these cases in ECharts 3. Please refer to the above example.

**Parameters**
+ `option`

    Configuration item and data. Please refer to [configuration item manual](option.html) for more information. 

+ `notMerge`

    Optional; states whether not to merge with previous `option`; `false` by defualt, stating merging.

+ `notRefreshImmediately`

    Optional; states whether not to refresh cavas immediately; `false` by defualt, stating refresh immediately.

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

Resizes chart, which should be called manually when container size changes.

**Tip:** Sometimes charts may be placed in multiple tabs. Those in hidden labels may fail to initialize due to the ignorance of container width and height. So `resize` should be called manually to get the correct width and height when switching to the corresponding tabs.

## dispatchAction(Function)
```js
(payload: Object)
```
Triggers chart action, like chart switch `legendToggleSelect`,zoom data area `dataZoom`, show tooltip `showTip` and so on. See more [action](~action) and [events](~events) for more information.

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
(eventName: string, handler: Function, context?: Object)
```

Binds event-handling function.

There are two kinds of events in ECharts, one of which is mouse events, which will be triggered when the mouse clicks certain element in the chart, the other kind will be triggered after [dispatchAction](~echartsInstance.dispatchAction) is called. Every action has a corresponding event. Please refer to [action](~action) and [events](~events) for more information.

If event is triggered externally by [dispatchAction](~echartsInstance.dispatchAction), and there is batch attribute in action to trigger batch action, then the corresponding response event parameters be in batch.

**Parameters**
+ `eventName`

    Event names are all in lower-cases, for example `'click'`, `'mousemove'`, `'legendselected'`

    **Attention: ** ECharts 2.x uses attributes like `CLICK` in `config` object as event name. In ECharts 3, lower-case strings are used as event name to align with DOM events.

+ `handler`

    Event-handling function, whose format is as following:
    ```js
    (event: Object)
    ```

+ `context`

    Optional; `context` of callback function, what `this` refers to.


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

## showLoading(Function)
```js
(type?: string, opts?: Object)
```
Shows loading animation. You can call this interface manually before data is loaded, and call [hideLoading](~echartsInstance.hideLoading) to hide loading animation after data is loaded.

**parameter: **
+ `type`

    Optional; type of loading animation; only `'default'` is supported by far.

+ `opts`

    Optional; configuration item of loading animation, which is related to `type`. Following shows the default configuration item : 

    ```js
default: {
    text: 'loading',
    color: '#c23531',
    textColor: '#000',
    maskColor: 'rgba(255, 255, 255, 0.8)',
    zlevel: 0
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
    backgroundColor?: string
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
    backgroundColor?: string
}) => string
```

Exports connected chart image; returns a base64 url; can be set to `src` of `Image`. Position of charts in exported image are related to that of the container.

## clear

Clears current instance; removes all components and charts in current instance. After clearing, [getOption](~echartsInstance.getOption) returns an empty object `{}`.

## isDisposed
```js
() => boolean
```
Returns whether current instance has been disposed.

## dispose

Disposes instance. Once disposed, the instance can not be used again.
