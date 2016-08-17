## v3.2.3
<div class="time">2016-08-16</div>

+ [^] [Graph](http://echarts.baidu.com/option.html#series-graph) 环形布局支持设置 [rotateLabel](http://echarts.baidu.com/option.html#series-graph.circular.rotateLabel) 旋转标签，见示例 [graph-circular-layout](http://echarts.baidu.com/gallery/editor.html?c=graph-circular-layout)

+ [^] 修复雷达图中 indicator 无法同时设置 [min](http://echarts.baidu.com/option.html#radar.indicator.min), [max](http://echarts.baidu.com/option.html#radar.indicator.max) 的 bug。见 [#3628](https://github.com/ecomfe/echarts/issues/3628)

+ [^] 修复关闭动画时阶梯线图刷新会变成普通折线图的 bug。见 [#3645](https://github.com/ecomfe/echarts/issues/3645)

+ [^] [setOption](http://echarts.baidu.com/api.html#echartsInstance.setOption) 第三个参数调整为 lazyUpdate, 从原先的不立即重绘画布改为不立即更新图表，从而优化在多处地方多次 setOption 设置同一个图表会产生的性能问题。

+ [^] 修复 [graph](http://echarts.baidu.com/option.html#series-graph) 中曲线两边的 [edgeSymbol](http://echarts.baidu.com/option.html#series-graph.edgeSymbol) 有可能无法对齐节点的 bug。

+ [^] 修复 [graph](http://echarts.baidu.com/option.html#series-graph) 中 [symbolSize](http://echarts.baidu.com/option.html#series-graph.symbolSize) 为数组时无法绘制带有 [edgeSymbol](http://echarts.baidu.com/option.html#series-graph.edgeSymbol) 的直线的 bug。

+ [^] 修复饼图中关闭图例会导致颜色显示不一致的 bug。见 [#3735](https://github.com/ecomfe/echarts/issues/3735)

+ [^] 优化对数轴，新加参数 [logBase](http://echarts.baidu.com/option.html#yAxis.logBase)。见 [#3749](https://github.com/ecomfe/echarts/issues/3749)

+ [^] 地图拖拽性能优化。

## v3.2.2
<div class="time">2016-07-11</div>

+ [+] [xAxis](http://echarts.baidu.com/option.html#xAxis) 和 [yAxis](http://echarts.baidu.com/option.html#yAxis) 新增 [offset](http://echarts.baidu.com/option.html#yAxis.offset) 属性用于多 Y 轴场景。见 [多 Y 轴示例](http://echarts.baidu.com/gallery/editor.html?c=multiple-y-axis)

+ [+] 类目轴新增 [axisTick.alignWithLabel](http://echarts.baidu.com/option.html#xAxis.axisTick.alignWithLabel) 属性保证刻度线与刻度标签的对齐。见 [坐标轴刻度与标签对齐示例](http://echarts.baidu.com/gallery/editor.html?c=bar-tick-align)

+ [+] [legend](http://echarts.baidu.com/option.html#legend) 支持显示 [tooltip](http://echarts.baidu.com/option.html#legend.tooltip)。


+ [+] [geo](http://echarts.baidu.com/option.html#geo) 组件和 [map](http://echarts.baidu.com/option.html#series-map) 系列新增 [layoutCenter](http://echarts.baidu.com/option.html#geo.layoutCenter) 和 [layoutSize](http://echarts.baidu.com/option.html#geo.layoutSize) 属性用于基于中心位置的布局。

+ [^] 支持在`time`类型的坐标轴上显示柱状图。

+ [^] 修复系列数据和坐标轴类目数量不一致时 tooltip 显示错误的 bug。

+ [^] 修复折线图和地图混搭时再使用多个 visualMap 组件可能会报错的 bug。见 [#3544](https://github.com/ecomfe/echarts/issues/3544)

+ [^] 修复坐标轴轴线设置渐变色报错的 bug。见 [#3577](https://github.com/ecomfe/echarts/issues/3577)

+ [^] 修复数据都相同的折线图中使用 visualMap 时可能会报错的 bug。见 [#3582](https://github.com/ecomfe/echarts/issues/3582)

+ [^] 优化坐标轴刻度的划分。

+ [^] 修复当字符串类型数据 tooltip 默认显示为 `'-'` 的问题。见 [#3307](https://github.com/ecomfe/echarts/issues/3307)。优化时间类型数据的默认 tooltip。

+ [^] 数据项支持 tooltip 配置为字符串。如下示例

    ```js
    data: [{
        name: 'First',
        tooltip: 'First tooltip',
        value: 0
    }]
    ```

+ [^] 保证图形的绘制顺序与数据数组的顺序相同。

+ [^] 修复 3.2.1 中散点图边框无法设置的 bug。

+ [^] 坐标轴鼠标事件触发改为通过 [triggerEvent](http://echarts.baidu.com/option.html#xAxis.triggerEvent) 配置

## v3.2.1
<div class="time">2016-07-04</div>

+ [^] 修复 `brushAction` 文件名大小写错误导致 linux 和 windows 环境下无法正确引用模块的 bug。

+ [^] 修复散点图 `large` 为 `true` 时可能导致圆形绘制错误的问题。

+ [^] 移除默认柱状图边框样式。

+ [^] dataZoom 对 xAxisIndex 的处理更鲁棒。

## v3.2.0
<div class="time">2016-06-30</div>

详细的变动介绍见 [ECharts 3.2.0 变动介绍](http://efe.baidu.com/blog/echarts-3.2.0/)

+ **[+] 新加刷选 [brush](http://echarts.baidu.com/option.html#brush) 组件。** 见下面几个 Brushing and Linking 的例子：

    + [地图与平行坐标](http://echarts.baidu.com/gallery/editor.html?c=map-parallel-prices)，[K线图与柱状图](http://echarts.baidu.com/gallery/editor.html?c=candlestick-brush)，[散点矩阵与平行坐标](http://echarts.baidu.com/gallery/editor.html?c=scatter-matrix)

+ **[+] 新加标域 [markArea](http://echarts.baidu.com/option.html#markArea) 组件。** 见示例 [用电量分布](http://echarts.baidu.com/gallery/editor.html?c=line-sections)，[男女身高体重分布](http://echarts.baidu.com/gallery/editor.html?c=scatter-weight)

+ **[+] 新加单轴 [singleAxis](http://echarts.baidu.com/option.html#singleAxis) 组件。** 见示例 [单轴散点图](http://echarts.baidu.com/gallery/editor.html?c=scatter-single-axis)

+ [^] 折线图优化
    + [+] 新增 [step](http://echarts.baidu.com/option#series-line.step) 属性显示成阶梯线图。见示例 [Step Line](http://echarts.baidu.com/gallery/editor.html?c=line-step)
    + [^] 优化与 visualMap 的结合，支持分段显示不同颜色。见示例 [北京 AQI](http://echarts.baidu.com/gallery/editor.html?c=line-aqi)，[用电量分布](http://echarts.baidu.com/gallery/editor.html?c=line-sections)

+ [^] 线图优化

    + [+] 新增 `polyline` 属性，支持显示多段的轨迹路线。见示例 [北京公交路线图](http://echarts.baidu.com/gallery/editor.html?c=lines-bmap-bus)，以及 [带有特效的北京公交路线图](http://echarts.baidu.com/gallery/editor.html?c=lines-bmap-effect)

    + [+] 新增 [large](http://echarts.baidu.com/option.html#series-lines.large) 和 [largeThreshold](http://echarts.baidu.com/option.html#series-lines.largeThreshold) 配置项支持大规模线图的绘制。见示例 [65k 条飞机航线的可视化](http://echarts.baidu.com/gallery/editor.html?c=lines-airline)

    + [+] [effect](http://echarts.baidu.com/option.html#series-lines.effect) 新增 [constantSpeed](http://echarts.baidu.com/option.html#series-lines.effect.constantSpeed) 和 [loop](http://echarts.baidu.com/option.html#series-lines.effect.loop)

    + [^] 数据格式变动，从原先的 `data: [ [{ coord: [lng, lat] }, { coord: [lng, lat]}] ]` 改为 `data: [ { coords: [[lng, lat], [lng, lat]] } ]`。统一在一个属性里存放坐标点是为了更好的支持 `polyline` 为 true 的时候配置多个坐标点。原先的方式也兼容，但是不建议继续使用。


+ [^] Graph 优化

    + [+] 新加 [focusNodeAdjacency](http://echarts.baidu.com/option.html#series-graph.focusNodeAdjacency) 配置项用于开启鼠标 hover 高亮节点及相邻边和节点的效果。
    + [+] 边颜色 [lineStyle.normal.color](http://echarts.baidu.com/option.html#series-graph.lineStyle.normal.color) 支持配置为 `'source'` 或者 `'target'` 取源节点和目标节点的颜色。见示例 [Les Miserables](http://echarts.baidu.com/gallery/editor.html?c=graph)
    + [+] 改为使用默认取全局的调色盘
    + 修复 [edgeSymbolSize](http://echarts.baidu.com/option.html#series-graph.edgeSymbolSize) 为数组时边无法显示的 bug。
    + 修复同时配置 [edgeSymbol](http://echarts.baidu.com/option.html#series-graph.edgeSymbol) 和 [force layout](http://echarts.baidu.com/option.html#series-graph.layout) 时会导致布局抽搐的 bug。

+ [^] dataZoom 优化

    + [+] 新增 [handleIcon](http://echarts.baidu.com/option.html#dataZoom-slider.handleIcon) 配置项用于配置手柄形状。[handleSize](http://echarts.baidu.com/option.html#dataZoom-slider.handleIcon) 修改为相对于 dataZoom 高度的百分比大小。见示例 [2015 年上证指数](http://echarts.baidu.com/gallery/editor.html?c=candlestick-sh-2015)

    + [+] 新增 [handleStyle](http://echarts.baidu.com/option.html#dataZoom-slider.handleStyle) 配置项用于配置更丰富的手柄细节样式。取代原先的 `handleColor` 配置项。

    + [+] 新增 [dataBackground](http://echarts.baidu.com/option.html#dataZoom-slider.dataBackground) 配置项用于配置更丰富的数据预览样式。取代原先的 `dataBackgroundColor` 配置项。

+ [^] 平行坐标优化

    + [^] 新增 [parallel.axisExpandable](http://echarts.baidu.com/option.html#parallel.axisExpandable)，改善高维数据（大量坐标轴）的展示。参见例子 [http://echarts.baidu.com/gallery/editor.html?c=map-parallel-prices]

    + [^] 新增 [parallelAxis.realtime](http://echarts.baidu.com/option.html#parallelAxis.realtime)

+ [^] 坐标轴优化

    + [^] 坐标轴支持过渡动画。见示例 [动态数据](http://echarts.baidu.com/gallery/editor.html?c=dynamic-data2)
    + [^] 优化坐标轴轴线和刻度线的绘制效果。
    + [^] 类目轴默认不显示分隔线 splitLine。
    + [^] 类目轴自动间隔的计算优化。修复类目轴在数据很多的时候有可能出现标签重叠的问题。
    + [^] [axisTick](http://echarts.baidu.com/option.html#xAxis.axisTick), [axisLabel](http://echarts.baidu.com/option.html#xAxis.axisLabel) 默认取 [axisLine](http://echarts.baidu.com/option.html#xAxis.axisLine) 的颜色。
    + [^] 修复双类目轴时数据无法使用类目值的 bug。见 [#3494](https://github.com/ecomfe/echarts/issues/3494)

+ [^] 桑基图 优化

    + [+] 边颜色 [lineStyle.normal.color](http://echarts.baidu.com/option.html#series-sankey.lineStyle.normal.color) 支持配置为 `'source'` 或者 `'target'` 取源节点和目标节点的颜色。

+ [^] visualMap 组件优化

    + [+] 新增 [realtime](http://echarts.baidu.com/option.html#visualMap-continuous.realtime) 配置项。
    + [^] 分段区间配置 [pieces](http://echarts.baidu.com/option.html#visualMap-piecewise.pieces) 改为通过 `lt`, `lte`, `gt`, `gte` 更细致的配置区间和区间的开闭。

+ [^] markPoint 和 markLine 优化

    + [+] 新增 `silent` 配置项用于关闭交互。
    + [^] 数据配置更加灵活，支持每个维度 (xAxis, yAxis) 配置为`'min'`, `'max'`, `'average'`。
    + [^] 平均值计算忽略控制。见 [#3367](https://github.com/ecomfe/echarts/issues/3367)

+ [^] 散点图在 [large](http://echarts.baidu.com/option.html#series-scatter.large) 模式下也支持 tooltip 和鼠标事件触发。

+ [^] 工具栏组件的 [dataZoom](http://echarts.baidu.com/option.html#toolbox.feature.dataZoom) 支持通过配置 `yAxisIndex: 'none'` 或者 `yAxisIndex: 'none'` 设置单轴上的框选。

+ [+] 图例新增 [inactiveColor](http://echarts.baidu.com/option.html#legend.inactiveColor) 配置图例关闭时的颜色。

+ [+] 标题组件新增 [textBaseline](http://echarts.baidu.com/option.html#title.textBaseline) 用于配置标题文字的垂直对齐。

+ [+] 新增 [hoverLayerThreshold](http://echarts.baidu.com/option.html#hoverLayerThreshold) 配置项

+ [+] 新增 [progressive](http://echarts.baidu.com/option.html#progressive) 和 [progressiveThreshold](http://echarts.baidu.com/option.html#progressiveThreshold) 配置用于配置渐进式渲染。见示例 [parallel-nutrients](http://echarts.baidu.com/gallery/editor.html?c=parallel-nutrients)

+ [+] 新增 [blendMode](http://echarts.baidu.com/option.html#blendMode) 配置图形的混合模式。

+ [+] `itemStyle` 新增 [borderType](http://echarts.baidu.com/option.html#series-bar.itemStyle.normal.borderType) 配置边框类型。

+ [+] 调色盘取色优化，相同名称的数据默认取相同的颜色。

+ [+] 仪表盘新增 [axisLabel.distance](http://echarts.baidu.com/option.html#xAxis.axisLabel.distance) 配置项。

+ [^] 颜色支持配置为渐变色和纹理。见 [itemStyle.normal.color](http://echarts.baidu.com/option.html#series-pie.itemStyle.normal.color)。示例 [渐变](http://echarts.baidu.com/gallery/editor.html?c=bubble-gradient)，[纹理](http://echarts.baidu.com/gallery/editor.html?c=pie-pattern)

+ [^] 修复多个系列的地图 tooltip 和 symbol 显示不正确的 bug。见 [#3436](https://github.com/ecomfe/echarts/issues/3436) [#3320](https://github.com/ecomfe/echarts/issues/3320)

+ [^] 优化 effectScatter 在 setOption 更新数据时动画不连贯的问题。见 [#3439](https://github.com/ecomfe/echarts/issues/3439)

+ [^] 优化 tooltip，返回空字符串的话不显示浮层。

+ [^] 修复 splitArea 会覆盖 splitLine 的问题。

+ [^] 修复雷达图不能修改线条颜色的 bug。见 [#3441](https://github.com/ecomfe/echarts/issues/3441)

+ [^] 修复数据刷新可能会导致事件绑定的内存泄露。见 [#3500](https://github.com/ecomfe/echarts/issues/3500)

+ [^] ZRender 性能优化，重绘性能为原先的 2x ~ 3x。

+ [^] 构建文件调整，压缩前的[开发版本](http://echarts.baidu.com/dist/echarts.js)加入了更细致的错误提示和警告，压缩后的[生产版本](http://echarts.baidu.com/dist/echarts.min.js)去掉了这些错误提示和警告。因此建议开发环境中使用[开发版本](http://echarts.baidu.com/dist/echarts.js)


## v3.1.10
<div class="time">2016-05-19</div>

+ **[^] [geo](http://echarts.baidu.com/option.html#geo) 优化**
    + [+] 支持监听鼠标事件，见 [geo](http://echarts.baidu.com/option.html#geo)
    + [+] 支持通过 [regions](http://echarts.baidu.com/option.html#geo.regions) 配置每个区域的样式
    + [+] 支持通过 [selectedMode](http://echarts.baidu.com/option.html#geo.selectedMode) 配置是否区域可选，区域的选择会抛出 [geoselectchanged](http://echarts.baidu.com/api.html#events.geoselectchanged) 事件

+ [^] 优化部分字体，例如微软雅黑的垂直对齐，见 [#2983](https://github.com/ecomfe/echarts/issues/2983)

+ [^] graph 动画优化，见示例 [graph-life-expectancy](http://echarts.baidu.com/gallery/editor.html?c=graph-life-expectancy)

+ [+] 数值轴新加 [minInterval](http://echarts.baidu.com/option.html#xAxis.minInterval)，见 [#3115](https://github.com/ecomfe/echarts/issues/3115)

+ [+] treemap 新增下钻功能，参见 [leafDepth](http://echarts.baidu.com/option.html#series-treemap.leafDepth)，和示例 [treemap-drill-down](http://echarts.baidu.com/gallery/editor.html?c=treemap-drill-down)

+ [^] markLine 优化，支持在直角坐标系中如下设置成水平线或者垂直线。

    ```js
    data: [{
        // Y 轴值为 100 的水平线
        yAxis: 100
    }]
    ```

    方便柱状图只有单个值的时候能够正确设置显示成某个值的水平标线。

+ [^] 桑基图支持单个节点自定义样式。

+ [^] 修复单个 echarts 实例中有多个 geo 组件并且都没有指定 name 时可能会导致单个组件在拖拽时影响其它组件散点图位置的问题。

+ [^] dataZoom 精度问题优化，见 [#3228](https://github.com/ecomfe/echarts/issues/3228)

+ [^] 修复 3.1.8 中雷达图点显示为黑色的 bug。

+ [^] 修复 3.1.8 中 graph 会在 safari 下报错的 bug。见 [#3220](https://github.com/ecomfe/echarts/issues/3220)

+ [^] 修复 [effectScatter](http://echarts.baidu.com/option.html#series-effectScatter) 中特效图形不能设置旋转的问题。

+ [^] 修复 timeline、mediaQuery 在进行第二次 setOption 时会失效的 bug。


## v3.1.9
<div class="time">2016-05-12</div>

+ [^] 修复 3.1.8 中`image://`类型的 symbol 无法显示的 bug。

+ [^] 修复使用笛卡尔坐标系的 graph 第二次 setOption 会报错的 bug。

## v3.1.8
<div class="time">2016-05-11</div>

+ **[^] Graph 优化**
    + [+] 支持通过 [edgeLabel](http://echarts.baidu.com/option.html#series-graph.edgeLabel) 配置边标签，见示例 [graph-simple](http://echarts.baidu.com/gallery/editor.html?c=graph-simple)
    + [+] 支持通过 [edgeSymbol](http://echarts.baidu.com/option.html#series-graph.edgeSymbol) 配置边两端的图形，见示例 [graph-simple](http://echarts.baidu.com/gallery/editor.html?c=graph-simple)
    + [^] 支持笛卡尔坐标系，极坐标与地理坐标系，见示例 [graph-grid](http://echarts.baidu.com/gallery/editor.html?c=graph-grid)
    + [^] 鼠标事件参数新加`dataType`参数用于判断是`'node'`还是`'edge'`

+ **[^] 地图优化**
    + [+] 加入 [zoom](http://echarts.baidu.com/option.html#series-map.zoom) 和 [center](http://echarts.baidu.com/option.html#series-map.center) 配置项用于定位，参见示例 [map-locate](http://echarts.baidu.com/gallery/editor.html?c=map-locate)
    + [^] 修复 `scaleLimit.min` 大于 1 时可能导致散点图布局错误的 bug。
    + [^] 绘制性能优化

+ **[^] treemap 优化**
    + [^] 修复无法只在高亮的时候显示 label 的问题。Fix [#2975](https://github.com/ecomfe/echarts/issues/2975)
    + [^] 修复中事件参数不正确的 bug。见 [#3063](https://github.com/ecomfe/echarts/issues/3063)

+ **[^] visualMap 组件优化**
    + [+] 支持映射到 `opacity`。见 [visualMap.inRange](http://echarts.baidu.com/option.html#visualMap-continuous.inRange)。
    + [+] 加入配置项 [visualMap.hoverLink](http://echarts.baidu.com/option.html#visualMap-continuous.hoverLink)，支持 visualMap 组件与图表图形的联动。
    + [^] visual 的值之前支持设置为单个数字，例如 `0.2`。
    + [^] 修复使用 merge 模式第二次 setOption 时，viusal 配置无法保持的 bug。
    + [^] 修复使用 `colorHue` 时，visualMap 控制条颜色渐变不对的 bug。

+ [+] 折线图加入 [connectNulls](http://echarts.baidu.com/option.html#series-line.connectNulls) 配置项，见 [#2579](https://github.com/ecomfe/echarts/issues/2579)

+ [+] markLine 标签位置支持配置为中间 `'middle'`。

+ [+] 加入 [animationDelay](http://echarts.baidu.com/option.html#animationDelay) 和 [animationDelayUpdate]((http://echarts.baidu.com/option.html#animationDelayUpdate) 配置项用于展现更丰富和戏剧性的动画效果，参见示例 [bar-animation-delay](http://echarts.baidu.com/gallery/editor.html?c=bar-animation-delay)

+ [^] 修正 markPoint 、markLine、timeLine 鼠标事件参数中的`componentType`属性，可以通过该判断鼠标事件的触发对象。

+ [^] 修正了 [tooltip.show](http://echarts.baidu.com/option.html#tooltip.show) 功能,同时控制`提示框浮层`和`axisPointer`的隐藏和显示。[tooltip.showContent](http://echarts.baidu.com/option.html#tooltip.showContent) 仅控制`提示框浮层`的隐藏和显示。

+ [^] 仪表盘优化超出范围的数据的展现。见 [#3067](https://github.com/ecomfe/echarts/issues/3067)

+ [^] 修复 3.1.7 中多系列饼图图例绘制错误的 bug。

+ [^] markPoint 和 markLine 的位置属性`x`, `y`支持百分比。

+ [^] 修复图形高亮时刷新整个图表会导致高亮图形样式错误的 bug。

+ [^] 修复 setOption 无法清除之前设置的阴影样式的 bug。

+ [^] 修复柱状图中渐变色无法正确显示的 bug，见 [#3065](https://github.com/ecomfe/echarts/issues/3065)

+ [^] 修复桑基图中关闭动画会导致右侧标签显示不全的 bug。

+ [^] 优化折线图中可能会裁剪掉一半最顶端水平线，使得顶端水平线看起来更细的情况。

+ [^] 修复 IE8 中饼图 0 数据显示为圆形的 bug。见 [#3128](https://github.com/ecomfe/echarts/issues/3128)

+ [^] 修复 IE8 只有高亮显示标签可能会无效的 bug。


## v3.1.7
<div class="time">2016-04-21</div>

+ [+] visualMap 组件新加入 [align](http://echarts.baidu.com/option.html#visualMap-continuous.align) 属性。

+ [+] 坐标轴刻度标签支持可点击的配置，见 [xAxis.silent](http://echarts.baidu.com/option.html#xAxis.silent)。

+ [+] tooltip 加入 [showDelay](http://echarts.baidu.com/option.html#tooltip.showDelay)。

+ [^] 修复数据精度很高时 dataZoom 会产生错误的截断的 bug。

+ [^] 修复 k 线图联动的 bug。Fix [#2992](https://github.com/ecomfe/echarts/issues/2992)

+ [^] 修复 resize 会错误的触发 tooltip 的 bug。 Fix [#2988](https://github.com/ecomfe/echarts/issues/2988)

+ [^] `axisLabel.textStyle.color` 支持回调函数，见 [#2796](https://github.com/ecomfe/echarts/issues/2796)

+ [^] 修复 IE8 下 dataZoom 区间缩小后折线图会错误绘制的 bug。

+ [^] 优化饼图，漏斗图的图例绘制，支持`''`, `'\n'`换行，见 [#3039](https://github.com/ecomfe/echarts/issues/3039)

## v3.1.6
<div class="time">2016-04-11</div>

+ [^] 环形图内标签 inside 位置优化。见 [#2949](https://github.com/ecomfe/echarts/issues/2949)

+ [^] 修复 IE8 下单个数据的饼图无法显示的 bug。Fix [#2961](https://github.com/ecomfe/echarts/issues/2961)

+ [^] 修复柱状图 `itemStyle.emphasis.barBorderWidth` 不生效的 bug。

+ [^] 修复工具栏堆叠和平铺切换导致类目轴 boundaryGap 错误设置的 bug。



## v3.1.5
<div class="time">2016-03-29</div>

+ [\+] heatmap 加入配置项 [minOpacity](http://echarts.baidu.com/option.html#series-heatmap.minOpacity), [maxOpacity](http://echarts.baidu.com/option.html#series-heatmap.maxOpacity)。

+ [\+] `toolbox.feature.dataView` 加入配置项 [optionToContent](http://echarts.baidu.com/option.html#toolbox.feature.dataView.optionToContent), [contentToOption](http://echarts.baidu.com/option.html#toolbox.feature.dataView.contentToOption)。

+ [\+] map 图表和 geo 组件加入配置项 [scaleLimit](http://echarts.baidu.com/option.html#geo.scaleLimit)

+ [^] 修复 `toolbox.feature.magicType` 中 option 和 seriesIndex 不起作用的问题。Fix [#2855](https://github.com/ecomfe/echarts/issues/2855)

+ [^] 工具栏中折柱切换的时候自动调整类目轴的 boundaryGap。

+ [^] 修复 3.1.4 中 timeline 节点 hover 报错的 bug。Fix [#2897](https://github.com/ecomfe/echarts/issues/2897)

+ [^] 修复 inside 类型的 dataZoom 无法作用于多个直角坐标系中的坐标轴的 bug。Fix [#2752](https://github.com/ecomfe/echarts/issues/2752)

+ [^] 修复 3.1.4 中南丁格尔图标签布局的问题。Fix [#2910](https://github.com/ecomfe/echarts/issues/2910)

+ [^] 修复 connect 调用已经释放的图表实例报错的问题。Fix [#2908](https://github.com/ecomfe/echarts/issues/2908)

+ [^] 修复 3.1.4 中地图上的 markPoint 无法跟随地图漫游的问题。

+ [^] 修复 visualMap 组件中 color 无法被动态修改的问题。

## v3.1.4
<div class="time">2016-03-21</div>

+ [^] 优化默认的 tooltip，加入图形的颜色提示，回调加入 color 参数。

+ [^] 修复 dataZoom 无法 resize 的 bug。

+ [^] 修复多次执行`showLoading`导致的 bug。Fix [#2821](https://github.com/ecomfe/echarts/issues/2821)

+ [^] 饼图，地图等非笛卡尔坐标系和极坐标系的图表支持 markPoint 和 markLine。

+ [^] 饼图标签布局优化。

+ [^] tooltip 加入 extraCssText 配置项用于配置浮层样式，见 [http://echarts.baidu.com/option.html#tooltip.extraCssText](http://echarts.baidu.com/option.html#tooltip.extraCssText)

+ [^] 修复 3.1.3 中 dataZoom 不设置坐标轴 min， max 的 bug。

+ [^] 修复当纵轴为类目轴且 series 的 data 为二维数组时，tooltip 里无法取到正确的 name 的bug。Fix [#2822](https://github.com/ecomfe/echarts/issues/2822)

+ [^] 修复圆角的柱形图 hover 错误的 bug，Fix [#2806](https://github.com/ecomfe/echarts/issues/2806)

+ [^] 雷达图 indicator 配置项默认值策略优化。

## v3.1.3
<div class="time">2016-03-10</div>

+ **[+]加入雷达图，见 [http://echarts.baidu.com/option.html#series-radar](http://echarts.baidu.com/option.html#series-radar)**

+ [^] 平均值，最小值，最大值 markLine 起点和终点位置优化。Fix [#2762](https://github.com/ecomfe/echarts/issues/2762)，[#2688](https://github.com/ecomfe/echarts/issues/2688)。

+ [^] 修复 markLine 的 symbol 只有一个配置为 `'none'` 的 bug。见 [#2733](https://github.com/ecomfe/echarts/issues/2733)

+ [^] 多行文本的垂直居中优化。

+ [^] 饼图等数据项中 label 的 emphasis 配置项默认取 normal 中的值。

+ [^] 按需引入时，折线图，饼图，散点图默认引入 grid 组件。避免 [#2758](https://github.com/ecomfe/echarts/issues/2758) 中的问题。

+ [^] 修复 dataZoom 组件浮点精度的 bug。Fix [#2757](https://github.com/ecomfe/echarts/issues/2757)

+ [^] 未选中的图例文本显示为灰色。见 [#2615](https://github.com/ecomfe/echarts/issues/2615)

+ [^] 修复 3.1.1 中 media query 中 dataZoom 位置失效的 bug。Fix [#2710](https://github.com/ecomfe/echarts/issues/2710)

+ [^] 修复 3.1.1 中 firefox 无法触发滚轮事件的 bug，Fix [#2730](https://github.com/ecomfe/echarts/issues/2730)

+ [^] IE8 优化。

+ [^] 代码改用 webpack 构建。


## v3.1.2
<div class="time">2016-03-01</div>

+ **[+]提供主题下载，详细见 [http://echarts.baidu.com/download-theme.html](http://echarts.baidu.com/download-theme.html)**

+ [^] 修复 v3.1.1 中折线图空数据后 `setOption` 更新数据无法显示的 bug。

+ [^] 修复 `setOption(chart.getOption())` 有可能报`id duplicates`的错误。Fix [#2635](https://github.com/ecomfe/echarts/issues/2635)

+ [^] 允许自定义 toolbox 工具栏。详见 [toolbox.feature](http://echarts.baidu.com/option.html#toolbox.feature)

+ [^] `'time'` 类型的坐标轴在大跨度时间范围的刻度优化。

+ [^] 修复 label 的 formatter 返回 0 不显示的 bug。Fix [#2659](https://github.com/ecomfe/echarts/issues/2659)

+ [^] 修复纵轴为类目轴的图表中 markPoint 标签显示错误的问题。Fix [#2641](https://github.com/ecomfe/echarts/issues/2641)

+ [^] 优化 dataZoom，修复有 dataZoom 的图表中动态数据更新错误的问题。Fix [#2667](https://github.com/ecomfe/echarts/issues/2667)

+ [^] 饼图所有数据为 0 时百分比取 0 而非 NaN。Fix [#2690](https://github.com/ecomfe/echarts/issues/2667)

+ [^] 标题对齐优化。

+ [^] 图表刷新时保持 tooltip 显示。Fix [#2478](https://github.com/ecomfe/echarts/issues/2478)

+ [^] 仪表盘 `splitLine.length`, `axisTick.length` 支持百分比。

+ [^] 折线动画性能优化。

+ [^] 大数据量的类目轴性能优化。

+ [^] 修复 IE8 下 markPoint 和 markLine 报错的 bug。

+ [^] 修复 `'use strict'` 模式下报错的 bug。Fix [#2643](https://github.com/ecomfe/echarts/issues/2643)


## v3.1.1
<div class="time">2016-02-22</div>

+ **[+]新加入 npm 渠道获取 echarts，详细见 [webpack + echarts 教程](http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)**

+ [^] 修复动态 markPoint 和 markLine 异常的 bug。Fix [#2522](https://github.com/ecomfe/echarts/issues/2522)

+ [^] 修复 axis interval 回调参数错误的 bug。Fix [#2470](https://github.com/ecomfe/echarts/issues/2470)

+ [^] 修复 graph 中无法自定义每条边的 lineStyle 的 bug。Fix [#2558](https://github.com/ecomfe/echarts/issues/2558)

+ [^] toolbox 中 saveAsImage 支持 IE9+ 和 FireFox。

+ [^] 支持柱形圆角配置。[#2550](https://github.com/ecomfe/echarts/issues/2550)

+ [^] 修复 dataZoom 定位配置项错误的 bug。Fix [#2619](https://github.com/ecomfe/echarts/issues/2619)

+ [^] 修复多次`setOption`有可能出现`id duplicate`的错误。Fix [#2452](https://github.com/ecomfe/echarts/issues/2452)

+ [^] candlestick 和 boxplot 图支持 markPoint 和 markLine。Fix [#2566](https://github.com/ecomfe/echarts/issues/2566)

+ [^] 修复在非 merge 模式`setOption`之后再使用 toolbox 中的 reset 功能出错的 bug。Fix [#2596](https://github.com/ecomfe/echarts/issues/2596)

+ [^] 散点图以及 markPoint 支持在`emphasis`中配置`label`的`formatter`。Fix [#2596](https://github.com/ecomfe/echarts/issues/2596)

+ [^] Treemap 支持`roam`配置项。

+ [^] time 类型的坐标轴支持使用字符串格式的时间数据。

+ [^] 修复折线图和区域图无法切换的 bug 修复。Fix [#2625](https://github.com/ecomfe/echarts/issues/2625)

+ [^] 多系列柱状图 markPoint 的位置优化。Fix [#2623](https://github.com/ecomfe/echarts/issues/2623)

+ [^] 修复 init 时 theme 为字符串并且有 dataZoom 组件时的报错。Fix [#2619](https://github.com/ecomfe/echarts/issues/2619)

+ [^] legend 和 toolbox 支持通过 width 和 height 设置高宽并且自动换行。Fix [#2621](https://github.com/ecomfe/echarts/issues/2621)

+ [^] 折线图平滑优化，加入`smoothMonotone`配置项，详见 [option.html#series-line.smoothMonotone](http://echarts.baidu.com/option.html#series-line.smoothMonotone)，Fix [#2612](https://github.com/ecomfe/echarts/issues/2612)

+ [^] 修复 Surface 等带有触屏的电脑上无法触发鼠标事件的 bug，Fix [#2569](https://github.com/ecomfe/echarts/issues/2569)

## v3.0.2
<div class="time">2016-01-23</div>

+ [^] 修复散点图无法高亮的问题。

+ [^] 优化 tooltip 联动，Fix [#2445](https://github.com/ecomfe/echarts/issues/2445)

+ [^] inside 类型的 dataZoom 支持 zoomLock。

+ [^] 添加地图类型不存在的错误提示。

+ [^] 折线图图例开关的动画优化

+ [^] 修复图例无法动态添加的问题，Fix [#2457](https://github.com/ecomfe/echarts/issues/2457)

+ [^] 修复 timeline 无法配置 show 的问题。

+ [^] 修复 0 数据在 tooltip 中显示 undefined 的问题，Fix [#2463](https://github.com/ecomfe/echarts/issues/2463)

+ [^] 修复 dataZoom 缩略图显示不正确的问题，Fix [#2462](https://github.com/ecomfe/echarts/issues/2462)

+ [^] 修复坐标轴 `min` `max` 是字符串的问题，PR [#2481](https://github.com/ecomfe/echarts/pull/2481)

## v3.0.1
<div class="time">2016-01-18</div>

+ [+] 添加回 [getOption](http://echarts.baidu.com/api.html#echartsInstance.getOption) 和 [clear](http://echarts.baidu.com/api.html#echartsInstance.clear) 方法

+ [^] 修复平均值，最大值，最小值标注和标线的标签和 tooltip 无法显示正确值的问题，Fix [#2393](https://github.com/ecomfe/echarts/issues/2393)

+ [^] 修复柱状图在边框宽度大于高度的时候绘制不正确的问题，Fix [#2343](https://github.com/ecomfe/echarts/issues/2343)

+ [^] 修复图例的`show`配置项无法起作用的问题，Fix [#2371](https://github.com/ecomfe/echarts/issues/2371)

+ [^] 地图类型可选 data 属性。

+ [^] 修复平均值标线和标注计算错误，Fix [#2367](https://github.com/ecomfe/echarts/issues/2367)

+ [^] 折线图从`'-'`空数据变成有数据时的动画优化。

+ [^] 鼠标滚轮缩放方向改为常用的习惯方向。

+ [^] 工具栏中的数据区域缩放工具支持指定坐标轴，详见[ toolbox 文档](http://echarts.baidu.com/option.html#toolbox.feature.dataZoom.yAxisIndex)

+ [^] 时间轴上无数据的错误修复，数值轴无数据时的刻度从`[-1, 1]`改为`[0, 1]`

+ [^] 坐标轴 splitArea 绘制错误修复。

+ [^] 修复多个图表示例联动问题。Fix [#2391](https://github.com/ecomfe/echarts/issues/2391)

+ [^] 修复饼图的颜色是回调函数时 legend 上的颜色无法正确显示的问题。Fix [#2372](https://github.com/ecomfe/echarts/issues/2372)

+ [^] 修复饼图数据为 0 时候鼠标的 hover 错误。

+ [^] 饼图数据项都为 0 时扇区改为均匀分布。

+ [^] 修复 IE 8 下背景色设置的错误。

+ [^] 修复 tooltip 组件 dispose 中释放事件不正确的错误。



## v3.0.0
<div class="time">2016-01-12</div>

+ The new echarts