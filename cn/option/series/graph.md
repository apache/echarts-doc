{{target: series-graph}}
# series.graph(Object)

**关系图**

用于展现节点以及节点之间的关系数据。

**注意：** ECharts 2.x 中 `force` 类型的图表不再在 ECharts 3 中提供支持，转为统一使用 `graph` 去展现关系数据。如果要使用力引导布局，可以将 [layout](~series-graph.layout) 配置项设为`'force'`。

**示例：**

~[600x400](${galleryViewPath}graph&reset=1&edit=1)

## type(string) = 'graph'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

## hoverAnimation(boolean)
是否开启鼠标 hover 节点的提示动画效果。

## layout(string) = 'none'
图的布局。

**可选：**
+ `'none'` 不采用任何布局，使用[节点](~series-graph.data)中提供的 [x](~series-graph.data.x)， [y](~series-graph.data.y) 作为节点的位置。

+ `'circular'` 采用环形布局，见示例 [Les Miserables](${galleryEditorPath}graph-circular-layout)。

+ `'force'` 采用力引导布局，见示例 [Force](${galleryEditorPath}graph-force)，布局相关的配置项见 [graph.force](~series-graph.force)

## force(Object)
力引导布局相关的配置项，力引导布局是模拟弹簧电荷模型在每两个节点之间添加一个斥力，每条边的两个节点之间添加一个引力，每次迭代节点会在各个斥力和引力的作用下移动位置，多次迭代后节点会静止在一个受力平衡的位置，达到整个模型的能量最小化。

力引导布局的结果有良好的对称性和局部聚合性，也比较美观。

### initLayout(string)
进行力引导布局前的初始化布局，初始化布局会影响到力引导的效果。

默认不进行任何布局，使用[节点](~series-graph.data)中提供的 [x](~series-graph.data.x)， [y](~series-graph.data.y) 作为节点的位置。如果不存在的话会随机生成一个位置。

也可以选择使用环形布局 `'circular'`。

### repulsion(number) = 50
节点之间的斥力因子。该值越大节点之间的斥力越大，两个节点间的距离也会越远。

### gravity(number) = 0.1
节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。

### edgeLength(number) = 30
边的两个节点之间的距离，这个距离也会受 [repulsion](~series-graph.force.repulsion)。

### layoutAnimation(boolean) = true
因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。

## roam(boolean) = false
{{ use: partial-roam }}

## nodeScaleRatio(number) = 0.6
鼠标漫游缩放时节点的相应缩放比例，当设为`0`时节点不随着鼠标的缩放而缩放

{{ use: partial-symbol(
    prefix='#',
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    name='关系图节点',
    hasCallback=true
) }}

## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}

## lineStyle(Object)
关系边的公用线条样式。
### normal(Object)
{{use:partial-line-style(
    prefix="###",
    defaultColor="'#aaa'",
    defaultWidth=1,
    defaultOpacity=0.5,
    hasCurveness=true
)}}
### emphasis(Object)
{{ use:partial-line-style(
    prefix="###"
) }}

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter1d=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###",
    defaultShow=true,
    formatter1d=true
)}}

## categories(Array)
节点分类的类目，可选。

如果节点有分类的话可以通过 [data[i].category](~series-graph.data.category) 指定每个节点的类目，类目的样式会被应用到节点样式上。[图例](~legend)也可以基于`categories`名字展现和筛选。

### name(string)
类目名称，用于和 [legend](~legend) 对应以及格式化 [tooltip](~tooltip) 的内容。

{{ use: partial-symbol(
    prefix='##',
    name='该类目节点'
) }}

### itemStyle(Object)
该类目节点的样式。
#### normal(Object)
{{use:partial-item-style(prefix="####", useColorPalatte=true)}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

### label(Object)
该类目节点标签的样式。
#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside",
    formatter1d=true
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}


## data(Array)
{{ use: partial-1d-data-desc() }}
### name(string)
数据项名称。
### value(number|Array)
数据项值。
### category(number)
数据项所在类目的 index。

{{ use: partial-symbol(
    prefix='##',
    name='该类目节点'
) }}

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
同 [data](~series-graph.data)

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
### lineStyle(Object)
关系边的线条样式。
#### normal(Object)
{{use:partial-line-style(
    prefix="####"
)}}
##### curveness(number) = 0
边的曲度，支持从 0 到 1 的值，值越大曲度越大。
#### emphasis(Object)
{{ use:partial-line-style(
    prefix="####"
) }}


## edges(Array)
同 [links](~series-graph.links)

{{use: partial-mark-point(
    prefix="#",
    seriesType="graph"
)}}
{{use: partial-mark-line(
    prefix="#",
    seriesType="graph"
)}}

{{ use: partial-rect-layout-width-height(
    defaultLeft="'center'",
    defaultTop="'center'",
    defaultWidth='自适应',
    defaultHeight='自适应'
) }}

##color(Array)

调色盘颜色列表。如果[节点类型](~series-graph.categories)没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。

默认为：
```js
['#c23531', '#314656', '#61a0a8', '#dd8668', '#91c7ae', '#6e7074', '#61a0a8', '#bda29a', '#44525d', '#c4ccd3']
```


{{ use: partial-animation(prefix="#") }}