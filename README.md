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

### Document content development

1. Fork and clone this repository
2. `npm install`
3. `npm run dev` (will watch changes and rebuild files, also start a static server to serve the content)
4. refresh page to see changes after modifying files
5. welcome to create a PR to the `dev` branch

Notes:

- If you are using a higher `Node` version and meet trouble, you can change to `Node v14`, which works well for this project.
- You may need to force refresh the page to see changes after modifying files. To save your time, if you are using Chrome, you can visit "Devtools -> Settings -> Preferences -> Network -> Diable cache (while DevTools is open)" to disable cache.

## Tips about writing doc

#### Global variables can be used in doc:

+ galleryViewPath
+ galleryEditorPath
+ websitePath

For example:
Embed a example in doc:
```md
~[700x300](${galleryViewPath}doc-example/aria-pie&edit=1&reset=1)
```
Provide a example link in doc:
```md
[vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1)
```
Provide a website link in doc:
```md
[Apache ECharts website](${websitePath}/en/download.html)
```

#### Reference of option

A `~` can be used to refer to a option item in the same doc. For example:

```md
[xAxis.name](~xAxis.name)
```

If intending to reference an anchor in different doc, it can be:
```md
[itemStyle](option.html#series.itemStyle)
```

#### Notes:

1. Formatter will treat {{use}} as a block. So don't use it **inline**.

```js
// Good
Some description
{{ use: partial-xxx }}
Some other description
// Bad
Some description about {{ use: partial-inline-xxx }}
```

2. Don't use to complex **inline** {{if}} {{else}} structure. It will make reading and patching between different languages harder.

```js
// Good
{{ if: ${prefix} !== '#' }}
表示同一层级的节点的颜色饱和度 选取范围。
{{ else }}
本系列默认的节点的颜色饱和度 选取范围。
{{ /if }}
数值范围 0 ~ 1。

// Bad
{{ if: ${prefix} !== '#' }}表示同一层级的节点的{{ else }}本系列默认的{{ /if }} 颜色饱和度 选取范围。数值范围 0 ~ 1。

// Good
{{ if: ${prefix} !== '#' }}
It indicates the range of saturation (color alpha) for nodes in a level.
{{ else }}
It indicates the range of saturation (color alpha) for nodes  of the series.
{{ /if }}
The range of values is 0 ~ 1.

// Bad
It indicates the range of saturation (color alpha) {{ if: ${prefix} !== '#' }}for nodes in a level {{ else }} of the series{{ /if }}. The range of values is 0 ~ 1.

```
## Format Option Docs

Option docs needs to be formatted before commit.

Run
```shell
npm run format
```

Make sure have a double review on the git diff after formatted.

## Sync docs between different languages.

After you finished editing doc of one language. You can use following script to sync it to another language.

```shell
# zh to en
node tool/patchLanguage --from=zh --to=en
# en to zh
node tool/patchLanguage --from=en --to=zh
```

Sync will move the structure. It will make editing of other languages much easier.

Again make sure have a double review on the git diff after syncing.
