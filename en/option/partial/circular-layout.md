
{{ target: component-circular-layout }}

{{ use: partial-z-zlevel() }}

## center(Array) = ${defaultCenter|default("['50%', '50%']")}

<ExampleUIControlPercentVector dims="x,y" />

Center position of ${componentName}, the first of which is the horizontal position, and the second is the vertical position.

Percentage is supported. When set in percentage, the item is relative to the container width, and the second item to the height.

**Example: **
```
// Set to absolute pixel values
center: [400, 300]
// Set to relative percent
center: ['50%', '50%']
```

## radius(number|string|Array) = ${defaultRadius}

<ExampleUIControlPercentVector dims="inner,outer" default="0%, 75%" />

Radius of ${componentName}. Value can be:

+ `number`: Specify outside radius directly.
+ `string`: For example, `'20%'`, means that the outside radius is 20% of the viewport size (the little one between width and height of the chart container).

{{ if: !${disableArray} }}
+ `Array.<number|string>`: The first item specifies the inside radius, and the second item specifies the outside radius. Each item follows the definitions above.
{{ /if }}

