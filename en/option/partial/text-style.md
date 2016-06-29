{{target:partial-text-style}}

#${prefix} color(Color)=${defaultColor|default('"#fff"')}

${name}text color.

{{ if: ${hasAlign} }}
#${prefix} align(string)=${defaultAlign}

Horizontal Alignment of text, automatic by default.

Options are: 
+ `'left'`
+ `'center'`
+ `'right'`
{{ /if }}

{{ if: ${hasBaseline} }}
#${prefix} baseline(string)=${defaultAlign}

Baseline Alignment of text, automatic by default.
Options are: 
+ `'top'`
+ `'middle'`
+ `'bottom'`
{{ /if }}

#${prefix} fontStyle(string)='normal'

${name}Font style

Options are: 
+ `'normal'`
+ `'italic'`
+ `'oblique'`


#${prefix} fontWeight(string)=${defaultFontWeight|default('normal')}

${name}Font thickness

Options are: 
+ `'normal'`
+ `'bold'`
+ `'bolder'`
+ `'lighter'`
+ 100 | 200 | 300 | 400...


#${prefix} fontFamily(string)='sans-serief'

${name}Font series

#${prefix} fontSize(number)=${defaultFontSize|default(12)}

${name}Font size