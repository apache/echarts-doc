
{{ target: partial-cursor }}

#${prefix|default('#')} cursor(string) = 'pointer'

<ExampleUIControlEnum options="auto,pointer,move" default="pointer" />

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

