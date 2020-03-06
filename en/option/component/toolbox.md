{{ target: feature-icon-style }}

#${prefix} iconStyle(Object)
The style setting of ${name} icon. Since icon label is displayed only when hovering on the icon, the label configuration options are available under `emphasis`.
{{ use: partial-item-style(
    defaultBorderColor = '#666',
    defualtColor = 'none',
    defaultBorderWidth = 1,
    prefix="#" + ${prefix}
) }}

#${prefix} emphasis(Object)
##${prefix} iconStyle(Object)
{{ use: partial-item-style(prefix="##" + ${prefix}) }}
###${prefix} textPosition(string) = 'bottom'
Text position: `'left'` / `'right'` / `'top'` / `'bottom'`.
###${prefix} textFill(string) = '#000'
Fill color of text. If it's not set, it will use in the order of icon's fill color, stroke color, and `'#000'`.
###${prefix} textAlign(string) = 'center'
Text align: `'left'` / `'center'` / `'right'`.
###${prefix} textBackgroundColor(string)
Text background color.
###${prefix} textBorderRadius(number)
Border radius of text area.
###${prefix} textPadding(number)
Padding of text area.


{{ target: feature-common}}

#### show(boolean) = true
Whether to show the tool.

#### title(string) = '${title}'

#### icon
{{ use: partial-icon-image-path }}

{{ use: feature-icon-style(name=${title}, prefix="###") }}



{{ target: component-toolbox }}

# toolbox(Object)

A group of utility tools, which includes [export](~toolbox.feature.saveAsImage), [data view](~toolbox.feature.dataView), [dynamic type switching](~toolbox.feature.magicType), [data area zooming](~toolbox.feature.dataZoom), and [reset](~toolbox.feature.reset).

**Example: **

~[600x400](${galleryViewPath}line-marker&reset=1&edit=1)


{{use: partial-component-id(prefix="#")}}

## show(boolean) = true

Whether to show toolbox component.

## orient(string) = 'horizontal'

The layout orientation of toolbox's icon.

Options:
+ 'horizontal'
+ 'vertical'

## itemSize(number) = 15

The size of toolbox's icon.

## itemGap(number) = 10

The gap between each icon of toolbox. It is horizontal gap in horizontal layout, while vertical gap in vertical layout.

## showTitle(boolean) = true

Whether to show the title of each tool icon when mouse hovers.

## feature(Object)
The configuration item for each tool.

Besides the tools we provide, user-defined toolbox is also supported.

Notes: User-defined tool name could only start with `my`, like `myTool1` and `myTool2` in the below example:

```javascript
{
    toolbox: {
        feature: {
            myTool1: {
                show: true,
                title: 'custom extension method 1',
                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                onclick: function (){
                    alert('myToolHandler1')
                }
            },
            myTool2: {
                show: true,
                title: 'custom extension method',
                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                onclick: function (){
                    alert('myToolHandler2')
                }
            }
        }
    }
}
```

