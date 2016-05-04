{{target: partial-rect-layout}}

{{if: !${noZ} }}
{{ use: partial-z-zlevel(
    prefix=${prefix},
    defaultZLevel=${defaultZLevel},
    defaultZ=${defaultZ}
) }}
{{/if}}

#${prefix|default("#")} left(string|number) = ${defaultLeft|default("'auto'")}

${componentName} distance of component  from the left side of the container.

left value can be specific pixel value like`20` , it can also be relative percentage  to the container width like `'20%'` , and also  `'left'`, `'center'`, `'right'`.

if the left value is`'left'`, `'center'`, `'right'`，component will align automatically based on cooresponding position.

#${prefix|default("#")} top(string|number) = ${defaultTop|default("'auto'")}

${componentName} distance of component  from the upper side of the container.

top value can be specific pixel value like `20` , it can also be relative percentage  to the container height and width like `'20%'`， and also `'top'`, `'middle'`, `'bottom'`.
if the  top value is`'top'`, `'middle'`, `'bottom'`，component will align automatically based on cooresponding position.

#${prefix|default("#")} right(string|number) = ${defaultRight|default("'auto'")}

${componentName} distance of component  from the right side of the container.

right value can be specific pixel value like `20` ,it can also be relative percentage  to the container height and width like `'20%'`.

{{ if: !${defaultRight} }}self-adaptive by default.{{ /if }}

#${prefix|default("#")} bottom(string|number) = ${defaultBottom|default("'auto'")}

${componentName} distance of component  from the down side of the container.

bottom value can be specific pixel value like `20`,it can also be relative percentage  to the container height and width like `'20%'`.

{{ if: !${defaultBottom} }}self-adaptive by default.{{ /if }}
