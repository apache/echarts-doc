{{ target: echarts-instance }}

# echartsInstance(Object)

通过 [echarts.init](~echarts.init) 创建的实例。

## group(string|number)
图表的分组，用于[联动](~echarts.connect)

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

设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过 `setOption` 完成，ECharts 会合并新的参数和数据，然后刷新图表。如果开启[动画](option.html#option.animation)的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化。

**如下示例：**

~[500x400](${galleryViewPath}dynamic-data&reset=1&edit=1)


**参数：**

调用方式举例：
```ts
chart.setOption(option, notMerge, lazyUpdate);
```
或者
```ts
chart.setOption(option, {
    notMerge: ...,
    lazyUpdate: ...,
    silent: ...
});
```
或者
```ts
chart.setOption(option, {
    replaceMerge: ['xAxis', 'yAxis', 'series']
});
```


+ `option`: `ECOption`

    图表的配置项和数据，具体见[配置项手册](option.html)。

+ opts

    + `notMerge` 可选。是否不跟之前设置的 `option` 进行合并。默认为 `false`。即表示合并。合并的规则，详见 **组件合并模式**。如果为 `true`，表示所有组件都会被删除，然后根据新 `option` 创建所有新组件。
    + `replaceMerge` 可选。用户可以在这里指定一个或多个组件，如：`xAxis`, `series`，这些指定的组件会进行 "replaceMerge"。如果用户想删除部分组件，也可使用 "replaceMerge"。详见 **组件合并模式**。
    + `lazyUpdate` 可选。在设置完 `option` 后是否不立即更新图表，默认为 `false`，即同步立即更新。如果为 `true`，则会在下一个 animation frame 中，才更新图表。
    + `silent` 可选。阻止调用 `setOption` 时抛出事件，默认为 `false`，即抛出事件。

<h4>组件合并模式</h4>

对于一种类型的组件（如：`xAxis`, `series`）：

+ 如果设置`opts.notMerge`为`true`，那么旧的组件会被完全移除，新的组件会根据`option`创建。
+ 如果设置`opts.notMerge`为`false`，或者没有设置 `opts.notMerge`：
    + 如果在`opts.replaceMerge`里指定组件类型，这类组件会进行`替换合并`。
    + 否则，会进行`普通合并`。

什么是`普通合并`和`替换合并`？

<h5>普通合并</h5>

对于一种类型的组件（如：`xAxis`, `series`），新来的 `option` 中的每个“组件描述”（如：`{type: 'xAxis', id: 'xx', name: 'kk', ...}`）会被尽量合并到已存在的组件中。剩余的情况，会在组件列表尾部创建新的组件。整体规则细节如下：

+ 先依次对 `option` 中每个有声明 `id` 或者 `name` 的“组件描述”，寻找能匹配其 `id` 或者 `name` 的已有的组件，找到的话则合并。
+ 再依次对 `option` 中剩余的“组件描述”，寻找还未执行过前一条的已有组件，找到的话则合并。
+ 其他 `option` 中剩余的“组件描述”，用于在组件列表尾部创建新组件。

特点：

+ 永远不会删除已存在的组件。也就是说，只支持增加，或者更新组件。
+ 组件的索引（componentIndex）永远不会改变。
+ 如果 `id` 和 `name` 没有在 `option` 中被指定（这是经常出现的情况），组件会按照它在 `option` 中的顺序一一合并到已有组件中。这种设定比较符合直觉。

例子：
```ts
// 已有组件：
{
    xAxis: [
        { id: 'm', interval: 5 },
        { id: 'n', name: 'nnn', interval: 6 }
        { id: 'q', interval: 7 }
    ]
}
// 新来的 option ：
chart.setOption({
    xAxis: [
        // id 没有指定。会寻找到第一个没有进行过合并的已有组件，进行合并。
        // 即合并到 `id: 'q'`。
        { interval: 77 },
        // id 没有指定。最终会创建新组件。
        { interval: 88 },
        // id 没有指定，但是 name 指定了。会被合并到已有的 `name: 'nnn'` 组件。
        { name: 'nnn', interval: 66 },
        // id 指定了，会被合并到已有的 `id: 'm'` 组件。
        { id: 'm', interval: 55 }
    ]
});
// 结果组件：
{
    xAxis: [
        { id: 'm', interval: 55 },
        { id: 'n', name: 'nnn', interval: 66 },
        { id: 'q', interval: 77 },
        { interval: 88 }
    ]
}
```

<h5>替换合并</h5>

对于一种类型的组件（如：`xAxis`, `series`），只有 `option` 中指定了 `id` 并且已有组件中有此 `id` 时，已有组件会和 `option` 相应组件描述进行合并。否则，已有组件都会删除，新组件会被根据 `option` 创建。细节规则如下：

+ 先依次对 `option` 中每个有声明 `id` 的“组件描述”，寻找能匹配其 `id` 或者 `name` 的已有的组件，找到的话则合并。
+ 删除其他没匹配到的已有组件。
+ 依次对 `option` 中剩余的“组件描述”，创建新组件，填入刚因删除而空出来的位置上，或者增加到末尾。

特点：

+ 与 `普通合并` 相比，支持了组件删除。
+ 已有组件的索引永远不会变。这是为了保证，`option` 或者 API 中的 index 引用（例如：`xAxisIndex: 2`）仍能正常一致得使用。
+ 整个处理过程结束后，可能存在一些“洞”，也就是说，在组件列表中的某些 index 上，并没有组件存在（被删除了）。但是这是可以被开发者预期和控制的。

例子：
```ts
// 已有组件：
{
    xAxis: [
        { id: 'm', interval: 5, min: 1000 },
        { id: 'n', name: 'nnn', interval: 6, min: 1000 }
        { id: 'q', interval: 7, min: 1000 }
    ]
}
// 新来的 option :
chart.setOption({
    xAxis: [
        { interval: 111 },
        // id 已经指定了。因此会被合并进已有的组件 `id: 'q'`。
        { id: 'q', interval: 77 },
        // id 已经指定了。但是已有组件没有此 id 。
        { id: 't', interval: 222 },
        { interval: 333 }
    ]
}, { replaceMerge: 'xAxis' });
// 结果组件：
{
    xAxis: [
        // 原来的 id 为 'm' 的组件，被移除。
        // 替换为新的组件。新组件中，并没有原来的 `min: 1000` 了。
        { interval: 111 },
        // 原来的 id 为 'n' 的组件，被移除。
        // 替换为新的组件。新组件中，并没有原来的 `min: 1000` 了。
        { id: 't', interval: 222 },
        // 原来的组件没有被移除，而是和 option 中的组件描述进行了合并。
        // 所以 `min: 1000` 被保留了。
        { id: 'q', interval: 77, min: 1000 },
        // 新添加的组件。
        { interval: 333 }
    ]
}
```

<h5>删除组件</h5>

有两种方法能删除组件：
+ 删除所有：使用 `notMerge: true`，则所有组件都被删除。
+ 删除部分：使用 `replaceMerge: [...]`，被指定的组件类型，会根据 replaceMerge 的规则：如果 id 匹配就合并（ merge ），否则旧组件被删除，新组件被创建。“部分删除” 有助于，在删除该删除的组件时，保留其他组件的状态（如高亮、动画、选中状态）。



## getWidth(Function)
```ts
() => number
```

获取 ECharts 实例容器的宽度。

## getHeight(Function)
```ts
() => number
```

获取 ECharts 实例容器的高度。

## getDom(Function)
```ts
() => HTMLCanvasElement|HTMLDivElement
```

获取 ECharts 实例容器的 dom 节点。

## getOption(Function)
```ts
() => Object
```

获取当前实例中维护的 `option` 对象，返回的 `option` 对象中包含了用户多次 `setOption` 合并得到的配置项和数据，也记录了用户交互的状态，例如图例的开关，数据区域缩放选择的范围等等。所以从这份 `option` 可以恢复或者得到一个新的一模一样的实例。

**注意：**返回的 option 每个组件的属性值都统一是一个数组，不管 `setOption` 传进来的时候是单个组件的对象还是多个组件的数组。如下形式：
```ts
{
    title: [{...}],
    legend: [{...}],
    grid: [{...}]
}
```

另外**不推荐**下面这种写法：
```ts
var option = myChart.getOption();
option.visualMap[0].inRange.color = ...;
myChart.setOption(option);
```

因为 `getOption` 获取的是已经合并过默认值了的，所以在修改了某些配置项后会导致原本是根据这些配置项值去设置的默认值失效。

因此我们更**推荐**通过`setOption`去修改部分配置。
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

改变图表尺寸，在容器大小发生改变时需要手动调用。

**参数解释**
+ `opts`

    opts 可缺省。有下面几个属性：

    + `width` 可显式指定实例宽度，单位为像素。如果传入值为 `null`/`undefined`/`'auto'`，则表示自动取 `dom`（实例容器）的宽度。
    + `height` 可显式指定实例高度，单位为像素。如果传入值为 `null`/`undefined`/`'auto'`，则表示自动取 `dom`（实例容器）的高度。
    + `silent` 是否禁止抛出事件。默认为 `false`。
    + `animation` resize 的时候是否应用过渡动画，包含时长`duration`和缓动`easing`两个配置，默认`duration`为 0，即不应用过渡动画。

**Tip:** 有时候图表会放在多个标签页里，那些初始隐藏的标签在初始化图表的时候因为获取不到容器的实际高宽，可能会绘制失败，因此在切换到该标签页时需要手动调用 `resize` 方法获取正确的高宽并且刷新画布，或者在 `opts` 中显示指定图表高宽。

## renderToSVGString(Function)

> 从 `5.3.0` 开始支持

```ts
(opts?: {
    useViewBox?: boolean
}) => string
```

渲染得到 SVG 字符串。在设置`renderer: 'svg'`使用 SVG 渲染模式有效。

如果在`echarts.init`的时候通过`ssr`参数开启了服务端渲染模式


**参数解释**

+ `opts`

    opts 可缺省。有下面几个属性：

    + `useViewBox` 是否在生成的 SVG 字符串中带入 [viewBox](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/viewBox)


## dispatchAction(Function)
```ts
(payload: Object)
```
触发图表行为，例如图例开关`legendToggleSelect`, 数据区域缩放`dataZoom`，显示提示框`showTip`等等，更多见 [action](~action) 和 [events](~events) 的文档。

`payload` 参数可以通过`batch`属性同时触发多个行为。

**注：**在 ECharts 2.x 是通过 `myChart.component.tooltip.showTip` 这种形式调用相应的接口触发图表行为，入口很深，而且涉及到内部组件的组织。因此在 ECharts 3 里统一改为 `dispatchAction` 的形式。

**示例**
```ts
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

绑定事件处理函数。

ECharts 中的事件有两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 [dispatchAction](~echartsInstance.dispatchAction) 后触发的事件。每个 action 都会有对应的事件，具体见 [action](~action) 和 [events](~events) 的文档。

如果事件是外部 [dispatchAction](~echartsInstance.dispatchAction) 后触发，并且 action 中有 batch 属性触发批量的行为，则相应的响应事件参数里也会把属性都放在 batch 属性中。

**参数：**
+ `eventName`

    事件名称，全小写，例如`'click'`，`'mousemove'`, `'legendselected'`

    **注：** ECharts 2.x 中会使用 `config` 对象中的 `CLICK` 等属性作为事件名称。在 ECharts 3 中统一使用跟 dom 事件一样的全小写字符串作为事件名。

+ `query`

    可选的过滤条件，能够只在指定的组件或者元素上进行响应。可为 `string` 或者 `Object`。

    如果为 `string` 表示组件类型。格式可以是 'mainType' 或者 'mainType.subType'。例如：
    ```ts
    chart.on('click', 'series', function () {...});
    chart.on('click', 'series.line', function () {...});
    chart.on('click', 'xAxis.category', function () {...});
    ```

    如果为 `Object`，可以包含以下一个或多个属性，每个属性都是可选的：
    ```ts
    {
        <mainType>Index: number // 组件 index
        <mainType>Name: string // 组件 name
        <mainType>Id: string // 组件 id
        dataIndex: number // 数据项 index
        name: string // 数据项 name
        dataType: string // 数据项 type，如关系图中的 'node', 'edge'
        element: string // 自定义系列中的 el 的 name
    }
    ```

    例如：
    ```ts
    chart.setOption({
        // ...
        series: [{
            name: 'uuu'
            // ...
        }]
    });
    chart.on('mouseover', {seriesName: 'uuu'}, function () {
        // series name 为 'uuu' 的系列中的图形元素被 'mouseover' 时，此方法被回调。
    });
    ```

    例如：
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
        // series index 1 的系列中的 name 为 'xx' 的元素被 'mouseover' 时，此方法被回调。
    });
    ```

    例如：
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
        // 关系图的节点被点击时此方法被回调。
    });
    chart.on('click', {dataType: 'edge'}, function () {
        // 关系图的边被点击时此方法被回调。
    });
    ```

    例如：
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
    chart.on('mouseup', {element: 'my_el'}, function () {
        // name 为 'my_el' 的元素被 'mouseup' 时，此方法被回调。
    });
    ```

