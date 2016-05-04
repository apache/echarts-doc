{{target: partial-z-zlevel}}

#${prefix|default("#")} zlevel(number) = ${defaultZLevel|default(0)}

${componentName} zlevel value of all graphic elements.

`zlevel`is used to layer Canvas, graphic elements of different `zlevel` values will be placed in different Canvas, layering Canvas is a common optimization technique. We can set configurations of some frequently changed graphic elements(like animations) to a single `zlevel`. Please noted that too much Canvas will increase greater memory overhead, and this needs to be used carefully on mobile phones to avoid bread down.

Canvas with bigger zlevel will be placed in Canvas with smaller zlevel.

#${prefix|default("#")} z(number) = ${defaultZ|default(2)}

${componentName} all graphic elements `z` value of components. Control graphic elements sequence. Graphic elements with smaller `z` value will be overrided by ones with bigger `z` value.

Compared to `zlevel`, `z` has lower priority,and it will not create new Canvas.
