{{target: component-circular-layout}}

{{use: partial-z-zlevel}}


## center(Array) = ${defaultCenter|default("['50%', '50%']")}

The center coordinates of ${componentName}, the first item of array is the abscissa, the second item is ordinate.

Support set to percentage, the first item when setting to percentage is the width relative to the container, the second item is the height.

**Example: **
```
// Set to absolute pixel values
center: [400, 300]
// Set to relative percent
center: ['50%', '50%']
```

## radius(${defaultRadiusType|default("Array")}) = ${defaultRadius}

the radius of ${componentName}, the first item of array is inner radius,the second item is outer radius.

Support set to percentage, equal to half of the smaller item between height and width of the container. 
