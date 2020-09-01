
{{ target: component-radius-axis }}

# radiusAxis(Object)

Radial axis of polar coordinate.

{{ use: partial-component-id(
    prefix = "#"
) }}

## polarIndex(number) = 0

Index of radial axis in polor coordinate. It's the first axis by default.

{{ use: axis-common(
    prefix = '#',
    componentType = 'radiusAxis',
    axisTypeDefault = "'value'",
    hasSplitLineAndArea = true
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "Radial axis",
    defaultZ = 0
) }}

