
{{ target: partial-sunburst-label-helper }}

{{ use: partial-label-rotate-tangential(
    prefix = ${prefix},
    defaultRotate = "'radial'"
) }}

下面的例子展示了不同的 `rotate` 设置方法：

~[700x400](${galleryViewPath}sunburst-label-rotate&edit=1&reset=1)

#${prefix} align(string) = 'center'

<ExampleUIControlEnum options="left,center,right" default="center" />

文字对齐方式，可取值为：`'left'`、 `'center'`、 `'right'`。注意，`'left'` 是指靠近内圈，而 `'right'` 是指靠近外圈。

{{ if: ${prefix} === '##' }}
~[700x400](${galleryViewPath}doc-example/sunburst-label-align&edit=1&reset=1)
{{ else }}
同 [label.align](~sunburst.label.align)
{{ /if }}

#${prefix} minAngle(number) = null

<ExampleUIControlAngle min="0" step="1" max="360" />

当某个扇形块的角度小于该值（角度制）时，扇形块对应的文字不显示。该值用以隐藏过小扇形块中的文字。

{{ use: partial-label(
    prefix = ${prefix},
    defaultPosition = "'inside'",
    formatter = true,
    formatterExtra = {
        treePathInfo: {
            desc: '当前节点的祖先节点（包括自身）',
            type: 'Array'
        }
    },
    defaultShowLabel = "true",
    noRotate = true,
    noAlign = true
) }}



{{ target: partial-sunburst-label-props }}

#${prefix} label(Object)

`label` 描述了每个扇形块中，文本标签的样式。

**优先级：[series.data.label](~series-sunburst.data.label) > [series.levels.label](~series-sunburst.levels.label) > [series.label](~series-sunburst.label)。**

{{ use: partial-label-desc() }}

{{ use: partial-sunburst-label-helper(
    prefix = ${prefix} + '#'
) }}

#${prefix} labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '#' + ${prefix},
    length2 = ${state} === 'normal',
    minTurnAngle = ${state} === 'normal',
    showAbove = ${state} === 'normal',
    smooth = ${state} === 'normal'
) }}



{{ target: partial-sunburst-itemStyle-props }}

#${prefix} itemStyle(Object)

旭日图扇形块的样式。

可以在 [series.itemStyle](~series-sunburst.itemStyle) 定义所有扇形块的样式，也可以在 [series.levels.itemStyle](~series-sunburst.levels.itemStyle) 定义每一层扇形块的样式，还可以在 [series.data.itemStyle](~series-sunburst.data.itemStyle) 定义每个扇形块单独的样式，这三者的优先级从低到高。也就是说，如果定义了 [series.data.itemStyle](~series-sunburst.data.itemStyle)，将会覆盖 [series.itemStyle](~series-sunburst.itemStyle) 和 [series.levels.itemStyle](~series-sunburst.levels.itemStyle)。

**优先级：[series.data.itemStyle](~series-sunburst.data.itemStyle) > [series.levels.itemStyle](~series-sunburst.levels.itemStyle) > [series.itemStyle](~series-sunburst.itemStyle)。**

{{ use: partial-item-style(
    prefix = ${prefix} + '#',
    useColorPalatte = true,
    defaultBorderWidth = 1,
    defaultBorderColor = "'white'",
    defaultOpacity = 1,
    hasInherit = ${state} === 'emphasis',
    useDecal = ${state} === 'normal'
) }}

{{ use: partial-sector-border-radius(
    prefix = "#" + ${prefix},
    type = "旭日图"
) }}


{{ target: partial-sunburst-state }}

{{ use: partial-sunburst-label-props(
    prefix = ${prefix},
    state = ${state}
) }}

{{ use: partial-sunburst-itemStyle-props(
    prefix = ${prefix},
    state = ${state}
) }}

{{ use: partial-sector-border-radius(
    prefix = "#" + ${prefix},
    type = "旭日图"
) }}



{{ target: series-sunburst }}

# series.sunburst(Object)

