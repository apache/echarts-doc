# ECharts 博客

博客可以在 [echarts.baidu.com/blog](http://echarts.baidu.com/blog) 访问到。

## 写博客

博客使用了 [Jekyll](https://jekyllrb.com/) 框架，博文目录在 [_posts](https://github.com/ecomfe/echarts-doc/tree/gh-pages/blog-src/_posts)。

- 使用 markdown 书写；
- 有中英文的博文，中文文件名是 xxx.md 的话，英文文件名是 xxx-en.md；
- 有中英文的博文，在英文博文的头部，需要写 `cnUrl: '2017/01/13/new-release.html'` 类似的中文路径，中文博文的头部写 `enUrl`；
- 图片放在 [images/post](https://github.com/ecomfe/echarts-doc/tree/gh-pages/blog-src/images/post) 下，命名方式和博文名称相关，参考其他图片；
- 如果需要用 Gallery 中的例子作为 iframe，写法是：`<iframe style="width: 100%; height: 300px" src="http://gallery.echartsjs.com/view.html?cid=xxxxxx"></iframe>`；
- 更多写法参考该目录下的其他博文。

## 构建

- 运行 `grunt` 压缩图片、编译 JS、CSS 等；
- 把 [_config.yml](https://github.com/ecomfe/echarts-doc/blob/gh-pages/blog-src/_config.yml) 下的 `url: http://localhost/ec-doc/blog` 取消注释（或改成你本地的地址），注释 `url: http://echarts.baidu.com/blog`，这样 Jekyll 编译生成的地址就是本地的，方便调试（**注意：不要把这个文件的修改提交**）；
- 运行 `jekyll b`，生成的文件在 [../blog](https://github.com/ecomfe/echarts-doc/tree/gh-pages/blog)，将其放在本地服务器下访问；
- 确认没问题后，将 [_config.yml](https://github.com/ecomfe/echarts-doc/blob/gh-pages/blog-src/_config.yml) 的 `url` 改回线上地址 `url: http://echarts.baidu.com/blog` 并运行 `jekyll b`；
- 提交 `blog` 和 `blog-src` 下的修改。
