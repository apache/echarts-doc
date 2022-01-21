
{{ target: component-mapbox3D }}

# mapbox3D(Object)

基于 mapbox-gl-js 的地理组件。支持在 mapbox 的地图上绘制三维的散点图，飞线图，柱状图和地图。你可以利用 Mapbox 强大的地图服务和 ECharts GL 丰富的可视化和渲染效果实现你想要的可视化作品。

在使用 mapbox 组件之前你需要先引入 mapbox 的官方 sdk。

```html
<script src='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css' rel='stylesheet' />
```

然后获取到 mapbox 提供的 token 后设置到 `mapbox.accessToken` 上。

```ts
mapboxgl.accessToken = '你的 token';
```

接下来你就可以像使用其它组件一样使用 mapbox 组件了。

```ts
chart.setOption({
    mapbox: {
        style: 'mapbox://styles/mapbox/dark-v9'
    }
});
```

可以前往 [https://www.mapbox.com/mapbox-gl-js/api/](https://www.mapbox.com/mapbox-gl-js/api/) 了解更详细的关于 mapbox-gl-js sdk 的内容。

## style(string|Object)

Mapbox 地图样式。同 [https://www.mapbox.com/mapbox-gl-js/style-spec/](https://www.mapbox.com/mapbox-gl-js/style-spec/)

## center(Array)

Mapbox 地图中心经纬度。经纬度用数组表示，例如：

```ts
mapbox3D: {
    center: [104.114129, 37.550339],
    zoom: 3
}
```

## zoom(number)

Mapbox 地图的缩放等级。见 [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-zoom](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-zoom)

## bearing(number) = 0

Mapbox 地图的旋转角度。见 [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-bearing](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-bearing)

## pitch(number) = 0

视角俯视的倾斜角度。默认为`0`，也就是垂直于地图表面。最大的值是`60`。见 [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-pitch](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-pitch)

## altitudeScale(number) = 1

海拔的缩放。

{{ use: partial-shading(
    componentType='mapbox3D',
    componentName='mapbox3D'
) }}

{{ use: partial-light(
    componentType='mapbox3D',
    componentName='mapbox3D',
    defaultMainLightAlpha=40,
    defaultMainLightBeta=30
) }}

{{ use: partial-post-effect(
    componentType='mapbox3D',
    componentName='mapbox3D'
) }}

{{ use: partial-temporal-super-sampling(
    componentType='mapbox3D',
    componentName='mapbox3D'
) }}
