{{ target: partial-coord-sys }}

## coordinateSystem(string) = ${coordSysDefault}

The coordinate used in the series,  options are:

{{if: ${cartesian2d} }}

+ `'cartesian2d'`

    Using a two-dimensional Cartesian coordinate (also known as Cartesian coordinate), through [xAxisIndex](~series-${seriesType}.xAxisIndex), [yAxisIndex](~series-${seriesType}.yAxisIndex) to assign the corresponding axis component.
{{/if}}

{{if: ${polar} }}

+ `'polar'`

    Using polar coordinates, through [polarIndex](~series-${seriesType}.polarIndex) to assign the corresponding polar coordinate component.
{{/if}}

{{if: ${geo} }}

+ `'geo'`

    Using geographic coordinate, through [geoIndex](~series-${seriesType}.geoIndex) to assign the corresponding geographic coordinate components.
{{/if}}

{{if: ${parallel} }}

+ `'parallel'`

    Using parallel coordinates, through [parallelIndex](~series-${seriesType}.parallelIndex) to assign the corresponding parallel coordinate components.
{{/if}}


{{if: ${cartesian2d} }}
## xAxisIndex(number) = 0

Using the index of  [x axis](~xAxis), which is  useful when there are multiple x axes in one graphic chart.

## yAxisIndex(number) = 0

Using the index of [y axis](~yAxis), which is  useful when there are multiple y axes in one graphic chart.
{{/if}}



{{if: ${polar} }}
## polarIndex(number) = 0

Using the index of [Polar coordinate](~polar), which is  useful when there are multiple polar coordinates in one graphic chart.

{{/if}}



{{if: ${geo} }}
## geoIndex(number) = 0

Using the index of [geographic coordinate](~geo), which is  useful when there are multiple geographic coordinates in one graphic chart.

{{/if}}



{{if: ${parallel} }}
## parallelIndex(number) = 0

Using the index of [parallel coordinates](~parallel), which is  useful when there are multiple parallel coordinates in one graphic chart.

{{/if}}