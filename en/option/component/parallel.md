
{{ target: component-parallel }}

# parallel(Object)

{{ use: partial-parallel-introduce() }}

<br>
<br>

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-rect-layout-width-height(
    componentName = 'parallel ',
    defaultLeft = 80,
    defaultRight = 80,
    defaultTop = 60,
    defaultBottom = 60
) }}

## layout(string) = 'horizontal'

<ExampleUIControlEnum options="horizontal,vertical" default="horizontal" />

Layout modes, whose optional values are:

+ `'horizontal'`: place each axis horizontally.

+ `'vertical'`: place each axis vertically.

## axisExpandable(boolean) = false

<ExampleUIControlBoolean />

{{ use: partial-parallel-high-dim() }}

Whether to enable toggling axis on clicking.

## axisExpandCenter(number) = null

<ExampleUIControlNumber min="0" step="1" />

Index of the axis which is used as the center of expanding initially. It doesn't have a default value, and needs to be assigned manually.

Please refer to [parallel.axisExpandable](parallel.axisExpandable) for more information.

## axisExpandCount(number) = 0

<ExampleUIControlNumber min="0" step="1" />

Defines how many axes are at expanding state initially. We'd suggest you assign this value manually according to dimensions.

Please refer to [parallel.axisExpandCenter](parallel.axisExpandCenter) and [parallel.axisExpandable](parallel.axisExpandable).

## axisExpandWidth(number) = 50

<ExampleUIControlNumber min="50" step="1" />

Distance between two axes when at expanding state, in pixels.

Please refer to [parallel.axisExpandable](parallel.axisExpandable) for more information.

## axisExpandTriggerOn(string) = 'click'

<ExampleUIControlEnum options="click,mousemove" />

Optional values:
+ `'click'`: Trigger expanding when mouse clicking.
+ `'mousemove'`: Trigger expanding when mouse hovering.

## parallelAxisDefault(Object)

{{ use: partial-parallel-axis-default() }}

[See the sample](${galleryEditorPath}doc-example/parallel-all&edit=1&reset=1).

<br>

{{ use: axis-common(
    prefix = '##',
    componentType = 'parallelAxis',
    noAxisPointer = true
) }}

