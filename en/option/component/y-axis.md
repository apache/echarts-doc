
{{target: component-y-axis}}

# yAxis(Object)

The y axis in cartesian(rectangular) coordinate system. A single grid component could place 2 y axis right and left at most. 

## gridIndex(number) = 0

The index of grid which the y axis belongs to defaults to be in the first grid.

## position(string)

the position of y axis.

options: 
+ `'left'`
+ `'right'`

The first y axis in grid defaults to be the left (`'left'`)  of the grid, and the second y axis is on the other side against the first y axis. 

{{ use: axis-common(
    prefix='#',
    componentType='yAxis',
    axisTypeDefault="'value'",
    hasSplitLineAndArea=true
)}}
