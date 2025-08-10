{{ target: component-thumbnail }}

# thumbnail(Object)

{{ use: partial-version(version = "6.0.0") }}

缩略图组件。

现在仅支持用在 [关系图系列（series.graph）](~series-graph) 上。

示例：[graph NPM](${galleryEditorPath}graph-npm&edit=1&reset=1)、[graph Webkit dep](${galleryEditorPath}graph-webkit-dep&edit=1&reset=1)。


{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

是否显示缩略图组件。

{{ use: partial-rect-layout-width-height(
    componentName = "缩略图组件（thumbnail）",
    defaultLeft = "25%",
    defaultTop = "25%"
) }}

{{ use: partial-coord-sys(
    version = '6.0.0',
    nonSeriesComponentMainType = "thumbnail",
    coordSysDefault = "'none'",
    matrix = true,
    calendar = true,
    none = true
) }}

## itemStyle(Object)

{{ use: partial-version(version = "6.0.0") }}

外壳的样式。

{{ use: partial-item-style(
    prefix = '##',
    defaultBorderColor = "'#b7b9be'",
    defaultBorderWidth = 2
) }}

## windowStyle(Object)

{{ use: partial-version(version = "6.0.0") }}

缩略图窗口的样式。

{{ use: partial-item-style(
    prefix = '##',
    defaultColor = "'#9ea0a5'",
    defaultBorderColor = "'#b7b9be'",
    defaultBorderWidth = 1,
    defaultOpacity = 0.3
) }}

## seriesIndex(number)

{{ use: partial-version(version = "6.0.0") }}

指定此缩略图作用在哪个系列上。默认取第一个 [关系图系列（series.graph）](~series-graph)。

## seriesId(string|number)

{{ use: partial-version(version = "6.0.0") }}

指定此缩略图作用在哪个系列上。默认取第一个 [关系图系列（series.graph）](~series-graph)。

{{ /target }}
