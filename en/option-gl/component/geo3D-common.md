
{{ target: component-geo3D-common }}

## map(string)
The map type. The map type used in ECharts-gl is the same as the [geo](https://echarts.apache.org/en/option.html#geo.map) component.
 
EChart provides map data in two formats. One is the JS file that can be imported directly through the script tag. After it is introduced, the map name and data will be automatically registered. Another is the JSON file that needs to be registered manually after loaded asynchronously by AJAX.

Here are two types of use examples:

** JavaScript Introduction Example **

```html
<script src="echarts.js"></script>
<script src="map/js/china.js"></script>
<script>
var chart = echarts.init(document.getElementById('main'));
chart.setOption({
    series: [{
        type: 'map',
        map: 'china'
    }]
});
</script>
```

** JSON Introduction Example **

```js
$.get('map/json/china.json', function (chinaJson) {
    echarts.registerMap('china', chinaJson);
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'china'
        }]
    });
});
```

ECharts uses the data in [geoJSON] (http://geojson.org/) format as the outline of the map. In addition, you can also obtain data in [geoJSON] (http://geojson.org/) format of the map by other means and register it in ECharts.

{{ use: partial-box-size-geo3D(
    componentType=${componentType},
    componentName=${componentName},
    defaultBoxHeight = 10,
    defaultBoxDepth = 'auto'
) }}

## regionHeight(number) = 3

The height of each area of the 3D map. This height is the height of the model, less than [boxHeight](~${componentType}.boxHeight). `boxHeight - regionHeight` will be used for the display of 3D bar, 3D scatter, and etc.



{{ use: partial-environment(
    componentType=${componentType},
    componentName=${componentName}
) }}

## groundPlane(Object)

The ground allows the entire assembly to be “placed” to make the entire scene look more realistic.

 `groundPlane` supports setting up separate `realisticMaterial`, `colorMaterial`, `lambertMaterial` and other materials. If not set, the material parameters of the component are taken by default.


### show(boolean) = false

Whether to display the ground.

### color(string) = '#aaa'

The color of the ground.

## instancing(boolean) = false

`instancing` will merge all the [geometry](http://geojson.org/geojson-spec.html#geometry-objects)  in GeoJSON into one. When GeoJSON has a lot of (thousands) [geometry](http://geojson.org/geojson-spec.html#geometry-objects), it can effectively improve drawing efficiency.


## label(Object)

The setting of the label.

{{ use: partial-label(
    prefix="##",
    defaultShow=false
) }}

## itemStyle(Object)

Visual properties of 3D graphics in ${componentName}, including color, transparency, strokes, etc.

{{ use: partial-item-style-geo3D(
    prefix="##",
    hasCallback=true,
    useColorPalette=true
) }}

## emphasis(Object)

Graphic and label styles when mouse hover is highlighted.

### label(Object)

{{ use: partial-label-geo3D(
    prefix="###",
    defaultShow=false
) }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix="###"
) }}

## {{ if: ${inMap} }} data(Array) {{ else: }} regions(Array) {{ /if }}

The setting of the map area.

### name(string)
The name of the corresponding map area, such as `'Guangdong'`, `'Zhejiang'`.

{{ if: ${inMap} }}
### value(number)
The data value for this area.
{{ /if }}

### regionHeight(number)

The height of the area. Different heights can be set to express the size of the data. When GeoJSON is the data of the building, this value can also be used to represent the approximate height. As shown below：


![700xauto](~city-region-height.jpg)

### itemStyle(Object)

Style settings for a single area.

{{ use: partial-item-style-geo3D(
    prefix="###"
) }}

### label(Object)

Label settings for a single area.

{{ use: partial-label-geo3D(
    prefix="###",
    defaultShow=false
) }}

### emphasis(Object)

Setting the highlight for labels and styles for a single area.

#### itemStyle(Object)

{{ use: partial-item-style-geo3D(
    prefix="####"
) }}

#### label(Object)

{{ use: partial-label-geo3D(
    prefix="####",
    defaultShow=false
) }}



{{ use: partial-shading(
    componentType=${componentType},
    componentName=${componentName}
) }}

{{ use: partial-light(
    componentType=${componentType},
    componentName=${componentName},
    defaultMainLightAlpha=40,
    defaultMainLightBeta=30
) }}

{{ use: partial-post-effect(
    componentType=${componentType},
    componentName=${componentName}
) }}

{{ use: partial-temporal-super-sampling(
    componentType=${componentType},
    componentName=${componentName}
) }}

{{ use: partial-view-control(
    componentType=${componentType},
    componentName=${componentName},
    defaultAlpha=40,
    defaultBeta=0,
    defaultDistance=100,
    defaultMinAlpha=5,
    defaultMinBeta=-80,
    defaultMaxBeta=80
) }}

{{ use: partial-zlevel }}

{{ use: partial-viewport }}


{{ target:partial-box-size-geo3D(master=partial-box-size)}}

{{ block: boxWidthDescriptionExtra }}

The following image is a schematic diagram of `boxWidth`, `boxHeight`, `boxDepth`, `regionHeight` in ${componentName}.


![600xauto](~geo-size.png)

{{ /block }}

{{ block: boxDepthDescriptionExtra }}
The component depth defaults to automatic, ensuring that the scale of the 3D component is the same as the ratio of the input GeoJSON.
{{ /block }}

{{ block: boxHeightDescriptionExtra}}
Component height. This height contains the height of the bar and scatter on a 3D map.
{{ /block }}


{{ target: partial-label-geo3D }}

{{ use: partial-label(
    prefix=${prefix},
    defaultShow=${defaultShow},
    defaultDistance=2,
    defaultTextFontSize=20,
    defaultTextColor='#000',
    defaultTextBorderWidth=1,
    defaultTextBorderColor="#fff"
) }}

{{ target: partial-item-style-geo3D }}

{{ use: partial-item-style(
    prefix=${prefix|default('##')},
    colorName='color',
    hasCallback = ${hasCallback},
    useColorPalette = ${useColorPalette}
) }}

#${prefix|default('##')} borderWidth(number) = ${defaultBorderWidth|default(0)}

The width of the border. With the border, you can distinguish each area more clearly. As shown below:

![](~geo-border.png)

#${prefix|default('##')} borderColor(string) = ${defaultBorderColor|default('#333')}
The color of the border.
