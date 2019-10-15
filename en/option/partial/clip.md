{{ target: partial-clip }}

#${prefix|default('#')} clip(boolean) = ${defaultClip|default(true)}

{{ use: partial-version(version='4.4.0') }}

If clip the overflow on the coordinate system. Clip results varies between series:

+ Scatter：Ignore the symbols exceeds the coordinate system. Not clip the graphics.
+ Bar：Clip all the overflowed. With bar width kept.
+ Line：Clip the overflowed line.
+ Lines: Clip all the overflowed.
+ Custom: Clip all the olverflowed.

All these series have default value `true` except custom series. Set it to `false` if you don't want to clip.