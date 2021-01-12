{{ target: echarts-feature }}
# ECharts 特性介绍

Apache ECharts<sup>TM</sup>，一个纯 Javascript 的图表库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的 Canvas 类库 [ZRender](https://github.com/ecomfe/zrender)，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。

ECharts 3 中更是加入了更多丰富的交互功能以及更多的可视化效果，并且对移动端做了深度的优化。

## 丰富的图表类型

ECharts 提供了常规的[折线图](option.html#series-line)，[柱状图](option.html#series-bar)，[散点图](option.html#series-scatter)，[饼图](option.html#series-pie)，[K线图](option.html#series-candlestick)，用于统计的[盒形图](option.html#series-boxplot)，用于地理数据可视化的[地图](option.html#series-map)，[热力图](option.html#series-heatmap)，[线图](option.html#series-lines)，用于关系数据可视化的[关系图](option.html#series-graph)，[treemap](option.html#series-treemap)，多维数据可视化的[平行坐标](option.html#series-parallel)，还有用于 BI 的[漏斗图](option.html#series-funnel)，[仪表盘](option.html#series-gauge)，并且支持图与图之间的混搭。

你可以在下载界面下载包含所有图表的构建文件，如果只是需要其中一两个图表，又嫌包含所有图表的构建文件太大，也可以在在线构建中选择需要的图表类型后自定义构建。

## 多个坐标系的支持

ECharts 3 开始独立出了“坐标系”的概念，支持了直角坐标系（catesian，同 grid）、极坐标系（polar）、地理坐标系（geo）。图表可以跨坐标系存在，例如折、柱、散点等图可以放在直角坐标系上，也可以放在极坐标系上，甚至可以放在地理坐标系中。

下面是一个折线图在极坐标系上的例子：

~[60%x400](${galleryViewPath}line-polar2&reset=1&edit=1)


## 移动端的优化

流量珍贵的移动端需要图表库的体积尽量小。ECharts 和 ZRender 代码的重构，带来了核心部分体积的减小。ECharts 组件众多，并且后面会持续增加，我们提供了更细粒度的按需打包能力。最小体积缩小为 ECharts 2 的 40%。

移动端交互也做了优化，例如移动端小屏上适于用手指在坐标系中进行缩放、平移。 PC 端也可以用鼠标在图中进行缩放（用鼠标滚轮）、平移，如下图：


~[60%x400](${galleryViewPath}area-simple&reset=1&edit=1)

## 深度的交互式数据探索

交互是从数据中发掘信息的重要手段。“总览为先，缩放过滤按需查看细节”是数据可视化交互的基本需求。

ECharts 一直在*交互*的路上前进，我们提供了 [legend](option.html#legend) [visualMap](option.html#visualMap) [dataZoom](option.html#dataZoom) [tooltip](option.html#tooltip)等组件以及图表附带的漫游，选取等操作提供了数据筛取、视图缩放、展示细节等能力。

ECharts 3 中，对这些组件进行了广泛增强，例如支持在数据的各种坐标轴、维度进行数据过滤、缩放，以及在更多的图中采用这些组件。比如下面这个例子

~[60%x400](${galleryViewPath}mix-zoom-on-value&reset=1&edit=1)

## 大数据量的展现

借助 Canvas 的能力，ECharts 在散点图中能够轻松展现上万甚至上十万的数据。

下面的微博签到图中就展现了 100k+ 的签到数据。

~[60%x400](${galleryViewPath}scatter-weibo&reset=1&edit=1)

## 多维数据的支持以及丰富的视觉编码手段

ECharts 3 开始加强了对多维数据的支持。除了加入了平行坐标等常见的多维数据可视化工具外，对于传统的散点图等，传入的数据也可以是多个维度的。配合视觉映射组件 [visualMap](option.html#visualMap) 提供的丰富的视觉编码，能够将不同维度的数据映射到颜色，大小，透明度，明暗度等不同的视觉通道。

~[60%x500](${galleryViewPath}scatter-aqi-color&reset=1&edit=1)

## 动态数据

ECharts 由数据驱动，数据的改变驱动图表展现的改变。因此动态数据的实现也变得异常简单，只需要获取数据，填入数据，ECharts 会找到两组数据之间的差异然后通过合适的动画去表现数据的变化。配合 [timeline](option.html#timeline) 组件能够在更高的时间维度上去表现数据的信息。

~[60%x400](${galleryViewPath}scatter-life-expectancy-timeline&reset=1&edit=1)

## 绚丽的特效

ECharts 针对线数据，点数据等地理数据的可视化提供了吸引眼球的特效。


~[60%x400](${galleryViewPath}lines-bmap-effect&reset=1&edit=1)