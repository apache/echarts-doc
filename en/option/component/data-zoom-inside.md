
{{ target: component-data-zoom-inside }}

# dataZoom.inside(Object)

**dataZoomInside**

Data zoom component of *inside* type.

Refer to [dataZoom](~dataZoom) for more information.

The *inside* means it's inside the coordinates.

+ Translation: data area can be translated when moving in coordinates.
+ Scaling:
    + PC: when mouse rolls (similar with touch pad) in coordinates.
    + Mobile: when touches and moved with two fingers in coordinates on touch screens.

<br>
<br>

## type(string) = 'inside'

{{ use: partial-component-id(
    prefix = "#"
) }}

## disabled(boolean) = false

<ExampleUIControlBoolean />

Whether disable inside zoom.

{{ use: partial-data-zoom-common(
    dataZoomName = 'dataZoom-inside'
) }}

## zoomOnMouseWheel(boolean|string) = true

<ExampleUIControlEnum options="true,false,shift,ctrl,alt" default="true" />

How to trigger zoom. Optional values:

+ `true`：Mouse wheel triggers zoom.
+ `false`：Mouse wheel can not triggers zoom.
+ `'shift'`：Holding `shift` and mouse wheel triggers zoom.
+ `'ctrl'`：Holding `ctrl` and mouse wheel triggers zoom.
+ `'alt'`：Holding `alt` and mouse wheel triggers zoom.

## zoomOnMouseWheelAxis(string)

<ExampleUIControlEnum options="horizontal,vertical" />

Restricts which mouse wheel direction triggers zoom (set up by [zoomOnMouseWheel](~dataZoom-inside.zoomOnMouseWheel)). For example, when multiple `inside` dataZooms share a coordinate system, the horizontal and vertical wheel directions can drive them independently. Optional values:

+ Not set (default): any wheel direction triggers zoom.
+ `'horizontal'`: only the horizontal mouse wheel (`deltaX`) triggers zoom.
+ `'vertical'`: only the vertical mouse wheel (`deltaY`) triggers zoom.

Touch pinch always triggers zoom regardless of this setting.

## moveOnMouseMove(boolean|string) = true

<ExampleUIControlEnum options="true,false,shift,ctrl,alt" default="true" />

How to trigger data window move. Optional values:

+ `true`：Mouse move triggers data window move.
+ `false`：Mouse move can not triggers data window move.
+ `'shift'`：Holding `shift` and mouse move triggers data window move.
+ `'ctrl'`：Holding `ctrl` and mouse move triggers data window move.
+ `'alt'`：Holding `alt` and mouse move triggers data window move.

## moveOnMouseWheel(boolean|string) = false

<ExampleUIControlEnum options="true,false,shift,ctrl,alt" default="true" />

How to trigger data window move. Optional values:

+ `true`：Mouse wheel triggers data window move.
+ `false`：Mouse wheel can not triggers data window move.
+ `'shift'`：Holding `shift` and mouse wheel triggers data window move.
+ `'ctrl'`：Holding `ctrl` and mouse wheel triggers data window move.
+ `'alt'`：Holding `alt` and mouse wheel triggers data window move.

## moveOnMouseWheelAxis(string)

<ExampleUIControlEnum options="horizontal,vertical" />

Restricts which mouse wheel direction triggers data window move (set up by [moveOnMouseWheel](~dataZoom-inside.moveOnMouseWheel)). For example, when multiple `inside` dataZooms share a coordinate system, the horizontal and vertical wheel directions can drive them independently. Optional values:

+ Not set (default): any wheel direction triggers data window move.
+ `'horizontal'`: only the horizontal mouse wheel (`deltaX`) triggers data window move.
+ `'vertical'`: only the vertical mouse wheel (`deltaY`) triggers data window move.

## preventDefaultMouseMove(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to prevent default behavior of mouse move event.

