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

The size of all cells in the row/column. For `matrix.x`, it refers to the cell height; for `matrix.y`, it refers to the cell width.

The value type can be:

+ `number`: Represents pixel value.
+ `string`: Percentage value (e.g., `'33%'`), representing the percentage relative to the width (in `matrix.x`) or height (in `matrix.y`) of the matrix.
+ Unspecified: The width or height is evenly distributed.

+ `matrix.levelSize` specifies the default size of every tree levels.
+ `matrix.levels[i].levelSize` specifies the size of a certain level.

For example:
```js
{
    matrix: {
        x: {
            levelSize: undefined,
            levels: [undefined, {levelSize: '10%'}]
            // the width of the second column is 10% of the matrix width,
            // and other columns width are evenly distributed.
        },
        // ...
    },
}
```

