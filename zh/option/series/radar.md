
{{ target: series-radar }}

# series.radar(Object)

**雷达图**

雷达图主要用于表现多变量的数据，例如球员的各个属性分析。依赖 [radar](~radar) 组件。

下面是 AQI 数据用雷达图表现的示例。

~[600x500](${galleryViewPath}radar-aqi&edit=1&reset=1)

<ExampleBaseOption name="radar" title="基础雷达图" title-en="Basic Radar">
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

## type(string) = 'radar'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby(
    defaultColorBy = "'data'"
) }}

## radarIndex(number)

雷达图所使用的 [radar](~radar) 组件的 index。

{{ use: partial-symbol(
    seriesType = "radar",
    defaultSymbol = "'circle'",
    defaultSymbolSize = 4,
    prefix = "#",
    hasCallback = true
) }}

## label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "##",
    defaultPosition = "'top'",
    formatter = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## itemStyle(Object)

折线拐点标志的样式。

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = true,
    useDecal = true,
    decalOnlyWithAreaStyle = true
) }}

## lineStyle(Object)

线条样式。

{{ use: partial-line-style(
    prefix = "##",
    defaultJoin = "'round'"
) }}

## areaStyle(Object)

区域填充样式。

{{ use: partial-area-style(
    prefix = "##",
    defaultOpacity = 0.7
) }}

## emphasis(Object)

高亮状态的配置。

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

{{ use: radar-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

淡出状态的配置。开启 [emphasis.focus](~series-radar.emphasis.focus) 后有效。

{{ use: radar-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

选中状态的配置。开启 [selectedMode](~series-radar.selectedMode) 后有效。

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: radar-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: partial-series-group-id() }}

## data(Array)

雷达图的数据是多变量（维度）的，如下示例：

```ts
data : [
    {
        value : [4300, 10000, 28000, 35000, 50000, 19000],
        name : '预算分配（Allocated Budget）'
    },
    {
        value : [5000, 14000, 28000, 31000, 42000, 21000],
        name : '实际开销（Actual Spending）'
    }
]
```

其中的`value`项数组是具体的数据，每个值跟 [radar.indicator](~radar.indicator) 一一对应。

### name(string)

数据项名称

### value(number)

单个数据项的数值。

{{ use: partial-data-group-id(
    prefix = '##'
) }}

{{ use: partial-symbol(
    defaultSymbol = "'circle'",
    defaultSymbolSize = 4,
    prefix = "##",
    name = "单个数据"
) }}

### label(Object)

单个拐点文本的样式设置。

{{ use: partial-label(
    prefix = "###",
    defaultPosition = "top"
) }}

### itemStyle(Object)

单个拐点标志的样式设置。

{{ use: partial-item-style(
    prefix = "###"
) }}

### lineStyle(Object)

单项线条样式。

{{ use: partial-line-style(
    prefix = "###",
    defaultJoin = "'round'"
) }}

### areaStyle(Object)

单项区域填充样式。

{{ use: partial-area-style(
    prefix = "###",
    defaultOpacity = 0.7
) }}

### emphasis(Object)

单个数据项样式的高亮状态。

{{ use: radar-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

单个数据项样式的淡出状态。

{{ use: radar-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

单个数据项样式的选中状态。

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: radar-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "雷达图"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: radar-state }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter = ${prefix} === '##'
) }}

#${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = "#" + ${prefix},
    defaultJoin = "'round'",
    hasInherit = ${state} === 'emphasis'
) }}

#${prefix} areaStyle(Object)

{{ use: partial-area-style(
    prefix = "#" + ${prefix}
) }}

