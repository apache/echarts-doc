
{{ target: series-custom }}

# series.custom(Object)

**custom series**

`custom series` supports customizing graphic elements, and then generate more types of charts.

echarts manages the creation, deletion, animation and interaction with other components (like [dataZoom](~dataZoom)、[visualMap](~visualMap)), which frees developers from handling those issue themselves.

**For example, a "x-range" chart is made by custom sereis:**
~[800x400](${galleryViewPath}custom-profile&reset=1&edit=1)

**[More samples of custom series](${websitePath}/examples/en/index.html#chart-type-custom)**

**[A tutotial of custom series](tutorial.html#Custom%20Series)**

<br>
**Customize the render logic (in renderItem method)**

{{ use: partial-custom-renderItem-common() }}

<br>
**Dimension mapping (by encode and dimension option)**

In most cases, [series.encode](~series-custom.encode) needs to be specified when using `custom series` series, which indicate the mapping of dimensions, and then echarts can render appropriate axis by the extent of those data.

`encode.tooltip` and `encode.label` can also be specified to define the content of default `tooltip` and `label`.
[series.dimensions](~series-custom.dimensions) can also be specified to defined names of each dimensions, which will be displayed in tooltip.

For example:
```ts
series: {
    type: 'custom',
    renderItem: function () {
        ...
    },
    encode: {
        x: [2, 4, 3],
        y: 1,
        label: 0,
        tooltip: [2, 4, 3]
    }
}
```

<br>
**Controlled by dataZoom**

When use `custom series` with [dataZoom](~dataZoom), [dataZoom.filterMode](~dataZoom.filterMode) usually be set as `'weakFilter'`, which prevent `dataItem` from being filtered when only part of its dimensions are out of the current data window.


<br>
<br>
**Difference between `dataIndex` and `dataIndexInside`**

{{ use: partial-custom-dataIndex-dataIndexInside() }}

<br>
**Event listener**

```ts
chart.setOption({
    // ...
    series: {
        type: 'custom',
        renderItem: function () {
            // ...
            return {
                type: 'group',
                children: [{
                    type: 'circle'
                    // ...
                }, {
                    type: 'circle',
                    name: 'aaa',
                    // User specified info, available
                    // in event handler.
                    info: 12345,
                    // ...
                }]
            };
        }
    }
});
chart.on('click', {element: 'aaa'}, function (params) {
    // When the element with name 'aaa' clicked,
    // this method called.
    console.log(params.info);
});
```

## type(string) = 'custom'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType = "custom",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = true,
    geo = true,
    calendar = true,
    none = true
) }}

## renderItem(Function)

{{ use: partial-custom-renderItem-common() }}

### arguments(*)

Parameters of `renderItem`.

#### params(Object)

The first parameter of `renderItem`, including:

```ts
{
    context: // {string} An object that developers can store something temporarily here. Life cycle: current round of rendering.
    seriesId: // {string} The id of this series.
    seriesName: // {string} The name of this series.
    seriesIndex: // {number} The index of this series.
    dataIndex: // {number} The index of this data item.
    dataIndexInside: // {number} The index of this data item in the current data window (see dataZoom).
    dataInsideLength: // {number} The count of data in the current data window (see dataZoom).
    actionType: // {string} The type of action that trigger this render.
    coordSys: // coordSys is variable by different types of coordinate systems:
    coordSys: {
        type: 'cartesian2d',
        x: // {number} x of grid rect
        y: // {number} y of grid rect
        width: // {number} width of grid rect
        height: // {number} height of grid rect
    },
    coordSys: {
        type: 'calendar',
        x: // {number} x of calendar rect
        y: // {number} y of calendar rect
        width: // {number} width of calendar rect
        height: // {number} height of calendar rect
        cellWidth: // {number} calendar cellWidth
        cellHeight: // {number} calendar cellHeight
        rangeInfo: {
            start: // date start of calendar.
            end: // date end of calendar.
            weeks: // number of weeks in calendar.
            dayCount: // day count in calendar.
        }
    },
    coordSys: {
        type: 'geo',
        x: // {number} x of geo rect
        y: // {number} y of geo rect
        width: // {number} width of geo rect
        height: // {number} height of geo rect
        zoom: // {number} zoom ratio, 1 if no zoom, 0.5 means shrink to 50%.
    },
    coordSys: {
        type: 'polar',
        cx: // {number} x of polar center.
        cy: // {number} y of polar center.
        r: // {number} outer radius of polar.
        r0: // {number} inner radius of polar.
    },
    coordSys: {
        type: 'singleAxis',
        x: // {number} x of singleAxis rect
        y: // {number} y of singleAxis rect
        width: // {number} width of singleAxis rect
        height: // {number} height of singleAxis rect
    }
}
```

