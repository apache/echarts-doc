{{target: component-data-zoom-slider}}

# dataZoom.slider(Object)

**Slide rdata Zoom component (dataZoomSlider) **

 (reference to [the introduction to data region zoom component (dataZoom)](~dataZoom)) 


<br>
<br>


## type(string) = 'slider'


## show(boolean) = true

Specify whether to show the ${dataZoomName} module. with the setting of `false`, it would not be displayed, but the data filtering function still remains.


## backgroundColor(Color) = 'rgba(47,69,84,0)'

The background color of modules.


## dataBackgroundColor(Color) = '#ddd'

The background color of the data shadow.


## fillerColor(Color) = 'rgba(47,69,84,0.25)'

The fill color of selected area.


## handleColor(Color) = 'rgba(47,69,84,0.65)'

The color of controlling handle.


## handleSize(number) = 10

The size of controlling handle.


## labelPrecision(string) = 'auto'

the pecision of the label's decimals. It defaults to be automatically decided by data.


## labelFormatter(string|Function) = null

the Formatter of label. 

+  `string`, indicating the template, for instance: in `aaaa{value}bbbb`, `{value}` would be substituted by the practical numerical values.

+  `Function`, indicating callback function, for example: 

```javascript
labelFormatter: function (value) {
    return 'aaa' + value + 'bbb'; // reverse to the final label content
}
```


## showDetail(boolean) = true

Specify whether to show label, namely show detailed  information of numerical values during dragging.


## showDataShadow(string) = 'auto'

Specify whether to show data shadow in  `dataZoom-silder` module. Data shadow could generally reflect the data tendency. 


## realtime(boolean) = true

Specify whether to real-time update the views of series during dragging. If it was set up as `false`, the updates only occur at the end of dragging. 


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
