
{{ target: partial-cursor }}

#${prefix|default('#')} ${prop|default("cursor")}(string) = ${defaultValue|default("pointer")}

<ExampleUIControlEnum options="auto,pointer,move,grab,grabbing" default="pointer" />

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

The mouse style ${targetDesc|default("when mouse hovers over an element")}, the same as `cursor` property in `CSS`.

