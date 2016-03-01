
{{target: component-title}}

# title(Object)

标题组件，包含主标题和副标题。

在 ECharts 2.x 中单个 ECharts 实例最多只能拥有一个标题组件。但是在 ECharts 3 中可以存在任意多个标题组件，这在需要标题进行排版，或者单个实例中的多个图表都需要标题时会比较有用。

**例如下面不同缓动函数效果的示例，每一个缓动效果图都带有一个标题组件：**
~[700x400](${galleryViewPath}line-easing&edit=1&reset=1)


## show(boolean) = false

是否显示标题组件。

## text(string) = ''

主标题文本，支持使用 `\n` 换行。

## link(string) = ''

主标题文本超链接。

## target(string) = 'blank'

指定窗口打开主标题超链接。

**可选：**

+ `'self'` 当前窗口打开

+ `'blank'` 新窗口打开

## textStyle

{{ use: partial-text-style(
    prefix="##",
    name="主标题",
    defaultFontSize=18,
    defaultFontWeight="'border'",
    defaultColor="'#333'"
) }}


## subtext(string) = ''

副标题文本，支持使用 `\n` 换行。


## sublink(string) = ''

副标题文本超链接。


## subtarget(string) = 'blank'

指定窗口打开副标题超链接，可选：

+ `'self'` 当前窗口打开

+ `'blank'` 新窗口打开


## subtextStyle

{{ use: partial-text-style(
    prefix='##',
    name="副标题",
    defaultColor="'#aaa'"
) }}

## padding(number) = 5

{{ use: partial-padding(componentName="标题")}}

## itemGap(number) = 5

主副标题之间的间距。

{{use: partial-rect-layout(componentName="grid ")}}

{{ use: partial-component-common-style(componentName="标题", prefix='#') }}



