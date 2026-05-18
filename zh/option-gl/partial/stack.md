
{{ target: partial-stack }}

## stack(string)

堆叠的组名。在**同一个类目轴（category axis）**上，配置了相同 `stack` 组名的系列会互相堆叠。关于数值的堆叠方式，可参见 [stackStrategy](~series-${componentNameInLink}.stackStrategy)。

**注意：**堆叠功能只支持被堆叠轴为 `'value'` 或 `'log'` 类型，不支持被堆叠轴为 `'time'` 或 `'category'` 类型。

{{ if: ${componentNameInLink} === 'line' }}
下面示例可以通过右上角 [toolbox](~toolbox) 中的堆叠切换看效果：

~[600x400](${galleryViewPath}doc-example/line-stack-tiled&edit=1&reset=1)
{{ /if }}

## stackStrategy(string) = 'samesign'

{{ use: partial-version(
    isECharts = true,
    version = '5.3.3'
) }}

堆叠数值的计算方式，仅在设置了 [stack](~series-${componentNameInLink}.stack) 属性后生效。可选值：

+ `'samesign'` 仅当待堆叠数值与当前累积堆叠值正负符号一致时才堆叠。**(默认)**
+ `'all'`      堆叠所有数值，不区分正负。
+ `'positive'` 只堆叠正值。
+ `'negative'` 只堆叠负值。

## stackOrder(string) = 'seriesAsc'

{{ use: partial-version(
    isECharts = true,
    version = '6.0.0'
) }}

堆叠顺序。可选值：

+ `'seriesAsc'`  按系列顺序堆叠。**(默认)**
+ `'seriesDesc'` 按系列反向顺序堆叠。

**注意：** 

+ `stackOrder` 应该为所有具有相同 `stack` 名称的系列定义。如果只为部分系列定义 `stackOrder`，当某些系列被隐藏（如通过图例切换）时，可能会导致堆叠顺序发生意外变化。