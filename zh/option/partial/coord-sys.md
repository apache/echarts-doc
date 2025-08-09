
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

指定另一个坐标系组件，本 `${componentNameInLink}` 布局在那个坐标系中。

可选值：

{{ if: ${none} }}
+ `null`、`undefined` 或者 `'none'`

    不布局在任何坐标系中。自己独立完成布局。
{{ /if }}

{{ if: ${cartesian2d} }}
+ `'cartesian2d'`

    布局在一个二维 [直角坐标系（也称笛卡尔坐标系）](~grid) 中。当一个 ECharts 实例中存在多个 x 坐标轴（`xAxis`）时或者多个 y 坐标轴（`yAxis`）时，须通过 [xAxisIndex](~${componentNameInLink}.xAxisIndex) 和 [yAxisIndex](~${componentNameInLink}.yAxisIndex) 或者 [xAxisId](~${componentNameInLink}.xAxisId) 和 [yAxisId](~${componentNameInLink}.yAxisId) 指定所使用的坐标轴。

    注：一些常用的系列，例如 [折线图（series-line）](~series-line), [柱状图（series-bar）](~series-bar) 等，不能直接布局于 [矩阵坐标系（matrix）](~matrix) 或者 [日历坐标系（calendar）](~calendar) 中，但是他们能布局在 [直角坐标系（grid）](~grid) 中，然后这个 [直角坐标系（grid）](~grid) 可以布局在 [矩阵坐标系（matrix）](~matrix) 或 [日历坐标系（calendar）](~calendar) 中。
{{ /if }}

{{ if: ${polar} }}
+ `'polar'`

    布局在一个 [极坐标系](~polar) 中。当一个 ECharts 实例中存在多个极坐标系时，须通过 [polarIndex](~${componentNameInLink}.polarIndex) 或 [polarId](~${componentNameInLink}.polarId) 指定所使用的极坐标系。
{{ /if }}

{{ if: ${geo} }}
+ `'geo'`

    布局在一个 [地理坐标系](~geo) 中。当一个 ECharts 实例中存在多个地理坐标系时，须通过 [geoIndex](~${componentNameInLink}.geoIndex) 或 [geoId](~${componentNameInLink}.geoId) 指定所使用的地理坐标系。{{ if: ${seriesType} === 'pie' }}

    参见示例 [地理坐标系中的饼图](${galleryEditorPath}map-iceland-pie&edit=1&reset=1)。{{ /if }}
{{ /if }}

{{ if: ${singleAxis} }}
+ `'singleAxis'`

    布局在一个 [单轴坐标系](~singleAxis) 中。当一个 ECharts 实例中存在多个单轴坐标系时，须通过 [singleAxisIndex](~${componentNameInLink}.singleAxisIndex) 或 [singleAxisId](~${componentNameInLink}.singleAxisId) 指定所使用的单轴标系。
{{ /if }}

{{ if: ${parallel} }}
+ `'parallel'`

    布局在一个 [平行坐标系](~parallel) 中。当一个 ECharts 实例中存在多个平行坐标系时，须通过 [parallelIndex](~${componentNameInLink}.parallelIndex) 或 [parallelId](~${componentNameInLink}.parallelId) 指定所使用的平行坐标系。
{{ /if }}

{{ if: ${calendar} }}
+ `'calendar'`

    布局在一个 [日历坐标系](~calendar) 中。当一个 ECharts 实例中存在多个日历坐标系时，须通过 [calendarIndex](~${componentNameInLink}.calendarIndex) 或 [calendarId](~${componentNameInLink}.calendarId) 指定所使用的日历坐标系。
{{ /if }}

{{ if: ${matrix} }}
+ `'matrix'`

    布局在一个 [矩阵坐标系](~matrix)中。当一个 ECharts 实例中存在多个矩阵坐标系时，须通过 [matrixIndex](~${componentNameInLink}.matrixIndex) 或 [matrixId](~${componentNameInLink}.matrixId) 指定所使用的矩阵坐标系。{{if: ${nonSeriesComponentMainType} === 'grid' }}

    参见示例 [矩阵坐标系中的微型折线图](${galleryEditorPath}matrix-sparkline&edit=1&reset=1)。
    {{ /if }}
{{ /if }}


