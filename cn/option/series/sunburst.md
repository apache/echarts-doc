{{ target: series-sunburst }}

# series.sunburst(Object)

[旭日图（Sunburst）](https://en.wikipedia.org/wiki/Pie_chart#Ring_chart_/_Sunburst_chart_/_Multilevel_pie_chart)由多层的环形图组成，在数据结构上，内圈是外圈的父节点。因此，它既能像[饼图](~series-pie)一样表现局部和整体的占比，又能像[矩形树图](~series-treemap)一样表现层级关系。

**示例：**

~[700x500](${galleryViewPath}sunburst-monochrome&edit=1&reset=1)

~[700x700](${galleryViewPath}sunburst-drink&edit=1&reset=1)


## type(string) = 'sunburst'


{{use: component-circular-layout(
    componentName="旭日图",
    defaultRadius="[0, '75%']"
)}}


## highlightPolicy(string) = 'descendant'

当鼠标移动到一个扇形块时，可以高亮相关的扇形块。**如果其值为 `'descendant'`，则会高亮该扇形块和后代元素，其他元素将被淡化（*downplay*，参见 [itemStyle](~series-sunburst.itemStyle)）；如果其值为 `'ancestor'`，则会高亮该扇形块和祖先元素；如果其值为 `'self'` 则只高亮自身；`'none'` 则不会淡化其他元素。**

~[700x350](${galleryViewPath}doc-example/sunburst-highlight-descendant&edit=1&reset=1)

上面的例子 `highlightPolicy` 是默认值 `'descendant'`，我们通过 `dispatchAction` 触发了旭日图中某个数据块的高亮操作（相当于将鼠标移动到下图中的 `target` 扇形块中）。目标扇形块将采用 `emphasis` 的样式（在本例中是为红色），和目标扇形块相关的扇形块（由 `highlightPolicy` 决定哪些扇形块是相关的）采用 `highlight` 的样式（橙色），其他扇形块采用 `downplay` 的样式（灰色）。而如果没有高亮对象，则所有扇形块都采用 `normal` 的样式。自 ECharts 4.0 版本起，由于 `normal` 可以省略不写，所以样式定义是类似这样的：

```js
itemStyle: {
    color: 'yellow',
    borderWidth: 2,
    emphasis: {
        color: 'red'
    },
    highlight: {
        color: 'orange'
    },
    downplay: {
        color: '#ccc'
    }
}
```

而如果将 `highlightPolicy` 设为 `'ancestor'`，则会得到这样的效果：

~[700x350](${galleryViewPath}doc-example/sunburst-highlight-ancestor&edit=1&reset=1)



## nodeClick(boolean|string) = 'zoomToNode'

点击节点后的行为。可取值为：

+ `false`：节点点击无反应。
+ `'rootToNode'`：点击节点后以该节点为根结点。
+ `'link'`：如果节点数据中有 [link](~series-sunburst.data.link) 点击节点后会进行超链接跳转。



## renderLabelForZeroData(boolean) = false

如果数据没有 `name`，是否需要渲染文字。



## label(Object)

`label` 描述了每个扇形块中，文本标签的样式。

## label(Object)
{{use:partial-label-desc}}


### normal(Object)

####${prefix} rotate(string|number) = 'radial'

如果是 `number` 类型，则表示标签的旋转角，从 -90 度到 90 度，正值是逆时针。

除此之外，还可以是字符串 `'radial'` 表示径向旋转、`'tangential'` 表示切向旋转。

默认径向旋转，如果不需要文字旋转，可以将其设为 `0`。

下面的例子展示了不同的 `rotate` 设置方法：

~[700x400](${galleryViewPath}sunburst-label-rotate&edit=1&reset=1)

####${prefix} align(string) = 'center'

文字对齐方式，可取值为：`'left'`、 `'center'`、 `'right'`。注意，`'left'` 是指靠近内圈，而 `'right'` 是指靠近外圈。

~[700x400](${galleryViewPath}doc-example/sunburst-label-align&edit=1&reset=1)

{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter=true,
    defaultShowLabel="true",
    noRotate=true,
    noAlign=true
)}}


### emphasis(Object)

####${prefix} rotate(string|number) = 'radial'

如果是 `number` 类型，则表示标签的旋转角，从 -90 度到 90 度，正值是逆时针。

除此之外，还可以是字符串 `'radial'` 表示径向旋转、`'tangential'` 表示切向旋转。

默认径向旋转，如果不需要文字旋转，可以将其设为 `0`。

下面的例子展示了不同的 `rotate` 设置方法：

~[700x400](${galleryViewPath}sunburst-label-rotate&edit=1&reset=1)

####${prefix} align(string) = 'center'

文字对齐方式，可取值为：`'left'`、 `'center'`、 `'right'`。注意，`'left'` 是指靠近内圈，而 `'right'` 是指靠近外圈。

~[700x400](${galleryViewPath}doc-example/sunburst-label-align&edit=1&reset=1)

{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter=true,
    defaultShowLabel="true",
    noRotate=true,
    noAlign=true
)}}


## itemStyle(Object)

旭日图扇形块的样式。

ECharts 中，通常使用 *normal* 表示图形的默认状态，*emphasis* 表示鼠标移动到图形上后的高亮状态。对于旭日图而言，我们引入了另两种状态：*highlight* 表示由于高亮了某个扇形块引起的其他相关扇形块的高亮；*downplay* 表示除了 highlight 扇形块之外的被淡化的扇形块。

### normal(Object)

图形的默认状态，参见 [itemStyle](~series-sunburst.itemStyle) 与 [highlightPolicy](~series-sunburst.highlightPolicy)。

{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true,
    defaultBorderWidth=1,
    defaultBorderColor="'white'",
    defaultOpacity=1
)}}

### emphasis(Object)

图形的默认状态，参见 [itemStyle](~series-sunburst.itemStyle) [highlightPolicy](~series-sunburst.highlightPolicy)。

{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true,
    defaultBorderWidth=1,
    defaultBorderColor="'white'",
    defaultOpacity=1
)}}

### highlight(Object)

图形的默认状态，参见 [itemStyle](~series-sunburst.itemStyle) [highlightPolicy](~series-sunburst.highlightPolicy)。

{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true,
    defaultBorderWidth=1,
    defaultBorderColor="'white'",
    defaultOpacity=1
)}}

### downplay(Object)

图形的默认状态，参见 [itemStyle](~series-sunburst.itemStyle) [highlightPolicy](~series-sunburst.highlightPolicy)。

{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true,
    defaultBorderWidth=1,
    defaultBorderColor="'white'",
    defaultOpacity=0.9
)}}



{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing="'cubicOut'",
    defaultAnimationDuration=1000,
    defaultAnimationDurationUpdate=500,
    galleryEditorPath=${galleryEditorPath}
)}}

