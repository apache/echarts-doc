{{target: component-data-zoom-slider}}

# dataZoom.slider(Object)

**滑动条型数据区域缩放组件（dataZoomSlider）**

（参考[数据区域缩放组件（dataZoom）的介绍](~dataZoom)）


<br>
<br>


## type(string) = 'slider'


## show(boolean) = true

是否显示 ${dataZoomName} 组件。如果设置为 `false`，不会显示，但是数据过滤的功能还存在。


## backgroundColor(Color) = 'rgba(47,69,84,0)'

组件的背景颜色。


## dataBackgroundColor(Color) = '#ddd'

数据阴影的背景颜色。


## fillerColor(Color) = 'rgba(47,69,84,0.25)'

选中范围的填充颜色。


## handleColor(Color) = 'rgba(47,69,84,0.65)'

控制手柄的颜色。


## handleSize(number) = 10

控制手柄的尺寸。


## labelPrecision(number) = 'auto'

显示label的小数精度。默认根据数据自动决定。


## labelFormatter(string|Function) = null

显示的label的格式化器。

+ 如果为 `string`，表示模板，例如：`aaaa{value}bbbb`，其中`{value}`会被替换为实际的数值。

+ 如果为 `Function`，表示回调函数，例如：

```javascript
labelFormatter: function (value) {
    return 'aaa' + value + 'bbb'; // 返回最终的label内容。
}
```


## showDetail(boolean) = true

是否显示label，即拖拽时候显示详细数值信息。


## showDataShadow(string) = 'auto'

是否在 `dataZoom-silder` 组件中显示数据阴影。数据阴影可以简单得反应数据走势。


## realtime(boolean) = true

拖动时，是否实时更新系列的视图。如果设置为 `false`，则只在拖拽结束的时候更新。


## textStyle

{{ use:partial-text-style(
    prefix='##',
    name='dataZoom ',
    defaultColor='#333'
) }}





{{ use: partial-data-zoom-common(
    dataZoomName='dataZoom-slider',
    galleryEditorPath=${galleryEditorPath},
    galleryViewPath=${galleryViewPath}
) }}

{{ use: partial-rect-layout(
    componentName='dataZoom-slider'
) }}
