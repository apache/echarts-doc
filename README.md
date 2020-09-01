# ECharts Documentation

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

Do not need other project.

```shell
npm run dev
```
It will:

+ Start a static server
+ Watch doc site src change and rebuild.
+ Watch doc markdown change and rebuild.


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
[Apache ECharts (incubating) website](${websitePath}/en/download.html)
```

#### Format Option Docs

Option docs needs to be formatted before commit.

Run
```shell
npm run format
```


#### Reference of option

A `~` can be used to refer to a option item in the same doc. For example:

```md
[xAxis.name](~xAxis.name)
```
