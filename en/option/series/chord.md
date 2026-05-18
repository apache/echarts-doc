{{ target: series-chord }}

# series.chord(Object)

{{ use: partial-version(
    version = "6.0.0"
) }}

A chord diagram is a chart used to visualize relationships and flows between different entities. It displays the direction and proportion of data flows with elegant arcs and chords.

**Example:**

~[600x600](${galleryViewPath}chord-style&edit=1&reset=1)


<ExampleBaseOption name="chord" title="Basic Chord" title-en="Basic Chord">
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
    componentName = "Chord Diagram",
    defaultRadius = "['70%', '80%']"
) }}

## clockwise(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether the sectors are arranged clockwise.

## startAngle(number) = 90

<ExampleUIControlAngle step="1" min="0" max="360" default="90" />

Starting angle, supported range [0, 360].

## minAngle(number) = 0

<ExampleUIControlAngle step="1" min="0" max="360" default="0" />

Minimum sector angle (0 ~ 360), used to prevent very small values from producing sectors that are too small and affect interaction.

~[600x600](${galleryViewPath}chord-minAngle&edit=1&reset=1)

## padAngle(number) = 0

<ExampleUIControlAngle step="1" min="0" max="360" default="0" />

The gap angle between sectors (0 ~ 360).

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
    type = "Chord Diagram"
) }}

## lineStyle(Object)

### color(string) = 'source'

The color of the edge in Chord charts.

+ `'source'`: use source node color.
+ `'target'`: use target node color.
+ `'gradient'`: gradient color between source node and target node.

~[900x500](${galleryViewPath}chord-lineStyle-color&edit=1&reset=1)

### opacity(number) = ${defaultOpacity|default(0.2)}

Opacity of the edges.

{{ use: partial-style-shadow(
    prefix = '##'
) }}

## data(Array)

List of node data for the chord diagram.

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

Note: The node `name` must be unique.

### name(string)

Name of the data item.

### value(number|Array)

Value of the data item.

### itemStyle(Object)

Style of this node.

{{ use: partial-item-style(
    prefix = "###",
    useColorPalatte = true
) }}

### label(Object)

Label style for this node.

{{ use: partial-label(
    prefix = "###",
    labelMargin = true,
    noPosition = true
) }}

#### position(string)

Position of the label. Supports `'inside'` or `'outside'`.

### emphasis(Object)

Style when the node is emphasized.

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

The blur (faded) state of the node.

{{ use: graph-node-state(
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

The selected state of the node.

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: graph-node-state(
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

## nodes(Array)

Alias, same as [data](~series-graph.data)

## links(Array)

Relationship data between nodes. Example:
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

The source node name ([data.name](~series-graph.data.name)) as a string, or the index of the source node as a number.

### target(string|number)

The target node name ([data.name](~series-graph.data.name)) as a string, or the index of the target node as a number.

### value(number)

Value of the edge.

## emphasis(Object)

Styles for emphasized sectors and labels.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}
