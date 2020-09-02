
{{ target: component-data-transform-external }}

## transform.xxx:xxx(Object)

除了上述的内置的数据转换器外，我们也可以使用外部的数据转换器。外部数据转换器能提供或自己定制更丰富的功能。

{{ use: partial-data-transform-tutorial-ref() }}

### type(string) = 'xxx:xxx'

内置数据转换器没有名空间（如 `type: 'filter'`, `type: 'sort'`）。

外部数据转换器须有名空间（如 `type: 'ecStat:regression'`）。

### config(Object)

这里设置每个数据转换器所须的参数。每种数据转换器有自己的参数格式定义。

{{ use: partial-data-transform-print() }}

