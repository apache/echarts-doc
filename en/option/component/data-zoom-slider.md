{{target: component-data-zoom-slider}}

# dataZoom.slider(Object)

**dataZoomSlider**

(Please refer to the [introduction of dataZoom](~dataZoom).)


<br>
<br>


## type(string) = 'slider'


## show(boolean) = true

Whether to show the ${dataZoomName} component. If is set to be `false`, it will not show, but its data filtering function still works.


## backgroundColor(Color) = 'rgba(47,69,84,0)'

The background color of the component.

## dataBackground(Object)

The style of data shadow.

### lineStyle(Object)

Line style of shadow

{{use:partial-line-style(
    prefix="###",
    defaultWidth=0.5,
    defaultOpacity=0.3,
    defaultColor='#2f4554'
)}}

### areaStyle(Object)

Area style of shadow

{{use:partial-area-style(
    prefix="###",
    defaultOpacity=0.3,
    defaultColor='rgba(47,69,84,0.3)'
)}}

## fillerColor(Color) = 'rgba(47,69,84,0.25)'

The color to fill selected area.

## borderColor(Color) = '#ddd'

The color of border.

## handleIcon(string)

Icon shape of handle, which supports path string. Its default value is:
```js
'M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z'
```

{{ use: partial-icon-path }}

You can also set it as `'image://url'` to use a image.

Refer to [area-simple example](${galleryEditorPath}area-simple) for customized icon.


## handleSize(number) = '100%'

The size of control handle. It can be in pixels, or in percentage relative to the width of dataZoom component. By default, it's the same as the width of dataZoom component.

## handleStyle(Object)

Style of handle. Please refer to [area-simple example](${galleryEditorPath}area-simple).

{{use: partial-item-style(
    prefix="##",
    defaultColor="#a7b7cc"
)}}

## labelPrecision(number) = 'auto'

Precision of label if in number form. By default, it is decided based on the number of data.


## labelFormatter(string|Function) = null

The formatter tool for the label.

+ It is a template if in `string`. For instance, `aaaa{value}bbbb`, where `{value}` will be replaced by the value of actual data value.

+ It is a callback function if in `Function`. For example:

```javascript
/**
 * @param {*} value If axis.type is 'category', `value` is the index of axis.data.
 *                  else `value` is current value.
 * @param {strign} valueStr Inner formatted string.
 * @return {string} Returns the label formatted.
 */
labelFormatter: function (value, valueStr) {
    return 'aaa' + value + 'bbb';
}
```


## showDetail(boolean) = true

Whether to show detail, that is, show the detailed data information when dragging.


## showDataShadow(string) = 'auto'

Whether to show data shadow in `dataZoom-silder` component, to indicate the data tendency in brief.

## realtime(boolean) = true

Whether to update view while dragging. If it is set as `false`, the view will be updated only at the end of dragging.


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
