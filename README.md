# ECharts Documentation

## Online Docs

+ [教程 Tutorial](http://echarts.baidu.com/tutorial.html)
    + [中文](http://echarts.baidu.com/tutorial.html)
    + [English](http://ecomfe.github.io/echarts-doc/public/tutorial-en.html)

+ [实例接口文档 API](http://echarts.baidu.com/api.html)
    + [中文](http://echarts.baidu.com/api.html)
    + [English](http://ecomfe.github.io/echarts-doc/public/api-en.html)

+ [配置项手册 Option Manual](http://echarts.baidu.com/option.html)
    + [中文](http://echarts.baidu.com/option.html)
    + [English](http://ecomfe.github.io/echarts-doc/public/option-en.html)


## Build and Run Locally

```shell
# Install depedencies
npm install
# Build
node build.js
# Run a static server
node server.js
```

## Build Dash Docset

1. `cd public/documents/dash`

2. `node ../dashing.js`

3. Build
  - To build Docset in English: `./dashing build echarts -f dashing-en.json -s ./en`
  - To build Docset in Chinese: `./dashing build echarts -f dashing-cn.json -s ./cn`

4. The generated Docset is under current directory. Change version number in `echarts.docset/Contents/Info.plist` if you may.
