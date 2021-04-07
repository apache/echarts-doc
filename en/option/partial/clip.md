
{{ target: partial-clip }}

#${prefix|default('#')} clip(boolean) = ${defaultClip|default(true)}

<ExampleUIControlBoolean default="${defaultClip|default(true)}" />

{{ use: partial-version(
    version = ${version|default("4.4.0")}
) }}

If clip the overflow on the coordinate system. Clip results varies between series:

+ Scatter/EffectScatter：Ignore the symbols exceeds the coordinate system. Not clip the elements.
+ Bar：Clip all the overflowed. With bar width kept.
+ Line：Clip the overflowed line.
+ Lines: Clip all the overflowed.
+ Candlestick: Ignore the elements exceeds the coordinate system.
+ Custom: Clip all the olverflowed.

All these series have default value `true` except custom series. Set it to `false` if you don't want to clip.

