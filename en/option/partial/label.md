
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

