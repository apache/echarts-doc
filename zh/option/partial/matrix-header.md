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

#### value(string|number)
{{ use: partial-version(version = "6.0.0") }}

每个表头单元格中的文字，也可用于索引这行或列。如果不指定，自动生成一个。

#### children(Array)
{{ use: partial-version(version = "6.0.0") }}

见 [matrix.x/y.data](~matrix.x.data).

#### size(number)
{{ use: partial-version(version = "6.0.0") }}
{{ use: partial-matrix-dimension-size-desc }}



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

每一列（对于 `matrix.x`）或每一行（对于 `matrix.y`）的设置。第一个元素表示第一列/行，依此类推。

- 如果数组中的某一项为 `null`/`undefined`，表示使用默认值。
- 否则每一项应为一个对象，例如 `{levelSize: number}`。

例如
```js
matrix: {
    x: {
        level: [null, {levelSize: '20%'}]
        // 第二列宽度应为矩阵宽度的 20%。
        // 第一列没有特殊设置。
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

