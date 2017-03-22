
{{target: component-axisPointer}}

# axisPointer(Object)

This is the global configurations of axisPointer.


---

{{ use: partial-axisPointer-introduction(galleryViewPath=${galleryViewPath}) }}

---

{{ use: partial-axisPointer-common(
    prefix="#",
    galleryViewPath=${galleryViewPath}
)}}


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
