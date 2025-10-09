{{ target: component-thumbnail }}

# thumbnail(Object)

{{ use: partial-version(version = "6.0.0") }}

Thumbnail component.

Currently it only supports [series.graph](~series-graph).

Examples: [graph NPM](${galleryEditorPath}graph-npm&edit=1&reset=1), [graph Webkit dep](${galleryEditorPath}graph-webkit-dep&edit=1&reset=1).


{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

Whether to display the thumbnail component.

{{ use: partial-rect-layout-width-height(
    componentName = "thumbnail",
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

The style of the box and background of the thumbnail.

{{ use: partial-item-style(
    prefix = '##',
    defaultBorderColor = "'#b7b9be'",
    defaultBorderWidth = 2
) }}

## windowStyle(Object)

{{ use: partial-version(version = "6.0.0") }}

The style of the window of the thumbnail.

{{ use: partial-item-style(
    prefix = '##',
    defaultColor = "'#9ea0a5'",
    defaultBorderColor = "'#b7b9be'",
    defaultBorderWidth = 1,
    defaultOpacity = 0.3
) }}

## seriesIndex(number)

{{ use: partial-version(version = "6.0.0") }}

Specify which series this thumbnail is for. Use the first [series.graph](~series-graph) by default.

## seriesId(string|number)

{{ use: partial-version(version = "6.0.0") }}

Specify which series this thumbnail is for. Use the first [series.graph](~series-graph) by default.


{{ /target }}
