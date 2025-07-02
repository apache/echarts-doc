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
鼠标悬停在单元格上时的鼠标样式。

#${prefix} z2(number)
指定单元格的 z-index（堆叠顺序）。
用于样式冲突时，尤其是边框较粗时。




{{ target: partial-matrix-dimension-level-option }}

#${prefix} levelSize(number|string)

{{ use: partial-version(version = "6.0.0") }}

{{ use: partial-matrix-dimension-size-desc() }}




{{ target: partial-matrix-dimension-size-desc }}

**[[单元格尺寸的规则]]**

+ 配置项 `levelSize`
    + 用于指定某一行或某一列所有单元格的尺寸。
        + 对于 `matrix.x`，指的是一行单元格的高度（"level" 指一行）。
        + 对于 `matrix.y`，指的是一列单元格的宽度（"level" 指一列）。
    + 可以在以下位置声明：
        + `matrix.levelSize`：指定所有行或列的默认尺寸。
        + `matrix.levels[i].levelSize`：指定某一行或列的尺寸。
+ 配置项 `size`
    + 用于指定单个单元格的尺寸。
        + 对于 `matrix.x`，指的是单元格的宽度。
        + 对于 `matrix.y`，指的是单元格的高度。
    + 可以在以下位置声明：
        + `matrix.x/y.data[i].size`

`levelSize` 或 `size` 的取值可以为：

+ 未指定（默认）：宽度或高度会被均匀分配。
+ `number`：表示像素值。
+ `string`：百分比值（如 `'33%'`），表示相对于矩阵宽度（在 `matrix.x` 中）或高度（在 `matrix.y` 中）的百分比。

例如：
```js
{
    matrix: {
        x: {
            // 第二行的高度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他行的高度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的宽度为 30 像素
                    size: 30
                },
                // 其他单元格的宽度均匀分配
                // ...
            ]
        },
        y: {
            // 第二列的宽度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他列的宽度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的高度为 30 像素
                    size: 30
                },
                // 其他单元格的高度均匀分配
                // ...
            ]
        },
        // ...
    },
}
```
