
{{ target: component-globe }}

# globe(Object)

地球组件。组件提供了地球的绘制以及相应的坐标系，开发者可以在上面展示三维的散点图、气泡图、柱状图、飞线图。

## show(boolean) = true

是否显示地球组件。

## globeRadius(number) = 100
地球的半径。单位相对于三维空间，跟 [viewControl.distance](~globe.viewControl.distance) 相关。

## globeOuterRadius(number) = 150
地球的外半径。`globeRadius` 到 `globeOuterRadius` 之间这片区域会被用于展示三维柱状图，散点图等。

{{ use: partial-environment(
    componentType="globe",
    componentName="地球"
) }}

## baseTexture(string|HTMLImageElement|HTMLCanvasElement|EChartsInstance)

地球的纹理。支持图片路径的字符串，图片或者 Canvas 的对象。

也支持直接使用 echarts 的实例作为纹理，此时在地球上的鼠标动作会跟纹理上使用的 echarts 实例有联动。

示例：
```ts
// 使用地球的纹理图片
baseTexture: 'asset/earth.jpg'


// 使用 echarts 绘制世界地图的实例作为纹理
var canvas = document.createElement('canvas');
var mapChart = echarts.init(canvas, null, {
    width: 4096, height: 2048
});
mapChart.setOption({
    series : [
        {
            type: 'map',
            map: 'world',
            // 绘制完整尺寸的 echarts 实例
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

地球的高度纹理。高度纹理可以用于[凹凸贴图](https://zh.wikipedia.org/wiki/%E5%87%B9%E5%87%B8%E8%B4%B4%E5%9B%BE)表现地球表面的明暗细节。下面两张图分别是使用`heightTexture`和未使用`heightTexuture`的效果区别。

![400xauto](~heightmap-enable.png)

![400xauto](~heightmap-disable.png)

## displacementTexture(string|HTMLImageElement|HTMLCanvasElement)

地球顶点的置换纹理，默认同 [heightTexture](~globe.heightTexture)。

相比于凹凸贴图，顶点的置换是根据纹理直接对顶点做位移。在 [displaymentScale](~globe.displaymentScale) 大于 0 时有效。

## displacementScale(number) = 0

地球顶点位移的大小。默认为 0， 也就是没位移，下面两图分别是设置不同的`displacementScale`的效果

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/displacement-disable.png" width="100%" title="Scale: 0">
    <img src="documents/asset/gl/img/displacement-enable.png" width="100%" title="Scale: 0.1">
</div>

## displacementQuality(string) = 'medium'

地球顶点位移的质量。支持设置成 `'low'`, `'medium'`, `'high'`, `'ultra'` 。更高的质量能够表现更多的地表高度细节。下面截图分别是不同`displacementQuality`的效果

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

定位目标的经纬度坐标。设置后会忽略 [alpha](~globe.viewControl.alpha) 和 [beta](~globe.viewControl.beta)。


```ts
viewControl: {
    // 定位到北京
    targetCoord: [116.46, 39.92]
}
```


## layers(Array)

地球表面层的配置，你可以使用该配置项加入云层，或者对 [baseTexture](~globe.baseTexture) 进行补充绘制出国家的轮廓等等。

### show(boolean) = true

是否显示该层。

### type(string) = 'overlay'

层的类型，可选：

+ `'overlay'`

在地表上的覆盖层，可以用来显示云层等。

+ `'blend'`

跟 [baseTexture](~globe.baseTexture) 混合。

### name(string)

层的名字，在用 setOption 设置层属性的时候可以用 name 来标识需要更新的层。

```ts
chart.setOption({
    globe: {
        layer: [{
            // 更新 name 为 'cloud' 的层的纹理
            name: 'cloud',
            texture: 'cloud.png'
        }]
    }
});
```

### blendTo(string) = 'albedo'

在 [type](~globe.layers.type) 为 `'blend'` 时有效。

可选：
+ `albedo` 混合到 albedo，受光照的影响。

+ `emission` 混合到自发光，不受光照影响。

### intensity(number) = 1

混合的强度。

### shading(string) = 'lambert'

覆盖层的着色效果，同 [globe.shading](~globe.shading)， 支持 `'color'`, `'lambert'`, `'realistic'`

在 [type](globe.layers.type) 为 `'overlay'` 时有效。

### distance(number) = null

覆盖层离地球表面的距离。

在 [type](~globe.layers.type) 为 `'overlay'` 时有效。


### texture(string|HTMLImageElement|HTMLCanvasElement|EChartsInstance)

层的纹理，支持图片路径的字符串、图片对象或者 Canvas 的对象。

也支持直接使用 echarts 的实例作为纹理，此时在地球上的鼠标动作会跟纹理上使用的 echarts 实例有联动。

{{ use: partial-zlevel }}

{{ use: partial-viewport }}


{{ target: partial-shading-globe(master=partial-shading) }}

{{ block: shading-compare }}
下面是不同着色效果的区别：

![250xauto](~globe-shading-color.png)
![250xauto](~globe-shading-lambert.png)
![250xauto](~globe-shading-realistic.png)
{{ /block }}


{{ target: partial-light-globe(master=partial-light) }}

{{ block: light-extend }}
###${prefix|default("#")} time(Date)

日照的时间，默认使用当前的系统时间。

{{ /block }}


