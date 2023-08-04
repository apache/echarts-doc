
{{ target: component-data-zoom-slider }}

# dataZoom.slider(Object)

Slider type dataZoom component provides functions like data thumbnail, zoom, brush to select, drag to move, click to locate.

The followling picture shows areas to interact.

![600xauto](~dataZoom-zone.png)

## type(string) = 'slider'

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the ${dataZoomName} component. If is set to be `false`, it will not show, but its data filtering function still works.

## backgroundColor(Color) = 'rgba(47,69,84,0)'

<ExampleUIControlColor default="rgba(47,69,84,0)" />

The background color of the component.

## dataBackground(Object)

The style of data shadow.

### lineStyle(Object)

Line style of data shadow

{{ use: partial-line-style(
    prefix = "###",
    defaultWidth = 0.5,
    defaultColor = '#d2dbee'
) }}

### areaStyle(Object)

Area style of data shadow

{{ use: partial-area-style(
    prefix = "###",
    defaultOpacity = 0.2,
    defaultColor = '#d2dbee'
) }}

## selectedDataBackground(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Styles of selected data shadow.

### lineStyle(Object)

Line style of selected data shadow.

{{ use: partial-line-style(
    prefix = "###",
    defaultWidth = 0.5,
    defaultColor = '#8fb0f7'
) }}

### areaStyle(Object)

Area style of selected data shadow.

{{ use: partial-area-style(
    prefix = "###",
    defaultOpacity = 0.2,
    defaultColor = '#8fb0f7'
) }}

## fillerColor(Color) = 'rgba(47,69,84,0.25)'

<ExampleUIControlColor default="rgba(167,183,204,0.4)" />

The color to fill selected area.

## borderColor(Color) = '#d2dbee'

<ExampleUIControlColor default="#d2dbee" />

The color of border.

{{ use: partial-border-radius(
    prefix = "#",
    defaultBorderRadius = 3
) }}

## handleIcon(string)

<ExampleUIControlIcon />

Icon shape of handle, which supports path string. Its default value is:
```ts
'M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z'
```

{{ use: partial-icon-image-path() }}

## handleSize(number|string) = '100%'

<ExampleUIControlPercent min="0" step="1" default="100%" />

The size of control handle. It can be in pixels, or in percentage relative to the width of dataZoom component. By default, it's the same as the width of dataZoom component.

## handleStyle(Object)

Style of handle. Please refer to [area-simple example](${galleryEditorPath}area-simple).

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

Icon of move handle.

```ts
'M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z'
```

{{ use: partial-icon-image-path() }}

## moveHandleSize(number) = 7

<ExampleUIControlNumber min="0" step="1" default="7" />

{{ use: partial-version(
    version = "5.0.0"
) }}

Size of move handle.

## moveHandleStyle(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Style of move handle.

{{ use: partial-item-style(
    prefix = "##",
    defaultColor = "#D2DBEE",
    defaultOpacity = 0.7
) }}

## labelPrecision(number|string) = 'auto'

<ExampleUIControlNumber min="0" step="1" />

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

<ExampleUIControlBoolean default="true" />

Whether to show detail, that is, show the detailed data information when dragging.

## showDataShadow(string) = 'auto'

<ExampleUIControlBoolean />

Whether to show data shadow in `dataZoom-silder` component, to indicate the data tendency in brief.

## realtime(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to update view while dragging. If it is set as `false`, the view will be updated only at the end of dragging.

## textStyle(*)

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

Width of dataZoom-slider component. Default to 30 when vertical, adaptive when horizontal.

Has higher priority than `left` and `right`.

## height(string|number)

<ExampleUIControlNumber default="30"/>

Height of dataZoom-slider component. Default to 30 when horizontal, adaptive when vertical.

Has higher priority than `top` and `bottom`.

## brushSelect(boolean) = true

{{ use: partial-version(
    version = "5.0.0"
) }}

Whether to enable brush to select.

## brushStyle(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Style of brushing area.

{{ use: partial-item-style(
    prefix = "##",
    defaultColor = "rgba(135,175,274,0.15)"
) }}

## emphasis(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Style when highlighted.

### handleStyle(Object)

{{ use: partial-item-style(
    prefix = "###"
) }}

### moveHandleStyle(Object)

{{ use: partial-item-style(
    prefix = "###"
) }}

