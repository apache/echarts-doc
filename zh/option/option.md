{{target: option}}

{{import: component-title}}
{{import: component-legend}}
{{import: component-grid}}
{{import: component-x-axis}}
{{import: component-y-axis}}
{{import: component-polar}}
{{import: component-radius-axis}}
{{import: component-angle-axis}}
{{import: component-radar}}
{{import: component-data-zoom}}
{{import: component-visual-map}}
{{import: component-tooltip}}
{{import: component-axisPointer}}
{{import: component-toolbox}}
{{import: component-brush}}
{{import: component-geo}}
{{import: component-parallel}}
{{import: component-parallel-axis}}
{{import: component-single-axis}}
{{import: component-timeline}}
{{import: component-graphic}}
{{import: component-calendar}}
{{import: component-dataset}}
{{import: component-aria}}


{{import: series-line}}
{{import: series-bar}}
{{import: series-pie}}
{{import: series-scatter}}
{{import: series-effectScatter}}

{{import: series-radar}}
{{import: series-tree}}
{{import: series-treemap}}
{{import: series-sunburst}}
{{import: series-boxplot}}
{{import: series-candlestick}}
{{import: series-heatmap}}
{{import: series-map}}
{{import: series-parallel}}
{{import: series-lines}}
{{import: series-graph}}
{{import: series-sankey}}
{{import: series-funnel}}
{{import: series-gauge}}
{{import: series-pictorialBar}}
{{import: series-themeRiver}}
{{import: series-custom}}

# darkMode(boolean)

是否是暗黑模式，默认会根据背景色 [backgroundColor](~backgroundColor) 的亮度自动设置。
如果是设置了容器的背景色而无法判断到，就可以使用该配置手动指定，echarts 会根据是否是暗黑模式调整文本等的颜色。

该配置通常会被用于主题中。

# color(Array)

调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。 默认为：
```ts
['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
```

支持的颜色格式：

+ 使用 RGB 表示颜色，比如 `'rgb(128, 128, 128)'`，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 `'rgba(128, 128, 128, 0.5)'`，也可以使用十六进制格式，比如 `'#ccc'`。

+ 渐变色或者纹理填充
```ts
// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: 'red' // 0% 处的颜色
    }, {
        offset: 1, color: 'blue' // 100% 处的颜色
    }],
    global: false // 缺省为 false
}
// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
{
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.5,
    colorStops: [{
        offset: 0, color: 'red' // 0% 处的颜色
    }, {
        offset: 1, color: 'blue' // 100% 处的颜色
    }],
    global: false // 缺省为 false
}
// 纹理填充
{
    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
    repeat: 'repeat' // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
}
```


# backgroundColor(Color) = 'transparent'
背景色，默认无背景。

{{ use: partial-color-desc() }}


# textStyle(Object)
全局的字体样式。
{{ use: partial-simple-text-style(
    prefix='#',
    defaultFontSize=12
) }}

{{import: partial-animation }}

# stateAnimation(Object)

状态切换的动画配置，支持在每个系列里设置单独针对该系列的配置。

{{use: partial-state-animation(
    prefix = '#'
) }}


# blendMode(string) = 'source-over'

图形的混合模式，不同的混合模式见 https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation 。

默认为 `'source-over'`。 支持每个系列单独设置。

`'lighter'` 也是比较常见的一种混合模式，该模式下图形数量集中的区域会颜色叠加成高亮度的颜色（白色）。常常能起到突出该区域的效果。见示例 [全球飞行航线](${galleryEditorPath}lines-airline)

# hoverLayerThreshold(number) = 3000

图形数量阈值，决定是否开启单独的 hover 层，在整个图表的图形数量大于该阈值时开启单独的 hover 层。

单独的 hover 层主要是为了在高亮图形的时候不需要重绘整个图表，只需要把高亮的图形放入单独的一个 canvas 层进行绘制，防止在图形数量很多的时候因为高亮重绘所有图形导致卡顿。

ECharts 2 里是底层强制使用单独的层绘制高亮图形，但是会带来很多问题，比如高亮的图形可能会不正确的遮挡所有其它图形，还有图形有透明度因为高亮和正常图形叠加导致不正确的透明度显示，还有移动端上因为每个图表都要多一个 canvas 带来的额外内存开销。因此 3 里默认不会开启该优化，只有在图形数量特别多，有必要做该优化时才会自动开启。


# useUTC(boolean) = false

是否使用 UTC 时间。

+ `true`: 表示 `axis.type` 为 `'time'` 时，依据 UTC 时间确定 tick 位置，并且 `axisLabel` 和 `tooltip` 默认展示的是 UTC 时间。
+ `false`: 表示 `axis.type` 为 `'time'` 时，依据本地时间确定 tick 位置，并且 `axisLabel` 和 `tooltip` 默认展示的是本地时间。

默认取值为false，即使用本地时间。因为考虑到：

+ 很多情况下，需要展示为本地时间（无论服务器存储的是否为 `UTC` 时间）。
+ 如果 data 中的时间为 '2012-01-02' 这样的没有指定时区的时间表达式，往往意为本地时间。默认情况下，时间被展示时需要和输入一致而非有时差。

注意，这个参数实际影响的是『展示』，而非用户输入的时间值的解析。
关于用户输入的时间值（例如 `1491339540396`, `'2013-01-04'` 等）的解析，参见 [date 中时间相关部分](~series-line.data)。


# options(Array)

用于 [timeline](option.html#timeline) 的 option 数组。数组的每一项是一个 echarts option (`ECUnitOption`)。


# media(Array)

请参见 [移动端自适应](tutorial.html#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%87%AA%E9%80%82%E5%BA%94)。

## query(Object)

同时写两个属性，表示 “且”。

### minWidth(number) = undefined

`minWidth: 200` 表示『大于等于 200px 宽度』。

### maxHeight(number) = undefined

`minHeight: 200` 表示『大于等于 200px 高度』。

### minAspectRatio(number) = undefined

长宽比。值如 `1.3`。

## option(Object)

数组的每一项是一个 echarts option (`ECUnitOption`)，当此 query 被匹配时，会使用这个 option 。
