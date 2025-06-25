{{ target: partial-matrix-region }}

${name}的数据。

```js
// 一行的数据
data: ['A', 'B', 'C', 'D', 'E']

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
    name: 'B',
    children: [
        {value: 'B1'},
        {value: 'B2'}
    ]
}]
```

### label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix='###',
    formatter = true,
    defaultColor = "#333"
) }}

### itemStyle(Object)

{{ use: partial-item-style-desc(
    name = ${name}
) }}

{{ use: partial-item-style(
    prefix='###',
    name = ${name},
    defaultColor = "none",
    defaultBorderColor = "'#ccc'",
    defaultBorderWidth = 1
) }}

{{ use: partial-silent(
    prefix='##'
) }}
