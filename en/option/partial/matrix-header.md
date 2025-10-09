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
// Note: DO NOT support array with empty slots：
// data: Array(5) // ❌

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

If [matrix.${matrixDim}.data](~matrix.${matrixDim}.data) is not provided, it will be collected from `series.data` or `dataset.soruce`.

See [matrix data collection example](${galleryEditorPath}matrix-mini-bar-data-collection&edit=1&reset=1).

And in this case [series.encode](~series-scatter.encode) can be used to specify the dimension from which value is collected. For example,
```js
var option = {
    // no matrix.x/y.data is specified;
    // so collect from series.data or dataset.source (if any)
    matrix: {},
    series: {
        type: 'scatter',
        coordinateSystem: 'matrix',
        // Collect values from dimension index 3 and 2.
        encode: {x: 3, y: 2},
        data: [
            // 0   1    2    3    (dimension index)
            [100, 111, 122, 133],
            [200, 211, 222, 233],
        ]
    }
}
```

#### value(string|number)
{{ use: partial-version(version = "6.0.0") }}
The text in the header cell. Can also be used as a index of this column or row. Optional. If not specified, auto generate a text.

#### children(Array)
{{ use: partial-version(version = "6.0.0") }}
See [matrix.${matrixDim}.data](~matrix.${matrixDim}.data).

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

