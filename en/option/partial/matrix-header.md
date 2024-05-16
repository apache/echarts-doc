{{ target: partial-matrix-header }}

Configuration for the ${name} Axis

#${prefix|default('##')} show(boolean) = true

Determines whether to display the title row of the ${name} axis.

#${prefix|default('##')} data(Array)

Specifies the data for the title row of the ${name} axis.

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
    name = 'Header row'
) }}

{{ use: partial-item-style(
    prefix=${prefix|default('##')} + '#',
    name = "Header row",
    defaultColor = "none",
    defaultBorderColor = "'#ccc'",
    defaultBorderWidth = 1
) }}
