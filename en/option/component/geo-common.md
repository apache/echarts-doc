{{ target: geo-common }}

#${prefix} map(string) = ''

Types of maps.

Because the accuracy of maps in ECharts 3 have been improved, the map data for enlarging javascript volume would not been internally installed anymore, you can download the map docs you need from [Map download page](http://ecomfe.github.io/echarts-builder-web/map3.html) and then import and register them in ECharts. 

2 formats of map data are provided in ECharts, the one is js document which could directly improt script label and then automatically register the map name and data; the other is JSON document which need to be registered manually after being async-loaded by jquery.

There are practical examples of these 2 types：

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

ECharts uses [geoJSON](http://geojson.org/) format as map outline. Except for the above-mentioned data, you can also gain  [geoJSON](http://geojson.org/) data through other methods and register it in ECharts. Reference to [USA Population Estimates](${galleryEditorPath}map-usa)

#${prefix} roam(boolean) = false
{{ use: partial-roam }}

#${prefix} nameMap(Object)

Name map with custom region, for instance：
```js
{
    'China' : 'China'
}
```

#${prefix} label(Object)

{{ use: partial-label-desc }}

##${prefix} normal(Object)

###${prefix} show(boolean) = false

Specify whether to show label in usual status.

###${prefix} textStyle(Object)

The label style in usual status.

{{ use: partial-text-style(prefix=${prefix} + '###') }}

##${prefix} emphasis(Object)

###${prefix} show(boolean) = false

Specify whether to show label in highlight status.

###${prefix} textStyle(Object)

The label style in highlight status.

{{ use: partial-text-style(prefix=${prefix} + '###') }}


#${prefix} itemStyle(Object)

{{ use: partial-item-style-desc(name= 'polygon in map area') }}


##${prefix} normal(Object)

The polygon style in usual status.

{{ if: ${inMap} }}
###${prefix} areaColor(Color) = '#eee'
The color in map area.
{{ /if }}

{{ use: partial-item-style(prefix=${prefix} + '##') }}

##${prefix} emphasis(Object)

The polygon style in highlight status.

{{ use: partial-item-style(prefix=${prefix} + '##') }}

{{ use: partial-rect-layout(prefix=${prefix}) }}