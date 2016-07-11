{{ target: partial-animation}}

#${prefix} animation(boolean) = true

Whether to enable animation; true by default.


#${prefix} animationThreshold = ${defaultAnimationThreshold|default(2000)}

Whether to set graphic number threshold to animation. Animation will be disabled when graphic number is larger than threshold.


{{ use: partial-animation-init(
    prefix=${prefix},
    defaultAnimationDuration=${defaultAnimationDuration},
    defaultAnimationEasing=${defaultAnimationEasing}
) }}


#${prefix} animationDurationUpdate(number) = ${defaultAnimationDurationUpdate|default(300)}

Time for animation to complete.


#${prefix} animationEasingUpdate(string) = ${defaultAnimationEasingUpdate|default('cubicOut')}

Easing method used for animation.


#${prefix} animationDelayUpdate(number|Function) = 0

Delay before updating animation, which supports callback function for different data to have different animation effect.

For example:
```js
animationDelayUpdate: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

See [this example](${galleryEditorPath}bar-animation-delay) for more information.

{{ target: partial-animation-init}}

#${prefix} animationDuration(number) = ${defaultAnimationDuration|default(1000)}

Duration of the first animation.

#${prefix} animationEasing(string) = ${defaultAnimationEasing|default('cubicOut')}

Easing method used for the first animation. Varied easing effects can be found at [easing effect example](${galleryViewPath}line-easing). 


#${prefix} animationDelay(number|Function) = 0

Delay before updating the first animation, which supports callback function for different data to have different animation effect.

For example:
```js
animationDelayUpdate: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

See [this example](${galleryEditorPath}bar-animation-delay) for more information.
