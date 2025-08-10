
{{ target: partial-coord-sys }}

{{ if: ${seriesType} }}
{{ var: componentNameInLink = 'series-' + ${seriesType} }}
{{ elif: ${nonSeriesComponentSubType} }}
{{ var: componentNameInLink = ${nonSeriesComponentMainType} + '-' + ${nonSeriesComponentSubType} }}
{{ else }}
{{ var: componentNameInLink = ${nonSeriesComponentMainType} }}
{{ /if }}

{{ if: ${coordSysUsageSupportData} == null }}
{{ if: ${seriesType} }}
{{ var: coordSysUsageSupportData = true }}
{{ /if }}
{{ /if }}

{{ if: ${coordSysUsageSupportBox} == null }}
{{ if: ${nonSeriesComponentMainType} }}
{{ var: coordSysUsageSupportBox = true }}
{{ /if }}
{{ /if }}

{{ if: ${coordSysUsageDefault} == null }}
{{ if: ${coordSysUsageSupportData} }}
{{ var: coordSysUsageDefault = "'data'" }}
{{ else }}
{{ var: coordSysUsageDefault = "'box'" }}
{{ /if }}
{{ /if }}


## coordinateSystem(string) = ${coordSysDefault}

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Specifies another coordinate system component on which this `${componentNameInLink}` is laid out.

Options:

{{ if: ${none} }}
+ `null`/`undefined`/`'none'`

    Not laid out in any coordinate system; instead, laid out independently.
{{ /if }}

{{ if: ${cartesian2d} }}
+ `'cartesian2d'`

    Lay out based on a two-dimensional [rectangular coordinate system (also known as Cartesian coordinate system)](~grid). When multiple `xAxis` or multiple `yAxis` exist within an ECharts instance, the corresponding axes should be specified using [xAxisIndex](~${componentNameInLink}.xAxisIndex) and [yAxisIndex](~${componentNameInLink}.yAxisIndex) or [xAxisId](~${componentNameInLink}.xAxisId) and [yAxisId](~${componentNameInLink}.yAxisId).

    Note: some commonly used series, such as [series-line](~series-line), [series-bar](~series-bar), etc., can not be laid out directly based on [matrix coordinate system](~matrix) or [calendar coordinate system](~calendar), but they can be laid out on a [grid(Cartesian)](~grid), and that [grid](~grid) can be laid out on a [matrix](~matrix) or [calendar](~calendar).
{{ /if }}

{{ if: ${polar} }}
+ `'polar'`

    Lay out based on a [polar coordinate system](~polar). When multiple polar coordinate systems exist within an ECharts instance, the corresponding system should be specified using [polarIndex](~${componentNameInLink}.polarIndex) or [polarId](~${componentNameInLink}.polarId).
{{ /if }}

{{ if: ${geo} }}
+ `'geo'`

    Lay out based on a [geographic coordinate system](~geo). When multiple geographic coordinate systems exist within an ECharts instance, the corresponding system should be specified using [geoIndex](~${componentNameInLink}.geoIndex) or [geoId](~${componentNameInLink}.geoId).{{ if: ${seriesType} === 'pie' }}

    See example [pie in geo](${galleryEditorPath}map-iceland-pie&edit=1&reset=1).{{ /if }}
{{ /if }}

{{ if: ${singleAxis} }}
+ `'singleAxis'`

    Lay out based on a [singleAxis coordinate system](~singleAxis). When multiple singleAxis coordinate systems exist within an ECharts instance, the corresponding system should be specified using [singleAxisIndex](~${componentNameInLink}.polarIndex) or [singleAxisId](~${componentNameInLink}.polarId).
{{ /if }}

{{ if: ${parallel} }}
+ `'parallel'`

    Lay out based on a [parallel coordinate system](~parallel). When multiple parallel coordinate systems exist within an ECharts instance, the corresponding system should be specified using [parallelIndex](~${componentNameInLink}.parallelIndex) or [parallelId](~${componentNameInLink}.parallelId).
{{ /if }}

{{ if: ${calendar} }}
+ `'calendar'`

    Lay out based on a [calendar coordinate system](~calendar). When multiple calendar coordinate systems exist within an ECharts instance, the corresponding system should be specified using [calendarIndex](~${componentNameInLink}.calendarIndex) or [calendarId](~${componentNameInLink}.calendarId).
{{ /if }}

