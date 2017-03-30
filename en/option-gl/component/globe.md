
{{ target: component-globe }}

# globe(Object)

地球组件。组件提供了地球的绘制以及相应的坐标系，开发者可以在上面展示三维的散点图，气泡图，柱状图，飞线图。

## show(boolean) = true

是否显示地球组件。

{{ use: partial-zlevel }}

{{ use: partial-viewport }}

## globeRadius(number) = 100
地球的半径。单位相对于三维空间，跟 [viewControl.distance](~globe.viewControl.distance) 相关。

{{ use: partial-environment }}

## baseTexture(string|HTMLImageElement|HTMLCanvasElement|EChartsInstance)

地球的纹理。支持图片路径字符串，图片或者 Canvas 的对象。

也支持直接使用 echarts 的实例作为纹理，此时在地球上的鼠标动作会跟纹理上使用的 echarts 实例有联动。

示例：
```js
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

地球的高度纹理。高度纹理可以用于配合光照表现地球表面的明暗细节。下面两图分别是使用 `heightTexture` 和未使用 `heightTexuture` 的效果区别。

![300xauto](~heightmap-enable.png)

![300xauto](~heightmap-disable.png)

## displacementTexture(string|HTMLImageElement|HTMLCanvasElement)

地球顶点的置换纹理，默认同 [heightTexture]()

## displacementScale(number)


{{ use: partial-shading }}

{{ use: partial-light }}

{{ use: partial-post-effect }}

{{ use: partial-view-control }}
