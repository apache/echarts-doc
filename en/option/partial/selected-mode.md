
{{ target: partial-selected-mode }}

## selectedMode(boolean|string) = false

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

<ExampleUIControlEnum options="false,true,single,multiple,series" />

Selected mode.  It is enabled by default, and you may set it to be `false` to disabled it.

Besides, it can be set to `'single'`, `'multiple'` or `'series'`, for single selection, multiple selections and whole series selection.

