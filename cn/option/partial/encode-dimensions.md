{{target:partial-series-encode}}

#${prefix} encode(Object)

可以定义 `data` 的哪个维度被编码成什么。比如：

```js
series: {
    type: 'xxx',
    encode: {
        x: [3, 1, 5],      // 表示维度 3、1、5 映射到 x 轴。
        y: 2,              // 表示维度 2 映射到 y 轴。
        tooltip: [3, 2, 4] // 表示维度 3、2、4 会在 tooltip 中显示。
        label: 3           // 表示 label 使用维度 3。
    },
    data: [
        // 每一列称为一个『维度』。
        // 这里分别是维度 0、1、2、3、4。
        [12, 44, 55, 66, 2],
        [23, 6, 16, 23, 1],
        ...
    ]
}
```

encode 支持的属性，根据坐标系不同而不同。
对于 [直角坐标系（cartesian2d）](~grid)，支持 `x`、`y`。
对于 [极坐标系（polar）](~polar)，支持 `radius`、`angle`。
对于 [地理坐标系（geo）](~geo)，支持 `lng`，`lat`。
此外，均支持 `tooltip` 和 `label`。

当使用 [dimensions](~series.dimensions) 给维度定义名称后，`encode` 中可直接引用名称，例如：

```js
series: {
    type: 'xxx',
    dimensions: ['date', 'open', 'close', 'highest', 'lowest'],
    encode: {
        x: 'date',
        y: ['open', 'close', 'highest', 'lowest']
    },
    data: [ ... ]
}
```


{{target:partial-series-dimensions}}

#${prefix} dimensions(Array)

使用 dimensions 定义 `data` 每个维度的信息。例如：

```js
series: {
    type: 'xxx',
    // 定义了每个维度的名称。这个名称会被显示到默认的 tooltip 中。
    dimensions: ['date', 'open', 'close', 'highest', 'lowest']
    data: [
        // 有了上面 dimensions 定义后，下面这五个维度的名称分别为：
        // 'date', 'open', 'close', 'highest', 'lowest'
        [12, 44, 55, 66, 2],
        [23, 6, 16, 23, 1],
        ...
    ]
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
        + `number`
        + `float`，即 [Float64Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
        + `int`，即 [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
        + `ordinal`，表示离散数据，一般指字符串。
        + `time`，表示时间类型，时间类型的支持参见 [data](~series.data)

值得一提的是，当定义了 `dimensions` 后，默认 `tooltip` 中对个维度的显示，会变为『竖排』，从而方便显示每个维度的名称。如果没有定义 `dimensions`，则默认 `tooltip` 会横排显示，且只显示数值没有维度名称可显示。