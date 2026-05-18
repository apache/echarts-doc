
{{ target: partial-stack }}

## stack(string)

Name of the stack group. Series with the same `stack` name on the **same category axis** will be stacked on top of each other. See [stackStrategy](~series-${componentNameInLink}.stackStrategy) for customizing how values are stacked.

Two axes in the [Cartesian](~grid) or [polar](~polar) coordinate system determine the layout of series glyphs. In terms of `stack`, we can name the two axes as follows:
+ **Stacked Axis**: Series values on this axis are stacked. Only `axis.type: 'value' | 'log'` are supported to stack.
+ **Base Axis**: Series values on this axis are **not** stacked, but this axis affects the stack grouping strategy:
    + If "Base Axis" is `axis.type: 'category'`: Series data items are grouped by the values on this axis. For example,
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
        // "Base Axis" is xAxis, and series are grouped by values
        // on xAxis (i.e., data[i][0]).
        // It generates a stacked result like:
        stackedResult = [{
            data: [['a', 10], ['b', 20], ['c', 30]]
        }, {
            data: [['a', 10 + 700], ['b', 20 + 900], ['c', 30 + 800]]
        }, {
            data: [['a', 10 + 700 + 3000], ['b', 20 + 900 + 0], ['c', 30 + 800 + 4000]]
        }]
        ```
    + If "Base Axis" is `axis.type: 'value' | 'time' | 'log'`: Currently we only support to group series data items by data index for performance considerations. **Users should ensure data indices between different series correspond correctly**. For example,
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
        // "Base Axis" is xAxis, and series are grouped by data index
        // regardless of values on xAxis (i.e., data[i][0]).
        // It generates a stacked result like:
        stackedResult = [{
            data: [[0.01, 10], [0.05, 20], [0.13, 30]]
        }, {
            data: [[0.01, 10 + 700], [0.05, 20 + 900], [0.13, 30 + 800]]
        }, {
            data: [[0.01, 10 + 700 + 3000], [0.05, 20 + 900 + 0], [0.13, 30 + 800 + 4000]]
        }]
        ```

{{ if: ${componentNameInLink} === 'line' }}
You can view the effect of the example below by switching stacks in the [toolbox](~toolbox) in the top-right corner.

~[600x400](${galleryViewPath}doc-example/line-stack-tiled&edit=1&reset=1)
{{ /if }}

## stackStrategy(string) = 'samesign'

{{ use: partial-version(
    version = '5.3.3'
) }}

Strategy for stacking values, only effective when [stack](~series-${componentNameInLink}.stack) is set. Optional values:

+ `'samesign'` Only stack values if the value to be stacked has the **same sign** as the currently cumulated stacked value. **(Default)**
+ `'all'`      Stack all values regardless of positive or negative.
+ `'positive'` Only stack positive values.
+ `'negative'` Only stack negative values.

## stackOrder(string) = 'seriesAsc'

{{ use: partial-version(
    version = '6.0.0'
) }}

Stack order. Optional values:

+ `'seriesAsc'`  Stack in series order. **(Default)**
+ `'seriesDesc'` Stack in reversed series order.

**Notice:** 

+ `stackOrder` should be defined for all series with the same `stack` name. If `stackOrder` is defined for only some of the series, the stack order may change unexpectedly when certain series are hidden (e.g., through legend toggle).

+ Not supported in `polar` coordinate system.