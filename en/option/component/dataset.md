
{{ target: component-dataset }}

# dataset(Object)

`dataset` component is published since ECharts 4. `dataset` brings convenience in data management separated with styles and enables data reuse by different series. More importantly, it enables data encoding from data to visual, which brings convenience in some scenarios.

More details about `dataset` can be checked in the [tutorial](${handbookPath}concepts/dataset/).

{{ use: partial-component-id(
    prefix = "#"
) }}

## source(Array|Object)

Source data. Generally speaking, a source data describe a table, where these format below can be applied:

2d array, where [dimension names](~dataset.dimensions) can be provided in the first row/column, or do not provide, only data.

```ts
[
    ['product', '2015', '2016', '2017'],
    ['Matcha Latte', 43.3, 85.8, 93.7],
    ['Milk Tea', 83.1, 73.4, 55.1],
    ['Cheese Cocoa', 86.4, 65.2, 82.5],
    ['Walnut Brownie', 72.4, 53.9, 39.1]
]
```

Row based key-value format (object array), where the keys indicate [dimension names](~dataset.dimensions).

```ts
[
    {product: 'Matcha Latte', count: 823, score: 95.8},
    {product: 'Milk Tea', count: 235, score: 81.4},
    {product: 'Cheese Cocoa', count: 1042, score: 91.2},
    {product: 'Walnut Brownie', count: 988, score: 76.9}
]
```

Column based key-value format, where each value represents a column of a table.

```ts
{
    'product': ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
    'count': [823, 235, 1042, 988],
    'score': [95.8, 81.4, 91.2, 76.9]
}
```

More details about `dataset` can be checked in the [tutorial](${handbookPath}concepts/dataset/).

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

## sourceHeader(boolean|number)

Whether the first row/column of `dataset.source` represents [dimension names](~dataset.dimensions). Optional values:

+ `null/undefined/'auto'`: means auto detect whether the first row/column is dimension names or data.
+ `true`: the first row/column is dimension names.
+ `false`: data start from the first row/column.
+ `number`: means the row/column count of the dimension names, that is, the start index of data row/column. e.g. `sourceHeader: 2` means the front two rows/columns are dimension names, the back ones are data.

Note: **_the first row/column_** means that if [series.seriesLayoutBy](~series.seriesLayoutBy) is set as `'column'`, pick the first row, otherwise, if it is set as `'row'`, pick the first column.

## transform(Object)

{{ use: partial-data-transform-tutorial-ref() }}

{{ use: component-data-transform-filter() }}

{{ use: component-data-transform-sort() }}

{{ use: component-data-transform-external() }}

## fromDatasetIndex(number)

Specify the input dataset for [dataset.transform](~dataset.transform).
If [dataset.transform](~dataset.transform) specified but both `fromDatasetIndex` and `fromDatasetId` are not specified, `fromDatasetIndex: 0` will be used by default.

{{ use: partial-data-transform-tutorial-ref() }}

## fromDatasetId(string)

Specify the input dataset for [dataset.transform](~dataset.transform).

{{ use: partial-data-transform-tutorial-ref() }}

## fromTransformResult(number)

If a [dataset.transform](~dataset.transform) produces more than one result, we can use `fromTransformResult` to retrieve some certain result.

In most cases, `fromTransformResult` do not need to be specified because most transforms only produce one result. If `fromTransformResult` is not specified, we use `fromTransformResult: 0` by default.

{{ use: partial-data-transform-tutorial-ref() }}

