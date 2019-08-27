
{{target: component-dataset}}

# dataset(Object)

`dataset` component is published since ECharts 4. `dataset` brings convenience in data management separated with styles and enables data reuse by different series. More importantly, is enables data encoding from data to visual, which brings convenience in some scenarios.

More details about `dataset` can be checked in the [tutorial](https://echarts.apache.org/en/tutorial.html#Dataset).

---

{{use: partial-component-id(prefix="#")}}

## source(Array|Object)

Source data. Generally speaking, a source data describe a table, where these format below can be applied:

2d array, where [dimension names](~dataset.dimensions) can be provided in the first row/column, or do not provide, only data.

```js
[
    ['product', '2015', '2016', '2017'],
    ['Matcha Latte', 43.3, 85.8, 93.7],
    ['Milk Tea', 83.1, 73.4, 55.1],
    ['Cheese Cocoa', 86.4, 65.2, 82.5],
    ['Walnut Brownie', 72.4, 53.9, 39.1]
]
```

Row based key-value format (object array), where the keys indicate [dimension names](~dataset.dimensions).

```js
[
    {product: 'Matcha Latte', count: 823, score: 95.8},
    {product: 'Milk Tea', count: 235, score: 81.4},
    {product: 'Cheese Cocoa', count: 1042, score: 91.2},
    {product: 'Walnut Brownie', count: 988, score: 76.9}
]
```

Column based key-value format, where each value represents a column of a table.

```js
{
    'product': ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
    'count': [823, 235, 1042, 988],
    'score': [95.8, 81.4, 91.2, 76.9]
}
```

More details about `dataset` can be checked in the [tutorial](https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#dataset).


{{use:partial-series-dimensions(
    prefix="#"
)}}

## sourceHeader(boolean)

Whether the first row/column of `dataset.source` represents [dimension names](dataset.dimensions). Optional values:

+ `null/undefine`: means auto detect whether the first row/column is dimension names or data.
+ `true`: the first row/column is dimension names.
+ `false`: data start from the first row/column.

Note: "the first row/column" means that if [series.seriesLayoutBy](~series.seriesLayoutBy) is set as `'column'`, pick the first row, otherwise, if it is set as `'row'`, pick the first column.
