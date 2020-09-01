
{{ target: partial-large }}

#${prefix} large(boolean) = ${defaultLarge|default(false)}

<ExampleUIControlBoolean />

是否开启大数据量优化，在数据图形特别多而出现卡顿时候可以开启。

开启后配合 `largeThreshold` 在数据量大于指定阈值的时候对绘制进行优化。

缺点：优化后不能自定义设置单个数据项的样式。

#${prefix} largeThreshold(number) = ${defaultLargeThreshold|default(2000)}

<ExampleUIControlNumber min="1" default="${defaultLargeThreshold|default(2000)}" />

开启绘制优化的阈值。

