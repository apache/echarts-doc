
{{ target: partial-data-transform-tutorial-ref }}

参见这个教程： [datat transform](tutorial.html#%E4%BD%BF%E7%94%A8%20transform%20%E8%BF%9B%E8%A1%8C%E6%95%B0%E6%8D%AE%E8%BD%AC%E6%8D%A2).




{{ target: partial-data-transform-print }}

### print(boolean) = false

使用 transform 时，有时候我们会配不对，显示不出来结果，并且不知道哪里错了。所以，这里提供了一个配置项 `transform.print` 方便 debug 。这个配置项只在开发环境中生效。如下例：

```js
option = {
    dataset: [{
        source: [ ... ]
    }, {
        transform: {
            type: 'filter',
            config: { ... }
            // 配置为 `true` 后， transform 的结果
            // 会被 console.log 打印出来。
            print: true
        }
    }],
    ...
}
```

