{{target:partial-label-desc}}

${name}text label on the graphic can be used to explain some data information of the graphic, for example, value, name and so on.`label` is placed in ECharts 2.x under `itemStyle.normal`. In ECharts 3, in order to make the whole configuration structure more reasonable and flat, `label`is taked to the same level as `itemStyle` and possesses rwo status `normal` and `emphasis` like `itemStyle`.


{{target:partial-label}}
#${prefix} show(boolean) = ${defaultShowLabel|default("false")}
Wheteher shows tag.
#${prefix} position(string|Array) = ${defaultPosition}
{{use:partial-label-position}}
{{ if: ${formatter} }}
#${prefix} formatter(string|Function)
{{use:partial-2d-data-label-formatter}}
{{ elif: ${formatter1d} }}
#${prefix} formatter(string|Function)
{{use:partial-1d-data-label-formatter}}
{{ /if }}
#${prefix} textStyle(Object)
Label of font style.
{{ use:partial-text-style(prefix=${prefix} + '#') }}


{{ target:partial-label-position }}
Label position.

**Followings are the options：**

+ [x, y]

    Represent label relative to the graphics on the left corner of bounding box by relative percentage or absolute pixel value.
    For example：
    ```js
    // Absolute pixel values
    position: [10, 10],
    // Relative percent
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