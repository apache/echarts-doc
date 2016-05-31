
{{target: component-x-axis}}

# xAxis(Object)

the x axis in cartesian(rectangular) coordinate. A single grid component could place 2 x axis above and below at most. 

## gridIndex(number) = 0

The index of grid which the x axis belongs to defaults to be in the first grid.

## position(string)

the position of x axis.

options: 
+ `'top'`
+ `'bottom'`

The first x axis in grid defaults to be under (`'bottom'`)  the grid, and the second x axis is on the other side against the first x axis. 

{{ use: axis-common(
    prefix='#',
    componentType='xAxis',
    axisTypeDefault="'category'",
    hasSplitLineAndArea=true
)}}
