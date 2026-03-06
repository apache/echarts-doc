
{{ target: partial-stack }}

## stack(string)

Name of the stack group. Series with the same `stack` name on the **same category axis** will be stacked on top of each other. See [stackStrategy](~series-${componentNameInLink}.stackStrategy) for customizing how values are stacked.

**Notice:** Stacking **only supports the stacked axis being of type** `'value'` or `'log'`. Axes of type `'time'` and `'category'` are **not supported** as the stacked axis.

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