
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

## clockwise(boolean) = true

<ExampleUIControlBoolean default="true" />

饼图的扇区是否是顺时针排布。

## startAngle(number) = 90

<ExampleUIControlAngle step="1" min="0" max="360" default="90" />

起始角度，支持范围[0, 360]。

## minAngle(number) = 0

<ExampleUIControlAngle step="1" min="0" max="360" default="0" />

最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互。

~[600x600](${galleryViewPath}chord-minAngle&edit=1&reset=1)

## padAngle(number) = 0

<ExampleUIControlAngle step="1" min="0" max="360" default="0" />

扇区之间的间隔角度（0 ~ 360）。

{{ use: partial-coord-sys(
    version = '6.0.0',
    seriesType = "chord",
    coordSysDefault = "'none'",
    calendar = true,
    matrix = true,
    none = true
) }}

## itemStyle(Object)

{{ use: partial-item-style-desc() }}

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = true,
    useDecal = true
) }}

{{ use: partial-sector-border-radius(
    prefix = '##',
    type = "和弦图"
) }}

## lineStyle(Object)

### color(string) = 'source'

边的颜色。

+ `'source'`: 使用源节点颜色。
+ `'target'`: 使用目标节点颜色。
+ `'gradient'`: 以源节点和目标节点的颜色做一个渐变过渡色。

~[900x500](${galleryViewPath}chord-lineStyle-color&edit=1&reset=1)

### opacity(number) = ${defaultOpacity|default(0.2)}

边的透明度。

{{ use: partial-style-shadow(
    prefix = '##'
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
    labelMargin = true,
    noPosition = true
) }}

#### position(string)

标签的位置。支持 `'inside'` 或 `'outside'`。

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

边的数值。

## emphasis(Object)

高亮状态的扇区和标签样式。

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}
