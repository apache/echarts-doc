
{{ target: partial-colorby }}

## colorBy(string) = ${defaultColorBy|default("'series'")}

<ExampleUIControlEnum options="series,data" />

{{ use: partial-version(
    version = '5.2.0'
) }}

从调色盘 [option.color](~color) 中取色的策略，可取值为：

+ `'series'`：按照系列分配调色盘中的颜色，同一系列中的所有数据都是用相同的颜色；
+ `'data'`：按照数据项分配调色盘中的颜色，每个数据项都使用不同的颜色。