Difference between `dataIndex` and `dataIndexInside`:

{{ use: partial-custom-dataIndex-dataIndexInside() }}

#### api(Object)

The second parameter of `renderItem`.

##### value(Function)

Get value on the given dimension.

```
@param {number} dimension The given dimension. (index from 0).
@param {number} [dataIndexInside] In most cases it is not necessary.
@return {number} The value.
```

##### coord(Function)

Convert data to coordinate.

```
@param {Array.<number>} data.
@return {Array.<number>} Point on canvas, at least includes [x, y].
        In polar, it also contains:
        polar: [x, y, radius, angle]
```

##### size(Function)

Get the size by the given data range.

For example, in `cartesian2d`, suppose calling `api.size([2, 4])` returns `[12.4, 55]`. It represents that on x axis, data range `2` corresponds to size `12.4`, and on y axis data range `4` corresponds to size `55`.

In some coordinate systems (for example, polar) or when log axis is used, the size is different in different point. So the second parameter is necessary to calculate size on the given point.

```
@param {Array.<number>} dataSize Data range.
@param {Array.<number>} dataItem The point where the size will be calculated.
@return {Array.<number>} The size.
```

##### style(Function)

The method obtains style info defined in [series.itemStyle](~series-custom.itemStyle), and visual info obtained by visual mapping, and return them. Those returned info can be assigned to `style` attribute of graphic element definition directly. Developers can also override style info by calling this method like this: `api.style({fill: 'green', stroke: 'yellow'})`.

```
@param {Object} [extra] Extra style info.
@param {number} [dataIndexInside] In most cases, this parameter is not necessary.
@return {Object} Style info, which can be assigned to `style` attribute of graphic element definition directly.
```

##### styleEmphasis(Function)

The method obtains style info defined in [series.itemStyle.emphasis](~series-custom.itemStyle.emphasis), and visual info obtained by visual mapping, and return them. Those returned info can be assigned to `style` attribute of graphic element definition directly. Developers can also override style info by calling this method like this: `api.style({fill: 'green', stroke: 'yellow'})`.

```
@param {Object} [extra] Extra style info.
@param {number} [dataIndexInside] In most cases, this parameter is not necessary.
@return {Object} Style info, which can be assigned to `style` attribute of graphic element definition directly.
```

##### visual(Function)

Get the visual info. It is rarely be used.

```
@param {string} visualType 'color', 'symbol', 'symbolSize', ...
@param {number} [dataIndexInside] In most cases, this parameter is not necessary.
@return {string|number} The value of visual.
```

##### barLayout(Function)

When `barLayout` is needed, (for example, when attaching some extra graphic elements to bar chart), this method can be used to obtain bar layout info.

See a [sample](${galleryEditorPath}custom-bar-trend).

```
@param {Object} opt
@param {number} opt.count How many bars in each group.
@param {number|string} [opt.barWidth] Width of a bar.
        Can be an absolute value like `40` or a percent value like `'60%'`.
        The percent is based on the calculated category width.
@param {number|string} [opt.barMaxWidth] Max width of a bar.
        Can be an absolute value like `40` or a percent value like `'60%'`.
        The percent is based on the calculated category width.
        Has higher priority than `opt.barWidth`.
@param {number|string} [opt.barMinWidth] Min width of a bar.
        Can be an absolute value like `40` or a percent value like `'60%'`.
        The percent is based on the calculated category width.
        Has higher priority than `opt.barWidth`.
@param {number} [opt.barGap] Gap of bars in a group.
@param {number} [opt.barCategoryGap] Gap of groups.
@return {Array.<Object>} [{
        width: {number} Width of a bar.
        offset: {number} Offset of a bar, based on the left most edge.
        offsetCenter: {number} bar Offset of a bar, based on the center of the bar.
    }, ...]
```

##### currentSeriesIndices(Function)

Obtain the current series index. Notice that the `currentSeriesIndex` is different from `seriesIndex` when legend is used to filter some series.

```
@return {number}
```

##### font(Function)

Obtain font string, which can be used on style setting directly.

```
@param {Object} opt
@param {string} [opt.fontStyle]
@param {number} [opt.fontWeight]
@param {number} [opt.fontSize]
@param {string} [opt.fontFamily]
@return {string} font string.
```

##### getWidth(Function)

```
@return {number} Width of echarts container.
```

##### getHeight(Function)

```
@return {number} Height of echarts container.
```

##### getZr(Function)

```
@return {module:zrender} zrender instance.
```

##### getDevicePixelRatio(Function)

