
{{ target: partial-select-disabled }}

#${prefix} disabled(boolean) = ${defaultValue|default(false)}

<ExampleUIControlBoolean default="${defaultValue|default(false)}" />

{{ use: partial-version(
    version = ${version|default('5.3.0')}
) }}

If data can be selected. Available when `selectedMode` is used. Can be used to disable selection for part of the data.

