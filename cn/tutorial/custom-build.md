{{target: custom-build}}

# 自定义构建 ECharts

一般来说，可以直接从 [echarts 下载页](http://echarts.baidu.com/download.html) 中获取构建好的 echarts，也可以从 [GitHub](https://github.com/ecomfe/echarts/releases) 中的 `echarts/dist` 文件夹中获取构建好的 echarts，这都可以直接在浏览器端项目中使用。这些构建好的 echarts 提供了下面这几种定制：

+ 完全版：`echarts/dist/echarts.js`，体积最大，包含所有的图表和组件，所包含内容参见：`echarts/echarts.all.js`。
+ 常用版：`echarts/dist/echarts.common.js`，体积适中，包含常见的图表和组件，所包含内容参见：`echarts/echarts.common.js`。
+ 精简版：`echarts/dist/echarts.simple.js`，体积较小，仅包含最常用的图表和组件，所包含内容参见：`echarts/echarts.simple.js`。

如果对文件体积有更严苛的要求，可以自己构建 echarts，能够仅仅包括自己所需要的图表和组件。自定义构建有几种方式：

+ [在线自定义构建](http://echarts.baidu.com/builder.html)：比较方便。
+ 使用 `echarts/build/build.js` 脚本自定义构建：比在线构建更灵活一点，并且支持多语言。
+ 直接使用构建工具（如 [rollup](https://rollupjs.org/)、[webpack](https://webpack.github.io/)、[browserify](http://browserify.org/)）自己构建：也是一种选择。

下面我们举些小例子，介绍后两种方式。


## 准备工作：创建自己的工程和安装 echarts

使用命令行，创建自己的工程：

```shell
mkdir myProject
cd myProject
```

在 `myProject` 目录下使用命令行，初始化工程的 [npm](https://www.npmjs.com/) 环境并安装 echarts（这里前提是您已经安装了 [npm](https://www.npmjs.com/)）：

```shell
npm init
npm install echarts --save
```

通过 npm 安装的 echarts 会出现在 `myProject/node_modules` 目录下，从而可以直接在项目代码中得到 echarts，例如：

使用 ES Module：
```js
import * as echarts from 'echarts';
```

使用 CommonJS：
```js
var echarts = require('echarts')
```

下面仅以使用 ES Module 的方式来举例。



## 使用 echarts 提供的构建脚本自定义构建

在这个例子中，我们要创建一个饼图，并且想自定义构建一个只含有饼图的 echarts 文件，从而能使 echarts 文件的大小比较小一些。

echarts 已经提供了构建脚本 `echarts/build/build.js`，基于 [Node.js](https://nodejs.org) 运行。我们可以在 `myProject` 目录下使用命令行，看到它的使用方式：

```shell
node node_modules/echarts/build/build.js --help
```

其中我们在这个例子里会用到的参数有：

+ `-i`：代码入口文件，可以是绝对路径或者基于当前命令行路径的相对路径。
+ `-o`：生成的 bundle 文件，可以是绝对路径或者基于当前命令行路径的相对路径。
+ `--min`：是否压缩文件（默认不压缩），并且去多余的打印错误信息的代码，形成生产环境可用的文件。
+ `--lang <language shortcut or file path>`：是否使用其他语言版本，默认是中文。例如：`--lang en` 表示使用英文，`--lang my/langXX.js` 表示构建时使用 `<cwd>/my/langXX.js` 替代 `echarts/src/lang.js` 文件。
+ `--sourcemap`：是否输出 source map，以便于调试。
+ `--format`：输出的格式，可选 `'umb'`（默认）、`'amd'`、`'iife'`、`'cjs'`、`'es'`。

既然我们想自定义构建一个只含有饼图的 echarts 文件，我们需要创建一个入口文件，可以命名为 `myProject/echarts.custom.js`，文件里会引用所需要的 echarts 模块：

```js
// 引入 echarts 主模块。
export * from 'echarts/src/echarts';
// 引入饼图。
import 'echarts/src/chart/pie';
```

然后我们可以在 `myProject` 目录下使用命令行，这样开始构建：

```shell
node node_modules/echarts/build/build.js --min -i echarts.custom.js -o lib/echarts.custom.min.js
```

这样，`myProject/lib/echarts.custom.min.js` 就生成了。我们可以创建 `myProject/pie.html` 来使用它：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>myProject</title>
    <!-- 引入 lib/echarts.custom.min.js -->
    <script src="lib/echarts.custom.min.js"></script>
</head>
<body>
    <div id="main" style="width: 600px;height:400px;"></div>
    <script>
        // 绘制图表。
        echarts.init(document.getElementById('main')).setOption({
            series: {
                type: 'pie',
                data: [
                    {name: 'A', value: 1212},
                    {name: 'B', value: 2323},
                    {name: 'C', value: 1919}
                ]
            }
        });
    </script>
</body>
</html>
```

然后在浏览器里打开 `myProject/pie.html`，就可以看到一个饼图：

![300xauto](~custom-build-pie.png)


## 允许被引用的模块

在自定义构建中，允许被引用的模块，全声明在 [`myProject/node_module/echarts/echarts.all.js`](https://github.com/ecomfe/echarts/blob/master/echarts.all.js) 和 [`myProject/node_module/echarts/src/export.js`](https://github.com/ecomfe/echarts/blob/master/src/export.js) 中。echarts 和 zrender 源代码中的其他模块，都是 echarts 的内部模块，**不应该去引用**。因为在后续 echarts 版本升级中，内部模块的接口和功能可能变化，甚至模块本身也可能被移除。


## 直接使用 rollup 自定义构建

上文中介绍了如何使用 echarts 提供的脚本 `echarts/build/build.js` 自定义构建。与此并列的另一种选择是，我们直接使用构建工具（如 [rollup](https://rollupjs.org/)、[webpack](https://webpack.github.io/)、[browserify](http://browserify.org/)）自定义构建，并且把 echarts 代码和项目代码在构建成一体。在一些项目中可能需要这么做。下面我们仅仅介绍如何使用 [rollup](https://rollupjs.org/) 来构建。[webpack](https://webpack.github.io/) 和 [browserify](http://browserify.org/) 与此类同，不赘述。

首先我们在 `myProject` 目录下使用 npm 安装 [rollup](https://rollupjs.org/)：

```shell
npm install rollup --save-dev
npm install rollup-plugin-node-resolve --save-dev
npm install rollup-plugin-uglify --save-dev
```

接下来创建项目 JS 文件 `myProject/line.js` 来绘制图表，内容为：

```js
// 引入 echarts 主模块。
import * as echarts from 'echarts/src/echarts';
// 引入折线图。
import 'echarts/src/chart/line';
// 引入提示框组件、标题组件、工具箱组件。
import 'echarts/src/component/tooltip';
import 'echarts/src/component/title';
import 'echarts/src/component/toolbox';

// 基于准备好的dom，初始化 echarts 实例并绘制图表。
echarts.init(document.getElementById('main')).setOption({
    title: {text: 'Line Chart'},
    tooltip: {},
    toolbox: {
        feature: {
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            },
            restore: {}
        }
    },
    xAxis: {},
    yAxis: {},
    series: [{
        type: 'line',
        smooth: true,
        data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
    }]
});
```

对于不支持 ES Module 的浏览器而言，刚才创建的 `myProject/line.js` 还不能直接被网页引用并在浏览器中运行，需要进行构建。使用 [rollup](https://rollupjs.org/) 构建前，需要创建它的配置文件 `myProject/rollup.config.js`，内容如下：

```js
// 这个插件用于在 `node_module` 文件夹（即 npm 用于管理模块的文件夹）中寻找模块。比如，代码中有
// `import 'echarts/src/chart/line';` 时，这个插件能够寻找到
// `node_module/echarts/src/chart/line.js` 这个模块文件。
import nodeResolve from 'rollup-plugin-node-resolve';
// 用于压缩构建出的代码。
import uglify from 'rollup-plugin-uglify';
// 用于处理开发模式的代码（声明 __DEV__ 变量）。
import ecDevPlugin from 'echarts/build/rollup-plugin-ec-dev';
// 用于多语言支持（如果不需要可忽略此 plugin）。
// import ecLangPlugin from 'echarts/build/rollup-plugin-ec-lang';

export default {
    name: 'myProject',
    // 入口代码文件，就是刚才所创建的文件。
    input: './line.js',
    plugins: [
        nodeResolve(),
        ecDevPlugin(),
        // ecLangPlugin({lang: 'en'}),
        // 消除代码中的 __DEV__ 代码段，从而不在控制台打印错误提示信息。
        uglify({
            compress: {
                'global_defs': {__DEV__: false},
                'dead_code': true
            }
        })
    ],
    output: {
        // 以 UMD 格式输出，从而能在各种浏览器中加载使用。
        format: 'umd',
        // 输出 source map 便于调试。
        sourcemap: true,
        // 输出文件的路径。
        file: 'lib/line.min.js'
    }
};
```

然后在 `myProject` 目录下使用命令行，构建工程代码 `myProject/line.js`：

```shell
./node_modules/.bin/rollup -c
```

> 其中 `-c` 表示让 `rollup` 使用我们刚才创建的 `myProject/rollup.config.js` 文件作为配置文件。

构建生成的 `myProject/lib/line.min.js` 文件包括了工程代码和 echarts 代码，并且仅仅包括我们所需要的图和组件，并且可以在浏览器中使用。我们可以用一个示例页面来测试一下，创建文件 `myProject/line.html`，内容如下：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>myProject</title>
</head>
<body>
    <!-- 为 echarts 准备一个具备大小（宽高）的Dom。 -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <!-- 引入刚才构建好的文件。 -->
    <script src="lib/line.min.js"></script>
</body>
</html>
```

在浏览器里打开 `myProject/line.html` 则会得到如下效果：

![500xauto](~custom-build-line.png)

另外注意：如果您使用 [webpack](https://webpack.github.io/) 来构建，上文中的 `echarts/build/rollup-plugin-ec-dev` 所提供的功能，可以使用下面的定义来实现：
```js
// ...
plugins: [
    // ...
    new webpack.DefinePlugin({
        'typeof __DEV__': JSON.stringify('boolean'),
        '__DEV__': false
    })
]
```


## 多语言支持

上面的例子中能看到，工具箱组件（toolbox）的提示文字是中文。本质上，echarts 图表显示出来的文字，都可以通过 `option` 来定制，改成任意语言。但是如果想“默认就是某种语言”，则需要通过构建来实现。

在上面的例子中，可以在 `echarts/build/build.js` 的参数中指定语言：

```shell
node node_modules/echarts/build/build.js --min -i echarts.custom.js -o lib/echarts.custom.min.js --lang en
```

表示使用内置的英文。此外还可以是 `--lang fi`。

```shell
node node_modules/echarts/build/build.js --min -i echarts.custom.js -o lib/echarts.custom.min.js --lang my/langXX.js
```

表示在构建时使用 `myProject/my/langXX.js` 文件来替换 `myProject/node_modules/echarts/src/lang.js` 文件。这样可以在 `myProject/my/langXX.js` 文件中自定义语言。注意这种方式中，必须指定 `-o` 或者 `--output`。

另外，上面的 rollup 插件 `echarts/build/rollup-plugin-ec-lang` 也可以传入同样的参数，实现同样的功能。
