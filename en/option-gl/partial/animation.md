{{ target: partial-animation}}

#${prefix|default('#')} animation(boolean) = ${defaultAnimation|default(true)}

Whether to turn on animation.

#${prefix|default('#')} animationDurationUpdate(number) = ${defaultAnimationDurationUpdate|default(500)}

The length of the transition animation.

#${prefix|default('#')} animationEasingUpdate(string) = ${defaultAnimationEasingUpdate|default('cubicOut')}

The easing effect of the transition animation.

{{ if: ${animationDelay} }}
#${prefix|default('#')} animationDelayUpdate(number) = 0

The delay of the transition animation. Support for callback functions. A more dramatic update animation can be achieved by returning different delay times through each data.

如下示例：
```js
animationDelayUpdate: function (idx) {
    return idx * 100;
}
```

{{ /if }}