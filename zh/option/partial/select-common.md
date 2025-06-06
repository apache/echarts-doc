
{{ target: partial-select-disabled }}

#${prefix} disabled(boolean) = ${defaultValue|default(false)}

<ExampleUIControlBoolean default="${defaultValue|default(false)}" />

{{ use: partial-version(
    version = ${version|default('5.3.0')}
) }}

是否可以被选中。在开启 `selectedMode` 的时候有效，可以用于关闭部分数据。

