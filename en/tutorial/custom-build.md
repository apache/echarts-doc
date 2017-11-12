
{{target: custom-build}}

# Create Custom Build of ECharts


In most cases, echarts build can be fetched from [echarts download page](https://ecomfe.github.io/echarts-doc/public/en/download.html) or from the `echarts/dist` directory in [GitHub](https://github.com/ecomfe/echarts/releases), where
these pre-builds are provided:

+ Complete verion: `echarts/dist/echarts.js`, including all charts and components (see `echarts/echarts.all.js` for detail), but has maximum file size.
+ Common version: `echarts/dist/echarts.common.js`, including common charts and components (see `echarts/echarts.common.js` for detail), moderate file size.
+ Simple version: `echarts/dist/echarts.simple.js`, including several most common charts and components (see `echarts/echarts.simple.js` for detail), small file size.

If small file size is desperately required, we can customize echart build by ourselves with these approaches:

+ [Online custom build](http://echarts.baidu.com/builder.html) is relatively convenient.
+ Create custom build by the script `echarts/build/build.js` is more flexible for module selecting, and supports multi-language build.
+ Build echarts and your project directly by the tool like [rollup](https://rollupjs.org/), [webpack](https://webpack.github.io/), [browserify](http://browserify.org/) by ourselves is another choise in some situations.

Now we use some examples to illustrate the latter two approaches.



## Prepare: create our project and install echarts

Use the command line create our project:

```shell
mkdir myProject
cd myProject
```

Then in the `myProject` directory, initialize [npm](https://www.npmjs.com/) environment and install echarts (assume that [npm](https://www.npmjs.com/) has been installed):

```shell
npm init
npm install echarts --save
```

The installed echarts is in the `myProject/node_modules` directory, which can be used in our project directly. For example:

Use ES Module:
```js
import * as echarts from 'echarts';
```

Use CommonJS:
```js
var echarts = require('echarts')
```

Next, we just describe our examples in ES Module way.



## Create custom build by `echarts/build/build.js`

In this example, for minimizing file size, we will build a echarts bundle with only pie chart included, and create a web page to show it.

echarts has provided a script `echarts/build/build.js` as a build tool ([Node.js](https://nodejs.org) is required to execute it). Now we can use the command below in the `myProject` directory to check its help info:

```shell
node node_modules/echarts/build/build.js --help
```

These options can be used in this example:

+ `-i`: Entry file of the echarts code. Can be an absolute path or a relative path relative to the current working directory.
+ `-o`: The bundle file path. Can be an absolute path or a relative path relative to the current working directory.
+ `--min`: Whether to compress file (not by default), and remove the code that is for printing error and warning info.
+ `--lang <language shortcut or file path>`: Whether to use the specified language (Chinese by default). For example: `--lang en` means using English, `--lang my/langXX.js` means using `<cwd>/my/langXX.js` to substitute `echarts/lib/lang.js` while buiding.
+ `--sourcemap`: Whether to output source map, which is useful in debug.
+ `--format`: The format of output. Can be `'umb'`(default), `'amd'`, `'iife'`, `'cjs'`, `'es'`.

Now we want to create a echarts bundle that only supports pie chart, we should firstly create an entry file (say `myProject/echarts.custom.js`) to import modules we need:

```js
// Import the main module of echarts and export them.
export * from 'echarts/lib/echarts';
// Import pie chart.
import 'echarts/lib/chart/pie';
```

Then we can use command below in `myProject` directory to build the bundle:

```shell
node node_modules/echarts/build/build.js --min -i echarts.custom.js -o lib/echarts.custom.min.js --lang en
```

Now the bundle `myProject/lib/echarts.custom.min.js` has been created. Then we can create a web page (say `myProject/pie.html`) to test it:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>myProject</title>
    <!-- import the bundle `lib/echarts.custom.js`. -->
    <script src="lib/echarts.custom.js"></script>
</head>
<body>
    <div id="main" style="width: 600px;height:400px;"></div>
    <script>
        // Create a pie chart:
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

Open `myProject/pie.html` in a browser, we can see the pie chart:

![300xauto](~custom-build-pie.png)


## Modules that are permitted to be imported

All of the permitted modules are declared in [`myProject/node_module/echarts/echarts.all.js`](https://github.com/ecomfe/echarts/blob/master/echarts.all.js) and [`myProject/node_module/echarts/src/export.js`](https://github.com/ecomfe/echarts/blob/master/src/export.js). Other modules in the source code of echarts and zrender **SHOULD NOT BE IMPORTED**, because they are inner modules, whose interfaces and functionalities may be modified in the subsequent upgrades of echarts.


## Build echarts and our project directly by rollup

Now we have known that how to create custom build by `echarts/build/build.js`. Alternatively, we can bundle echarts and our project directly by the tool like [rollup](https://rollupjs.org/), [webpack](https://webpack.github.io/) or [browserify](http://browserify.org/). In some project, this approach is required. Next we only go with [rollup](https://rollupjs.org/), because [webpack](https://webpack.github.io/) and [browserify](http://browserify.org/) are in the similar way.


Firstly install [rollup](https://rollupjs.org/) in `myProject` directory:

```shell
npm install rollup --save-dev
npm install rollup-plugin-node-resolve --save-dev
npm install rollup-plugin-uglify --save-dev
```

Then we create a project JS file `myProject/line.js` for line chart rendering:

```js
// Import the main module of echarts.
import * as echarts from 'echarts/lib/echarts';
// Import line chart.
import 'echarts/lib/chart/line';
// Import components of tooltip, title and toolbox.
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';

// Render line chart and components.
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

The created module `myProject/line.js` can not work directly in the browsers that do not support ES Module. So we need to build them. Before we run [rollup](https://rollupjs.org/), a config file `myProject/rollup.config.js` should be created:

```js
// Responsible for looking for modules in `node_module` directory. For example,
// if there is code `import 'echarts/lib/chart/line';`, the module file
// `node_module/echarts/lib/chart/line.js` can be find by this plugin.
import nodeResolve from 'rollup-plugin-node-resolve';
// Responsible for compress code.
import uglify from 'rollup-plugin-uglify';
// Support multi-language.
import ecLangPlugin from 'echarts/build/rollup-plugin-ec-lang';

export default {
    name: 'myProject',
    // The entry file.
    input: './line.js',
    plugins: [
        nodeResolve(),
        ecLangPlugin({lang: 'en'}), // Use english
        // Remove the snippet in `__DEV__`, which mainly prints error log.
        uglify()
    ],
    output: {
        // Output file in the format of 'umd'.
        format: 'umd',
        // Output source map.
        sourcemap: true,
        // The path of the output bundle.
        file: 'lib/line.min.js'
    }
};
```

Then execute the following command in `myProject` directory to start the build:

```shell
./node_modules/.bin/rollup -c
```

> `-c` indicate `rollup` to use `myProject/rollup.config.js` as the config file.

The created bundle `myProject/lib/line.min.js` includes project code and part of echarts code that we requried. Now we create a web page `myProject/line.html` to test it:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>myProject</title>
</head>
<body>
    <div id="main" style="width: 600px;height:400px;"></div>
    <!-- Import the created bundle: -->
    <script src="lib/line.min.js"></script>
</body>
</html>
```

Open `myProject/line.html` in a browser, we will get:

![500xauto](~custom-build-line.png)


## Multi-language

In the example above, we can notice that the label of the `toolbox` component is in English. Essentially any text can be customized by `echarts option`, but if we want to show label in a certain language by default, we have to specify the language while building the code.

For example:

```shell
node node_modules/echarts/build/build.js --min -i echarts.custom.js -o lib/echarts.custom.min.js --lang en
```

It means that the pre-defined English text is used. Moreover, can be `--lang fi`.

```shell
node node_modules/echarts/build/build.js --min -i echarts.custom.js -o lib/echarts.custom.min.js --lang my/langXX.js
```

It means that `myProject/my/langXX.js` is used to substitute `myProject/node_modules/echarts/lib/lang.js` while performing build. So we can customize text in our language in `myProject/my/langXX.js`. Notice, `-o` or `--output` must be specified in the approach.

Besides, the same lang parameter can be pass to `echarts/build/rollup-plugin-ec-lang`.
