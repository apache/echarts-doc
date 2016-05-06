{{target: partial-symbol}}

#${prefix} symbol(string) = ${defaultSymbol}

${name}Labelled graphic.

{{ use: partial-icon }}

#${prefix} symbolSize(number|Array{{ if: ${hasCallback} }}|Function{{ /if}}) = ${defaultSymbolSize}

${name}Label size can set to single number as `10`, or use array to represent height and width, such as `[20, 10]` meaning labelled width is`20`, height is`10`.

{{ if: ${hasCallback} }}
If graphic size of every data needs to be different, you can set to the callback function in the following format: 
```js
(value: Array|number, params: Object) => number|Array
```
Among which the first parameter `value` is the data value in [data](~series-${seriesType}.data). The second parameter `params`is the parameter of other data item.
{{ /if }}

#${prefix} symbolRotate(number)

${name}Rotation angle of the label.Please noted that in `markLine`,when `symbol` is `'arrow'` , one usually ingore that `symbolRotate` will be forced to set to tangent angle. 

#${prefix} symbolOffset(Array) = [0, 0]

${name}Label the offset relative to the original location. By default, label will be centrally placed in corresponding location, but if symbol is custom vector path or picture , there is a chance that symbol would not be wanted to be in the center. Then the configuration item can be used to configure symbol to offset relative to origin center. This can be absolute pixel value or relative percentage.

For example `[0, '50%']`moves half way up, when symbol praphic is bubble, arrow beneath the graphic can be pointed to data point.