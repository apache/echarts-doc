
{{ target: component-mapbox3D }}

# mapbox3D(Object)

A geographic component based on mapbox-gl-js. Support for drawing [3D Scatter](~series-scatter3D), [3D Lines](~series-lines3D), [3D Bar](~series-bar3D), [3D map](~series-map3D) on mapbox maps. You can take advantage of Mapbox's powerful map service and ECharts GL's rich visualization and rendering effects to achieve the visualization you want.

You need to introduce the official sdk of mapbox before using the mapbox component.

```html
<script src='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css' rel='stylesheet' />
```
Then get the token provided by mapbox and set it to `mapbox.accessToken`.


```ts
mapboxgl.accessToken = 'your token';
```

Then you can use the mapbox component just like any other component.

```ts
chart.setOption({
    mapbox: {
        style: 'mapbox://styles/mapbox/dark-v9'
    }
});
```
Go to [https://www.mapbox.com/mapbox-gl-js/api/](https://www.mapbox.com/mapbox-gl-js/api/) for more details on `mapbox-gl-js sdk`.


## style(string|Object)

Sets the style of the Mapbox map. Same as [https://www.mapbox.com/mapbox-gl-js/style-spec/](https://www.mapbox.com/mapbox-gl-js/style-spec/).

## center(Array)

Sets the longitude and latitude of the center of the map. Longitude and latitude are represented by arrays, for example:

```ts
mapbox3D: {
    center: [104.114129, 37.550339],
    zoom: 3
}
```

## zoom(number)

Sets the zoom level of the map. See [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-zoom](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-zoom)

## bearing(number) = 0

Sets the bearing angle of the map. See [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-bearing](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-bearing)

## pitch(number) = 0
Sets the pitch angle of the map. The default is `0` means perpendicular to the surface of the map. The greater value is `60`. See [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-pitch](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-pitch)

## altitudeScale(number) = 1

The zoom of the altitude Scale.

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
