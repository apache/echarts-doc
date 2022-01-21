{{ target: partial-animation}}

#${prefix|default('#')} animation(boolean) = ${defaultAnimation|default(true)}

是否开启动画。

#${prefix|default('#')} animationDurationUpdate(number) = ${defaultAnimationDurationUpdate|default(500)}

过渡动画的时长。


#${prefix|default('#')} animationEasingUpdate(string) = ${defaultAnimationEasingUpdate|default('cubicOut')}

过渡动画的缓动效果。

{{ if: ${animationDelay} }}
#${prefix|default('#')} animationDelayUpdate(number) = 0

过渡动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。

如下示例：
```ts
animationDelayUpdate: function (idx) {
    // 越往后的数据,动画的延迟越大
    return idx * 100;
}
```

{{ /if }}