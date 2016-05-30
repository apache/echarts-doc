
{{target: component-angle-axis}}

# angleAxis(Object)

The angle Axis of Polar coordinate.

## polarIndex(number) = 0

The polarIndex of angle Axis defaults to use the first Polar coordinate.

## startAngle(number) = 90

The default angle of the start of scale is 90 degrees, directly above the circle center.  0 degeree refers to the directly right to the circle center.

As the startAngle(number) = 45, the result is shown in following: 


~[400x400](${galleryViewPath}doc-example/polar-start-angle&edit=1&reset=1)

## clockwise(boolean) = true

whether the scale clockwise increases, it defaults to increase clockwise.

As clockwise(boolean) = false, the result is shown as the following example:


~[400x400](${galleryViewPath}doc-example/polar-anticlockwise&edit=1&reset=1)

{{ use: axis-common(
    prefix='#',
    componentType='angleAxis',
    axisTypeDefault="'category'",
    hasSplitLineAndArea=true
)}}
