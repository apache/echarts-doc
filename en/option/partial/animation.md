{{ target: partial-animation}}

#${prefix} animation(boolean) = true

Whether to start animation,enabled by default.


{{ use: partial-animation-init(
    prefix=${prefix},
    defaultAnimationDuration=${defaultAnimationDuration},
    defaultAnimationEasing=${defaultAnimationEasing}
) }}


#${prefix} animationDurationUpdate(number) = ${defaultAnimationDurationUpdate|default(300)}

Data update animation duration.


#${prefix} animationEasingUpdate(string) = ${defaultAnimationEasingUpdate|default('cubicOut')}

Data update animation easing effects.




{{ target: partial-animation-init}}

#${prefix} animationDuration(number) = ${defaultAnimationDuration|default(1000)}

The initial length of the animation.

#${prefix} animationEasing(string) = ${defaultAnimationEasing|default('cubicOut')}

Easing effect of initial animation.Different easing effects can refer to [easing effect](${galleryViewPath}line-easing). 

