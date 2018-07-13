
{{target: partial-zr-graphic-elements}}

#${prefix} ${hostName}${symbolDeclare}group(Object)

`group` is the only type that can contain children, so that a group of elements can be positioned and transformed together.

{{ use: partial-graphic-cpt-common-props(
    type='group',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} width(number) = 0

Specify width of this `group`.

This width is only used for the positioning of its children.

When width is `0`, children can also be positioned according to its parent using `left: 'center'`.


##${prefix} height(number) = 0

Specify height of this `group`.

This height is only used for the positioning of its children.

When height is `0`, children can also be positioned according to its parent using `top: 'middle'`.


##${prefix} children(Array)

A list of children, each item is a declaration of an element.

{{ use: partial-graphic-cpt-common-props(
    type='group',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}




#${prefix} ${hostName}${symbolDeclare}image(Object)

{{ use: partial-graphic-cpt-common-props(
    type='image',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} style(Object)

###${prefix} image(string)

Specify contant of the image, can be a URL, or [dataURI](https://tools.ietf.org/html/rfc2397).

{{ use: partial-graphic-cpt-sub-prop-xy(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}
{{ use: partial-graphic-cpt-sub-prop-wh(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}
{{ use: partial-graphic-cpt-style-prop-common(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}





#${prefix} ${hostName}${symbolDeclare}text(Object)

Text block.

{{ use: partial-graphic-cpt-common-props(
    type='text',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} style(Object)

###${prefix} text(string) = ''

Text content. `\n` can be used as a line break.

{{ use: partial-graphic-cpt-sub-prop-xy(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
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

###${prefix} textVerticalAlign(string)

Text vertical alignment. Optional values: `'top'`, `'middle'`, `'bottom'`.

{{ use: partial-graphic-cpt-style-prop-common(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}






#${prefix} ${hostName}${symbolDeclare}rect(Object)

Rectangle element.

{{ use: partial-graphic-cpt-common-props(
    type='rect',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-xy(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}
{{ use: partial-graphic-cpt-sub-prop-wh(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

###${prefix} r(Array)

Specify border radius of the rectangular here. Generally, `r` should be `[topLeftRadius, topRightRadius, BottomRightRadius, bottomLeftRadius]`, where each item is a number.

Abbreviation is enabled, for example:
+ `r`: `1`         means `[1, 1, 1, 1]`
+ `r`: `[1]`       means `[1, 1, 1, 1]`
+ `r`: `[1, 2]`    means `[1, 2, 1, 2]`
+ `r`: `[1, 2, 3]` means `[1, 2, 3, 2]`


##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}




#${prefix} ${hostName}${symbolDeclare}circle(Object)

Circle element.

{{ use: partial-graphic-cpt-common-props(
    type='circle',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-cxy(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}
{{ use: partial-graphic-cpt-sub-prop-r(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}






#${prefix} ${hostName}${symbolDeclare}ring(Object)

Ring element.

{{ use: partial-graphic-cpt-common-props(
    type='ring',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}


##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-cxy(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}
{{ use: partial-graphic-cpt-sub-prop-rr0(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}


##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}







#${prefix} ${hostName}${symbolDeclare}sector(Object)

Sector element.

{{ use: partial-graphic-cpt-common-props(
    type='sector',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-cxy(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}
{{ use: partial-graphic-cpt-sub-prop-rr0(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}
{{ use: partial-graphic-cpt-sub-prop-angle(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}








#${prefix} ${hostName}${symbolDeclare}arc(Object)

Arc element.

{{ use: partial-graphic-cpt-common-props(
    type='arc',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-cxy(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}
{{ use: partial-graphic-cpt-sub-prop-rr0(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}
{{ use: partial-graphic-cpt-sub-prop-angle(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 1,
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}










#${prefix} ${hostName}${symbolDeclare}polygon(Object)

Polygon element.

{{ use: partial-graphic-cpt-common-props(
    type='polygon',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-path-common(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}







#${prefix} ${hostName}${symbolDeclare}polyline(Object)

Polyline element.

{{ use: partial-graphic-cpt-common-props(
    type='polyline',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-path-common(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 5,
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}









#${prefix} ${hostName}${symbolDeclare}line(Object)

Line element.

{{ use: partial-graphic-cpt-common-props(
    type='line',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-x1y1x2y2(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

###${prefix} percent(number) = 1

Specify the percentage of drawing, useful in animation.

Value range: [0, 1].

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 5,
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}








#${prefix} ${hostName}${symbolDeclare}bezierCurve(Object)

Quadratic bezier curve or cubic bezier curve.

{{ use: partial-graphic-cpt-common-props(
    type='bezierCurve',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} shape(Object)

{{ use: partial-graphic-cpt-sub-prop-x1y1x2y2(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
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

##${prefix} style(Object)

{{ use: partial-graphic-cpt-style-prop-common(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-style-emphasis(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

{{ use: partial-graphic-cpt-event-handlers(
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}














{{ target: partial-graphic-cpt-common-props }}

##${prefix} type(string) = ${type}

Must be specified when define a graphic element at the first time.

Optional values:
{{ use: partial-graphic-cpt-type-list(
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
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
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}


{{ if: ${usageType} === 'graphicComponent' }}

##${prefix} left(number|string) = undefined

{{ use: partial-graphic-cpt-location-prop-desc-common (
    hv = 'h',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} right(number|string) = undefined

{{ use: partial-graphic-cpt-location-prop-desc-common (
    hv = 'h',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} top(number|string) = undefined

{{ use: partial-graphic-cpt-location-prop-desc-common (
    hv = 'v',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} bottom(number|string) = undefined

{{ use: partial-graphic-cpt-location-prop-desc-common (
    hv = 'v',
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} bounding(strin) = 'all'

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:
~[500x500](${galleryViewPath}doc-example/graphic-bounding&edit=1&reset=1)

Optional values:

+ `'all'`: (default)
    Use the transformed bounding box of itself and its descentants to perform position calculation, which confine the entire body in the boundary of its parent.

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

See [diffChildrenByName](~${optionPath}.${hostName}${symbolVisit}polygon.diffChildrenByName)。

##${prefix} diffChildrenByName(boolean) = false

In [custom series](~series-custom), when `diffChildrenByName` is set as `true`, for each [group](~${optionPath}.${hostName}${symbolVisit}group) returned from [renderItem](~series-custom.renderItem), "diff" will be performed to its [children](~${optionPath}.${hostName}${symbolVisit}group.children) according to the [name](~${optionPath}.${hostName}${symbolVisit}polygon.name) attribute of each graphic elements. Here "diff" means that map the coming graphic elements to the existing graphic elements when repainting according to `name`, which enables the transition animation if data is modified.

But notice that the operation is performance consuming, do not use it for large data amount.

{{ /if }}




##${prefix} silent(boolean) = false

Whether response to mouse events / touch events.


{{ if: ${usageType} === 'graphicComponent' }}

##${prefix} invisible(boolean) = false

Whether the element is visible.

{{ use: partial-cursor(prefix="##") }}

##${prefix} draggable(boolean) = false

Can be dragged or not.

##${prefix} progressive(boolean) = false

Whether use progressive render to improve performance. Usually used when number of element is too large.

{{ /if }}



{{ target: partial-graphic-cpt-style-prop-common }}


More attributes in `style` (for example, [rich text](https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

+ [itemStyle.color](~series-scatter.label.color) => `style.fill`
+ [itemStyle.borderColor](~series-scatter.label.color) => `style.stroke`
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

color of shadow.








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

When the element is at the top level, the parent is the contianer of the chart instance.
Otherwise, the parent is a `group` element.

Optional values:

+ Pixel value: For example, can be a number `30`, means `30px`.
+ Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the {{ if: ${hv} === 'h' }}height{{ else }}width{{ /if }} of its parent.
+ {{ if: ${hv} === 'h' }}`'center'`{{ else }}`'middle'`{{ /if }}: means position the element in the middle of according to its parent.

{{ if: ${hv} === 'h' }}
Only one between [left](~${optionPath}.${hostName}${symbolVisit}polygon.left) and [right](~${optionPath}.${hostName}${symbolVisit}polygon.right) can work.

If [left](~${optionPath}.${hostName}${symbolVisit}polygon.left) or [right](~${optionPath}.${hostName}${symbolVisit}polygon.right) is specified, positioning attributes in [shape](~${optionPath}.${hostName}${symbolVisit}polygon.shape) (like `x`, `cx`) will not work.
{{ else }}
Only one between [top](~${optionPath}.${hostName}${symbolVisit}polygon.top) and [bottom](~${optionPath}.${hostName}${symbolVisit}polygon.bottom) can work.

If [top](~${optionPath}.${hostName}${symbolVisit}polygon.top) or [bottom](~${optionPath}.${hostName}${symbolVisit}polygon.bottom) is specified, positioning attributes in [shape](~${optionPath}.${hostName}${symbolVisit}polygon.shape) (like `y`, `cy`) will not work.
{{ /if }}





{{ target: partial-graphic-cpt-sub-prop-xy }}

###${prefix} x(number) = 0

The x value of the left-top corner of the element in the coordinate system of its parent.

###${prefix} y(numbr) = 0

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
    prefix=${prefix},
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
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

end anble, in radian.

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

##${prefix} position(Array) = [0, 0]

{{ use: partial-graphic-transform-common-desc(
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} rotation(number) = 0

{{ use: partial-graphic-transform-common-desc(
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} scale(Array) = [1, 1]

{{ use: partial-graphic-transform-common-desc(
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}

##${prefix} origin(number) = [0, 0]

{{ use: partial-graphic-transform-common-desc(
    optionPath=${optionPath},
    usageType=${usageType},
    hostName=${hostName},
    symbolVisit=${symbolVisit},
    symbolDeclare=${symbolDeclare}
) }}


{{ target: partial-graphic-transform-common-desc }}

`2D transform` can be applied to graphic elements, including:
+ [position](~${optionPath}.${hostName}${symbolVisit}polygon.position): `[horizontal translate offset, vertical translate offset]`, `[0, 0]` by default. Positive value means translate towards right or bottom.
+ [rotation](~${optionPath}.${hostName}${symbolVisit}polygon.rotation): Rotation in radian, `0` by default. Positive when anticlockwise.
+ [scale](~${optionPath}.${hostName}${symbolVisit}polygon.scale): `[horizontal scale factor, vertical scale factor]`, `[1, 1]` by default.

[origin](~${optionPath}.${hostName}${symbolVisit}polygon.origin) specifies the origin point of rotation and scaling, `[0, 0]` by default.

Notice:
+ The coordinates specified in the transform attribute above are relative to the `[0, 0]` of the parent element (that is, [group](~${optionPath}.${hostName}${symbolVisit}group) or the root canvas). Thus we are able to [group](~${optionPath}.${hostName}${symbolVisit}group) multiple elements, and [groups](~${optionPath}.${hostName}${symbolVisit}group) can be nested.
+ The order that the transform attributes are applied to a single graphic element is: Firstly, `rotation`, then, `scale`, finally, `position`.




{{ target: partial-graphic-cpt-style-emphasis }}

{{ if: ${usageType} === 'customSeries' }}

##${prefix} styleEmphasis(Object)

Empahsis style of the graphic element, whose structure is the same as [style](~${optionPath}.${hostName}${symbolVisit}polygon.style).

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




