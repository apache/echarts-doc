
{{ target: series-chord }}

# series.chord(Object)

{{ use: partial-version(
    version = "6.0.0"
) }}

和弦图是一种用于可视化不同实体之间相互关系和流量的数据图表。它通过优美的弧形和弦连接，展示数据流动的方向和比例。

**示例：**

~[600x600](${galleryViewPath}chord-style&edit=1&reset=1)


<ExampleBaseOption name="chord" title="基础和弦图" title-en="Basic Chord">
const option = {
  tooltip: {},
  legend: {},
  series: [
    {
      type: 'chord',
      clockwise: false,
      label: { show: true },
      lineStyle: { color: 'target' },
      data: [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }],
      links: [
        { source: 'A', target: 'B', value: 40 },
        { source: 'A', target: 'C', value: 20 },
        { source: 'B', target: 'D', value: 20 }
      ]
    }
  ]
};
</ExampleBaseOption>

## type(string) = 'chord'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: component-circular-layout(
    componentName = "和弦图",
    defaultRadius = "['70%', '80%']"
) }}

{{ use: partial-coord-sys(
    version = '6.0.0',
    seriesType = "chord",
    coordSysDefault = "'none'",
    calendar = true,
    matrix = true,
    none = true
) }}

## data(Array)

和弦图的节点数据列表。

```ts
data: [{
    name: 'A'
}, {
    name: 'B',
    value: 100
}, {
    name: 'C',
    itemStyle: {
        color: 'red'
    }
}]
```

**注意:** 节点的`name`不能重复。

### name(string)

数据项名称。

### value(number|Array)

数据项值。

### itemStyle(Object)

该节点的样式。

{{ use: partial-item-style(
    prefix = "###",
    useColorPalatte = true
) }}

### label(Object)

该节点标签的样式。

{{ use: partial-label(
    prefix = "###",
    labelMargin = true
) }}

### emphasis(Object)

该节点的高亮状态。

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: graph-node-state(
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

该节点的淡出状态。

{{ use: graph-node-state(
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

该节点的选中状态。

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: graph-node-state(
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

## nodes(Array)

别名，同 [data](~series-graph.data)

## links(Array)

节点间的关系数据。示例：
```ts
links: [{
    source: 'n1',
    target: 'n2'
}, {
    source: 'n2',
    target: 'n3'
}]
```

### source(string|number)

边的[源节点名称](~series-graph.data.name)的字符串，也支持使用数字表示源节点的索引。

### target(string|number)

边的[目标节点名称](~series-graph.data.name)的字符串，也支持使用数字表示源节点的索引。

### value(number)

边的数值，可以在力引导布局中用于映射到边的长度。

### lineStyle(Object)

关系边的线条样式。

{{ use: partial-line-style(
    prefix = "###"
) }}

### emphasis(Object)

该关系边的高亮状态。

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: chord-edge-state(
    state = 'emphasis'
) }}

### blur(Object)

该关系边的淡出状态。

{{ use: chord-edge-state(
    state = 'blur'
) }}

### select(Object)

该关系边的选中状态。

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: chord-edge-state(
    state = 'select'
) }}


{{ target: chord-edge-state }}

#### lineStyle(Object)

{{ use: partial-line-style(
    prefix = "####",
    hasInherit = ${state} === 'emphasis'
) }}

#### label(Object)

{{ use: partial-label(
    prefix = "####",
    defaultShow = true
) }}
