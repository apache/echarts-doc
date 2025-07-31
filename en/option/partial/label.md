
{{ target: partial-label-desc }}

Text label of ${name}, to explain some data information about graphic item like value, name and so on. `label` is placed under `itemStyle` in ECharts 2.x. In ECharts 3, to make the configuration structure flatter, `label`is taken to be at the same level with `itemStyle`, and has `emphasis` as `itemStyle` does.



{{ target: partial-label }}

#${prefix} show(boolean) = ${defaultShowLabel|default("false")}

<ExampleUIControlBoolean default="${defaultShowLabel|default(false)}" />

Whether to show label.

{{ if: !${noPosition} }}
#${prefix} position(string|Array) = ${defaultPosition}

<ExampleUIControlEnum options="top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside" />

{{ use: partial-label-position() }}
{{ /if }}

{{ if: !${noDistance} }}
#${prefix} distance(number) = 5

<ExampleUIControlNumber default="5" min="0" step="0.5" />

Distance to the host graphic element.

{{ if: !${noPosition} }}
It is valid only when `position` is string value (like `'top'`、`'insideRight'`).

See: [label position](${galleryEditorPath}doc-example/label-position).
{{ /if }}
{{ /if }}

{{ if: !${noRotate} }}
#${prefix} rotate(number) = ${defaultRotate}

<ExampleUIControlAngle default="${defaultRotate|default(0)}" min="-90" max="90" step="1" />

Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.

See: [label rotation](${galleryEditorPath}bar-label-rotation).
{{ /if }}

#${prefix} offset(Array)

<ExampleUIControlVector dims="x,y" step="0.5" separate="true" />

Whether to move text slightly. For example: `[30, 40]` means move `30` horizontally and move `40` vertically.

{{ use: partial-label-margin(
    prefix = ${prefix},
    labelMargin = ${labelMargin}
) }}

{{ if: ${formatter} }}
#${prefix} formatter(string|Function)

{{ use: partial-2d-data-label-formatter(
    extra = ${formatterExtra}
) }}

{{ elif: ${formatter1d} }}
#${prefix} formatter(string|Function)

{{ use: partial-1d-data-label-formatter(
    extra = ${formatterExtra}
) }}
{{ /if }}

{{ if: !${noTextStyle} }}
{{ use: partial-text-style(
    prefix = ${prefix},
    noAlign = ${noAlign},
    noVerticalAlign = ${noVerticalAlign},
    name = ${name},
    defaultColor = ${defaultColor},
    defaultPadding = ${defaultPadding},
    defaultFontSize = ${defaultFontSize},
    noRich = ${noRich},
    noBox = ${noBox},
    enableAutoColor = true
) }}
{{ /if }}




{{ target: partial-label-margin }}
{{ if: ${labelMargin} }}
#${prefix} textMargin(number|Array)

{{ use: partial-version(
    version = "6.0.0"
) }}

The space around the label to escape from overlapping. The unit is px.

Notice: `textMargin` is applied on the label's local bounding rect, that is, if there is a `rotate` specified on the label, apply `textMargin` on the non-rotated label first, and then apply the rotation.

> The name is `textMargin` because historically the name `margin` has been used for a different purpose.


Examples:
```ts
// Set margin to be 5, means [5, 5, 5, 5]
textMargin: 5
// Set the top and bottom margin to be 5, and left and right margin to be 10
textMargin: [5, 10]
// Set each of the four margin separately
textMargin: [
    5,  // up
    10, // right
    5,  // down
    10, // left
]
```

#${prefix} minMargin(number)

{{ use: partial-version(
    version = "5.0.0"
) }}

Minimal margin between labels. Used when label has [layout](~series.labelLayout).

`minMargin` conveys a similar meaning to `textMargin`, but with a different nuance. If unsure, just use `textMargin`; it basically covers `minMargin` and can provide a more compact layout for rotated labels in some scenarios.

> TL;DR: The difference:
> + The minimal gap (if applicable) between two labels is `label1.minMargin/2 + label2.minMargin/2`, or `label1.textMargin[number] + label2.textMargin[number]`.
> + If `rotate` is specified on a label,
>     + `minMargin`: first rotate the label, forming a new rect by the min/max of x/y from the four corner points (that is a expanded bounding rect), and finally `minMargin` is applied on the new rect.
>     + `textMargin`: first applied on the label's local bounding rect, and then rotate.
> + Data type: `minMargin` should be only `number`, `textMargin` can be `number | number[]` (follow CSS margin).
{{ /if }}





{{ target: partial-label-position }}

Label position.

**Followings are the options: **

+ [x, y]

    Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.
    For example:
    ```ts
    // Absolute pixel values
    position: [10, 10],
    // Relative percentage
    position: ['50%', '50%']
    ```

+ 'top'
+ 'left'
+ 'right'
+ 'bottom'
+ 'inside'
+ 'insideLeft'
+ 'insideRight'
+ 'insideTop'
+ 'insideBottom'
+ 'insideTopLeft'
+ 'insideBottomLeft'
+ 'insideTopRight'
+ 'insideBottomRight'

See: [label position](${galleryViewPath}doc-example/label-position).

