
{{target: component-y-axis}}

# yAxis(Object)

The y axis in cartesian(rectangular) coordinate. Usually a single grid component can place at most 2 y axis, one on the left and another on the right. [offset](~yAxis.offset) can be used to avoid overlap when you need to put more than two y axis.

## show(boolean) = true

If show y axis.

## gridIndex(number) = 0

The index of grid which the y axis belongs to. Defaults to be in the first grid.

## position(string)

the position of y axis.

options:
+ `'left'`
+ `'right'`

The first y axis in grid defaults to be the left (`'left'`)  of the grid, and the second y axis is on the other side against the first y axis.

## offset(number) = 0

Offset of y axis relative to default position. Useful when multiple y axis has same [position](~yAxis.position) value.

{{ use: axis-common(
    prefix='#',
    componentType='yAxis',
    axisTypeDefault="'value'",
    hasSplitLineAndArea=true,
    galleryViewPath=${galleryViewPath},
    galleryEditorPath=${galleryEditorPath}
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="y axis",
    defaultZ=0
) }}
