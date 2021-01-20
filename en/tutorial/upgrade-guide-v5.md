{{ target: upgrade-guide-v5 }}

# ECharst 5 Upgrade Guide


This guide is primarily for users who wish to upgrade their echarts 4.x to echarts 5.x. The notable new features of echarts 5 can be checked in this [docucment](xxx). In most cases we do not have to do anything for this migration because echarts has always tried to keep the API as stable and backward compatible as possible. But there are still some changes that breaks from echarts 4, as well as some cases that echarts 5 provides better API and deprecated the previous one. We attempt to explain them as thorough as possible in this document.

Because `v5.0.1` provides a significant new feature of [module registry](tutorial.html#Use%20ECharts%20with%20bundler%20and%20NPM). This document is based on `v5.0.1` or higher versions.


## Breaking Changes


### Default theme

The color in the default theme has been changed in `v5`. If users intend to roll back to the color theme of `v4`, please manually declare the color palette of `v4`, for example:
```js
chart.setOption({
    color: [
        '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
        '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
    ],
    // ...
});
```
or make a theme:
```js
var themeEC4 = {
    color: [
        '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
        '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
    ]
};
var chart = echarts.init(dom, themeEC4);
chart.setOption(/* ... */);
```


### ECharts Import


#### Import from `lib`

If the users previously import echarts in `v4` like this:
```js
import echarts from 'echarts/lib/echarts';
```
or
```js
import echarts from 'echarts';
```

They do not work in `v5` any more.

Users should modify it to:
```js
import * as echarts from 'echarts/lib/echarts';
```
or
```js
import * as echarts from 'echarts';
```


#### Import from `src`

If the upper JavaScript application previously imported `src/echarts.js`, `src/chart/*.js` or `src/component/*.js` in `v4`, for example:
```js
import * as echarts from 'echarts/src/echarts';
import 'echarts/src/chart/bar';
import 'echarts/src/component/grid';
```
It can not work any more in `v5` because all of the files in `echarts/src` folder are migrated to `*.ts`.

In fact, importing code form `echarts/src` fold is not recommended in `v5`. User can modify it to:
```js
import * as echarts from 'echarts/index.blank';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';

echarts.use([BarChart, GridComponent]);
```

The full list of charts and components exported can be check in [charts@5.0.1](https://cdn.jsdelivr.net/npm/echarts@5.0.1/lib/export/charts.js), [components@5.0.1](https://cdn.jsdelivr.net/npm/echarts@5.0.1/lib/export/components.js).



#### Import of `aria`

[aria](option.html#aria) is not included any more in [echarts/dist/echarts.simple(.min).js](https://cdn.jsdelivr.net/npm/echarts@5.0.1/dist/echarts.simple.js) and [echarts/index.simple.js](https://cdn.jsdelivr.net/npm/echarts@5.0.1/index.simple.js) since `v5`. Previously in `v4` it is included by them.

If users are using [echarts/dist/echarts(.min).js](https://cdn.jsdelivr.net/npm/echarts@5.0.1/dist/echarts.js) or [echarts/dist/echarts.common(.min).js](https://cdn.jsdelivr.net/npm/echarts@5.0.1/dist/echarts.common.js) or
```js
import * as echarts from 'echarts';
```
or
```js
import * as echarts from 'echarts/index.common';
```
there is nothing need to do when migrate about [aria](option.html#aria) from `v4` to `v5`. Because those source are still include [aria](option.html#aria) in `v5`.

But if users are using [echarts/dist/echarts.simple(.min).js](https://cdn.jsdelivr.net/npm/echarts@5.0.1/dist/echarts.simple.js) or
```js
import * as echarts from 'echarts/index.simple';
```
they need to manually import [aria](option.html#aria), for example:
```js
import * as echarts from 'echarts/index.simple';
import { AriaComponent } from 'echarts/components';

echarts.use([AriaComponent]);
```


### Built-in geoJSON

The built-in geoJSON has been removed (previously in `echarts/map` folder) since `v5`. Those geoJSON have been coming from third-parties. If users still need those geoJSON, please find them in the old version or prepare them yourself.


### Legacy IE8

The support of the legacy IE8 has been dropped. In terms of details, the previous [VML renderer](https://github.com/ecomfe/zrender/tree/4.3.2/src/vml) (necessary in IE8) will not be updated to work in `v5`. If there are strong requirements of the legacy IE8 support while `v5` features needed, welcome the pull request to upgrade that VML renderer, or make a third-party VML renderer, since renderers can be registered separately since `v5.0.1`.


### ECharts Option

#### Priority of Visuals Setting

The priority of the visuals between [visualMap component](option.html#visualMap) and [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle) are reversed since `v5`.

That is, previously in `v4`, the visuals (i.e., color, symbol, symbolSize, ...) that generated by [visualMap component](option.html#visualMap) has the highest priority, which will overwrite the same visuals settings in [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle). That brought troubles when needing to specify specific style to some certain data items while using [visualMap component](option.html#visualMap). Since `v5`, the visuals specified in [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle) has the highest priority.

In most cases, users will probably not notice this change when migrating from `v4` to `v5`. But users can still check that if [visualMap component](option.html#visualMap) and [itemStyle](option.html#series-scatter.itemStyle) | [lineStyle](option.html#series-scatter.lineStyle) | [areaStyle](option.html#series-scatter.areaStyle) are both specified.


#### `padding` in Rich Text

The behavior of [rich.?.padding](option.html#series-scatter.label.rich.<style_name>.padding) are changed. Previously in `v4`, `rich.?.padding: [11, 22, 33, 44]` indicates that `padding-top` is `33` and `padding-bottom` is `11`, which is a buggy implementation because it is different from what CSS did. Since `v5`, we fixed it that `rich.?.padding: [11, 22, 33, 44]` indicates `padding-top` is `11` and `padding-bottom` is `33`.

If users are using [rich.?.padding](option.html#series-scatter.label.rich.<style_name>.padding) in their `option`, please consider to switch them.




## ECharts Related Extensions

ECharts extensions can be found but not limit to [this list](https://echarts.apache.org/en/download-extension.html). Some of the extensions do not need users to upgrade its version if upgrading echarts to `v5`, but some others need. At least this extension need to be upgraded to new version to support echarts `v5`:

+ [echarts-gl](https://github.com/ecomfe/echarts-gl)
+ [echarts-wordcloud](https://github.com/ecomfe/echarts-wordcloud)
+ [echarts-liquidfill](https://github.com/ecomfe/echarts-liquidfill)

This list will be kept up to date.




## Deprecated API

Some of the API and echarts options are deprecated since `v5`, but are still backward compatible. Users can **keep using these deprecated API**, with only some warning will be printed to console in dev mode. But if users have spare time, it is recommended to upgraded to new API for the consideration of long term maintenance.

The deprecated API and their corresponding new API are listed as follows:

+ Transform related props of a graphic element are changed:
    + Changes:
        + `position: [number, number]` are changed to `x: number`/`y: number`.
        + `scale: [number, number]` are changed to `scaleX: number`/`scaleY: number`.
        + `origin: [number, number]` are changed to `originX: number`/`originY: number`.
    + The `position`, `scale` and `origin` are still supported but deprecated.
    + It effects these places:
        + In the `graphic` components: the declarations of each element.
        + In `custom series`: the declarations of each element in the return of `renderItem`.
        + Directly use zrender graphic elements.
+ Text related props on graphic elements are changed:
    + Changes:
        + The declaration of attached text (or say, rect text) are changed.
            + Prop `style.text` are deprecated in elements except `Text`. Instead, Prop set `textContent` and `textConfig` are provided to support more powerful capabilities.
            + These related props at the left part below are deprecated. Use the right part below instead.
                + textPosition => textConfig.position
                + textOffset => textConfig.offset
                + textRotation => textConfig.rotation
                + textDistance => textConfig.distance
        + The props at the left part below are deprecated in `style` and `style.rich.?`. Use the props at the right part below instead.
            + textFill => fill
            + textStroke => stroke
            + textFont => font
            + textStrokeWidth => lineWidth
            + textAlign => align
            + textVerticalAlign => verticalAlign);
            + textLineHeight =>
            + textWidth => width
            + textHeight => hight
            + textBackgroundColor => backgroundColor
            + textPadding => padding
            + textBorderColor => borderColor
            + textBorderWidth => borderWidth
            + textBorderRadius => borderRadius
            + textBoxShadowColor => shadowColor
            + textBoxShadowBlur => shadowBlur
            + textBoxShadowOffsetX => shadowOffsetX
            + textBoxShadowOffsetY => shadowOffsetY
        + Note: these props are not changed:
            + textShadowColor
            + textShadowBlur
            + textShadowOffsetX
            + textShadowOffsetY
    + It effects these places:
        + In the `graphic` components: the declarations of each element. [compat, but not accurately the same in some complicated cases.]
        + In `custom series`: the declarations of each element in the return of `renderItem`. [compat, but not accurately the same in some complicated cases].
        + Directly use zrender API to create graphic elements. [No compat, breaking change].
+ API on chart instance:
    + `chart.one(...)` is deprecated.
+ `label`:
    + In props `color`, `textBorderColor`, `backgroundColor` and `borderColor`, the value `'auto'` is deprecated. Use the value `'inherit'` instead.
+ `hoverAnimation`:
    + option `series.hoverAnimation` is deprecated. Use `series.emphasis.scale` instead.
+ `line series`:
    + option `series.clipOverflow` is deprecated. Use `series.clip` instead.
+ `custom series`:
    + In `renderItem`, the `api.style(...)` and `api.styleEmphasis(...)` are deprecated. Because it is not really necessary and hard to ensure backward compatibility. Users can fetch system designated visual by `api.visual(...)`.
+ `sunburst series`:
    + Action type `highlight` is deprecated. Use `sunburstHighlight` instead.
    + Action type `downplay` is deprecated. Use `sunburstUnhighlight` instead.
    + option `series.downplay` is deprecated. Use `series.blur` instead.
    + option `series.highlightPolicy` is deprecated. Use `series.emphasis.focus` instead.
+ `pie series`:
    + The action type at the left part below are deprecated. Use the right part instead:
        + `pieToggleSelect` => `toggleSelect`
        + `pieSelect` => `select`
        + `pieUnSelect` => `unselect`
    + The event type at the left part below are deprecated. Use the right part instead:
        + `pieselectchanged` => `selectchanged`
        + `pieselected` => `selected`
        + `pieunselected` => `unselected`
    + option `series.label.margin` is deprecated. Use `series.label.edgeDistance` instead.
    + option `series.clockWise` is deprecated. Use `series.clockwise` instead.
    + option `series.hoverOffset` is deprecated. Use `series.emphasis.scaleSize` instead.
+ `map series`:
    + The action type at the left part below are deprecated. Use the right part instead:
        + `mapToggleSelect` => `toggleSelect`
        + `mapSelect` => `select`
        + `mapUnSelect` => `unselect`
    + The event type at the left part below are deprecated. Use the right part instead:
        + `mapselectchanged` => `selectchanged`
        + `mapselected` => `selected`
        + `mapunselected` => `unselected`
    + option `series.mapType` is deprecated. Use `series.map` instead.
    + option `series.mapLocation` is deprecated.
+ `graph series`:
    + option `series.focusNodeAdjacency` is deprecated. Use `series.emphasis: { focus: 'adjacency'}` instead.
+ `gauge series`:
    + option `series.clockWise` is deprecated. Use `series.clockwise` instead.
    + option `series.hoverOffset` is deprecated. Use `series.emphasis.scaleSize` instead.
+ `dataZoom component`:
    + option `dataZoom.handleIcon` need prefix `path://` if using SVGPath.
+ `radar`:
    + option `radar.name` is deprecated. Use `radar.axisName` instead.
    + option `radar.nameGap` is deprecated. Use `radar.axisNameGap` instead.
+ Parse and format:
    + `echarts.format.formatTime` is deprecated. Use `echarts.time.format` instead.
    + `echarts.number.parseDate` is deprecated. Use `echarts.time.parse` instead.
    + `echarts.format.getTextRect` is deprecated.



