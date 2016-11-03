{{ target: echarts-instance }}

# echartsInstance(Object)

通过 [echarts.init](~echarts.init) 创建的实例。

## group(string|number)
图表的分组，用于[联动](~echarts.connect)

## setOption(Function)
```js
(option: Object, notMerge: boolean, lazyUpdate: boolean)
```

设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过`setOption`完成，ECharts 会合并新的参数和数据，然后刷新图表。如果开启[动画](~option.html#option.animation)的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化。

**如下示例：**

~[500x400](${galleryViewPath}dynamic-data&reset=1&edit=1)

**注：** ECharts 2.x 中的通过 `addData` , `setSeries` 方法设置配置项的方式将不再支持，在 ECharts 3 中统一使用`setOption`，可以参考上面示例。

**参数：**
+ `option`

    图表的配置项和数据，具体见[配置项手册](option.html)。

+ `notMerge`

    可选，是否不跟之前设置的`option`进行合并，默认为`false`，即合并。

+ `lazyUpdate`

    可选，在设置完`option`后是否不立即更新图表，默认为`false`，即立即更新。

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

## getOption(Function)
```js
() => Object
```

获取当前实例中维护的`option`对象，返回的`option`对象中包含了用户多次`setOption`合并得到的配置项和数据，也记录了用户交互的状态，例如图例的开关，数据区域缩放选择的范围等等。所以从这份 option 可以恢复或者得到一个新的一模一样的实例。

**注意：**返回的 option 每个组件的属性值都统一是一个数组，不管`setOption`传进来的时候是单个组件的对象还是多个组件的数组。如下形式：
```js
{
    title: [{...}],
    legend: [{...}],
    grid: [{...}]
}
```

另外**不推荐**下面这种写法：
```js
var option = myChart.getOption();
option.visualMap[0].inRange.color = ...;
myChart.setOption(option);
```

因为 `getOption`获取的是已经合并过默认值了的，所以在修改了某些配置项后会导致原本是根据这些配置项值去设置的默认值失效。

因此我们更**推荐**通过`setOption`去修改部分配置。
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
    width?: number|string
    height? number|string
}) => ECharts
```

改变图表尺寸，在容器大小发生改变时需要手动调用。

**参数**
+ `opts`

    opts 可缺省。有下面几个可选项：

    + `width`

        可显式指定实例宽度，单位为像素。如果传入值为 `null`/`undefined`/`'auto'`，则表示自动取 `dom`（实例容器）的宽度。

    + `height`

        可显式指定实例高度，单位为像素。如果传入值为 `null`/`undefined`/`'auto'`，则表示自动取 `dom`（实例容器）的高度。

**Tip:** 有时候图表会放在多个标签页里，那些初始隐藏的标签在初始化图表的时候应为获取不到容器的实际高宽，可能会绘制失败，因此在切换到该标签页时需要手动调用 `resize` 方法获取正确的高宽并且刷新画布，或者在 `opts` 中显示指定图表高宽。

## dispatchAction(Function)
```js
(payload: Object)
```
触发图表行为，例如图例开关`legendToggleSelect`, 数据区域缩放`dataZoom`，显示提示框`showTip`等等，更多见 [action](~action) 和 [events](~events) 的文档。

`payload` 参数可以通过`batch`属性同时触发多个行为。

**注：**在 ECharts 2.x 是通过 `myChart.component.tooltip.showTip` 这种形式调用相应的接口触发图表行为，入口很深，而且涉及到内部组件的组织。因此在 ECharts 3 里统一改为 `dispatchAction` 的形式。

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

ECharts 中的事件有两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 [dispatchAction](~echartsInstance.dispatchAction) 后触发的事件。每个 action 都会有对应的事件，具体见 [action](~action) 和 [events](~events) 的文档。

如果事件是外部 [dispatchAction](~echartsInstance.dispatchAction) 后触发，并且 action 中有 batch 属性触发批量的行为，则相应的响应事件参数里也会把属性都放在 batch 属性中。

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


## convertToPixel(Function)
```js
(
    // finder 用于指示『使用哪个坐标系进行转换』。
    // 通常地，可以使用 index 或者 id 或者 name 来定位。
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
        gridId?: string
        gridName?: string
    },
    // 要被转换的值。
    value: Array|string
    // 转换的结果为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。
) => Array|string
```

转换坐标系上的点到像素坐标值。


例：

在地理坐标系（[geo](option.html#geo)）上，把某个点的经纬度坐标转换成为像素坐标：
```js
// [128.3324, 89.5344] 表示 [经度，纬度]。
// 使用第一个 geo 坐标系进行转换：
chart.convertToPixel('geo', [128.3324, 89.5344]); // 参数 'geo' 等同于 {geoIndex: 0}
// 使用第二个 geo 坐标系进行转换：
chart.convertToPixel({geoIndex: 1}, [128.3324, 89.5344]);
// 使用 id 为 'bb' 的 geo 坐标系进行转换：
chart.convertToPixel({geoId: 'bb'}, [128.3324, 89.5344]);
```

在直角坐标系（cartesian，[grid](option.html#grid)）上，把某个点的坐标转换成为像素坐标：
```js
// [300, 900] 表示该点 x 轴上对应刻度值 300，y 轴上对应刻度值 900。
// 注意，一个 grid 可能含有多个 xAxis 和多个 yAxis，任何一对 xAxis-yAxis 形成一个 cartesian。
// 使用第三个 xAxis 和 id 为 'y1' 的 yAxis 形成的 cartesian 进行转换：
chart.convertToPixel({xAxisIndex: 2, yAxisId: 'y1'}, [300, 900]);
// 使用 id 为 'g1' 的 grid 的第一个 cartesian 进行转换：
chart.convertToPixel({gridId: 'g1'}, [300, 900]);
```

把某个坐标轴的点转换成像素坐标：
```js
// id 为 'x0' 的 xAxis 的刻度 3000 位置所对应的横向像素位置：
chart.convertToPixel({xAxisId: 'x0'}, 3000); // 返回一个 number。
// 第二个 yAxis 的刻度 600 位置所对应的纵向像素位置：
chart.convertToPixel({yAxisIndex: 1}, 600); // 返回一个 number。
```

把关系图（[graph](option.html#series-graph)）的点转换成像素坐标：
```js
// 因为每个 graph series 自己持有一个坐标系，所以我们直接在 finder 中指定 series：
chart.convertToPixel({seriesIndex: 0}, [2000, 3500]);
chart.convertToPixel({seriesId: 'k2'}, [100, 500]);
```

在某个系列所在的坐标系（无论是 cartesian、geo、graph 等）中，转换某点成像素坐标：
```js
// 使用第一个系列对应的坐标系：
chart.convertToPixel({seriesIndex: 0}, [128.3324, 89.5344]);
// 使用 id 为 'k2' 的系列所对应的坐标系：
chart.convertToPixel({seriesId: 'k2'}, [128.3324, 89.5344]);
```

## convertFromPixel(Function)
```js
(
    // finder 用于指示『使用哪个坐标系进行转换』。
    // 通常地，可以使用 index 或者 id 或者 name 来定位。
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
        gridId?: string
        gridName?: string
    },
    // 要被转换的值，为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。
    value: Array|string
    // 转换的结果，为逻辑坐标值。
) => Array|string
```

转换像素坐标值到逻辑坐标系上的点。是 [convertToPixel](~echartsInstance.convertToPixel) 的逆运算。
具体实例可参考 [convertToPixel](~echartsInstance.convertToPixel)。


## containPixel(Function)
```js
(
    // finder 用于指示『在哪个坐标系或者系列上判断』。
    // 通常地，可以使用 index 或者 id 或者 name 来定位。
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
        gridId?: string
        gridName?: string
    },
    // 要被判断的点，为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。
    value: Array
) => boolean
```

判断给定的点是否在指定的坐标系或者系列上。

目前支持在这些坐标系和系列上进行判断：[grid](option.html#grid), [polar](option.html#polar), [geo](option.html#geo), [series-map](option.html#series-map), [series-graph](option.html#series-graph), [series-pie](option.html#series-pie)。

例：

```js
// 判断 [23, 44] 点是否在 geoIndex 为 0 的 geo 坐标系上。
chart.containPixel('geo', [23, 44]); // 'geo' 等同于 {geoIndex: 0}
// 判断 [23, 44] 点是否在 gridId 为 'z' 的 grid 上。
chart.containPixel({gridId: 'z'}, [23, 44]);
// 判断 [23, 44] 点是否在 index 为 1，4，5 的系列上。
chart.containPixel({seriesIndex: [1, 4, 5]}, [23, 44]);
// 判断 [23, 44] 点是否在 index 为 1，4，5 的系列或者 gridName 为 'a' 的 grid 上。
chart.containPixel({seriesIndex: [1, 4, 5], gridName: 'a'}, [23, 44]);
```

## showLoading(Function)
```js
(type?: string, opts?: Object)
```
显示加载动画效果。可以在加载数据前手动调用改接口显示加载动画，在数据加载完成后调用 [hideLoading](~echartsInstance.hideLoading) 隐藏加载动画。

**参数：**
+ `type`

    可选，加载动画类型，目前只有一种`'default'`

+ `opts`

    可选，加载动画配置项，跟`type`有关，下面是默认配置项：

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

隐藏动画加载效果。

## getDataURL(Function)
```js
(opts: {
    // 导出的格式，可选 png, jpeg
    type?: string,
    // 导出的图片分辨率比例，默认为 1。
    pixelRatio?: number,
    // 导出的图片背景色，默认使用 option 里的 backgroundColor
    backgroundColor?: string,
    // 忽略组件的列表，例如要忽略 toolbox 就是 ['toolbox']
    excludeComponents?: Array.<string>
}) => string
```

导出图表图片，返回一个 base64 的 URL，可以设置为`Image`的`src`。

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
    type?: string,
    // 导出的图片分辨率比例，默认为 1。
    pixelRatio?: number,
    // 导出的图片背景色，默认使用 option 里的 backgroundColor
    backgroundColor?: string,
    // 忽略组件的列表，例如要忽略 toolbox 就是 ['toolbox']
    excludeComponents?: Array.<string>
}) => string
```

导出联动的图表图片，返回一个 base64 的 url，可以设置为`Image`的`src`。导出图片中每个图表的相对位置跟容器的相对位置有关。

## clear

清空当前实例，会移除实例中所有的组件和图表。清空后调用 [getOption](~echartsInstance.getOption) 方法返回一个`{}`空对象。

## isDisposed
```js
() => boolean
```
当前实例是否已经被释放。

## dispose

销毁实例，销毁后实例无法再被使用。
