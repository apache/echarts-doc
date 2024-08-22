
{{ target: component-angle-axis }}

# angleAxis(Object)

The angle axis in Polar Coordinate.

{{ use: partial-component-id(
    prefix = "#"
) }}

## polarIndex(number) = 0

The index of angle axis in Polar Coordinate. The first axis is used by default.

## startAngle(number) = 90

<ExampleUIControlAngle default="90" min="-360" max="360" step="1" />

Starting angle of axis. 90 degrees by default, standing for top position of center. 0 degree stands for right position of center.

The following shows an example with `startAngle` of 45 deg.

~[400x400](${galleryViewPath}doc-example/polar-start-angle&edit=1&reset=1)

## endAngle(number) = null

<ExampleUIControlAngle default="null" min="-360" max="360" step="1" />

{{ use: partial-version(version = '5.5.0') }}

Ending angle of axis. `null` by default, standing for a whole circle.

The following shows an example with `endAngle` of -180 deg.

~[400x400](${galleryViewPath}doc-example/polar-end-angle&edit=1&reset=1)

## clockwise(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether the positive position of axis is clockwise. True for clockwise by default.

The following shows an example with clockwise as `false`.

~[400x400](${galleryViewPath}doc-example/polar-anticlockwise&edit=1&reset=1)

{{ use: axis-common(
    prefix = '#',
    componentType = 'angleAxis',
    axisTypeDefault = "'category'",
    hasSplitLineAndArea = true
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "Angle Axis",
    defaultZ = 0
) }}

