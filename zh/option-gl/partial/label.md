
{{ target: partial-text-style }}

#${prefix|default('###')} color(string)=${defaultColor|default('"#fff"')}

文字的颜色。

#${prefix|default('###')} borderWidth(number)=${defaultBorderWidth|default(0)}

文字的描边宽度。

#${prefix|default('###')} borderColor(string)=${defaultBorderColor|default('#fff')}

文字的描边颜色。


#${prefix|default('###')} fontFamily(string)='sans-serif'

文字的字体系列。

#${prefix|default('###')} fontSize(number)=${defaultFontSize|default(12)}

${name}文字的字体大小。

#${prefix|default('###')} fontWeight(string)=${defaultFontWeight|default('normal')}

${name}文字字体的粗细。

**可选：**
+ `'normal'`
+ `'bold'`
+ `'bolder'`
+ `'lighter'`
+ 100 | 200 | 300 | 400...


{{ target: partial-label }}

#${prefix|default('##')} show(boolean) = ${defaultShow|default(false)}

是否显示标签。

#${prefix|default('##')} distance(number) = ${defaultDistance}

标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离。

{{ if: ${hasPosition} }}
#${prefix|default('##')} position(string) = ${defaultPosition|default('top')}

标签的位置。

**可选：**

+ 'top'
+ 'left'
+ 'right'
+ 'bottom'

{{ /if }}

#${prefix|default('##')} formatter(Function|string)

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板**

模板变量有：
+ `{a}`：系列名。
+ `{b}`：数据名。
+ `{c}`：数据值。

**示例：**
```ts
formatter: '{b}: {c}'
```

**回调函数**

回调函数格式：
```ts
(params: Object|Array) => string
```
参数 `params` 是 formatter 需要的单个数据集。格式如下：
{{ use: partial-formatter-params-structure() }}


#${prefix|default('##')} textStyle(Object)

标签的字体样式。

{{ use:partial-text-style(
    prefix=${prefix|default('##')} + '#',
    defaultColor=${defaultTextColor},
    defaultBorderWidth=${defaultTextBorderWidth},
    defaultBorderColor=${defaultTextBorderColor},
    defaultFontSize=${defaultTextFontSize},
    defaultFontWeight=${defaultTextFontWeight}
) }}