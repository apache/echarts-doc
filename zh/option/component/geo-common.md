
{{ target: geo-common }}

#${prefix} map(string) = ''

使用 [registerMap](api.html#echarts.registerMap) 注册的地图名称。

{{ if: ${inMap} }}
**geoJSON 引入示例**
```js
$.get('map/china_geo.json', function (geoJson) {
    echarts.registerMap('china', {geoJSON: geoJson});
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'china',
            ...
        }]
    });
});
```
也参见示例 [USA Population Estimates](${galleryEditorPath}map-usa)。
{{ else }}
**geoJSON 引入示例**
```js
$.get('map/china_geo.json', function (chinaJson) {
    echarts.registerMap('china', {geoJSON: geoJson});
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        geo: [{
            map: 'china',
            ...
        }]
    });
});
```
也参见示例 [geoJSON hexbin](${galleryEditorPath}custom-hexbin)。
{{ /if }}

如上所示，ECharts 可以使用 [GeoJSON](http://geojson.org/) 格式的数据作为地图的轮廓，你可以获取第三方的 [GeoJSON](http://geojson.org/) 数据注册到 ECharts 中。例如第三方资源 [maps](https://github.com/echarts-maps)。

{{ if: ${inMap} }}
**SVG 引入示例**
```js
$.get('map/topographic_map.svg', function (svg) {
    echarts.registerMap('topo', {svg: svg});
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'topo',
            ...
        }]
    });
});
```
也参见示例 [Beef Cuts](${galleryEditorPath}geo-beef-cuts)。
{{ else }}
**SVG 引入示例**
```js
$.get('map/topographic_map.svg', function (svg) {
    echarts.registerMap('topo', {svg: svg});
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        geo: [{
            map: 'topo',
            ...
        }]
    });
});
```
也参见示例 [Flight Seatmap](${galleryEditorPath}geo-seatmap-flight)。
{{ /if }}

如上所示，ECharts 也可以使用 SVG 格式的地图。详情参见：[SVG 底图](tutorial.html#%E5%9C%B0%E7%90%86%E5%9D%90%E6%A0%87%E7%B3%BB%E5%92%8C%E5%9C%B0%E5%9B%BE%E7%B3%BB%E5%88%97%E7%9A%84%20SVG%20%E5%BA%95%E5%9B%BE)。

#${prefix} roam(boolean|string) = false

{{ use: partial-roam() }}

#${prefix} center(Array)

当前视角的中心点，用经纬度表示

例如：
```js
center: [115.97, 29.71]
```

#${prefix} aspectScale(number) = 0.75

这个参数用于 scale 地图的长宽比。

最终的 `aspect` 的计算方式是：`geoBoundingRect.width / geoBoundingRect.height * aspectScale`

#${prefix} boundingCoords(Array) = null

二维数组，定义定位的左上角以及右下角分别所对应的经纬度。例如
```js
// 设置为一张完整经纬度的世界地图
map: 'world',
left: 0, top: 0, right: 0, bottom: 0,
boundingCoords: [
    // 定位左上角经纬度
    [-180, 90],
    // 定位右下角经纬度
    [180, -90]
],
```

#${prefix} zoom(number) = 1

当前视角的缩放比例。

#${prefix} scaleLimit(Object)

{{ use: partial-scale-limit(
    prefix = "#" + ${prefix}
) }}

#${prefix} nameMap(Object)

自定义地区的名称映射，如：
```js
{
    'China' : '中国'
}
```

#${prefix} nameProperty(string) = 'name'

{{ use: partial-version(
    version = "4.8.0"
) }}

默认是 `'name'`，针对 GeoJSON 要素的自定义属性名称，作为主键用于关联数据点和 GeoJSON 地理要素。
例如：
```js
{
    nameProperty: 'NAME', // 数据点中的 name：Alabama 会关联到 GeoJSON 中 NAME 属性值为 Alabama 的地理要素{"type":"Feature","id":"01","properties":{"NAME":"Alabama"}, "geometry": { ... }}
    data:[
        {name: 'Alabama', value: 4822023},
        {name: 'Alaska', value: 731449},
    ]
}
```

#${prefix} selectedMode(boolean|string) = false

选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选`'single'`表示单选，或者`'multiple'`表示多选。

#${prefix} label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter = true
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style-desc(
    name = '地图区域的多边形'
) }}

##${prefix} areaColor(Color) = '#eee'

地图区域的颜色。

{{ use: partial-color-desc() }}

{{ use: partial-item-style(
    prefix = ${prefix} + '#'
) }}

#${prefix} emphasis(Object)

高亮状态下的多边形和标签样式。

{{ use: partial-emphasis-disabled(
    prefix = "#" + ${prefix}
) }}

{{ if: !${inMap} }}
{{ use: partial-focus-blur-scope(
    isGeoCoordSys = true
) }}
{{ /if }}

{{ use: partial-geo-common-state(
    prefix = '#' + ${prefix}
) }}

#${prefix} select(Object)

选中状态下的多边形和标签样式。

{{ use: partial-select-disabled(
    prefix = "#" + ${prefix}
) }}

{{ use: partial-geo-common-state(
    prefix = '#' + ${prefix}
) }}

{{ if: !${inMap} }}
#${prefix} blur(Object)

{{ use: partial-version(
    version = '5.1.0'
) }}

淡出状态下的多边形和标签样式。

{{ use: partial-geo-common-state(
    prefix = '#' + ${prefix}
) }}
{{ /if }}

{{ use: partial-rect-layout(
    prefix = ${prefix}
) }}

#${prefix} layoutCenter(Array) = null

`layoutCenter` 和 `layoutSize` 提供了除了 `left/right/top/bottom/width/height` 之外的布局手段。

在使用 `left/right/top/bottom/width/height` 的时候，可能很难在保持地图高宽比的情况下把地图放在某个盒形区域的正中间，并且保证不超出盒形的范围。此时可以通过 `layoutCenter` 属性定义地图中心在屏幕中的位置，`layoutSize` 定义地图的大小。如下示例

```js
layoutCenter: ['30%', '30%'],
// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
layoutSize: 100
```

设置这两个值后 `left/right/top/bottom/width/height` 无效。

#${prefix} layoutSize(number|string)

地图的大小，见 `layoutCenter`。支持相对于屏幕宽高的百分比或者绝对的像素大小。



{{ target: partial-geo-common-state }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter = true
) }}

#${prefix} itemStyle(Object)

##${prefix} areaColor(Color) = '#eee'

地图区域的颜色。

{{ use: partial-color-desc() }}

{{ use: partial-item-style(
    prefix = "#" + ${prefix}
) }}

