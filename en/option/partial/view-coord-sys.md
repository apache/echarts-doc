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
<ExampleUIControlVector default="0,0" dims="x,y" />
{{ /if }}

`center` specifies which point on the ${sourceName} should be placed at the center of the viewport (i.e., typically, the center of the canvas).

{{ if: ${isGeoOrMap} }}
It is in longitude and latitude by default. Use the projected coordinates if [proejction](~${componentNameInLink}.projection) is set.

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
{{ /if }}

Center can also be a percentage string, like `'30%'`, based on the ${sourceName} bounding rect width/height {{ if: ${isGeoOrMap} }}(by min/max latitude/longitude, or min/max projected coordinates if [proejction](~${componentNameInLink}.projection) is set){{ /if }}. You can use `'0%'` to place the top or left of ${sourceName} to the center of the viewport (canvas), or use `'100%'` to place the right or bottom to the center of the viewport (canvas).
For example:
```ts
center: [115.97, '30%']
// Place the top of ${sourceName} to the center of the viewport (canvas)
center: [115.97, '0%']
// Place the left of ${sourceName} to the center of the viewport (canvas)
center: ['0%', 13]
// Place the bottom of ${sourceName} to the center of the viewport (canvas)
center: [115.97, '100%']
// Place the right of ${sourceName} to the center of the viewport (canvas)
center: ['100%', 13]
```

> The percentage string is introduced since `v5.3.3`. It is initially based on canvas width/height. But that is not reasonable, and then changed to be based on the bounding rect since `v6.0.0`.


#${prefix} zoom(number) = 1

{{ if: ${componentNameInLink} === 'series-graph' || ${componentNameInLink} === 'series-sankey' }}
<ExampleUIControlNumber default="1" min="0" step="0.1" />
{{ /if }}

Zoom rate of current viewport.

#${prefix} scaleLimit(Object)

{{ use: partial-scale-limit(
    prefix = "#" + ${prefix}
) }}

#${prefix} roam(boolean|string) = false

{{ use: partial-roam() }}
