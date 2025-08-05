
{{ target: partial-roam-desc }}

<ExampleUIControlEnum options="true,false,scale,move" />

Whether to enable mouse or touch roam (move and zoom). Optional values are:

+ `false`: roam is disabled.
+ `'scale'` or `'zoom'`: zoom only.
+ `'move'` or `'pan'`: move (translation) only.
+ `true`: both zoom and move (translation) are available.


{{ target: partial-scale-limit-desc }}

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

Limit of [zooming](~${componentNameInLink}.roam), with `min` and `max`.

{{ use: partial-zoom-value-desc }}

#${prefix} min(number)

Minimum zoom

#${prefix} max(number)

Maximum zoom


{{ target: partial-zoom-value-desc }}

The value less than `1` indicates zooming out, while the value greater than `1` indicates zooming in.

