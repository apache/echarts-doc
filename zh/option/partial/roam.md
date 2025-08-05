
{{ target: partial-roam-desc }}

<ExampleUIControlEnum options="true,false,scale,move" />

是否开启使用鼠标或触摸进行漫游（移动和缩放）。可取值有：

+ `false`：关闭。
+ `'scale'` 或 `'zoom'`：只能够缩放。
+ `'move'` 或 `'pan'`：只能够平移。
+ `true`：缩放和平移均可。


{{ target: partial-scale-limit-desc }}

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

[缩放](~${componentNameInLink}.roam) 的极限控制，通过 `min` 和 `max` 限制最小和最大的缩放值。

{{ use: partial-zoom-value-desc }}

#${prefix} min(number)

最小的缩放值

#${prefix} max(number)

最大的缩放值


{{ target: partial-zoom-value-desc }}

值小于 `1` 时表示缩小，大于 `1` 时表示放大。
