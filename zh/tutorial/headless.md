
{{target: headless}}

# 服务端渲染

Apache ECharts<sup>TM</sup> 可以在服务端进行渲染。例如 [官方示例](https://echarts.apache.org/examples/zh/index.html) 里的一个个小截图，就是在服务端预生成出来的。

服务端渲染可以使用流行的 headless 环境，例如 [puppeteer](https://github.com/GoogleChrome/puppeteer)、[headless chrome](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)、[node-canvas](https://github.com/Automattic/node-canvas)、[jsdom](https://github.com/jsdom/jsdom)、[PhantomJS](http://phantomjs.org/) 等。

这是一些社区贡献的 echarts 服务端渲染方案：

+ https://github.com/hellosean1025/node-echarts
+ https://github.com/chfw/echarts-scrappeteer
+ https://github.com/chfw/pyecharts-snapshot/blob/master/pyecharts_snapshot/phantomjs/snapshot.js
+ https://gist.github.com/pissang/4c32ee30e35c91336af72b129a1a4a73