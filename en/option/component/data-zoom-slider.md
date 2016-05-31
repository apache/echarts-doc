{{target: component-data-zoom-slider}}

# dataZoom.slider(Object)

**dataZoomSlider**

A special slider bar is provided, on which coordinate systems can be zoomed or roamed by mouse dragging or finger touch (in touch screen). See [dataZoom](~dataZoom).


<br>
<br>


## type(string) = 'slider'


## show(boolean) = true

Specify whether to show the ${dataZoomName} component. If set as `false`, it will not show, but it still do its job.


## backgroundColor(Color) = 'rgba(47,69,84,0)'

The background color of the component.


## dataBackgroundColor(Color) = '#ddd'

The background color of the data shadow in the component.


## fillerColor(Color) = 'rgba(47,69,84,0.25)'

The color of selected area (or called window).


## handleColor(Color) = 'rgba(47,69,84,0.65)'

The color of control handle.


## handleSize(number) = 10

The size of control handle.


## labelPrecision(number) = 'auto'

Specify the decimal places of the value shown in label. automatically determined by default. Possible value: 0, 1, 2, ...


## labelFormatter(string|Function) = null

The formatter tool for the label.

+ If it is set as `string`, it is a template, for instance: `aaaa{value}bbbb`, where `{value}` will be substituted by the value of the edge of the window.

+ If it is set as `Function`, it is a callback function, for example:

```javascript
labelFormatter: function (value) {
    // Finally return the content text of the label.
    return 'aaa' + value + 'bbb';
}
```


## showDetail(boolean) = true

Specify whether to show labels, that is, show the extent of the window when dragging.


## showDataShadow(string) = 'auto'

Specify whether to show data shadow, which could indicate the data tendency generally.

Works only in `dataZoom-silder`. See [dataBackgroundColor](~dataZoom-slider.dataBackgroundColor).


## realtime(boolean) = true

Specify whether to real-time update the view while dragging. If it was set as `false`, the view will be updated only at the end of dragging.


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
