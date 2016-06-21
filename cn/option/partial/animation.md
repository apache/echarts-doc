{{ target: partial-animation}}

#${prefix} animation(boolean) = ${defaultAnimation|default(true)}

是否开启动画，默认开启。


{{ use: partial-animation-init(
    prefix=${prefix},
    galleryEditorPath=${galleryEditorPath},
    defaultAnimationDuration=${defaultAnimationDuration},
    defaultAnimationEasing=${defaultAnimationEasing}
) }}

#${prefix} animationThreshold = ${defaultAnimationThreshold|default(2000)}

是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。


#${prefix} animationDurationUpdate(number) = ${defaultAnimationDurationUpdate|default(300)}

数据更新动画的时长。


#${prefix} animationEasingUpdate(string) = ${defaultAnimationEasingUpdate|default('cubicOut')}

数据更新动画的缓动效果。


#${prefix} animationDelayUpdate(number|Function) = 0

数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。

如下示例：
```js
animationDelayUpdate: function (idx) {
    // 越往后的数据延迟越大
    return idx * 100;
}
```

也可以看[该示例](${galleryEditorPath}bar-animation-delay)

{{ target: partial-animation-init}}

#${prefix} animationDuration(number) = ${defaultAnimationDuration|default(1000)}

初始动画的时长。

#${prefix} animationEasing(string) = ${defaultAnimationEasing|default('cubicOut')}

初始动画的缓动效果。不同的缓动效果可以参考 [缓动示例](${galleryEditorPath}line-easing)。


#${prefix} animationDelay(number|Function) = 0

初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。

如下示例：
```js
animationDelayUpdate: function (idx) {
    // 越往后的数据延迟越大
    return idx * 100;
}
```

也可以看[该示例](${galleryEditorPath}bar-animation-delay)
