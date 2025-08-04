# About

This project is part of the source of [The Apache ECharts Official Website](https://echarts.apache.org/). See [echarts-website](https://github.com/apache/echarts-website) for more details of the building process.

## Online Docs

+ English
    + [Tutorial](https://echarts.apache.org/en/tutorial.html)
    + [API](https://echarts.apache.org/en/api.html)
    + [Chart Configuration](https://echarts.apache.org/en/option.html)
+ 中文
    + [Tutorial](https://echarts.apache.org/zh/tutorial.html)
    + [API](https://echarts.apache.org/zh/api.html)
    + [Chart Configuration](https://echarts.apache.org/zh/option.html)

## Development

### Document Content Development

Do not need other project.

```shell
npm run dev
```
It will:

+ Start a static server
+ Watch doc site src change and rebuild.
+ Watch doc markdown change and rebuild.

### Local Config

To customize the links of `echarts-examples` and other configurations, you can create a local config file `echarts-doc/config/env.dev-override.js`, which is not tracked by git, and its top-level properties will be used to override the corresponding properties of `echarts-doc/config/env.dev.js` when `npm run dev`.

For example, create a `echarts-doc/config/env.dev-override.js`:
```js
module.exports = {
    // These props will override the same props in `echarts-doc/config/env.dev.js`
    galleryViewPath: 'http://127.0.0.1:3002/en/view.html?local=1&c=',
    galleryEditorPath: 'http://127.0.0.1:3002/en/editor.html?local=1&c=',
    EMBEDDED_ECHARTS_SCRIPT_URL: 'http://localhost:8001/echarts/echarts/dist/echarts.js',
};
```


## Tips About Writing Doc

### "Since Version"
"Since Version" is necessary in doc.
Marking "since version" indicates when a new feature was introduced.
For example,
```
{{ use: partial-version(version = "6.0.0") }}

{{ use: partial-version(version = ${version|minVersion('6.0.0')}) }}
    That is, if the ${version} is empty or smaller than '6.0.0', use '6.0.0'.
    Follow the version comparison rules in Semver 2.0 .
```

### Global Variables

These global variables can be used in doc:
+ `${galleryViewPath}`
+ `${galleryEditorPath}`
+ `${websitePath}`

See samples in "Reference of echarts-examples or other links"

### Reference of echarts-examples or Other Links

Embed an example in doc:
```md
~[700X300](${galleryEditorPath}pie-legend&edit=1&reset=1)
~[700x300](${galleryViewPath}doc-example/aria-pie&edit=1&reset=1)
```

Provide an example link in doc:
```md
[vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1)
[aria pie](${galleryViewPath}doc-example/aria-pie&edit=1&reset=1)
```

Provide a website link in doc:
```md
[Apache ECharts website](${websitePath}/en/download.html)
```

### Reference of Other ECharts Option

A `~` can be used to refer to a option item in the same doc. For example:
```md
[xAxis.name](~xAxis.name)
```

If intending to reference an anchor in different doc, it can be:
```md
In api.html, reference
[itemStyle](option.html#series.itemStyle)
```


### Notice

1. Formatter will treat {{use}} as a block. So don't use it **inline**.

```js
// Good
Some description
{{ use: partial-xxx }}
Some other description
// Bad
Some description about {{ use: partial-inline-xxx }}
```

2. Don't use complex **inline** {{if}} {{else}} structure. It will make reading and patching between different languages harder.

```template
Good:
{{ if: ${prefix} !== '#' }}
表示同一层级的节点的颜色饱和度 选取范围。
{{ else }}
本系列默认的节点的颜色饱和度 选取范围。
{{ /if }}
数值范围 0 ~ 1。

Bad:
{{ if: ${prefix} !== '#' }}表示同一层级的节点的{{ else }}本系列默认的{{ /if }} 颜色饱和度 选取范围。数值范围 0 ~ 1。

Good:
{{ if: ${prefix} !== '#' }}
It indicates the range of saturation (color alpha) for nodes in a level.
{{ else }}
It indicates the range of saturation (color alpha) for nodes  of the series.
{{ /if }}
The range of values is 0 ~ 1.

Bad:
It indicates the range of saturation (color alpha) {{ if: ${prefix} !== '#' }}for nodes in a level {{ else }} of the series{{ /if }}. The range of values is 0 ~ 1.

```

### Doc Structure

+ Entries:
    + the entry in source code is like `en/api/api.md`, `en/api/option.md`, they will be compiled to webpage like `api.html`, `option.html`

+ Shared targets (text blocks):
    + All of the shared targets should be put into the `partial` folder, such as, `en/api/partial/xxx`, `en/optino/partial/xxx`, and named with a prefix `partial-`.

+ Subtitles:
    + The doc is structured by subtitles.
    + For example:
        ```
        # series.bar(Object)
        ## propA(number|string) = null
        some desc xxx
        ## propB(number|string) = null
        some desc yyy
        ## propC(string) = ${defaultPropC|default("'auto'")}

        #${prefix} someOtherProp(Object)
        some desc zzz
        ```
    + `(xxx|yyy)` is the data type in that subtitle:
        + Can only be `number`, `string`, `boolean`, `Object`, `Array`, `Function`
        + Can be an union, such as `number|string`.
    + `= xxx` is the default value in that subtitle:
        + Can be omitted.
        + Typically be `null`, `undefined`, `true`, `false`, `90` (a literal number), `some literal string`, `[0, 90]` (an literal array).
        + The default value can be specified by a template variable, such as, `= ${someVar}`, `= ${someVar|default(123)}`, `= ${someVar|default("'auto'")}`.
    + The top level subtitles:
        + For example, `# series.bar(Object)`, the dot symbol represents a special meaning: the component main type is `'series'` and the component sub-type is `'bar'`.
    + The variable `${prefix}`
        + It is commonly used in "target: partial-xxx", which serves different subtitle levels. The value of `${prefix}` is like `'#'`, `'##'`, `'###'`, ...
        + Typical usage:
            ```tpl
            When we define a "target"
            {{ target: partial-abc-1 }}
            #${prefix} propLayout(Object)
            All of the subtitles should uses that prefix variable.
            ##${prefix} x(number)
            some desc
            ##${prefix} y(number)
            some desc
            {{ /target }}
            {{ target: partial-target-2 }}
            ```
            ```tpl
            When we use that "partial-abc-1"
            {{ target: partial-def-2 }}
            #${prefix|default('#')} somePropA(Object)
            {{ use: partial-abc-1(
                prefix: ${prefix} + '#'
            ) }}
            ```

### Template Syntax

The template syntax follows [etpl](https://github.com/ecomfe/etpl/blob/master/doc/syntax.md) (but use `{{ }}` rather than `<!-- -->` as the interpolate tags).
> A syntax highlight tool: [etpl-vscode](https://marketplace.visualstudio.com/items?itemName=yibuyisheng.etpl-vscode)

Summary of the commonly used syntax:
```template
--- TEMPLATE EXPRESSION ---
The template syntax and expressions are encolsed by delimiters `{{` and `}}`.
For example,
{{ if: condition_expression }} xxx {{ /if }}
The expressoin within `{{` and `}}` can be considered a (restricted) JS expression.
For example,
{{ if: ${someVar1} + 'abc' === '123abc' }} ... {{ /if }}
{{ if: !${someVar2} }} ... {{ /if }}

--- TEMPLATE VARIABLE ---
Use a variable:
    some text ${someVariable} some text
Variable scope:
    The scope of any variable is "target" (see below).
Variable filter:
    Some predefined filters can be used in the template variable, e.g.,
    ${someVariable|default("'auto'")} means using the string "'auto'"
    as the default if ${someVariable} is '' or null or undefined.
Declaration or assignment of a target-local variable:
    {{ var: myVar = 'some' }}
    {{ var: myVar = 123 }}
    {{ var: myVar = ${someOtherStr} + 'some_str' }}
NOTICE:
    Within a `{{` `}}` pair, DO NOT write {{ if: '${some}_abc' }}{{ /if }}. It should be {{ if: ${some} + '_abc' }}{{ /if }}, as the sentence within `{{` `}}` pair is treated like a normal JS expression.

--- IF ELSE ---
{{ if: ${number1} > 0 }}
some text xxx
{{ elif: ${string1} === 'abc' }}
some text yyy
{{ else }}
some text zzz
{{ /if }}
Logical operators can be used in the conditional expression:
{{ if: ${componentNameInLink} == null && ${seriesType} }}
This componentNameInLink is null or undefined
{{ var: componentNameInLink = 'series-' + ${seriesType} }}
{{ /if }}


--- FOR LOOP ---
{{ for: ${persons} as ${person}, ${index} }}
some text ${index}: ${person.name}
{{ /for }}


--- TARGET (DEFINE A TEXT BLOCK) ---
{{ target: a_predefined_block_name_1 }}
The input varA is ${varA}
The input varB is ${varB}
The input varC is ${varC}
Notice:
- The scope of the "target name" is the entire webpage (such as, `option.html`, `api.html`), so name conflicts should be avoided.
- "target" is not shared across webpage (such as, `option.html`, `api.html`).
- The close tag of "target" can be omitted, but not recommended.
{{ /target }}


--- USE (USE A PREDEFINED TEXT BLOCK) ---
{{ use: a_predefined_block_name_1 }}
{{ use: a_predefined_block_name_2(
    varA = ${myVarX},
    varB = 123,
    varC = 'some string',
    prefix: ${prefix} + '##'
) }}
Concatenation operator `+` can be used in that string.
```


### Document Embedded Examples

This is the embedded example that can be opened by clicking "try it" and then appears on the right side of the doc page.

Declare the base echarts options (`ExampleBaseOption`), whose scope is each echarts component or series. A `ExampleBaseOption` can be shared by multiple options. e.g.,
```md
<ExampleBaseOption name="cartesian-bar" title="直角坐标系上的柱状图" title-en="Bar on Cartesian">
const option = {
    ...
}
</ExampleBaseOption>
```

Declare example UI control in each option, who uses the currently opened example. Supported UI controls:
+ `<ExampleUIControlBoolean default="true" />`
+ `<ExampleUIControlNumber default="8" step="0.5" />`
+ `<ExampleUIControlColor default="#d2dbee" />`
+ `<ExampleUIControlEnum options="horizontal,vertical" default="horizontal" />`
+ `<ExampleUIControlIcon default="none" />`
+ `<ExampleUIControlVector default="0,0" />`
+ `<ExampleUIControlAngle min="-90" max="90" step="1" />`
+ `<ExampleUIControlPercent default="0" />`
+ `<ExampleUIControlPercentVector min="0" dims="InnerStart,InnerEnd,OuterStart,OuterEnd" default="0,0,0,0" />`
+ `<ExampleUIControlText />`

The detailed API and implementation of the UI controls can be checked in `echarts-doc/src/controls/*.vue` and `echarts-doc/src/components/OptionControl.vue`.

Note: currently `ExampleBaseOption` and `ExampleUIControlXxx` will be copied (by `echarts-doc/build.js`) from `echarts-doc/zh/**/*.md` to `echarts-doc/en/**/*.md` if they are not declared in `echarts-doc/en/**/*.md`.


## Format Option Docs

Option docs needs to be formatted before commit.

Run
```shell
npm run format
```

Make sure have a double review on the git diff after formatted.

## Sync Docs Between Different Languages

After you finished editing doc of one language. You can use following script to sync it to another language.

```shell
# zh to en
node tool/patchLanguage --from=zh --to=en
# en to zh
node tool/patchLanguage --from=en --to=zh
```

Sync will move the structure. It will make editing of other languages much easier.

Again make sure have a double review on the git diff after syncing.
