# ECharts 文档


## 准备

文档会编译到 `test/schema.json`，然后文档的访问会加载这个 `schema.json`

```shell
# 安装依赖
npm install
# 编译
sh build.sh
# 后面可以使用 node watch.js
```

然后

```js
edp ws start
```

访问 `test/option.html`

## 文档说明

文档分为两部分，教程和 Option 的 API 文档，`src/__table-fo-contents.md` 是文档的目录。

API 文档使用 markdown 编写，一些公用文档用 etpl 写成了模板。所有文件都在 src 下。

`src/component` 下是所有组件的文档，`src/series` 下是所有系列图表的文档。`src/partial` 下是公用的模板。

每个组件和系列文档的架子已经都在了，需要填充的是具体每个组件和系列的配置项，相应的配置项源代码在 `https://github.com/ecomfe/echarts/tree/dev-3.0.0/src` 的 `chart` 和 `component`  目录下，找 `XXXXSeries` 和 `XXXXModel` 的文件，然后里面的 `defaultOption` 就是默认配置项。

具体例子可以参考散点图 `src/series/scatter.md`