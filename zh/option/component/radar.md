
{{ target: component-radar }}

# radar(Object)

雷达图坐标系组件，只适用于[雷达图](~series-radar)。该组件等同 ECharts 2 中的 polar 组件。因为 3 中的 polar 被重构为标准的极坐标组件，为避免混淆，雷达图使用 radar 组件作为其坐标系。

雷达图坐标系与极坐标系不同的是它的每一个轴（indicator 指示器）都是一个单独的维度，可以通过 [name](~radar.name)、[axisLine](~radar.axisLine)、[axisTick](~radar.axisTick)、[axisLabel](~radar.axisLabel)、[splitLine](~radar.splitLine)、 [splitArea](~radar.splitArea) 几个配置项配置指示器坐标轴线的样式。


下面是一个 radar 组件的一个自定义例子。

~[400x400](${galleryViewPath}doc-example/radar&edit=1&reset=1)

<ExampleBaseOption name="radar" title="基础雷达图" title-en="Radar">
const option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
        indicator: [
            { name: 'sales', max: 6500},
            { name: 'Administration', max: 16000},
            { name: 'Information Techology', max: 30000},
            { name: 'Customer Support', max: 38000},
            { name: 'Development', max: 52000},
            { name: 'Marketing', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        data: [
            {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: 'Allocated Budget'
            },
            {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: 'Actual Spending'
            }
        ]
    }]
};
</ExampleBaseOption>

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: component-circular-layout(
    defaultRadius = "75%"
) }}

## startAngle(number) = 90

坐标系起始角度，也就是第一个指示器轴的角度。

## axisName(Object)

雷达图每个指示器名称的配置项。

### show(boolean) = true

是否显示指示器名称。

### formatter(string|Function)

指示器名称显示的格式器。支持字符串和回调函数，如下示例：

```ts
// 使用字符串模板，模板变量为指示器名称 {value}
formatter: '【{value}】'
// 使用回调函数，第一个参数是指示器名称，第二个参数是指示器配置项
formatter: function (value, indicator) {
    return '【' + value + '】';
}
```

{{ use: partial-text-style(
    prefix = '##',
    defaultColor = "'#333'",
    noAlign = true,
    noVerticalAlign = true
) }}

## nameGap(number) = 15

<ExampleUIControlNumber default="15" step="1" />

指示器名称和指示器轴的距离。

## splitNumber(number) = 5

<ExampleUIControlNumber default="15" step="1" />

指示器轴的分割段数。

## shape(string) = 'polygon'

<ExampleUIControlEnum options="polygon,circle" />

雷达图绘制类型，支持 `'polygon'` 和 `'circle'`。

## scale(boolean) = false

<ExampleUIControlBoolean />

是否是脱离 0 值比例。设置成 `true` 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。

{{ use: partial-axis-common-axis-line(
    prefix = "#"
) }}

{{ use: partial-axis-common-axis-tick(
    prefix = "#",
    hasLabelInterval = false,
    hasAlignWithLabel = false,
    hasInside = false
) }}

{{ use: partial-axis-common-axis-label(
    prefix = "#",
    hasLabelInterval = false,
    hasInside = false
) }}

{{ use: partial-axis-common-split-line(
    prefix = "#",
    hasLabelInterval = false
) }}

{{ use: partial-axis-common-split-area(
    prefix = "#",
    hasLabelInterval = false,
    defaultShow = true
) }}

## indicator(Array)

雷达图的指示器，用来指定雷达图中的多个变量（维度），如下示例。

```ts
indicator: [
   { name: '销售（sales）', max: 6500},
   { name: '管理（Administration）', max: 16000, color: 'red'}, // 标签设置为红色
   { name: '信息技术（Information Techology）', max: 30000},
   { name: '客服（Customer Support）', max: 38000},
   { name: '研发（Development）', max: 52000},
   { name: '市场（Marketing）', max: 25000}
]
```

### name(string)

指示器名称。

### max(number)

<ExampleUIControlNumber default="100" step="1" />

指示器的最大值，可选，建议设置

### min(number)

<ExampleUIControlNumber step="1" />

指示器的最小值，可选，默认为 0。

### color(string)

<ExampleUIControlColor />

标签特定的颜色。

