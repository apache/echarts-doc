
{{ target: partial-cursor }}

#${prefix|default('#')} ${prop|default("cursor")}(string) = ${defaultValue|default("pointer")}

<ExampleUIControlEnum options="auto,pointer,move,grab,grabbing" default="pointer" />

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

${targetDesc|default("鼠标悬浮时在图形元素上时")}鼠标的样式是什么。同 CSS 的 `cursor`。
