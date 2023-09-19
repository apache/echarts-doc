
{{ target: partial-series-encode }}

#${prefix} encode(Object)

Define what is encoded to for each dimension of `data`. For example:

```ts
option = {
    dataset: {
        source: [
            // Each column is called a dimension.
            // There are five dimensions: 0, 1, 2, 3, 4.
            [12, 44, 55, 66, 2],
            [23, 6, 16, 23, 1],
            ...
        ]
    },
    series: {
        type: 'xxx',
        encode: {
            x: [3, 1, 5],      // Dimension 3, 1, 5 is mapped to x axis.
            y: 2,              // Dimension 2 is mapped to y axis.
            tooltip: [3, 2, 4] // Dimension 3, 2, 4 will be displayed in tooltip.
        }
    }
}
```

When [dimensions](~series.dimensions) is used to defined name for a certain dimension, `encode` can refer the name directly. For example:

```ts
series: {
    type: 'xxx',
    dimensions: ['date', 'open', 'close', 'highest', 'lowest'],
    encode: {
        x: 'date',
        y: ['open', 'close', 'highest', 'lowest']
    }
}
```

The basic structure of [encode](option.html#series.encode) is illustrated as follows, where the left part of colon is the name of axis like `'x'`, `'y'`, `'radius'`, `'angle'` or some special reserved names like "tooltip", "itemName" etc., and the right part of the colon is the dimension names or dimension indices (based on 0). One or more dimensions can be specified. Usually not all of mappings need to be specified, only specify needed ones.

The properties available in `encode` listed as follows:

```ts
// In any of the series and coordinate systems,
// these properties are available:
encode: {
    // Display dimension "product" and "score" in the tooltip.
    tooltip: ['product', 'score']
    // Set the series name as the concat of the names of dimensions[1] and dimensions[3].
    // (sometimes the dimension names are too long to type in series.name manually).
    seriesName: [1, 3],
    // Using dimensions[2] as the id of each data item. This is useful when dynamically
    // update data by `chart.setOption()`, where the new and old data item can be
    // corresponded by id, by which the appropriate animation can be performed when updating.
    itemId: 2,
    // Using dimensions[3] as the name of each data item. This is useful in charts like
    // 'pie', 'funnel', where data item name can be displayed in legend.
    itemName: 3,
    // Using dimensions[4] as the groupId of each data item. groupId will be used to categorize the data. And to determine
    // How the merge and split animation are performed in the universal transition. See universalTransition option for detail.
    itemGroupId: 4
}

// These properties only work in cartesian(grid) coordinate system:
encode: {
    // Map dimensions[1], dimensions[5] and dimension "score" to the X axis.
    x: [1, 5, 'score'],
    // Map dimensions[0] to the Y axis.
    y: 0
}

// These properties only work in polar coordinate system:
encode: {
    radius: 3,
    angle: 2,
    ...
}

// These properties only work in geo coordinate system:
encode: {
    lng: 3,
    lat: 2
}

// For some type of series that are not in any coordinate system,
// like 'pie', 'funnel' etc.:
encode: {
    value: 3
}
```

This is an [example](${galleryViewPath}dataset-encode1&edit=1&reset=1) for `encode`.


Specially, in [custom series(~series-custom), some property in `encode`, corresponding to axis, can be set as null to make the series not controlled by the axis, that is, the series data will not be count in the extent of the axis, and the [dataZoom](~dataZoom) on the axis will not filter the series.


```ts
var option = {
    xAxis: {},
    yAxis: {},
    dataZoom: [{
        xAxisIndex: 0
    }, {
        yAxisIndex: 0
    }],
    series: {
        type: 'custom',
        renderItem: function (params, api) {
            return {
                type: 'circle',
                shape: {
                    cx: 100, // x position is always 100
                    cy: api.coord([0, api.value(0)])[1],
                    r: 30
                },
                style: {
                    fill: 'blue'
                }
            };
        },
        encode: {
            // Then the series will not be controlled
            // by x axis and corresponding dataZoom.
            x: -1,
            y: 1
        },
        data: [ ... ]
    }
};
```



{{ target: partial-series-dimensions }}

#${prefix} dimensions(Array)

`dimensions` can be used to define dimension info for `series.data` or `dataset.source`.

Notice: if [dataset](~dataset) is used, we can definite dimensions in [dataset.dimensions](~dataset.dimensions), or provide dimension names in the first column/row of [dataset.source](~dataset.source), and not need to specify `dimensions` here. But if `dimensions` is specified here, it will be used despite the dimension definitions in dataset.


For example:

```ts
option = {
    dataset: {
        source: [
            // 'date', 'open', 'close', 'highest', 'lowest'
            [12, 44, 55, 66, 2],
            [23, 6, 16, 23, 1],
            ...
        ]
    },
    series: {
        type: 'xxx',
        // Specify name for each dimensions, which will be displayed in tooltip.
        dimensions: ['date', 'open', 'close', 'highest', 'lowest']
    }
}
```

```ts
series: {
    type: 'xxx',
    dimensions: [
        null,                // If you do not intent to defined this dimension, use null is fine.
        {type: 'ordinal'},   // Specify type of this dimension.
                             // 'ordinal' is always used in string.
                             // If type is not specified, echarts will guess type by data.
        {name: 'good', type: 'number'},
        'bad'                // Equals to {name: 'bad'}.
    ]
}
```

Each data item of `dimensions` can be:
+ `string`, for example, `'someName'`, which equals to `{name: 'someName'}`.
+ `Object`, where the attributes can be:
    + name: `string`.
    + type: `string`, supports:
        + `number`
        + `float`, that is, [Float64Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
        + `int`, that is, [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
        + `ordinal`, discrete value, which represents string generally.
        + `time`, time value, see [data](~series.data) to check the format of time value.
    + displayName: `string`, generally used in tooltip for dimension display. If not specified, use `name` by default.

When `dimensions` is specified, the default `tooltip` will be displayed vertically, which is better to show dimension names. Otherwise, `tooltip` will displayed only value horizontally.

