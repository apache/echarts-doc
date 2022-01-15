{{ target: sunburst-series }}

# 旭日图

[旭日图（Sunburst）](https://en.wikipedia.org/wiki/Pie_chart#Ring_chart_/_Sunburst_chart_/_Multilevel_pie_chart)由多层的环形图组成，在数据结构上，内圈是外圈的父节点。因此，它既能像[饼图](option.html#series-pie)一样表现局部和整体的占比，又能像[矩形树图](option.html#series-treemap)一样表现层级关系。

~[700x500](${galleryViewPath}sunburst-monochrome&edit=1&reset=1)

## 引入相关文件

旭日图是 Apache ECharts<sup>TM</sup> 4.0 新增的图表类型，从 [CDN](https://www.jsdelivr.com/package/npm/echarts) 引入完整版的 [echarts.min.js](https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js)

## 最简单的旭日图

创建旭日图需要在 `series` 配置项中声明类型为 `'sunburst'` 的系列，并且以树形结构声明其 `data`：

```ts
var option = {
    series: {
        type: 'sunburst',
        data: [{
            name: 'A',
            value: 10,
            children: [{
                value: 3,
                name: 'Aa'
            }, {
                value: 5,
                name: 'Ab'
            }]
        }, {
            name: 'B',
            children: [{
                name: 'Ba',
                value: 4
            }, {
                name: 'Bb',
                value: 2
            }]
        }, {
            name: 'C',
            value: 3
        }]
    }
};
```

得到以下结果：

~[700x400](${galleryViewPath}doc-example/sunburst-simple&edit=1&reset=1)

## 颜色等样式调整

默认情况下会使用全局调色盘 [color](option.html#color) 分配最内层的颜色，其余层则与其父元素同色。在旭日图中，扇形块的颜色有以下三种设置方式：

+ 在 [series.data.itemStyle](option.html#series-sunburst.data.itemStyle) 中设置每个扇形块的样式；
+ 在 [series.levels.itemStyle](option.html#series-sunburst.levels.itemStyle) 中设置每一层的样式；
+ 在 [series.itemStyle](option.html#series-sunburst.itemStyle) 中设置整个旭日图的样式。

上述三者的优先级是从高到低的，也就是说，配置了 `series.data.itemStyle` 的扇形块将会覆盖 `series.levels.itemStyle` 和 `series.itemStyle` 的设置。

下面，我们将整体的颜色设为灰色 `'#aaa'`，将最内层的颜色设为蓝色 `'blue'`，将 `Aa`、`B` 这两块设为红色 `'red'`。

```ts
var option = {
    series: {
        type: 'sunburst',
        data: [{
            name: 'A',
            value: 10,
            children: [{
                value: 3,
                name: 'Aa',
                itemStyle: {
                    color: 'red'
                }
            }, {
                value: 5,
                name: 'Ab'
            }]
        }, {
            name: 'B',
            children: [{
                name: 'Ba',
                value: 4
            }, {
                name: 'Bb',
                value: 2
            }],
            itemStyle: {
                color: 'red'
            }
        }, {
            name: 'C',
            value: 3
        }],
        itemStyle: {
            color: '#aaa'
        },
        levels: [{
            // 留给数据下钻的节点属性
        }, {
            itemStyle: {
                color: 'blue'
            }
        }]
    }
};
```

效果为：

~[700x300](${galleryViewPath}doc-example/sunburst-color&edit=1&reset=1)


## 按层配置样式

旭日图是一种有层次的结构，为了方便同一层样式的配置，我们提供了 [levels](option.html#series-sunburst.levels) 配置项。它是一个数组，其中的第 0 项表示数据下钻后返回上级的图形，其后的每一项分别表示从圆心向外层的层级。

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

在实际使用的过程中，你会发现按层配置样式是一个很常用的功能，能够很大程度上提高配置的效率。


## 数据下钻

旭日图默认支持数据下钻，也就是说，当点击了扇形块之后，将以该扇形块的数据作为根节点，便于进一步了解该数据的细节。

~[700x500](${galleryViewPath}sunburst-simple&edit=1&reset=1)

当数据下钻后，中间会出现一个用于返回上一层的图形，该图形的样式可以通过 [levels[0]](option.html#series-sunburst.levels) 配置。

如果不需要数据下钻功能，可以通过将 [nodeClick](option.html#series-sunburst.nodeClick) 设置为 `false` 关闭；或者将其设为 `'link'`，并将 [data.link](option.html#series-sunburst.data.link) 设为点击扇形块对应打开的链接。


## 高亮相关扇形块

旭日图支持鼠标移动到某扇形块时，高亮相关数据块的操作，可以通过设置 [highlightPolicy](option.html#series-sunburst.highlightPolicy)，包括以下几种高亮方式：

+ `'descendant'`（默认值）：高亮鼠标移动所在扇形块与其后代元素；
+ `'ancestor'`：高亮鼠标所在扇形块与其祖先元素；
+ `'self'`：仅高亮鼠标所在扇形块；
+ `'none'`：不会淡化（downplay）其他元素。

上面提到的“高亮”，对于鼠标所在的扇形块，会使用 `emphasis` 样式；对于其他相关扇形块，则会使用 `highlight` 样式。通过这种方式，可以很方便地实现突出显示相关数据的需求。

具体来说，对于配置项：

```ts
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

`highlightPolicy` 为 `'descendant'` 或 `'ancestor'` 的效果分别为：

~[700x350](${galleryViewPath}doc-example/sunburst-highlight-descendant&edit=1&reset=1)

~[700x350](${galleryViewPath}doc-example/sunburst-highlight-ancestor&edit=1&reset=1)

## 总结

上面的教程主要讲述的是如何入门使用旭日图，感兴趣的用户可以在 [配置项手册](option.html#series-sunburst) 查看更完整的文档。在灵活应用这些配置项之后，就能做出丰富多彩的旭日图了！

~[700x600](${galleryViewPath}sunburst-book&edit=1&reset=1)

~[700x600](${galleryViewPath}sunburst-drink&edit=1&reset=1)




