{{ target: partial-state-animation }}

#${prefix} duration(number) = ${defaultDuration|default(300)}

<ExampleUIControlNumber min="0" default="${defaultAnimationDuration|default(300)}" step="20" />

状态切换的动画时长，设为 0 则关闭状态动画。

#${prefix} easing(string) = ${defaultEasing|default('cubicOut')}

<ExampleUIControlEnum options="linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut" />

状态切换的动画缓动。