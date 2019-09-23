{{target: partial-symbol}}

#${prefix} symbol(string{{ if: ${hasCallback} }}|Function{{ /if}}) = ${defaultSymbol}

Symbol of ${name}.

{{ use: partial-icon }}

{{ if: ${hasCallback} }}
If symbols needs to be different, you can set with callback function in the following format:
```js
(value: Array|number, params: Object) => string
```
The first parameter `value` is the value in [data](~series-${seriesType}.data), and the second parameter `params` is the rest parameters of data item.
{{ /if }}


#${prefix} symbolSize(number|Array{{ if: ${hasCallback} }}|Function{{ /if}}) = ${defaultSymbolSize}

${name} symbol size. It can be set to single numbers like `10`, or use an array to represent width and height. For example, `[20, 10]` means symbol width is `20`, and height is`10`.

{{ if: ${hasCallback} }}
If size of symbols needs to be different, you can set with callback function in the following format:
```js
(value: Array|number, params: Object) => number|Array
```
The first parameter `value` is the value in [data](~series-${seriesType}.data), and the second parameter `params` is the rest parameters of data item.
{{ /if }}

#${prefix} symbolRotate(number)

Rotate degree of ${name} symbol. Note that when `symbol` is set to be `'arrow'` in `markLine`, `symbolRotate` value will be ignored, and compulsively use tangent angle.

#${prefix} symbolKeepAspect(boolean) = false

Whether to keep aspect for symbols in the form of `path://`.

#${prefix} symbolOffset(Array) = [0, 0]

Offset of ${name} symbol relative to original position. By default, symbol will be put in the center position of data. But if symbol is from user-defined vector path or image, you may not expect symbol to be in center. In this case, you may use this attribute to set offset to default position. It can be in absolute pixel value, or in relative percentage value.

For example, `[0, '50%']` means to move upside side position of symbol height. It can be used to make the arrow in the bottom to be at data position when symbol is pin.
