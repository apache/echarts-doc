{{ target: partial-atmosphere }}

#${prefix|default('#')} atmosphere(Object)

`atmosphere`用于地球外部大气层相关设置。


##${prefix|default('#')} show(boolean) = ${defaultShow|default(false)}

是否显示外部大气层，默认不显示。


##${prefix|default('#')} offset(number) = ${defaultOffset}

外部大气层相对于默认位置的偏移。


##${prefix|default("#")} color(string) = ${defaultColor|default('#fff')}

外部大气层的颜色。

##${prefix|default('#')} glowPower(number) = ${defaultGlowPower|default(6.0)}

外部大气层发光功率。

##${prefix|default('#')} innerGlowPower(number) = ${defaultInnerGlowPower|default(2.0)}

外部大气层内发光功率。