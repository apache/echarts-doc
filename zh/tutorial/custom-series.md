{{target: custom-series}}

# 自定义系列

[自定义系列（custom series）](http://echarts.baidu.com/option.html#series-custom)，是一种系列的类型。它把绘制图形元素这一步留给开发者去做，从而开发者能在坐标系中自由绘制出自己需要的图表。

echarts 为什么会要支持 `自定义系列` 呢？echarts 内置支持的图表类型是最常见的图表类型，但是图表类型是难于穷举的，有很多小众的需求 echarts 并不能内置的支持。那么就需要提供一种方式来让开发者自己扩展。另一方面，所提供的扩展方式要尽可能得简单，例如图形元素创建和释放、过渡动画、tooltip、[数据区域缩放（dataZoom）](http://echarts.baidu.com/option.html#dataZoom)、[视觉映射（visualMap）](http://echarts.baidu.com/option.html#visualMap)等功能，尽量在 echarts 中内置得处理，使开发者不必纠结于这些细节。综上考虑形成了 [自定义系列（custom series）](http://echarts.baidu.com/option.html#series-custom)。

**例如，下面的例子使用 custom series 扩展出了 x-range 图：**
~[800x500](${galleryViewPath}custom-profile&reset=1&edit=1)

**更多的例子参见：[custom examples](http://echarts.baidu.com/examples.html#chart-type-custom)**

下面来介绍开发者怎么使用 [自定义系列（custom series）](http://echarts.baidu.com/option.html#series-custom)。


<br>
<h2>（一）renderItem 方法</h2>

开发者自定义的图形元素渲染逻辑，是通过书写 `renderItem` 函数实现的，例如：

```js
var option = {
    ...,
    series: [{
        type: 'custom',
        renderItem: function (params, api) {
            // ...
        },
        data: data
    }]
}
```

在渲染阶段，对于 [series.data](http://echarts.baidu.com/option.html#series-custom.data) 中的每个数据项（为方便描述，这里称为 `dataItem`)，会调用此 [renderItem](http://echarts.baidu.com/option.html#series-custom.renderItem) 函数。这个 `renderItem` 函数的职责，就是返回一个（或者一组）`图形元素定义`，`图形元素定义` 中包括图形元素的类型、位置、尺寸、样式等。echarts 会根据这些 `图形元素定义` 来渲染出图形元素。如下的示意：


```js
var option = {
    ...,
    series: [{
        type: 'custom',
        renderItem: function (params, api) {
            // 对于 data 中的每个 dataItem，都会调用这个 renderItem 函数。
            // （但是注意，并不一定是按照 data 的顺序调用）

            // 这里进行一些处理，例如，坐标转换。
            // 这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
            var categoryIndex = api.value(0);
            // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
            var startPoint = api.coord([api.value(1), categoryIndex]);
            var endPoint = api.coord([api.value(2), categoryIndex]);
            // 这里使用 api.size(...) 获得 Y 轴上数值范围为 1 的一段所对应的像素长度。
            var height = api.size([0, 1])[1] * 0.6;

            // shape 属性描述了这个矩形的像素位置和大小。
            // 其中特殊得用到了 echarts.graphic.clipRectByRect，意思是，
            // 如果矩形超出了当前坐标系的包围盒，则剪裁这个矩形。
            // 如果矩形完全被剪掉，会返回 undefined.
            var rectShape = echarts.graphic.clipRectByRect({
                // 矩形的位置和大小。
                x: startPoint[0],
                y: startPoint[1] - height / 2,
                width: endPoint[0] - startPoint[0],
                height: height
            }, {
                // 当前坐标系的包围盒。
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            });

            // 这里返回为这个 dataItem 构建的图形元素定义。
            return rectShape && {
                // 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
                type: 'rect',
                shape: rectShape,
                // 用 api.style(...) 得到默认的样式设置。这个样式设置包含了
                // option 中 itemStyle 的配置和视觉映射得到的颜色。
                style: api.style()
            };
        },
        data: [
            [12, 44, 55, 60], // 这是第一个 dataItem
            [53, 31, 21, 56], // 这是第二个 dataItem
            [71, 33, 10, 20], // 这是第三个 dataItem
            ...
        ]
    }]
}
```


[renderItem](http://echarts.baidu.com/option.html#series-custom.renderItem) 函数提供了两个参数：
+ [params](http://echarts.baidu.com/option.html#series-custom.renderItem.arguments.params)：包含了当前数据信息（如 `seriesIndex`、`dataIndex` 等等）和坐标系的信息（如坐标系包围盒的位置和尺寸）。
+ [api](http://echarts.baidu.com/option.html#series-custom.renderItem.arguments.api)：是一些开发者可调用的方法集合（如 `api.value()`、`api.coord()`）。

[renderItem](http://echarts.baidu.com/option.html#series-custom.renderItem) 函数须返回根据此 `dataItem` 绘制出的图形元素的定义信息，参见 [renderItem.return](http://echarts.baidu.com/option.html#series-custom.renderItem.return)。

一般来说，[renderItem](http://echarts.baidu.com/option.html#series-custom.renderItem) 函数的主要逻辑，是将 `dataItem` 里的值映射到坐标系上的图形元素。这一般需要用到 [renderItem.arguments.api](http://echarts.baidu.com/option.html#series-custom.renderItem.arguments.api) 中的两个函数：
+ [api.value(...)](http://echarts.baidu.com/option.html#series-custom.renderItem.arguments.api.value)，意思是取出 `dataItem` 中的数值。例如 `api.value(0)` 表示取出当前 `dataItem` 中第一个维度的数值。
+ [api.coord(...)](http://echarts.baidu.com/option.html#series-custom.renderItem.arguments.api.coord)，意思是进行坐标转换计算。例如 `var point = api.coord([api.value(0), api.value(1)])` 表示 `dataItem` 中的数值转换成坐标系上的点。

有时候还需要用到 [api.size(...)](http://echarts.baidu.com/option.html#series-custom.renderItem.arguments.api.size) 函数，表示得到坐标系上一段数值范围对应的长度。

返回值中样式的设置可以使用 [api.style(...)](http://echarts.baidu.com/option.html#series-custom.renderItem.arguments.api.style) 函数，他能得到 [series.itemStyle](http://echarts.baidu.com/option.html#series-custom.itemStyle) 中定义的样式信息，以及视觉映射的样式信息。也可以用这种方式覆盖这些样式信息：`api.style({fill: 'green', stroke: 'yellow'})`。

书写完 `renderItem` 方法后，自定义系列的 90% 工作就做完了。剩下的是一些精化工作。




<br>
<h2>（二）使坐标轴的范围自适应数据范围</h2>

在 [直角坐标系（grid）](http://echarts.baidu.com/option.html#grid)、[极坐标系（polar）](http://echarts.baidu.com/option.html#polar) 中都有坐标轴。坐标轴的刻度范围需要自适应当前显示出的数据的范围，否则绘制出的图形会超出去。所以，例如，在 [直角坐标系（grid）](http://echarts.baidu.com/option.html#grid) 中，使用自定义系列的开发者，需要设定，`data` 中的哪些维度会对应到 `x` 轴上，哪些维度会对应到 `y` 轴上。这件事通过 [encode](http://echarts.baidu.com/option.html#series-custom.encode) 来设定。例如：

```js
option = {
    series: [{
        type: 'custom',
        renderItem: function () {
            ...
        },
        encode: {
            // data 中『维度1』和『维度2』对应到 X 轴
            x: [1, 2],
            // data 中『维度0』对应到 Y 轴
            y: 0
        },
        data: [
            // 维度0  维度1  维度2  维度3
            [   12,   44,   55,   60   ], // 这是第一个 dataItem
            [   53,   31,   21,   56   ], // 这是第二个 dataItem
            [   71,   33,   10,   20   ], // 这是第三个 dataItem
            ...
        ]
    }]
};
```



<br>
<h2>（三）设定 tooltip</h2>

当然，使用 [tooltip.formatter](http://echarts.baidu.com/option.html#tooltip.formatter) 可以任意定制 tooltip 中的内容。但是还有更简单的方法，通过[encode](http://echarts.baidu.com/option.html#series-custom.encode) 和 [dimensions](http://echarts.baidu.com/option.html#series-custom.dimensions) 来设定：

```js
option = {
    series: [{
        type: 'custom',
        renderItem: function () {
            ...
        },
        encode: {
            x: [1, 2],
            y: 0,
            // 表示『维度2』和『维度3』要显示到 tooltip 中。
            tooltip: [2, 3]
        },
        // 表示给『维度2』和『维度3』分别取名为『年龄』和『满意度』，显示到 tooltip 中。
        dimensions: [null, null, '年龄', '满意度'],
        data: [
            // 维度0  维度1  维度2  维度3
            [   12,   44,   55,   60   ], // 这是第一个 dataItem
            [   53,   31,   21,   56   ], // 这是第二个 dataItem
            [   71,   33,   10,   20   ], // 这是第三个 dataItem
            ...
        ]
    }]
};
```


<br>
<br>
<br>

---

上面，一个简单的 custome series 例子完成了。

下面介绍几个其他细节要点。


<br>
<h2>（四）超出坐标系范围的截取</h2>

与 [dataZoom](http://echarts.baidu.com/option.html#dataZoom) 结合使用的时候，常常使用会设置 [dataZoom.filterMode](http://echarts.baidu.com/option.html#dataZoom.filterMode) 为 'weakFilter'。这个设置的意思是：当 `dataItem` 部分超出坐标系边界的时候，`dataItem` 不会整体被过滤掉。例如：

```js
option = {
    dataZoom: {
        xAxisIndex: 0,
        filterMode: 'weakFilter'
    },
    series: [{
        type: 'custom',
        renderItem: function () {
            ...
        },
        encode: {
            // data 中『维度1』和『维度2』对应到 X 轴
            x: [1, 2],
            y: 0
        },
        data: [
            // 维度0  维度1  维度2  维度3
            [   12,   44,   55,   60   ], // 这是第一个 dataItem
            [   53,   31,   21,   56   ], // 这是第二个 dataItem
            [   71,   33,   10,   20   ], // 这是第三个 dataItem
            ...
        ]
    }]
};
```

在这个例子中，『维度1』和『维度2』对应到 X 轴，`dataZoom` 组件控制 X 轴的缩放。假如在缩放的过程中，某个 dataItem 的『维度1』超出了 X 轴的范围，『维度2』还在 X 轴的范围中，那么只要设置 `dataZoom.filterMode = 'weakFilter'`，这个 dataItem 就不会被过滤掉，从而还能够使用 `renderItem` 绘制图形（可以使用上面提到过的 `echarts.graphic.clipRectByRect` 把图形绘制成被坐标系剪裁过的样子）。参见上面提到过的例子：[Profile](${galleryEditorPath}custom-profile)



<br>
<h2>（五）关于 dataIndex</h2>

开发者如果使用到的话应注意，[renderItem.arguments.params](http://echarts.baidu.com/option.html#series-custom.renderItem.arguments.params) 中的 `dataIndex` 和 `dataIndexInside` 是有区别的：

+ `dataIndex` 指的 `dataItem` 在原始数据中的 index。
+ `dataIndexInside` 指的是 `dataItem` 在当前数据窗口（参见 [dataZoom](http://echarts.baidu.com/option.html#dataZoom)）中的 index。

[renderItem.arguments.api](http://echarts.baidu.com/option.html#series-custom.renderItem.arguments.api) 中使用的参数都是 `dataIndexInside` 而非 `dataIndex`，因为从 `dataIndex` 转换成 `dataIndexInside` 需要时间开销。



<br>
<h2>（六）事件监听</h2>


```js
chart.setOption({
    // ...
    series: {
        type: 'custom',
        renderItem: function () {
            // ...
            return {
                type: 'group',
                children: [{
                    type: 'circle'
                    // ...
                }, {
                    type: 'circle',
                    name: 'aaa',
                    // 用户指定的信息，可以在 event handler 访问到。
                    info: 12345,
                    // ...
                }]
            };
        }
    }
});
chart.on('click', {element: 'aaa'}, function (params) {
    // 当 name 为 'aaa' 的图形元素被点击时，此回调被触发。
    console.log(params.info);
});
```



<br>
<h2>（七）自定义矢量图形</h2>

自定义系列能支持使用 [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) 定义矢量路径。从而可以使用矢量图工具中做出的图形。参见：[path](http://echarts.baidu.com/option.html#series-custom.renderItem.return_path)，以及例子：[icons](http://echarts.baidu.com/examples/editor.html?c=custom-calendar-icon) 和 [shapes](http://echarts.baidu.com/examples/editor.html?c=custom-gantt-flight)。




<br>

**更多的自定义系列的例子参见：[custom examples](http://echarts.baidu.com/examples.html#chart-type-custom)**

