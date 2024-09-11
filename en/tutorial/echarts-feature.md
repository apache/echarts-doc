{{ target: echarts-feature }}
# Introduction to ECharts features

Apache ECharts<sup>TM</sup> is an open-source, pure Javascript chart library that can run smoothly on PC and mobile devices. Compatible with most current web browsers (IE8/9/10/11, Chrome, Firefox, Safari and so on), it relies on a lightweight Canvas library ([ZRender](https://github.com/ecomfe/zrender)) and provides intuitive, interactive, and highly customizable data visualizations.

More over, ECharts 3 adds richer interactive functions and more visualization effects, and optimizes more deeply on mobile end.

## Rich Chart Types

ECharts provides [line charts](option.html#series-line), [bar charts](option.html#series-line), [scatter charts](option.html#series-scatter), [pie charts](option.html#series-pie), [K line charts](option.html#series-candlestick) and [box charts](option.html#series-boxplot), as well as [maps](option.html#series-map) used for geodata visualization, [heatmaps](option.html#series-heatmap), [treemaps](option.html#series-treemap), [parallel charts](option.html#series-parallel) for multi-dimensional data visualization, [funnel maps](option.html#series-funnel) for BI, [gauge charts](option.html#series-gauge). Additionally, it supports connecting and animating between different graphic types.

You can either download the entire package of chart components or instead select the ones you need with the [online package builder](builder.html) to reduce file sizes.

## Support for Multiple Coordinate Types

ECharts started to separate the concept of "coordinate" from 3.0, supporting rectangular coordinates (containing Cartesian, as well as grid), polar coordinates and geographic coordinates. Charts can cross coordinate. For example, line charts, bar charts and scatter charts can be placed in the same rectangular coordinate or polar coordinate sustem.

Below is an example that a line chart is in polar coordinate:

~[60%x400](${galleryViewPath}line-polar2&reset=1&edit=1)


## Mobile Optimization

Bandwidth is precious on mobile devices and so ECharts has been optimized to use a small file size. ECharts many components (with the total ever increasing) and so we provide mobile-optimised small packages.

Interaction on mobile is also optimized: zooming and panning is natively supported on both mobile and desktop. See the example below:


~[60%x400](${galleryViewPath}area-simple&reset=1&edit=1)

## Interactive Data Exploration

Interactivity is key to analyzing and understanding data. Whilst ECharts provides an overview by default, zooming and data filtering can be modified to meet the needs of the data visualization.

ECharts is constantly expanding on this interactivity; we provide components like [legend](option.html#legend), [visualMap](option.html#visualMap), [dataZoom](option.html#dataZoom) and [tooltip](option.html#tooltip). Selections enables you to filter data, zoom the viewport, and display more detail.

~[60%x400](${galleryViewPath}mix-zoom-on-value&reset=1&edit=1)

## Large-Scale Datasets

With the help of the Canvas element, ECharts can easily display tens of thousands, or even hundreds of thousands data points in a scatter chart.

The following charge contains over 100,000 data points:

~[60%x400](${galleryViewPath}scatter-weibo&reset=1&edit=1)

## Multi-Dimensional Data Support and Rich Presentation

ECharts 3 adds support for multi-dimensional data. Besides common multi-dimensional data visualization tools like parallel coordinates, it supports multiple dimensions for other charts like traditional scatter plots. With the help of [visualMap](option.html#visualMap), you can map data of different dimensions to color, size, opacity, lightness and other different visual attributes, helping create rich data visualizations.

~[60%x500](${galleryViewPath}scatter-aqi-color&reset=1&edit=1)

## Dynamic Data

ECharts is data-driven, in that the change of data changes the presentation of chart. Therefore, dymatic data is extremely easy to implement. You only need to get data, fill them in, and ECharts will find the difference between two group of data and present data change through proper animation. With [timeline](option.html#timeline) component, you can present data information at higher time dimensions.

~[60%x400](${galleryViewPath}scatter-life-expectancy-timeline&reset=1&edit=1)

## Splendid Special Effects

ECharts provides eye-catching special effects for visualization of line data, point data and geo-data.

~[60%x400](${galleryViewPath}lines-bmap-effect&reset=1&edit=1)
