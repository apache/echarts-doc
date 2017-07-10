
{{target: component-graphic}}

# graphic

`graphic` component enable creating graphic elements in echarts.

Those graphic type are supported.

{{ use: graphic-cpt-type-list }}


This example shows how to make a watermark and text block:
~[600x400](${galleryViewPath}line-graphic&edit=1&reset=1)

This example use hidden graphic elements to implement dragging:
~[600x400](${galleryViewPath}line-draggable&edit=1&reset=1)



<br>

---

**Graphic Component Configuration**

A simple way to define a graphic element:
```javascript
myChart.setOption({
    ...,
    graphic: {
        type: 'image',
        ...
    }
});
```

Define multiple graphic elements:
```javascript
myChart.setOption({
    ...,
    graphic: [
        { // A 'image' element.
            type: 'image',
            ...
        },
        { // A 'text' element, with id specified.
            type: 'text',
            id: 'text1',
            ...
        },
        { // A 'group' element, in which children can be defined.
            type: 'group',
            children: [
                {
                    type: 'rect',
                    id: 'rect1',
                    ...
                },
                {
                    type: 'image',
                    ...
                },
                ...
            ]
        }
        ...
    ]
});

```

How to remove or replace existing elements by `setOption`:
```javascript
myChart.setOption({
    ...,
    graphic: [
        { // Remove the element 'text1' defined above.
            id: 'text1',
            $action: 'remove',
            ...
        },
        { // Replace the element 'rect1' to a new circle element.
          // Note, although in the sample above 'rect1' is a children of a group,
          // it is not necessary to consider level relationship when setOption
          // again if you use id to specify them.
            id: 'rect1',
            $action: 'replace',
            type: 'circle',
            ...
        }
    ]
});
```

Notice, when using `setOption` to modify existing elements, if id is not specified, new options will be mapped to exsiting elements by their order, which might bring unexpected result sometimes. So, generally, using id is recommended.



<br>

---



**Graphic Element Configuration**

介绍每个图形元素的配置。不同类型的图形元素的设置有这些共性：

Different types of graphic elements has their own configuration respectively, but they have these common configuration below:

```javascript
{
    // id is used to specifying element when willing to update it.
    // id can be ignored if you do not need it.
    id: 'xxx',

    // Specify element type. Can not be ignored when define a element at the first time.
    type: 'image',

    // All of the properties below can be ignored and a default value will be assigned.

    // Specify the operation should be performed to the element when calling `setOption`.
    // Default value is 'merge', other values can be 'replace' or 'remove'.
    $action: 'replace',

    // These four properties is used to locating the element. Each property can be absolute
    // value (like 10, means 10 pixel) or precent (like '12%') or 'center'/'middle'.
    left: 10,
    // right: 10,
    top: 'center',
    // bottom: '10%',

    shape: {
        // Here are configurations for shape, like `x`, `y`, `cx`, `cy`, `width`,
        // `height`, `r`, `points`, ...
        // Note, if `left`/`right`/`top`/`bottom` has been set, `x`/`y`/`cx`/`cy`
        // do not work here.
    },

    style: {
        // Here are configurations for style of the element, like `fill`, `stroke`,
        // `lineWidth`, `shadowBlur`, ...
    },

    // z value of the elements.
    z: 10,
    // Whether response to mouse events / touch events.
    silent: true,
    // Whether the element is visible.
    invisible: false,
    // Used to specify whether the entire transformed element (containing children if is group)
    // is confined in its container. Optional values: 'raw', 'all'.
    bounding: 'raw',
    // Can be dragged or not.
    draggable: false,
    // Event handler, can also be onmousemove, ondrag, ... (listed below)
    onclick: function () {...}
}
```





<br>

---

**Event Handlers of Graphic Element**

