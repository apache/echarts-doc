
{{ target: partial-decal-desc }}

The style of the decal pattern. It works only if [aria.enabled](~aria.enabled) and [aria.decal.show](~aria.decal.show) are both set to be `true`.

If it is set to be `'none'`, no decal will be used.

{{ if: ${onlyWithAreaStyle} }}
It works only if `areaStyle` is set.
{{ /if }}



{{ target: partial-decal }}

#${prefix|default('#')} symbol(string|Array) = 'rect'

The symbol type of the decal. If it is in the type of `string[]`, it means the symbols are used one by one.

{{ use: partial-icon() }}

#${prefix|default('#')} symbolSize(number) = 1

Range of values: `0` to `1`, representing the size of symbol relative to decal.

#${prefix|default('#')} symbolKeepAspect(boolean) = true

Whether or not to keep the aspect ratio of the pattern.

#${prefix|default('#')} color(string) = 'rgba(0, 0, 0, 0.2)'

For the color of the decal pattern, it is recommended to use a translucent color, which can be superimposed on the color of the series itself.

#${prefix|default('#')} backgroundColor(string) = null

The background color of the decal will be over the color of the series itself, under the decal pattern.

#${prefix|default('#')} dashArrayX(number|Array) = 5

The basic pattern of the decal pattern is an infinite loop in the form of `Pattern - Blank - Pattern - Blank - Pattern - Blank` both horizontally and vertically, respectively. By setting the length of each pattern and blank, complex pattern effects can be achieved.

`dashArrayX` controls the horizontal pattern pattern. When its value is of type `number` or `number[]`, it is similar to [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray).

- If it is of type `number`, it means that the pattern and the blank space are of this value respectively. For example, `5` means the pattern with width 5 is displayed first, then 5 pixels empty, then the pattern with width 5 is displayed...

- In the case of `number[]` type, it means that the pattern and empty space are loops of an array of values. For example: `[5, 10, 2, 6]` means the pattern is 5 pixels wide, then 10 pixels empty, then the pattern is 2 pixels wide, then 6 pixels empty, then the pattern is 5 pixels wide...

- If of type `(number | number[])[]`, it means that each row is a loop with an array of values for the pattern and blank space. For example: `[10, [2, 5]]` means that the first line will be 10 pixels by 10 pixels and empty space, the second line will be 2 pixels by 2 pixels and empty space, and the third line will be 10 pixels by 10 pixels and empty space...

This interface can be better understood with the following examples.

~[700x300](${galleryViewPath}doc-example/aria-decal&edit=1&reset=1)

#${prefix|default('#')} dashArrayY(number|Array) = 5

The basic pattern of the decal pattern is an infinite loop in the form of `Pattern - Blank - Pattern - Blank - Pattern - Blank` both horizontally and vertically, respectively. By setting the length of each pattern and blank, complex pattern effects can be achieved.

`dashArrayY` controls the horizontal pattern pattern. Similar to [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray).

- If it is a `number` type, it means the pattern and the blank are each of this value. For example, `5` means that the pattern with a height of 5 is displayed first, then 5 pixels empty, then the pattern with a height of 5 is displayed...

- In the case of `number[]` type, it means that the pattern and empty space are loops of sequential array values. For example: `[5, 10, 2, 6]` means the pattern is 5 pixels high, then 10 pixels empty, then the pattern is 2 pixels high, then 6 pixels empty, then the pattern is 5 pixels high...

This interface can be better understood with the following examples.

~[700x300](${galleryViewPath}doc-example/aria-decal&edit=1&reset=1)

#${prefix|default('#')} rotation(number) = 0

The overall rotation angle (in radians) of the pattern, in the range from `-Math.

#${prefix|default('#')} maxTileWidth(number) = 512

The upper limit of the width of the generated pattern before it is duplicated. Usually this value is not necessary, but you can try to increase it if you notice discontinuous seams in the pattern when it repeats.

#${prefix|default('#')} maxTileHeight(number) = 512

The upper limit of the height of the generated pattern before it repeats. This value is usually not necessary to set, but you can try to increase it if you find that the pattern has discontinuous seams when it is repeated.

