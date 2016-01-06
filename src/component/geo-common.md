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
var chart = echarts.init(document.getElmentById('main'));
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
    var chart = echarts.init(document.getElmentById('main'));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'china'
        }]
    });
});
```

#${prefix} roam(boolean) = false
{{ use: partial-roam }}


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

{{ use: partial-item-style(prefix=${prefix} + '##') }}

##${prefix} emphasis(Object)

高亮状态下的多边形样式。

{{ use: partial-item-style(prefix=${prefix} + '##') }}

{{ use: partial-rect-layout(prefix="#" + ${prefix}) }}