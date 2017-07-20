{{target:partial-text-style}}

#${prefix} color(Color)=${defaultColor|default('"#fff"')}

${name}文字的颜色。

{{ if: ${hasAlign} }}
#${prefix} align(string)=${defaultAlign}

文字水平对齐方式，默认自动。

可选：
+ `'left'`
+ `'center'`
+ `'right'`
{{ /if }}

{{ if: ${hasBaseline} }}
#${prefix} baseline(string)=${defaultAlign}

文字基线对齐方式，默认自动。

可选：
+ `'top'`
+ `'middle'`
+ `'bottom'`
{{ /if }}

#${prefix} fontStyle(string)='normal'

${name}文字字体的风格

可选：
+ `'normal'`
+ `'italic'`
+ `'oblique'`


#${prefix} fontWeight(string)=${defaultFontWeight|default('normal')}

${name}文字字体的粗细

可选：
+ `'normal'`
+ `'bold'`
+ `'bolder'`
+ `'lighter'`
+ 100 | 200 | 300 | 400...


#${prefix} fontFamily(string)='sans-serif'

${name}文字的字体系列

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#${prefix} fontSize(number)=${defaultFontSize|default(12)}

${name}文字的字体大小