{{ target: geo-common }}

#${prefix} map(string) = ''

Map charts.

Due to the increase of fineness of map, ECharts 3 doesn't include map data by default for package size consideration. You may find map files you need on [map download page](http://ecomfe.github.io/echarts-builder-web/map3.html) and then include and register them in ECharts.

Two formats of map data are provided in ECharts, one of which can be included in `<script>` tag as JavaScript file, and the other of is in JSON format and should be loaded using AJAX. Map name and data will be loaded automatically once the JavaScript file is loaded, while in the JSON form, you have to assign name explicitly.


Here are examples of these two types:

** JavaScript importing example **

```html
<script src="echarts.js"></script>
<script src="map/js/china.js"></script>
<script>
var chart = echarts.init(document.getElmentById('main'));
chart.setOption({
    series: [{
        type: 'map',
        map: 'china'
    }]
});
</script>
```

** JSON importing example **

```js
$.get('map/json/china.json', function (chinaJson) {
    echarts.registerMap('china', chinaJson);
    var chart = echarts.init(document.getElmentById('main'));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'china'
        }]
    });
});
```

ECharts uses [geoJSON](http://geojson.org/) format as map outline. Besides the methods introduced above, you can also get [geoJSON](http://geojson.org/) data through in other methods if you like and register it in ECharts. Reference to [USA Population Estimates](${galleryEditorPath}map-usa) for more information.

#${prefix} roam(boolean) = false
{{ use: partial-roam }}

#${prefix} center(Array)
Center of current view-port, in longitude and latitude.

Example:
```js
center: [115.97, 29.71]
```

#${prefix} aspectScale(number) = 0.75

Used to scale aspect of geo.

The final aspect is calculated by: `geoBoundingRect.width / geoBoundingRect.height * aspectScale`.

#${prefix} boundingCoords(Array) = null
Two dimension array. Define coord of left-top, right-bottom in layout box.

```js
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
{{ use: partial-scale-limit(prefix="#" + ${prefix}) }}

#${prefix} nameMap(Object)

Name mapping for customized areas. For example:
```js
{
    'China' : '中国'
}
```

## selectedMode(boolean|string) = false
Selected mode decides whether multiple selecting is supported. By default, `false` is used for disabling selection. Its value can also be `'single'` for selecting single area, or `'multiple'` for selecting multiple areas.



#${prefix} label(Object)
{{use: partial-label-desc}}
{{use: partial-label(
    prefix="#" + ${prefix},
    formatter=true
)}}
##${prefix} emphasis(Object)
{{use: partial-label(
    prefix="##" + ${prefix},
    formatter=true
)}}



#${prefix} itemStyle(Object)

{{ use: partial-item-style-desc(name='Map Area Border') }}


##${prefix} areaColor(Color) = '#eee'
Area filling color.

{{ use: partial-item-style(prefix=${prefix} + '##') }}

##${prefix} emphasis(Object)

Map area style in highlighted state.

###${prefix} areaColor(Color) = '#eee'
Area filling color.

{{ use: partial-item-style(prefix=${prefix} + '##') }}

{{ use: partial-rect-layout(prefix=${prefix}) }}


#${prefix} layoutCenter(Array) = null

`layoutCenter` and `layoutSize` provides layout strategy other than `left/right/top/bottom/width/height`.

When using `left/right/top/bottom/width/height`, it is hard to put the map inside a box area with a fixed width-height ratio. In this case, `layoutCenter` attribute can be used to define the center position of map, and `layoutSize` can be used to define the size of map. For example:

```js
layoutCenter: ['30%', '30%'],
// If width-height ratio is larger than 1, then width is set to be 100.
// Otherwise, height is set to be 100.
// This makes sure that it will not exceed the area of 100x100
layoutSize: 100
```

After setting these two values, `left/right/top/bottom/width/height` becomes invalid.

#${prefix} layoutSize(number|string)

Size of map, see `layoutCenter` for more information. Percentage relative to screen width, and absolute pixel values are supported.

