
{{ target: partial-cursor }}

#${prefix|default('#')} cursor(string) = 'pointer'

<ExampleUIControlEnum options="auto,pointer,move" default="pointer" />

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

The mouse style when mouse hovers on an element, the same as `cursor` property in `CSS`.

