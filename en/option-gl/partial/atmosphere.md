{{ target: partial-atmosphere }}

#${prefix|default('#')} atmosphere(Object)

`atmosphere`is used for settings related to the outer atmosphere of the earth。


##${prefix|default('#')} show(boolean) = ${defaultShow|default(false)}

Whether to display the outer atmosphere, not displayed by default.


##${prefix|default('#')} offset(number) = ${defaultOffset}

The offset of the outer atmosphere from the default position.


##${prefix|default("#")} color(string) = ${defaultColor|default('#fff')}

The color of the outer atmosphere.

##${prefix|default('#')} glowPower(number) = ${defaultGlowPower|default(6.0)}

The outer atmosphere luminous power.

##${prefix|default('#')} innerGlowPower(number) = ${defaultInnerGlowPower|default(2.0)}

Luminous power in the outer atmosphere.