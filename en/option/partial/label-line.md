
{{ target: partial-label-line-desc }}

{{ use: partial-version(
    version = "5.0.0"
) }}

Configuration of label guide line.



{{ target: partial-label-line }}

#${prefix} show(boolean)

<ExampleUIControlBoolean />

Whether to show the label guide line.

{{ if: ${showAbove} }}
#${prefix} showAbove(boolean)

{{ use: partial-version(
    version = "5.0.0"
) }}

Whether to show the label guide line above the corresponding element.
{{ /if }}

{{ if: ${length} }}
#${prefix} length(number)

<ExampleUIControlNumber default="15" min="0" step="1" />

The length of the first segment of guide line.
{{ /if }}

{{ if: ${length2} }}
#${prefix} length2(number)

<ExampleUIControlNumber default="15" min="0" step="1" />

The length of the second segment of guide line.
{{ /if }}

{{ if: ${smooth} }}
#${prefix} smooth(boolean|number) = false

<ExampleUIControlBoolean />

Whether to smooth the guide line. It defaults to be `false` and can be set as `true` or the values from 0 to 1 which indicating the smoothness.
{{ /if }}

{{ if: ${minTurnAngle} }}
#${prefix} minTurnAngle(number) = ${defaultMinTurnAngle|default(null)}

{{ use: partial-version(
    version = "5.0.0"
) }}

Minimum turn angle between two segments of guide line to prevent unaesthetic display when angle is too small.

Can be 0 - 180 degree.
{{ /if }}

#${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = "#" + ${prefix}
) }}

