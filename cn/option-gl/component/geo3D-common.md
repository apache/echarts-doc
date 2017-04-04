
{{ target: component-geo3D-common }}

## map(string)

地图类型。echarts-gl 中使用的地图类型同 [geo](http://echarts.baidu.com/option.html#geo.map) 组件相同

你可以在[地图下载界面](http://ecomfe.github.io/echarts-builder-web/map3.html)下载到需要的地图文件引入并注册到 ECharts 中。

ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 AJAX 异步加载后手动注册。

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

ECharts 使用 [geoJSON](http://geojson.org/) 格式的数据作为地图的轮廓，除了上述数据，你也可以通过其它手段获取地图的 [geoJSON](http://geojson.org/) 数据注册到 ECharts 中。

{{ use: partial-box-size-geo3D(
    componentType=${componentType},
    componentName=${componentName},
    defaultBoxHeight = 3,
    defaultBoxDepth = 'auto'
) }}

{{ use: partial-environment(
    componentType=${componentType},
    componentName=${componentName}
) }}

## groundPlane(Object)

地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。

### show(boolean) = false

是否显示地面。

### color(string) = '#aaa'

地面颜色。

## instancing(boolean) = false

`instancing`会将 GeoJSON 中所有的 [geometry](http://geojson.org/geojson-spec.html#geometry-objects) 合并成一个，在 GeoJSON 拥有特别多（上千）的 [geometry](http://geojson.org/geojson-spec.html#geometry-objects) 时可以有效提升绘制效率。

注意，开启`instancing`后场景不再具备选择，hover等交互的功能。

## label(Object)

标签的相关设置。

{{ use: partial-label(
    prefix="##",
    defaultShow=false
) }}

## itemStyle(Object)

${componentName} 中三维图形的视觉属性，包括颜色，透明度，描边等。

{{ use: partial-item-style-geo3D(
    prefix="##",
    hasCallback=true,
    useColorPalette=true
) }}

## emphasis(Object)

鼠标 hover 高亮时图形和标签的样式

### label(Object)

{{ use: partial-label-geo3D(
    prefix="###",
    defaultShow=false
) }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix="###"
) }}

## {{ if: ${inMap} }} data(Array) {{ else: }} region(Array) {{ /if }}

地图区域的设置，

### name(string)
所对应的地图区域的名称，例如 `'广东'`，`'浙江'`。

{{ if: ${inMap} }}
### value(number)
该区域的数据值。
{{ /if }}

### regionHeight(number)
区域的高度，可以设置不同的高度用来表达数据的大小。当 GeoJSON 为建筑的数据时，也可以通过这个值表示简直的高度。如下图

![700xauto](~city-region-height.jpg)

### itemStyle(Object)

单个区域的样式设置。

{{ use: partial-item-style-geo3D(
    prefix="###"
) }}

### label(Object)

单个区域的标签设置。

{{ use: partial-label-geo3D(
    prefix="###",
    defaultShow=false
) }}

### emphasis(Object)

单个区域标签和样式的高亮设置。

#### itemStyle(Object)

{{ use: partial-item-style-geo3D(
    prefix="####"
) }}

#### label(Object)

{{ use: partial-label-geo3D(
    prefix="####",
    defaultShow=false
) }}


{{ use: partial-label-geo3D(
    prefix="###",
    defaultShow=false
) }}

{{ use: partial-shading(
    componentType=${componentType},
    componentName=${componentName},
    useTexture=true
) }}

{{ use: partial-light(
    componentType=${componentType},
    componentName=${componentName}
) }}

{{ use: partial-post-effect(
    componentType=${componentType},
    componentName=${componentName}
) }}

{{ use: partial-temporal-super-sampling(
    componentType=${componentType},
    componentName=${componentName}
) }}

{{ use: partial-view-control(
    componentType=${componentType},
    componentName=${componentName}
) }}

{{ use: partial-zlevel }}

{{ use: partial-viewport }}




{{ target:partial-box-size-geo3D(master=partial-box-size)}}

{{ block: boxWidthDescriptionExtra }}

下面是${componentName} 中`boxWidth`, `boxHeight`, `boxDepth`的示意图。

![600xauto](~geo-size.png)

{{ /block }}

{{ block: boxDepthDescriptionExtra }}
组件深度默认自动，保证三维组件的显示比例跟输入的 GeoJSON 的比例相同
{{ /block }}



{{ target: partial-label-geo3D }}

{{ use: partial-label(
    prefix=${prefix},
    defaultShow=${defaultShow},
    defaultDistance=2,
    defaultTextFontSize=20,
    defaultTextColor='#000',
    defaultTextBorderWidth=1,
    defaultTextBorderColor="#fff"
) }}

{{ target: partial-item-style-geo3D }}

{{ use: partial-item-style(
    prefix=${prefix|default('##')},
    colorName='areaColor',
    hasCallback = ${hasCallback},
    useColorPalette = ${useColorPalette}
) }}

#${prefix|default('##')} borderWidth(number) = ${defaultBorderWidth|default(0)}

图形描边。加上描边后可以更清晰的区分每个区域。如下图：

![](~geo-border.png)

#${prefix|default('##')} borderColor(string) = ${defaultBorderColor|default('#333')}

图形描边的颜色。
