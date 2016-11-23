* 不含有numberal.js的代码。在外部引用。
* 删去了jquery.mousewheel的代码。在外部引用。
* Handsontable amd 化。


handsontable 从1.12.0开始，Dropped support for IE8 and 9。
@see <https://github.com/handsontable/handsontable/releases/tag/0.12.0>
所以不敢随便升级了。毕竟中国的使用者们还有在用winxp的 ...


trimWhitespace功能在1.12.6开始才有，所以只能手动添加了这个feature，在option中可配置trimWhitespace。
@see <https://github.com/handsontable/handsontable/releases/tag/0.12.6>