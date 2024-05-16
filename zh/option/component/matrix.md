{{ target: component-matrix }}

# matrix(Object)

矩阵坐标系组件。

矩阵坐标系类似表格，主要用于显示多维度数据的关系和相互作用。它以矩形网格的形式呈现数据，每个网格单元（或称为“单元格”）代表了特定数据点的值。整个布局以行和列的形式显示，用以表达二维或更高维度的数据关系。

因为它是一种“坐标系”，所以它可以和多种图表系列组合使用，例如热力图、散点图、自定义系列等。

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


{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-rect-layout-width-height(
    componentName = "matrix",
    defaultLeft = "10%",
    defaultTop = "10%"
) }}

## x(Object)

{{ use: partial-matrix-header(
    name = 'x',
    prefix = '##'
) }}

## y(Object)

{{ use: partial-matrix-header(
    name = 'y',
    prefix = '##'
) }}

## backgroundStyle(Object)

整个矩形视图区的样式。

{{ use: partial-item-style(
    prefix = "##",
    name = "整个矩形视图区",
    defaultColor = "none",
    defaultBorderColor = "'#aaa'",
    defaultBorderWidth = 1
) }}

## innerBackgroundStyle(Object)

内部单元格的样式。

{{ use: partial-item-style(
    prefix = "##",
    name = "内部单元格",
    defaultColor = "none",
    defaultBorderColor = "'#ccc'",
    defaultBorderWidth = 1
) }}
