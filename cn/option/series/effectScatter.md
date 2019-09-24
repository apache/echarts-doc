
{{target: series-effectScatter}}

# series.effectScatter(Object)

带有涟漪特效动画的散点（气泡）图。利用动画特效可以将某些想要突出的数据进行视觉突出。

**Tip:** ECharts 2.x 中在地图上通过 markPoint 实现地图特效在 ECharts 3 中建议通过地理坐标系上的 effectScatter 实现。

## type(string) = 'effectScatter'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

## effectType(string) = 'ripple'
特效类型，目前只支持涟漪特效`'ripple'`。

## showEffectOn(string) = 'render'
配置何时显示特效。

**可选：**
+ `'render'` 绘制完成后显示特效。
+ `'emphasis'` 高亮（hover）的时候显示特效。

## rippleEffect(Object)
涟漪特效相关配置。
### color(string)
涟漪的颜色，默认为散点的颜色。
### period(number) = 4
动画的周期，秒数。
### scale(number) = 2.5
动画中波纹的最大缩放比例。
### brushType(string) = 'fill'
波纹的绘制方式，可选 `'stroke'` 和 `'fill'`。

{{use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=true,
    calendar=true
)}}

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    prefix="#"
) }}

{{ use: partial-cursor }}

## label(Object)
{{use:partial-label-desc}}
{{use:partial-label(
    prefix="##",
    defaultPosition="'inside'",
    formatter=true
)}}

## itemStyle(Object)
{{use:partial-item-style-desc}}
{{use:partial-item-style(
    prefix="##",
    useColorPalatte=true,
    hasCallback=true
)}}


## emphasis(Object)

高亮的标签和图形样式。

### label(Object)

{{use:partial-label(
    prefix="###",
    formatter=true
)}}

### itemStyle(Object)

{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}

{{ use: partial-seriesLayoutBy }}

{{ use: partial-datasetIndex }}

{{use:partial-series-dimensions(
    prefix="#"
)}}

{{use:partial-series-encode(
    prefix="#"
)}}


## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="##",
    name="单个数据"
) }}

### label(Object)

{{ use:partial-label(
    prefix="###",
    defaultPosition="inside"
) }}

### itemStyle(Object)
{{use:partial-item-style(prefix="###")}}

### emphasis(Object)

单个数据的图形和标签样式。

#### label(Object)

{{ use:partial-label(prefix="####") }}

#### itemStyle(Object)

{{use:partial-item-style(prefix="####")}}


{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


{{use: partial-marker(
    prefix="#",
    seriesType="effectScatter",
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}

{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}
