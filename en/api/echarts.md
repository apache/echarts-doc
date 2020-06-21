{{ target: echarts }}
# echarts(Object)

Global echarts object, which can be accessed after including `echarts.js` in script tag or through `require('echarts')` in AMD environment.

## init(Function)
```js
(dom: HTMLDivElement|HTMLCanvasElement, theme?: Object|string, opts?: {
    devicePixelRatio?: number;
    renderer?: string;
    width?: number|string;
    height?: number|string;
}) => ECharts
```
Creates an ECharts instance, and returns an [echartsInstance](~echartsInstance). You shall not initialize multiple ECharts instances on a single container.

**Parameters**
+ `dom`

    Instance container, usually is a `div` element with height and width defined.

    **Attention: **If `div` is hidden, ECharts initialization tends to fail due to the lack of width and height information. In this case, you can explicitly specify `style.width` and `style.height` of `div`, or manually call [echartsInstance.resize](echartsInstance.resize) after showing `div`.

    ECharts 3 supports using `canvas` element as container directly, thus the canvas can be used somewhere else as image directly after rendering the chart. For example, canvas can be used as a texture in WebGL, which enables updating charts in real-time, as compared to using images generated with [echartsInstance.getDataURL](~echartsInstance.getDataURL).

+ `theme`

    Theme to be applied. This can be a configuring object of a theme, or a theme name registered through [echarts.registerTheme](~echarts.registerTheme).

+ `opts`

    Optional chart configurations; which may contain:

    + `devicePixelRatio`

       Ratio of one physical pixel to the size of one device independent pixels. Browser's `window.devicePixelRatio` is used by default.

    + `renderer`

        Supports `'canvas'` or `'svg'`. See [Render by Canvas or SVG](tutorial.html#Render%20by%20Canvas%20or%20SVG).

    + `width`

        Specify width explicitly, in pixel. If setting to `null`/`undefined`/`'auto'`, width of `dom` (instance container) will be used.

    + `height`

        Specify height explicitly, in pixel. If setting to `null`/`undefined`/`'auto'`, height of `dom` (instance container) will be used.


## connect(Function)
```js
(group:string|Array)
```

Connects interaction of multiple chart series.

**Parameters**
+ `group`
    Group id, or array of chart instance.

**For example: **
```js
// set group id of each instance respectively.
chart1.group = 'group1';
chart2.group = 'group1';
echarts.connect('group1');
// or incoming instance array that need to be linked.
echarts.connect([chart1, chart2]);
```


## disconnect(Function)
```js
(group:string)
```
Disconnects interaction of multiple chart series. To have one single instance to be removed, you can set `group` of chart instance to be null.

**Parameters**
+ `group`

    group id.

## dispose(Function)
```js
(target: ECharts|HTMLDivElement|HTMLCanvasElement)
```
Destroys chart instance, after which the instance cannot be used any more.

## getInstanceByDom(Function)
```js
(target: HTMLDivElement|HTMLCanvasElement) => ECharts
```
Returns chart instance of dom container.

## registerMap(Function)
```js
(mapName: string, geoJson: Object, specialAreas?: Object)
```
Registers available maps. This can only be used after including [geo](option.html#geo) component or chart series of [map](option.html#series-map).

Please refer to [option.geo](option.html#geo.map) for usage.

**Parameters**
+ `mapName`

    Map name, referring to `map` value set in [geo](option.html#geo) component or [map](option.html#series-map).

+ `geoJson`

    Data in GeoJson format. See [http://geojson.org/](http://geojson.org/) for more format information.

+ `specialAreas`

    Optional; zoomed part of a specific area in the map for better visual effect.

    **For example [USA Population Estimates](${galleryEditorPath}map-usa): **
    ```js
echarts.registerMap('USA', usaJson, {
    // Move Alaska to the bottom left of United States
    Alaska: {
        // Upper left longitude
        left: -131,
        // Upper left latitude
        top: 25,
        // Range of longitude
        width: 15
    },
    // Hawaii
    Hawaii: {
        left: -110,
        top: 28,
        width: 5
    },
    // Puerto Rico
    'Puerto Rico': {
        left: -76,
        top: 26,
        width: 2
    }
});
    ```

## getMap(Function)
```js
(mapName: string)
```

Get a registered map in the following format:

```js
{
    // geoJson data of the map
    geoJson: Object,
    // special area, see registerMap() for more information
    specialAreas: Object
}
```

## registerTheme(Function)
```js
(themeName: string, theme: Object)
```

Registers a theme, should be specified when [initialize the chart instance](~echarts.init).


{{ use: echarts-graphic }}



