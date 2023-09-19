
{{ target: component-data-zoom-slider }}

# dataZoom.slider(Object)

**滑动条型数据区域缩放组件（dataZoomInside）**

滑动条型数据区域缩放组件提供了数据缩略图显示，缩放，刷选，拖拽，点击快速定位等数据筛选的功能。下图显示了该组件可交互部分

![600xauto](~dataZoom-zone.png)

<ExampleBaseOption name="data-zoom-slider" title="滑块缩放的 dataZoom" title-en="DataZoom with Slider">
const data = [["2014-07-14",156],["2014-07-15",140],["2014-07-16",133],["2014-07-17",186],["2014-07-18",182],["2014-07-19",106],["2014-07-20",119],["2014-07-21",68],["2014-07-22",54],["2014-07-23",82],["2014-07-24",90],["2014-07-25",134],["2014-07-26",188],["2014-07-27",194],["2014-07-28",159],["2014-07-29",159],["2014-07-30",169],["2014-07-31",244],["2014-08-01",199],["2014-08-02",163],["2014-08-03",149],["2014-08-05",80],["2014-08-06",67],["2014-08-07",162],["2014-08-08",140],["2014-08-09",143],["2014-08-10",125],["2014-08-11",76],["2014-08-12",119],["2014-08-13",70],["2014-08-14",104],["2014-08-15",109],["2014-08-16",159],["2014-08-17",124],["2014-08-18",135],["2014-08-19",150],["2014-08-20",164],["2014-08-21",169],["2014-08-22",83],["2014-08-23",155],["2014-08-24",75],["2014-08-25",59],["2014-08-26",78],["2014-08-27",136],["2014-08-28",103],["2014-08-29",104],["2014-08-30",176],["2014-08-31",89],["2014-09-01",127],["2014-09-03",54],["2014-09-04",100],["2014-09-05",140],["2014-09-06",186],["2014-09-07",200],["2014-09-08",61],["2014-09-09",109],["2014-09-10",111],["2014-09-11",114],["2014-09-12",97],["2014-09-13",94],["2014-09-14",66],["2014-09-15",54],["2014-09-16",87],["2014-09-17",80],["2014-09-18",84],["2014-09-19",117],["2014-09-20",168],["2014-09-21",129],["2014-09-22",127],["2014-09-23",64],["2014-09-24",60],["2014-09-25",144],["2014-09-26",170],["2014-09-27",58],["2014-09-28",87],["2014-09-29",70],["2014-09-30",53],["2014-10-01",92],["2014-10-02",78],["2014-10-03",123],["2014-10-04",95],["2014-10-05",54],["2014-10-06",68],["2014-10-07",200],["2014-10-08",314],["2014-10-09",379],["2014-10-10",346],["2014-10-11",233],["2014-10-14",80],["2014-10-15",73],["2014-10-16",76],["2014-10-17",132],["2014-10-18",211],["2014-10-19",289],["2014-10-20",250],["2014-10-21",82],["2014-10-22",99],["2014-10-23",163],["2014-10-24",267],["2014-10-25",353],["2014-10-26",78],["2014-10-27",72],["2014-10-28",88],["2014-10-29",140],["2014-10-30",206],["2014-10-31",204],["2014-11-01",65],["2014-11-03",59],["2014-11-04",150],["2014-11-05",79],["2014-11-07",63],["2014-11-08",93],["2014-11-09",80],["2014-11-10",95],["2014-11-11",59],["2014-11-13",65],["2014-11-14",77],["2014-11-15",143],["2014-11-16",98],["2014-11-17",64],["2014-11-18",93],["2014-11-19",282],["2014-11-23",155],["2014-11-24",94],["2014-11-25",196],["2014-11-26",293],["2014-11-27",83],["2014-11-28",114],["2014-11-29",276],["2014-12-01",54],["2014-12-02",65],["2014-12-03",51],["2014-12-05",62],["2014-12-06",89],["2014-12-07",65],["2014-12-08",82],["2014-12-09",276],["2014-12-10",153],["2014-12-11",52],["2014-12-13",69],["2014-12-14",113],["2014-12-15",82],["2014-12-17",99],["2014-12-19",53],["2014-12-22",103],["2014-12-23",100],["2014-12-25",73],["2014-12-26",155],["2014-12-27",243],["2014-12-28",155],["2014-12-29",125],["2014-12-30",65],["2015-01-01",65],["2015-01-02",79],["2015-01-03",200],["2015-01-04",226],["2015-01-05",122],["2015-01-06",60],["2015-01-07",85],["2015-01-08",190],["2015-01-09",105],["2015-01-10",208],["2015-01-11",59],["2015-01-12",160],["2015-01-13",211],["2015-01-14",265],["2015-01-15",386],["2015-01-16",118],["2015-01-17",89],["2015-01-18",94],["2015-01-19",77],["2015-01-20",113],["2015-01-22",143],["2015-01-23",257],["2015-01-24",117],["2015-01-25",185],["2015-01-26",119],["2015-01-28",65],["2015-01-29",87],["2015-01-31",60],["2015-02-01",108],["2015-02-02",188],["2015-02-03",143],["2015-02-05",62],["2015-02-06",100],["2015-02-09",152],["2015-02-10",166],["2015-02-11",55],["2015-02-12",59],["2015-02-13",175],["2015-02-14",293],["2015-02-15",326],["2015-02-16",153],["2015-02-18",73],["2015-02-19",267],["2015-02-20",183],["2015-02-21",394],["2015-02-22",158],["2015-02-23",86],["2015-02-24",207]];

const option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: data.map(function (item) {
            return item[0];
        })
    },
    yAxis: {
        splitLine: {
            show: false
        }
    },
    dataZoom: [{
    }],
    series: {
        name: 'Beijing AQI',
        type: 'bar',
        data: data.map(function (item) {
            return item[1];
        })
    }
};
</ExampleBaseOption>

