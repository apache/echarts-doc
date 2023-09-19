{{ target: echarts }}
# echarts(Object)

Global echarts object, which can be accessed after including `echarts.js` in script tag or through `require('echarts')` in AMD environment.

## init(Function)
```ts
(dom: HTMLDivElement|HTMLCanvasElement, theme?: Object|string, opts?: {
    devicePixelRatio?: number,
    renderer?: string,
    useDirtyRect?: boolean,     // Since `5.0.0`
    useCoarsePointer?: boolean, // Since `5.4.0`
    pointerSize?: number,       // Since `5.4.0`
    ssr?: boolean,              // Since `5.3.0`
    width?: number|string,
    height?: number|string,
    locale?: string             // Since `5.0.0`
}) => ECharts
```
Creates an ECharts instance, and returns an [echartsInstance](~echartsInstance). You shall not initialize multiple ECharts instances on a single container.

**Parameters**
+ `dom`

    Instance container, usually is a DIV element with height and width defined. It's only optional when `opts.ssr` is enabled for server-side rendering.

    It can also be a `canvas` element. thus the canvas can be used somewhere else as image directly after rendering the chart. For example, canvas can be used as a texture in WebGL, which enables updating charts in real-time, as compared to using images generated with [echartsInstance.getDataURL](~echartsInstance.getDataURL).

+ `theme`

    Theme to be applied. This can be a configuring object of a theme, or a theme name registered through [echarts.registerTheme](~echarts.registerTheme). See [Overview of Style Customization](${handbookPath}concepts/style).