+ `handler`

    事件处理函数。格式为:

    ```ts
    (event: Object)
    ```

+ `context`

    可选。回调函数内部的`context`，即`this`的指向。


## off(Function)
```ts
(eventName: string, handler?: Function)
```

解绑事件处理函数。

**参数：**
+ `eventName`

    事件名称。

+ `handler`

    可选，可以传入需要解绑的处理函数，不传的话解绑所有该类型的事件函数。


## convertToPixel(Function)
```ts
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
        gridId?: string,
        gridName?: string
    },
    // 要被转换的值。
    value: Array|number
    // 转换的结果为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。
) => Array|number
```

转换坐标系上的点到像素坐标值。


例：

在地理坐标系（[geo](option.html#geo)）上，把某个点的经纬度坐标转换成为像素坐标：
```ts
// [128.3324, 89.5344] 表示 [经度，纬度]。
// 使用第一个 geo 坐标系进行转换：
chart.convertToPixel('geo', [128.3324, 89.5344]); // 参数 'geo' 等同于 {geoIndex: 0}
// 使用第二个 geo 坐标系进行转换：
chart.convertToPixel({geoIndex: 1}, [128.3324, 89.5344]);
// 使用 id 为 'bb' 的 geo 坐标系进行转换：
chart.convertToPixel({geoId: 'bb'}, [128.3324, 89.5344]);
```

在直角坐标系（cartesian，[grid](option.html#grid)）上，把某个点的坐标转换成为像素坐标：
```ts
// [300, 900] 表示该点 x 轴上对应刻度值 300，y 轴上对应刻度值 900。
// 注意，一个 grid 可能含有多个 xAxis 和多个 yAxis，任何一对 xAxis-yAxis 形成一个 cartesian。
// 使用第三个 xAxis 和 id 为 'y1' 的 yAxis 形成的 cartesian 进行转换：
chart.convertToPixel({xAxisIndex: 2, yAxisId: 'y1'}, [300, 900]);
// 使用 id 为 'g1' 的 grid 的第一个 cartesian 进行转换：
chart.convertToPixel({gridId: 'g1'}, [300, 900]);
```

把某个坐标轴的点转换成像素坐标：
```ts
// id 为 'x0' 的 xAxis 的刻度 3000 位置所对应的横向像素位置：
chart.convertToPixel({xAxisId: 'x0'}, 3000); // 返回一个 number。
// 第二个 yAxis 的刻度 600 位置所对应的纵向像素位置：
chart.convertToPixel({yAxisIndex: 1}, 600); // 返回一个 number。
```

把关系图（[graph](option.html#series-graph)）的点转换成像素坐标：
```ts
// 因为每个 graph series 自己持有一个坐标系，所以我们直接在 finder 中指定 series：
chart.convertToPixel({seriesIndex: 0}, [2000, 3500]);
chart.convertToPixel({seriesId: 'k2'}, [100, 500]);
```

在某个系列所在的坐标系（无论是 cartesian、geo、graph 等）中，转换某点成像素坐标：
```ts
// 使用第一个系列对应的坐标系：
chart.convertToPixel({seriesIndex: 0}, [128.3324, 89.5344]);
// 使用 id 为 'k2' 的系列所对应的坐标系：
chart.convertToPixel({seriesId: 'k2'}, [128.3324, 89.5344]);
```

## convertFromPixel(Function)
```ts
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
        gridId?: string,
        gridName?: string
    },
    // 要被转换的值，为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。
    value: Array|number
    // 转换的结果，为逻辑坐标值。
) => Array|number
```

转换像素坐标值到逻辑坐标系上的点。是 [convertToPixel](~echartsInstance.convertToPixel) 的逆运算。
具体实例可参考 [convertToPixel](~echartsInstance.convertToPixel)。


## containPixel(Function)
```ts
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
        gridId?: string,
        gridName?: string
    },
    // 要被判断的点，为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。
    value: Array
) => boolean
```

判断给定的点是否在指定的坐标系或者系列上。

目前支持在这些坐标系和系列上进行判断：[grid](option.html#grid), [polar](option.html#polar), [geo](option.html#geo), [series-map](option.html#series-map), [series-graph](option.html#series-graph), [series-pie](option.html#series-pie)。

例：

```ts
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
```ts
(type?: string, opts?: Object)
```
显示加载动画效果。可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 [hideLoading](~echartsInstance.hideLoading) 隐藏加载动画。

**参数：**
+ `type`

    可选，加载动画类型，目前只有一种`'default'`

+ `opts`

    可选，加载动画配置项，跟`type`有关，下面是默认配置项：

    ```ts
default: {
    text: 'loading',
    color: '#c23531',
    textColor: '#000',
    maskColor: 'rgba(255, 255, 255, 0.8)',
    zlevel: 0,

    // 字体大小。从 `v4.8.0` 开始支持。
    fontSize: 12,
    // 是否显示旋转动画（spinner）。从 `v4.8.0` 开始支持。
    showSpinner: true,
    // 旋转动画（spinner）的半径。从 `v4.8.0` 开始支持。
    spinnerRadius: 10,
    // 旋转动画（spinner）的线宽。从 `v4.8.0` 开始支持。
    lineWidth: 5,
    // 字体粗细。从 `v5.0.1` 开始支持。
    fontWeight: 'normal',
    // 字体风格。从 `v5.0.1` 开始支持。
    fontStyle: 'normal',
    // 字体系列。从 `v5.0.1` 开始支持。
    fontFamily: 'sans-serif'
}
    ```

## hideLoading(Function)

隐藏动画加载效果。

## getDataURL(Function)
```ts
(opts: {
    // 导出的格式，可选 png, jpg, svg
    // 注意：png, jpg 只有在 canvas 渲染器的时候可使用，svg 只有在使用 svg 渲染器的时候可用
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


## appendData
```ts
(opts: {
    // 要增加数据的系列序号。
    seriesIndex?: number,
    // 增加的数据。
    data?: Array|TypedArray
}) => string
```

此接口用于，在大数据量（百万以上）的渲染场景，分片加载数据和增量渲染。在大数据量的场景下（例如地理数的打点），就算数据使用二进制格式，也会有几十或上百兆，在互联网环境下，往往需要分片加载。`appendData` 接口提供了分片加载后增量渲染的能力，渲染新加入的数据块时不会清除原有已经渲染的部分。

注意：

+ 现在不支持 [系列（series）](option.html#series) 使用 [dataset](option.html#dataset) 同时使用 `appendData`，只支持系列使用自己的 [series.data](option.html#series.data) 时使用 `appendData`。
+ 目前并非所有的图表都支持分片加载时的增量渲染。目前支持的图有：ECharts 基础版本的 [散点图（scatter）](option.html#series-scatter) 和 [线图（lines）](option-gl.html#series-linesGL)。ECharts GL 的 [散点图（scatterGL）](option-gl.html#series-scatterGL)、[线图（linesGL）](option-gl.html#series-lines3D) 和 [可视化建筑群（polygons3D）](option-gl.html#series-polygons3D)。


## clear

清空当前实例，会移除实例中所有的组件和图表。

## isDisposed
```ts
() => boolean
```
当前实例是否已经被释放。

## dispose

销毁实例，销毁后实例无法再被使用。
