{{target: series-graph}}
# series.graph(Object)

**关系图**

用于展现节点以及节点之间的关系数据。

**示例：**

~[800x500](${galleryViewPath}graph&reset=1&edit=1)

## type(string) = 'graph'

{{ use: partial-legend-hover-link() }}

## hoverAnimation(boolean)
是否开启鼠标 hover 节点的提示动画效果。

## roam(boolean) = false
{{ use: partial-roam }}

## nodeScaleRatio


{{ use:symbol(
    prefix='#',
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    name='关系图节点'
) }}

{{ use:partial-rect-layout(
    defaultLeft='center',
    defaultTop='center',
    defaultWidth='自适应',
    defaultHeight='自适应'
) }}
