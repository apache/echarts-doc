
{{target: series-sankey}}

# series.sankey(Object)

** 桑基图 **

是一种特殊的流图, 它主要用来表示原材料、能量等如何从初始形式经过中间过程的加工、转化到达最终形式。

**示例：**

~[700x580](${galleryViewPath}sankey-energy&edit=1&reset=1)


<br>
**可视编码：**

桑基图将原数据中的每个`node`编码成一个小矩形，不同的节点尽量用不同的颜色展示，小矩形旁边的`label`编码的是节点的名称。

此外，图中每两个小矩形之间的边编码的是原数据中的`link`，边的粗细编码的是`link`中的`value`。

<br>
**排序：**
如果想指定结果的纵向顺序，那么可以把 [layoutIterations](~series-sankey.layoutIterations) 设为 `0`，此时纵向的顺序依照数据在 [links](~series-sankey.links) 中出现的顺序。


## type(string) = 'sankey'

{{ use: partial-rect-layout-width-height(
    componentName='sankey',
    defaultLeft: '5%',
    defaultRight: '20%',
    defaultTop: '5%',
    defaultBottom: '5%',
    defaultWidth: 'null',
    defaultHeight: 'null'
) }}


## nodeWidth(number) = 20

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
    formatter2d=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###"
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


{{target: partial-sankey-line-style}}

#${prefix} color(Color) = "'#314656'"
桑基图边的颜色。

#${prefix} opacity(number) = 0.2
桑基图边的透明度。

#${prefix} curveness(number) = 0.5
桑基图边的曲度。

{{use: partial-style-shadow(prefix=${prefix})}}