[旭日图（Sunburst）](https://en.wikipedia.org/wiki/Pie_chart#Ring_chart,_sunburst_chart,_and_multilevel_pie_chart)由多层的环形图组成，在数据结构上，内圈是外圈的父节点。因此，它既能像[饼图](~series-pie)一样表现局部和整体的占比，又能像[矩形树图](~series-treemap)一样表现层级关系。

**示例：**

~[700x500](${galleryViewPath}sunburst-monochrome&edit=1&reset=1)

~[700x700](${galleryViewPath}sunburst-drink&edit=1&reset=1)

**数据下钻**

旭日图默认支持数据下钻，也就是说，当用户点击了某个扇形块之后，将会以该节点作为根结点显示，并且在中间出现一个返回上层节点的圆。如果不希望有数据下钻功能，可以通过将 [series-sunburst.nodeClick](~series-sunburst.nodeClick) 设置为 `false` 实现。

<ExampleBaseOption name="sunburst" title="基础旭日图" title-en="Basic Sunburst">
const data = [{
    name: 'Food',
    children: [{
        value: 3,
        name: 'Fruit',
        children: [{
            value: 1,
            name: 'Apple'
        }, {
            value: 2,
            name: 'Orange',
            children: [{
                name: 'Seville Orange',
                value: 1
            }, {
                name: 'Blood Orange',
                value: 1
            }]
        }]
    }, {
        value: 9,
        name: 'Meat',
        children: [{
            value: 6,
            name: 'Beaf',
            children: [{
                name: 'Sirloin',
                value: 1
            }, {
                name: 'Rib',
                value: 1
            }, {
                name: 'Chuck',
                value: 1
            }, {
                name: 'Shank',
                value: 1
            }]
        }, {
            value: 2,
            name: 'Chicken',
            children: [{
                name: 'Wings',
                value: 1
            }]
        }, {
            name: 'Breast',
            value: 1
        }]
    }]
}, {
    value: 6,
    name: 'Drinks',
    children: [{
        value: 3,
        name: 'Wine',
        children: [{
            name: 'USA',
            value: 2
        }, {
            name: 'Europe',
            children: [{
                name: 'Germany',
                value: 1
            }]
        }]
    }, {
        name: 'Soft Drink',
        children: [{
            value: 3,
            name: 'Juice',
            children: [{
                name: 'Apple Juice',
                value: 1
            }, {
                name: 'Orange Juice',
                value: 2
            }]
        }]
    }]
}, {
    value: 6,
    name: 'Fashion',
    children: [{
        name: 'Clothing',
        children: [{
            name: 'Shirts',
            value: 1
        }, {
            name: 'Jackets',
            value: 3,
            children: [{
                name: 'Men',
                value: 1
            }, {
                name: 'Woman',
                value: 1
            }]
        }, {
            value: 2,
            name: 'Coats',
            children: [{
                name: 'Men',
                value: 1
            }, {
                name: 'Woman',
                value: 1
            }]
        }]
    }]
}, {
    name: 'Computers',
    children: [{
        name: 'Components',
        value: 4,
        children: [{
            name: 'Barebones',
            value: 1
        }, {
            value: 2,
            name: 'External',
            children: [{
                name: 'Hard Drives',
                value: 2
            }]
        }, {
            name: 'Monitors',
            value: 1
        }]
    }, {
        value: 3,
        name: 'Other',
        children: [{
            name: 'USB',
            value: 1,
        }, {
            name: 'Cases'
        }, {
            name: 'Sound Cards',
            value: 1
        }]
    }]
}];

const option = {
    series: {
        type: 'sunburst',
        data: data
    }
};

</ExampleBaseOption>

## type(string) = 'sunburst'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: component-circular-layout(
    componentName = "旭日图",
    defaultRadius = "[0, '75%']"
) }}

## data(Array)

[series-sunburst.data](~series-sunburst.data) 的数据格式是树状的，例如：

```ts
[{
    name: 'parent1',
    value: 10,          // 可以不写父元素的 value，则为子元素之和；
                        // 如果写了，并且大于子元素之和，可以用来表示还有其他子元素未显示
    children: [{
        value: 5,
        name: 'child1',
        children: [{
            value: 2,
            name: 'grandchild1',
            itemStyle: {
                // 每个数据可以有自己的样式，覆盖 series.itemStyle 和 level.itemStyle
            },
            label: {
                // 标签样式，同上
            }
        }]
    }, {
        value: 3,
        name: 'child2'
    }],
    itemStyle: {
        // parent1 的图形样式，不会被后代继承
    },
    label: {
        // parent1 的标签样式，不会被后代继承
    }
}, {
    name: 'parent2',
    value: 4
}]
```

### value(number)

数据值，如果包含 children，则可以不写 value 值。这时，将使用子元素的 value 之和作为父元素的 value。如果 value 大于子元素之和，可以用来表示还有其他子元素未显示。

### name(string)

