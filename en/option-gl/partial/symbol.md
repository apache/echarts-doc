{{ target: partial-symbol }}

#${prefix|default('#')} symbol(string) = 'circle'
The shape of the scatter. The default is a circle.

{{ use: partial-icon }}

#${prefix|default('#')} symbolSize(number|Array|Function) = ${defaultSymbolSize|default(10)}

${name} symbol size. It can be set to single numbers like `10`, or use an array to represent width and height. For example, `[20, 10]` means symbol width is `20`, and height is`10`.

If size of symbols needs to be different, you can set with callback function in the following format:

```ts
(value: Array|number, params: Object) => number|Array
```
The first parameter `value` is the value in [data](~series-${seriesType}.data), and the second parameter `params` is the rest parameters of data item.
