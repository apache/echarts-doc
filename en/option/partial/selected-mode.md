
{{ target: partial-selected-mode }}

## selectedMode(boolean|string) = false

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

<ExampleUIControlEnum options="true,false,single,multiple" />

Selected mode.  It is enabled by default, and you may set it to be `false` to disabled it.

Besides, it can be set to `'single'` or `'multiple'`, for single selection and multiple selections.

