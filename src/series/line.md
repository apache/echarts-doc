{{target:series-line}}

# series.line(Object)

**折线图**

折线图是用折线将各个数据点[标志](~series-line.symbol)连接起来的图表，用于展现数据的变化趋势。可用于[直角坐标系](~grid)和[极坐标系](~polar)上。

**Tip:** 设置 [areaStyle](~series-line.areaStyle) 后可以绘制面积图。

## type(string) = 'line'

{{ use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=false
) }}

{{ use:partial-symbol(
    seriesType="scatter",
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="#",
    enableCallback=true
) }}

## showSymbol(boolean) = true
是否显示 symbol, 只有在 tooltip hover 的时候显示。

## showAllSymbol(boolean) = false
标志图形默认只有主轴显示（随主轴标签间隔隐藏策略），如需全部显示可把 showAllSymbol 设为 `true`。

## hoverAnimation(boolean) = true
是否开启 hover 在拐点标志上的提示动画效果。

{{ use: partial-legend-hover-link }}

## stack(string) = null
数据堆叠，同个类目轴上系列配置相同的`stack`值可以堆叠放置。

下面示例可以通过右上角 [toolbox](~toolbox) 中的堆叠切换看效果：

~[600x400](${galleryViewPath}doc-example/line-stack-tiled&edit=1&reset=1)

## label(Object)
{{use: partial-label-desc}}
### normal(Object)
{{use: partial-label(
    prefix="###",
    defaultPosition="'top'",
    formatter=true
)}}
### emphasis(Object)
{{use: partial-label(
    prefix="###",
    formatter=true
)}}

## itemStyle(Object)
折线拐点标志的样式。
### normal(Object)
{{use: partial-item-style(prefix="###",useColorPalatte=true)}}
### emphasis(Object)
{{use: partial-item-style(prefix="###")}}

## lineStyle(Object)
### normal(Object)
{{use:partial-line-style(prefix="###")}}
### emphasis(Object)
{{use: partial-line-style(prefix="###")}}

## areaStyle(Object)
区域填充样式。
### normal(Object)
{{use: partial-area-style(prefix="###")}}
### emphasis(Object)
{{use: partial-area-style(prefix="###")}}

## smooth(false) = false
是否平滑曲线显示。

## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### value(number)
单个数据项的数值。

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="##",
    name="单个数据"
) }}

### label(Object)
单个拐点文本的样式设置。
#### normal(Object)
{{ use: partial-label(
    prefix="####",
    defaultPosition="top"
) }}
#### emphasis(Object)
{{ use: partial-label(prefix="####") }}

### itemStyle(Object)
单个拐点标志的样式设置。
#### normal(Object)
{{use: partial-bar-item-style(prefix="####")}}
#### emphasis(Object)
{{use: partial-bar-item-style(prefix="####")}}

{{use: partial-mark-point(
    prefix="#",
    seriesType="line",
    hasCoord=true,
    hasType=true
)}}

{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing='linear'
)}}
