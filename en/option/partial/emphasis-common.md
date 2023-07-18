
{{ target: partial-emphasis-disabled }}

#${prefix} disabled(boolean)

<ExampleUIControlBoolean default="false" />

{{ use: partial-version(
    version = "5.3.0"
) }}

Whether to disable the emphasis state.

When emphasis state is disabled. There will be no highlight effect when the mouse hovered the element, tooltip is triggered, or the legend is hovered. It can be used to improve interaction fluency when there are massive graphic elements.



{{ target: partial-focus-blur-scope }}

### focus(string) = 'none'

{{ if: ${isGeoCoordSys} }}
{{ use: partial-version(
    version = "5.1.0"
) }}
{{ else }}
{{ use: partial-version(
    version = "5.0.0"
) }}
{{ /if }}

When the data is highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

+ `'none'` Do not fade out other data, it's by default.
+ `'self'` Only focus (not fade out) the element of the currently highlighted data.

{{ if: !${isGeoCoordSys} }}
+ `'series'` Focus on all elements of the series which the currently highlighted data belongs to.
{{ /if }}

{{ if: ${isGraph} }}
+ `'adjacency'` Focus on the elements of adjacent nodes and edges in the graph.

{{ elif: ${isTree} }}
+ `'ancestor'` Focus on all ancestor nodes.
+ `'descendant'` Focus on all descendants nodes.
{{ /if }}
{{ if: ${hasRelative} }}
+ `'relative'` Focus on all ancestor and descendants nodes. (Since `v${relativeVersion}`)
{{ /if }}
{{ if: ${hasTrajectory} }}
+ `'trajectory'` Focus on all the elements connected to the node or edge in the graph. (Since `v${trajectoryVersion}`)
{{ /if }}

**Example: **

{{ if: !${isGeoCoordSys} }}
```ts
emphasis: {
    focus: 'series',
    blurScope: 'coordinateSystem'
}
```

~[600x400](${galleryViewPath}bar-y-category-stack&reset=1&edit=1)
{{ else }}
```ts
emphasis: {
    focus: 'self'
}
```

~[600x400](${galleryViewPath}geo-organ&reset=1&edit=1)
{{ /if }}

{{ if: !${isGeoCoordSys} }}
### blurScope(string) = 'coordinateSystem'

{{ use: partial-version(
    version = "5.0.0"
) }}

The range of fade out when `focus` is enabled. Support the following configurations

+ `'coordinateSystem'`
+ `'series'`
+ `'global'`
{{ /if }}

