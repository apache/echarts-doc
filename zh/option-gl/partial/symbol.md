{{ target: partial-symbol }}

#${prefix|default('#')} symbol(string) = 'circle'
散点的形状。默认为圆形。

{{ use: partial-icon }}

#${prefix|default('#')} symbolSize(number|Array|Function) = ${defaultSymbolSize|default(10)}

${name}标记的大小，可以设置成诸如 `10` 这样单一的数字，也可以用数组分开表示宽和高，例如 `[20, 10]` 表示标记宽为`20`，高为`10`。

如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：
```ts
(value: Array|number, params: Object) => number|Array
```
其中第一个参数 `value` 为 [data](~series-${seriesType}.data) 中的数据值。第二个参数`params` 是其它的数据项参数。
