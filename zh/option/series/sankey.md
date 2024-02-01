
{{ target: series-sankey }}

# series.sankey(Object)

** 桑基图 **

是一种特殊的流图（可以看作是有向无环图）。 它主要用来表示原材料、能量等如何从最初形式经过中间过程的加工或转化达到最终状态。

**示例：**

~[700x580](${galleryViewPath}sankey-energy&edit=1&reset=1)

<br>
**可视编码：**

桑基图将原数据中的每个`node`编码成一个小矩形，不同的节点尽量用不同的颜色展示，小矩形旁边的`label`编码的是节点的名称。

此外，图中每两个小矩形之间的边编码的是原数据中的`link`，边的粗细编码的是`link`中的`value`。

<br>
**排序：**

如果想指定每层节点的顺序是按照 [data](~series-sankey.data) 中的顺序排列的。可以设置 [layoutIterations](~series-sankey.layoutIterations) 为 `0`。

<ExampleBaseOption name="sankey" title="桑基图" title-en="Sankey">
const option = {"tooltip":{"trigger":"item","triggerOn":"mousemove"},"series":[{"type":"sankey","data":[{"name":"Agricultural 'waste'"},{"name":"Bio-conversion"},{"name":"Liquid"},{"name":"Losses"},{"name":"Solid"},{"name":"Gas"},{"name":"Biofuel imports"},{"name":"Biomass imports"},{"name":"Coal imports"},{"name":"Coal"},{"name":"Coal reserves"},{"name":"District heating"},{"name":"Industry"},{"name":"Heating and cooling - commercial"},{"name":"Heating and cooling - homes"},{"name":"Electricity grid"},{"name":"Over generation / exports"},{"name":"H2 conversion"},{"name":"Road transport"},{"name":"Agriculture"},{"name":"Rail transport"},{"name":"Lighting & appliances - commercial"},{"name":"Lighting & appliances - homes"},{"name":"Gas imports"},{"name":"Ngas"},{"name":"Gas reserves"},{"name":"Thermal generation"},{"name":"Geothermal"},{"name":"H2"},{"name":"Hydro"},{"name":"International shipping"},{"name":"Domestic aviation"},{"name":"International aviation"},{"name":"National navigation"},{"name":"Marine algae"},{"name":"Nuclear"},{"name":"Oil imports"},{"name":"Oil"},{"name":"Oil reserves"},{"name":"Other waste"},{"name":"Pumped heat"},{"name":"Solar PV"},{"name":"Solar Thermal"},{"name":"Solar"},{"name":"Tidal"},{"name":"UK land based bioenergy"},{"name":"Wave"},{"name":"Wind"}],"links":[{"source":"Agricultural 'waste'","target":"Bio-conversion","value":124.729},{"source":"Bio-conversion","target":"Liquid","value":0.597},{"source":"Bio-conversion","target":"Losses","value":26.862},{"source":"Bio-conversion","target":"Solid","value":280.322},{"source":"Bio-conversion","target":"Gas","value":81.144},{"source":"Biofuel imports","target":"Liquid","value":35},{"source":"Biomass imports","target":"Solid","value":35},{"source":"Coal imports","target":"Coal","value":11.606},{"source":"Coal reserves","target":"Coal","value":63.965},{"source":"Coal","target":"Solid","value":75.571},{"source":"District heating","target":"Industry","value":10.639},{"source":"District heating","target":"Heating and cooling - commercial","value":22.505},{"source":"District heating","target":"Heating and cooling - homes","value":46.184},{"source":"Electricity grid","target":"Over generation / exports","value":104.453},{"source":"Electricity grid","target":"Heating and cooling - homes","value":113.726},{"source":"Electricity grid","target":"H2 conversion","value":27.14},{"source":"Electricity grid","target":"Industry","value":342.165},{"source":"Electricity grid","target":"Road transport","value":37.797},{"source":"Electricity grid","target":"Agriculture","value":4.412},{"source":"Electricity grid","target":"Heating and cooling - commercial","value":40.858},{"source":"Electricity grid","target":"Losses","value":56.691},{"source":"Electricity grid","target":"Rail transport","value":7.863},{"source":"Electricity grid","target":"Lighting & appliances - commercial","value":90.008},{"source":"Electricity grid","target":"Lighting & appliances - homes","value":93.494},{"source":"Gas imports","target":"Ngas","value":40.719},{"source":"Gas reserves","target":"Ngas","value":82.233},{"source":"Gas","target":"Heating and cooling - commercial","value":0.129},{"source":"Gas","target":"Losses","value":1.401},{"source":"Gas","target":"Thermal generation","value":151.891},{"source":"Gas","target":"Agriculture","value":2.096},{"source":"Gas","target":"Industry","value":48.58},{"source":"Geothermal","target":"Electricity grid","value":7.013},{"source":"H2 conversion","target":"H2","value":20.897},{"source":"H2 conversion","target":"Losses","value":6.242},{"source":"H2","target":"Road transport","value":20.897},{"source":"Hydro","target":"Electricity grid","value":6.995},{"source":"Liquid","target":"Industry","value":121.066},{"source":"Liquid","target":"International shipping","value":128.69},{"source":"Liquid","target":"Road transport","value":135.835},{"source":"Liquid","target":"Domestic aviation","value":14.458},{"source":"Liquid","target":"International aviation","value":206.267},{"source":"Liquid","target":"Agriculture","value":3.64},{"source":"Liquid","target":"National navigation","value":33.218},{"source":"Liquid","target":"Rail transport","value":4.413},{"source":"Marine algae","target":"Bio-conversion","value":4.375},{"source":"Ngas","target":"Gas","value":122.952},{"source":"Nuclear","target":"Thermal generation","value":839.978},{"source":"Oil imports","target":"Oil","value":504.287},{"source":"Oil reserves","target":"Oil","value":107.703},{"source":"Oil","target":"Liquid","value":611.99},{"source":"Other waste","target":"Solid","value":56.587},{"source":"Other waste","target":"Bio-conversion","value":77.81},{"source":"Pumped heat","target":"Heating and cooling - homes","value":193.026},{"source":"Pumped heat","target":"Heating and cooling - commercial","value":70.672},{"source":"Solar PV","target":"Electricity grid","value":59.901},{"source":"Solar Thermal","target":"Heating and cooling - homes","value":19.263},{"source":"Solar","target":"Solar Thermal","value":19.263},{"source":"Solar","target":"Solar PV","value":59.901},{"source":"Solid","target":"Agriculture","value":0.882},{"source":"Solid","target":"Thermal generation","value":400.12},{"source":"Solid","target":"Industry","value":46.477},{"source":"Thermal generation","target":"Electricity grid","value":525.531},{"source":"Thermal generation","target":"Losses","value":787.129},{"source":"Thermal generation","target":"District heating","value":79.329},{"source":"Tidal","target":"Electricity grid","value":9.452},{"source":"UK land based bioenergy","target":"Bio-conversion","value":182.01},{"source":"Wave","target":"Electricity grid","value":19.013},{"source":"Wind","target":"Electricity grid","value":289.366}]}]}
</ExampleBaseOption>

