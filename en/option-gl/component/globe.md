
{{ target: component-globe }}

# globe(Object)

Globe component. The component provides the drawing of the Earth and the coordinate system. The developer can display 3D Scatter, 3D Bubble, 3D Bar, 3D Lines on it.

## show(boolean) = true

Whether to show the globe component.

{{ use: partial-zlevel }}

{{ use: partial-viewport }}

## globeRadius(number) = 100
The radius of the globe. The unit is relative to the three-dimensional space, related to [viewControl.distance](~globe.viewControl.distance).


## globeOuterRadius(number) = 150

The outer radius of the globe. This area between `globeRadius` and `globeOuterRadius` will be used to display 3D histograms, scatter plots, etc.


{{ use: partial-environment(
    componentType="globe",
    componentName="地球"
) }}

{{ use: partial-environment }}

## baseTexture(string|HTMLImageElement|HTMLCanvasElement|EChartsInstance)

The texture of the globe. Support for the string of image paths, images object or Canvas objects.

It also supports to use an echarts example as a texture directly, in which case mouse actions on Earth will be linked to the echarts instance used on the texture.

Example:
```ts
// Use the globe's texture image
baseTexture: 'asset/earth.jpg'

// Use the world map example of echarts as a texture.
var canvas = document.createElement('canvas');
var mapChart = echarts.init(canvas, null, {
    width: 4096, height: 2048
});
mapChart.setOption({
    series : [
        {
            type: 'map',
            map: 'world',
            // Draw full size echarts example
            top: 0, left: 0,
            right: 0, bottom: 0,
            boundingCoords: [[-180, 90], [180, -90]]
        }
    ]
});
...
baseTexture: mapChart

```

## heightTexture(string|HTMLImageElement|HTMLCanvasElement)

The high texture of the globe. High textures can be used to match [Bump Map](https://zh.wikipedia.org/wiki/%E5%87%B9%E5%87%B8%E8%B4%B4%E5%9B%BE) to show the light and dark details of the Earth's surface.
The following two images show the difference between using `heightTexture` and not using `heightTexuture`.

![400xauto](~heightmap-enable.png)

![400xauto](~heightmap-disable.png)

## displacementTexture(string|HTMLImageElement|HTMLCanvasElement)

The displacement texture of the vertices of the globe, the default is the same as a [heightTexture]()

Compared to bump maps, The displacement of the vertex is to directly shift the vertices according to the texture. Valid when [displaymentScale](~globe.displaymentScale) is greater than 0.

## displacementScale(number) = 0

The displacement map of the globe's vertex. The default is 0, which means no displacement.
The following two images show the effects of setting different `displacementScale`.


<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/displacement-disable.png" width="100%" title="Scale: 0">
    <img src="documents/asset/gl/img/displacement-enable.png" width="100%" title="Scale: 0.1">
</div>

## displacementQuality(string) = 'medium'

The quality of the globe's vertex displacement. Support for `'low'`, `'medium'`, `'high'`, `'ultra'` settings.Higher quality can show more ground height detail.
The following two images show the effects of different `displacementQuality`.

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/displacement-low.png" width="100%" title="Low">
    <img src="documents/asset/gl/img/displacement-ultra.png" width="100%" title="Ultra">
</div>


{{ use: partial-shading-globe(
    componentType="globe",
    componentName="地球"
) }}

{{ use: partial-light-globe(
    componentType="globe",
    componentName="地球"
) }}

{{ use: partial-atmosphere(
    componentType="globe",
    componentName="地球"
) }}

{{ use: partial-post-effect(
    componentType="globe",
    componentName="地球"
) }}

{{ use: partial-temporal-super-sampling(
    componentType="globe",
    componentName="地球"
) }}

{{ use: partial-view-control(
    componentType="globe",
    componentName="地球",
    defaultPanSensitivity=0
) }}

### targetCoord(Array)

Position the longitudes and latitudes.
Ignore [alpha](~globe.viewControl.alpha) 和 [beta](~globe.viewControl.beta) after the setting.


```ts
viewControl: {
    // locate in BeiJing
    targetCoord: [116.46, 39.92]
}
```


## layers(Array)

Configuration of the Earth's Surface Layer.
You can use this configuration item to add clouds, or to supplement [baseTexture](~globe. baseTexture) to draw the outline of the country, and so on.

### show(boolean) = true

Whether to show this layer.

### type(string) = 'overlay'

Layper type, Optional：

+ `'overlay'`

The overlay on the ground surface can be used to display clouds and the like.

+ `'blend'`

Mix with [baseTexture](~globe.baseTexture).

### name(string)

The name of the layer. When setting the properties of the layer with setOption, you can use the name to identify the layer that needs to be updated.

```ts
chart.setOption({
    globe: {
        layer: [{
            // Update the texture of the layer named 'cloud'
            name: 'cloud',
            texture: 'cloud.png'
        }]
    }
});
```

### blendTo(string) = 'albedo'

When [type](~globe.layers.type) is `'blend'` is valid .

Optional：
+ `albedo` is mixed to albedo, affected by lighting.

+ `emission` is mixed to self-illuminating, unaffected by light.

### intensity(number) = 1

The intensity of the mixture.

### shading(string) = 'lambert'

The coloring effect of the overlay is the same as [globe.shading](~globe.shading), which supports `'color'`, `'lambert'`, `'realistic'`

Valid when [type](globe.layers.type) is `'overlay'`.

### distance(number) = null

The distance from the overlay to the surface of the globe.

Valid when [type](~globe.layers.type) is `'overlay'`.


### texture(string|HTMLImageElement|HTMLCanvasElement|EChartsInstance)

The texture of the globe. Support for the string of image paths, images object or Canvas objects.

It also supports to use an echarts example as a texture directly, in which case mouse actions on Earth will be linked to the echarts instance used on the texture.

{{ use: partial-zlevel }}

{{ use: partial-viewport }}


{{ target: partial-shading-globe(master=partial-shading) }}

{{ block: shading-compare }}
Here are the differences between different coloring effects.

![250xauto](~globe-shading-color.png)
![250xauto](~globe-shading-lambert.png)
![250xauto](~globe-shading-realistic.png)
{{ /block }}


{{ target: partial-light-globe(master=partial-light) }}

{{ block: light-extend }}
###${prefix|default("#")} time(Date)

The time of sunshine. The current system time is used by default.

{{ /block }}



