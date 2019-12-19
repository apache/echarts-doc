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

## Build and Run Locally

#### Start developing environment (one way):

```shell
npm run dev
```
It will:

+ Start a static server
+ Watch doc site src change and rebuild.
+ Watch doc markdown change and rebuild.

#### Start developing environment (another way):

```shell
npm run watch
# It will not start a web server.
```
It will:

+ Only watch doc site src change and rebuild.

The entry site will be in "/public/en/" and "/public/zh/".

#### Build doc markdown:

```shell
npm run build
```

#### Build doc site:

```shell
npm run build:site
```

#### Release:

Check `incubator-echarts-website/README.md` please.

## Tips about writing doc

#### Global variables can be used in doc:

+ galleryViewPath
+ galleryEditorPath
+ websitePath

For example:
```md
~[700x300](${galleryViewPath}doc-example/aria-pie&edit=1&reset=1)
```

#### Reference of option

A `~` can be used to refer to a option item in the same doc. For example:

```md
[xAxis.name](~xAxis.name)
```
