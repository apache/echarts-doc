
{{target: dataset}}

# Dataset

`dataset` component is published since Apache ECharts<sup>TM</sup> 4. `dataset` brings convenience in data management separated with styles and enables data reuse by different series. More importantly, it enables data encoding from data to visual, which brings convenience in some scenarios.

Before ECharts 4, data was only able to declared in each series, for example:

```ts
option = {
    xAxis: {
        type: 'category',
        data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            name: '2015',
            data: [89.3, 92.1, 94.4, 85.4]
        },
        {
            type: 'bar',
            name: '2016',
            data: [95.8, 89.4, 91.2, 76.9]
        },
        {
            type: 'bar',
            name: '2017',
            data: [97.7, 83.1, 92.5, 78.1]
        }
    ]
}
```

This approach is easy to be understand and is flexible when some series needs special data definitions. But the shortcomings are also obvious: some data extra works are usually needed to split the original data to each series, and it not supports sharing data in different series, moreover, it is not good for encode.

ECharts4 starts to provide `dataset` component, which brings benefits below:

+ Benefit from `dataset`, we can follow the common methodology of data visualization: based on data, specify the mapping (via the option [encode](option.html#series.encode)) from data to visual.
+ Data can be managed and configured separately from other configurations.
+ Data can be reused by different series and components.
+ Support more common data format (like 2d-array, object-array), to avoid data transform works for users.


## Get started

This is a simplest example of `dataset`:

```ts
option = {
    legend: {},
    tooltip: {},
    dataset: {
        // Provide data.
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
    },
    // Declare X axis, which is a category axis, mapping
    // to the first column by default.
    xAxis: {type: 'category'},
    // Declare Y axis, which is a value axis.
    yAxis: {},
    // Declare several series, each of them mapped to a
    // column of the dataset by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
}
```

This is the result:

~[500x300](${galleryViewPath}dataset-simple0&edit=1&reset=1)

Or the common format object-array is also supported:

```ts
option = {
    legend: {},
    tooltip: {},
    dataset: {
        // Here the declared `dimensions` is mainly for providing the order of
        // the dimensions, which enables ECharts to apply the default mapping
        // from dimensions to axes.
        // Alternatively, we can declare `series.encode` to specify the mapping,
        // which will be introduced later.
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
            {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
            {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
            {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
            {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};
```

## Mapping from data to graphic

In this tutorial, we make charts following this methodology: base on data, config the rule to map data to graphic, namely, encode the data to graphic.

Generally, this mapping can be performed:

+ Configure whether columns or rows of a dataset will mapped to series, namely, the series layout on the columns or rows of a dataset. This can be specified by [series.seriesLayoutBy](option.html#series.seriesLayoutBy). `'column'` is the default value.
+ Configure the mapping rule from dimensions (a dimension means a column/row) to axes in coordinate system, tooltip, labels, color, symbol size, etc. This can be specified by [series.encode](option.html#series.encode) and [visualMap](option.html#visualMap) (if visual encoding is required). The example above does not give a mapping rule, so ECharts make default mapping by common sense: because x axis is a category axis, the first column is mapped to the x axis, and each series use each subsequent column in order.

Let's illustrate them in detail below.


## Mapping by column or row

Giving dataset, users can configure whether columns or rows of a dataset will be mapped to series, namely, the series layout on the columns or rows of a dataset. This can be specified by [series.seriesLayoutBy](option.html#series.seriesLayoutBy). The optional values are:

+ 'column': series are positioned on each columns of the dataset. Default value.
+ 'row': series are positioned on each row of the dataset.

See the example below:

```ts
option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        ]
    },
    xAxis: [
        {type: 'category', gridIndex: 0},
        {type: 'category', gridIndex: 1}
    ],
    yAxis: [
        {gridIndex: 0},
        {gridIndex: 1}
    ],
    grid: [
        {bottom: '55%'},
        {top: '55%'}
    ],
    series: [
        // These series is in the first cartesian (grid), and each
        // is mapped to a row.
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        // These series is in the second cartesian (grid), and each
        // is mapped to a column.
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
    ]
}
```

This is the result:

~[800x600](${galleryViewPath}dataset-series-layout-by&edit=1&reset=1)


## Dimension

Before introducing `encode`, we should clarify the concept of `dimension`.

Most of common charts describe data in the format of "two-dimensions table" (note that the meaning of the word "dimension" in "two-dimension table" is not the same as the dimensions in ECharts. In order not to be confusing, we use "2d-table", "2d-array" below). In the examples above, we use 2d-array to carry the 2d-table. When we set `seriesLayoutBy` as `'column'`, namely, mapping columns to series, each column is called a dimension, and each row is a data item. When we set `seriesLayoutBy` as `'row'`, namely, mapping rows to series, each row is called a dimension, and each column is a data item.

Dimension can have its name to displayed on charts. Dimension name can be defined on the first row/column. Take the code above as an example, `'score'`、`'amount'`、`'product'` are dimension names, and data start from the second row. By default ECharts auto detect whether the first row/column of `dataset.source` is dimension name or data. Use can also set `dataset.sourceHeader` as `true` to mandatorily specify the first row/column is dimension name, or set as `false` to indicate the data start from the first row/column.

The definitions of the dimensions can also be provided separately in `dataset.dimensions` or `series.dimensions`, where not only dimension name, but also dimension type can be specified:

```ts
var option1 = {
    dataset: {
        dimensions: [
            // Each item can be object or string.
            {name: 'score'},
            // A string indicates the dimension name.
            'amount',
            // Dimension type can be specified.
            {name: 'product', type: 'ordinal'}
        ],
        source: [...]
    },
    ...
};

var option2 = {
    dataset: {
        source: [...]
    },
    series: {
        type: 'line',
        // Dimensions declared in series will be adapted with higher priority.
        dimensions: [
            null, // Set as null means we don't want to set dimension name.
            'amount',
            {name: 'product', type: 'ordinal'}
        ]
    },
    ...
};
```

Generally, we do not need to set dimensions types, because it can be auto detected based on data by ECharts. But in some cases, for example, the data is empty, the detection might not be accurate, where dimension type can be set manually.

The optional values of dimension types can be:
+ `'number'`: Normal data, default value.
+ `'ordinal'`: Represents string data like category data or text data. ECharts will auto detect them by default. They can be set manually if the detection fail.
+ `'time'`: Represents time data, where it is supported that parse time string to timestamp. For example, if users need to parse '2017-05-10' to timestamp, it should be set as `time` type. If the dimension is used on a time axis ([axis.type](option.html#xAxis.type) is `'time'`), it will be auto set to `time` type. The supported time string is listed in [data](option.html#series.data).
+ `'float'`: If set as `'float'`, it will be stored in `TypedArray`, which is good for performance optimization.
+ `'int'`: If set as `'int'`, it will be stored in `TypedArray`, which is good for performance optimization.



## Mapping from data to graphic (encode)

Having the concept of dimension clarified, we can use [encode](option.html#series.encode) to map data to graphic:

```ts
var option = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
        ]
    },
    xAxis: {},
    yAxis: {type: 'category'},
    series: [
        {
            type: 'bar',
            encode: {
                // Map dimension "amount" to the X axis.
                x: 'amount',
                // Map dimension "product" to the Y axis.
                y: 'product'
            }
        }
    ]
};
```

This is the result:

~[500x300](${galleryViewPath}doc-example/dataset-encode-simple0&edit=1&reset=1)


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
    itemName: 3
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

There is an other example for `encode`:

~[800x600](${galleryViewPath}dataset-encode1&edit=1&reset=1)




## Visual encoding (color, symbol, etc.)

We can use [visualMap](option.html#visualMap) component to map data to visual channel like color, symbol size, etc.. More info about it can be checked in its [doc](option.html#visualMap).

~[500x400](${galleryViewPath}dataset-encode0&edit=1&reset=1)



## Default encoding

For some common cases (line chart, bar chart, scatter plot, candlestick, pie, funnel, etc.), EChart provides default encoding settings, by which chart will be displayed even if no `encode` option is specified. (If `encode` option is specified, default encoding will not be applied.) The rule of default encoding should not be too complicated. Basically it is:

+ In coordinate system (like cartesian(grid), polar):
    + If category axis (i.e., axis.type is `'category'`) exists, map the first column/row to the axis, and each series use a following column/row.
    + If no category axis exists, and the coordinate system contains two axis (like X Y in cartesian), each series use two columns/rows, one for a axis.
+ If no coordinate system (like pie chart):
    + Use the first column/row as item name, and the second column/row as item value.

If the default rule does not meet the requirements, configure the `encode` yourself please.

~[800x400](${galleryViewPath}dataset-default&edit=1&reset=1)


## Q & A

Q: How to map the third column to X axis, and map the fifth column to Y axis?

A:
```ts
series: {
    // Notice that the dimension index is based on 0,
    // thus the third column is dimensions[2].
    encode: {x: 2, y: 4},
    ...
}
```

Q: How to map the third row th X axis, and map the fifth row to Y axis?

A:
```ts
series: {
    encode: {x: 2, y: 4},
    seriesLayoutBy: 'row',
    ...
}
```

Q: How to use the values in the second column in label.

A:
The [label.formatter](option.html#series.label.formatter) supports refer value in a certain dimension. For example:

```ts
series: {
    label: {
        // `'{@score}'` means use the value in the "score" dimension.
        // `'{@[4]}'` means use the value in dimensions[4].
        formatter: 'aaa{@product}bbb{@score}ccc{@[4]}ddd'
    }
}
```

Q: How to display the second column and the third column in tooltip?

A:
```ts
series: {
    encode: {
        tooltip: [1, 2]
        ...
    },
    ...
}
```

Q: If there is no dimension name in dataset.source, how to give dimension name?

A:
```ts
dataset: {
    dimensions: ['score', 'amount'],
    source: [
        [89.3, 3371],
        [92.1, 8123],
        [94.4, 1954],
        [85.4, 829]
    ]
}
```

Q: How to encode the third column in bubble size in bubble plot?

A:
```ts
var option = {
    dataset: {
        source: [
            [12, 323, 11.2],
            [23, 167, 8.3],
            [81, 284, 12],
            [91, 413, 4.1],
            [13, 287, 13.5]
        ]
    },
    // Use visualMap to perform visual encoding.
    visualMap: {
        show: false,
        dimension: 2, // Encode the third column.
        min: 2, // Min value is required in visualMap component.
        max: 15, // Max value is required in visualMap component.
        inRange: {
            // The range of bubble size, from 5 pixel to 60 pixel.
            symbolSize: [5, 60]
        }
    },
    xAxis: {},
    yAxis: {},
    series: {
        type: 'scatter'
    }
};
```

Q: We have specified `encode`, but why it does not work?

A: Maybe we can try to check typo, for example, the dimension name is `'Life Expectancy'`, be we typed `'Life Expectency'` in `encode` option.


## Various formats in dataset

In lots of cases, data is described in 2d-table. For example, some data processing software like MS Excel, Numbers are based on 2d-table. The data can be exported as JSON format and input to `dataset.source`.

> Some csv tools can be used to export the table data to JSON, for example, [dsv](https://github.com/d3/d3-dsv) or [PapaParse](https://github.com/mholt/PapaParse).

In common used data transfer formats in JavaScript, 2d-array is a good choice to carry table data, which has been illustrated in the examples above.

Besides, 2d-array, `dataset` also support key-value format as follows, which is also commonly used. But notice, the option [seriesLayoutBy](option.html#series.seriesLayoutBy) is not supported in this format.

```ts
dataset: [{
    // Row based key-value format, namely, object array, is a commonly used format.
    source: [
        {product: 'Matcha Latte', count: 823, score: 95.8},
        {product: 'Milk Tea', count: 235, score: 81.4},
        {product: 'Cheese Cocoa', count: 1042, score: 91.2},
        {product: 'Walnut Brownie', count: 988, score: 76.9}
    ]
}, {
    // Column based key-value format is also supported.
    source: {
        'product': ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
        'count': [823, 235, 1042, 988],
        'score': [95.8, 81.4, 91.2, 76.9]
    }
}]
```


## Multiple datasets and references

Multiple datasets can be defined, and series can refer them by [series.datasetIndex](option.html#series.datasetIndex).

```ts
var option = {
    dataset: [{
        source: [...],
    }, {
        source: [...]
    }, {
        source: [...]
    }],
    series: [{
        // Use the third dataset.
        datasetIndex: 2
    }, {
        // Use the second dataset.
        datasetIndex: 1
    }]
}
```

## Data transform

`Data transform` has been supported since Apache ECharts<sup>TM</sup> 5. In echarts, the term `data transform` means that generate new data from user provided source data and transform functions. This feature is enable users to process data in declarative way, and provides users some common "transform functions" to make that kind of tasks "out-of-the-box".

See the details of data transform in this [doc](~data-transform).



## ECharts3 data setting approach (series.data) can be used normally

The data setting approach before ECharts4 can still be used normally. If a series has declared [series.data](option.html#series.data), it will be used but not `dataset`.

```ts
{
    xAxis: {
        type: 'category'
        data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        name: '2015',
        data: [89.3, 92.1, 94.4, 85.4]
    }, {
        type: 'bar',
        name: '2016',
        data: [95.8, 89.4, 91.2, 76.9]
    }, {
        type: 'bar',
        name: '2017',
        data: [97.7, 83.1, 92.5, 78.1]
    }]
}
```

In fact, setting data via [series.data](option.html#series.data) is not deprecated and useful in some cases. For example, for some charts, like [treemap](option.html#series-treemap), [graph](option.html#series-graph), [lines](option.html#series-lines), that do not apply table data, `dataset` is not supported for yet. Moreover, for the case of large data rendering (for example, millions of data), [appendData](api.html#echartsInstance.appendData) is probably needed to load data incrementally. `dataset` is not supported in the case.


## Data transform

See [data transform](~Data%20Transform).


## Others

Currently, not all types of series support dataset. Series that support dataset includes:

`line`, `bar`, `pie`, `scatter`, `effectScatter`, `parallel`, `candlestick`, `map`, `funnel`, `custom`.

More types of series will support dataset in our further work.


Finally, this is an example, multiple series sharing one `dataset` and having interactions:

~[800x500](${galleryViewPath}dataset-link&edit=1&reset=1)
