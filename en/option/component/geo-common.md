
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

#${prefix} projection(Object)

{{ use: partial-version(
    version = "5.3.0"
) }}

For custom map projection, at least two methods `project`, `unproject` should be provided to calculate the coordinates after projection and before projection respectively.

For example, for the Mercator projection.

```ts
series: {
    type: 'map',
    projection: {
        project: (point) => [point[0] / 180 * Math.PI, -Math.log(Math.tan((Math.PI / 2 + point[1] / 180 * Math.PI) / 2))],
        unproject: (point) => [point[0] * 180 / Math.PI, 2 * 180 / Math.PI * Math.atan(Math.exp(point[1])) - 90]
    }
}
```

In addition to our own implementation of the projection formula, we can also use exists projection implementations provided by third-party libraries such as [d3-geo](https://github.com/d3/d3-geo).

```ts
const projection = d3.geoConicEqualArea();
// ...
series: {
    type: 'map',
    projection: {
        project: (point) => projection(point),
        unproject: (point) => projection.invert(point)
    }
}

```

Note: Custom projections are only useful when using `GeoJSON` as a data source.

##${prefix} project(Function)

```ts
(coord: [number, number]) => [number, number]
```

Projection of latitude and longitude coordinates to other coordinates.

##${prefix} unproject(Function)

```ts
(point: [number, number]) => [number, number]
```

Calculate the raw latitude and longitude coordinates from the projected coordinates

##${prefix} stream(Function)

This property is mainly used to adapt the [stream](https://github.com/d3/d3-geo#streams) interface used in [d3-geo](https://github.com/d3/d3-geo). After introducing stream, you can introduce both the [Antimeridian Clipping](https://bl.ocks.org/mbostock/3788999) and [Adaptive Sampling](https://bl.ocks.org/mbostock/3795544) algorithms implemented in [d3-geo](https://bl.ocks.org/mbostock/3795544).

```ts
const projection = d3.geoProjection((x, y) => ([x, y / 0.75]))
    .rotate([-115, 0]);
// ...
series: {
    type: 'map',
    projection: {
        // We still need project and unproject when stream is provided.
        project: (point) => projection(point),
        unproject: (point) => projection.invert(point),
        // We can directly use the stream method in d3 projection.
        stream: projection.stream
    }
}
```

Note: `stream` is not required in the `projection`.

#${prefix} center(Array)

Center of current view-port, in longitude and latitude by default. Use the projected coordinates if `projection` is set.

Example:

```ts
center: [115.97, 29.71]
```

```ts
projection: {
    projection: (pt) => project(pt)
},
center: project([115.97, 29.71])
```

#${prefix} aspectScale(number) = 0.75

Used to scale aspect of geo. Will be ignored if `projection` is set.

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

