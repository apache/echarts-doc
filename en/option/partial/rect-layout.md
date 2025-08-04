
{{ target: partial-rect-layout }}

{{ if: ${hostName} }}
{{ var: hostNameStr = ${hostName} }}
{{ else }}
{{ var: hostNameStr = ${componentName} + ' component' }}
{{ /if }}

{{ if: !${noZ} }}
{{ use: partial-z-zlevel(
    prefix = ${prefix},
    defaultZLevel = ${defaultZLevel},
    defaultZ = ${defaultZ}
) }}
{{ /if }}

#${prefix|default("#")} left(string|number) = ${defaultLeft|default("'auto'")}

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Distance between ${hostNameStr} and the left side of the container.

`left` can be a pixel value like `20`; it can also be a percentage value relative to container width like `'20%'`; and it can also be `'left'`, `'center'`, or `'right'`.

If the `left` value is set to be `'left'`, `'center'`, or `'right'`, then the component will be aligned automatically based on position.

#${prefix|default("#")} top(string|number) = ${defaultTop|default("'auto'")}

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Distance between ${hostNameStr} and the top side of the container.

`top` can be a pixel value like `20`; it can also be a percentage value relative to container width like `'20%'`; and it can also be `'top'`, `'middle'`, or `'bottom'`.

If the `top` value is set to be `'top'`, `'middle'`, or `'bottom'`, then the component will be aligned automatically based on position.

#${prefix|default("#")} right(string|number) = ${defaultRight|default("'auto'")}

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Distance between ${hostNameStr} and the right side of the container.

`right` can be a pixel value like `20`; it can also be a percentage value relative to container width like `'20%'`.

{{ if: !${defaultRight} }}Adaptive by default.{{ /if }}

#${prefix|default("#")} bottom(string|number) = ${defaultBottom|default("'auto'")}

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Distance between ${hostNameStr} and the bottom side of the container.

`bottom` can be a pixel value like `20`; it can also be a percentage value relative to container width like `'20%'`.

{{ if: !${defaultBottom} }}Adaptive by default.{{ /if }}

