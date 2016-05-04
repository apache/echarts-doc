{{ target: echarts-feature }}
# Introduction of ECharts features

ECharts is a chart bank with pure Javascript, it can run smoothly on PC and mobile devices, compatible with most of current browser（IE8/9/10/11，Chrome，Firefox，Safari and so on）, it relies on underlying lightweight  Canvas bank [ZRender](https://github.com/ecomfe/zrender) and provides data visualization map that is Direct, vivid, interactive, highly personalized.

ECharts 3 adds even richer interactive function, visualization effects and optimizes deeper on mobile end.

## Rich chart types

ECharts provides routine [line chart](option.html#series-line)，[bar chart](option.html#series-line)，[scatter chart](option.html#series-scatter)，[pie chart](~option.html#series-pie)，[K line chart](option.html#series-candlestick), [box chart](option.html#series-boxplot) used for calculation, [map] (option.html#series-map)used for geo-data visualization，[thermal map](option.html#series-heatmap)，[line chart](option.html#series-lines)，[relationship map](option.html#series-graph) used for connect data visualization，[treemap](option.html#series-treemap)，[parallel coordinates](option.html#series-parallel) of multi-dimensional data visualization，[funnel map](option.html#series-funnel) used for BI，[dashboard](option.html#series-gauge)，and supports mix between graphics.

You can download build files of all charts in the dowbload interface, if you only need one or two charts and think the build files of all charts are too large, you can also choose needed chart types in the online building and build customerized. 

## Support of multiple coordinate system

ECharts 3 starts to seperate “coordinate system” concept，supporting right angle coordinate system（catesian，same as grid）、polar coordinate system（polar）、geographical coordinate system（geo）. Charts supports cross coordinate system, such as line chart, bar chart and scatter chart can be placed in right angle coordinate system or polar  coordinate system or even geographical coordinate system.

Below is an example that a line chart in polar coordinate system：

~[60%x400](${galleryViewPath}line-polar2&reset=1&edit=1)

Below is an example that a scatter chart in geographic coordinate system：

~[60%x400](${galleryViewPath}scatter-map&reset=1&edit=1)


## Optimization of mobile end

Mobile end with precious traffic needs chart bank to be as small as possible. Reconstructing ECharts and ZRender code minimizes core part size. ECharts has many components and they will be increasing in the future, therefore we provide more granular packaging ability on demand. The minimum size has shrunk to 40% of ECharts 2.

Interaction on mobile end is also optimized, for example, zoom and translation in coordinates with fingers in small screen of mobile end. PC end can also use mouse （Using the mouse wheel）to zoom and translate. See in the picture below:


~[60%x400](${galleryViewPath}area-simple&reset=1&edit=1)

## Deep exploration of interactive data exploration of depth

Interaction is an important way to dig information from data. Overview, zoom and filter, check details based on needs are basic requirements of data visualization interaction.

ECharts is constantly moving forward on the road of “interaction”, components like[legend](option.html#legend) [visualMap](option.html#visualMap) [dataZoom](option.html#dataZoom) [tooltip](option.html#tooltip) , roaming attached by chart and selection provide data screen, view zoom, detail showing and so on.

ECharts 3 comprehensively strenghtens these components, such as supporting filtering and zooming on every data axis and dimension,and adopting these components in more graphics. As the example below

~[60%x400](${galleryViewPath}mix-zoom-on-value&reset=1&edit=1)

## Display of large amounts of data

Helped by Canvas, ECharts can easily display tens of thousands and even hundreds of thousands data in scatter chart.

Weibo sign in the graphic below displays 100k+ signing data.

~[60%x400](${galleryViewPath}scatter-weibo&reset=1&edit=1)

## Multi-dimensional data support and rich means of visual coding

ECharts 3 begins to reinforce support of multi-dimensional data, except adding common multi-dimensional data visualization tool as parallel coordinates, incoming data can also be mult-dimensional as for traditionl scatter chart. Cooperating with rich visual code provided by visual map component  [visualMap](option.html#visualMap) , you can map data of different dimensions to color, size, transparency, lightness and other different visual tunnel.

~[60%x500](${galleryViewPath}scatter-aqi-color&reset=1&edit=1)

## dynamic data

ECharts is driven by data, change of data changes the presentation of chart, therefore dymatic data is much easier to realized.You only need to obtian data, enter them and  ECharts will find the difference between two data and present data change through proper animation. Cooperating [timeline](option.html#timeline) component can present data information at higher time dimension.

~[60%x400](${galleryViewPath}scatter-life-expectancy-timeline&reset=1&edit=1)

## Gorgeous special effect

ECharts provides eye-catching special effect for visualization of line data, point data and other geo-data.
~[60%x400](${galleryViewPath}geo-lines&reset=1&edit=1)