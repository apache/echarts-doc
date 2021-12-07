
{{ target: partial-selected-mode }}

## selectedMode(boolean|string) = false

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

<ExampleUIControlEnum options="false,true,single,multiple" />

The selected mode is disabled by default. The default value is `false`. The configuration of the selected mode indicates whether single, multiple, or no selections are supported. It supports boolean values and strings. The string values can be set to `'single'` for single selection support or to `'multiple'` for multiple selection support.
