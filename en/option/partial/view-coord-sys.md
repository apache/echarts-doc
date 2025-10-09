{{ target: partial-view-coord-sys-common }}

{{ if: ${componentMainType} && ${componentSubType} }}
{{ var: componentNameInLink = ${componentMainType} + '-' + ${componentSubType} }}
{{ else }}
{{ var: componentNameInLink = ${componentMainType} }}
{{ /if }}

{{ if: ${componentNameInLink} === 'geo'
    || ${componentNameInLink} === 'series-map'
}}
{{ var: isGeoOrMap = true }}
{{ var: sourceName = "source map" }}
{{ else }}
{{ var: sourceName = "graphic elements" }}
{{ /if }}


#${prefix} center(Array)

{{ if: ${componentNameInLink} === 'series-graph' || ${componentNameInLink} === 'series-sankey' }}
<ExampleUIControlPercentVector default="50%,50%" dims="center[0],center[1]" />
{{ /if }}

`center` specifies which point on the ${sourceName} should be placed at the center of the viewport (i.e., typically, the center of the canvas).

`center` is typically used in control or fetch the position of ${sourceName} when [roamming](~${componentNameInLink}.roam) is performed. When roaming, the values in `center` and [zoom](~${componentNameInLink}.zoom) will be modified correspondingly.

Notice: the values in `center` are based on the original layout coordinates, rather than the viewport (canvas) coordinates. If you intend to adjust the position and size of ${sourceName} by viewport coordinates, use [${componentNameInLink}.left](~${componentNameInLink}.left) / [.right](~${componentNameInLink}.right) / [.top](~${componentNameInLink}.top) / [.bottom](~${componentNameInLink}.bottom) / [.width](~${componentNameInLink}.width) / [.height](~${componentNameInLink}.height) {{ if: ${isGeoOrMap} }} or [${componentNameInLink}.layoutCenter](~${componentNameInLink}.layoutCenter) / [layoutSize](~${componentNameInLink}.layoutSize){{ /if }}.

{{ if: ${isGeoOrMap} }}
`center` is in longitude and latitude by default. Use the projected coordinates if [proejction](~${componentNameInLink}.projection) is set.

Example:

```ts
// Place this [lng, lat] at the center of the viewport (canvas).
center: [115.97, 29.71]
```

```ts
projection: {
    projection: (pt) => project(pt)
},
center: project([115.97, 29.71])
```
{{ elif: ${componentNameInLink} === 'series-graph' }}
If using absolute numbers in `center`:
- If [${componentNameInLink}.layout](~${componentNameInLink}.layout) is `'none'`, you need to provide coordinates for each node explicitly in [${componentNameInLink}.data.x](~${componentNameInLink}.data.x), [${componentNameInLink}.data.y](~${componentNameInLink}.data.y). In this case, `center` can be absolute numbers as that kind of coordinates. For example,
    ```ts
    option = {
        series: {
            type: 'graph',
            center: [0, 10],
            data: [
                {x: 100, y: 3000},
                {x: 150, y: 3500},
                {x: 200, y: 4000},
            ],
        }
    }
    // The bounding rect of the graph is determined by series.data.x/series.data.y:
    //    minX: 100, maxX: 200,
    //    minY: 3000, maxY: 4000,
    // `center: [0, 10]` indicates that the point `[0, 10]` should be placed in
    //  the center of the viewport (typically, canvas).
    // Consequently, the graph will be displayed at the right side of the viewport,
    //  and probably overflow.
    ```
- Otherwise, when specifying an auto-layout strategy in [${componentNameInLink}.layout](~${componentNameInLink}.layout), the coordinates are not user-determinable, so using absolute numbers in `center` is unfeasible.
{{ else }}
Using absolute numbers in `center` is unfeasible, as the absolute numbers typically represent the original coordinates, which is calculated by auto-layout strategy and is not user-determinable.
{{ /if }}

A percentage string can also be used in `center`, like `'30%'`, based on the bounding rect{{ if: ${isGeoOrMap} }}(determined min/max latitude/longitude, or min/max projected coordinates if [proejction](~${componentNameInLink}.projection) is set){{ /if }}. You can use `'0%'` to place the top or left of bounding rect to the center of the viewport (typically, canvas), or use `'100%'` to place the right or bottom to the center of the viewport, or use `'50%'` to place the entire ${sourceName} at the the center of the viewport.
For example:
```ts
center: [115, '30%']
// Place the top of ${sourceName} to the center of the viewport (canvas)
center: [115, '0%']
// Place the left of ${sourceName} to the center of the viewport (canvas)
center: ['0%', 13]
// Place the bottom of ${sourceName} to the center of the viewport (canvas)
center: [115, '100%']
// Place the right of ${sourceName} to the center of the viewport (canvas)
center: ['100%', 13]
// Place ${sourceName} at center of the viewport (canvas)
center: ['50%', '50%']
```

> The percentage string is introduced since `v5.3.3`. It is initially based on canvas width/height. But that is not reasonable, and then changed to be based on the bounding rect since `v6.0.0`.

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix} zoom(number) = 1

{{ if: ${componentNameInLink} === 'series-graph' || ${componentNameInLink} === 'series-sankey' }}
<ExampleUIControlNumber default="1" min="0" step="0.1" />
{{ /if }}

