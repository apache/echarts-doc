
{{ target: partial-animation }}

#${prefix} animation(boolean) = true

Whether to enable animation.

#${prefix} animationThreshold(number) = ${defaultAnimationThreshold|default(2000)}

Whether to set graphic number threshold to animation. Animation will be disabled when graphic number is larger than threshold.

{{ use: partial-animation-init(
    prefix = ${prefix},
    defaultAnimationDuration = ${defaultAnimationDuration},
    defaultAnimationEasing = ${defaultAnimationEasing},
    noAnimationDelay = ${noAnimationDelay}
) }}

#${prefix} animationDurationUpdate(number|Function) = ${defaultAnimationDurationUpdate|default(300)}

Time for animation to complete, which supports callback function for different data to have different animation effect:

```js
animationDurationUpdate: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

#${prefix} animationEasingUpdate(string) = ${defaultAnimationEasingUpdate|default('cubicOut')}

Easing method used for animation.

{{ if: !${noAnimationDelay} }}
#${prefix} animationDelayUpdate(number|Function) = 0

Delay before updating animation, which supports callback function for different data to have different animation effects.

For example:
```js
animationDelayUpdate: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

See [this example](${galleryEditorPath}bar-animation-delay) for more information.
{{ /if }}



{{ target: partial-animation-init }}

#${prefix} animationDuration(number|Function) = ${defaultAnimationDuration|default(1000)}

Duration of the first animation, which supports callback function for different data to have different animation effect:

```js
animationDuration: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

#${prefix} animationEasing(string) = ${defaultAnimationEasing|default('cubicOut')}

Easing method used for the first animation. Varied easing effects can be found at [easing effect example](${galleryEditorPath}line-easing).

{{ if: !${noAnimationDelay} }}
#${prefix} animationDelay(number|Function) = 0

Delay before updating the first animation, which supports callback function for different data to have different animation effect.

For example:
```js
animationDelay: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

See [this example](${galleryEditorPath}bar-animation-delay) for more information.
{{ /if }}

