
{{ target: component-title }}

# title(Object)

Title component, including main title and subtitle.

In ECharts 2.x, a single instance of ECharts could contains one title component at most. However, in ECharts 3, there could be one or more than one title components. It is more useful when multiple diagrams in one instance all need titles.

**Here are some instances of different animation easing functions, among which every instance has a title component: **
~[700x400](${galleryViewPath}line-easing&edit=1&reset=1)

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

<ExampleUIControlBoolean default="true" />

Set this to `false` to prevent the title from showing

## text(string) = ''

<ExampleUIControlText />

The main title text, supporting for `\n` for newlines.

## link(string) = ''

The hyper link of main title text.

## target(string) = 'blank'

Open the hyper link of main title in specified tab.

**options: **

+ `'self'` opening it in current tab

+ `'blank'` opening it in a new tab

## textStyle(Object)

{{ use: partial-text-style(
    prefix = "##",
    name = "main title",
    defaultFontSize = 18,
    defaultFontWeight = "'bolder'",
    defaultColor = "'#333'",
    noAlign = true,
    noVerticalAlign = true,
    noBox = true
) }}

## subtext(string) = ''

<ExampleUIControlText />

Subtitle text, supporting for `\n` for newlines.

## sublink(string) = ''

The hyper link of subtitle text.

## subtarget(string) = 'blank'

Open the hyper link of subtitle in specified tab, options:

+ `'self'` opening it in current tab

+ `'blank'` opening it in a new tab

## subtextStyle(Object)

{{ use: partial-text-style(
    prefix = '##',
    name = "subtitle",
    defaultColor = "'#aaa'",
    noBox = true
) }}

## textAlign(string) = 'auto'

<ExampleUIControlEnum options="auto,left,center,right" default="auto" />

The horizontal align of the component (including "text" and "subtext").

Optional values: `'auto'`, `'left'`, `'right'`, `'center'`.

## textVerticalAlign(string) = 'auto'

<ExampleUIControlEnum options="auto,top,middle,bottom" default="auto" />

The vertical align of the component (including "text" and "subtext").

Optional values: `'auto'`, `'top'`, `'bottom'`, `'middle'`.

## triggerEvent(boolean) = false

Set this to `true` to enable triggering events

## padding(number|Array) = 5

{{ use: partial-padding(
    componentName = "title"
) }}

## itemGap(number) = 10

<ExampleUIControlNumber min="0" default="10" step="1" />

The gap between the main title and subtitle.

{{ use: partial-rect-layout(
    componentName = "title "
) }}

{{ use: partial-component-common-style(
    componentName = "title",
    prefix = '#',
    defaultBorderWidth = "0",
    hasBorderRadius = true
) }}

