
{{ target: partial-roam }}

<ExampleUIControlEnum options="true,false,scale,move" />

是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 `'scale'` 或者 `'move'`。设置成 `true` 为都开启



{{ target: partial-scale-limit }}

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

滚轮缩放的极限控制，通过 `min` 和 `max` 限制最小和最大的缩放值。

#${prefix} min(number)

最小的缩放值

#${prefix} max(number)

最大的缩放值

