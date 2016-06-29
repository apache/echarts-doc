
{{target: component-title}}

# title(Object)

title component, including main heading and subtitle. 

In ECharts 2.x, a single example of ECharts could contains one title component at most. However, in ECharts 3, there could be one or more than one title components which needs layout. It is more useful when multiple diagrams in one example all need titles. 

**Here are some examples of different slow-motion functions, among which every slow-motion function has a title component: **
~[700x400](${galleryViewPath}line-easing&edit=1&reset=1)


## show(boolean) = false

Secifies whether to show the title component.

## text(string) = ''

the main heading text, supporting `\n` to line feed. 
## link(string) = ''

the hyper link of main heading text.

## target(string) = 'blank'

open the hyper link of main heading text in specified window.

**options: **

+ `'self'` opening the current window

+ `'blank'` opening a new window

## textStyle

{{ use: partial-text-style(
    prefix="##",
    name="main heading",
    defaultFontSize=18,
    defaultFontWeight="'border'",
    defaultColor="'#333'"
) }}


## subtext(string) = ''

subtitle text, supporting `\n` to line feed.


## sublink(string) = ''

the hyper link of subtitle text.


## subtarget(string) = 'blank'

 open the hyper link of main heading text in specified window, options: 

+ `'self'` opening the current window

+ `'blank'` opening a new window


## subtextStyle

{{ use: partial-text-style(
    prefix='##',
    name="subtitle",
    defaultColor="'#aaa'"
) }}

## padding(number) = 5

{{ use: partial-padding(componentName="title")}}

## itemGap(number) = 10

the gap between the main heading and subtitle. 

{{use: partial-rect-layout(componentName="grid ")}}

{{ use: partial-component-common-style(componentName="title", prefix='#') }}



