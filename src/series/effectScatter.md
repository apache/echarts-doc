
{{target: series-effectScatter}}

# series.effectScatter(Object)

带有涟漪特效动画的散点（气泡）图。利用动画特效可以将某些想要突出的数据进行视觉突出。

**Tip:** ECharts 2.x 中在地图上通过 markPoint 实现地图特效在 ECharts 3 中建议通过地理坐标系上的 effectScatter 实现。

**如下示例：**
~[600x400](${galleryViewPath}effectScatter-map&edit=1&reset=1)

## type(string) = 'effectScatter'

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
### period(number) = 4
动画的时间。
### scale(number) = 2.5
动画中波纹的最大缩放比例。
### brushType(string) = 'fill'
波纹的填充方式，可选 `'stroke'` 和 `'fill'`。

{{use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=true
)}}

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    prefix="#"
) }}

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###",
    formatter=true
)}}

## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}


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
#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}


### itemStyle(Object)
#### normal(Object)
{{use:partial-item-style(prefix="####")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}


{{use: partial-mark-point(
    prefix="#",
    seriesType="effectScatter",
    hasCoord=true,
    hasType=true
)}}prefix
{{use: partial-mark-line(
    prefix="#",
    seriesType="effectScatter",
    hasCoord=true,
    hasType=true
)}}

{{use: partial-animation(prefix="#")}}

