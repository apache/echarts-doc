{{target: geo-svg}}

# 地理坐标系和地图系列的 SVG 底图

从 `v5.1.0` 开始，ECharts 支持在 [地理坐标系（geo）](option.html#geo) 和 [地图系列（map series）](option.html#series-map) 中使用 SVG 作为底图。之前只支持 [GeoJSON](http://geojson.org/) 格式的底图。

有了这个功能，ECharts 能在任一种渲染模式（`canvas` 渲染模式和 `svg` 渲染模式）中绘制 SVG 底图，并且能够只用简单的 ECharts 配置项（option）就带来 [放大](option.html#geo.roam)、[平移](option.html#geo.roam)、[点选（select）](option.html#geo.select)、[高亮强调（emphasis）](option.html#geo.roam)、[聚焦-淡出（focus-blur）](option.html#geo.emphasis.focus)、[标签（label）](option.html#geo.label)、[标签布局（labelLayout）](option.html#series-map.labelLayout)、[提示框（tooltip）](option.html#geo.tooltip) 等特性。ECharts 中的所有在 [地理坐标系（geo）](option.html#geo) 中可用系列（如 [散点图（scatter）](option.html#series-scatter)、[特效散点图（effectScatter）](option.html#series-effectScatter)，[路径图（lines）](option.html#series-lines)，[自定义系列（custom）](option.html#series-custom)）也能显示在 SVG 底图上。

这些是使用 SVG 底图的例子：

[庖丁解牛](${galleryEditorPath}geo-beef-cuts) |
[内脏数据](${galleryEditorPath}geo-organ) |
[航班选座](${galleryEditorPath}geo-seatmap-flight) |
[地图](${galleryEditorPath}geo-svg-map) |
[散点图](${galleryEditorPath}geo-svg-scatter-simple) |
[路径图](${galleryEditorPath}geo-svg-lines) |
[交通](${galleryEditorPath}geo-svg-traffic)


## 基本用法

SVG 底图的用法与 [GeoJSON](http://geojson.org/) 底图的用法相同。

如果在 [地理坐标系（geo）](option.html#geo) 中使用：
```ts
$.get('map/organ.svg', function (svg) {
    // 首先向 echarts 注册 SVG 字符串或解析过的 SVG DOM
    echarts.registerMap('organ_diagram', {svg: svg});

    var chart = echarts.init(document.getElementById('main'))。
    chart.setOption({
        geo: [{
            // 引用注册过的底图。
            map: 'organ_diagram',
            ...
        }]
    });
});
```

如果在 [地图系列（map series）](option.html#series-map) 中使用：
```ts
$.get('map/beef_cuts.svg', function (svg) {
    // 首先向 echarts 注册 SVG 字符串或解析过的 SVG DOM
    echarts.registerMap('beef_cuts_diagram', {svg: svg})。

    var chart = echarts.init(document.getElementById('main'))。
    chart.setOption({
        series: {
            type: 'map',
            // 引用注册过的底图。
            map: 'beef_cuts_diagram',
            ...
        }
    });
});
```


## 缩放和平移

[地理坐标系（geo）](option.html#geo)
```ts
option = {
    geo: {
        // 启用缩放和平移。
        roam: true,
        ...
    }
};
```
[地图系列（map series）](option.html#series-map)
```ts
option = {
    series: {
        type: 'map',
        // 启用缩放和平移。
        roam: true,
        ...
    }
};
```

参见例子 [roam](option.html#geo.roam)、[SVG 地图](${galleryEditorPath}geo-svg-map)。


## 具名元素

如果要控制 SVG 中的某些元素，或者让某些元素能交互，我们首先要在 SVG 中标记这些元素：在这些元素上添加 `name` 属性（下文称此类添加过 `name` 属性的元素为：“具名元素”）。许多功能（如 [select](option.html#geo.select)、[emphasis](option.html#geo.emphasis)、[focus-blur](option.html#geo.emphasis.focus)、[label](option.html#geo.label)、[labelLayout](option.html#series-map.labelLayout) 和 [tooltip](option.html#geo.tooltip) 这类交互相关的功能）都依赖于对元素的命名。

如下例，我们只在左边的 SVG `path` 上添加名称属性 `name="named_rect"`：
```xml
<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.2" fill-rule="evenodd" xml:space="preserve">
    <path name="named_rect" d="M 0,0 L 0,100 100,100 100,0 Z" fill="#765" />
    <path d="M 150,0 L 150,100 250,100 250,0 Z" fill="#567" />
</svg>
```
这样，鼠标 hover 时能高亮左边的矩形，但是右边的不行。

~[500x200](${galleryViewPath}doc-example/geo-svg-named-basic&edit=1&reset=1)

我们还可以在 [geo.regions](option.html#geo.regions) 中为具名元素指定一些专属配置项：
```ts
option = {
    geo: {
        map: 'some_svg',
        regions: [{
            name: 'element_name_1',
            itemStyle: { ... }
        }, {
            name: 'element_name_2',
            itemStyle: { ... }
        }]
    }
};
```

注意:
+ 只有这些 SVG 元素可以被命名：
`rect`、`circle`、`line`、`ellipse`、`polygon`、`polyline`、`path`、`text`、`tspan`、`g`。
+ 支持多个元素以相同的名称命名，这样它们能被同时高亮、选中。


## 自定义样式

虽然 SVG 元素的样式（如颜色、字体、线宽等等）都能直接在 SVG 文件中定义，但 ECharts 也支持在 `option` 中为具名元素定制样式，这能提供不少便利。

可以在 [geo.itemStyle](option.html#geo.itemStyle) 或 [series-map.itemStyle](option.html#series-map.itemStyle) 中设置样式（也包括 `emphasis.itemStyle`、`select.itemStyle`、`blur.itemStyle`、`regions[i].itemStyle`、`regions[i].emphasis.itemStyle`、`regions[i].select.itemStyle`、`regions[i].blur.itemStyle`）。也能在这里删除一些具名元素的默认样式（例如，设置 `emphasis.itemStyle.color: null` 后，鼠标 hover 时填充色就不会改变）。

此外，使用 [series-map](option.html#series-map) 时，也可以用 [visualMap 组件](option.html#visualMap) 为具名元素赋予样式。参见例子 [庖丁解牛](${galleryEditorPath}geo-beef-cuts)。

注意：
只有这些具名元素可以在 `itemStyle` 中设置样式：
`rect`、`circle`、`line`、`ellipse`、`polygon`、`polyline`、`path`。


## 元素的“选中”能力（select）

如果想使具名元素能被“选中”，把 [geo.selectedMode](option.html#geo.selectedMode) 或 [series-map.selectedMode](option.html#series-map.selectedMode) 设置为 `'single'` 或者 `'multiple'` 即可。元素被选中时的样式可以在 [geo.select](option.html#geo.select) 或 [series-map.select](option.html#series-map.select) 中设定。

可以通过 [geoselectchanged](api.html#event.geoselectchanged) 事件获得所有被选中者的名称，例如：
```ts
myChart.on('geoselectchanged', function (params) {
    var selectedNames = params.allSelected[0].name;
    console.log('selected', selectedNames);
});
```

参见例子 [航班选座](${galleryEditorPath}geo-seatmap-flight)。


## 元素的“高亮强调”（emphasis）和“聚焦-淡出”（focus-blur）

具名元素可以自动在鼠标 hover 时有“高亮强调”（emphasis）的能力。

此外，可以把 [geo.emphasis.focus](option.html#geo.emphasis.focus) 设置为 `'self'` 来启用 “聚焦-淡出”（focus-blur）功能。也就是，当鼠标 hover 在一个具名元素上时，所有其他元素都会被淡出。

参见例子 [Organ Visualization](${galleryEditorPath}geo-organ)。


## 提示框（tooltip）

可以在具名元素上启用或禁用提示框（tooltip）功能。
```ts
option = {
    // 在 option 根部声明 tooltip 以整体开启 tooltip 功能。
    tooltip: {},
    geo: {
        map: 'some_svg',
        tooltip: {
            // 用 `show` 来启用/禁用 geo 上的 tooltip。
            show: true
        },
        regions: [{
            name: 'some_name1',
            // 如果需要的话，可以对特定具名元素指定 tooltip 参数。
            tooltip: {
                formatter: '一些特殊的提示 1'
            }
        }, {
            name: 'some_name2',
            tooltip: {
                formatter: '一些特殊的提示 2'
            }
        }]
    }
};
```

如果想单独禁用 geo 上的 tooltip，只需：
```ts
option = {
    tooltip: {},
    geo: {
        map: 'some_svg',
        tooltip: {
            show: false
        }
    }
};
```

参见例子 [SVG 地图](${galleryEditorPath}geo-svg-map)。


## 标签（label）

虽然可以直接在 SVG 中定义 `<text>`/`<tspan>` 来显示文本标签，但 ECharts 也支持用 [geo.label](option.html#geo.label) 或 [series-map.label](option.html#series-map.label) 来设置底图上的标签。

标签功能默认在鼠标 hover 时是启用的。如果想禁用标签，只需：
```ts
option = {
    geo: {
        map: 'some_svg',
        emphasis: {
            label: {
                show: false
            }
        }
    }
};
```

当想要多个元素共享一个标签时，我们有两种选择：
+ 将这些元素包裹在一个具名的 `<g>` 中（如 `<g="name_a">`）中，这样只会显示一个标签，并且基于 `<g>` 的 `boundingRect` 定位。
+ 给这些元素起相同的名字（如 `<path name="name_b"/><path name="name_b"/>`），这样每个元素都会显示一个标签，并且会根据每个元素自身显示和定位。

例如（将鼠标 hover 到元素上能显示标签）：
~[500x300](${galleryViewPath}doc-example/geo-svg-label-basic&edit=1&reset=1)

注意：只有这些具名元素可以设置 `label`：
`rect`、`circle`、`line`、`ellipse`、`polygon`、`polyline`、`path`、`g`。

标签的用法也参见示例 [Organ Visualization](${galleryEditorPath}geo-organ)。


## 事件

可以用如下方式监听具名元素的鼠标事件或者触摸事件：
```ts
// 'name1' 是一个 SVG 元素的名字。
myChart.on('click', { geoIndex: 0, name: 'name1' }, function (params) {
    console.log(params);
});
```


## SVG 底图的布局

在默认情况下，ECharts 会将 SVG 底图放置在画布的中心。如果需要调整的话，一般只调整 [layoutCenter](option.html#geo.layoutCenter)/[layoutSize](option.html#geo.layoutSize)，偶尔也可能要调整 `<svg viewBox="...">`/[geo.boundingCoords](option.html#geo.boundingCoords)（它们两个的区别是：是否产生剪裁）。在大多数情况下，用这些已经足够了。

如果要做一些精确的位置定制，那么还得了解下面这些概念。

[地理坐标系（geo）](option.html#geo) 和 [地图系列（map series）](option.html#series-map) 的布局规则和选项都是一样的。所以下面我们只讲 [地理坐标系（geo）](option.html#geo)。

~[700x550](${galleryViewPath}doc-example/geo-svg-layout-basic&edit=1&reset=1)

上面的例子只有一个 ECharts 画布，其中三个 SVG 展示在六个 [地理坐标系（geo）](option.html#geo) 中。同一列中的两个 [地理坐标系（geo）](option.html#geo) 使用相同的 SVG。

首先，形状的外观是由 SVG 文件本身决定的。也就是说，在上例中，由 `<circle>` 和 `viewBox` 属性决定（`viewBox` 会切割圆形）。可以注意，每一列的形状轮廓都一样（不管它们的位置、大小是否不同和是否被拉伸），因为它们使用的是同一个 SVG。

其次，用户可以用下面任一组选项，指定 [地理坐标系（geo）](option.html#geo) 的视口（`view port`）的位置和大小（它们的单位都是 echarts 画布的像素，或者百分比值）：
+ [layoutCenter](option.html#geo.layoutCenter)、[layoutSize](option.html#geo.layoutSize)（最常用）。
+ [top](option.html#geo.top)、[right](option.html#geo.right)、[bottom](option.html#geo.bottom)、[left](option.html#geo.left)（在上例中使用的是这组）。

在上例中，六个 `geo view port` 用六个黑色方块表示。

第三，确定 SVG 的 `bounding rect`。`bounding rect` 由以下方法决定（它们的单位都是 SVG 内部元素的度量单位）：
1. 如果设定了 [geo.boundingCoords](option.html#geo.boundingCoords)，则用它作 `bounding rect`。
2. 否则，如果设定了 `<svg width="..." height="...">`，则用 `[0, 0, width, height]` 作为 `bounding rect`。（如果只设定了 `width` 或 `height`，则只使用 `[0, width]` 或 `[0, height]`）。
3. 否则，如果设定了 `<svg viewBox="...">`，则用 `viewBox` 作 `bounding rect`。
4. 否则，由整个 SVG 所有元素 `bounding rect` 的并集得到最终 `bounding rect`。
5. 如果设定了 [geo.center](option.html#geo.center) 或 [geo.zoom](option.html#geo.zoom)，则把上述 `1~4` 得到的 `bounding rect` 进行相应的 `transform`。

`bounding rect` 确定后，会放置到相应的 `geo view port` 里：
+ 如果用的是 [layoutCenter](option.html#geo.layoutCenter)、[layoutSize](option.html#geo.layoutSize)，`bounding rect` 会置于 `geo view port` 的中心，并尽量填满 `geo view port`（保持长宽比）。
+ 如果用的是 [top](option.html#geo.top)、[right](option.html#geo.right)、[bottom](option.html#geo.bottom)、[left](option.html#geo.left)，`bounding rect` 会被拉伸，完全填充 `geo view port`。


## 在 SVG 底图上绘制系列

[scatter](option.html#series-scatter)、[effectScatter](option.html#series-effectScatter)、[lines](option.html#series-lines)、[custom](option.html#series-custom) 这些在 [地理坐标系（geo）](option.html#geo) 中可用的系列都可以在 SVG 底图上定位和显示。

在这种用法中，`series.data` 的值的单位即为是 SVG 内部元素的度量单位。比如说：
```ts
option = {
    geo: {
        map: 'some_svg'
    },
    series: {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        geoIndex: 0,
        data: [
            // SVG local coords.
            [488.2358421078053, 459.70913833075736],
            [770.3415644319939, 757.9672194986475],
            [1180.0329284196291, 743.6141808346214],
        ]
    }
};
```

另外，有种简便方法可以获得 SVG 的坐标。
```ts
myChart.setOption({
    geo: {
        map: 'some_svg'
    }
});
myChart.getZr().on('click', function (params) {
    var pixelPoint = [params.offsetX, params.offsetY];
    var dataPoint = myChart.convertFromPixel({ geoIndex: 0 }, pixelPoint);
    // 在 SVG 上点击时，坐标会被打印。
    // 这些坐标可以在 `series.data` 里使用。
    console.log(dataPoint);
});
```

参见示例 [SVG Scatter](${galleryEditorPath}geo-svg-scatter-simple)、[SVG Lines](${galleryEditorPath}geo-svg-lines)、[SVG Traffic](${galleryEditorPath}geo-traffic)。


## 暂不支持的 SVG 功能

实现一个完整的 SVG 解析器有点困难。虽然已经支持了常用的 SVG 功能，但至少下面列出的这些还没支持：

+ 翻转（flip）和倾斜（skew）（将在 `v5.1.2` 支持）：
    + 不支持 `transform: skew(...)`（包括包含 skew 的 `transform: matrix(...)`）。
    + 不支持当 `transform: scale(x, y)` 中 `x`/`y` 正负不同且有 `rotate`（例如，`scale: (1, -1), rotate(90)`）。
+ 不支持 `<style>` 标签。
    + 但内联样式是支持的（例如支持 `<path style="color:red" />`）。
+ 单位：
    + 只支持 `px`。不支持其他单位如 `width="231.65mm"`。
    + 不支持百分比值，如不支持 `<svg width="30%" height="40%">`。
+ `<defs>` 标签：
    + 只支持 `<linearGradient>`、`<radialGradient>`。
    + 还不支持在 `<defs>` 中定义其他元素（如 `<pattern>`、`<path>`、...）。
+ `<linearGradient>`、`<radialGradient>`：
    + 不支持 `fx`、`fy`。
    + 不支持 `gradientTransform`。
+ `fill:url(..)`, `stroke:utl(..)`：
    + 只支持 `url(#someId)`。
    + 不支持其他 URL 模式，例如不支持：
        + `url(https://example.com/images/myImg.jpg)`。
        + `url(data:image/png;base64,iRxVB0...)`。
        + `url(myFont.woff)`。
+ `<switch>` 标签：
    + `<switch>` 标签内的所有内容都会显示。不支持“切换”功能。
+ `<text>`。
    + 不支持 `textPath`。
    + 不支持 [Addressable character](https://www.w3.org/TR/SVG/text.html#TermAddressableCharacter)，也就是说：
    ```xml
    <!-- 不支持： -->
    <tspan x="0 4.94 9.89">abc</tspan>。
    <!-- 支持： -->
    <tspan x="0">A</tspan>
    <tspan x="4.94">b</tspan>
    <tspan x="9.89">C</tspan>
    ```