{{ if: ${matrix} }}
+ `'matrix'`

    Lay out based on a [matrix coordinate system](~matrix). When multiple matrix coordinate systems exist within an ECharts instance, the corresponding system should be specified using [matrixIndex](~${componentNameInLink}.matrixIndex) or [matrixId](~${componentNameInLink}.matrixId).{{if: ${nonSeriesComponentMainType} === 'grid' }}

    See example [sparkline in matrix](${galleryEditorPath}matrix-sparkline&edit=1&reset=1).
    {{ /if }}
{{ /if }}


**Support for series and component layout on coordinate systems:**

The leftmost column lists the series and components that will be laid out (coordinate systems themselves are also components), and the topmost row lists the coordinate systems that can be laid out on.

|                              | no coord sys | [grid](~grid) (cartesian2d) | [polar](~polar) | [geo](~geo) | [singleAxis](~singleAxis) | [radar](~radar) | [parallel](~parallel) | [calendar](~calendar) | [matrix](~matrix) |
|------------------------------------------------|----------|----------|---------|----------|----------|----------|----------|
| [grid](~grid) (cartesian2d)                   | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [polar](~polar)                               | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [geo](~geo)                                   | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [singleAxis](~singleAxis)                     | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [calendar](~calendar)                         | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌        | ❌       |
| [matrix](~matrix)                             | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌        | ❌       |
| [series-line](~series-line)                   | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](~grid)) | ❌ (✅ if via another coord sys like [grid](~grid)) |
| [series-bar](~series-bar)                     | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](~grid)) | ❌ (✅ if via another coord sys like [grid](~grid)) |
| [series-pie](~series-pie)                     | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅        | ✅       |
| [series-scatter](~series-scatter)             | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅        | ✅       |
| [series-effectScatter](~series-effectScatter) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅        | ✅       |
| [series-radar](~series-radar)                 | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ (✅ if via [radar](~radar) coord sys) | ❌ (✅ if via [radar](~radar) coord sys) |
| [series-tree](~series-tree)                   | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-treemap](~series-treemap)             | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-sunburst](~series-sunburst)           | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-boxplot](~series-boxplot)             | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](~grid)) | ❌ (✅ if via another coord sys like [grid](~grid)) |
| [series-candlestick](~series-candlestick)     | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](~grid)) | ❌ (✅ if via another coord sys like [grid](~grid)) |
| [series-heatmap](~series-heatmap)             | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-map](~series-map)                     | ✅ (create a geo coord sys exclusively) | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-parallel](~series-parallel)           | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ (✅ if via [parallel](~parallel) coord sys) | ❌ (✅ if via [parallel](~parallel) coord sys) |
| [series-lines](~series-lines)                 | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ (✅ if via another coord sys like [geo](~geo)) | ❌ (✅ if via another coord sys like [geo](~geo)) |
| [series-graph](~series-graph)                 | ✅ (create a "view" coord sys exclusively) | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-sankey](~series-sankey)                 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-funnel](~series-funnel)                 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-gauge](~series-gauge)                 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-pictorialBar](~series-pictorialBar)   | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](~grid)) | ❌ (✅ if via another coord sys like [grid](~grid)) |
| [series-themeRiver](~series-themeRiver)       | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ (✅ if via another coord sys like [singleAxis](~singleAxis)) | ❌ (✅ if via another coord sys like [singleAxis](~singleAxis)) |
| [series-chord](~series-chord)                 | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅        | ✅       |
| [title](~title)                               | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [legend](~legend)                             | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [dataZoom](~dataZoom)                         | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [visualMap](~visualMap)                       | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [toolbox](~toolbox)                           | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [timeline](~timeline)                         | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [thumbnail](~thumbnail)                       | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |

See also [${componentNameInLink}.coordinateSystemUsage](~${componentNameInLink}.coordinateSystemUsage).


## coordinateSystemUsage(string) = ${coordSysUsageDefault}

{{ use: partial-version(version = ${version|minVersion('6.0.0')}) }}

Specify how to lay out this `${componentNameInLink}` based on the specified [coordinateSystem](~${componentNameInLink}.coordinateSystem).

