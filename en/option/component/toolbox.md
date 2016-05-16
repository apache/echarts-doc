{{ target: feature-icon-style }}

#### iconStyle(Object)
The style setting of ${name} icon.
##### normal(Object)
{{ use: partial-item-style(
    defaultBorderColor = '#666',
    defualtColor = 'none',
    defaultBorderWidth = 1,
    prefix="#####"
) }}
##### emphasis(Object)
{{ use: partial-item-style(prefix="#####") }}


{{ target: feature-icon-desc }}

The character string of Icon's path. In ECharts 3, the user-difined svg path is supported to be use as icon, the format of which could be refered to [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData). It could be edited and exported from some tools such as Adobe Illustrator.

{{ target: feature-common}}

#### show(boolean) = true
Whether to show the tool.

#### title(boolean) = '${title}'

#### icon
{{ use: feature-icon-desc }}

{{ use: feature-icon-style(name=${title}) }}



{{ target: component-toolbox }}

# toolbox(Object)

toolbox. It is internally installed with 5 tools including [export pictures](~toolbox.feature.saveAsImage), [data view](~toolbox.feature.dataView), [dynamic type switching](~toolbox.feature.magicType), [data area zooming](~toolbox.feature.dataZoom) and [reset](~toolbox.feature.reset).

**Example: **

~[600x400](${galleryViewPath}line-marker&reset=1&edit=1)

## show(boolean) = true

Whether to show tool box component.

## orient(string) = 'horizontal'

The layout orientation of tool box's icon.

Options: 
+ 'horizontal'
+ 'vertical'

## itemSize(number) = 15

The size of tool box's icon.

## itemGap(number) = 10

The gap between each icon of tool box. There is horizontal gap in horizontal layout, while vertical gap in vertical layout.

## showTitle(boolean) = true

Whether to show the title of each tool icon when mouse hovers.

## feature(Object)
The configuration item of each tool.

Besides all the internally installed tool buttons, tool button still can be user-defined. 

Notes: the user-defined tool name could only starts with  `my`. See the `myTool1` and `myTool2` in the below example: 

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
save as image.
#### type(string) = 'png'
the format of saved image, which supports`'png'` and `'jpeg'`.
#### name(string)
the name of saved document, which defaults to use [title.text](~title.text).
#### backgroundColor(Color) = 'auto'
the background color of saved image, which defaults to use [backgroundColor](~backgroundColor). If `backgroundColor` doesn't exist, it defaults to adopt white color.
#### excludeComponents(Array) = ['toolbox']
The component list ignored during saving as image, which defaults to ignore tool box.

{{ use: feature-common(title="save as image") }}
#### pixelRatio(number) = 1
The resolution ratio of saving as image, which defaults to be the same with the container. If the image is necessary to be saved with higher  resolution ratio,  a value greater than 1 could be set up, such as 2.

### restore(Object)
Restore configuration item.
{{ use: feature-common(title="restore") }}

### dataView(Object)
data view tool, which could display adopted data in current diagram and updates after being edited.
{{ use: feature-common(title="data view") }}
#### readOnly(boolean) = false
Whether it couldn't be edited (read-only). 
#### lang(Array) = ['data view', 'turn off', 'refresh']
There are 3 langs in data view, which defaults to be `['data view', 'turn off' and 'refresh']`.
#### backgroundColor(string) = '#fff'
The background color of the floating layer in data view.
#### textareaColor(string) = '#fff'
The background color of input area of the floating layer in data view.
#### textareaBorderColor(string) = '#333'
The border color of input area of the floating layer in data view.

#### textColor(string) = '#000'
text color.
#### buttonColor(string) = '#c23531'
button color.
#### buttonTextColor(string) = '#fff'
the color of button text.

### dataZoom(Object)
data area zooming, which only supports rectangular coordinate axis zooming at present.
{{ use: feature-common(title="data area zooming") }}

#### xAxisIndex(number|Array|boolean)
Assign which [xAxis](~xAxis) should be controlled. With default setting, it controls all x axis. If it was set as `false`, it would not control any x axis. If it was set as 3, it would control the x axes of which the axisIndex is set as `3`. If it was set as `[0, 3]`, it would control the x axes of which the axisIndex is set as `0` and `3`.  

#### yAxisIndex(number|Array|boolean)
Assign which [yAxis](~yAxis) should be controlled. With default setting, it controls all y axis. If it was set as `false`, it would not control any y axis. If it was set as 3, it would control the y axes of which the axisIndex is set as `3`. If it was set as `[0, 3]`, it would control the y axes of which the axisIndex is set as `0` and `3`.  

#### icon(Object)
Restored and zoomed icon path.
##### zoom(string)
{{ use: feature-icon-desc }}
##### back(string)
{{ use: feature-icon-desc }}
#### title(Object)
Restored and zoomed title text.
##### zoom(string) = 'area zooming'
##### back(string) = 'restore area zooming'


### magicType(Object)
magic type switching
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
Enabled magic type, including `'line'` (switch to broken line chart), `'bar'` (switch to bar chart), `'stack'` (switch to stack mode), `'tiled'` (switch to tiled mode).
{{ use: feature-common(title="magic type switching") }}
#### icon(Object)
the different types of icon path , which could be configurated individually.
##### line(string)
{{ use: feature-icon-desc }}
##### bar(string)
{{ use: feature-icon-desc }}
##### stack(string)
{{ use: feature-icon-desc }}
##### tiled(string)
{{ use: feature-icon-desc }}
#### title(Object)
the different types of title text , which could be configurated individually.
##### line(string) = 'switch to broken line chart'
##### bar(string) = 'switch to bar chart'
##### stack(string) = 'switch to stack mode'
##### tiled(string) = 'switch to tiled mode'
#### option(Object)
Different types of exclusicve configuration item. The relevant configuration items would be combined during switching to a specific type.  
##### line(Object)
##### bar(Object)
##### stack(Object)
##### tiled(Object)
#### seriesIndex(Object)
The series lists with which each type corresponds with.
##### line(Array)
##### bar(Array)
##### stack(Array)
##### tiled(Array)


## iconStyle(Object)

The normal style setting of icon.

### normal(Object)

{{ use: partial-item-style(
    defaultBorderColor = '#666',
    defualtColor = 'none',
    defaultBorderWidth = 1,
    prefix="###"
) }}

### emphasis(Object)
{{ use: partial-item-style(prefix="###") }}

{{ use: partial-rect-layout-width-height(componentName="tool box") }}