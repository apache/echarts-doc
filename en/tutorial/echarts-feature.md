{{ target: echarts-feature }}
# Introduction of ECharts features

ECharts, a pure Javascript chart library, can run smoothly on PC and mobile devices, being compatible with most of current Web browsers (IE8/9/10/11, Chrome, Firefox, Safari and so on), it relies on a lightweight Canvas library [ZRender](https://github.com/ecomfe/zrender), and provides intuitive, vivid, interactive, and highly customizable data visualization charts.

More over, ECharts 3 adds richer interactive functions and more visualization effects, and optimizes more deeply on mobile end.

## Rich chart types

ECharts provides regular [line charts](option.html#series-line), [bar charts](option.html#series-line), [scatter charts](option.html#series-scatter), [pie charts](option.html#series-pie), [K line charts](option.html#series-candlestick), [box charts](option.html#series-boxplot) used for statistics, [maps](option.html#series-map) used for geo-data visualization, [heatmaps](option.html#series-heatmap), [line charts](option.html#series-lines), [Graph charts](option.html#series-graph) used for data relationship visualization, [treemap](option.html#series-treemap), [parallel charts](option.html#series-parallel) for multi-dimensional data visualization, [funnel maps](option.html#series-funnel) for BI, [gauge charts](option.html#series-gauge), and supports connection and interaction between graphics.

You can download a whole package of all chart components, or you may select the ones you need with online construction builder, if the full package is too large for you.

## Support of multiple coordinate

ECharts started to seperate the concept of "coordinate" from 3.0, supporting rectangular coordinate (containing catesian, as well as grid), polar coordinate (polar), geographic coordinate (geo). Charts can cross coordinate. For example, line chart, bar chart and scatter chart can be placed in the same rectangular coordinate or polar  coordinate or even geographic coordinate.

Below is an example that a line chart is in polar coordinate:

~[60%x400](${galleryViewPath}line-polar2&reset=1&edit=1)


## Mobile Optimization

Precious bandwidth limits Mobile devices with small chart library size. Reconstructing ECharts and ZRender code minimizes it to the smallest size. ECharts has a large number of components and the number is still increasing. So we provide a finer-grained packaging method on demand. The minimum size has been shrunk to 40% of ECharts 2.

Interaction on mobile has also been optimized, like zooming and translating in coordinates with fingers on small screen of mobile. Zooming and translating are also available with mouse scrolling on PC. See the example below:


~[60%x400](${galleryViewPath}area-simple&reset=1&edit=1)

## Interactive Data Exploration in Depth

Interaction is an important way to dig information from data. Overview by default, zoom and filter to check details based on needs are basic requirements of data visualization interaction.

ECharts is constantly moving forward on the road of *interaction*, we provide components like [legend](option.html#legend), [visualMap](option.html#visualMap), [dataZoom](option.html#dataZoom), [tooltip](option.html#tooltip), as well as data roaming. Operations like selecting enables you to filter data, zoom viewport, and display details.

ECharts 3 comprehensively strenghtens these components. Such as supporting filtering and zooming on all kinds of data axis and dimensions, and enables these components in more types of charts. See the example below:

~[60%x400](${galleryViewPath}mix-zoom-on-value&reset=1&edit=1)

## Data in Large Scale

With the help of Canvas, ECharts can easily display tens of thousands, or even hundreds of thousands data in scatter chart.

The following Weibo signing chart displays 100k+ signing data.

~[60%x400](${galleryViewPath}scatter-weibo&reset=1&edit=1)

## Multi-Dimensional Data Support and Rich Presentation of Visual Coding

ECharts 3 enhances the support of multi-dimensional data. Besides adding common multi-dimensional data visualization tools like parallel coordinates, it supports mult-dimensional for charts like traditional scatter charts. And with the help of [visualMap](option.html#visualMap), you can map data of different dimensions to color, size, opacity, lightness and other different visual tunnels, which provides an even richer visual presentation.

~[60%x500](${galleryViewPath}scatter-aqi-color&reset=1&edit=1)

## Dynamic Data

ECharts is data-driven, in that the change of data changes the presentation of chart. Therefore, dymatic data is extremely easy to implement. You only need to get data, fill them in, and ECharts will find the difference between two group of data and present data change through proper animation. With [timeline](option.html#timeline) component, you can present data information at higher time dimensions.

~[60%x400](${galleryViewPath}scatter-life-expectancy-timeline&reset=1&edit=1)

## Splendid Special Effects

ECharts provides eye-catching special effects for visualization of line data, point data and geo-data, and so on.

~[60%x400](${galleryViewPath}lines-bmap-effect&reset=1&edit=1)
