{{ target: partial-view-control }}

#${prefix|default('#')} viewControl(Object)

`viewControl`用于鼠标的旋转，缩放等视角控制。

##${prefix|default('#')} autoRotate(boolean) = ${defaultAutoRotate|default(false)}

是否开启视角绕物体的自动旋转查看。

##${prefix|default('#')} damping(number) = ${defaultDamping|default(0.8)}

鼠标进行旋转，缩放等操作时的迟滞因子，在大于 0 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。

##${prefix|default('#')} rotateSensitivity(number) = ${defaultRotateSensitivity|default(1)}

旋转操作的灵敏度，值越大越灵敏。默认为`${defaultRotateSensitivitydefault(1)}`

设置为`0`后无法旋转。

##${prefix|default('#')} zoomSensitivity(number) = ${defaultZoomSensitivity|default(1)}

缩放操作的灵敏度，值越大越灵敏。默认为`${defaultRotateSensitivitydefault(1)}`

设置为`0`后无法缩放。

##${prefix|default('#')} panSensitivity(number) = ${defaultPanSensitivity|default(1)}

平移操作的灵敏度，值越大越灵敏。默认为`${defaultRotateSensitivitydefault(1)}`

设置为`0`后无法平移。

##${prefix|default('#')} autoRotateAfterStill(number) = 3

在鼠标静止操作后恢复自动旋转的时间间隔。在开启 [autoRotate](~${componentType}.viewControl.autoRotate) 后有效。

##${prefix|default('#')} distance(number) = ${defaultDistance|default(150)}

默认视角距离主体的距离，对于 [globe](~globe) 来说是距离地球表面的距离，对于 [grid3D](~grid3D) 和 [geo3D](~geo3D) 等其它组件来说是距离中心原点的距离。

##${prefix|default('#')} minDistance(number) = ${defaultMinDistance|default(40)}

视角通过鼠标控制能拉近到主体的最小距离。

##${prefix|default('#')} maxDistance(number) = ${defaultMaxDistance|default(400)}

视角通过鼠标控制能拉远到主体的最小距离。

##${prefix|default('#')} alpha(number) = ${defaultAlpha|default(0)}

视角绕 x 轴，即上下旋转的角度。配合 [beta](~${componentType}.light.main.beta) 可以控制视角的方向。

如下示意图：

![](~view-alpha-beta.png)

##${prefix|default('#')} beta(number) = ${defaultBeta|default(0)}

视角绕 y 轴，即左右旋转的角度。

##${prefix|default('#')} center(Array) = ${defaultCenter}

视角中心点，旋转也会围绕这个中心点旋转，默认为`[0,0,0]`。

##${prefix|default('#')} minAlpha(number) = ${defaultMinAlpha|default(-90)}

上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。

##${prefix|default('#')} maxAlpha(number) = ${defaultMaxAlpha|default(90)}

上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。

##${prefix|default('#')} minBeta(number) = ${defaultMinBeta|default(-Infinity)}

左右旋转的最小 beta 值。即视角能旋转到达最左的角度。

##${prefix|default('#')} maxBeta(number) = ${defaultMaxBeta|default(Infinity)}

左右旋转的最大 beta 值。即视角能旋转到达最右的角度。

{{ use: partial-animation(
    prefix="##",
    defaultAnimationEasingUpdate="cubicInOut",
    defaultAnimationDurationUpdate=1000
) }}
