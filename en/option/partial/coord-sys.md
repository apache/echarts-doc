
{{ target: partial-coord-sys }}

## coordinateSystem(string) = ${coordSysDefault}

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

The coordinate used in the series, whose options are:

{{ if: ${none} }}
+ `null` or `'none'`

    No coordinate.
{{ /if }}

{{ if: ${cartesian2d} }}
+ `'cartesian2d'`

    Use a two-dimensional rectangular coordinate (also known as Cartesian coordinate), with [xAxisIndex](~series-${seriesType}.xAxisIndex) and [yAxisIndex](~series-${seriesType}.yAxisIndex) to assign the corresponding axis component.
{{ /if }}

{{ if: ${polar} }}
+ `'polar'`

    Use polar coordinates, with [polarIndex](~series-${seriesType}.polarIndex) to assign the corresponding polar coordinate component.
{{ /if }}

{{ if: ${geo} }}
+ `'geo'`

    Use geographic coordinate, with [geoIndex](~series-${seriesType}.geoIndex) to assign the corresponding geographic coordinate components.
{{ /if }}

{{ if: ${parallel} }}
+ `'parallel'`

    Use parallel coordinates, with [parallelIndex](~series-${seriesType}.parallelIndex) to assign the corresponding parallel coordinate components.
{{ /if }}

{{ if: ${calendar} }}
+ `'calendar'`

    Use calendar coordinates, with [calendarIndex](~series-${seriesType}.calendarIndex) to assign the corresponding calendar coordinate components.
{{ /if }}

{{ if: ${none} }}
+ `'none'`

    Do not use coordinate system.
{{ /if }}

{{ if: ${cartesian2d} }}
## xAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

Index of [x axis](~xAxis) to combine with, which is  useful for multiple x axes in one chart.

## yAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

Index of [y axis](~yAxis) to combine with, which is  useful for multiple y axes in one chart.
{{ /if }}

{{ if: ${polar} }}
## polarIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

Index of [polar coordinate](~polar) to combine with, which is useful for multiple polar axes in one chart.
{{ /if }}

{{ if: ${geo} }}
## geoIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

Index of [geographic coordinate](~geo) to combine with, which is useful for multiple geographic axes in one chart.
{{ /if }}

{{ if: ${parallel} }}
## parallelIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

Index of [parallel coordinates](~parallel) to combine with, which is useful for multiple parallel axes in one chart.
{{ /if }}

{{ if: ${calendar} }}
## calendarIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

Index of [calendar coordinates](~calendar) to combine with, which is useful for multiple calendar coordinates in one chart.
{{ /if }}

