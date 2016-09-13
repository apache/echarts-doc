
{{target: component-parallel}}

# parallel(Object)

{{ use: partial-parallel-introduce(
    galleryViewPath=${galleryViewPath}
)}}

<br>
<br>

{{ use: partial-rect-layout-width-height(
    componentName='parallel ',
    defaultLeft: 80,
    defaultRight: 80,
    defaultTop: 60,
    defaultBottom: 60
) }}


## layout(string) = 'horizontal'

Layout modes, whose optional values are: 

+ `'horizontal'`: place each axis horizontally.

+ `'vertical'`: place each axis vertically.


## axisExpandable(boolean) = false

{{use: partial-parallel-high-dim (
    galleryViewPath=${galleryViewPath}
)}}

Whether to enable toggling axis on clicking.

## axisExpandCenter(number) = null

Index of the axis which is used as the center of expanding initially. It doesn't have a default value, and needs to be assigned manually.

Please refer to [parallel.axisExpandable](parallel.axisExpandable) for more information.

## axisExpandCount(number) = 0

Defines how many axes are at expanding state initially. We'd suggest you assign this value manually according to dimensions.

Please refer to [parallel.axisExpandCenter](parallel.axisExpandCenter) and [parallel.axisExpandable](parallel.axisExpandable).

## axisExpandWidth(number) = 50

Distance between two axes when at expanding state, in pixels.

Please refer to [parallel.axisExpandable](parallel.axisExpandable) for more information.


## parallelAxisDefault(Object)

{{use: partial-parallel-axis-default}}

[See the sample](${galleryEditorPath}doc-example/parallel-all&edit=1&reset=1).

<br>

{{ use: axis-common(
    prefix='##',
    componentType='parallelAxis'
) }}
