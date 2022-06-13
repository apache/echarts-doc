
{{ target: partial-label-line-desc }}

{{ use: partial-version(
    version = "5.0.0"
) }}

标签的视觉引导线配置。



{{ target: partial-label-line }}

#${prefix} show(boolean)

<ExampleUIControlBoolean />

是否显示视觉引导线。

{{ if: ${showAbove} }}
#${prefix} showAbove(boolean)

{{ use: partial-version(
    version = "5.0.0"
) }}

是否显示在图形上方。
{{ /if }}

{{ if: ${length} }}
#${prefix} length(number)

<ExampleUIControlNumber default="15" min="0" step="1" />

视觉引导线第一段的长度。
{{ /if }}

{{ if: ${length2} }}
#${prefix} length2(number)

<ExampleUIControlNumber default="15" min="0" step="1" />

视觉引导项第二段的长度。
{{ /if }}

{{ if: ${smooth} }}
#${prefix} smooth(boolean|number) = false

<ExampleUIControlBoolean />

是否平滑视觉引导线，默认不平滑，可以设置成 `true` 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。
{{ /if }}

{{ if: ${minTurnAngle} }}
#${prefix} minTurnAngle(number) = ${defaultMinTurnAngle|default(null)}

{{ use: partial-version(
    version = "5.0.0"
) }}

通过调整第二段线的长度，限制引导线两端之间最小的夹角，以防止过小的夹角导致显示不美观。

可以设置为 0 - 180 度。
{{ /if }}

#${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = "#" + ${prefix}
) }}