## type(string) = 'slider'

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示 ${dataZoomName} 组件。如果设置为 `false`，不会显示，但是数据过滤的功能还存在。

## backgroundColor(Color) = 'rgba(47,69,84,0)'

<ExampleUIControlColor default="rgba(47,69,84,0)" />

组件的背景颜色。

## dataBackground(Object)

数据阴影的样式。

### lineStyle(Object)

阴影的线条样式

{{ use: partial-line-style(
    prefix = "###",
    defaultWidth = 0.5,
    defaultColor = '#d2dbee'
) }}

### areaStyle(Object)

阴影的填充样式

{{ use: partial-area-style(
    prefix = "###",
    defaultOpacity = 0.2,
    defaultColor = '#d2dbee'
) }}

## selectedDataBackground(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

选中部分数据阴影的样式。

### lineStyle(Object)

选中部分阴影的线条样式

{{ use: partial-line-style(
    prefix = "###",
    defaultWidth = 0.5,
    defaultColor = '#8fb0f7'
) }}

### areaStyle(Object)

选中部分阴影的填充样式

{{ use: partial-area-style(
    prefix = "###",
    defaultOpacity = 0.2,
    defaultColor = '#8fb0f7'
) }}

## fillerColor(Color) = 'rgba(167,183,204,0.4)'

<ExampleUIControlColor default="rgba(167,183,204,0.4)" />

选中范围的填充颜色。

## borderColor(Color) = '#d2dbee'

<ExampleUIControlColor default="#d2dbee" />

边框颜色。

{{ use: partial-border-radius(
    prefix = "#",
    defaultBorderRadius = 3
) }}

## handleIcon(string)

<ExampleUIControlIcon />

两侧缩放手柄的 icon 形状，支持路径字符串，默认为：
```ts
'M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z'
```

{{ use: partial-icon-image-path() }}

## handleSize(number|string) = '100%'

<ExampleUIControlPercent min="0" step="1" default="100%" />

控制手柄的尺寸，可以是像素大小，也可以是相对于 dataZoom 组件宽度的百分比，默认跟 dataZoom 宽度相同。

## handleStyle(Object)

两侧缩放手柄的样式配置。

{{ use: partial-item-style(
    prefix = "##",
    defaultColor = "#fff",
    defaultBorderColor = "#ACB8D1"
) }}

## moveHandleIcon(string)

<ExampleUIControlIcon />

{{ use: partial-version(
    version = "5.0.0"
) }}

移动手柄中间的 icon，支持路径字符串，默认为：

```ts
'M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z'
```

{{ use: partial-icon-image-path() }}

## moveHandleSize(number) = 7

<ExampleUIControlNumber min="0" step="1" default="7" />

{{ use: partial-version(
    version = "5.0.0"
) }}

移动手柄的尺寸高度。

## moveHandleStyle(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

移动手柄的样式配置。

{{ use: partial-item-style(
    prefix = "##",
    defaultColor = "#D2DBEE",
    defaultOpacity = 0.7
) }}

## labelPrecision(number|string) = 'auto'

<ExampleUIControlNumber min="0" step="1" />

显示label的小数精度。默认根据数据自动决定。

## labelFormatter(string|Function) = null

显示的label的格式化器。

+ 如果为 `string`，表示模板，例如：`aaaa{value}bbbb`，其中`{value}`会被替换为实际的数值。

+ 如果为 `Function`，表示回调函数，例如：

```javascript
/**
 * @param {*} value 如果 axis.type 为 'category'，则 `value` 为 axis.data 的 index。
 *                  否则 `value` 是当前值。
 * @param {strign} valueStr 内部格式化的结果。
 * @return {string} 返回最终的label内容。
 */
labelFormatter: function (value) {
    return 'aaa' + value + 'bbb';
}
```

## showDetail(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示detail，即拖拽时候显示详细数值信息。

## showDataShadow(string) = 'auto'

<ExampleUIControlBoolean />

是否在 `dataZoom-silder` 组件中显示数据阴影。数据阴影可以简单地反应数据走势。

## realtime(boolean) = true

<ExampleUIControlBoolean default="true" />

拖动时，是否实时更新系列的视图。如果设置为 `false`，则只在拖拽结束的时候更新。

## textStyle(Object)

{{ use: partial-simple-text-style(
    prefix = '##',
    name = 'dataZoom ',
    defaultColor = '#333'
) }}

{{ use: partial-data-zoom-common(
    dataZoomName = 'dataZoom-slider'
) }}

{{ use: partial-rect-layout(
    componentName = 'dataZoom-slider'
) }}

## width(string|number)

<ExampleUIControlNumber default="30"/>

dataZoom-slider 组件的宽度。竖直布局默认 30，水平布局默认自适应。

比 `left` 和 `right` 优先级高。

## height(string|number)

<ExampleUIControlNumber default="30"/>

dataZoom-slider 组件的高度。水平布局默认 30，竖直布局默认自适应。

比 `top` 和 `bottom` 优先级高。

## brushSelect(boolean) = true

{{ use: partial-version(
    version = "5.0.0"
) }}

是否开启刷选功能。在下图的 brush 区域你可以按住鼠标左键后框选出选中部分。

![600xauto](~dataZoom-zone.png)

## brushStyle(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

刷选框样式设置。

{{ use: partial-item-style(
    prefix = "##",
    defaultColor = "rgba(135,175,274,0.15)"
) }}

## emphasis(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

高亮样式设置。

### handleStyle(Object)

{{ use: partial-item-style(
    prefix = "###"
) }}

### moveHandleStyle(Object)

{{ use: partial-item-style(
    prefix = "###"
) }}

