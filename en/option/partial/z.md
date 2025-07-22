
{{ target: partial-z }}

#${prefix|default("#")} z(number) = ${defaultZ|default(5)}

{{ use: partial-version(
    version = ${version}
) }}

Components with smaller `z` values may be overwritten by those with larger `z` values.

`z` has a lower priority to `zlevel`, and will not create new Canvas.

