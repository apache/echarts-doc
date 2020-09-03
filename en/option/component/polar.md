
{{ target: component-polar }}

# polar(Object)

Polar coordinate can be used in scatter and line chart. Every polar coordinate has an [angleAxis](~angleAxis) and a [radiusAxis](~radiusAxis).

**For example: **

~[600x400](${galleryViewPath}scatter-polar-punchCard&edit=1&reset=1)

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: component-circular-layout(
    componentName = "Polar coordinate",
    disableArray = false
) }}

{{ use: partial-tooltip-in-coords() }}