### saveAsImage(Object)
Save as image.
#### type(string) = 'png'
Format to save the image in, which supports`'png'` and `'jpeg'`.
#### name(string)
Name to save the image, whose default value is [title.text](~title.text).
#### backgroundColor(Color) = 'auto'
Background color to save the image, whose default value is [backgroundColor](~backgroundColor). If `backgroundColor` is not set, white color is used.
#### connectedBackgroundColor(Color) = '#fff'
When [echarts.connect](api.html#echarts.connect) is used to connect the interaction of multiple chart series, they will all be included in the exported image. This option sets the background color between these charts.
#### excludeComponents(Array) = ['toolbox']
Components to be excluded when export. By default, toolbox is excluded.
{{ use: feature-common(title="save as image") }}
#### pixelRatio(number) = 1
Resolution ratio to save image, whose default value is that of the container. Values larger than 1 (e.g.: 2) is supported when you need higher resolution.

### restore(Object)
Restore configuration item.
{{ use: feature-common(title="restore") }}

### dataView(Object)
Data view tool, which could display data in current chart and updates chart after being edited.
{{ use: feature-common(title="data view") }}
#### readOnly(boolean) = false
Whether it is read-only.

#### optionToContent(Function)
```js
(option:Object) => HTMLDomElement|string
```

Define a function to present dataView. It is used to replace default textarea for richer data editing. It can return a DOM object, or an HTML string.

For example:
```js
optionToContent: function(opt) {
    var axisData = opt.xAxis[0].data;
    var series = opt.series;
    var table = '<table style="width:100%;text-align:center"><tbody><tr>'
                 + '<td>Time:</td>'
                 + '<td>' + series[0].name + '</td>'
                 + '<td>' + series[1].name + '</td>'
                 + '</tr>';
    for (var i = 0, l = axisData.length; i < l; i++) {
        table += '<tr>'
                 + '<td>' + axisData[i] + '</td>'
                 + '<td>' + series[0].data[i] + '</td>'
                 + '<td>' + series[1].data[i] + '</td>'
                 + '</tr>';
    }
    table += '</tbody></table>';
    return table;
}
```

#### contentToOption(Function)
```js
(container:HTMLDomElement, option:Object) => Object
```

When optionToContent is used, if you want to support refreshing chart after data changes, you need to implement the logic to merge options in this function.

#### lang(Array) = ['data view', 'turn off', 'refresh']
There are 3 names in data view, which are `['data view', 'turn off' and 'refresh']`.
#### backgroundColor(string) = '#fff'
Background color of the floating layer in data view.
#### textareaColor(string) = '#fff'
Background color of input area of the floating layer in data view.
#### textareaBorderColor(string) = '#333'
Border color of input area of the floating layer in data view.

#### textColor(string) = '#000'
Text color.
#### buttonColor(string) = '#c23531'
Button color.
#### buttonTextColor(string) = '#fff'
Color of button text.

### dataZoom(Object)
Data area zooming, which only supports rectangular coordinate by now.
{{ use: feature-common(title="data area zooming") }}

#### filterMode(string) = 'filter'
The same meaning as [dataZoom.filterMode](~dataZoom.filterMode).

#### xAxisIndex(number|Array|boolean)
Defines which [xAxis](~xAxis) should be controlled. By default, it controls all x axes. If it is set to be `false`, then no x axis is controlled. If it is set to be then it controls axis with axisIndex of `3`. If it is set to be `[0, 3]`, it controls the x-axes with axisIndex of `0` and `3`.

#### yAxisIndex(number|Array|boolean)
Defines which [yAxis](~yAxis) should be controlled. By default, it controls all y axes. If it is set to be `false`, then no y axis is controlled. If it is set to be then it controls axis with axisIndex of `3`. If it is set to be `[0, 3]`, it controls the x-axes with axisIndex of `0` and `3`.

#### icon(Object)
Zooming and restore icon path.
##### zoom(string)
{{ use: partial-icon-image-path }}
##### back(string)
{{ use: partial-icon-image-path }}
#### title(Object)
Restored and zoomed title text.
##### zoom(string) = 'area zooming'
##### back(string) = 'restore area zooming'


### magicType(Object)
Magic type switching.
**示例: **
```js
feature: {
    magicType: {
        type: ['line', 'bar', 'stack', 'tiled']
    }
}
```
#### show(boolean) = true
Whether to show the magic type switching.
#### type(Array)
Enabled magic types, including `'line'` (for line charts), `'bar'` (for bar charts), `'stack'` (for stacked charts), and `'tiled'` (for tiled charts).
{{ use: feature-common(title="magic type switching") }}
#### icon(Object)
the different types of icon path , which could be configurated individually.
##### line(string)
{{ use: partial-icon-image-path }}
##### bar(string)
{{ use: partial-icon-image-path }}
##### stack(string)
{{ use: partial-icon-image-path }}
##### tiled(string)
{{ use: partial-icon-image-path }}
#### title(Object)
Title for different types, can be configured seperately.
##### line(string) = 'for line charts'
##### bar(string) = 'for bar charts'
##### stack(string) = 'for stacked charts'
##### tiled(string) = 'for tiled charts'
#### option(Object)
Configuration item for each type, which will be used when switching to certain type.
##### line(Object)
##### bar(Object)
##### stack(Object)
##### tiled(Object)
#### seriesIndex(Object)
Series list for each type.
##### line(Array)
##### bar(Array)
##### stack(Array)
##### tiled(Array)


### brush(Object)
Brush-selecting icon.

It can also be configured at [brush.toolbox](~brush.toolbox).

#### type(Array)

Icons used, whose values are:

+ `'rect'`: Enabling selecting with rectangle area.
+ `'polygon'`: Enabling selecting with any shape.
+ `'lineX'`: Enabling horizontal selecting.
+ `'lineY'`: Enabling vertical selecting.
+ `'keep'`: Switching between *single selecting* and *multiple selecting*. The latter one can select multiple areas, while the former one cancels previous selection.
+ `'clear'`: Clearing all selection.


#### icon(Object)
Icon path for each icon.
##### rect(string)
{{ use: partial-icon-image-path }}
##### polygon(string)
{{ use: partial-icon-image-path }}
##### lineX(string)
{{ use: partial-icon-image-path }}
##### lineY(string)
{{ use: partial-icon-image-path }}
##### keep(string)
{{ use: partial-icon-image-path }}
##### clear(string)
{{ use: partial-icon-image-path }}
#### title(Object)
Title.
##### rect(string) = 'Rectangle selection'
##### polygon(string) = 'Polygon selection'
##### lineX(string) = 'Horizontal selection'
##### lineY(string) = 'Vertical selection'
##### keep(string) = 'Keep previous selection'
##### clear(string) = 'Clear selection'

{{ use: feature-icon-style(name="Shared", prefix="#") }}

{{ use: partial-rect-layout-width-height(componentName="toolbox") }}


## tooltip(Object)

Tooltip configuration for toolbox tooltip, which is similar to [tooltip](~tooltip). It is not shown by default. If you wish to set special style for toolbox icon label (especially when using CSS to control text style), you may set as the following example:


```js
option = {
    tooltip: {
        show: true // include tooltip component for the feature
    },
    toolbox: {
        show: true,
        showTitle: false, // hide the default text so they don't overlap each other
        feature: {
            saveAsImage: {
                show: true,
                title: 'Save As Image'
            },
            dataView: {
                show: true,
                title: 'Data View'
            },
        },
        tooltip: { // same as option.tooltip
            show: true,
            formatter: function (param) {
                return return '<div>' + param.title + '</div>'; // user-defined DOM structure
            },
            backgroundColor: '#222',
            textStyle: {
                fontSize: 12,
            },
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);' // user-defined CSS styles
        }
    },
    ...
}
```

