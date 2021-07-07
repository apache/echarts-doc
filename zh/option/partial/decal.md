
{{ target: partial-decal-desc }}

图形的贴花图案，在 [aria.enabled](~aria.enabled) 与 [aria.decal.show](~aria.decal.show) 都是 `true` 的情况下才生效。

如果为 `'none'` 表示不使用贴花图案。

{{ if: ${onlyWithAreaStyle} }}
需要在设置了填充样式 `areaStyle` 的情况下才生效。
{{ /if }}



{{ target: partial-decal }}

#${prefix|default('#')} symbol(string|Array) = 'rect'

贴花的图案，如果是 `string[]` 表示循环使用数组中的图案。

{{ use: partial-icon() }}

#${prefix|default('#')} symbolSize(number) = 1

取值范围：`0` 到 `1`，表示占图案区域的百分比。

#${prefix|default('#')} symbolKeepAspect(boolean) = true

是否保持图案的长宽比。

#${prefix|default('#')} color(string) = 'rgba(0, 0, 0, 0.2)'

贴花图案的颜色，建议使用半透明色，这样能叠加在系列本身的颜色上。

#${prefix|default('#')} backgroundColor(string) = null

贴花的背景色，将会覆盖在系列本身颜色之上，贴花图案之下。

#${prefix|default('#')} dashArrayX(number|Array) = 5

贴花图案的基本模式是在横向和纵向上分别以`图案 - 空白 - 图案 - 空白 - 图案 - 空白`的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。

`dashArrayX` 控制了横向的图案模式。当其值为 `number` 或 `number[]` 类型时，与 [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) 类似。

- 如果是 `number` 类型，表示图案和空白分别是这个值。如 `5` 表示先显示宽度为 5 的图案，然后空 5 像素，再然后显示宽度为 5 的图案……

- 如果是 `number[]` 类型，则表示图案和空白依次为数组值的循环。如：`[5, 10, 2, 6]` 表示图案宽 5 像素，然后空 10 像素，然后图案宽 2 像素，然后空 6 像素，然后图案宽 5 像素……

- 如果是 `(number | number[])[]` 类型，表示每行的图案和空白依次为数组值的循环。如：`[10, [2, 5]]` 表示第一行以图案 10 像素空 10 像素循环，第二行以图案 2 像素空 5 像素循环，第三行以图案 10 像素空 10 像素循环……

可以结合以下的例子理解本接口：

~[700x300](${galleryViewPath}doc-example/aria-decal&edit=1&reset=1)

#${prefix|default('#')} dashArrayY(number|Array) = 5

贴花图案的基本模式是在横向和纵向上分别以`图案 - 空白 - 图案 - 空白 - 图案 - 空白`的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。

`dashArrayY` 控制了横向的图案模式。与 [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) 类似。

- 如果是 `number` 类型，表示图案和空白分别是这个值。如 `5` 表示先显示高度为 5 的图案，然后空 5 像素，再然后显示高度为 5 的图案……

- 如果是 `number[]` 类型，则表示图案和空白依次为数组值的循环。如：`[5, 10, 2, 6]` 表示图案高 5 像素，然后空 10 像素，然后图案高 2 像素，然后空 6 像素，然后图案高 5 像素……

可以结合以下的例子理解本接口：

~[700x300](${galleryViewPath}doc-example/aria-decal&edit=1&reset=1)

#${prefix|default('#')} rotation(number) = 0

图案的整体旋转角度（弧度制），取值范围从 `-Math.PI` 到 `Math.PI`。

#${prefix|default('#')} maxTileWidth(number) = 512

生成的图案在未重复之前的宽度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。

#${prefix|default('#')} maxTileHeight(number) = 512

生成的图案在未重复之前的高度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。

