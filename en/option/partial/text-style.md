{{target:partial-text-style}}

#${prefix} color(Color)=${defaultColor|default('"#fff"')}

${name} text color.

{{ if: ${hasAlign} }}
#${prefix} align(string)=${defaultAlign}

Horizontal alignment of text, automatic by default.

Options are:
+ `'left'`
+ `'center'`
+ `'right'`
{{ /if }}

{{ if: ${hasBaseline} }}
#${prefix} baseline(string)=${defaultAlign}

Baseline alignment of text, automatic by default.
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
