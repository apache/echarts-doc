
{{ target: partial-zr-graphic-elements }}

#${prefix} ${hostName}${symbolDeclare}group(Object)

`group` is the only type that can contain children, so that a group of elements can be positioned and transformed together.

{{ if: ${usageType} === 'customSeries' }}
Note that if any of its child is `null`, it means the child no longer exists. So if a group contains an element that is set to be `null/undefined` in a future `setOption` call, it should remove the previous element at the same index. If a child should not change, it should be `{}` in the new option. And a group can only contain children as `null/undefined/{}` if they exist in the previous `setOption`.
{{ /if }}

{{ use: partial-graphic-cpt-common-props(
    type = 'group',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} width(number) = 0

Specify width of this `group`.

This width is only used for the positioning of its children.

When width is `0`, children can also be positioned according to its parent using `left: 'center'`.

##${prefix} height(number) = 0

Specify height of this `group`.

This height is only used for the positioning of its children.

When height is `0`, children can also be positioned according to its parent using `top: 'middle'`.

##${prefix} diffChildrenByName(boolean) = false

In [custom series](~series-custom), when `diffChildrenByName` is set as `true`, for each [group](~${optionPath}.${hostName}${symbolVisit}group) returned from [renderItem](~series-custom.renderItem), "diff" will be performed to its [children](~${optionPath}.${hostName}${symbolVisit}group.children) according to the [name](~${optionPath}.${hostName}${symbolVisit}polygon.name) attribute of each graphic elements. Here "diff" means that map the coming graphic elements to the existing graphic elements when repainting according to `name`, which enables the transition animation if data is modified.

But notice that the operation is performance consuming, do not use it for large data amount.

##${prefix} children(Array)

A list of children, each item is a declaration of an element.

{{ use: partial-graphic-cpt-common-props(
    type = 'group',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ if: ${usageType} === 'customSeries' }}
#${prefix} ${hostName}${symbolDeclare}path(Object)

Use [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) to describe a path. Can be used to draw icons or any other shapes fitting the specified size by auto transforming.

See examples:
[icons](${galleryEditorPath}custom-calendar-icon) and [shapes](${galleryEditorPath}custom-gantt-flight).

About width/height, cover/contain, see
[layout](~${optionPath}.${hostName}${symbolVisit}path.shape.layout).

{{ use: partial-graphic-cpt-common-props(
    type = 'path',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    enableMorph = true,
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} shape(Object)

###${prefix} pathData(string)

[SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData).

For example, `'M0,0 L0,-20 L30,-20 C42,-20 38,-1 50,-1 L70,-1 L70,0 Z'`.

If [width](~${optionPath}.${hostName}${symbolVisit}path.shape.width), [height](~${optionPath}.${hostName}${symbolVisit}path.shape.height), [x](~${optionPath}.${hostName}${symbolVisit}path.shape.x) and [y](~${optionPath}.${hostName}${symbolVisit}path.shape.y) specified, `pathData` will be transformed to fit the defined rect. If they are not specified, do not do that.

[layout](~${optionPath}.${hostName}${symbolVisit}path.shape.layout) can be used to specify the transform strategy.

See examples:
[icons](${galleryEditorPath}custom-calendar-icon) and [shapes](${galleryEditorPath}custom-gantt-flight).

###${prefix} d(string)

Alias of [pathData](~${optionPath}.${hostName}${symbolVisit}path.shape.pathData).

###${prefix} layout(string) = 'center'

If [width](~${optionPath}.${hostName}${symbolVisit}path.shape.width), [height](~${optionPath}.${hostName}${symbolVisit}path.shape.height), [x](~${optionPath}.${hostName}${symbolVisit}path.shape.x) and [y](~${optionPath}.${hostName}${symbolVisit}path.shape.y) specified, `pathData` will be transformed to fit the defined rect.

`layout` can be used to specify the transform strategy.

Optional value:
+ `'center'`: Keep aspect ratio, put the path in the center of the rect, expand as far as possible but never overflow.
+ `'cover'`: Transform the path according to the aspect ratio of the rect, fill the rect and do not overflow.

{{ use: partial-graphic-cpt-sub-prop-xy(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-wh(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'shape',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}
{{ /if }}

#${prefix} ${hostName}${symbolDeclare}image(Object)

{{ use: partial-graphic-cpt-common-props(
    type = 'image',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

###${prefix} image(string)

Specify content of the image, can be a URL, or [dataURI](https://tools.ietf.org/html/rfc2397).

{{ use: partial-graphic-cpt-sub-prop-xy(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-wh(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-prop-common(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

#${prefix} ${hostName}${symbolDeclare}text(Object)

Text block.

{{ use: partial-graphic-cpt-common-props(
    type = 'text',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

###${prefix} text(string) = ''

Text content. `\n` can be used as a line break.

{{ use: partial-graphic-cpt-sub-prop-xy(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

###${prefix} font(string)

Font size, font type, font weight, font color, follow the form of [css font](https://developer.mozilla.org/en-US/docs/Web/CSS/font).

For example:
```
// size | family
font: '2em "STHeiti", sans-serif'

// style | weight | size | family
font: 'italic bolder 16px cursive'

// weight | size | family
font: 'bolder 2em "Microsoft YaHei", sans-serif'
```

###${prefix} textAlign(string) = 'left'

Text horizontal alignment. Optional values: `'left'`, `'center'`, `'right'`.

`'left'` means the left side of the text block is specified by the [style.x](~${optionPath}.${hostName}${symbolVisit}text.style.x), while `'right'` means the right side of the text block is specified by [style.y](~${optionPath}.${hostName}${symbolVisit}text.style.y).

###${prefix} width(number)

Text block width. Used for [overflow](~${optionPath}.${hostName}${symbolVisit}text.style.overflow) calculation.

###${prefix} overflow(string)

When the text content exceeds the [width](~${optionPath}.${hostName}${symbolVisit}text.style.width), the text display strategy is: `'break'`, `'breakAll'`, `'truncate'`, `'none'`.

- `'break'` is to try to ensure that the complete word is not truncated (similar to `CSS` `word-break: break-word;`)
- `'breakAll'`: can break at any character
- `'truncate'`: truncate the text to display '...'，you can use [ellipsis](~${optionPath}.${hostName}${symbolVisit}text.style.ellipsis) to customize the display of the ellipsis
- `'none'`: no line break

###${prefix} ellipsis(string)

When [overflow](~${optionPath}.${hostName}${symbolVisit}text.style.overflow) is set to `'truncate'`, the default is `...`.

###${prefix} textVerticalAlign(string)

Text vertical alignment. Optional values: `'top'`, `'middle'`, `'bottom'`.

{{ use: partial-graphic-cpt-style-prop-common(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

#${prefix} ${hostName}${symbolDeclare}rect(Object)

Rectangle element.

{{ use: partial-graphic-cpt-common-props(
    type = 'rect',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    enableMorph = true,
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-xy(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-wh(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

###${prefix} r(Array)

Specify border radius of the rectangular here. Generally, `r` should be `[topLeftRadius, topRightRadius, BottomRightRadius, bottomLeftRadius]`, where each item is a number.

Abbreviation is enabled, for example:
+ `r`: `1`         means `[1, 1, 1, 1]`
+ `r`: `[1]`       means `[1, 1, 1, 1]`
+ `r`: `[1, 2]`    means `[1, 2, 1, 2]`
+ `r`: `[1, 2, 3]` means `[1, 2, 3, 2]`

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'shape',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

#${prefix} ${hostName}${symbolDeclare}circle(Object)

Circle element.

{{ use: partial-graphic-cpt-common-props(
    type = 'circle',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    enableMorph = true,
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-cxy(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-r(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'shape',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

#${prefix} ${hostName}${symbolDeclare}ring(Object)

Ring element.

{{ use: partial-graphic-cpt-common-props(
    type = 'ring',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    enableMorph = true,
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-cxy(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-rr0(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'shape',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

#${prefix} ${hostName}${symbolDeclare}sector(Object)

Sector element.

{{ use: partial-graphic-cpt-common-props(
    type = 'sector',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    enableMorph = true,
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-cxy(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-rr0(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-angle(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'shape',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

#${prefix} ${hostName}${symbolDeclare}arc(Object)

Arc element.

{{ use: partial-graphic-cpt-common-props(
    type = 'arc',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    enableMorph = true,
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-cxy(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-rr0(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-angle(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'shape',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 1,
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

#${prefix} ${hostName}${symbolDeclare}polygon(Object)

Polygon element.

{{ use: partial-graphic-cpt-common-props(
    type = 'polygon',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    enableMorph = true,
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-path-common(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'shape',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

#${prefix} ${hostName}${symbolDeclare}polyline(Object)

Polyline element.

{{ use: partial-graphic-cpt-common-props(
    type = 'polyline',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    enableMorph = true,
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-path-common(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'shape',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 5,
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

#${prefix} ${hostName}${symbolDeclare}line(Object)

Line element.

{{ use: partial-graphic-cpt-common-props(
    type = 'line',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    enableMorph = true,
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-x1y1x2y2(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

###${prefix} percent(number) = 1

Specify the percentage of drawing, useful in animation.

Value range: [0, 1].

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'shape',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 5,
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

#${prefix} ${hostName}${symbolDeclare}bezierCurve(Object)

Quadratic bezier curve or cubic bezier curve.

{{ use: partial-graphic-cpt-common-props(
    type = 'bezierCurve',
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    enableMorph = true,
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-x1y1x2y2(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

###${prefix} cpx1(number) = 0

x of control point.

###${prefix} cpy1(number) = 0

y of control point.

###${prefix} cpx2(number) = null

x of the second control point. If specified, cubic bezier is used.

If both `cpx2` and `cpy2` are not set, quatratic bezier is used.

###${prefix} cpy2(number) = null

y of the second control point. If specified, cubic bezier is used.

If both `cpx2` and `cpy2` are not set, quatratic bezier is used.

###${prefix} percent(number) = 1

Specify the percentage of drawing, useful in animation.

Value range: [0, 1].

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'shape',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-focus-blur(
    prefix = ${prefix}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}



{{ target: partial-graphic-cpt-common-props }}

##${prefix} type(string) = ${type}

Must be specified when define a graphic element at the first time.

Optional values:

{{ use: partial-graphic-cpt-type-list(
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} id(string) = undefined

id is used to specifying element when willing to update it.
id can be ignored if you do not need it.

{{ if: ${usageType} === 'graphicComponent' }}
##${prefix} $action(string) = 'merge'

Specify the operation should be performed to the element when calling `setOption`.
Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

+ `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
+ `'replace'`: create a new element according to the given option and replace the existing element (if any).
+ `'remove'`: delete the existing element (if any).
{{ /if }}

{{ use: partial-graphic-transform(
    prefix = ${prefix},
    type = ${type},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} transition(string|Array) = ['x', 'y']

You can specify that all properties have transition animations turned on with `'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:
```ts
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](~${optionPath}.${hostName}${symbolVisit}${type}.shape), ['`style'`](~${optionPath}.${hostName}${symbolVisit}${type}.style), [`'extra'`](~${optionPath}.${hostName}${symbolVisit}${type}.extra). For example:

```ts
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](${galleryEditorPath}doc-example/custom-transition-simple&edit=1&reset=1) please.

##${prefix} enterFrom(Object)

Initial properties for enter animation.

Example:
```ts
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

##${prefix} leaveTo(Object)

End properties for leave animation.


Example:

```ts
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

##${prefix} enterAnimation(Object)

Configurations of enter animation.

{{ use: partial-graphic-cpt-animation(
    prefix = ${prefix}
) }}

##${prefix} updateAnimation(Object)

Configurations of update animation.

{{ use: partial-graphic-cpt-animation(
    prefix = ${prefix}
) }}

##${prefix} leaveAnimation(Object)

Configurations of leave animation.

{{ use: partial-graphic-cpt-animation(
    prefix = ${prefix}
) }}

##${prefix} keyframeAnimation(Object|Array)

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```ts
keyframeAnimation: [{
    // Using scale for breath animation.
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // Translate animation.
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

{{ use: partial-graphic-cpt-animation(
    prefix = ${prefix}
) }}

###${prefix} loop(boolean)

If loop the keyframe animation.

###${prefix} keyframes(Array)

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```ts
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

{{ if: ${usageType} === 'customSeries' && ${enableMorph} }}
##${prefix} morph(boolean) = false

Whether to enable morphing animation.

If you enabled [universalTransition](~series-custom.universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.
{{ /if }}

{{ if: ${usageType} === 'graphicComponent' }}
##${prefix} left(number|string) = undefined

{{ use: partial-graphic-cpt-location-prop-desc-common(
    hv = 'h',
    prefix = ${prefix},
    type = ${type},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} right(number|string) = undefined

{{ use: partial-graphic-cpt-location-prop-desc-common(
    hv = 'h',
    prefix = ${prefix},
    type = ${type},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} top(number|string) = undefined

{{ use: partial-graphic-cpt-location-prop-desc-common(
    hv = 'v',
    prefix = ${prefix},
    type = ${type},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} bottom(number|string) = undefined

{{ use: partial-graphic-cpt-location-prop-desc-common(
    hv = 'v',
    prefix = ${prefix},
    type = ${type},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

##${prefix} bounding(string) = 'all'

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:
~[500x500](${galleryViewPath}doc-example/graphic-bounding&edit=1&reset=1)

Optional values:

+ `'all'`: (default)
    Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.

+ `'raw'`:
    Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

##${prefix} z(number) = 0

z value of the elements, determine the overlap order.

##${prefix} zlevel(number) = 0

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.
{{ /if }}

{{ if: ${usageType} === 'customSeries' }}
##${prefix} z2(number) = undefined

Define the overlap relationship between graphic elements.

##${prefix} name(string) = undefined

See [diffChildrenByName](~${optionPath}.${hostName}${symbolVisit}${type}.diffChildrenByName).
{{ /if }}

##${prefix} info(*)

User defined data, can be visited in event listeners.

```ts
chart.on('click', function (params) {
    console.log(params.info);
});
```

##${prefix} silent(boolean) = false

Whether response to mouse events / touch events.

{{ if: ${type} !== 'group' }}
##${prefix} invisible(boolean) = false

Whether the element is visible.
{{ /if }}

##${prefix} ignore(boolean) = false

Whether the element is totally ignored (neither render nor listen events).

##${prefix} textContent(Object)

Text block attached to an element and layout based on the element by `textConfig`.

{{ if: ${usageType} === 'customSeries' }}
The props the the same as [text](option.html#series-custom.renderItem.return_text).
{{ else }}
The props the the same as [text](option.html#graphic.elements-text).
{{ /if }}

##${prefix} textConfig(Object)

###${prefix} position() = 'inside'

Position of `textContent`.

+ 'left'
+ 'right'
+ 'top'
+ 'bottom'
+ 'inside'
+ 'insideLeft'
+ 'insideRight'
+ 'insideTop'
+ 'insideBottom'
+ 'insideTopLeft'
+ 'insideTopRight'
+ 'insideBottomLeft'
+ 'insideBottomRight'
+ or like `[12, 33]`
+ or like `['50%', '50%']`

###${prefix} rotation(number)

Rotation of `textContent`. In radian.

###${prefix} layoutRect(Object)

Rect that `textContent` will be positioned.
Default to be the bounding box of host element.

```ts
{
    x: number
    y: number
    width: number
    height: number
}
```

###${prefix} offset(Array)

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

###${prefix} origin

`origin` is relative to the bounding box of the host element.
Can be percent value. Relative to the bounding box.
If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

+ like `[12, 33]`
+ or like `['50%', '50%']`
+ 'center'

###${prefix} distance(number) = 5

Distance to the `layoutRect`。

###${prefix} local(boolean) = false

If `true`, it will apply host's transform.

###${prefix} insideFill(string)

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority:
`textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill"
In most cases, "auto-calculated-fill" is white.

###${prefix} insideStroke(string)

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority:
`textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

+ If
    + (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    + or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    + "auto-calculated-stroke" will be null.
+ Otherwise
    + "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

###${prefix} outsideFill(string)

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority:
`textContent.style.fill` > `textConfig.outsideFill` > #000

###${prefix} outsideStroke(string)

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority:
`textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

+ If
    + (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    + or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    + "auto-calculated-stroke" will be null.
+ Otherwise
    + "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

###${prefix} inside(boolean)

Tell echarts that I can make sure this text is inside or not.

{{ use: partial-custom-series-during(
    prefix = ${prefix}
) }}

{{ if: ${usageType} === 'customSeries' }}
{{ use: partial-custom-series-extra(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}
{{ /if }}

{{ if: ${usageType} === 'graphicComponent' }}
{{ if: ${type} !== 'group' }}
{{ use: partial-cursor(
    prefix = "##"
) }}
{{ /if }}

##${prefix} draggable(boolean|string) = false

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

{{ if: ${type} !== 'group' }}
##${prefix} progressive(boolean) = false

Whether use progressive render to improve performance. Usually used when number of element is too large.
{{ /if }}
{{ /if }}



{{ target: partial-graphic-cpt-style-prop-common }}

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

+ [itemStyle.color](~series-scatter.itemStyle.color) => `style.fill`
+ [itemStyle.borderColor](~series-scatter.itemStyle.borderColor) => `style.stroke`
+ [label.color](~series-scatter.label.color) => `style.textFill`
+ [label.textBorderColor](~series-scatter.label.textBorderColor) => `style.textStroke`
+ ...

###${prefix} fill(string) = ${fill|default("'#000'")}

Color filled in this element.

###${prefix} stroke(string) = ${stroke|default("null")}

Color of stroke.

###${prefix} lineWidth(number) = ${lineWidth|default("0")}

Width of stroke.

###${prefix} shadowBlur(number) = undefined

Width of shadow.

###${prefix} shadowOffsetX(number) = undefined

X offset of shadow.

###${prefix} shadowOffsetY(number) = undefined

Y offset of shadow.

###${prefix} shadowColor(number) = undefined

Color of shadow.

###${prefix} opacity(number) = 1

Opacity of this element.

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'style',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}



{{ target: partial-graphic-cpt-path-common }}

###${prefix} points(Array)

A list of points, which defines the shape, like `[[22, 44], [44, 55], [11, 44], ...]`.

###${prefix} smooth(number|string) = undefined

Whether smooth the line.

+ If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of `[0, 1]`.
+ If the value is `'spline'`, Catmull-Rom spline interpolation is used.

###${prefix} smoothConstraint(boolean) = false

Whether prevent the smooth process cause the line out of the bounding box.

Only works when `smooth` is `number` (bezier smooth).



{{ target: partial-graphic-cpt-location-prop-desc-common }}

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance.
Otherwise, the parent is a `group` element.

Optional values:

+ Pixel value: For example, can be a number `30`, means `30px`.
+ Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the {{ if: ${hv} === 'h' }}height{{ else }}width{{ /if }} of its parent.
+ {{ if: ${hv} === 'h' }}`'center'`{{ else }}`'middle'`{{ /if }}: means position the element in the middle of according to its parent.

{{ if: ${hv} === 'h' }}
Only one between [left](~${optionPath}.${hostName}${symbolVisit}${type}.left) and [right](~${optionPath}.${hostName}${symbolVisit}${type}.right) can work.

If [left](~${optionPath}.${hostName}${symbolVisit}${type}.left) or [right](~${optionPath}.${hostName}${symbolVisit}${type}.right) is specified, positioning attributes in [shape](~${optionPath}.${hostName}${symbolVisit}${type}.shape) (like `x`, `cx`) will not work.
{{ else }}
Only one between [top](~${optionPath}.${hostName}${symbolVisit}${type}.top) and [bottom](~${optionPath}.${hostName}${symbolVisit}${type}.bottom) can work.

If [top](~${optionPath}.${hostName}${symbolVisit}${type}.top) or [bottom](~${optionPath}.${hostName}${symbolVisit}${type}.bottom) is specified, positioning attributes in [shape](~${optionPath}.${hostName}${symbolVisit}${type}.shape) (like `y`, `cy`) will not work.
{{ /if }}



{{ target: partial-graphic-cpt-sub-prop-transition }}

###${prefix} transition(string|Array) = undefined

Can be a single property name or an array of property names.
Enable transition animation when the specified properties changed.
Can only specify properties that are under this `${hostProp}`.

For example:
```ts
{
    type: 'rect',
    ${hostProp}: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```
We can also specify all of the properties like this:
```ts
{
    type: 'rect',
    ${hostProp}: {
        ...
    },
    // Indicate that all props in `${hostProp}` will
    // have transition animation.
    transition: '${hostProp}',
};
```



{{ target: partial-graphic-cpt-animation }}

###${prefix} duration(number)

动画时长，单位 ms

###${prefix} easing(string)

动画缓动。不同的缓动效果可以参考 [缓动示例](${galleryEditorPath}line-easing)。

###${prefix} delay(number)

动画延迟时长，单位 ms



{{ target: partial-graphic-cpt-sub-prop-xy }}

###${prefix} x(number) = 0

The x value of the left-top corner of the element in the coordinate system of its parent.

###${prefix} y(number) = 0

The y value of the left-top corner of the element in the coordinate system of its parent.



{{ target: partial-graphic-cpt-sub-prop-cxy }}

###${prefix} cx(number) = 0

The x value of the center of the element in the coordinate system of its parent.

###${prefix} cy(numbr) = 0

The y value of the center of the element in the coordinate system of its parent.



{{ target: partial-graphic-cpt-sub-prop-wh }}

###${prefix} width(number) = 0

The width of the shape of the element.

###${prefix} height(numbr) = 0

The height of the shape of the element.



{{ target: partial-graphic-cpt-sub-prop-r }}

###${prefix} r(number) = 0

Outside radius.



{{ target: partial-graphic-cpt-sub-prop-rr0 }}

{{ use: partial-graphic-cpt-sub-prop-r(
    prefix = ${prefix},
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}

###${prefix} r0(number) = 0

Inside radius.



{{ target: partial-graphic-cpt-sub-prop-x1y1x2y2 }}

###${prefix} x1(number) = 0

x value of the start point.

###${prefix} y1(number) = 0

y value of the start point.

###${prefix} x2(number) = 0

x value of the end point.

###${prefix} y2(number) = 0

y value of the end point.



{{ target: partial-graphic-cpt-sub-prop-angle }}

###${prefix} startAngle(number) = 0

start angle, in radian.

###${prefix} endAngle(number) = Math.PI * 2

end angle, in radian.

###${prefix} clockwise(boolean) = true

Whether draw clockwise.



{{ target: partial-graphic-cpt-event-handlers }}

{{ if: ${usageType} === 'graphicComponent' }}
##${prefix} onclick(Function)

##${prefix} onmouseover(Function)

##${prefix} onmouseout(Function)

##${prefix} onmousemove(Function)

##${prefix} onmousewheel(Function)

##${prefix} onmousedown(Function)

##${prefix} onmouseup(Function)

##${prefix} ondrag(Function)

##${prefix} ondragstart(Function)

##${prefix} ondragend(Function)

##${prefix} ondragenter(Function)

##${prefix} ondragleave(Function)

##${prefix} ondragover(Function)

##${prefix} ondrop(Function)
{{ /if }}



{{ target: partial-graphic-transform }}

##${prefix} x(number) = 0

x position of element. In pixels.

##${prefix} y(number) = 0

y position of element. In pixels.

##${prefix} rotation(number) = 0

Degree value of rotation.

##${prefix} scaleX(number) = 1

Scale on x.

##${prefix} scaleY(number) = 1

Scale on y.

##${prefix} originX(number) = 0

x value of element scale and rotation origin. In pixels

##${prefix} originY(number) = 0

y value of element scale and rotation origin. In pixels.



{{ target: partial-graphic-cpt-focus-blur }}

##${prefix} focus(string) = 'none'

{{ use: partial-version(
    version = "5.0.0"
) }}

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

+ `'none'` Do not fade out other data, it's by default.
+ `'self'` Only focus (not fade out) the element of the currently highlighted data.
+ `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

##${prefix} blurScope(string) = 'coordinateSystem'

{{ use: partial-version(
    version = "5.0.0"
) }}

The range of fade out when `focus` is enabled. Support the following configurations

+ `'coordinateSystem'`
+ `'series'`
+ `'global'`



{{ target: partial-graphic-cpt-style-emphasis }}

{{ if: ${usageType} === 'customSeries' }}
##${prefix} emphasisDisabled(boolean)

Whether to disable the emphasis state.

##${prefix} emphasis(Object)

Emphasis state of the element.

###${prefix} style(Object)

Same to [style](~${optionPath}.${hostName}${symbolVisit}polygon.style).

##${prefix} blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Blur state, available when `focus` is set.

###${prefix} style(Object)

Same to [style](~${optionPath}.${hostName}${symbolVisit}polygon.style).

##${prefix} select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Select state, available when [selectedMode](~series-custom.selectedMode) is set.

###${prefix} style(Object)

Same to [style](~${optionPath}.${hostName}${symbolVisit}polygon.style).
{{ /if }}



{{ target: partial-graphic-cpt-type-list }}

[image](~${optionPath}.${hostName}${symbolVisit}image),
[text](~${optionPath}.${hostName}${symbolVisit}text),
[circle](~${optionPath}.${hostName}${symbolVisit}circle),
[sector](~${optionPath}.${hostName}${symbolVisit}sector),
[ring](~${optionPath}.${hostName}${symbolVisit}ring),
[polygon](~${optionPath}.${hostName}${symbolVisit}polygon),
[polyline](~${optionPath}.${hostName}${symbolVisit}polyline),
[rect](~${optionPath}.${hostName}${symbolVisit}rect),
[line](~${optionPath}.${hostName}${symbolVisit}line),
[bezierCurve](~${optionPath}.${hostName}${symbolVisit}bezierCurve),
[arc](~${optionPath}.${hostName}${symbolVisit}arc),
[group](~${optionPath}.${hostName}${symbolVisit}group),



{{ target: partial-custom-series-extra }}

##${prefix} extra(Object)

Users can define their own props in this `extra` field. See [during](option.html#series-custom.renderItem.return_rect.during) for the major usage of `extra`.

{{ use: partial-graphic-cpt-sub-prop-transition(
    prefix = ${prefix},
    hostProp = 'extra',
    optionPath = ${optionPath},
    usageType = ${usageType},
    hostName = ${hostName},
    symbolVisit = ${symbolVisit},
    symbolDeclare = ${symbolDeclare}
) }}



{{ target: partial-custom-series-during }}

##${prefix} during(Function)

`during` callback enable users to set props to an element in each animation frame.

```ts
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](option.html#series-custom.renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](option.html#series-custom.renderItem.return_polygon) shape. The shape is described by [shape.points](option.html#series-custom.renderItem.return_polygon.shape.points), which is an points array like:
```ts
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```
If users specify them into [transition](option.html#series-custom.renderItem.return_polygon.transition) like:
```ts
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```
Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:
```ts
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](${galleryEditorPath}custom-spiral-race&edit=1&reset=1).

