{{target:partial-series-encode}}

#${prefix} encode(Object)

Define what is encoded to for each dimension of `data`. For example:

```js
option = {
    dataset: {
        source: [
            // Each column is called a dimension.
            // There are five dimensions: 0, 1, 2, 3, 4。
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

Attributes of encode are different according to the type of coordinate systtems.
For [cartesian2d](~grid), `x` and `y` can be defined.
For [polar](~polar), `radius` and `angle` can be defined.
For [geo](~geo), `lng` and `lat` can be defined.
Attribute `tooltip` and `itemName` (data item name in tooltip) are always able to be defined.

When [dimensions](~series.dimensions) is used to defined name for a certain dimension, `encode` can refer the name directly. For example:

```js
series: {
    type: 'xxx',
    dimensions: ['date', 'open', 'close', 'highest', 'lowest'],
    encode: {
        x: 'date',
        y: ['open', 'close', 'highest', 'lowest']
    }
}
```

Specially, in [custom series(~series-custom), some property in `encode`, corresponding to axis, can be set as null to make the series not controlled by the axis, that is, the series data will not be count in the extent of the axis, and the [dataZoom](~dataZoom) on the axis will not filter the series.


```js
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
            x: null,
            y: 1
        },
        data: [ ... ]
    }
};
```




{{target:partial-series-dimensions}}

#${prefix} dimensions(Array)

`dimensions` can be used to define dimension info for `series.data` or `dataset.source`.

Notice: if [dataset](~dataset) is used, we can provide dimension names in the first column/row of [dataset.source](~dataset.source), and not need to specify `dimensions` here. But if `dimensions` is specified here, echarts will not retrieve dimension names from the first row/column of `dataset.source` any more.


For example:

```js
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
        // Specify name for each dimesions, which will be displayed in tooltip.
        dimensions: ['date', 'open', 'close', 'highest', 'lowest']
    }
}
```

```js
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

When `dimensions` is specified, the default `tooltip` will be displayed vertically, which is better to show diemsion names. Otherwise, `tooltip` will displayed only value horizontally.