{{ target: series-common-coordinate-system }}

## coordinateSystem(string) = ${defaultCoordinateSystem}

The coordinate used in the series, whose options are:

{{if: ${none} }}
+ `null`

   No coordinate.
{{/if}}

{{if: ${cartesian3D} }}

+ `'cartesian3D'`

    Use a 3D rectangular coordinate (also known as Cartesian coordinate), with [xAxisIndex](~series-${seriesType}.xAxisIndex) and [yAxisIndex](~series-${seriesType}.yAxisIndex) to assign the corresponding axis component.
{{/if}}

{{if: ${geo3D} }}

+ `'geo3D'`
    Use 3D geographic coordinate, with [geoIndex](~series-${seriesType}.geoIndex) to assign the corresponding 3D geographic coordinate components.

{{/if}}

{{if: ${globe} }}

+ `'globe'`

    Use 3D globe coordinate, with [globeIndex](~series-${seriesType}.globeIndex) to assign the corresponding 3D globe coordinate components.

{{/if}}


{{if: ${cartesian3D} }}
## grid3DIndex(number) = 0

Use the index of the [grid3D](~grid3D) component. The first [grid3D](~grid3D) component is used by default.

{{/if}}



{{if: ${geo3D} }}
## geo3DIndex(number) = 0

The index of the [geo3D](~geo3D) component used by the axis.The first [grid3D](~grid3D) component is used by default.


{{/if}}



{{if: ${globe} }}
## globeIndex(number) = 0

The index of the [globe](~globe) component used by the axis.The first [globe](~globe) component is used by default.


{{/if}}
