{{ target: partial-roundCap }}

#${prefix|default('#')} roundCap(boolean) = ${defaultRoundCap|default(false)}

<ExampleUIControlBoolean default="${defaultRoundCap|default(false)}" />

{{ use: partial-version(
    version = "5.0"
) }}

<ExampleUIControlBoolean clean="true" />

If to add round caps at the end of the bar sectors. Valid only for bar series on polar coordinates.

~[800x500](${galleryViewPath}polar-roundCap&reset=1&edit=1)