```
@return {number} The current devicePixelRatio.
```

### return(Object)

`renderItem` should returns graphic element definitions. Each graphic element is an object. See [graphic](~graphic.elements) for detailed info. (But width\height\top\bottom is not supported here)

If nothing should be rendered in this data item, just returns nothing.

For example:
```ts
// Returns a rectangular.
{
    type: 'rect',
    shape: {
        x: x, y: y, width: width, height: height
    },
    style: api.style()
}
```

```ts
// Returns a group of elements.
{
    type: 'group',
    // If diffChildrenByName is set as `true`, `child.name` will be used
    // to diff children, which improves animation transition but degrade
    // performance. The default value is `false`.
    // diffChildrenByName: true,
    children: [{
        type: 'circle',
        shape: {
            cx: cx, cy: cy, r: r
        },
        style: api.style()
    }, {
        type: 'line',
        shape: {
            x1: x1, y1: y1, x2: x2, y2: y2
        },
        style: api.style()
    }]
}
```

{{ use: partial-zr-graphic-elements(
    prefix = '##',
    hostName = 'return',
    symbolVisit = '_',
    symbolDeclare = '_',
    optionPath = 'series-custom.renderItem',
    usageType = 'customSeries'
) }}

## itemStyle(Object)

{{ use: partial-item-style-desc() }}

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = false,
    useDecal = true
) }}

## labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '##',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

{{ use: partial-seriesLayoutBy() }}

{{ use: partial-datasetIndex() }}

{{ use: partial-series-group-id() }}

## data(Array)

{{ use: partial-2d-data-desc() }}

### name(string)

Name of data item.

### value(number)

Value of data item.

{{ use: partial-data-group-id(
    prefix = '##'
) }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###",
    useDecal = true
) }}

### emphasis(Object)

#### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "####"
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-clip(
    prefix = "#",
    defaultClip = false
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "custom series"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-custom-renderItem-common }}

`custom series` requires developers to write a render logic by themselves. This render logic is called [renderItem](~series-custom.renderItem).

For example:

```ts
var option = {
    ...,
    series: [{
        type: 'custom',
        renderItem: function (params, api) {
            var categoryIndex = api.value(0);
            var start = api.coord([api.value(1), categoryIndex]);
            var end = api.coord([api.value(2), categoryIndex]);
            var height = api.size([0, 1])[1] * 0.6;

            var rectShape = echarts.graphic.clipRectByRect({
                x: start[0],
                y: start[1] - height / 2,
                width: end[0] - start[0],
                height: height
            }, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            });

            return rectShape && {
                type: 'rect',
                shape: rectShape,
                style: api.style()
            };
        },
        data: data
    }]
}
```

[renderItem](~series-custom.renderItem) will be called on each data item.

[renderItem](~series-custom.renderItem) provides two parameters:
+ [params](~series-custom.renderItem.arguments.params): provides info about the current series and data and coordinate system.
+ [api](~series-custom.renderItem.arguments.api): includes some methods.

[renderItem](~series-custom.renderItem) method should returns graphic elements definitions.See [renderItem.return](~series-custom.renderItem.return).

Generally, the main process of [renderItem](~series-custom.renderItem) is that retrieve value from data and convert them to graphic elements on the current coordinate system. Two methods in [renderItem.arguments.api](~series-custom.renderItem.arguments.api) are always used in this procedure:
+ [api.value(...)](~series-custom.renderItem.arguments.api.value) is used to retrieve value from data. For example, `api.value(0)` retrieve the value of the first dimension in the current data item.
+ [api.coord(...)](~series-custom.renderItem.arguments.api.coord) is used to convert data to coordinate. For example, `var point = api.coord([api.value(0), api.value(1)])` converet the data to the point on the current coordinate system.

Sometimes [api.size(...)](~series-custom.renderItem.arguments.api.size) method is needed, which calculates the size on the coordinate system by a given data range.

Moreover, [api.style(...)](~series-custom.renderItem.arguments.api.style) method can be used to set style. It provides not only the style settings specified in [series.itemStyle](~series-custom.itemStyle), but also the result of visual mapping. This method can also be called like `api.style({fill: 'green', stroke: 'yellow'})` to override those style settings.



{{ target: partial-custom-dataIndex-dataIndexInside }}

+ `dataIndex` is the index of a `dataItem` in the original data.
+ `dataIndexInside` is the index of a `dataItem` in the current data window (see [dataZoom](~dataZoom).

[renderItem.arguments.api](~series-custom.renderItem.arguments.api) uses `dataIndexInside` as the input parameter but not `dataIndex`, because conversion from `dataIndex` to `dataIndexInside` is time-consuming.

