
{{target: component-title}}

# title(Object)

Title component, including main title and subtitle.

In ECharts 2.x, a single instance of ECharts could contains one title component at most. However, in ECharts 3, there could be one or more than one title components. It is more useful when multiple diagrams in one instance all need titles.

**Here are some instances of different animation easing functions, among which every instance has a title component: **
~[700x400](${galleryViewPath}line-easing&edit=1&reset=1)


## show(boolean) = true

It specifies whether to show the title component.

## text(string) = ''

The main title text, supporting for `\n` for newlines.

## link(string) = ''

The hyper link of main title text.

## target(string) = 'blank'

Open the hyper link of main title in specified tab.

**options: **

+ `'self'` opening it in current tab

+ `'blank'` opening it in a new tab

## textStyle

{{ use: partial-text-style(
    prefix="##",
    name="main title",
    defaultFontSize=18,
    defaultFontWeight="'bolder'",
    defaultColor="'#333'",
    noBox=true
) }}


## subtext(string) = ''

Subtitle text, supporting for `\n` for newlines.


## sublink(string) = ''

The hyper link of subtitle text.


## subtarget(string) = 'blank'

 Open the hyper link of subtitle in specified tab, options:

+ `'self'` opening it in current tab

+ `'blank'` opening it in a new tab


## subtextStyle

{{ use: partial-text-style(
    prefix='##',
    name="subtitle",
    defaultColor="'#aaa'",
    noBox=true
) }}

## padding(number) = 5

{{ use: partial-padding(componentName="title")}}

## itemGap(number) = 10

The gap between the main title and subtitle.

{{use: partial-rect-layout(componentName="grid ")}}

{{ use: partial-component-common-style(componentName="title", prefix='#', defaultBorderWidth="0")}}