In most cases, there is no need to specify `coordinateSystemUsage`, unless the default behavior is unexpected.

Options:
- `'data'`: {{ if: !${coordSysUsageSupportData} }}**(Not applicable in [${componentNameInLink}](~${componentNameInLink}))**{{ /if }}

    Each data item of a series (e.g., each `series.data[i]`) is laid out separately based on the specified coordinate system. Currently no non-series component supports `coordinateSystemUsage: 'data'`.

- `'box'`: {{ if: !${coordSysUsageSupportBox} }}**(Not applicable in [${componentNameInLink}](~${componentNameInLink}))**{{ /if }}

    The entire series or component is laid out as a whole based on the specified coordinate system - that is, the overall bounding rect or basic anchor point is calculated relative to the system.

    - For example, a [grid component](~grid) can be laid out in a [matrix coordinate system](~matrix) or a [calendar coordinate system](~calendar), where its layout rectangle is calculated by the specified [${componentNameInLink}.coords](~${componentNameInLink}.coords) in that system. See example [sparkline in matrix](${galleryEditorPath}matrix-sparkline&edit=1&reset=1).
    - For example, a [pie series](~series-pie) or a [chord series](~series-chord) can be laid out in a [geo coordinate system](~geo) or a [cartesian2d coordinate system](~grid), where the center is calculated by the specified [series-pie.coords](~series-pie.coords) or [series-pie.center](~series-pie.center) in that system. See example [pie in geo](${galleryEditorPath}map-iceland-pie&edit=1&reset=1).

{{ if: ${seriesType} }}
Only a few series support both `coordinateSystemUsage: 'data'` and `coordinateSystemUsage: 'box'`, such as [series-graph](~series-graph), [series-map](~series-map). For examle, in [this example (coordinateSystemUsage: 'data')](${galleryEditorPath}matrix-graph&edit=1&reset=1), each node of a graph series is laid out on a matrix coordinate system, while in [this example (coordinateSystemUsage: 'box')](${galleryEditorPath}doc-example/matrix-graph-box&edit=1&reset=1), the entire graph series is laid out within a matrix cell.

Most series only support `coordinateSystemUsage: 'data'` - such as [series-line](~series-line), [series-bar](~series-bar), [series-scatter](~series-scatter), etc. Meanwhile, some series only support `coordinateSystemUsage: 'box'` - such as [series-pie](~series-pie) ([example: pie in geo](${galleryEditorPath}map-iceland-pie&edit=1&reset=1)), [series-tree](~series-pie), [series-treemap](~series-treemap), [series-sankey](~series-sankey), etc.
{{ /if }}

See also [${componentNameInLink}.coordinateSystem](~${componentNameInLink}.coordinateSystem).

## coord(Array|number|string)

{{ use: partial-version(version = ${version|minVersion('6.0.0')}) }}

When [coordinateSystemUsage](~${componentNameInLink}.coordinateSystemUsage) is `'box'`, `coord` is used as the input to the coordinate system and calculate the layout rectangle or anchor point.

Examples: [sparkline in matrix](${galleryEditorPath}matrix-sparkline&edit=1&reset=1), [grpah in matrix](${galleryEditorPath}doc-example/matrix-graph-box&edit=1&reset=1).

{{ if: ${seriesType} === 'pie' }}
[series-pie.center](~series-pie.center) and [series-pie.coord](~series-pie.coord) can be used interchangably in this case.

[example: pie in geo](${galleryEditorPath}map-iceland-pie&edit=1&reset=1)
{{ /if }}

> Note: when [coordinateSystemUsage](~${componentNameInLink}.coordinateSystemUsage) is `'data'`, the input of coordinate system is `series.data[i]` rather than this `coord`.

The format this `coord` is defined by each coordinate system, and it's the same as the second parameter of [chart.convertToPixel](api.html#echartsInstance.convertToPixel).


{{ if: ${cartesian2d} }}
## xAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The index of the [xAxis](~xAxis) to base on. When mutiple `xAxis` components exist within an ECharts instance, use this to specify the corresponding `xAxis`.

## xAxisId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The id of the [xAxis](~xAxis) to base on. When mutiple `xAxis` components exist within an ECharts instance, use this to specify the corresponding `xAxis`.

## yAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The index of the [yAxis](~yAxis) to base on. When mutiple `yAxis` components exist within an ECharts instance, use this to specify the corresponding `yAxis`.

## yAxisId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The index of the [yAxis](~yAxis) to base on. When mutiple `yAxis` components exist within an ECharts instance, use this to specify the corresponding `yAxis`.
{{ /if }}

{{ if: ${polar} }}
## polarIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The index of the [polar coordinate system](~polar) to base on. When mutiple `polar` exist within an ECharts instance, use this to specify the corresponding `polar`.

## polarId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The id of the [polar coordinate system](~polar) to base on. When mutiple `polar` exist within an ECharts instance, use this to specify the corresponding `polar`.
{{ /if }}

{{ if: ${singleAxis} }}
## singleAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The index of the [singleAxis coordinate system](~singleAxis) to base on. When mutiple `singleAxis` exist within an ECharts instance, use this to specify the corresponding `singleAxis`.

## singleAxisId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The id of the [singleAxis coordinate system](~singleAxis) to base on. When mutiple `singleAxis` exist within an ECharts instance, use this to specify the corresponding `singleAxis`.
{{ /if }}

{{ if: ${geo} }}
## geoIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The index of the [geographic coordinate system](~geo) to base on. When mutiple `geographic` exist within an ECharts instance, use this to specify the corresponding `geographic`.

{{ if: ${seriesType} === 'map' }}
When `geoIndex` and `geoId` is not specified, map series creates an exclusive `geo` component for itself. `geoIndex` or `geoId` can be used to specify an outer [geo component](~geo), which can be shared with other series like [pie](~series-pie). Moreover, the region color of the outer [geo component](~geo) can be controlled by the map series (via [visualMap](~visualMap)).

When `geoIndex` or `geoId` is specified, [series-map.map](~series-map.map) other style configurations like [series-map.itemStyle](~series-map.itemStyle) will not work, but corresponding configurations in [geo component](~geo) will be used.
{{ /if }}

**See example**: [geo-choropleth-scatter](${galleryEditorPath}geo-choropleth-scatter&reset=1&edit=1)

## geoId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version|minVersion('6.0.0')}) }}
{{ /if }}

The id of the [geographic coordinate system](~geo) to base on. When mutiple `geographic` exist within an ECharts instance, use this to specify the corresponding `geographic`.

{{ if: ${seriesType} === 'map' }}
When `geoIndex` and `geoId` is not specified, map series creates an exclusive `geo` component for itself. `geoIndex` or `geoId` can be used to specify an outer [geo component](~geo), which can be shared with other series like [pie](~series-pie). Moreover, the region color of the outer [geo component](~geo) can be controlled by the map series (via [visualMap](~visualMap)).

When `geoIndex` or `geoId` specified, [series-map.map](~series-map.map) other style configurations like [series-map.itemStyle](~series-map.itemStyle) will not work, but corresponding configurations in [geo component](~geo) will be used.
{{ /if }}

**See example**: [geo-choropleth-scatter](${galleryEditorPath}geo-choropleth-scatter&reset=1&edit=1)
{{ /if }}

{{ if: ${parallel} }}
## parallelIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The index of the [parallel coordinate system](~parallel) to base on. When mutiple `parallel` exist within an ECharts instance, use this to specify the corresponding `parallel`.

## parallelId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The id of the [parallel coordinate system](~parallel) to base on. When mutiple `parallel` exist within an ECharts instance, use this to specify the corresponding `parallel`.
{{ /if }}

{{ if: ${calendar} }}
## calendarIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The index of the [calendar coordinate system](~calendar) to base on. When mutiple `calendar` exist within an ECharts instance, use this to specify the corresponding `calendar`.

## calendarId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The id of the [calendar coordinate system](~calendar) to base on. When mutiple `calendar` exist within an ECharts instance, use this to specify the corresponding `calendar`.
{{ /if }}

{{ if: ${matrix} }}
## matrixIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The index of the [matrix coordinate system](~matrix) to base on. When mutiple `matrix` exist within an ECharts instance, use this to specify the corresponding `matrix`.

## matrixId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

The id of the [matrix coordinate system](~matrix) to base on. When mutiple `matrix` exist within an ECharts instance, use this to specify the corresponding `matrix`.
{{ /if }}

