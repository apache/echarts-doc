{{ target: component-matrix }}

# matrix(Object)

Matrix coordinate system component.

Matrix coordinate system is similar to a table, mainly used to display the relationship and interaction of multi-dimensional data. It presents data in the form of a rectangular grid, where each grid unit (or "cell") represents the value of a specific data point. The entire layout is displayed in rows and columns to express the relationship of two-dimensional or higher-dimensional data.

Because it is a "coordinate system", it can be used in combination with multiple chart series, such as heat maps, scatter plots, custom series, etc.

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

By flexibly using the combination of chart series, coordinate systems, and APIs, richer effects can be achieved.

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-rect-layout-width-height(
    componentName = "matrix",
    defaultLeft = "10%",
    defaultTop = "10%"
) }}

## x(Object)

X-axis header region.

{{ use: partial-matrix-header(
    name = 'x-axis cells',
    prefix = '##'
) }}

## y(Object)

Y-axis header region.

{{ use: partial-matrix-header(
    name = 'y-axis cells',
    prefix = '##'
) }}

## body(Object)

Body cells, which are the ones except header cells.

{{ use: partial-matrix-region(
    prefix = '##',
    name: 'Body cells'
) }}

## corner(Object)

Corner cells, which are the one at the intersection of x and y-axis.

{{ use: partial-matrix-region(
    prefix = '##',
    name: 'Corner cells'
) }}

## backgroundStyle(Object)

The style of the entire matrix area.

{{ use: partial-item-style(
    prefix = "##",
    name = "Entire matrix area ",
    defaultColor = "none",
    defaultBorderColor = "'#ccc'",
    defaultBorderWidth = 1
) }}
