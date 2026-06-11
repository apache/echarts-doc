
{{ target: partial-padding }}

<ExampleUIControlVector min="0" dims="T,R,B,L"  />

The spacing around the ${componentName} content, specified in pixels (`px`). The default value for each side is `${defaultPadding|default(5)}`. Supports a single value, a 2-value array, or a 4-value array to configure each side.

Examples:
```ts
// Applies to all four sides
padding: 5
// [vertical, horizontal] -> top/bottom: 5, left/right: 10
padding: [5, 10]
// Clockwise order: [top, right, bottom, left]
padding: [
    5,  // top
    10, // right
    5,  // bottom
    10, // left
]
```

