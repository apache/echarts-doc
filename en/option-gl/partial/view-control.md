{{ target: partial-view-control }}

#${prefix|default('#')} viewControl(Object)

`viewControl` is used for mouse rotation, zooming, and other perspective control.


##${prefix|default('#')} projection(string) = ${defaultProjection|default('perspective')}

The way of projection, the default is `'perspective'` projection, also supports setting to `'orthogonal'` projection.


##${prefix|default('#')} autoRotate(boolean) = ${defaultAutoRotate|default(false)}

Whether to enable the angle of view to automatically rotate around the object.

##${prefix|default('#')} autoRotateDirection(string) = ${defaultAutoRotateDirection|default('cw')}

The direction in which the object auto rotates. The default is `'cw'` means clockwise from top to bottom, and can also use  `'ccw'` means counterclockwise from top to bottom.

##${prefix|default('#')} autoRotateSpeed(number) = ${defaultAutoRotateSpeed|default(10)}

The speed at which the object auto rotates. The unit is `angle/second`, the default is `10`, which is a turn of `36` seconds.


##${prefix|default('#')} autoRotateAfterStill(number) = ${defaultAutoRotateAfterStill|default(3)}

The time interval for automatic rotation to resume after the mouse is still. Valid after opening [autoRotate](~${componentType}.viewControl.autoRotate).


##${prefix|default('#')} damping(number) = ${defaultDamping|default(0.8)}

The damping when the mouse is rotated, zoomed, etc.
When it is greater than 0, the angle of view will continue to move (rotate and zoom) due to certain inertia after the mouse is still.



##${prefix|default('#')} rotateSensitivity(number|Array) = ${defaultRotateSensitivity|default(1)}.

The sensitivity of the rotation operation. The greater the value, the more sensitive. Supports the use of arrays to set the horizontal and vertical rotation sensitivity separately.


The default is `${defaultRotateSensitivity | default(1)}`.

Cannot be rotated after setting to `0`.

```ts
// can't rotate
rotateSensitivity: 0
// can only be rotated horizontally
rotateSensitivity: [1, 0]
//  can only rotate vertically
rotateSensitivity: [0, 1]
```

##${prefix|default('#')} zoomSensitivity(number) = ${defaultZoomSensitivity|default(1)}

The sensitivity of the zoom operation, the larger the value, the more sensitive. The default is `${defaultRotateSensitivity | default(1)}`.

Can`t be scaled after setting to `0`.

##${prefix|default('#')} panSensitivity(number) = ${defaultPanSensitivity|default(1)}

The sensitivity of the panning operation, the greater the value, the more sensitive. Supports the use of arrays to set the horizontal and vertical translation sensitivity.

The default is `${defaultRotateSensitivity | default(1)}`.

Cannot pan after setting to `0`.

##${prefix|default('#')} panMouseButton(string) = ${defaultPanMouseButton|default('left')}

The mouse button used for panning operation supports:

+ `'left'` left mouse button (default)

+ `'middle'` middle mouse button

+ `'right'` right mouse button

Note: If set to the right mouse button, the default context menu will be blocked.

##${prefix|default('#')} rotateMouseButton(string) = ${defaultRotateMouseButton|default('middle')}

The mouse button used for the rotation operation supports:

+ `'left'` left mouse button

+ `'middle'` middle mouse button (default)

+ `'right'` right mouse button

Note: If set to the right mouse button, the default context menu will be blocked.

##${prefix|default('#')} distance(number) = ${defaultDistance|default(150)}

The distance of the default perspective from the subject. For [globe](~globe), the distance from the Earth's surface is the distance from the center origin for other components such as [grid3D](~grid3D) and [geo3D](~geo3D). Valid when [projection](~${componentType}.viewControl.projection) is `'perspective'`.

##${prefix|default('#')} minDistance(number) = ${defaultMinDistance|default(40)}

The angle of view is controlled by the mouse to bring the minimum distance to the subject. Valid when [projection](~${componentType}.viewControl.projection) is `'perspective'`.

##${prefix|default('#')} maxDistance(number) = ${defaultMaxDistance|default(400)}

The angle of view can be extended to the maximum distance of the subject by mouse control. Valid when [projection](~${componentType}.viewControl.projection) is `'perspective'`.

##${prefix|default('#')} orthographicSize(number) = ${defaultDistance|default(150)}

The size of the orthogonal projection. Valid when [projection](~${componentType}.viewControl.projection) is `'orthographic'`.


##${prefix|default('#')} maxOrthographicSize(number) = ${defaultMinDistance|default(20)}

The maximum value of the orthogonal projection scaling. Valid when [projection](~${componentType}.viewControl.projection) is `'orthographic'`.

##${prefix|default('#')} minOrthographicSize(number) = ${defaultMaxDistance|default(400)}

The minimum value of the orthogonal projection scaling. Valid when [projection](~${componentType}.viewControl.projection) is `'orthographic'`

##${prefix|default('#')} alpha(number) = ${defaultAlpha|default(0)}

The angle of view is around the x-axis, which is the angle of rotation up and down. With [beta](~${componentType}.light.main.beta) you can control the direction of the perspective.

As shown below：

![](~view-alpha-beta.png)

##${prefix|default('#')} beta(number) = ${defaultBeta|default(0)}

The angle of view is around the y-axis, which is the angle of rotation from left to right.

##${prefix|default('#')} center(Array) = ${defaultCenter}

At the center of the angle of view, the rotation will also rotate around this center point. The default is `[0,0,0]`.

##${prefix|default('#')} minAlpha(number) = ${defaultMinAlpha|default(-90)}

The minimum alpha value to rotate up and down. That is, the angle of view can be rotated to reach the uppermost angle.

##${prefix|default('#')} maxAlpha(number) = ${defaultMaxAlpha|default(90)}

The maximum alpha value to rotate up and down. That is, the angle of view can be rotated to the lowest angle.

##${prefix|default('#')} minBeta(number) = ${defaultMinBeta|default(-Infinity)}

The minimum beta value to rotate left and right. That is, the angle of view can be rotated to the leftmost angle.

##${prefix|default('#')} maxBeta(number) = ${defaultMaxBeta|default(Infinity)}

The maximum beta value to rotate left and right rotation. That is, the angle of view can be rotated to the rightmost angle.

{{ use: partial-animation(
    prefix="##",
    defaultAnimationEasingUpdate="cubicInOut",
    defaultAnimationDurationUpdate=1000
) }}
