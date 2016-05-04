{{ target: echarts-instance }}

# echartsInstance(Object)

Example created through [echarts.init](~echarts.init).

## group(string|number)
chart group is used to [linkage](~echarts.connect)

## setOption(Function)
```js
(option: Object, notMerge: boolean, notRefreshImmediately: boolean)
```

set the configuration item, data and universal interface of chart example, all parameters and data can all be modified through `setOption`, ECharts will according merge new parameters and data, then refresh chart. If enable [animation](~option.animation), ECharts will find the difference between two data and show data change through proper animation.

**For example：**

~[500x400](${galleryViewPath}dynamic-data&reset=1&edit=1)

**Attention：** Through `addData` in ECharts 2.x, use `setSeries` to set configuration item is no longer supported, so need to use `setOption` in ECharts 3, you can refer to the above example.

**parameter：**
+ `option`

    configuration item and data of chart can refer to [configuration item manual](option.html)。

+ `notMerge`

    Option. Specifies whether not to merge with `option` set before，set to`false` by defualt，namely merge.

+ `notRefreshImmediately`

    Option.Specifies whether not to refresh cavas immediately,set to`false` by defualt，namely refresh immediately.

## getWidth(Function)
```js
() => number
```

Get width of ECharts example container.

## getHeight(Function)
```js
() => number
```

Get height of ECharts example container.


## getDom(Function)
```js
() => HTMLCanvasElement|HTMLDivElement
```

Get dom node of ECharts example container.


## getOption(Function)
```js
() => Object
```

Get `option` object maintained in previous example, `option` returned includes configuration item and data obtained from multiple `setOption` merge by users, interactive status of users are also recorded, for example, graphic switch, zoom range of data area and so on. Therefore, from this option you can recover or get a brand new but same example.

**Attention：**Attribute value in each component of the returned option is an array, no matter incoming `setOption` is single component or array of multiple components.
For example：
```js
{
    title: [{...}],
    legend: [{...}],
    grid: [{...}]
}
```

## resize(Function)

Resize graphic, but need to adjust manually when container size changes.

**Tip:** Sometimes charts will be placed in multiple label pages, those initially hidden label could have drawing failures because actual height and width of container can not be obtained. So you need to manually use `resize` to get right height and width and then refresh canvas when switch to this label page.

## dispatchAction(Function)
```js
(payload: Object)
```
Trigger graphic action, for example graphic switch `legendToggleSelect`,zoom data area `dataZoom` , show tooltip `showTip` and so on.See more in [action](~action) and [events](~events) document.

`payload`parameter can trigger multiple actions through `batch` attribute simultaneously.

**Attention：**In ECharts 2.x,through `myChart.component.tooltip.showTip`, this form invokes related interface to trigger graphic action,entrance is deep and involves organization in inner component. So switch to  `dispatchAction` in ECharts 3.

**For example**
```js
myChart.dispatchAction({
    type: 'dataZoom',
    start: 20,
    end: 30
});
// Through batch parameter you can dispatch many action 
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

Bind event-handling function.

There are two kinds of events in ECharts, one is mouse event, which will trigger when mouse click certain picture，another kind triggers event after dispatches [dispatchAction](~echartsInstance.dispatchAction). Every action has cooresponding event, details can be referred to in [action](~action) and[events](~events) document.

If event is triggered by [dispatchAction](~echartsInstance.dispatchAction), and there are bulk actions triggered by batch attribute in action, then related event parameter will also put all attribute in batch.

**parameter：**
+ `eventName`

    Event names are all in lowecase, for example `'click'`，`'mousemove'`, `'legendselected'`

    **Attention：** In ECharts 2.x `CLICK` attribut in `config` object can be used as event name. In ECharts 3,use the same lowercase string as dom event as event name.

+ `handler`

    Event-handling function, format is as followed:
    ```js
    (event: Object)
    ```

+ `context`

    Option. `context` inside callback function is what `this` refers.


## off(Function)
```js
(eventName: string, handler?: Function)
```

Unbind event-handler function.

**parameter：**
+ `eventName`

    Event name.

+ `handler`

    Option.You can incoming handler function that needs to be unbound, if not, unbind all event functions of this category.

## showLoading(Function)
```js
(type?: string, opts?: Object)
```
Show loading animation effect. You can manually adjust interface before loading data, and use [hideLoading](~echartsInstance.hideLoading) to hide loading animation after completing animation loading.

**parameter：**
+ `type`

    Option. types of loading animation, there is only `'default'` by far.

+ `opts`

    Option. Configuration item of loading animation, which is related to `type`, followings are the default configuration item ：

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

Hide animation loading effect.

## getDataURL(Function)
```js
(opts: {
    // Exporting format can be chosen between png, jpeg
    type?: string,
    // Resolution ratio of exporting picture is 1 by default.
    pixelRatio?: number,
    // Background color of exporting picture use backgroundColor in option by default.
    backgroundColor?: string
}) => string
```

Exporting picture chart , return a base64 url，can set to `src` in `Image`.

**For example：**
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
    // Exporting format can be chosen between png, jpeg
    type: string,
    // Resolution ratio of exporting picture is 1 by default.
    pixelRatio: number,
    // Background color of exporting picture use backgroundColor in option by default.
    backgroundColor: string
}) => string
```

Exporting linked chart picture, return a base64 url，you can set to `src` in `Image`.Relative location of each chart in exporting picture is related to that of container.

## clear

Clear current example will remove all components and charts in current example.After clearing, use [getOption](~echartsInstance.getOption) to return `{}`.

## isDisposed
```js
() => boolean
```
Specifies whether current example is disposed.

## dispose

Dispose example, once disposed, example can not be used again.
