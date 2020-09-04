
{{ target: series-bar }}

# series.bar(Object)

**bar chart**

Bar chart shows different data through the height of a bar, which is used in [rectangular coordinate](~grid) with at least 1 category axis.

## type(string) = 'bar'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType = "bar",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = false,
    geo = false
) }}

## roundCap(boolean) = false

{{ use: partial-version(
    version = "4.5.0"
) }}

If to add round caps at the end of the bar sectors. Valid only for bar series on polar coordinates.

~[800x500](${galleryViewPath}polar-roundCap&reset=1&edit=1)

## showBackground(boolean) = false

{{ use: partial-version(
    version = "4.7.0"
) }}

Whether to show background behind each bar. Use [backgroundStyle](~series-bar.backgroundStyle) to set background style.

~[800x400](${galleryViewPath}bar-background&reset=1&edit=1)

## backgroundStyle(Object)

{{ use: partial-version(
    version = "4.7.0"
) }}

Background style of each bar if [showBackground](~series-bar.showBackground) is set to be `true`.

~[800x400](${galleryViewPath}bar-background&reset=1&edit=1)

{{ use: partial-bar-item-style(
    prefix = "##",
    useColorPalatte = false,
    hasCallback = true,
    defaultColor = "'rgba(180, 180, 180, 0.2)'"
) }}

{{ use: partial-bar-state(
    prefix = "#",
    topLevel = true,
    isNormal = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## emphasis(Object)

高亮的图形样式和标签样式。

{{ use: partial-focus-blur-scope() }}

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    isNormal = false
) }}

## blur(Object)

淡出时的图形样式和标签样式。开启 [emphasis.focus](~series-bar.emphasis.focus) 后有效

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    isNormal = false
) }}

## select(Object)

数据选中时的图形样式和标签样式。开启 [selectedMode](~series-bar.selectedMode) 后有效。

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = true,
    isNormal = false
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## stack(string) = null

Name of stack. On the same category axis, the series with the same `stack` name would be put on top of each other.

{{ use: partial-cursor() }}

{{ use: partial-barGrid(
    seriesType = 'bar'
) }}

{{ use: partial-large(
    prefix = "#",
    defaultLargeThreshold = 400
) }}

{{ use: partial-progressive(
    prefix = '#',
    supportProgressiveChunkMode = true,
    defaultProgressive = 5000,
    defaultProgressiveChunkMode = 'mod'
) }}

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

{{ use: partial-seriesLayoutBy() }}

{{ use: partial-datasetIndex() }}

## data(Array)

{{ use: partial-2d-data-desc() }}

### name(string)

The name of data item.

### value(number)

The value of a single data item.

{{ use: partial-bar-state(
    prefix = "##",
    topLevel = false,
    isNormal = true
) }}

### emphasis(Object)

单个数据的高亮状态配置。

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    isNormal = false
) }}

### blur(Object)

单个数据的淡出状态配置。

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    isNormal = false
) }}

### select(Object)

单个数据的选中状态配置。

{{ use: partial-bar-state(
    prefix = "###",
    topLevel = false,
    isNormal = false
) }}

{{ use: partial-clip(
    prefix = "#"
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "柱状图"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-bar-state }}

#${prefix} label(Object)

{{ if: ${topLevel} }}
{{ use: partial-label-desc() }}
{{ else }}
单个数据的文本配置。
{{ /if }}

{{ use: partial-label(
    prefix = "#" + ${prefix},
    defaultPosition = "'inside'",
    formatter = ${topLevel}
) }}

#${prefix} itemStyle(Object)

{{ if: ${topLevel} }}
{{ use: partial-item-style-desc() }}
{{ else }}
单个数据的图形样式设置。
{{ /if }}

{{ use: partial-bar-item-style(
    prefix = "#" + ${prefix},
    useColorPalatte = ${topLevel && isNormal},
    hasCallback = ${topLevel && isNormal}
) }}



{{ target: partial-bar-item-style }}

#${prefix} color(Color) = ${defaultColor|default('auto')}

Bar color. {{ if: ${useColorPalatte} }} By default, colors from global palette [option.color](~color) is used. {{ /if }}

#${prefix} borderColor(Color) = '#000'

The border color of bar.

#${prefix} borderWidth(number) = 0

The border width of bar. defaults to have no border.

#${prefix} borderType(string) = 'solid'

柱条的描边类型，默认为实线，支持 `'dashed'`, `'dotted'`。

{{ use: partial-border-radius(
    prefix = ${prefix}
) }}

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix}
) }}

