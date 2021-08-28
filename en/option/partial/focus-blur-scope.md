
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

**Example: **

{{ if: !${isGeoCoordSys} }}
```js
emphasis: {
    focus: 'series',
    blurScope: 'coordinateSystem'
}
```

~[600x400](${galleryViewPath}bar-y-category-stack&reset=1&edit=1)
{{ else }}
```js
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

