
{{ target: partial-coord-sys }}

## coordinateSystem(string) = ${coordSysDefault}

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The coordinate system used in the series or component, whose options are:

{{ if: ${none} }}
+ `null`/`undefined`/`'none'`

    Do not use coordinate system.
{{ /if }}

{{ if: ${cartesian2d} }}
+ `'cartesian2d'`

    Use a two-dimensional [rectangular coordinate system (also known as Cartesian coordinate system)](~grid), with [xAxisIndex](~series-${seriesType}.xAxisIndex) and [yAxisIndex](~series-${seriesType}.yAxisIndex) or [xAxisId](~series-${seriesType}.xAxisId) and [yAxisId](~series-${seriesType}.yAxisId) to assign the corresponding axis component.
{{ /if }}

{{ if: ${polar} }}
+ `'polar'`

    Use [polar coordinate system](~polar), with [polarIndex](~series-${seriesType}.polarIndex) or [polarId](~series-${seriesType}.polarId) to assign the corresponding polar coordinate system component.
{{ /if }}

{{ if: ${singleAxis} }}
+ `'singleAxis'`

    Use [singleAxis coordinate system](~singleAxis), with [singleAxisIndex](~series-${seriesType}.polarIndex) or [singleAxisId](~series-${seriesType}.polarId) to assign the corresponding `singleAxis` coordinate system component.
{{ /if }}

{{ if: ${geo} }}
+ `'geo'`

    Use [geographic coordinate system](~geo), with [geoIndex](~series-${seriesType}.geoIndex) or [geoId](~series-${seriesType}.geoId) to assign the corresponding geographic coordinate system components.
{{ /if }}

{{ if: ${parallel} }}
+ `'parallel'`

    Use [parallel coordinate system](~parallel), with [parallelIndex](~series-${seriesType}.parallelIndex) or [parallelId](~series-${seriesType}.parallelId) to assign the corresponding parallel coordinate system components.
{{ /if }}

{{ if: ${calendar} }}
+ `'calendar'`

    Use [calendar coordinate system](~calendar), with [calendarIndex](~series-${seriesType}.calendarIndex) or [calendarId](~series-${seriesType}.calendarId) to assign the corresponding calendar coordinate system components.
{{ /if }}

{{ if: ${matrix} }}
+ `'matrix'`

    Use [matrix coordinate system](~matrix), with [matrixIndex](~series-${seriesType}.matrixIndex) or [matrixId](~series-${seriesType}.matrixId) to assign the corresponding matrix coordinate system components.
{{ /if }}


{{ if: ${cartesian2d} }}
## xAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Index of [x axis](~xAxis) to combine with, which is useful for multiple x axes in one chart.

## xAxisId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Id of [x axis](~xAxis) to combine with, which is useful for multiple x axes in one chart.

## yAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Index of [y axis](~yAxis) to combine with, which is useful for multiple y axes in one chart.

## yAxisId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Id of [y axis](~yAxis) to combine with, which is useful for multiple y axes in one chart.
{{ /if }}

{{ if: ${polar} }}
## polarIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Index of [polar coordinate system](~polar) to combine with, which is useful for multiple polar axes in one chart.

## polarId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Id of [polar coordinate system](~polar) to combine with, which is useful for multiple polar axes in one chart.
{{ /if }}

{{ if: ${singleAxis} }}
## singleAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Index of [singleAxis coordinate system](~singleAxis) to combine with, which is useful for multiple singleAxis in one chart.

## singleAxisId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Id of [singleAxis coordinate system](~singleAxis) to combine with, which is useful for multiple singleAxis in one chart.
{{ /if }}

{{ if: ${geo} }}
## geoIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Index of [geographic coordinate system](~geo) to combine with, which is useful for multiple geographic axes in one chart.

## geoId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Id of [geographic coordinate system](~geo) to combine with, which is useful for multiple geographic axes in one chart.
{{ /if }}

{{ if: ${parallel} }}
## parallelIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Index of [parallel coordinate system](~parallel) to combine with, which is useful for multiple parallel axes in one chart.

## parallelId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Id of [parallel coordinate system](~parallel) to combine with, which is useful for multiple parallel axes in one chart.
{{ /if }}

{{ if: ${calendar} }}
## calendarIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Index of [calendar coordinate system](~calendar) to combine with, which is useful for multiple calendar coordinate system in one chart.

## calendarId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Id of [calendar coordinate system](~calendar) to combine with, which is useful for multiple calendar coordinate system in one chart.
{{ /if }}

{{ if: ${matrix} }}
## matrixIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Index of [matrix coordinate system](~matrix) to combine with, which is useful for multiple matrix coordinate system in one chart.

## matrixId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Id of [matrix coordinate system](~matrix) to combine with, which is useful for multiple matrix coordinate system in one chart.
{{ /if }}

