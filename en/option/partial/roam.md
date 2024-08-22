
{{ target: partial-roam }}

<ExampleUIControlEnum options="true,false,scale,move" />

Whether to enable mouse zooming and translating. `false` by default. If either zooming or translating is wanted, it can be set to `'scale'` or `'move'`. Otherwise, set it to be `true` to enable both.



{{ target: partial-scale-limit }}

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

Limit of scaling, with `min` and `max`.

#${prefix} min(number)

Minimum scaling

#${prefix} max(number)

Maximum scaling

