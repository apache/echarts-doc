{{ target: partial-matrix-header }}

${name} 轴的配置。

#${prefix|default('##')} show(boolean) = true

是否显示 ${name} 轴的标题行。

#${prefix|default('##')} data(Array)

${name} 轴标题行的数据。

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

#${prefix|default('##')} label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix=${prefix|default('##')} + '#',
    formatter = true,
    defaultColor = "#333"
) }}

#${prefix|default('##')} itemStyle(Object)

{{ use: partial-item-style-desc(
    name = '标题行'
) }}

{{ use: partial-item-style(
    prefix=${prefix|default('##')} + '#',
    name = "标题行",
    defaultColor = "none",
    defaultBorderColor = "'#ccc'",
    defaultBorderWidth = 1
) }}
