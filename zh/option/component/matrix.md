{{ target: component-matrix }}

# matrix(Object)

{{ use: partial-version(version = "6.0.0") }}

矩阵坐标系组件。

矩阵坐标系（`matrix`）类似表格，可作为系列（`series`）中数据项的布局系统，主要用于展示多维数据的关系与交互。它以矩形网格形式呈现数据，每个网格单元（或"单元格"）代表 `series.heatmap`、`series.scatter`、`series.custom` 等系列中某个数据点的值。整体布局以行列形式展示，用于表达二维或高维数据之间的关系。

矩阵坐标系（`matrix`）还可作为盒布局系统，布局各个系列、其他坐标系（如 `grid`（即笛卡尔坐标系）、`geo`、`polar` 等）和普通组件（如 `legend`、`dataZoom` 等）。该特性支持在表格中布局微型图表，或使用类似 [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) 的布局方式进行排版。目前，所有系列和组件均可在 `matrix` 中布局。`matrix` 也可纯用作文字数据表。

在矩阵坐标系中使用热力图的相关矩阵图：
~[800x400](${galleryViewPath}matrix-correlation-heatmap&edit=1&reset=1)

在矩阵坐标系中使用散点图的相关矩阵图：
~[800x400](${galleryViewPath}matrix-correlation-scatter&edit=1&reset=1)

在矩阵坐标系中使用关系图的相关矩阵图：
~[800x600](${galleryViewPath}matrix-graph&edit=1&reset=1)

在矩阵坐标系中使用饼图的相关矩阵图，下面的例子展示了多层级的 X 数据：
~[800x600](${galleryViewPath}matrix-pie&edit=1&reset=1)

在矩阵坐标系中使用自定义系列的混淆矩阵图：
~[800x400](${galleryViewPath}matrix-confusion&edit=1&reset=1)

灵活利用图表系列、坐标系、API 的组合，可以实现更丰富的效果。

引用：
+ 单元格的定位和引用：见 [matrix.body.data](~matrix.body.data.coord) 中的描述。


{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-rect-layout-width-height(
    componentName = "矩阵坐标系（matrix）",
    defaultLeft = "10%",
    defaultTop = "10%"
) }}

## x(Object)

{{ use: partial-version(version = "6.0.0") }}

x 轴表头区。

{{ use: partial-matrix-header(
    name: 'x 轴表头区单元格'
) }}

## y(Object)

{{ use: partial-version(version = "6.0.0") }}

y 轴表头区。

{{ use: partial-matrix-header(
    name: 'y 轴表头区单元格'
) }}

## body(Object)

{{ use: partial-version(version = "6.0.0") }}

内容区单元格，即表单除了表头区外的区域。

{{ use: partial-matrix-body-corner-option(
    prefix = '##',
    name: '内容区单元格'
) }}

## corner(Object)

{{ use: partial-version(version = "6.0.0") }}

角区单元格，即表单行列表头区的交集区域。

{{ use: partial-matrix-body-corner-option(
    prefix = '##',
    name: '角区单元格'
) }}

## backgroundStyle(Object)

{{ use: partial-version(version = "6.0.0") }}

整个矩形视图区的样式。

{{ use: partial-item-style(
    prefix = "##",
    name = "整个矩形视图区",
    defaultColor = "none",
    defaultBorderColor = "'#ccc'",
    defaultBorderWidth = 1
) }}

## borderZ2(number)

最外层的边框和分割线的 z2-index 。

## tooltip(Object)

单元格的 tooltip 配置，配置项同 [tooltip](~tooltip)。默认不显示，文字很多的时候会被裁剪，这时可以开启 tooltip，如下示例：

```ts
matrix: {
    tooltip: {
        show: true
    },
    // ...
}
```
