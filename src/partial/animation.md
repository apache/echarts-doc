{{ target: partial-animation}}

#${prefix} animation(boolean) = true

是否开启动画，默认开启。


{{ use: partial-animation-init(
    prefix=${prefix},
    defaultAnimationDuration=${defaultAnimationDuration},
    defaultAnimationEasing=${defaultAnimationEasing}
) }}


#${prefix} animationDurationUpdate(number) = ${defaultAnimationDurationUpdate|default(300)}

数据更新动画的时长。


#${prefix} animationEasingUpdate(string) = ${defaultAnimationEasingUpdate|default('cubicOut')}

数据更新动画的缓动效果。




{{ target: partial-animation-init}}

#${prefix} animationDuration(number) = ${defaultAnimationDuration|default(1000)}

初始动画的时长。

#${prefix} animationEasing(string) = ${defaultAnimationEasing|default('cubicOut')}

初始动画的缓动效果。不同的缓动效果可以参考 [缓动示例](${galleryViewPath}line-easing)。

