{{target:partial-label-desc}}

Text label of ${name}, to explain some data information about graphic item like value, name and so on. `label` is placed under `itemStyle.normal` in ECharts 2.x. In ECharts 3, to make the configuration structure flatter, `label`is taken to be at the same level with `itemStyle`, and has two status `normal` and `emphasis` as `itemStyle` does.


{{target:partial-label}}
#${prefix} show(boolean) = ${defaultShowLabel|default("false")}
Whether to show label.
#${prefix} position(string|Array) = ${defaultPosition}
{{use:partial-label-position}}

#${prefix} rotate(number) = ${defaultRotate}
Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.

#${prefix} offset(Array)
Whether to move text slightly. For example: `[30, 40]` means move `30` horizontally and move `40` vertically.
{{ if: ${formatter} }}
#${prefix} formatter(string|Function)
{{use:partial-2d-data-label-formatter}}
{{ elif: ${formatter1d} }}
#${prefix} formatter(string|Function)
{{use:partial-1d-data-label-formatter}}
{{ /if }}

{{ if: !${noTextStyle} }}
#${prefix} textStyle(Object)
Label font style.
{{ use:partial-text-style(prefix=${prefix} + '#') }}
{{ /if }}


{{ target:partial-label-position }}
Label position.

**Followings are the options: **

+ [x, y]

    Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.
    For example:
    ```js
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
+ 'insideLeftTop'
+ 'insideLeftBottom'
+ 'insideRightTop'
+ 'insideRightBottom'