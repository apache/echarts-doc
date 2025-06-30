{{ target: partial-matrix-header }}

### show(boolean) = true

{{ use: partial-version(version = "6.0.0") }}

是否显示表头 行(如果是 `matrix.x`) 或 列(如果是 `matrix.y`)。


### data(Array)

{{ use: partial-version(version = "6.0.0") }}

指定 ${name} 的数据，即定义列/行。

```js
// 一行的数据
data: ['A', 'B', 'C', 'D', 'E']

// 或者如果不关心列/行名称，可以直接
data: Array(5).fill(null) // 五列或五行

// 树状结构的数据
data: [{
    value: 'A',
    children: [
        {
            value: 'A1',
            children: [
                {value: 'A1-1'},
                {value: 'A1-2'}
            ]
        },
        {value: 'A2'}
    ]
}, {
    value: 'B',
    children: [
        {value: 'B1'},
        {value: 'B2'}
    ]
}]
```

{{ use: partial-matrix-cell-style-option(
    prefix='##',
    name=${name}
) }}

{{ use: partial-matrix-dimension-level-option(
    prefix='##',
    name=${name}
) }}


### levels(Array)

{{ use: partial-version(version = "6.0.0") }}

Settings for each column(in `matrix.x`) or row(in `matrix.y`). The first element represents the first column/row, and so on.

- If any item in the array is `null`/`undefined`, it means using the default value.
- Otherwise any item in the array should be an object, such as `{levelSize: number}`.

For example
```js
matrix: {
    x: {
        level: [null, {levelSize: '20%'}]
        // The second column width should be 20% of
        // the matrix width.
        // The first column has no specific setting.
    },
    // ...
},
```

{{ use: partial-matrix-dimension-level-option(
    prefix = '###',
    name = ${name}
) }}


### dividerLineStyle(Object)

{{ use: partial-version(version = "6.0.0") }}

表头分割线样式

{{ use: partial-line-style(
    prefix = '###',
    defaultColor = "'#aaa'",
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "表头分割"
) }}

