
{{ target: partial-coord-sys }}

## coordinateSystem(string) = ${coordSysDefault}

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

该系列使用的坐标系，可选：

{{ if: ${none} }}
+ `null` 或者 `'none'`

    无坐标系。
{{ /if }}

{{ if: ${cartesian2d} }}
+ `'cartesian2d'`

    使用二维的直角坐标系（也称笛卡尔坐标系），通过 [xAxisIndex](~series-${seriesType}.xAxisIndex), [yAxisIndex](~series-${seriesType}.yAxisIndex)指定相应的坐标轴组件。
{{ /if }}

{{ if: ${polar} }}
+ `'polar'`

    使用极坐标系，通过 [polarIndex](~series-${seriesType}.polarIndex) 指定相应的极坐标组件
{{ /if }}

{{ if: ${geo} }}
+ `'geo'`

    使用地理坐标系，通过 [geoIndex](~series-${seriesType}.geoIndex) 指定相应的地理坐标系组件。
{{ /if }}

{{ if: ${parallel} }}
+ `'parallel'`

    使用平行坐标系，通过 [parallelIndex](~series-${seriesType}.parallelIndex) 指定相应的平行坐标系组件。
{{ /if }}

{{ if: ${calendar} }}
+ `'calendar'`

    使用日历坐标系，通过 [calendarIndex](~series-${seriesType}.calendarIndex) 指定相应的日历坐标系组件。
{{ /if }}

{{ if: ${none} }}
+ `'none'`

    不使用坐标系。
{{ /if }}

{{ if: ${cartesian2d} }}
## xAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

使用的 [x 轴](~xAxis)的 index，在单个图表实例中存在多个 x 轴的时候有用。

## yAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

使用的 [y 轴](~yAxis)的 index，在单个图表实例中存在多个 y轴的时候有用。
{{ /if }}

{{ if: ${polar} }}
## polarIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

使用的[极坐标系](~polar)的 index，在单个图表实例中存在多个极坐标系的时候有用。
{{ /if }}

{{ if: ${geo} }}
## geoIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

使用的[地理坐标系](~geo)的 index，在单个图表实例中存在多个地理坐标系的时候有用。
{{ /if }}

{{ if: ${parallel} }}
## parallelIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

使用的[平行坐标系](~parallel)的 index，在单个图表实例中存在多个平行坐标系的时候有用。
{{ /if }}

{{ if: ${calendar} }}
## calendarIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

使用的[日历坐标系](~calendar)的 index，在单个图表实例中存在多个日历坐标系的时候有用。
{{ /if }}

