
{{ target: series-tree }}

# series.tree(Object)

**树图**

树图主要用来可视化树形数据结构，是一种特殊的层次类型，具有唯一的根节点，左子树，和右子树。

**注意：目前不支持在单个 series 中直接绘制森林，可以通过在一个 option 中配置多个 series 实现森林**

**树图示例：**

~[900x780](${galleryViewPath}tree-vertical&edit=1&reset=1)

**多个 series 组合成森林示例：**

~[800x680](${galleryViewPath}tree-legend&edit=1&reset=1)


<ExampleBaseOption name="tree" title="基础树图" title-en="Basic Tree">
const option = {
    series: [{
        type: 'tree',
        data: [{
            name: 'root',
            children: [{
                name: 'Child A',
                children: [{
                    name: 'Leaf C'
                }, {
                    name: 'Leaf D'
                }, {
                    name: 'Leaf E'
                }, {
                    name: 'Leaf F'
                }]
            }, {
                name: 'Child B',
                children: [{
                    name: 'Leaf G'
                }, {
                    name: 'Leaf H'
                }]
            }, {
                name: 'Child D'
            }, {
                name: 'Child F',
                children: [{
                    name: 'Leaf J'
                }, {
                    name: 'Leaf K'
                }]
            }]
        }],
        label: {
            position: 'right'
        }
    }]
}
</ExampleBaseOption>

## type(string) = 'tree'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-rect-layout-width-height(
    componentName = 'tree',
    defaultLeft = '12%',
    defaultRight = '12%',
    defaultTop = '12%',
    defaultBottom = '12%',
    defaultWidth = 'null',
    defaultHeight = 'null'
) }}

## center(Array)

当前视角的中心点。可以是包含两个 `number` 类型（表示像素值）或 `string` 类型（表示相对容器的百分比）的数组。
从 `5.3.3` 版本开始支持 `string` 类型。

例如：
```ts
center: [115.97, '30%']
```

## zoom(number) = 1

当前视角的缩放比例。


## layout(string) = 'orthogonal'

<ExampleUIControlEnum options="orthogonal,radial" default="orthogonal" />

树图的布局，有 `正交` 和 `径向` 两种。这里的 `正交布局` 就是我们通常所说的 `水平` 和 `垂直` 方向，对应的参数取值为 `'orthogonal'` 。而 `径向布局` 是指以根节点为圆心，每一层节点为环，一层层向外发散绘制而成的布局，对应的参数取值为 `'radial'` 。

**正交布局示例：**

~[780x900](${galleryViewPath}tree-basic&edit=1&reset=1)


**径向布局示例：**

~[800x800](${galleryViewPath}tree-radial&edit=1&reset=1)

## orient(string) = 'LR'

<ExampleUIControlEnum options="LR,RL,TB,BT" default="LR" />

树图中 `正交布局` 的方向，也就是说只有在 `layout = 'orthogonal'` 的时候，该配置项才生效。对应有 `水平` 方向的 `从左到右`，`从右到左`；以及垂直方向的 `从上到下`，`从下到上`。取值分别为 `'LR'` , `'RL'`, `'TB'`, `'BT'`。**注意**，之前的配置项值 `'horizontal'` 等同于 `'LR'`， `'vertical'` 等同于 `'TB'`。

{{ use: partial-symbol(
    seriesType = "tree",
    defaultSymbol = "'emptyCircle'",
    defaultSymbolSize = 7,
    prefix = "#",
    hasCallback = true
) }}

## edgeShape(string) = 'curve'

<ExampleUIControlEnum options="curve,polyline" default="curve" />

{{ use: partial-version(
    version = "4.7.0"
) }}

树图在 `正交布局` 下，边的形状。分别有曲线和折线两种，对应的取值是 `curve` 和 `polyline`.

**注意：该配置项只在 `正交布局` 下有效，在经向布局下的开发环境中会报错。**

## edgeForkPosition(string) = '50%'

<ExampleUIControlPercent default="50%" />

正交布局下当边的形状是折线时，子树中折线段分叉的位置。这里的位置指的是分叉点与子树父节点的距离占整个子树高度的百分比。默认取值是 `'50%'`，可以是 ['0', '100%'] 之间。

**注意：该配置项只有在 `edgeShape = 'polyline'` 时才有效。**

## roam(boolean|string) = false

{{ use: partial-roam() }}

## expandAndCollapse(boolean) = true

<ExampleUIControlBoolean default="true" />

子树折叠和展开的交互，`默认打开` 。由于绘图区域是有限的，而通常一个树图的节点可能会比较多，这样就会出现节点之间相互遮盖的问题。为了避免这一问题，可以将暂时无关的子树折叠收起，等到需要时再将其展开。如上面径向布局树图示例，节点中心用蓝色填充的就是折叠收起的子树，可以点击将其展开。

**注意：如果配置自定义的图片作为节点的标记，是无法通过填充色来区分当前节点是否有折叠的子树的。而目前暂不支持，上传两张图片分别表示节点折叠和展开两种状态。所以，如果想明确地显示节点的两种状态，建议使用 `ECharts` 常规的标记类型，如 `'emptyCircle'` 等。**

## initialTreeDepth(number) = 2

<ExampleUIControlNumber default="2" min="0" step="1" />

