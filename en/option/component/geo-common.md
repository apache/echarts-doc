
{{ target: geo-common }}

#${prefix} map(string) = ''

Map name registered in [registerMap](api.html#echarts.registerMap).

{{ if: ${inMap} }}
**Use geoJSON**
```ts
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
See also [USA Population Estimates](${galleryEditorPath}map-usa).
{{ else }}
**Use geoJSON**
```ts
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
See also [geoJSON hexbin](${galleryEditorPath}custom-hexbin).
{{ /if }}

The demo above shows that ECharts can uses [geoJSON](http://geojson.org/) format as map outline. You can use third-party [geoJSON](http://geojson.org/) data (like [maps](https://github.com/echarts-maps)) and register them into ECharts.

{{ if: ${inMap} }}
**Use SVG**
```ts
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
See also [Beef Cuts](${galleryEditorPath}geo-beef-cuts).
{{ else }}
**Use SVG**
```ts
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
See also [Flight Seatmap](${galleryEditorPath}geo-seatmap-flight).
{{ /if }}

The demo above shows that SVG format can be used in ECharts. See more info in [SVG Base Map](tutorial.html#SVG%20Base%20Map%20in%20Geo%20Coords%20and%20Map%20Series).

#${prefix} roam(boolean|string) = false

{{ use: partial-roam() }}

#${prefix} center(Array)

Center of current view-port, in longitude and latitude.

Example:
```ts
center: [115.97, 29.71]
```

#${prefix} aspectScale(number) = 0.75

Used to scale aspect of geo.

The final aspect is calculated by: `geoBoundingRect.width / geoBoundingRect.height * aspectScale`.

#${prefix} boundingCoords(Array) = null

Two dimension array. Define coord of left-top, right-bottom in layout box.

```ts
// A complete world map
map: 'world',
left: 0, top: 0, right: 0, bottom: 0,
boundingCoords: [
    // [lng, lat] of left-top corner
    [-180, 90],
    // [lng, lat] of right-bottom corner
    [180, -90]
],
```

#${prefix} zoom(number) = 1

Zoom rate of current view-port.

#${prefix} scaleLimit(Object)

{{ use: partial-scale-limit(
    prefix = "#" + ${prefix}
) }}

#${prefix} nameMap(Object)

Name mapping for customized areas. For example:
```ts
{
    'China' : '中国'
}
```

#${prefix} nameProperty(string) = 'name'

{{ use: partial-version(
    version = "4.8.0"
) }}

customized property key for GeoJSON feature. By default, 'name' is used as primary key to identify GeoJSON feature.
For example:
```ts
{
    nameProperty: 'NAME', // key to connect following data point to GeoJSON region {"type":"Feature","id":"01","properties":{"NAME":"Alabama"}, "geometry": { ... }}
    data:[
        {name: 'Alabama', value: 4822023},
        {name: 'Alaska', value: 731449},
    ]
}
```

#${prefix} selectedMode(boolean|string) = false

Selected mode decides whether multiple selecting is supported. By default, `false` is used for disabling selection. Its value can also be `'single'` for selecting single area, or `'multiple'` for selecting multiple areas.

#${prefix} label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter = true
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style-desc(
    name = 'Map Area Border'
) }}

##${prefix} areaColor(Color) = '#eee'

Area filling color.

{{ use: partial-color-desc() }}

{{ use: partial-item-style(
    prefix = ${prefix} + '#'
) }}

#${prefix} emphasis(Object)

Map area style in highlighted state.

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

Map area style in selected state.

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

Map area style in blurred state.

{{ use: partial-geo-common-state(
    prefix = '#' + ${prefix}
) }}
{{ /if }}

{{ use: partial-rect-layout(
    prefix = ${prefix}
) }}

#${prefix} layoutCenter(Array) = null

`layoutCenter` and `layoutSize` provides layout strategy other than `left/right/top/bottom/width/height`.

When using `left/right/top/bottom/width/height`, it is hard to put the map inside a box area with a fixed width-height ratio. In this case, `layoutCenter` attribute can be used to define the center position of map, and `layoutSize` can be used to define the size of map. For example:

```ts
layoutCenter: ['30%', '30%'],
// If width-height ratio is larger than 1, then width is set to be 100.
// Otherwise, height is set to be 100.
// This makes sure that it will not exceed the area of 100x100
layoutSize: 100
```

After setting these two values, `left/right/top/bottom/width/height` becomes invalid.

#${prefix} layoutSize(number|string)

Size of map, see `layoutCenter` for more information. Percentage relative to screen width, and absolute pixel values are supported.



{{ target: partial-geo-common-state }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter = true
) }}

#${prefix} itemStyle(Object)

##${prefix} areaColor(Color) = '#eee'

The color of the map area.

{{ use: partial-color-desc() }}

{{ use: partial-item-style(
    prefix = "#" + ${prefix}
) }}

