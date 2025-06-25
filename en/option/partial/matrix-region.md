{{ target: partial-matrix-region }}

#${prefix|default('##')} data(Array)

Specifies the data for the ${name}.

```js
// Data for a single row
data: ['A', 'B', 'C', 'D', 'E']

// Data in a tree structure
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

#${prefix|default('##')} label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix=${prefix|default('##')} + '#',
    formatter = true,
    defaultColor = "#333"
) }}

#${prefix|default('##')} itemStyle(Object)

{{ use: partial-item-style-desc(
    name = ${name}
) }}

{{ use: partial-item-style(
    prefix=${prefix|default('##')} + '#',
    name = ${name},
    defaultColor = "none",
    defaultBorderColor = "'#ccc'",
    defaultBorderWidth = 1
) }}

{{ use: partial-silent(
    prefix=${prefix|default('##')},
) }}