树图初始展开的层级（深度）。根节点是第 0 层，然后是第 1 层、第 2 层，... ，直到叶子节点。该配置项主要和 `折叠展开` 交互一起使用，目的还是为了防止一次展示过多节点，节点之间发生遮盖。如果设置为 `-1` 或者 `null` 或者 `undefined`，所有节点都将展开。

## itemStyle(Object)

树图中每个节点的样式，其中 [itemStyle.color](~series-tree.itemStyle.color) 表示节点的填充色，用来区别当前节点所对应的子树折叠或展开的状态。

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    defaultBorderWidth = 1.5,
    defaultBorderColor = "'#c23531'"
) }}

## label(Object)

`label` 描述了每个节点所对应的文本标签的样式。

{{ use: partial-label(
    prefix = "##",
    defaultShowLabel = true,
    formatter1d = true,
    formatterExtra = {
        treeAncestors: {
            desc: '当前节点的祖先节点（包括自身）',
            type: 'Array'
        }
    }
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## lineStyle(Object)

定义树图边的样式。

{{ use: partial-tree-line-style(
    prefix = "##"
) }}

## emphasis(Object)

树图中个图形和标签高亮的样式。

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope(
    isTree = true,
    hasRelative = true,
    relativeVersion = "5.3.3"
) }}

{{ use: tree-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

淡出状态的相关配置。开启 [emphasis.focus](~series-tree.emphasis.focus) 后有效。

{{ use: tree-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

选中状态的相关配置。开启 [selectedMode](~series-tree.selectedMode) 后有效。

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: tree-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## leaves(Object)

叶子节点的特殊配置，如上面的树图实例中，叶子节点和非叶子节点的标签位置不同。

### label(Object)

描述了叶子节点所对应的文本标签的样式。

{{ use: partial-label(
    prefix = "###",
    defaultShowLabel = true,
    formatter1d = true,
    formatterExtra = {
        treeAncestors: {
            desc: '当前节点的祖先节点（包括自身）',
            type: 'Array'
        }
    }
) }}

### itemStyle(Object)

树图中叶子节点的样式。

{{ use: partial-item-style(
    prefix = "###",
    useColorPalatte = true
) }}

### emphasis(Object)

叶子节点高亮状态的配置。

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: tree-node-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

叶子节点淡出状态的配置。

{{ use: tree-node-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

叶子节点选中状态的配置。

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: tree-node-state(
    prefix = "###",
    state = 'select'
) }}

## data(Object)

[series-tree.data](~series-tree.data) 的数据格式是树状结构的，例如：

```javascript
{ // 注意，最外层是一个对象，代表树的根节点
    name: "flare",    // 节点的名称，当前节点 label 对应的文本
    label: {          // 此节点特殊的 label 配置（如果需要的话）。
        ...           // label的格式参见 series-tree.label。
    },
    itemStyle: {      // 此节点特殊的 itemStyle 配置（如果需要的话）。
        ...           // label的格式参见 series-tree.itemStyle。
    },
    children: [
        {
            name: "flex",
            value: 4116,    // value 值，只在 tooltip 中显示
            label: {
                ...
            },
            itemStyle: {
                ...
            },
            collapsed: null, // 如果为 true，表示此节点默认折叠。
            children: [...] // 叶子节点没有 children, 可以不写
        },
        ...
    ]
};
```

### name(string)

树节点的名称，用来标识每一个节点。

### value(number)

节点的值，在 tooltip 中显示。

### collapsed(boolean)

节点初始化是否折叠。

### itemStyle(Object)

该节点的样式。

{{ use: partial-item-style(
    prefix = "###",
    useColorPalatte = true
) }}

### lineStyle(Object)

该节点对应的边的样式。

{{ use: partial-tree-line-style(
    prefix = "###"
) }}

### label(Object)

该节点的标签。

{{ use: partial-label(
    prefix = "###"
) }}

### emphasis(Object)

节点高亮状态的配置。

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: tree-node-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

节点淡出状态的配置。

{{ use: tree-node-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

节点选中状态的配置。

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: tree-node-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-animation(
    prefix = "##",
    defaultAnimationEasing = "'linear'",
    defaultAnimationDuration = 1000
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-tree-line-style }}

#${prefix} color(Color) = '#ccc'

<ExampleUIControlColor default="#ccc" />

树图边的颜色。

#${prefix} width(number) = 1.5

<ExampleUIControlNumber default="1.5" min="0" />

树图边的宽度。

#${prefix} curveness(number) = 0.5

<ExampleUIControlNumber default="0.5" min="0" />

树图边的曲度。

{{ use: partial-style-shadow(
    prefix = ${prefix}
) }}



{{ target: tree-node-state }}

#${prefix} itemStyle(Object)

该节点的样式。

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

#${prefix} lineStyle(Object)

定义树图边的样式。

{{ use: partial-tree-line-style(
    prefix = "#" + ${prefix}
) }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter1d = ${prefix} === '##',
    formatterExtra = {
        treeAncestors: {
            desc: '当前节点的祖先节点（包括自身）',
            type: 'Array'
        }
    }
) }}



{{ target: tree-edge-state }}

#${prefix} lineStyle(Object)

定义树图边的样式。

{{ use: partial-tree-line-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: tree-state }}

{{ use: tree-node-state(
    prefix = ${prefix},
    state = ${state}
) }}

{{ use: tree-edge-state(
    prefix = ${prefix},
    state = ${state}
) }}
