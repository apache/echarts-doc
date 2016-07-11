{{ target: geo-common }}

#${prefix} map(string) = ''

地图类型。

ECharts 3 中因为地图精度的提高，不再内置地图数据增大代码体积，你可以在[地图下载界面](http://ecomfe.github.io/echarts-builder-web/map3.html)下载到需要的地图文件引入并注册到 ECharts 中。

ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 jquery 等工具异步加载后手动注册。

下面是两种类型的使用示例：

** JavaScript 引入示例 **

```html
<script src="echarts.js"></script>
<script src="map/js/china.js"></script>
<script>
var chart = echarts.init(document.getElementById('main'));
chart.setOption({
    series: [{
        type: 'map',
        map: 'china'
    }]
});
</script>
```

** JSON 引入示例 **

```js
$.get('map/json/china.json', function (chinaJson) {
    echarts.registerMap('china', chinaJson);
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'china'
        }]
    });
});
```

ECharts 使用 [geoJSON](http://geojson.org/) 格式的数据作为地图的轮廓，除了上述数据，你也可以通过其它手段获取地图的 [geoJSON](http://geojson.org/) 数据注册到 ECharts 中。参见示例 [USA Population Estimates](${galleryEditorPath}map-usa)

#${prefix} roam(boolean) = false
{{ use: partial-roam }}

#${prefix} center(Array)
当前视角的中心点，用经纬度表示

例如：
```js
center: [115.97, 29.71]
```

#${prefix} zoom(number) = 1
当前视角的缩放比例。

#${prefix} scaleLimit(Object)
{{ use: partial-scale-limit(prefix="#" + ${prefix}) }}

#${prefix} nameMap(Object)

自定义地区的名称映射，如：
```js
{
    'China' : '中国'
}
```

## selectedMode(boolean|string) = false
选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选 `'single'`，`'multiple'`。

#${prefix} label(Object)

{{ use: partial-label-desc }}

##${prefix} normal(Object)

###${prefix} show(boolean) = false

是否在普通状态下显示标签。

###${prefix} textStyle(Object)

普通状态下的标签文本样式。

{{ use: partial-text-style(prefix=${prefix} + '###') }}

##${prefix} emphasis(Object)

###${prefix} show(boolean) = false

是否在高亮状态下显示标签。

###${prefix} textStyle(Object)

高亮状态下的标签文本样式。

{{ use: partial-text-style(prefix=${prefix} + '###') }}


#${prefix} itemStyle(Object)

{{ use: partial-item-style-desc(name= '地图区域的多边形') }}


##${prefix} normal(Object)

普通状态下的多边形样式。

{{ if: ${inMap} }}
###${prefix} areaColor(Color) = '#eee'
地图区域的颜色。
{{ /if }}

{{ use: partial-item-style(prefix=${prefix} + '##') }}

##${prefix} emphasis(Object)

高亮状态下的多边形样式。

{{ if: ${inMap} }}
###${prefix} areaColor(Color) = '#eee'
地图区域的颜色。
{{ /if }}

{{ use: partial-item-style(prefix=${prefix} + '##') }}

{{ use: partial-rect-layout(prefix=${prefix}) }}


#${prefix} layoutCenter(Array) = null

`layoutCenter` 和 `layoutSize` 提供了除了 `left/right/top/bottom/width/height` 之外的布局手段。

在使用 `left/right/top/bottom/width/height` 的时候，可能很难在保持地图高宽比的情况下把地图放在某个盒形区域的正中间，并且保证不超出盒形的范围。此时可以通过 `layoutCenter` 属性定义地图中心在屏幕中的位置，`layoutSize` 定义地图的大小。如下示例

```js
layoutCenter: ['30%', '30%'],
// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
layoutSize: 100
```

设置这两个值后 `left/right/top/bottom/width/height` 无效。

#${prefix} layoutSize(number|string)

地图的大小，见 `layoutCenter`。支持相对于屏幕宽高的百分比或者绝对的像素大小。

