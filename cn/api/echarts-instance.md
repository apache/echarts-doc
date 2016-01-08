{{ target: echarts-instance }}

# echartsInstance(Object)

通过 [echarts.init](~echarts.init) 创建的实例。

## setOption(Function)
```js
(option: Object, notMerge: boolean, notRefreshImmediately: boolean)
```

设置图表示例的配置项以及数据，

**参数：**
+ option

    图表的配置项和数据，具体见[配置项手册](option.html)。

+ notMerge

    可选，是否不跟之前设置的`option`进行合并，默认为`false`，即合并。

+ notRefreshImmediately

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
() => HTMLElement
```

获取 ECharts 示例容器的 dom 节点。

## resize(Function)

 在容器大小发生改变时需要手动调用。

## dispatchAction(Function)

## on
```js
(eventName: string, handler: Function, context?: Object)
```

在实例上添加事件处理函数。

ECharts 中的事件有两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 [dispatchAction](~EChartsInstance.dispatchAction) 后触发的事件。每个 action 都会有对应的事件，具体见 [action 和 events 的文档](~events)

## off(Function)
```js
(eventName: string, handler?: Function)
```

## showLoading(Function)
```js
(name?: string, opts: Object)
```
显示加载动画效果。可以在加载数据前手动调用改接口显示加载动画，在动画加载完成后调用 [hideLoading](~EChartsInstance.hideLoading) 隐藏加载动画。

**参数：**

## hideLoading(Function)

隐藏动画加载效果。

## getDataURL(Function)
```js
(opts: {
    type: string,
    pixelRatio: number,
    backgroundColor: string
}) => string
```

## getConnectedDataURL
```js
(opts: {
    type: string,
    pixelRatio: number,
    backgroundColor: string
}) => string
```