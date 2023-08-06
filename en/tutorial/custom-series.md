{{target: custom-series}}

# Custom Series

[custom series](option.html#series-custom) is a type of series, which enable develpers to customize graphic elements rendering and generate new types of chart.

Why does Apache ECharts<sup>TM</sup> supports `custom series`?

There are endless chart types in the world of data visualization, which are not enumerable. Thus only most common used chart types are built-in supported in echarts. For other chart types, it is necessary to provide an approach to make new types of chart for developers. This approach should be as simple as possible, which had better not to bothered developers with some details of implementation, such as creating and deleting graphic elements, transition animation, tooltip supporting, working with [dataZoom](option.html#dataZoom) or [visualMap](option.html#visualMap). Having considered the factors above, a solution [custom series](option.html#series-custom) is published.

**For example, a "x-range" chart is made by custom sereis:**
~[800x500](${galleryViewPath}custom-profile&reset=1&edit=1)

**[More samples of custom series](${websitePath}/examples/en/index.html#chart-type-custom)**

Let's begin the tutorial.


## (I) The method `renderItem`

The snippet of graphic elements rendering should be written in `renderItem` method my developers. For example:

```ts
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

In the rendering phase of echarts workflow, [renderItem](option.html#series-custom.renderItem) is called respectively for each `dataItem` in [series.data](option.html#series-custom.data). `renderItem` is responsible for build a group of definitions of graphic elements, including graphic type, size, location, style, etc. echarts will then build graphic elements according to those definitions. For example:

```ts
var option = {
    ...,
    series: [{
        type: 'custom',
        renderItem: function (params, api) {
            // This method will be called for each dataItem respectively.
            // Notice: it does not ensure that called according to the order
            // of `dataItem`.

            // Some processes, such as coordinate conversion.
            // `api.value(0)` is used to retrieve the value on the first
            // dimension in the current `dataItem`.
            var categoryIndex = api.value(0);
            // `api.coord(...)` is used to convert data values to pixel values,
            // will are necessary for graphic elements rendering.
            var startPoint = api.coord([api.value(1), categoryIndex]);
            var endPoint = api.coord([api.value(2), categoryIndex]);
            // `api.size(...)` is used to calculate the pixel size corresponding to
            // the a value range that the length is 1 on Y axis.
            var height = api.size([0, 1])[1] * 0.6;

            // The property `shape` incicates the location and size of this
            // element.
            // `echarts.graphic.clipRectByRect` is used for clipping the
            // rectangular when it overflow the bounding box of the current
            // coordinate system (cartesian).
            // If the rect is totally clipped, returns undefined.
            var rectShape = echarts.graphic.clipRectByRect({
                // position and location of the rectangular.
                x: startPoint[0],
                y: startPoint[1] - height / 2,
                width: endPoint[0] - startPoint[0],
                height: height
            }, {
                // Bounding box of the current cooridinate system (cartesian).
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            })

            // Returns definitions for the current `dataItem`.
            return rectShape && {
                // 'rect' indicates that the graphic element is rectangular.
                // Can also be 'circle', 'sector', 'polygon', ...
                type: 'rect',
                shape: rectShape,
                // `api.style(...)` is used to obtain style settings, which
                // includes itemStyle settings in optino and the result of
                // visual mapping.
                style: api.style()
            };
        },
        data: [
            [12, 44, 55, 60], // The first dataItem.
            [53, 31, 21, 56], // The second dataItem.
            [71, 33, 10, 20], // The third dataItem.
            ...
        ]
    }]
}
```


[renderItem](option.html#series-custom.renderItem) provides two parameters:
+ [params](option.html#series-custom.renderItem.arguments.params)：provides info about the current series (such as `seriesIndex`、`dataIndex`, etc.) and data (such as `dataIndex`, `dataIndexInside`, etc.) and coordinate system (such as location and size of bounding box of the current coordinate system)
+ [api](option.html#series-custom.renderItem.arguments.api) provides some methods to developers (such as `api.value()`, `api.coord()`).

[renderItem](option.html#series-custom.renderItem) method should return definitions of graphic elements for the current `dataItem`. See [renderItem.return](option.html#series-custom.renderItem.return).

Generally, the main process of [renderItem](option.html#series-custom.renderItem) is that retrieve value from data and convert them to graphic elements on the current coordinate system. Two methods in [renderItem.arguments.api](option.html#series-custom.renderItem.arguments.api) are always used in this procedure:
+ [api.value(...)](option.html#series-custom.renderItem.arguments.api.value) is used to retrieve value from data. For example, `api.value(0)` retrieve the value of the first dimension in the current data item.
+ [api.coord(...)](option.html#series-custom.renderItem.arguments.api.coord) is used to convert data to coordinate. For example, `var point = api.coord([api.value(0), api.value(1)])` converet the data to the point on the current coordinate system.

Sometimes [api.size(...)](option.html#series-custom.renderItem.arguments.api.size) method is needed, which calculates the size on the coordinate system by a given data range.

Moreover, [api.style(...)](option.html#series-custom.renderItem.arguments.api.style) method can be used to set style. It provides not only the style settings specified in [series.itemStyle](option.html#series-custom.itemStyle), but also the result of visual mapping. This method can also be called like `api.style({fill: 'green', stroke: 'yellow'})` to override those style settings.

Having `renderItem` provided, 90% of the work of creating custom series has been accomplished. The rest of this work is to refine and polish them.



## (II) Make the extent of axes fit the data

There is axes in some coordinate systems, such as [cartesian2d (grid)](option.html#grid)and [polar](option.html#polar). The extent of an axis should fit the data automatically, otherwise the graphic elements would be overflow the bounding box of the coordinate system. So, for example, in [cartesian2d (grid)](option.html#grid), developers should specify that which dimensions correspond to `x` axis and which to `y` axis use the property [encode](option.html#series-custom.encode):

```ts
option = {
    series: [{
        type: 'custom',
        renderItem: function () {
            ...
        },
        encode: {
            // `dim1` and `dim2` correspond to `x` axis.
            x: [1, 2],
            // `dim0` corresponds to `y` axis.
            y: 0
        },
        data: [
            // dim0  dim1  dim2  dim3
            [   12,   44,   55,   60   ], // The first dataItem.
            [   53,   31,   21,   56   ], // The second dataItem.
            [   71,   33,   10,   20   ], // The third dataItem.
            ...
        ]
    }]
};
```



## (III) Set tooltip content

Of course [tooltip.formatter](option.html#tooltip.formatter) can be used to define the content in tooltip. But it is easier to do that by setting [encode](option.html#series-custom.encode) and [dimensions](option.html#series-custom.dimensions):

```ts
option = {
    series: [{
        type: 'custom',
        renderItem: function () {
            ...
        },
        encode: {
            x: [1, 2],
            y: 0,
            // `dim2` and `dim3` will displayed in tooltip.
            tooltip: [2, 3]
        },
        // `dim2` is named as "Age" and `dim3` is named as "Satisfaction".
        dimensions: [null, null, 'Age', 'Satisfaction'],
        data: [
            // dim0  dim1  dim2  dim3
            [   12,   44,   55,   60   ],
            [   53,   31,   21,   56   ],
            [   71,   33,   10,   20   ],
            ...
        ]
    }]
};
```

<br>
<br>
<br>


---

Several other issues about `custom series` are introduced below.


## (IV) Shape clipping when overflow the coordinates area

When use `custom series` with [dataZoom](option.html#dataZoom), [dataZoom.filterMode](option.html#dataZoom.filterMode) usually be set as `'weakFilter'`, which prevent `dataItem` from being filtered when only part of its dimensions are out of the current data window. For example:


```ts
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
            x: [1, 2],
            y: 0
        },
        data: [
            // dim0  dim1  dim2  dim3
            [   12,   44,   55,   60   ], // The first dataItem.
            [   53,   31,   21,   56   ], // The second dataItem.
            [   71,   33,   10,   20   ], // The third dataItem.
            ...
        ]
    }]
};
```

In the example above, `dim` and `dim2` corresponds to `x` axis, and the `dataZoom` component constrols the data window of `x` axis. If part of a `dataItem` is overflow the extent of `x` axis (the value on `dim1` is overflow and the value on `dim2` is not) while zooming, the `dataItem` will not be filtered if `dataZoom.filterMode = 'weakFilter'` set. Thus the `dataItem` can be still rendered (usually be partially rendered by using `echarts.graphic.clipRectByRect` to clip the exceeding part).
See the example mentioned above [Profile](${galleryEditorPath}custom-profile).



## (V) About dataIndex


Developers had better notice that in [renderItem.arguments.params](option.html#series-custom.renderItem.arguments.params) `dataIndexInside` and `dataIndex` is different:


+ `dataIndex` is the index of a `dataItem` in the original data.
+ `dataIndexInside` is the index of a `dataItem` in the current data window (see [dataZoom](option.html#dataZoom).

[renderItem.arguments.api](option.html#series-custom.renderItem.arguments.api) uses `dataIndexInside` as the input parameter but not `dataIndex`, because conversion from `dataIndex` to `dataIndexInside` is time-consuming.


## (VI) Event listener


```ts
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
                    // User specified info, available
                    // in event handler.
                    info: 12345,
                    // ...
                }]
            };
        }
    }
});
chart.on('click', {element: 'aaa'}, function (params) {
    // When the element with name 'aaa' clicked,
    // this method called.
    console.log(params.info);
});
```


## (VII) Custom vector shapes


[SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) is supported, which enables to use shapes that are created in vector tool. See [path](option.html#series-custom.renderItem.return_path), and examples: [icons](${galleryEditorPath}custom-calendar-icon), [shapes](${galleryEditorPath}custom-gantt-flight).




<br>

**[More examples about custom series](${websitePath}/examples/en/index.html#chart-type-custom)**

