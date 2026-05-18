
{{ target: partial-stack }}

## stack(string)

堆叠的组名。在**同一个类目轴（category axis）**上，配置了相同 `stack` 组名的系列会互相堆叠。关于数值的堆叠方式，可参见 [stackStrategy](~series-${componentNameInLink}.stackStrategy)。

[笛卡尔坐标系](~grid) 或 [极坐标系](~polar) 中，两个坐标轴决定了系列的每个图形的位置。讨论 `stack` 时我们可以这样命名它们：
+ **Stacked Axis**：这个坐标轴上的系列值会被堆叠。这里只有 `axis.type: 'value' | 'log'` 的坐标轴能支持堆叠。
+ **Base Axis**：这个坐标轴上的系列值**不**会被堆叠。但是这个坐标轴影响堆叠的分组策略：
    + 如果 Base Axis 是 `axis.type: 'category'`: 系列的数据项会根据此坐标轴上的值进行分组。例如，
        ```js
        option = {
            xAxis: {type: 'category'},
            yAxis: {type: 'value'},
            series: [{
                stack: 'ss',
                data: [['a', 10], ['b', 20], ['c', 30]]
            }, {
                stack: 'ss',
                data: [['b', 900], ['c', 800], ['a', 700]]
            }, {
                stack: 'ss',
                data: [['a', 3000], ['c', 4000]]
            }]
        };
        // "Base Axis" 是 xAxis。系列的诸数据项根据 xAxis 上的值
        // （即 data[i][0]）进行分组。
        // 堆叠结果为：
        stackedResult = [{
            data: [['a', 10], ['b', 20], ['c', 30]]
        }, {
            data: [['a', 10 + 700], ['b', 20 + 900], ['c', 30 + 800]]
        }, {
            data: [['a', 10 + 700 + 3000], ['b', 20 + 900 + 0], ['c', 30 + 800 + 4000]]
        }]
        ```
    + 如果 Base Axis 是 `axis.type: 'value' | 'time' | 'log'`: 当前只支持根据 data index 对数据项进行分组（出于性能考虑）。**使用者须保证不同系列的 data index 正确对应**。例如，
        ```js
        option = {
            xAxis: {type: 'value'},
            yAxis: {type: 'value'},
            series: [{
                stack: 'ss',
                data: [[0.01, 10], [0.05, 20], [0.13, 30]]
            }, {
                stack: 'ss',
                data: [[0.01, 700], [0.05, 900], [0.13, 800]]
            }, {
                stack: 'ss',
                data: [[0.01, 3000], null, [0.13, 4000]]
            }]
        };
        // "Base Axis" 是 xAxis 。系列的诸数据项根据 data index 进行分组。
        // 堆叠结果为：
        stackedResult = [{
            data: [[0.01, 10], [0.05, 20], [0.13, 30]]
        }, {
            data: [[0.01, 10 + 700], [0.05, 20 + 900], [0.13, 30 + 800]]
        }, {
            data: [[0.01, 10 + 700 + 3000], [0.05, 20 + 900 + 0], [0.13, 30 + 800 + 4000]]
        }]
        ```


{{ if: ${componentNameInLink} === 'line' }}
下面示例可以通过右上角 [toolbox](~toolbox) 中的堆叠切换看效果：

~[600x400](${galleryViewPath}doc-example/line-stack-tiled&edit=1&reset=1)
{{ /if }}

## stackStrategy(string) = 'samesign'

{{ use: partial-version(
    version = '5.3.3'
) }}

堆叠数值的计算方式，仅在设置了 [stack](~series-${componentNameInLink}.stack) 属性后生效。可选值：

+ `'samesign'` 仅当待堆叠数值与当前累积堆叠值正负符号一致时才堆叠。**(默认)**
+ `'all'`      堆叠所有数值，不区分正负。
+ `'positive'` 只堆叠正值。
+ `'negative'` 只堆叠负值。

## stackOrder(string) = 'seriesAsc'

{{ use: partial-version(
    version = '6.0.0'
) }}

堆叠顺序。可选值：

+ `'seriesAsc'`  按系列顺序堆叠。**(默认)**
+ `'seriesDesc'` 按系列反向顺序堆叠。

**注意：** 

+ `stackOrder` 应该为所有具有相同 `stack` 名称的系列定义。如果只为部分系列定义 `stackOrder`，当某些系列被隐藏（如通过图例切换）时，可能会导致堆叠顺序发生意外变化。

+ 当前不支持极坐标系。