{{ target: partial-matrix-header }}

### show(boolean) = true

{{ use: partial-version(version = "6.0.0") }}

Determines whether to display the header row(in `matrix.x`)/column(in `matrix.y`).


### data(Array)

{{ use: partial-version(version = "6.0.0") }}

Specifies the data for the ${name}. i.e., defined the column/row.

```js
// Data for a single row
data: ['A', 'B', 'C', 'D', 'E']

// Or if column/row names is not of concern, simply
data: Array(5).fill(null) // Five columns or rows

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

Header divider line style.

{{ use: partial-line-style(
    prefix = '###',
    defaultColor = "'#aaa'",
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "header divider"
) }}

