{{ target: component-matrix }}

# matrix(Object)

{{ use: partial-version(version = "6.0.0") }}

Matrix coordinate system component.

The `matrix` coordinate system, like a table, can serve as the layout system of data items in a series, mainly used to display the relationship and interaction of multi-dimensional data. It presents data in the form of a rectangular grid, where each grid unit (or "cell") represents the value of a specific data point in series like `series.heatmap`, `series.scatter`, `series.custom`, etc. The entire layout is displayed in rows and columns to express the relationship of two-dimensional or higher-dimensional data.

The `matrix` coordinate system can also serve as the layout system of the box of series like `series.pie`, `series.tree`, etc., or another coordinate systems like `grid` (i.e., Cartesian coordinate system), `geo`, `polar`, etc., or plain components like `legend`, `dataZoom`, etc. This character enables [mini charts](${galleryEditorPath}matrix-sparkline&edit=1&reset=1) to be laid out in a table, or enables the layout approach like [CSS grid layout](${galleryEditorPath}matrix-grid-layout&edit=1&reset=1). Currently all the series and components can be laid out within a matrix. `matrix` can also be used purely as table for data texts.

Correlation heat map using heat map in matrix coordinate system:
~[800x400](${galleryViewPath}matrix-correlation-heatmap&edit=1&reset=1)

Correlation scatter plot using scatter plot in matrix coordinate system:
~[800x400](${galleryViewPath}matrix-correlation-scatter&edit=1&reset=1)

Correlation graph using relationship graph in matrix coordinate system:
~[800x600](${galleryViewPath}matrix-graph&edit=1&reset=1)

Correlation pie chart using pie chart in matrix coordinate system. The example below shows multi-level X data:
~[800x600](${galleryViewPath}matrix-pie&edit=1&reset=1)

Confusion matrix using custom series in matrix coordinate system:
~[800x400](${galleryViewPath}matrix-confusion&edit=1&reset=1)

Mini charts are laid out in a table:
~[800x600](${galleryViewPath}matrix-sparkline&edit=1&reset=1)
~[800x600](${galleryViewPath}matrix-mini-bar-geo&edit=1&reset=1)

And other **mini charts** examples: [matrix mini bar example](${galleryEditorPath}matrix-mini-bar-data-collection&edit=1&reset=1).


By flexibly using the combination of chart series, coordinate systems, and APIs, richer effects can be achieved.

Reference:
+ Cell locating and reference: see the description in [matrix.body.data](~matrix.body.data.coord)


{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-rect-layout-width-height(
    componentName = "matrix",
    defaultLeft = "10%",
    defaultTop = "10%"
) }}

## x(Object)

{{ use: partial-version(version = "6.0.0") }}

X-axis header region.

{{ use: partial-matrix-header(
    name = 'x-axis cells',
    matrixDim = 'x',
) }}

## y(Object)

{{ use: partial-version(version = "6.0.0") }}

Y-axis header region.

{{ use: partial-matrix-header(
    name = 'y-axis cells',
    matrixDim = 'y',
) }}

## body(Object)

{{ use: partial-version(version = "6.0.0") }}

Body cells, which are the ones except header cells.

{{ use: partial-matrix-body-corner-option(
    prefix = '##',
    name: 'Body cells'
) }}

## corner(Object)

{{ use: partial-version(version = "6.0.0") }}

Corner cells, which are the one at the intersection of x and y-axis.

{{ use: partial-matrix-body-corner-option(
    prefix = '##',
    name: 'Corner cells'
) }}

## backgroundStyle(Object)

{{ use: partial-version(version = "6.0.0") }}

The style of the entire matrix area.

{{ use: partial-item-style(
    prefix = "##",
    name = "Entire matrix area ",
    defaultColor = "none",
    defaultBorderColor = "'#ccc'",
    defaultBorderWidth = 1
) }}

## borderZ2(number)

The secondary z-index of the outer border and the divider line.

## tooltip(Object)
The tooltip for cells, follow the same option as [tooltip](~tooltip). Disabled by default. We can enable tooltip if the text is overflow a cell boundary and truncated.

```ts
matrix: {
    tooltip: {
        show: true
    },
    // ...
}
```
