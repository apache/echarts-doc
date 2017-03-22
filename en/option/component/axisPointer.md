
{{target: component-axisPointer}}

This is the global configurations of axisPointer.


---

{{ use: partial-axisPointer-introduction(galleryViewPath=${galleryViewPath}) }}

---


## show{boolean} = false

axisPointer will not be displayed by default. But if[tooltip.trigger](~tooltip.trigger) is set as `'axis'` or [tooltip.axisPointer.type](~tooltip.axisPointer.type) is set as  `'cross'`, axisPointer will be displayed automatically. Each coordinate system will automatically chose the axes whose will display its axisPointer. [tooltip.axisPointer.axis](~tooltip.axisPointer.axis) can be used to change the choice.

## link(Array)


## triggerOn(string) = 'mousemove|click'

Conditions to trigger tooltip. Options:

+ `'mousemove'`

    Trigger when mouse moves.

+ `'click'`

    Trigger when mouse clicks.

+ `'mousemove|click'`

    Trigger when mouse clicks and moves.

+ `'none'`

    Do not triggered by `'mousemove'` and `'click'`


