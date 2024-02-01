
{{ target: component-graphic }}

# graphic(*)

`graphic` component enables creating graphic elements in ECharts.

Those graphic type are supported.

{{ use: partial-graphic-cpt-type-list(
    optionPath = 'graphic',
    hostName = 'elements',
    symbolVisit = '-',
    symbolDeclare = '.',
    usageType = 'graphicComponent'
) }}

This example shows how to make a watermark and text block:
~[600x400](${galleryViewPath}line-graphic&edit=1&reset=1)

This example use hidden graphic elements to implement dragging:
~[600x400](${galleryViewPath}line-draggable&edit=1&reset=1)

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

Notice, when using `setOption` to modify existing elements, if id is not specified, new options will be mapped to existing elements by their order, which might bring unexpected result sometimes. So, generally, using id is recommended.



**Graphic Element Configuration**

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
    // value (like 10, means 10 pixel) or percent (like '12%') or 'center'/'middle'.
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



**Event Handlers of Graphic Element**

These events are supported:
`onclick`, `onmouseover`, `onmouseout`, `onmousemove`, `onmousewheel`, `onmousedown`, `onmouseup`, `ondrag`, `ondragstart`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondrop`.



**Hierarchy of Graphic Elements**

Only `group` element has children, which enable a group of elements to be positioned and transformed together.




**Shape Configuration of Graphic Element**

Elements with different types have different shape setting respectively. For example:

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
        image: 'http://example.website/a.png',
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


**Transforming and Absolutely Positioning of Graphic Element**

Element can be transformed (translation, rotation, scale). See [position](~graphic.elements.position), [rotation](~graphic.elements.rotation), [scale](~graphic.elements.scale), [origin](~graphic.elements.origin)

For example:

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

Each element is transformed in the coordinate system of its parent, namely, transform of a element and its parent can be "stacked".

Transformation is performed by this order:

1. Translate [-el.origin[0], -el.origin[1]].
2. Scale according to el.scale.
3. Rotate according to el.rotation.
4. Translate back according to el.origin.
5. Translate according to el.position.

Namely, scaling and rotating firstly, and then translate. By this mechanism, translation does not affect origin of scale and rotation.



**Relatively Positioning**

In real application, size of a container is always not fixed. So mechanism of relative position is required. In `graphic` component, [left](~graphic.elements.left) / [right](~graphic.elements.right) / [top](~graphic.elements.top) / [bottom](~graphic.elements.bottom) / [width](~graphic.elements.width) / [height](~graphic.elements.height) are used to position element relatively.

For example:
```javascript
{ // Position the image at the bottom center of its container.
    type: 'image',
    left: 'center', // Position at the center horizontally.
    bottom: '10%',  // Position beyond the bottom boundary 10%.
    style: {
        image: 'http://example.website/a.png',
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

{{ use: partial-component-id(
    prefix = "#"
) }}

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

{{ use: partial-zr-graphic-elements(
    prefix = '#',
    optionPath = 'graphic',
    hostName = 'elements',
    symbolVisit = '-',
    symbolDeclare = '.',
    usageType = 'graphicComponent'
) }}

