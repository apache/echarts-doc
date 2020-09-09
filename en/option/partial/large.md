
{{ target: partial-large }}

#${prefix} large(boolean) = ${defaultLarge|default(false)}

<ExampleUIControlBoolean />

Whether to enable the optimization of large-scale data. It could be set when large data causes performance problem.

After being enabled, `largeThreshold` can be used to indicate the minimum number for turning on the optimization.

But when the optimization enabled, the style of single data item can't be customized any more.

#${prefix} largeThreshold(number) = ${defaultLargeThreshold|default(2000)}

<ExampleUIControlNumber min="1" default="${defaultLargeThreshold|default(2000)}" />

The threshold enabling the drawing optimization.

