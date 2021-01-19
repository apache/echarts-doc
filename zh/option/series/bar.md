{{target:series-bar}}

# series.bar(Object)

**柱状图**

柱状图（或称条形图）是一种通过柱形的高度（横向的情况下则是宽度）来表现数据大小的一种常用图表类型。


<ExampleBaseOption name="cartesian-bar" title="直角坐标系上的柱状图" title-en="Bar on Cartesian">
const option = {
    tooltip: {},
    legend: {},
    xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [{
        name: 'Sale',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 4]
    }]
};
</ExampleBaseOption>

<ExampleBaseOption name="polar-bar" title="极坐标系上的柱状图" title-en="Bar on Polar">
const option = {
    angleAxis: {
        max: 30
    },
    radiusAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        z: 10
    },
    polar: {},
    series: [{
        name: 'Sale',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 4],
        coordinateSystem: 'polar'
    }],
    legend: {},
};
</ExampleBaseOption>

<ExampleBaseOption name="cartesian-bar-multiple-series" title="多系列柱状图" title-en="Multiple Series">
option = {
    legend: {
        data: ['Food', 'Cloth', 'Book']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Food',
            type: 'bar',
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: 'Cloth',
            type: 'bar',
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: 'Book',
            type: 'bar',
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};
</ExampleBaseOption>


## type(string) = 'bar'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=false,
    geo=false
) }}

## roundCap(boolean) = false

{{ use: partial-version(version = "4.5.0") }}

<ExampleUIControlBoolean clean="true" />

是否在环形柱条两侧使用圆弧效果。

仅对极坐标系柱状图有效。

~[800x500](${galleryViewPath}polar-roundCap&reset=1&edit=1)

## label(Object)
{{use:partial-label-desc}}
{{use:partial-label(
    prefix="##",
    defaultPosition="'inside'",
    formatter=true
)}}

## itemStyle(Object)
{{use:partial-item-style-desc}}
{{use:partial-bar-item-style(
    prefix="##",
    useColorPalatte=true,
    hasCallback=true,
    barBorderRadius=true
)}}

## showBackground(boolean) = false
{{ use: partial-version(version = "4.7.0") }}

<ExampleUIControlBoolean clean="true" />

是否显示柱条的背景色。通过 [backgroundStyle](~series-bar.backgroundStyle) 配置背景样式。

~[800x400](${galleryViewPath}bar-background&reset=1&edit=1)

## backgroundStyle(Object)
{{ use: partial-version(version = "4.7.0") }}
每一个柱条的背景样式。需要将 [showBackground](~series-bar.showBackground) 设置为 `true` 时才有效。

~[800x400](${galleryViewPath}bar-background&reset=1&edit=1)

{{use:partial-bar-item-style(
    prefix="##",
    useColorPalatte=false,
    hasCallback=true,
    barBorderRadius=true,
    defaultColor="'rgba(180, 180, 180, 0.2)'"
)}}

## emphasis(Object)

高亮的图形样式和标签样式。

### label(Object)
{{use:partial-label(
    prefix="###",
    formatter=true
)}}

### itemStyle(Object)
{{use:partial-bar-item-style(prefix="###")}}




## stack(string) = null
数据堆叠，同个类目轴上系列配置相同的`stack`值可以堆叠放置。

## groupOrder(string) = null
{{ use: partial-version(version = "5.1.0") }}
同个类目轴上配置多个series时，支持簇状、堆叠组内排序，可选参数为'asc'(升序)、'desc'(降序)。

{{ use: partial-cursor }}

{{use: partial-barGrid(
    seriesType='bar',
    galleryViewPath=${galleryViewPath}
)}}

{{use: partial-large(
    prefix="#",
    defaultLargeThreshold=400
)}}

{{ use:partial-progressive(
    prefix='#',
    supportProgressiveChunkMode=true,
    defaultProgressive=5000,
    defaultProgressiveChunkMode='mod'
) }}

{{use:partial-series-dimensions(
    prefix="#"
)}}

{{use:partial-series-encode(
    prefix="#"
)}}

{{ use: partial-seriesLayoutBy }}

{{ use: partial-datasetIndex }}

## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
数据项名称。

### value(number)
单个数据项的数值。

### label(Object)
单个柱条文本的样式设置。
{{ use:partial-label(
    prefix="###",
    defaultPosition="inside"
) }}

### itemStyle(Object)
{{use:partial-bar-item-style(
    prefix="###",
    barBorderRadius=true
)}}


### emphasis(Object)

高亮状态的柱状图图形与标签样式。

#### label(Object)

{{ use:partial-label(prefix="####") }}


#### itemStyle(Object)
{{use:partial-bar-item-style(prefix="####")}}

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}

{{use: partial-marker(
    prefix="#",
    seriesType="bar",
    galleryEditorPath=${galleryEditorPath},
    hasCoord=true,
    hasType=true
)}}

{{use:partial-clip(
    prefix="#"
) }}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="柱状图"
) }}
{{ use:partial-silent(
    prefix="#"
) }}

{{use:partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}


{{ target:partial-bar-item-style }}

#${prefix} color(Color) = ${defaultColor|default('自适应')}

<ExampleUIControlColor />

柱条的颜色。{{ if: ${useColorPalatte} }} 默认从全局调色盘 [option.color](~color) 获取颜色 {{/if}}

#${prefix} borderColor(Color) = '#000'

<ExampleUIControlColor value="#000" />

柱条的描边颜色。

#${prefix} borderWidth(number) = 0

<ExampleUIControlNumber value="0" min="0" step="0.5" />

柱条的描边宽度，默认不描边。

#${prefix} borderType(string) = 'solid'

<ExampleUIControlEnum default="solid" options="solid,dashed,dotted" />

柱条的描边类型，默认为实线，支持 `'dashed'`, `'dotted'`。

{{ if: ${barBorderRadius} }}

{{use: partial-border-radius(
    propName: 'barBorderRadius',
    prefix: ${prefix}
)}}
{{ /if }}

{{ use:partial-style-shadow-opacity(prefix=${prefix}) }}

