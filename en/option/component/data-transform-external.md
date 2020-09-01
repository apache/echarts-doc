
{{ target: component-data-transform-external }}

## transform.xxx:xxx(Object)

Besides built-in transforms (like 'filter', 'sort'), we can also use external transforms to provide more powerful functionalities.

{{ use: partial-data-transform-tutorial-ref() }}

### type(string) = 'xxx:xxx'

Built-in transform has no namespace (like `type: 'filter'`, `type: 'sort'`).

External transform has namespace (like `type: 'ecStat:regression'`).

### config(*)

The needed parameters of this data transform. Each type of transform has its own definition of `config`.

{{ use: partial-data-transform-print() }}

