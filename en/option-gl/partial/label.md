
{{ target: partial-text-style }}

#${prefix|default('###')} color(string)=${defaultColor|default('"#fff"')}

The Color of the text.

#${prefix|default('###')} borderWidth(number)=${defaultBorderWidth|default(0)}

The border width of the text.

#${prefix|default('###')} borderColor(string)=${defaultBorderColor|default('#fff')}

The border color of the text.

#${prefix|default('###')} fontFamily(string)='sans-serif'

The font family of the text.

#${prefix|default('###')} fontSize(number)=${defaultFontSize|default(12)}

${name}The font size of the text.

#${prefix|default('###')} fontWeight(string)=${defaultFontWeight|default('normal')}

${name}The font thick weight of the text.

**Optional:**
+ `'normal'`
+ `'bold'`
+ `'bolder'`
+ `'lighter'`
+ 100 | 200 | 300 | 400...


{{ target: partial-label }}

#${prefix|default('##')} show(boolean) = ${defaultShow|default(false)}

Whether to show the label.

#${prefix|default('##')} distance(number) = ${defaultDistance}

Distance to the host graphic element.

The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.

{{ if: ${hasPosition} }}
#${prefix|default('##')} position(string) = ${defaultPosition|default('top')}

The location of the label.

**Optional:**

+ 'top'
+ 'left'
+ 'right'
+ 'bottom'

{{ /if }}

#${prefix|default('##')} formatter(Function|string)

The formatter of the label content, which supports the string template and the callback function. In either form, `\n` is supported to represent a new line.

**String template:**

The model variation includes:
+ `{a}`: series name.
+ `{b}`: the name of a data item.
+ `{c}`: the value of a data item.

**Example:**
```ts
formatter: '{b}: {c}'
```

**Callback function:**
 Callback function is in form of:
```ts
(params: Object|Array) => string
```
The `params` is the single data set needed by formatter, which is formed as:

{{ use: partial-formatter-params-structure() }}


#${prefix|default('##')} textStyle(Object)

The font style of the label.

{{ use:partial-text-style(
    prefix=${prefix|default('##')} + '#',
    defaultColor=${defaultTextColor},
    defaultBorderWidth=${defaultTextBorderWidth},
    defaultBorderColor=${defaultTextBorderColor},
    defaultFontSize=${defaultTextFontSize},
    defaultFontWeight=${defaultTextFontWeight}
) }}