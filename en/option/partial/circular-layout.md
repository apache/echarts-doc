{{target: component-circular-layout}}

{{use: partial-z-zlevel}}


## center(Array) = ${defaultCenter|default("['50%', '50%']")}

Center position of ${componentName}, the first of which is the horizontal position, and the second is the vertical position.

Percentage is supported. When set in percentage, the item is relative to the container width, and the second item to the height.

**Example: **
```
// Set to absolute pixel values
center: [400, 300]
// Set to relative percent
center: ['50%', '50%']
```

## radius(${defaultRadiusType|default("Array")}) = ${defaultRadius}

Radius of ${componentName}, the first of which is inner radius, and the second is outer radius.

Percentage is supported. When set in percentage, it's relative to the smaller size between height and width of the container. 