## type(string) = 'sankey'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-rect-layout-width-height(
    componentName = 'sankey',
    defaultLeft = '5%',
    defaultRight = '20%',
    defaultTop = '5%',
    defaultBottom = '5%',
    defaultWidth = 'null',
    defaultHeight = 'null'
) }}

## nodeWidth(number) = 20

<ExampleUIControlNumber default="20" min="0" step="0.5" />

桑基图中每个矩形节点的宽度。

## nodeGap(number) = 8

<ExampleUIControlNumber default="8" min="0" step="0.5" />

桑基图中每一列任意两个矩形节点之间的间隔。

## nodeAlign(string) = 'justify'

<ExampleUIControlEnum options="justify,left,right" />

桑基图中节点的对齐方式，默认是双端对齐，可以设置为左对齐或右对齐，对应的值分别是：

+ `justify`: 节点双端对齐。
+ `left`: 节点左对齐。
+ `right`: 节点右对齐。

## layoutIterations(number) = 32

<ExampleUIControlNumber default="32" min="0" max="100" step="1" />

布局的迭代次数，目的是不断迭代优化图中节点和边的位置，以减少节点和边之间的相互遮盖，默认值是 `32`。如果希望图中节点的顺序是按照原始 [data](~series-sankey.data) 中的顺序排列的，可设该值为 `0`。

## orient(string) = 'horizontal'

<ExampleUIControlEnum options="horizontal,vertical" />

桑基图中节点的布局方向，可以是水平的从左往右，也可以是垂直的从上往下，对应的参数值分别是 `horizontal`, `vertical`。

## draggable(boolean) = true

<ExampleUIControlBoolean default="true" />

控制节点拖拽的交互，默认开启。开启后，用户可以将图中任意节点拖拽到任意位置。若想关闭此交互，只需将值设为 `false` 就行了。

## edgeLabel(Object)

{{ use: sankey-edge-label(
    prefix = "##"
) }}

## levels(Array)

桑基图每一层的设置。可以逐层设置，如下：

```ts
levels: [{
    depth: 0,
    itemStyle: {
        color: '#fbb4ae'
    },
    lineStyle: {
        color: 'source',
        opacity: 0.6
    }
}, {
    depth: 1,
    itemStyle: {
        color: '#b3cde3'
    },
    lineStyle: {
        color: 'source',
        opacity: 0.6
    }
}]
```

也可以只设置某一层：

