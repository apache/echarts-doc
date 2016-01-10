{{ target: echarts-instance }}

# echartsInstance(Object)

通过 [echarts.init](~echarts.init) 创建的实例。

## group(string|number)
图表的分组，用于[联动](~echarts.connect)

## setOption(Function)
```js
(option: Object, notMerge: boolean, notRefreshImmediately: boolean)
```

设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过`setOption`完成，ECharts 会合并新的参数和数据，然后刷新图表。如果开启[动画](~option.animation)的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化。

**如下示例：**

~[500x400](${galleryViewPath}dynamic-data&reset=1&edit=1)

**注：** ECharts 2.x 中的通过 `addData` , `setSeries` 方法设置配置项的方式将不再支持，在 ECharts 3 中统一使用`setOption`，可以参考上面示例。

**参数：**
+ `option`

    图表的配置项和数据，具体见[配置项手册](option.html)。

+ `notMerge`

    可选，是否不跟之前设置的`option`进行合并，默认为`false`，即合并。

+ `notRefreshImmediately`

    可选，在设置完`option`后是否不立即刷新画布，默认为`false`，即立即刷新。

## getWidth(Function)
```js
() => number
```

获取 ECharts 实例容器的宽度。

## getHeight(Function)
```js
() => number
```

获取 ECharts 实例容器的高度。

## getDom(Function)
```js
() => HTMLCanvasElement|HTMLDivElement
```

获取 ECharts 实例容器的 dom 节点。

## resize(Function)

改变图表尺寸，在容器大小发生改变时需要手动调用。

**Tip:** 有时候图表会放在多个标签页里，那些初始隐藏的标签在初始化图表的时候应为获取不到容器的实际高宽，可能会绘制失败，因此在切换到该标签页时需要手动调用 `resize` 方法获取正确的高宽并且刷新画布。

## dispatchAction(Function)
```js
(action: Object)
```
触发图表行为，例如图例开关`legendToggleSelect`, 数据区域缩放`dataZoom`，显示提示框`showTip`等等，更多见 [action](~action) 和 [events](~events) 的文档。

`action` 参数可以通过`batch`属性同时触发多个行为。

**注：**在 ECharts 2.x 是通过 `myChart.component.tooltip.showTip` 这种形式调用相应的接口触发图表行为，入口很深，而且涉及到内部组件的组织。因此在 ECharts 里统一改为 `dispatchAction` 的形式。

**示例**
```js
myChart.dispatchAction({
    type: 'dataZoom',
    start: 20,
    end: 30
});
// 可以通过 batch 参数批量分发多个 action
myChart.dispatchAction({
    type: 'dataZoom',
    batch: [{
        // 第一个 dataZoom 组件
        start: 20,
        end: 30
    }, {
        // 第二个 dataZoom 组件
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

绑定事件处理函数。

ECharts 中的事件有两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 [dispatchAction](~EChartsInstance.dispatchAction) 后触发的事件。每个 action 都会有对应的事件，具体见 [action](~action) 和 [events](~events) 的文档。

如果事件是外部 [dispatchAction](~EChartsInstance.dispatchAction) 后触发，并且 action 中有 batch 属性触发批量的行为，则相应的响应事件参数里也会把属性都放在 batch 属性中。

**参数：**
+ `eventName`

    事件名称，全小写，例如`'click'`，`'mousemove'`, `'legendselected'`

    **注：** ECharts 2.x 中会使用 `config` 对象中的 `CLICK` 等属性作为事件名称。在 ECharts 3 中统一使用跟 dom 事件一样的全小写字符串作为事件名。

+ `handler`

    事件处理函数。格式为:
    ```js
    (event: Object)
    ```

+ `context`

    可选。回调函数内部的`context`，即`this`的指向。


## off(Function)
```js
(eventName: string, handler?: Function)
```

解绑事件处理函数。

**参数：**
+ `eventName`

    事件名称。

+ `handler`

    可选，可以传入需要解绑的处理函数，不传的话解绑所有该类型的事件函数。

## showLoading(Function)
```js
(type?: string, opts?: Object)
```
显示加载动画效果。可以在加载数据前手动调用改接口显示加载动画，在动画加载完成后调用 [hideLoading](~EChartsInstance.hideLoading) 隐藏加载动画。

**参数：**
+ `type`

    可选，加载动画类型，目前只有一种`'default'`

+ `opts`

    可选，加载动画配置项，跟`type`有关，下面是默认配置项：

    ```js
default: {
    text: 'loading',
    color: '#c23531',
    textColor: '#000'
}
    ```

## hideLoading(Function)

隐藏动画加载效果。

## getDataURL(Function)
```js
(opts: {
    // 导出的格式，可选 png, jpeg
    type?: string,
    // 导出的图片分辨率比例，默认为 1。
    pixelRatio?: number,
    // 导出的图片背景色，默认使用 option 里的 backgroundColor
    backgroundColor?: string
}) => string
```

导出图表图片，返回一个 base64 的 url，可以设置为`Image`的`src`。

**示例：**
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
    // 导出的格式，可选 png, jpeg
    type: string,
    // 导出的图片分辨率比例，默认为 1。
    pixelRatio: number,
    // 导出的图片背景色，默认使用 option 里的 backgroundColor
    backgroundColor: string
}) => string
```

导出联动的图表图片，返回一个 base64 的 url，可以设置为`Image`的`src`。导出图片中每个图表的相对位置跟器容器的相对位置有关。

## dispose

销毁实例，销毁后实例无法再被使用。
