
{{ target: partial-animation }}

#${prefix} animation(boolean) = true

<ExampleUIControlBoolean default="${defaultAnimation|default(true)}" clean="true" />

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

<ExampleUIControlNumber min="0" default="${defaultAnimationDuration|default(1000)}" step="20" />

Time for animation to complete, which supports callback function for different data to have different animation effect:

```ts
animationDurationUpdate: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

#${prefix} animationEasingUpdate(string) = ${defaultAnimationEasingUpdate|default("'cubicOut'")}

<ExampleUIControlEnum options="linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut" />

Easing method used for animation.

{{ if: !${noAnimationDelay} }}
#${prefix} animationDelayUpdate(number|Function) = 0

Delay before updating animation, which supports callback function for different data to have different animation effects.

For example:
```ts
animationDelayUpdate: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

See [this example](${galleryEditorPath}bar-animation-delay) for more information.
{{ /if }}



{{ target: partial-animation-init }}

#${prefix} animationDuration(number|Function) = ${defaultAnimationDuration|default(1000)}

<ExampleUIControlNumber min="0" default="${defaultAnimationDuration|default(1000)}" step="20" clean="true" />

Duration of the first animation, which supports callback function for different data to have different animation effect:

```ts
animationDuration: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

#${prefix} animationEasing(string) = ${defaultAnimationEasing|default("'cubicOut'")}

<ExampleUIControlEnum options="linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut" clean="true" />

Easing method used for the first animation. Varied easing effects can be found at [easing effect example](${galleryEditorPath}line-easing).

{{ if: !${noAnimationDelay} }}
#${prefix} animationDelay(number|Function) = 0

Delay before updating the first animation, which supports callback function for different data to have different animation effect.

For example:
```ts
animationDelay: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

See [this example](${galleryEditorPath}bar-animation-delay) for more information.
{{ /if }}

