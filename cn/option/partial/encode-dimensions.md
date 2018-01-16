{{target:partial-series-encode}}

#${prefix} encode(Object)

可以定义 `data` 的哪个维度被编码成什么。比如：

```js
option = {
    dataset: {
        source: [
            // 每一列称为一个『维度』。
            // 这里分别是维度 0、1、2、3、4。
            [12, 44, 55, 66, 2],
            [23, 6, 16, 23, 1],
            ...
        ]
    },
    series: {
        type: 'xxx',
        encode: {
            x: [3, 1, 5],      // 表示维度 3、1、5 映射到 x 轴。
            y: 2,              // 表示维度 2 映射到 y 轴。
            tooltip: [3, 2, 4] // 表示维度 3、2、4 会在 tooltip 中显示。
        }
    }
}
```

encode 支持的属性，根据坐标系不同而不同。
对于 [直角坐标系（cartesian2d）](~grid)，支持 `x`、`y`。
对于 [极坐标系（polar）](~polar)，支持 `radius`、`angle`。
对于 [地理坐标系（geo）](~geo)，支持 `lng`，`lat`。
此外，均支持 `tooltip` 和 `itemName`（用于指定 tooltip 中数据项名称）。

当使用 [dimensions](~series.dimensions) 给维度定义名称后，`encode` 中可直接引用名称，例如：

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


{{target:partial-series-dimensions}}

#${prefix} dimensions(Array)

使用 dimensions 定义 `series.data` 或者 `dataset.source` 的每个维度的信息。

注意：如果使用了 [dataset](~dataset)，那么可以在 [dataset.source](~dataset.source) 的第一行/列中给出 dimension 名称。于是就不用在这里指定 dimension。但是，如果在这里指定了 `dimensions`，那么 ECharts 不再会自动从 `dataset.source` 的第一行/列中获取维度信息。

例如：

```js
option = {
    dataset: {
        source: [
            // 有了上面 dimensions 定义后，下面这五个维度的名称分别为：
            // 'date', 'open', 'close', 'highest', 'lowest'
            [12, 44, 55, 66, 2],
            [23, 6, 16, 23, 1],
            ...
        ]
    },
    series: {
        type: 'xxx',
        // 定义了每个维度的名称。这个名称会被显示到默认的 tooltip 中。
        dimensions: ['date', 'open', 'close', 'highest', 'lowest']
    }
}
```

```js
series: {
    type: 'xxx',
    dimensions: [
        null,                // 如果此维度不想给出定义，则使用 null 即可
        {type: 'ordinal'},   // 只定义此维度的类型。
                             // 'ordinal' 表示离散型，一般文本使用这种类型。
                             // 如果类型没有被定义，会自动猜测类型。
        {name: 'good', type: 'number'},
        'bad'                // 等同于 {name: 'bad'}
    ]
}
```

`dimensions` 数组中的每一项可以是：
+ `string`，如 `'someName'`，等同于 `{name: 'someName'}`
+ `Object`，属性可以有：
    + name: `string`。
    + type: `string`，支持
        + `number`，默认，表示普通数据。
        + `ordinal`，对于类目、文本这些 string 类型的数据，如果需要能在数轴上使用，须是 'ordinal' 类型。ECharts 默认会自动判断这个类型。但是自动判断也是不可能很完备的，所以使用者也可以手动强制指定。
        + `float`，即 [Float64Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)。
        + `int`，即 [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)。
        + `time`，表示时间类型。设置成 'time' 则能支持自动解析数据成时间戳（timestamp），比如该维度的数据是 '2017-05-10'，会自动被解析。时间类型的支持参见 [data](~series.data)。

值得一提的是，当定义了 `dimensions` 后，默认 `tooltip` 中对个维度的显示，会变为『竖排』，从而方便显示每个维度的名称。如果没有定义 `dimensions`，则默认 `tooltip` 会横排显示，且只显示数值没有维度名称可显示。





