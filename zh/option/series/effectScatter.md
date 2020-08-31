
{{target: series-effectScatter}}

# series.effectScatter(Object)

带有涟漪特效动画的散点（气泡）图。利用动画特效可以将某些想要突出的数据进行视觉突出。

**Tip:** ECharts 2.x 中在地图上通过 markPoint 实现地图特效在 ECharts 3 中建议通过地理坐标系上的 effectScatter 实现。

<ExampleBaseOption name="effectScatter-bubble" title="特效气泡图" title-en="Bubble Chart with Effect">
const option = {
    xAxis: {},
    yAxis: {
        scale: true
    },
    series: [{
        name: '1990',
        type: 'effectScatter',
        data: [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        }
    }]
};
</ExampleBaseOption>

## type(string) = 'effectScatter'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

## effectType(string) = 'ripple'

<ExampleUIControlEnum options="ripple" />

特效类型，目前只支持涟漪特效`'ripple'`。

## showEffectOn(string) = 'render'

<ExampleUIControlEnum options="render,emphasis" default="render" />

配置何时显示特效。

**可选：**
+ `'render'` 绘制完成后显示特效。
+ `'emphasis'` 高亮（hover）的时候显示特效。

## rippleEffect(Object)
涟漪特效相关配置。
### color(string)
{{ use: partial-version(version = "4.4.0") }}

<ExampleUIControlColor />

涟漪的颜色，默认为散点的颜色。
### period(number) = 4

<ExampleUIControlNumber min="0" default="4" step="0.1" />

动画的周期，秒数。
### scale(number) = 2.5

<ExampleUIControlNumber min="1" default="2.5" step="0.1" />

动画中波纹的最大缩放比例。
### brushType(string) = 'fill'

<ExampleUIControlEnum options="stroke,fill" default="fill" />

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
    seriesType="effectScatter",
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    prefix="#",
    hasCallback=true
) }}

{{ use: partial-cursor }}

## label(Object)
{{use:partial-label-desc}}
{{use:partial-label(
    prefix="##",
    defaultPosition="'inside'",
    formatter=true
)}}

## labelLayout(Object|Function)
{{ use: partial-label-layout(
    prefix="##"
) }}


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
    seriesType="effectScatter",
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
