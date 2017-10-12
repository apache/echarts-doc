
{{target: series-tree}}

# series.tree(Object)

**树图**

树图主要用来可视化树形数据结构，是一种特殊的层次类型，具有唯一的根节点，左子树，和右子树。

**注意：
目前不支持在单个 series 中直接绘制森林，可以通过在一个 option 中配置多个 series 实现森林**

**树图示例：**

~[800x580](${galleryViewPath}sankey-energy&edit=1&reset=1)


## type(string) = 'tree'

{{ use: partial-rect-layout-width-height(
    componentName='tree',
    defaultLeft: '12%',
    defaultRight: '12%',
    defaultTop: '12%',
    defaultBottom: '12%',
    defaultWidth: 'null',
    defaultHeight: 'null'
) }}


## layout(string)

图中每个矩形节点的宽度。


## nodeGap(number) = 8

图中每一列任意两个矩形节点之间的间隔。


## layoutIterations(number) = 32

布局的迭代次数，用来不断优化图中节点的位置，以减少节点和边之间的相互遮盖。

默认布局迭代次数：`32`。

经测试，布局迭代次数不要低于默认值。

## label(Object)

`label` 描述了每个矩形节点中文本标签的样式。

### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultShowLabel=true,
    defaultPosition="'right'",
    formatter1d=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###",
    formatter1d=true
)}}

## itemStyle(Object)

桑基图节点矩形的样式。

### normal(Object)
{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true,
    defaultBorderWidth=1,
    defaultBorderColor="'#aaa'"
)}}
### emphasis(Object)
{{use: partial-item-style(prefix="###")}}


## lineStyle(Object)
桑基图边的样式，其中 [lineStyle.normal.color](~series-sankey.lineStyle.normal.color) 支持设置为`'source'`或者`'target'`特殊值，此时边会自动取源节点或目标节点的颜色作为自己的颜色。

### normal(Object)
{{use: partial-sankey-line-style(prefix="###")}}
### emphasis(Object)
{{use: partial-sankey-line-style(
    prefix="###"
)}}


## data(Array)

{{ use: partial-1d-data-desc() }}
### name(string)
数据项名称。
### value(number|Array)
数据项值。
### itemStyle(Object)
该节点的样式。
#### normal(Object)
{{use:partial-item-style(prefix="####", useColorPalatte=true)}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

### label(Object)
该节点标签的样式。
#### normal(Object)
{{ use:partial-label(
    prefix="####"
) }}
#### emphasis(Object)
{{ use:partial-label(
    prefix="####"
) }}

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


## nodes(Array)
同 [data](~series-sankey.data)

## links(Array)
节点间的关系数据。示例：
```js
links: [{
    source: 'n1',
    target: 'n2'
}, {
    source: 'n2',
    target: 'n3'
}]
```
### source(string)
边的[源节点名称](~series-graph.data.name)
### target(string)
边的[目标节点名称](~series-graph.data.name)
### value(number)
边的数值，决定边的宽度。
### lineStyle(Object)
关系边的线条样式。
#### normal(Object)
{{use:partial-sankey-line-style(
    prefix="####"
)}}
#### emphasis(Object)
{{ use:partial-sankey-line-style(
    prefix="####"
) }}

## edges(Array)
同 [links](~series-sankey.links)

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing="'linear'",
    defaultAnimationDuration=1000,
    galleryEditorPath=${galleryEditorPath}
)}}

{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}



{{target: partial-sankey-line-style}}

#${prefix} color(Color) = "'#314656'"
桑基图边的颜色。

#${prefix} opacity(number) = 0.2
桑基图边的透明度。

#${prefix} curveness(number) = 0.5
桑基图边的曲度。

{{use: partial-style-shadow(prefix=${prefix})}}