**下表总结了“某系列或组件是否支持布局在某坐标系上”：**

最左列列出了要布局的系列和组件（坐标系本身也是组件），最上行列出了所基于的坐标系。

|                              | no coord sys | [grid](~grid) (cartesian2d) | [polar](~polar) | [geo](~geo) | [singleAxis](~singleAxis) | [radar](~radar) | [parallel](~parallel) | [calendar](~calendar) | [matrix](~matrix) |
|------------------------------------------------|----------|----------|---------|----------|----------|----------|----------|
| [grid](~grid) (cartesian2d)                   | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [polar](~polar)                               | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [geo](~geo)                                   | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [singleAxis](~singleAxis)                     | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [calendar](~calendar)                         | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [matrix](~matrix)                             | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-line](~series-line)                   | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [grid](~grid)) | ❌ (✅ 如果通过其他坐标系，如 [grid](~grid)) |
| [series-bar](~series-bar)                     | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [grid](~grid)) | ❌ (✅ 如果通过其他坐标系，如 [grid](~grid)) |
| [series-pie](~series-pie)                     | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅        | ✅       |
| [series-scatter](~series-scatter)             | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅        | ✅       |
| [series-effectScatter](~series-effectScatter) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅        | ✅       |
| [series-radar](~series-radar)                 | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ (✅ 如果通过 [radar](~radar) 坐标系) | ❌ (✅ 如果通过 [radar](~radar) 坐标系) |
| [series-tree](~series-tree)                   | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-treemap](~series-treemap)             | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-sunburst](~series-sunburst)           | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-boxplot](~series-boxplot)             | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [grid](~grid)) | ❌ (✅ 如果通过其他坐标系，如 [grid](~grid)) |
| [series-candlestick](~series-candlestick)     | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [grid](~grid)) | ❌ (✅ 如果通过其他坐标系，如 [grid](~grid)) |
| [series-heatmap](~series-heatmap)             | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-map](~series-map)                     | ✅ (create a geo coord sys exclusively) | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-parallel](~series-parallel)           | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ (✅ 如果通过 [parallel](~parallel) 坐标系) | ❌ (✅ 如果通过 [parallel](~parallel) 坐标系) |
| [series-lines](~series-lines)                 | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [geo](~geo)) | ❌ (✅ 如果通过其他坐标系，如 [geo](~geo)) |
| [series-graph](~series-graph)                 | ✅ (create a "view" coord sys exclusively) | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-sankey](~series-sankey)                 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-funnel](~series-funnel)                 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-gauge](~series-gauge)                 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [series-pictorialBar](~series-pictorialBar)   | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [grid](~grid)) | ❌ (✅ 如果通过其他坐标系，如 [grid](~grid)) |
| [series-themeRiver](~series-themeRiver)       | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [singleAxis](~singleAxis)) | ❌ (✅ 如果通过其他坐标系，如 [singleAxis](~singleAxis)) |
| [series-chord](~series-chord)                 | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅        | ✅       |
| [title](~title)                               | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [legend](~legend)                             | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [dataZoom](~dataZoom)                         | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [visualMap](~visualMap)                       | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [toolbox](~toolbox)                           | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [timeline](~timeline)                         | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |
| [thumbnail](~thumbnail)                       | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅        | ✅       |

也参见 [${componentNameInLink}.coordinateSystemUsage](~${componentNameInLink}.coordinateSystemUsage)。


## coordinateSystemUsage(string) = ${coordSysUsageDefault}

{{ use: partial-version(version = ${version|minVersion('6.0.0')}) }}

如何在指定的 [坐标系](~${componentNameInLink}.coordinateSystem) 上布局本 `${componentNameInLink}`。

在大多数情况下，无需显式指定 `coordinateSystemUsage`，除非默认行为不符合预期。

可选值：
- `'data'`：{{ if: !${coordSysUsageSupportData} }}**（不适用于 [${componentNameInLink}](~${componentNameInLink})）**{{ /if }}

    此系列的每个数据项（例如，每个 `series.data[i]`）将独立地在指定的坐标系进行布局。
  注：当前没有任何“非系列组件”支持 `coordinateSystemUsage: 'data'`。

