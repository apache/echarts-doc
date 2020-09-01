
{{ target: partial-selected-mode }}

## selectedMode(boolean|string) = false

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

<ExampleUIControlEnum options="true,false,single,multiple" />

选中模式的配置，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选`'single'`，`'multiple'`，分别表示单选还是多选。

