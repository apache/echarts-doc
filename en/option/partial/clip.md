
{{ target: partial-clip }}

#${prefix|default('#')} clip(boolean) = ${defaultClip|default(true)}

<ExampleUIControlBoolean default="${defaultClip|default(true)}" />

{{ use: partial-version(
    version = ${version|default("4.4.0")}
) }}

Whether to clip series shapes overflowing the coordinate system.

The detailed clipping behavior is:

{{ if: ${seriesType} === 'scatter' || ${seriesType} === 'effectScatter' }}
A scatter symbol is removed only if the center is outside the coordinate system. Otherwise, the shape is fully visible, regardless of partial overflow.
{{ elif: ${seriesType} === 'bar' || ${seriesType} === 'pictorialBar' }}
Since `v6.1.0`, overflowing parts of a bar is clipped.
Before `v6.1.0` (exclusive), an element is removed only if it is fully outside the coordinate system. Otherwise, the bar is fully visible, regardless of partial overflow.
This difference is noticeable when `axis.type: 'category', boundaryGap: false` or `axis.type: 'value' | 'time' | 'log'`.
{{ elif: ${seriesType} === 'line' }}
- For the line: Overflowing parts of a line is clipped.
- For data point symbols: A symbol is removed only if the center is outside the coordinate system, otherwise it is fully visible, regardless of partial overflow.
{{ elif: ${seriesType} === 'lines' }}
Overflowing parts of a shape is clipped.
{{ elif: ${seriesType} === 'candlestick' }}
Since `v6.1.0`, overflowing parts of a shape is clipped.
Before `v6.1.0` (exclusive), an element is removed only if the center is outside the coordinate system. Otherwise, the shape is fully visible, regardless of partial overflow.
{{ elif: ${seriesType} === 'boxplot' }}
Overflowing parts of a shape is clipped.
{{ elif: ${seriesType} === 'custom' }}
Overflowing parts of a shape is clipped.
{{ /if }}
