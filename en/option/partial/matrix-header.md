{{ target: partial-matrix-header }}

### show(boolean) = true

Determines whether to display the title row of the ${name}.

{{ use: partial-matrix-region(
    prefix = '##',
    name: ${name}
) }}

### levelSize(number|string)

The size of all cells in the title row/column. For the x title row, it refers to the cell height; for the y title column, it refers to the cell width.

The value type can be:

+ `number`: Represents pixel value.
+ `string`: Percentage value (e.g., `'33%'`), representing the percentage relative to the width or height of the matrix.
+ Unspecified: The width or height is evenly distributed.

For example:

```js
{
    x: {
        levelSize: undefined,
        levels: [undefined, {levelSize: '10%'}]
    }
}
```

In the above example, the width of the second column title is 10% of the entire chart width, and other title columns use the maximum value of each column title content as the width.

### levels(Array)

Settings for each row/column of the title row/column. The first element represents the first row/column, and so on. If an item in the array is empty, it means using the default value.

#### levelSize(number|string)

The size of cells in a specific row/column of the title row. For the x title row, it refers to the cell height; for the y title column, it refers to the cell width.

The value type can be:

+ `number`: Represents pixel value.
+ `string`: Percentage value (e.g., `'33%'`), representing the percentage relative to the width or height of the entire chart container.
+ Unspecified: Represents the minimum value that adapts to the content.

### dividerLineStyle(Object)

{{ use: partial-line-style(
    prefix = '###',
    defaultColor = "'#aaa'",
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "title column divider line"
) }}
