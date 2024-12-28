
{{ target: partial-silent }}

#${prefix} silent(boolean) = false

<ExampleUIControlBoolean />

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。