```ts
levels: [{
    depth: 3,
    itemStyle: {
        color: '#fbb4ae'
    },
    lineStyle: {
        color: 'source',
        opacity: 0.6
    }
}]
```

### depth(number)

<ExampleUIControlNumber default="0" min="0" step="1" />

指定设置的是桑基图哪一层，取值从 0 开始。

{{ use: sankey-state(
    prefix = "##"
) }}

### emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: sankey-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: sankey-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: sankey-state(
    prefix = "###",
    state = 'select'
) }}

## label(Object)

`label` 描述了每个矩形节点中文本标签的样式。

{{ use: partial-label(
    prefix = "##",
    defaultShowLabel = true,
    defaultPosition = "'right'",
    formatter1d = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## itemStyle(Object)

桑基图节点矩形的样式。

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    defaultBorderWidth = 1,
    defaultBorderColor = "'#aaa'",
    useDecal = true
) }}

## lineStyle(Object)

桑基图边的样式

{{ use: partial-sankey-line-style(
    prefix = "##"
) }}

## emphasis(Object)

桑基图的高亮状态。

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope(
    isGraph = true,
    hasTrajectory = true,
    trajectoryVersion = "5.4.3"
) }}

{{ use: sankey-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

桑基图的淡出状态。开启 [emphasis.focus](~series-sankey.emphasis.focus) 后有效。

{{ use: sankey-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

桑基图的选中状态。开启 [selectedMode](~series-sankey.selectedMode) 后有效。

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: sankey-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## data(Array)

桑基图节点数据列表。

```ts
data: [{
    name: 'node1',
    // This attribute decides the layer of the current node.
    depth: 0
}, {
    name: 'node2',
    depth: 1
}]
```

**注意:** 节点的`name`不能重复。

### name(string)

节点的名称。

### value(number)

节点的值，可用来指定节点的纵向高度或横向的宽度。

### depth(number)

节点所在的层，取值从 0 开始。

### itemStyle(Object)

该节点的样式。

{{ use: partial-item-style(
    prefix = "###",
    useColorPalatte = true,
    useDecal = true
) }}

### label(Object)

该节点标签的样式。

{{ use: partial-label(
    prefix = "###"
) }}

### emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: sankey-node-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: sankey-node-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: sankey-node-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

## nodes(Array)

同 [data](~series-sankey.data)

## links(Array)

节点间的边。**注意: 桑基图理论上只支持有向无环图（DAG, Directed Acyclic Graph），所以请确保输入的边是无环的.** 示例：

```ts
links: [{
    source: 'n1',
    target: 'n2'
}, {
    source: 'n2',
    target: 'n3'
}]
```

### source(string)

边的[源节点名称](~series-sankey.data.name)

### target(string)

边的[目标节点名称](~series-sankey.data.name)

### value(number)

边的数值，决定边的宽度。

{{ use: sankey-edge-state(
    prefix = "##"
) }}

### emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: sankey-edge-state(
    prefix = "###",
    state = "emphasis"
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: sankey-edge-state(
    prefix = "###",
    state = "blur"
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: sankey-edge-state(
    prefix = "###",
    state = "select"
) }}

## edges(Array)

同 [links](~series-sankey.links)

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#",
    defaultAnimationEasing = "'linear'",
    defaultAnimationDuration = 1000
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-sankey-line-style }}

#${prefix} color(Color) = '#314656'

桑基图边的颜色。

+ `'source'`: 使用源节点颜色。
+ `'target'`: 使用目标节点颜色。
+ `'gradient'`: 以源节点和目标节点的颜色做一个渐变过渡色。(从 v5.0.0 开始支持)

#${prefix} opacity(number) = 0.2

桑基图边的透明度。

#${prefix} curveness(number) = 0.5

<ExampleUIControlNumber min="0" max="1" default="0.5" step="0.1" />

桑基图边的曲度。

{{ use: partial-style-shadow(
    prefix = ${prefix}
) }}



{{ target: sankey-node-state }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix}
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    useDecal = true,
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: sankey-state }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter1d = ${prefix} === '##'
) }}

#${prefix} edgeLabel(Object)

{{ use: sankey-edge-label(
    prefix = "#" + ${prefix}
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

#${prefix} lineStyle(Object)

{{ use: partial-sankey-line-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: sankey-edge-state }}

#${prefix} edgeLabel(Object)

{{ use: sankey-edge-label(
    prefix = "#" + ${prefix}
) }}

#${prefix} lineStyle(Object)

关系边的线条样式。

{{ use: partial-sankey-line-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: sankey-edge-label }}

{{ use: partial-version(
    version = "5.4.1"
) }}

关系边文本标签的样式。

{{ use: partial-label(
    prefix = ${prefix},
    noPosition = true,
    formatter1d = true
) }}
