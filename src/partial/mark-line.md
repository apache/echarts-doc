{{ target: partial-mark-line }}

#${prefix} markLine
图表标线。

##${prefix} label(Object)
标线文本。
###${prefix} normal(Object)
{{ use: mark-line-label(
    prefix=${prefix} + '###'
) }}
###${prefix} emphasis(Object)
{{ use: mark-line-label(
    prefix=${prefix} + '###'
) }}

##${prefix} lineStyle(Object)
###${prefix} normal(Object)
{{ use: partial-line-style(
    prefix="###" + ${prefix},
    defaultColor='自适应',
    defaultLineType='dashed',
    hasCurveness=true
) }}
###${prefix} emphasis(Object)
{{ use: partial-line-style(
    prefix="###" + ${prefix}
) }}

##${prefix} data

###${prefix} label
####${prefix} normal
{{ use: mark-line-label(
    prefix=${prefix} + '####'
) }}
####${prefix} emphasis
{{ use: mark-line-label(
    prefix=${prefix} + '####'
) }}

{{ use: partial-animation(
    prefix="#" + ${prefix}
) }}


{{ target: mark-line-label }}
#${prefix} show(boolean) = ${defaultShowLabel|default(true)}
是否显示标签。
#${prefix} position(string) = 'end'
标签位置，可选：
+ `'start'` 线的起始点。
+ `'end'`   线的结束点。
#${prefix} formatter(string|Function)
{{ use: partial-1d-data-label-formatter }}