+ `opts`

    Optional chart configurations; which may contain:

    + `devicePixelRatio` Ratio of one physical pixel to the size of one device independent pixels. Browser's `window.devicePixelRatio` is used by default.
    + `renderer`  Supports `'canvas'` or `'svg'`. See [Render by Canvas or SVG](${handbookPath}best-practices/canvas-vs-svg).
    + `ssr` Whether to use server-side rendering. Only available in SVG rendering mode. When enabled, it will no longer render automatically every frame, you have to use the [renderToSVGString](~echartsInstance.renderToSVGString) method to get the rendered SVG string.
    + `useDirtyRect` Enable dirty rectangle rendering or not, `false` by default. See [New features in ECharts 5](${handbookPath}basics/release-note/v5-feature).
    + `useCoarsePointer` Whether to expand the response area when interacting with elements. `null` means enabling for mobile devices; `true` means always enabling; `false` means always disabling. See [Coarse Pointer](${handbookPath}how-to/interaction/coarse-pointer) for more information.
    + `pointerSize` Size of expanded interaction size in pixels. It should be used along with `opts.useCoarsePointer`.
    + `width`  Specify width explicitly, in pixel. If setting to `null`/`undefined`/`'auto'`, width of `dom` (instance container) will be used.
    + `height`  Specify height explicitly, in pixel. If setting to `null`/`undefined`/`'auto'`, height of `dom` (instance container) will be used.
    + `locale` Specify the locale. There are two builtins: `'ZH'` and `'EN'`. Or you can use [echarts.registerLocale](~echarts.registerLocale) to register a new locale. Or supported locales can be referenced in [src/i18n](https://github.com/apache/echarts/tree/release/src/i18n).

    If no need to specify a theme, a `null` should be passed before `opts` . Example:
    ```ts
    const chart = echarts.init(dom, null, {renderer: 'svg'});
    ```

**Note**

If DIV is hidden, ECharts initialization tends to fail due to the lack of width and height information. In this case, you can explicitly specify `style.width` and `style.height` of DIV, or manually call [echartsInstance.resize](~echartsInstance.resize) after showing DIV.

The height and width must be set via `opts.width` and `opts.height` in the server side rendering.


## connect(Function)
```ts
(group:string|Array)
```

Connects interaction of multiple chart series.

**Parameters**
+ `group`
    Group id, or array of chart instance.

**For example: **
```ts
// set group id of each instance respectively.
chart1.group = 'group1';
chart2.group = 'group1';
echarts.connect('group1');
// or incoming instance array that need to be linked.
echarts.connect([chart1, chart2]);
```


## disconnect(Function)
```ts
(group:string)
```
Disconnects interaction of multiple chart series. To have one single instance to be removed, you can set `group` of chart instance to be null.

**Parameters**
+ `group`

    group id.

## dispose(Function)
```ts
(target: ECharts|HTMLDivElement|HTMLCanvasElement)
```
Destroys chart instance, after which the instance cannot be used any more.

## getInstanceByDom(Function)
```ts
(target: HTMLDivElement|HTMLCanvasElement) => ECharts
```
Returns chart instance of dom container.

## use(Function)

> Since `5.0.1`

Use components. Used with the new tree-shaking API.

NOTE: `echarts.use` must be used before `eharts.init`

```ts
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import bar charts, all with Chart suffix
import {
    BarChart
} from 'echarts/charts';
// import rectangular coordinate system component, all suffixed with Component
import {
    GridComponent
} from 'echarts/components';
// Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
    CanvasRenderer
} from 'echarts/renderers';

// Register the required components
echarts.use(
    [GridComponent, BarChart, CanvasRenderer]
);
```

See [Use ECharts with bundler and NPM](${handbookPath}basics/import) for more detailed explanation.

## registerMap(Function)

```ts
(
    mapName: string,
    opt: {
        geoJSON: Object | string;
        specialAreas?: Object;
    }
)
| (
    mapName: string,
    opt: {
        svg: Object | string;
    }
)
| (
    mapName: string,
    geoJSON: Object | string,
    specialAreas?: Object
)
```
Registers available maps. This can only be used after including [geo](option.html#geo) component or chart series of [map](option.html#series-map).

Please refer to [option.geo](option.html#geo.map) for usage.

**Parameters**
+ `mapName`

    Map name, referring to `map` value set in [geo](option.html#geo) component or [map](option.html#series-map).

+ `opt`

    + `geoJSON` Optional. Data in GeoJson format. See [https://geojson.org/](https://geojson.org/) for more format information. Can be a JSON string or a parsed object. This key can also be `geoJson`.

    + `svg` Optional. Data in SVG format. Can be a SVG string or a parsed SVG DOM object. See more info in [SVG Base Map](tutorial.html#SVG%20Base%20Map%20in%20Geo%20Coords%20and%20Map%20SeriesSVG%20Base%20Map). Introduced in v5.1.0

    + `specialAreas` Optional. zoomed part of a specific area in the map for better visual effect. Only work for `geoJSON`.

**For example [USA Population Estimates](${galleryEditorPath}map-usa): **
```ts
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

Note:

If you only import the required components in your project, starting from v5.3.0 `registerMap` has to be used after the `MapChart` or `GeoComponent` is imported.

## getMap(Function)
```ts
(mapName: string)
```

Get a registered map in the following format:

```ts
{
    // geoJSON data of the map
    geoJSON: Object,
    // special area, see registerMap() for more information
    specialAreas: Object
}
```

Note:
+ `geoJSON` can also be `geoJson`, they have the same reference.
+ SVG registered by `registerMap` can not be obtained by this method yet.
+ If you only import the required components in your project, starting from v5.3.0 `getMap` has to be used after the `MapChart` or `GeoComponent` is imported.


## registerTheme(Function)
```ts
(themeName: string, theme: Object)
```

Registers a theme, should be specified when [initialize the chart instance](~echarts.init).


## registerLocale(Function)

> Since `5.0.0`

```ts
(locale: string, localeCfg: Object)
```

Registers a locale, should be specified when [initialize the chart instance](~echarts.init). See the format in [src/i18n/langEN.ts](https://github.com/apache/echarts/blob/release/src/i18n/langEN.ts)

## setPlatformAPI(Function)

> Since `5.3.0`

```ts
(platformAPI?: {
    createCanvas(): HTMLCanvasElement
    measureText(text: string, font?: string): { width: number }
    loadImage(
        src: string,
        onload: () => void,
        onerror: () => void
    ): HTMLImageElement
}) => void
```

Sets the platform-related API, which may need to be provided when non-browser platforms such as NodeJS.

+ `createCanvas` Creates a Canvas element, mainly used for measuring text width, which is required when `measureText` is not provided.
+ `measureText` measures the width of the text. By default will use the interface provided by the Canvas element to measure the width of the text. It can be replaced with a lighter implementation.
+ `loadImage` Load image, required when using Canvas rendering mode and using URLs as images.


{{ use: echarts-graphic }}
