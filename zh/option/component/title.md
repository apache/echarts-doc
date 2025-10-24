
{{ target: component-title }}

# title(Object)

标题组件，包含主标题和副标题。

在 ECharts 2.x 中单个 ECharts 实例最多只能拥有一个标题组件。但是在 ECharts 3 中可以存在任意多个标题组件，这在需要标题进行排版，或者单个实例中的多个图表都需要标题时会比较有用。

**例如下面不同缓动函数效果的示例，每一个缓动效果图都带有一个标题组件：**
~[700x400](${galleryViewPath}line-easing&edit=1&reset=1)

<ExampleBaseOption name="title-only" title="只有标题的实例" title-en="Title">
const option = {
    title: {
        text: 'Main Title',
        subtext: 'Sub Title',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: 30
        },
        subtextStyle: {
            fontSize: 20
        }
    }
}
</ExampleBaseOption>

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示标题组件。

## text(string) = ''

<ExampleUIControlText />

主标题文本，支持使用 `\n` 换行。

{{ use: partial-security-warning(
    securityRiskExclamation: '如果使用了 [toolbox.feature.saveAsImage](~toolbox.feature.saveAsImage)，并且没有设置 [toolbox.feature.saveAsImage.name](~toolbox.feature.saveAsImage.name)，会用 `title[0].text` 替代。这种用法是历史实现但并不推荐，应该总是显式指定[toolbox.feature.saveAsImage.name](~toolbox.feature.saveAsImage.name)；否则，不得不考虑 `title.text` 是否是个正确的文件名，以及其 **安全性**。'
)}}

## link(string) = ''

主标题文本超链接。

{{ use: partial-security-url-common-warning }}

## target(string) = 'blank'

指定窗口打开主标题超链接。

**可选：**

+ `'self'` 当前窗口打开

+ `'blank'` 新窗口打开

## textStyle(Object)

{{ use: partial-text-style(
    prefix = "##",
    name = "主标题",
    defaultFontSize = 18,
    defaultFontWeight = "'bolder'",
    defaultColor = "'#333'",
    noAlign = true,
    noVerticalAlign = true,
    noBox = true
) }}

## subtext(string) = ''

<ExampleUIControlText />

副标题文本，支持使用 `\n` 换行。

## sublink(string) = ''

副标题文本超链接。

{{ use: partial-security-url-common-warning }}

## subtarget(string) = 'blank'

指定窗口打开副标题超链接，可选：

+ `'self'` 当前窗口打开

+ `'blank'` 新窗口打开

## subtextStyle(Object)

{{ use: partial-text-style(
    prefix = '##',
    name = "副标题",
    defaultColor = "'#aaa'",
    noBox = true
) }}

## textAlign(string) = 'auto'

<ExampleUIControlEnum options="auto,left,center,right" default="auto" />

整体（包括 text 和 subtext）的水平对齐。

可选值：`'auto'`、`'left'`、`'right'`、`'center'`。

## textVerticalAlign(string) = 'auto'

<ExampleUIControlEnum options="auto,top,middle,bottom" default="auto" />

整体（包括 text 和 subtext）的垂直对齐。

可选值：`'auto'`、`'top'`、`'bottom'`、`'middle'`。

## triggerEvent(boolean) = false

是否触发事件。

## padding(number|Array) = 5

{{ use: partial-padding(
    componentName = "标题"
) }}

## itemGap(number) = 10

<ExampleUIControlNumber min="0" default="10" step="1" />

主副标题之间的间距。

{{ use: partial-rect-layout(
    componentName = "标题（title）"
) }}

{{ use: partial-coord-sys(
    version = '6.0.0',
    nonSeriesComponentMainType = "title",
    coordSysDefault = "'none'",
    matrix = true,
    calendar = true,
    none = true
) }}

{{ use: partial-component-common-style(
    componentName = "标题",
    prefix = '#',
    defaultBorderWidth = "0",
    hasBorderRadius = true
) }}