These events are supported:
`onclick`, `onmouseover`, `onmouseout`, `onmousemove`, `onmousewheel`, `onmousedown`, `onmouseup`, `ondrag`, `ondragstart`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondrop`.





<br>

---

**Hierarchy of Graphic Elements**

Only `group` element has children, which enable a group of elements to be positioned and transformed together.






<br>

---

**Shape Configuration of Graphic Element**

Elements with different types have different shape setting repectively. For example:

```javascript
{
    type: 'rect',
    shape: {
        x: 10,
        y: 10,
        width: 100,
        height: 200
    }
},
{
    type: 'circle',
    shape: {
        cx: 20,
        cy: 30,
        r: 100
    }
},
{
    type: 'image',
    style: {
        image: 'http://xxx.xxx.xxx/a.png',
        x: 100,
        y: 200,
        width: 230,
        height: 400
    }
},
{
    type: 'text',
    style: {
        text: 'This text',
        x: 100,
        y: 200
    }

}
```




<br>

---

**Transforming and Absolutely Positioning of Graphic Element**

Element can be transformed (translation, rotation, scale). For example:

```javascript
{
    type: 'rect', // or any other types.

    // Translation, using [0, 0] by default.
    position: [100, 200],

    // Scale, using [1, 1] by default.
    scale: [2, 4],

    // Rotation, using 0 by default. Negative value means rotating clockwise.
    rotation: Math.PI / 4,

    // Origin point of rotation and scale, using [0, 0] by default.
    origin: [10, 20],

    shape: {
        // ...
    }
}
```

+ Each element is transformed in the coordinate system of its parent, namely, transform of a element and its parent can be "stacked".

+ Transformation is performed by this order:
    1. Translate [-el.origin[0], -el.origin[1]]。
    2. Scale according to el.scale.
    3. Rotate according to el.rotation.
    4. Translate back according to el.origin.
    5. Translate according to el.position.
+ Namely, scaling and rotating firstly, and then translate. By this mechanism, translation does not affect origin of scale and rotation.





<br>

---

**Relatively Positioning**

In real application, size of a container is always not fixed. So mechanism of relative position is required. In `graphic` component, [left](~graphic.elements.left) / [right](~graphic.elements.right) / [top](~graphic.elements.top) / [bottom](~graphic.elements.bottom) / [width](~graphic.elements.width) / [height](~graphic.elements.height) are used to position element relatively.

For example:
```javascript
{ // Position the image at the bottom center of its container.
    type: 'image',
    left: 'center', // Position at the center horizontally.
    bottom: '10%',  // Position beyond the bottom boundary 10%.
    style: {
        image: 'http://xxx.xxx.xxx/a.png',
        width: 45,
        height: 45
    }
},
{ // Position the entire rotated group at the right-bottom corner of its container.
    type: 'group',
    right: 0,  // Position at the right boundary.
    bottom: 0, // Position at the bottom boundary.
    rotation: Math.PI / 4,
    children: [
        {
            type: 'rect',
            left: 'center', // Position at horizontal center according to its parent.
            top: 'middle',  // Position at vertical center according to its parent.
            shape: {
                width: 190,
                height: 90
            },
            style: {
                fill: '#fff',
                stroke: '#999',
                lineWidth: 2,
                shadowBlur: 8,
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowColor: 'rgba(0,0,0,0.3)'
            }
        },
        {
            type: 'text',
            left: 'center', // Position at horizontal center according to its parent.
            top: 'middle',  // Position at vertical center according to its parent.
            style: {
                fill: '#777',
                text: [
                    'This is text',
                    'This is text',
                    'Print some text'
                ].join('\n'),
                font: '14px Microsoft YaHei'
            }
        }
    ]
}
```

Note, [bounding](graphic.elements.bounding) can be used to specify whether the entire transformed element (containing children if is group) is confined in its container.



<br>

---


Detailed configurations are listed as follows.



## elements(Array)

A list of all graphic elements.

Note, the standard configuration of graphic component is:
```javascript
{
    graphic: {
        elements: [
            {type: 'rect', ...}, {type: 'circle', ...}, ...
        ]
    }
}
```

But we always use short patterns for convenience:
```javascript
{
    graphic: { // Declare only one graphic element.
        type: 'rect',
        ...
    }
}
```

Or:
```javascript
{
    graphic: [ // Declare multiple graphic elements.
        {type: 'rect', ...}, {type: 'circle', ...}, ...
    ]
}
```







## elements.group(Object)

`group` is the only type that can contain children, so that a group of elements can be positioned and transformed together.

{{ use: graphic-cpt-common-props(
    type='group',
    galleryViewPath=${galleryViewPath}
) }}

### width(number) = 0

Specify width of this `group`.

This width is only used for the positioning of its children.

When width is `0`, children can also be positioned according to its parent using `left: 'center'`.


### height(number) = 0

Specify height of this `group`.

This height is only used for the positioning of its children.

When height is `0`, children can also be positioned according to its parent using `top: 'middle'`.


### children(Array)

A list of children, each item is a declaration of an element.

{{ use: graphic-cpt-common-props(
    type='group',
    galleryViewPath=${galleryViewPath}
) }}

{{ use: graphic-cpt-event-handlers }}




## elements.image(Object)

{{ use: graphic-cpt-common-props(
    type='image',
    galleryViewPath=${galleryViewPath}
) }}

### style(Object)

#### image(string)

Specify contant of the image, can be a URL, or [dataURI](https://tools.ietf.org/html/rfc2397).

{{ use: graphic-cpt-sub-prop-xy }}
{{ use: graphic-cpt-sub-prop-wh }}
{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}





## elements.text(Object)

Text block.

{{ use: graphic-cpt-common-props(
    type='text',
    galleryViewPath=${galleryViewPath}
) }}

### style(Object)

#### text(string) = ''

Text content. `\n` can be used as a line break.

{{ use: graphic-cpt-sub-prop-xy }}

#### font(string)

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

#### textAlign(string) = 'left'

Text horizontal alignment. Optional values: `'left'`, `'center'`, `'right'`.

`'left'` means the left side of the text block is specified by the [style.x](~graphic.elements-text.style.x), while `'right'` means the right side of the text block is specified by [style.y](~graphic.elements-text.style.y).

#### textVerticalAlign(string)

Text vertical alignment. Optional values: `'top'`, `'middle'`, `'bottom'`.

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}






## elements.rect(Object)

Rectangle element.

{{ use: graphic-cpt-common-props(
    type='rect',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-xy }}
{{ use: graphic-cpt-sub-prop-wh }}

### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}




## elements.circle(Object)

Circle element.

{{ use: graphic-cpt-common-props(
    type='circle',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-cxy }}
{{ use: graphic-cpt-sub-prop-r }}

### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}






## elements.ring(Object)

Ring element.

{{ use: graphic-cpt-common-props(
    type='ring',
    galleryViewPath=${galleryViewPath}
) }}


### shape(Object)

{{ use: graphic-cpt-sub-prop-cxy }}
{{ use: graphic-cpt-sub-prop-rr0 }}


### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}







## elements.sector(Object)

Sector element.

{{ use: graphic-cpt-common-props(
    type='sector',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-cxy }}
{{ use: graphic-cpt-sub-prop-rr0 }}
{{ use: graphic-cpt-sub-prop-angle }}

### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}








## elements.arc(Object)

Arc element.

{{ use: graphic-cpt-common-props(
    type='arc',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-cxy }}
{{ use: graphic-cpt-sub-prop-rr0 }}
{{ use: graphic-cpt-sub-prop-angle }}

### style(Object)

{{ use: graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 1
) }}

{{ use: graphic-cpt-event-handlers }}










## elements.polygon(Object)

Polygon element.

{{ use: graphic-cpt-common-props(
    type='polygon',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-path-common }}

### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}







## elements.polyline(Object)

Polyline element.

{{ use: graphic-cpt-common-props(
    type='polyline',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-path-common }}

### style(Object)

{{ use: graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 5
) }}

{{ use: graphic-cpt-event-handlers }}









## elements.line(Object)

Line element.

{{ use: graphic-cpt-common-props(
    type='line',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-x1y1x2y2 }}

#### percent(number) = 1

Specify the percentage of drawing, useful in animation.

Value range: [0, 1].

### style(Object)

{{ use: graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 5
) }}

{{ use: graphic-cpt-event-handlers }}








## elements.bezierCurve(Object)

Quadratic bezier curve or cubic bezier curve.

{{ use: graphic-cpt-common-props(
    type='bezierCurve',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-x1y1x2y2 }}

#### cpx1(number) = 0

x of control point.

#### cpy1(number) = 0

y of control point.

#### cpx2(number) = null

x of the second control point. If specified, cubic bezier is used.

If both `cpx2` and `cpy2` are not set, quatratic bezier is used.

#### cpy2(number) = null

y of the second control point. If specified, cubic bezier is used.

If both `cpx2` and `cpy2` are not set, quatratic bezier is used.

#### percent(number) = 1

Specify the percentage of drawing, useful in animation.

Value range: [0, 1].

### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}














{{ target: graphic-cpt-common-props }}

### type(string) = ${type}

Must be specified when define a graphic element at the first time.

Optional values:
{{ use: graphic-cpt-type-list }}

### id(string) = undefined

id is used to specifying element when willing to update it.
id can be ignored if you do not need it.

### $action(string) = 'merge'

Specify the operation should be performed to the element when calling `setOption`.
Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

+ `'merge'`: merge the given option to existing element (if any), otherwise create a new elemnt.
+ `'replace'`: create a new element accordint to the given option and replace the existing element (if any).
+ `'remove'`: delete the existing element (if any).


### left(number|string) = undefined

{{ use: graphic-cpt-location-prop-desc-common (hv = 'h') }}

### right(number|string) = undefined

{{ use: graphic-cpt-location-prop-desc-common (hv = 'h') }}

### top(number|string) = undefined

{{ use: graphic-cpt-location-prop-desc-common (hv = 'v') }}

### bottom(number|string) = undefined

{{ use: graphic-cpt-location-prop-desc-common (hv = 'v') }}

### bounding(strin) = 'all'

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:
~[500x500](${galleryViewPath}doc-example/graphic-bounding&edit=1&reset=1)

Optional values:

+ `'all'`: (default)
    Use the transformed bounding box of itself and its descentants to perform position calculation, which confine the entire body in the boundary of its parent.

+ `'raw'`:
    Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.


### z(number) = 0

z value of the elements, determine the overlap order.

### zlevel(number) = 0

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### silent(boolean) = false

Whether response to mouse events / touch events.

### invisible(boolean) = false

Whether the element is visible.

{{ use: partial-cursor(prefix="##") }}

### draggable(boolean) = false

Can be dragged or not.

### progressive(boolean) = false

Whether use progressive render to improve performance. Usually used when number of element is too large.



{{ target: graphic-cpt-style-prop-common }}

#### fill(string) = ${fill|default("'#000'")}

Color filled in this element.

#### stroke(string) = ${stroke|default("null")}

Color of stroke.

#### lineWidth(number) = ${lineWidth|default("0")}

Width of stroke.

#### shadowBlur(number) = undefined

Width of shadow.

#### shadowOffsetX(number) = undefined

X offset of shadow.

#### shadowOffsetY(number) = undefined

Y offset of shadow.

#### shadowColor(number) = undefined

color of shadow.








{{ target: graphic-cpt-path-common }}

#### points(Array)

A list of points, which defines the shape, like `[[22, 44], [44, 55], [11, 44], ...]`.

#### smooth(number|string) = undefined

Whether smooth the line.

+ If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of `[0, 1]`.
+ If the value is `'spline'`, Catmull-Rom spline interpolation is used.

#### smoothConstraint(boolean) = false

Whether prevent the smooth process cause the line out of the bounding box.

Only works when `smooth` is `number` (bezier smooth).









{{ target: graphic-cpt-location-prop-desc-common }}

Specify how to be positioned in its parent.

{{ use: graphic-cpt-parent-desc }}

Optional values:

+ Pixel value: For example, can be a number `30`, means `30px`.
+ Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the {{ if: ${hv} === 'h' }}height{{ else }}width{{ /if }} of its parent.
+ {{ if: ${hv} === 'h' }}`'center'`{{ else }}`'middle'`{{ /if }}: means position the element in the middle of according to its parent.

{{ if: ${hv} === 'h' }}
Only one between [left](~graphic.elements.left) and [right](~graphic.elements.right) can work.

If [left](~graphic.elements.left) or [right](~graphic.elements.right) is specified, positioning attributes in [shape](~graphic.elements.shape) (like `x`, `cx`) will not work.
{{ else }}
Only one between [top](~graphic.elements.top) and [bottom](~graphic.elements.bottom) can work.

If [top](~graphic.elements.top) or [bottom](~graphic.elements.bottom) is specified, positioning attributes in [shape](~graphic.elements.shape) (like `y`, `cy`) will not work.
{{ /if }}





{{ target: graphic-cpt-sub-prop-xy }}

#### x(number) = 0

The x value of the left-top corner of the element in the coordinate system of its parent.

#### y(numbr) = 0

The y value of the left-top corner of the element in the coordinate system of its parent.


{{ target: graphic-cpt-sub-prop-cxy }}

#### cx(number) = 0

The x value of the center of the element in the coordinate system of its parent.

#### cy(numbr) = 0

The y value of the center of the element in the coordinate system of its parent.


{{ target: graphic-cpt-sub-prop-wh }}

#### width(number) = 0

The width of the shape of the element.

#### height(numbr) = 0

The height of the shape of the element.


{{ target: graphic-cpt-sub-prop-r }}

#### r(number) = 0

Outside radius.

{{ target: graphic-cpt-sub-prop-rr0 }}

{{ use: graphic-cpt-sub-prop-r }}

#### r0(number) = 0

Inside radius.

{{ target: graphic-cpt-sub-prop-x1y1x2y2 }}

#### x1(number) = 0

x value of the start point.

#### y1(number) = 0

y value of the start point.

#### x2(number) = 0

x value of the end point.

#### y2(number) = 0

y value of the end point.

{{ target: graphic-cpt-sub-prop-angle }}

#### startAngle(number) = 0

start angle, in radian.

#### endAngle(number) = Math.PI * 2

end anble, in radian.

#### clockwise(boolean) = true

Whether draw clockwise.







{{ target: graphic-cpt-event-handlers }}

### onclick(Function)

### onmouseover(Function)

### onmouseout(Function)

### onmousemove(Function)

### onmousewheel(Function)

### onmousedown(Function)

### onmouseup(Function)

### ondrag(Function)

### ondragstart(Function)

### ondragend(Function)

### ondragenter(Function)

### ondragleave(Function)

### ondragover(Function)

### ondrop(Function)





{{ target: graphic-cpt-location-group-wh-common }}

Specify the width and height of this `group`, use `0` by default.

This `width` and `height` are only used to define a rectangle contanier to position its children, where `left`/`right`/`top`/`bottom` defined in the children can be use.









{{ target: graphic-cpt-parent-desc }}

When the element is at the top level, the parent is the contianer of the chart instance.
Otherwise, the parent is a `group` element.









{{ target: graphic-cpt-type-list }}

[image](~graphic.elements-image),
[text](~graphic.elements-text),
[circle](~graphic.elements-circle),
[sector](~graphic.elements-sector),
[ring](~graphic.elements-ring),
[polygon](~graphic.elements-polygon),
[polyline](~graphic.elements-polyline),
[rect](~graphic.elements-rect),
[line](~graphic.elements-line),
[bezierCurve](~graphic.elements-bezierCurve),
[arc](~graphic.elements-arc),
[group](~graphic.elements-group),





