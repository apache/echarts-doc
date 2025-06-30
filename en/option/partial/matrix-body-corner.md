{{ target: partial-matrix-body-corner-option }}

#${prefix|default('##')} data(Array)

{{ use: partial-version(version = "6.0.0") }}

Only specify some special cell definitions for ${name}.

```js
data: [
    {
        coord: [[3, 5], [1, 2]], // Required to locate the cell.
                                 // See the rule below.
        value: 'some_text',      // Optional. The text to display.
        mergeCells: true,        // Optional. `false` by default.
    },
    {
        // ...
    },
    // ...
]
```

Cell locating and reference: see the description in [matrix.body.data](~matrix.body.data.coord)


##${prefix|default('##')} coord(Array)

**Body/Corner Cell Locating**

The rule is uniformly applied, such as, in `matrix.dataToPoint` and `matrix.dataToLayout` and `xxxComponent.coord`.

Suppose the matrix.x/y dimensions (header) are defined as:
```js
matrix: {
    x: [{ value: 'Xa0', children: ['Xb0', 'Xb1'] }, 'Xa1'],
    y: [{ value: 'Ya0', children: ['Yb0', 'Yb1'] }],
}
```

```
 -----------------------------------------
 |       |       |     Xa0       |       |
 |-------+-------+---------------|  Xa1  |
 |cornerQ|cornerP|  Xb0  |  Xb1  |       |
 |-------+-------+-------+-------+--------
 |       |  Yb0  | bodyR | bodyS |       |
 |  Ya0  |-------+-------+---------------|
 |       |  Yb1  |       |     bodyT     |
 |---------------|------------------------
```
+ `Locator number`:
    + The term `locator` refers to a integer number to locate cells on x or y direction.
    + Use the top-left cell of the body as the origin point `(0, 0)`,
        + the non-negative locator indicates the right/bottom of the origin point;
        + the negative locator indicates the left/top of the origin point.
+ `Ordinal number` (`OrdinalNumber`):
    + This term follows the same meaning as that in category axis of cartesian. They are non-negative integer, designating each string `matrix.x.data[i].value`/`matrix.y.data[i].value`. `'Xb0'`, `'Xb2'`, `'Xa1'`, `'Xa0'` are assigned with the ordinal numbers `0`, `1`, `2`, `3`. For every leaf dimension cell, `OrdinalNumber` and `MatrixXYLocator` is the same.
+ A single cell or multiple cells can be determined/located by an array of `locator number` or `ordinal number` or the original `value` string as follows:
    - e.g., the body cell `bodyS` above can be located by:
        - `coord: [1, 0]` (Use non-negative integer)
        - `coord: ['Xb1', 'Yb0']` (Use the `value` properties in `matrix.x/y.data`)
        - `coord: ['Xb1', 0]` (mix them)
    - e.g., the corner cell `cornerQ` above can be located by:
        - `coord: [-2, -1]` (negative `MatrixXYLocator`)
        - But it is NOT supported to use `coord: ['Y1_0', 'X1_0']` (XY transposed form) here.
    - The dimension (header) cell can be located by negative integers. For example:
        - The center of the node `'Ya0'` can be located by `[-2, 'Ya0']`.
    - Cross cells: multiple cells can be located. e.g., if using `[['Xb0', 'Xb1'], ['Yb0']]`, or using a non-leaf dimension cell to locate, such as `['Xa0', 'Yb0']`, it returns only according to the center of the dimension cells, regardless of the body span. (therefore, the result can be on the boundary of two body cells.) And the ordinal number assigned to 'Xa0' is 3, thus input `[3, 'Yb0']` get the some result.
- In a nutshell, **The formatter of `matrix.data.coord`** is as follows:
    - `[2, 8]` indicates a cell.
    - `[2, null/undefined/NaN]` means y is the entire column.
    - `[null/undefined/NaN, 8]` is the opposite.
    - `[[2, 5], 8]` indicates a rect of cells in x range of `2~5` and y `8`.
    - `[[2, 5], null/undefined/NaN]` indicates a x range of `2~5` and y is the entire column.
    - `[[2, 5], [7, 8]]` indicates a rect of cells in x range of `2~5` and y range of `7~8`.
    - `['aNonLeaf', 8]` indicates a rect of cells in x range of `aNonLeaf` and y `8`.
- **NOTICE**
    - `bodyR` above is `[0, 0]`**.
    - The formatter of `matrix.data.coord` is `MatrixCoordRangeOption[]` as follows.

- The API `dataToPoint` and `dataToLayout` also uses this locating rule:
    - Input `['Xa1', 'Yb1']` to `dataToPoint` will get a point in the center of "bodyT".
    - Input `['Xa1', 'Yb1']` to `dataToLayout` will get a rect of the "bodyT".


##${prefix|default('##')} mergeCells(boolean)

Body cells or corner cells can be merged.

##${prefix|default('##')} value(string|number)

Text to display in the cell.



{{ use: partial-matrix-cell-style-option(
    prefix='##',
    name=${name}
) }}