- `'box'`：{{ if: !${coordSysUsageSupportBox} }}**（不适用于 [${componentNameInLink}](~${componentNameInLink})）**{{ /if }}

    此系列或组件作为一个整体，在指定的坐标系中进行布局——即根据坐标系计算整体的包围盒或基础锚点。

    - 例如，[grid 组件](~grid) 可以布局在 [matrix 坐标系](~matrix) 或 [calendar 坐标系](~calendar) 中，这时其布局矩形是由 [${componentNameInLink}.coords](~${componentNameInLink}.coords) 在坐标系中计算出来的。参见示例：[矩阵中的微型折线图](${galleryEditorPath}matrix-sparkline&edit=1&reset=1)。
    - 又如，[饼图系列](~series-pie) 或 [和弦图系列](~series-chord) 可以布局在 [geo 坐标系](~geo) 或 [cartesian2d 坐标系](~grid) 中，这时其中心点是由 [series-pie.coords](~series-pie.coords) 或 [series-pie.center](~series-pie.center) 在坐标系中计算出来的。参见示例：[地理坐标系中的饼图](${galleryEditorPath}map-iceland-pie&edit=1&reset=1)。

{{ if: ${seriesType} }}
只有少数系列同时支持 `coordinateSystemUsage: 'data'` 和 `coordinateSystemUsage: 'box'`，如：[series-graph](~series-graph)、[series-map](~series-map)。例如，在 [例子 coordinateSystemUsage: 'data'](${galleryEditorPath}matrix-graph&edit=1&reset=1) 中，关系图每个节点分别布局在矩阵坐标系中，而在 [例子 coordinateSystemUsage: 'box'](${galleryEditorPath}doc-example/matrix-graph-box&edit=1&reset=1) 中，关系图系列整体被布局在一个单元格中。

大多数系列仅支持 `coordinateSystemUsage: 'data'`，例如：[series-line](~series-line)、[series-bar](~series-bar)、[series-scatter](~series-scatter)。

同时，一些系列仅支持 `coordinateSystemUsage: 'box'`，例如：[series-pie](~series-pie)（示例：[地理坐标系中的饼图](${galleryEditorPath}map-iceland-pie&edit=1&reset=1)）、[series-tree](~series-tree)、[series-treemap](~series-treemap)、[series-sankey](~series-sankey)。
{{ /if }}

另参考：[${componentNameInLink}.coordinateSystem](~${componentNameInLink}.coordinateSystem)。

## coord(Array|string)

{{ use: partial-version(version = ${version|minVersion('6.0.0')}) }}

当 [coordinateSystemUsage](~${componentNameInLink}.coordinateSystemUsage) 为 `'box'` 时, `coord` 被输入给坐标系，计算得到布局位置（布局盒或者中心点）。

例子：[矩阵中的微型折线图](${galleryEditorPath}matrix-sparkline&edit=1&reset=1), [矩阵中的关系图](${galleryEditorPath}doc-example/matrix-graph-box&edit=1&reset=1).

{{ if: ${seriesType} === 'pie' }}
在此场景下，[series-pie.center](~series-pie.center) 和 [series-pie.coord](~series-pie.coord) 起同样作用。

[例子：地理坐标系中的饼图](${galleryEditorPath}map-iceland-pie&edit=1&reset=1)
{{ /if }}

> 注：当 [coordinateSystemUsage](~${componentNameInLink}.coordinateSystemUsage) 为 `'data'` 时，输入给坐标系的是 `series.data[i]` 而非此 `coord`。


{{ if: ${cartesian2d} }}
## xAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [x 轴](~xAxis) 的 index。当一个 ECharts 实例中存在多个 x 轴时，用其指定所使用的 x 轴。

## xAxisId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [x 轴](~xAxis) 的 id。当一个 ECharts 实例中存在多个 x 轴时，用其指定所使用的 x 轴。

## yAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [y 轴](~yAxis) 的 index。当一个 ECharts 实例中存在多个 y轴时，用其指定所使用的 y 轴。

## yAxisId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [y 轴](~yAxis) 的 id。当一个 ECharts 实例中存在多个 y轴时，用其指定所使用的 x 轴。
{{ /if }}

