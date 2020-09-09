
{{ target: component-parallel-axis }}

# parallelAxis(Object)

This component is the coordinate axis for parallel coordinate.

{{ use: partial-parallel-introduce() }}

<br>
<br>

{{ use: partial-component-id(
    prefix = "#"
) }}

## dim(number)

Dimension index of coordinate axis.

{{ use: partial-parallel-data-example() }}

`dim` defines which dimension (which *row*) of data would map to this axis.

Started from `0`. For example, if the `dim` of coordinate axis is `1`, it indicates that the second row of data would map to this axis.

## parallelIndex(number) = 0

It is used to define which *coordinate* the *axis* should map to.

For example:

```javascript
myChart.setOption({
    parallel: [
        {...},                      // the first parallel coordinate
        {...}                       // the second parallel coordinate
    ],
    parallelAxis: [
        {parallelIndex: 1, ...},    // the first coordinate axis, mapping to the second parallel coordinate
        {parallelIndex: 0, ...},    //  the second coordinate axis, mapping to the first parallel coordinate
        {parallelIndex: 1, ...},    //  the third coordinate axis, mapping to the second parallel coordinate
        {parallelIndex: 0, ...}     //  the fourth coordinate axis, mapping to the first parallel coordinate
    ],
    ...
});
```

If there is only one parallel coordinate, you don't have to configure it, whose default value is `0`.

## realtime(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to refresh view when brush-selecting axis. If is set to be `false`, view is updated after brush-selecting action ends.

When data amount is large, it is suggested to set to be `false` to avoid efficiency problems.

## areaSelectStyle(Object)

Area selecting is available on axes. Here is some configurations.

<br>

### width(number) = 20

<ExampleUIControlNumber min="0" default="20" step="1" />

Width of selecting box.

### borderWidth(number) = 1

<ExampleUIControlNumber min="0" default="1" step="0.5" />

Border width of the select box.

### borderColor(Color) = 'rgba(160,197,232)'

<ExampleUIControlColor default="rgba(160,197,232)" />

Border color of the select box.

### color(Color) = 'rgba(160,197,232)'

<ExampleUIControlColor default="rgba(160,197,232)" />

Border fill color of the select box.

### opacity(number) = 0.3

<ExampleUIControlNumber min="0" max="1" default="0.3" />

Opacity of the select box.

{{ use: axis-common(
    prefix = '#',
    componentType = 'parallelAxis',
    noAxisPointer = true
) }}

