{{target:partial-text-style}}

#${prefix} color(Color)=${defaultColor|default('"#fff"')}

${name} text color.

{{ if: ${noAlign} }}
#${prefix} align(string)=${defaultAlign}

Horizontal alignment of text, automatic by default.

Options are:
+ `'left'`
+ `'center'`
+ `'right'`
{{ /if }}

{{ if: ${noVerticalAlign} }}
#${prefix} verticalAlign(string)=${defaultVerticalAlign}

Vertical alignment of text, automatic by default.

Options are:
+ `'top'`
+ `'middle'`
+ `'bottom'`
{{ /if }}

#${prefix} fontStyle(string)='normal'

${name} font style

Options are:
+ `'normal'`
+ `'italic'`
+ `'oblique'`


#${prefix} fontWeight(string)=${defaultFontWeight|default('normal')}

${name} font thick weight

Options are:
+ `'normal'`
+ `'bold'`
+ `'bolder'`
+ `'lighter'`
+ 100 | 200 | 300 | 400...


#${prefix} fontFamily(string)='sans-serif'

${name} font family

Can also be 'serif' , 'monospace', ...

#${prefix} fontSize(number)=${defaultFontSize|default(12)}

${name} font size