{{ if: ${polar} }}
## polarIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [极坐标系](~polar) 的 index。当一个 ECharts 实例中存在多个极坐标系时，用其指定所使用的坐标系。

## polarId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [极坐标系](~polar) 的 id。当一个 ECharts 实例中存在多个极坐标系时，用其指定所使用的坐标系。
{{ /if }}

{{ if: ${singleAxis} }}
## singleAxisIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [单轴标系](~singleAxis) 的 index。当一个 ECharts 实例中存在多个单轴坐标系时，用其指定所使用的坐标系。

## singleAxisId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [单轴标系](~singleAxis) 的 id。当一个 ECharts 实例中存在多个单轴坐标系时，用其指定所使用的坐标系。
{{ /if }}

{{ if: ${geo} }}
## geoIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [地理坐标系](~geo) 的 index。当一个 ECharts 实例中存在多个地理坐标系时，用其指定所使用的坐标系。

{{ if: ${seriesType} === 'map' }}
当没有指定 `geoIndex` 和 `geoId` 时，map 系列会为自身创建一个独享的 `geo` 组件。但也可以通过 `geoIndex` 或 `geoId` 指定一个外部的 [geo 组件](~geo)，从而与其他系列（如 [pie](~series-pie)）共享该坐标系。此外，外部 [geo 组件](~geo) 的区域颜色也可以由 map 系列通过 [visualMap](~visualMap) 控制。

当指定了 `geoIndex` 或 `geoId` 时，[series-map.map](~series-map.map) 以及诸如 [series-map.itemStyle](~series-map.itemStyle) 等样式配置将不再生效，而会采用 [geo 组件](~geo) 中对应的配置。
{{ /if }}

**参见示例**: [geo-choropleth-scatter](${galleryEditorPath}geo-choropleth-scatter&reset=1&edit=1)

## geoId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version|minVersion('6.0.0')}) }}
{{ /if }}

布局时所基于的 [地理坐标系](~geo) 的 id。当一个 ECharts 实例中存在多个地理坐标系时，用其指定所使用的坐标系。

{{ if: ${seriesType} === 'map' }}
当没有指定 `geoIndex` 和 `geoId` 时，map 系列会为自身创建一个独享的 `geo` 组件。但也可以通过 `geoIndex` 或 `geoId` 指定一个外部的 [geo 组件](~geo)，从而与其他系列（如 [pie](~series-pie)）共享该坐标系。此外，外部 [geo 组件](~geo) 的区域颜色也可以由 map 系列通过 [visualMap](~visualMap) 控制。

当指定了 `geoIndex` 或 `geoId` 时，[series-map.map](~series-map.map) 以及诸如 [series-map.itemStyle](~series-map.itemStyle) 等样式配置将不再生效，而会采用 [geo 组件](~geo) 中对应的配置。
{{ /if }}

**参见示例**: [geo-choropleth-scatter](${galleryEditorPath}geo-choropleth-scatter&reset=1&edit=1)
{{ /if }}

{{ if: ${parallel} }}
## parallelIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [平行坐标系](~parallel) 的 index。当一个 ECharts 实例中存在多个平行坐标系时，用其指定所使用的坐标系。

## parallelId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [平行坐标系](~parallel) 的 id。当一个 ECharts 实例中存在多个平行坐标系时，用其指定所使用的坐标系。
{{ /if }}

{{ if: ${calendar} }}
## calendarIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [日历坐标系](~calendar) 的 index。当一个 ECharts 实例中存在多个日历坐标系时，用其指定所使用的坐标系。

## calendarId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [日历坐标系](~calendar) 的 id。当一个 ECharts 实例中存在多个日历坐标系时，用其指定所使用的坐标系。
{{ /if }}

{{ if: ${matrix} }}
## matrixIndex(number) = 0

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [矩阵坐标系](~matrix) 的 index。当一个 ECharts 实例中存在多个矩阵坐标系时，用其指定所使用的坐标系。

## matrixId(number) = undefined

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

布局时所基于的 [矩阵坐标系](~matrix) 的 id。当一个 ECharts 实例中存在多个矩阵坐标系时，用其指定所使用的坐标系。
{{ /if }}

