{{target: custom-series}}

# Custom Series

[custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom) is a type of series, which enable develpers to customize graphic elements rendering and generate new types of chart.

Why echarts supports `custom series`? There are endless chart types in the world of data visualization, which are not enumerable. Thus only most common used chart types are built-in supported in echarts. For other chart types, it is necessary to provide an approach to make new types of chart for developers. This approach should be as simple as possible, which had better not to bothered developers with some details of implementation, such as creating and deleting graphic elements, transition animation, tooltip supporting, working with [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom) or [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap). Having considered the factors above, a solution [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom) is published.

**For example, a "x-range" chart is made by custom sereis:**
~[800x500](${galleryViewPath}custom-profile&reset=1&edit=1)

**[More samples of custom series](https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-custom)**

Let's begin the tutorial.


<br>
<h2>(I) The method `renderItem`</h2>

The snippet of graphic elements rendering should be written in `renderItem` method my developers. For example:

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

In the rendering phase of echarts workflow, [renderItem](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem) is called respectively for each `dataItem` in [series.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.data). `renderItem` is responsible for build a group of definitions of graphic elements, including graphic type, size, location, style, etc. echarts will then build graphic elements according to those definitions. For example:

```js
var option = {
    ...,
    series: [{
        type: 'custom',
        renderItem: function (params, api) {
            // This method will be called for each dataItem repectively.
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

            // Returns definitions for the current `dataItem`.
            return {
                // 'rect' indicates that the graphic element is rectangular.
                // Can also be 'circle', 'sector', 'polygon', ...
                type: 'rect',
                // The property `shape` incicates the location and size of thsi
                // element.
                // `echarts.graphic.clipRectByRect` is used for clipping the
                // rectangular when it overflow the bounding box of the current
                // coordinate system (cartesian).
                shape: echarts.graphic.clipRectByRect({
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
                }),
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


[renderItem](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem) provides two parameters:
+ [params](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.params)：provides info about the current series (such as `seriesIndex`、`dataIndex`, etc.) and data (such as `dataIndex`, `dataIndexInside`, etc.) and coordinate system (such as location and size of bounding box of the current coordinate system)
+ [api](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.api) provides some methods to developers (such as `api.value()`, `api.coord()`).

[renderItem](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem) method should return definitions of graphic elements for the current `dataItem`. See [renderItem.return](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.return).

Generally, the main process of [renderItem](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem) is that retrieve value from data and convert them to graphic elements on the current coordinate system. Two methods in [renderItem.arguments.api](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.api) are always used in this procedure:
+ [api.value(...)](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.api.value) is used to retrieve value from data. For example, `api.value(0)` retrieve the value of the first dimension in the current data item.
+ [api.coord(...)](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.api.coord) is used to convert data to coordinate. For example, `var point = api.coord([api.value(0), api.value(1)])` converet the data to the point on the current coordinate system.

Sometimes [api.size(...)](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.api.size) method is needed, which calculates the size on the coordinate system by a given data range.

Moreover, [api.style(...)](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.api.style) method can be used to set style. It provides not only the style settings specified in [series.itemStyle](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.itemStyle), but also the result of visual mapping. This method can also be called like `api.style({fill: 'green', stroke: 'yellow'})` to override those style settings.

Having `renderItem` provided, 90% of the work of creating custom series has been accomplished. The rest of this work is to refine and polish them.



<br>
<h2>(II) Make the extent of axes fit the data</h2>

There is axes in some coordinate systems, such as [cartesian2d (grid)](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid)and [polar](https://ecomfe.github.io/echarts-doc/public/en/option.html#polar). The extent of an axis should fit the data automatically, otherwise the graphic elements would be overflow the bounding box of the coordinate system. So, for example, in [cartesian2d (grid)](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid), developers should specify that which dimensions correspond to `x` axis and which to `y` axis use the property [encode](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.encode):

```js
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



<br>
<h2>(III) Set tooltip content</h2>

Of course [tooltip.formatter](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.formatter) can be used to define the content in tooltip. But it is easier to do that by setting [encode](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.encode) and [dimensions](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.dimensions):

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
<h2>(IV) Other issues</h2>

(1) When use `custom series` with [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom), [dataZoom.filterMode](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom.filterMode) usually be set as `'weakFilter'`, which prevent `dataItem` from being filtered when only part of its dimensions are out of the current data window. For example:


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

<br>

(2) Developers had better notice that in [renderItem.arguments.params](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.params) `dataIndexInside` and `dataIndex` is different:

+ `dataIndex` is the index of a `dataItem` in the original data.
+ `dataIndexInside` is the index of a `dataItem` in the current data window (see [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom).

[renderItem.arguments.api](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.api) uses `dataIndexInside` as the input parameter but not `dataIndex`, because conversion from `dataIndex` to `dataIndexInside` is time-consuming.

<br>

**[More examples about custom series](https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-custom)**

