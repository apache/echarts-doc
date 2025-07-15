{{ target: partial-matrix-body-corner-option }}

#${prefix|default('##')} data(Array)

{{ use: partial-version(version = "6.0.0") }}

为 ${name} 指定部分特殊单元格定义。

```js
data: [
    {
        coord: [[3, 5], [1, 2]], // 必填。用于定位单元格。
                                 // 详细规则见下方描述。
        value: 'some_text',      // 可选。要显示的文本。
        mergeCells: true,        // 可选。默认为 `false`。
    },
    {
        // ...
    },
    // ...
]
```

单元格定位与引用规则详见 [matrix.body.data](~matrix.body.data.coord) 的描述。

##${prefix|default('##')} coord(Array)

**内容区/角区单元格定位说明**

定位规则在 `matrix.dataToPoint`、`matrix.dataToLayout` 及 `xxxComponent.coord` 等 API 中统一适用。

假设矩阵 x/y 维度（表头）定义如下：

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

+ **Locator number**：
    + `locator` 表示用于在 x 或 y 方向定位单元格的整数。
    + 以内容区左上角单元格为原点 `(0, 0)`，
        + 非负数表示原点右侧/下方；
        + 负数表示原点左侧/上方。
+ **Ordinal number**：
    + 与笛卡尔坐标系类目轴一致。为非负整数，指定每个 `matrix.x.data[i].value`/`matrix.y.data[i].value`。如 `'Xb0'`、`'Xb2'`、`'Xa1'`、`'Xa0'` 分别对应序数 `0`、`1`、`2`、`3`。每个叶子维度单元格的 `OrdinalNumber` 与 `MatrixXYLocator` 相同。
+ 单个或多个单元格可通过 locator 数字、ordinal 数字或原始 value 字符串数组定位。例如：
    - 如上表中的 bodyS 可通过以下方式定位：
        - `coord: [1, 0]`（非负整数）
        - `coord: ['Xb1', 'Yb0']`（使用 `matrix.x/y.data` 的 value 属性）
        - `coord: ['Xb1', 0]`（混合用法）
    - 角区单元格 cornerQ 可通过：
        - `coord: [-2, -1]`（负数定位）
        - 不支持 `coord: ['Y1_0', 'X1_0']`（XY 交换形式）。
    - 维度（表头）单元格可通过负数定位。例如 `'Ya0'` 的中心可通过 `[-2, 'Ya0']` 定位。
    - 跨单元格定位：如 `[['Xb0', 'Xb1'], ['Yb0']]`，或用非叶子维度单元格如 `['Xa0', 'Yb0']`，此时仅返回维度单元格中心（结果可能在两个 body 单元格边界上）。'Xa0' 的序数为 3，因此 `[3, 'Yb0']` 也可定位到同一位置。
- 简而言之，`matrix.data.coord` 的格式如下：
    - `[2, 8]` 表示单个单元格。
    - `[[2, 5], 8]` 表示 x 方向 2~5，y 方向 8 的矩形区域。
    - `[[2, 5], [7, 8]]` 表示 x 方向 2~5，y 方向 7~8 的矩形区域。
    - `['aNonLeaf', 8]` 表示 x 方向为非叶子节点，y 方向为 8 的区域。
    - `[2, null/undefined/NaN]` 表示 y 方向整列（仅在 `coordClamp: true` 时生效）。
    - `[null/undefined/NaN, 8]` 表示 x 方向整行（仅在 `coordClamp: true` 时生效）。
    - `[[2, 5], null/undefined/NaN]` 表示 x 方向 2~5，y 方向整列（仅在 `coordClamp: true` 时生效）。
- **注意**
    - 上表中的 bodyR 对应 `[0, 0]`。
    - `matrix.data.coord` 的格式为 `MatrixCoordRangeOption[]`。
- `dataToPoint` 和 `dataToLayout` API 也遵循此定位规则：
    - 输入 `['Xa1', 'Yb1']` 到 `dataToPoint` 得到 bodyT 的中心点。
    - 输入 `['Xa1', 'Yb1']` 到 `dataToLayout` 得到 bodyT 的矩形区域。

##${prefix|default('##')} coordClamp(boolean)
+ `true`: `matrix.body/corner.data[i].coord` 中 `[null/undefined/NaN/invalid_values, xxx]` 或 `[xxx, null/undefined/NaN/invalid_values]` 能指代一整行/列.
+ `false`: 不支持上述设定，且使用这些值时会打印错误提示（仅在 dev 模式下打印）。

##${prefix|default('##')} mergeCells(boolean)

内容区或角区单元格可合并。

##${prefix|default('##')} value(string|number)

单元格中显示的文本。

{{ use: partial-matrix-cell-style-option(
    prefix='##',
    name=${name}
) }}
