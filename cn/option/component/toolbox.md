{{ target: feature-icon-style }}

#### iconStyle(Object)
${name} icon 样式设置。
##### normal(Object)
{{ use: partial-item-style(
    defaultBorderColor = '#666',
    defualtColor = 'none',
    defaultBorderWidth = 1,
    prefix="#####"
) }}
##### emphasis(Object)
{{ use: partial-item-style(prefix="#####") }}


{{ target: feature-icon }}

#### icon
Icon 的 path 字符串，ECharts 3 中支持使用自定义的 svg path 作为 icon，格式参见 [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)。可以从 Adobe Illustrator 等工具编辑导出。

{{ target: feature-common}}

#### show(boolean) = true
是否显示该工具。

#### title(boolean) = '${title}'

{{ use: feature-icon }}
{{ use: feature-icon-style(name=${title}) }}



{{ target: component-toolbox }}

# toolbox(Object)

工具栏。内置有[导出图片](~toolbox.feature.saveAsImage)，[数据视图](~toolbox.feature.dataView)，[动态类型切换](~toolbox.feature.magicType)，[数据区域缩放](~toolbox.feature.dataZoom)，[重置](~toolbox.feature.reset)五个工具。

**如下示例：**

~[600x400](${galleryViewPath}line-marker&reset=1&edit=1)

## show(boolean) = true

是否显示工具栏组件。

## orient(string) = 'horizontal'

工具栏 icon 的布局朝向。

可选：
+ 'horizontal'
+ 'vertical'

## itemSize(number) = 15

工具栏 icon 的大小。

## itemGap(number) = 10

工具栏 icon 每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。

## showTitle(boolean) = true

是否在鼠标 hover 的时候显示每个工具 icon 的标题。

## feature(Object)
各工具配置项

### saveAsImage(Object)
保存为图片。
#### type(string) = 'png'
保存的图片格式。支持 `'png'` 和 `'jpeg'`。
#### backgroundColor(Color) = 'auto'
保存的图片背景色，默认使用 [option.backgroundColor](~backgroundColor)，如果`backgroundColor`不存在的话会取白色。
#### excludeComponents(Array) = ['toolbox']
保存为图片时忽略的组件列表，默认忽略工具栏。
{{ use: feature-common(title="保存为图片") }}

### restore(Object)
配置项还原。
{{ use: feature-common(title="还原") }}

### dataView(Object)
数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
{{ use: feature-common(title="数据视图") }}
#### readOnly(boolean) = false
是否不可编辑（只读）。
#### lang(Array) = ['数据视图', '关闭', '刷新']
数据视图上有三个话术，默认是['数据视图', '关闭', '刷新']。
#### backgroundColor = '#fff'
数据视图浮层背景色。
#### textareaColor = '#fff'
数据视图浮层文本输入区背景色。
#### textareaBorderColor = '#333'
数据视图浮层文本输入区边框颜色。
#### textColor = '#000'
文本颜色。
#### buttonColor = '#c23531'
按钮颜色。
#### buttonTextColor = '#fff'
按钮文本颜色。

### dataZoom(Object)
数据区域缩放
{{ use: feature-common(title="数据区域缩放") }}
#### icon(Object)
缩放和还原的 icon path。
##### zoom(string)
##### back(string)
#### title(Object)
缩放和还原的标题文本。
##### zoom(string) = '区域缩放'
##### back(string) = '区域缩放还原'


### magicType(Object)
动态类型切换
**示例：**
```js
feature: {
    magicType: {
        type: ['line', 'bar', 'stack', 'tiled']
    }
}
```
#### show(boolean) = true
是否显示该动态类型切换。
#### type(Array)
启用的动态类型，包括`'line'`（切换为折线图）, `'bar'`（切换为柱状图）, `'stack'`（切换为堆叠模式）, `'tiled'`（切换为平铺模式）。
{{ use: feature-common(title="动态类型切换") }}
#### icon(Object)
各个类型的 icon path，可以分别配置。
##### line(string)
##### bar(string)
##### stack(string)
##### tiled(string)
#### title(Object)
各个类型的标题文本，可以分别配置。
##### line(string) = '切换为折线图'
##### bar(string) = '切换为柱状图'
##### stack(string) = '切换为堆叠'
##### tiled(string) = '切换为平铺'
#### option(Object)
各个类型的专有配置项。在切换到某类型的时候会合并相应的配置项。
##### line(Object)
##### bar(Object)
##### stack(Object)
##### tiled(Object)
#### seriesIndex(Object)
各个类型对应的系列的列表。
##### line(Array)
##### bar(Array)
##### stack(Array)
##### tiled(Array)


## iconStyle(Object)

公用的 icon 样式设置。

### normal(Object)

{{ use: partial-item-style(
    defaultBorderColor = '#666',
    defualtColor = 'none',
    defaultBorderWidth = 1,
    prefix="###"
) }}

### emphasis(Object)
{{ use: partial-item-style(prefix="###") }}

{{ use: partial-rect-layout(componentName="工具栏") }}