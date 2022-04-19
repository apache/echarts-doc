
{{ target: component-dataset }}

# dataset(Object)

ECharts 4 开始支持了 `数据集`（`dataset`）组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射。这在不少场景下能带来使用上的方便。

关于 `dataset` 的详情，请参见[教程](${handbookPath}concepts/dataset)。

{{ use: partial-component-id(
    prefix = "#"
) }}

## source(Array|Object)

原始数据。一般来说，原始数据表达的是二维表。可以用如下这些格式表达二维表：

二维数组，其中第一行/列可以给出 [维度名](~dataset.dimensions)，也可以不给出，直接就是数据：

```ts
[
    ['product', '2015', '2016', '2017'],
    ['Matcha Latte', 43.3, 85.8, 93.7],
    ['Milk Tea', 83.1, 73.4, 55.1],
    ['Cheese Cocoa', 86.4, 65.2, 82.5],
    ['Walnut Brownie', 72.4, 53.9, 39.1]
]
```

按行的 key-value 形式（对象数组），其中键（key）表明了 [维度名](~dataset.dimensions)：
```ts
[
    {product: 'Matcha Latte', count: 823, score: 95.8},
    {product: 'Milk Tea', count: 235, score: 81.4},
    {product: 'Cheese Cocoa', count: 1042, score: 91.2},
    {product: 'Walnut Brownie', count: 988, score: 76.9}
]
```

按列的 key-value 形式，每一项表示二维表的 “一列”：

```ts
{
    'product': ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
    'count': [823, 235, 1042, 988],
    'score': [95.8, 81.4, 91.2, 76.9]
}
```

关于 `dataset` 的详情，请参见[教程](${handbookPath}concepts/dataset)。

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

## sourceHeader(boolean|number)

`dataset.source` 第一行/列是否是 [维度名](~dataset.dimensions) 信息。可选值：

+ `null/undefined/'auto'`：默认，自动探测。
+ `true`：第一行/列是维度名信息。
+ `false`：第一行/列直接开始是数据。
+ `number`: 维度名行/列数，也就是数据行/列的开始索引。例如：`sourceHeader: 2` 意味着前两行/列为维度名，从第三行/列开始为数据。

注意：“第一行/列” 的意思是，如果 [series.seriesLayoutBy](~series.seriesLayoutBy) 设置为 `'column'`（默认值），则取第一行，如果 `series.seriesLayoutBy` 设置为 `'row'`，则取第一列。

## transform(Object)

{{ use: partial-data-transform-tutorial-ref() }}

{{ use: component-data-transform-filter() }}

{{ use: component-data-transform-sort() }}

{{ use: component-data-transform-external() }}

## fromDatasetIndex(number)

指定 [dataset.transform](~dataset.transform) 以哪个 dataset 作为输入。如果 [dataset.transform](~dataset.transform) 被指定了，但是 `fromDatasetIndex` 和 `fromDatasetId` 都没有被指定，那么默认会使用 `fromDatasetIndex: 0`.

{{ use: partial-data-transform-tutorial-ref() }}

## fromDatasetId(string)

指定 [dataset.transform](~dataset.transform) 以哪个 dataset 作为输入。

{{ use: partial-data-transform-tutorial-ref() }}

## fromTransformResult(number)

如果一个 [dataset.transform](~dataset.transform) 会产出多个结果 data ，我们可以使用 `fromTransformResult` 获得特定的结果。

大多数场景下，transform 只会产出一个结果，所以大多数情况下 `fromTransformResult` 并不需要指定。当不指定 `fromTransformResult` 时，默认使用 `fromTransformResult: 0`。

{{ use: partial-data-transform-tutorial-ref() }}