Zoom rate of current viewport.

{{ use: partial-zoom-value-desc() }}

When [roaming](~${componentNameInLink}.roam), the values in [center](~${componentNameInLink}.center) and `zoom` will be modified correspondingly.

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix} scaleLimit(Object)

{{ use: partial-scale-limit-desc(
    prefix = "#" + ${prefix},
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix} roam(boolean|string) = false

{{ use: partial-roam-desc() }}

When roaming, the values in [center](~${componentNameInLink}.center) and [zoom](~${componentNameInLink}.zoom) will be modified correspondingly.

#${prefix} roamTrigger(string) = ${roamTriggerDefault|default("'selfRect'")}

{{ use: partial-version(version = "6.0.0") }}

[Roaming](~${componentNameInLink}.roam) can be triggered by mouse dragging or mouse wheel.

Options:
- `'selfRect'`:

    The roaming can only be triggered on the bounding rect of the graphic elements.

- `'global'`:

    {{ if: ${supportClip} }}If `clip: true`, the roaming can only be triggered at any position within the clipped area. Otherwise it can be triggered in canvas globally.{{ else }}The roaming can be triggered in canvas globally.{{ /if }}

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}



{{ target: partial-preserve-aspect }}

#${prefix} preserveAspect(boolean|string) = ${preserveAspectDefault|default(false)}

{{ if: ${componentNameInLink} === 'geo' || ${componentNameInLink} === 'series-map' }}
{{ var: isGeoOrMap = true }}
{{ /if }}

<ExampleUIControlBoolean default="false" />

{{ use: partial-version(version = "6.0.0") }}

`aspect ratio` here refers to `width / height`.

"preserve aspect" refers whether to preserve the `aspect ratio` of the original bounding rect of the content to be rendered.

{{ use: partial-view-coord-sys-allocated-rect-desc(
    componentNameReadable = ${componentNameReadable},
    componentNameInLink = ${componentNameInLink},
    isGeoOrMap = ${isGeoOrMap}
) }}

But the `aspect ratio` of this rectangle may not match that of the content's original bounding rect, which may cause distortion.

Options of `preserveAspect`:
- `null`/`undefined`/`false` (default): The original `aspect ratio` of the content will not be preserved, but stretched to fill the `${componentNameReadable} rectangular area`, which may cause distortion.
- `'contain'`/`true`: The original `aspect ratio` of the content is preserved; the bounding rect of the content are fully contained by the `${componentNameReadable} rectangular area`, and scaled up as much as possible to meet the `${componentNameReadable} rectangular area`. [preserveAspectAlign](~${componentNameInLink}.preserveAspectAlign) and [preserveAspectVerticalAlign](~${componentNameInLink}.preserveAspectVerticalAlign) can be used to adjust the position in this case.
- `'cover'`: The original `aspect ratio` of the content is preserved; the bounding rect of the content covers the `${componentNameReadable} rectangular area`, and scaled down as much as possible to meet the `${componentNameReadable} rectangular area`. [preserveAspectAlign](~${componentNameInLink}.preserveAspectAlign) and [preserveAspectVerticalAlign](~${componentNameInLink}.preserveAspectVerticalAlign) can be used to adjust the position in this case.

{{ if: ${isGeoOrMap} }}
Notice: When using [layoutCenter](~${componentNameInLink}.layoutCenter) and [layoutSize](~${componentNameInLink}.layoutSize), the `aspect radio` is always preserved, regardless of this `preserveAspect`.
{{ /if }}

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix} preserveAspectAlign(string) = 'center'

<ExampleUIControlEnum options="left,right,center" default="center" />

{{ use: partial-version(version = "6.0.0") }}

Options: `'left'` | `'right'` | `'center'`.

See [preserveAspect](~${componentNameInLink}.preserveAspect).

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix} preserveAspectVerticalAlign(string) = 'middle'

<ExampleUIControlEnum options="top,bottom,middle" default="middle" />

{{ use: partial-version(version = "6.0.0") }}

Options: `'top'` | `'bottom'` | `'middle'`.

See [preserveAspect](~${componentNameInLink}.preserveAspect).

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}



{{ target: partial-view-coord-sys-indicator-example-link }}

{{ if: ${componentNameInLink} === 'geo' || ${componentNameInLink} === 'series-map' }}
**See [geo roam indicator example](${galleryEditorPath}doc-example/geo-roam-indicator&edit=1&reset=1)** to understand the concept.
{{ elif: ${componentNameInLink} === 'series-graph' }}
**See [graph roam indicator example](${galleryEditorPath}doc-example/graph-roam-indicator&edit=1&reset=1)** to understand the concept.
{{ /if }}



{{ target: partial-view-coord-sys-allocated-rect-desc }}

A `rectangular area` allocated to `${componentNameReadable}` is determined by [${componentNameInLink}.left](~${componentNameInLink}.left) / [.right](~${componentNameInLink}.right) / [.top](~${componentNameInLink}.top) / [.bottom](~${componentNameInLink}.bottom) / [.width](~${componentNameInLink}.width) / [.height](~${componentNameInLink}.height){{ if: ${isGeoOrMap} }} / [.aspectScale](~${componentNameInLink}.aspectScale){{ /if }}.