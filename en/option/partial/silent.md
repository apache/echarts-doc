
{{ target: partial-silent }}

#${prefix} silent(boolean) = false

<ExampleUIControlBoolean />

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.

