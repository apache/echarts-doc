
{{ target: component-globe }}

# globe(Object)
Provides settings for the globe component that allows to render three-dimensional scatter chart, bar chart or lines.  

## show(boolean) = true

Displays globe when true.

## globeRadius (number) = 100
Globe radius in the three-dimensional viewport. Globe distance can be changed via [viewControl.distance] (~ globe.viewControl.distance) settings.

{{ use: partial-environment(
    componentType="globe",
    componentName="Globe"
) }}

## baseTexture(string|HTMLImageElement|HTMLCanvasElement|EChartsInstance)

Globe texture, supports image path, HTML image element, HTML canvas element or another echarts instance. 

Globe texture becomes fully interactive if another echarts instance is used. 

Example:
```js
// use the Earth texture image
baseTexture: 'asset/earth.jpg'


// Example echarts drawing the world map as a texture
var canvas = document.createElement('canvas');
var Mapchart = echarts.init (canvas, null, {
    width: 4096, height: 2048
});
mapChart.setOption({
    series : [
        {
            type: 'map',
            map: 'world',
            // Draw full size echarts examples
            top: 0, left: 0,
            right: 0, bottom: 0,
            boundingCoords: [[-180, 90], [180, -90]]
        }
    ]
});
...
BaseTexture: mapChart

```

## heightTexture(string|HTMLImageElement|HTMLCanvasElement)
Height texture can be provided to render globe surface in three dimensions. Echarts uses [bump mapping] (https://zh.wikipedia.org/wiki/%E5%87%B9%E5%87%B8%E8%B4%B4%E5%9B%BE) which simulates bumps and wrinkles on the surface of an object. Below are two examples, one using heightTexture and another one without heightTexture:  

![400xauto](~heightmap-enable.png)

![400xauto](~heightmap-disable.png)

## displacementTexture(string|HTMLImageElement|HTMLCanvasElement)
Globe displacement vertext texture with [heightTexture] (~ globe.heightTexture) as default. 

Compared to bump mapping technique, displacement of vertices is calculated directly from the displacement texture. Applicable only when [displaymentScale] (~ globe.displaymentScale) is greater than 0.

## displacementScale(number) = 0

Globe displacement vertex size. The default is 0 (no displacement) Below are two `displacementScale` examples: 

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/displacement-disable.png" width="100%" title="Scale: 0">
    <img src="documents/asset/gl/img/displacement-enable.png" width="100%" title="Scale: 0.1">
</div>

## displacementQuality(string) = 'medium'

Quality of vertex displacement. Can be ` 'low'`,`' medium'`, ` 'high'`,`' ultra'`. Higher quality surface shows more detail. Below are examples of different `displacementQuality`:

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/displacement-low.png" width="100%" title="Low">
    <img src="documents/asset/gl/img/displacement-ultra.png" width="100%" title="Ultra">
</div>


{{ use: partial-shading-globe(
    componentType="globe",
    componentName="globe"
) }}

{{ use: partial-light-globe(
    componentType="globe",
    componentName="globe"
) }}

{{ use: partial-post-effect(
    componentType="globe",
    componentName="globe"
) }}

{{ use: partial-temporal-super-sampling(
    componentType="globe",
    componentName="globe"
) }}

{{ use: partial-view-control(
    componentType="globe",
    componentName="globe",
    defaultPanSensitivity=0
) }}

### targetCoord(Array)

Target coordinates (latitude and longitude) of the globe. If set, [alpha] (~ globe.viewControl.alpha) and [beta] (~ globe.viewControl.beta) are ignored. 


```js
viewControl: {
    // navigate to Beijing
    targetCoord: [116.46, 39.92]
}
```


## layers(Array)
Allows to configure globe's surface layers. Can be use to add additional clouds layer, or to mix another map layer with the [baseTexture] (~ globe.baseTexture) to show country borders and so on. 

### show(boolean) = true

Shows the layer if true. 

### type(string) = 'overlay'

Type layer, optionally:

+ `'overlay'`
Cover's globe's base texture, can be used to render clouds layer.  

+ `'blend'`

Blends with [baseTexture] (~ globe.baseTexture).

### name(string)

Name of the layer, can be used when updating layer.  

```js
chart.setOption({
    globe: {
        layer: [{
            // Update name is 'cloud' of the texture layer
            name: 'cloud',
            texture: 'cloud.png'
        }]
    }
});
```

### blendTo(string) = 'albedo'

Applicable when [type] (~ globe.layers.type) is ` 'blend'`.

Optional:
+ `albedo` albedo, affected by illumination.

+ `emission` self-luminous, light is not affected.

### intensity(number) = 1

Blend intensity.

### shading(string) = 'lambert'

Coloring effect covering layer, with [globe.shading] (~ globe.shading), supports the ` 'color'`,`' lambert'`, ` 'realistic'`

Applicable when [type] (globe.layers.type) is ` 'overlay'`.

### distance(number) = null

Distance from the layer to the Earth's surface.

Applicable when [type] (~ globe.layers.type) is `'overlay'`.

### texture(string|HTMLImageElement|HTMLCanvasElement|EChartsInstance)

Layer's texture, supports image path, HTML image element, HTML canvas element or another echarts instance. 

Layer's texture becomes fully interactive if another echarts instance is used. 

{{ use: partial-zlevel }}

{{ use: partial-viewport }}

{{ target: partial-shading-globe(master=partial-shading) }}

{{ block: shading-compare }}
Below is the difference between different shading effects:

![250xauto](~globe-shading-color.png)
![250xauto](~globe-shading-lambert.png)
![250xauto](~globe-shading-realistic.png)
{{ /block }}


{{ target: partial-light-globe(master=partial-light) }}

{{ block: light-extend }}
###${prefix|default("#")} time(Date)

Sunshine time, the default is the current time.

{{ /block }}