显示在扇形块中的描述文字。

### link(string)

点击此节点可跳转的超链接。须 [series-sunburst.nodeClick](~series-treemap.nodeClick) 值为 `'link'` 时才生效。

参见 [series-sunburst.data.target](~series-sunburst.data.target)。

### target(string) = 'blank'

意义同 HTML `<a>` 标签中的 `target`，参见 [series-sunburst.data.link](~series-sunburst.data.link)。可选值为：`'blank'` 或 `'self'`。

{{ use: partial-sunburst-state(
    prefix = "##",
    state = 'normal'
) }}

### emphasis

高亮状态配置。

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur

淡出状态配置。

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'blur'
) }}

### select

选中状态配置。

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'select'
) }}

### children(Array)

子节点，递归定义，格式同 [series-sunburst.data](~series-sunburst.data)。

{{ use: partial-sunburst-state(
    prefix = "##",
    state = 'normal'
) }}

{{ use: partial-tooltip-in-series-data() }}

## nodeClick(boolean|string) = 'rootToNode'

<ExampleUIControlEnum default="rootToNode" options="rootToNode,link" />

点击节点后的行为。可取值为：

+ `false`：节点点击无反应。
+ `'rootToNode'`：点击节点后以该节点为根结点。
+ `'link'`：如果节点数据中有 [link](~series-sunburst.data.link) 点击节点后会进行超链接跳转。

## sort(string|Function) = 'desc'

<ExampleUIControlEnum default="desc" options="desc,asc" />

扇形块根据数据 [`value`](~series-sunburst.data.value) 的排序方式，如果未指定 `value`，则其值为子元素 `value` 之和。默认值 `'desc'` 表示降序排序；还可以设置为 `'asc'` 表示升序排序；`null` 表示不排序，使用原始数据的顺序；或者用回调函数进行排列：

```ts
function(nodeA, nodeB) {
    return nodeA.getValue() - nodeB.getValue();
}
```

## renderLabelForZeroData(boolean) = false

<ExampleUIControlBoolean />

如果数据没有 `name`，是否需要渲染文字。

## clockwise(boolean) = true

<ExampleUIControlBoolean default="true" />

旭日图的扇区是否是顺时针排布。

## startAngle(number) = 90

<ExampleUIControlAngle step="1" min="0" max="360" default="90" />

起始角度，支持范围[0, 360]。

{{ use: partial-sunburst-label-props(
    prefix = "#",
    state = 'normal'
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

{{ use: partial-sunburst-itemStyle-props(
    prefix = "#",
    state = 'normal'
) }}

## emphasis

高亮状态配置。

{{ use: partial-focus-blur-scope(
    isTree = true
) }}

{{ use: partial-sunburst-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur

淡出状态配置。开启 [emphasis.focus](~series-sunburst.emphasis.focus) 后有效。

{{ use: partial-sunburst-state(
    prefix = "##",
    state = 'blur'
) }}

## select

选中状态配置。开启 [selectedMode](~series-sunburst.selectedMode) 后有效。

{{ use: partial-sunburst-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## levels(Array)

**多层配置**

旭日图是一种有层次的结构，为了方便同一层样式的配置，我们提供了 levels 配置项。它是一个数组，其中的第 0 项表示数据下钻后返回上级的图形，其后的每一项分别表示从圆心向外层的层级。

例如，假设我们没有数据下钻功能，并且希望将最内层的扇形块的颜色设为红色，文字设为蓝色，可以这样设置：

```ts
series: {
    // ...
    levels: [
        {
            // 留给数据下钻点的空白配置
        },
        {
            // 最靠内测的第一层
            itemStyle: {
                color: 'red'
            },
            label: {
                color: 'blue'
            }
        },
        {
            // 第二层 ...
        }
    ]
}
```

### radius(Array)

{{ use: partial-version(
    version = "5.2.0"
) }}

当前层的内半径和外半径，注意其它层的内外半径不会因为该层的改变自适应。

{{ use: partial-sunburst-label-props(
    prefix = "##"
) }}

{{ use: partial-sunburst-itemStyle-props(
    prefix = "##"
) }}

### emphasis

高亮状态配置。

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur

淡出状态配置。

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'blur'
) }}

### select

选中状态配置。

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series() }}

{{ use: partial-animation(
    prefix = "#",
    defaultAnimationEasing = "'cubicOut'",
    defaultAnimationDuration = 1000,
    defaultAnimationDurationUpdate = 500
) }}
