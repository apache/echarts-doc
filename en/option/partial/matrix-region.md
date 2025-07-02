{{ target: partial-matrix-cell-style-option }}

#${prefix} label(Object)

{{ use: partial-version(version = "6.0.0") }}

{{ use: partial-label-desc(
    name=${name}
) }}

{{ use: partial-label(
    prefix=${prefix} + '#',
    formatter = true,
    defaultColor = "#333"
) }}

#${prefix} itemStyle(Object)

{{ use: partial-version(version = "6.0.0") }}

{{ use: partial-item-style-desc(
    name = ${name}
) }}

{{ use: partial-item-style(
    prefix=${prefix} + '#',
    name = ${name},
    defaultColor = "none",
    defaultBorderColor = "'#ccc'",
    defaultBorderWidth = 1
) }}

{{ use: partial-silent(
    prefix=${prefix},
) }}

#${prefix} cursor(string)
Mouse cursor when hovering on the cell.

#${prefix} z2(number)
Specify the z-index (z-order) of the cell.
Used when style conflict - especially for thick border style.



{{ target: partial-matrix-dimension-level-option }}

#${prefix} levelSize(number|string)

{{ use: partial-version(version = "6.0.0") }}

{{ use: partial-matrix-dimension-size-desc() }}




{{ target: partial-matrix-dimension-size-desc }}

**[[The rule of cell size]]**

+ option `levelSize`
    + It specifies the size of all cells in a row or a column.
        + For `matrix.x`, it refers to the cell height of a row ("level" refers to a row).
        + For `matrix.y`, it refers to the cell width of a column ("level" refers to a column).
    + It can be declared in:
        + `matrix.levelSize` specifies the default size of every columns or rows.
        + `matrix.levels[i].levelSize` specifies the size of a certain column or row.
+ option `size`
    + It specifies the size of a single cell.
        + For `matrix.x`, it refers to the cell width.
        + For `matrix.y`, it refers to the cell height.
    + It can be declared in:
        + `matrix.x/y.data[i].size`

The value of `levelSize` or `size` can be:

+ Unspecified(default): The width or height is evenly distributed.
+ `number`: Represents pixel value.
+ `string`: Percentage value (e.g., `'33%'`), representing the percentage relative to the width (in `matrix.x`) or height (in `matrix.y`) of the matrix.

For example:
```js
{
    matrix: {
        x: {
            // The height of the second row is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other row height are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The width of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell width are evenly distributed.
                // ...
            ]
        },
        y: {
            // The width of the second column is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other column width are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The height of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell height are evenly distributed.
                // ...
            ]
        },
        // ...
    },
}
```

