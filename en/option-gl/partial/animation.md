{{ target: partial-animation}}

#${prefix|default('#')} animation(boolean) = ${defaultAnimation|default(true)}

Whether to enable animation.

#${prefix|default('#')} animationDurationUpdate(number) = ${defaultAnimationDurationUpdate|default(500)}

The duration time for update the transition animation.

#${prefix|default('#')} animationEasingUpdate(string) = ${defaultAnimationEasingUpdate|default('cubicOut')}

The easing effect for update transition animation.

{{ if: ${animationDelay} }}
#${prefix|default('#')} animationDelayUpdate(number) = 0

The delayed to update the transition animation, which supports callback function for different data to have different animation effects.

Example：
```ts
animationDelayUpdate: function (idx) {
    // The more backward the data, the greater the delay of the animation
    return idx * 100;
}
```

{{ /if }}