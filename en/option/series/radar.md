
{{ target: series-radar }}

# series.radar(Object)

**radar chart**

Radar chart is mainly used to show multi-variable data, such as the analysis of a football player's varied attributes. It relies [radar](~radar) component.

Here is the example of AQI data which is presented in radar chart.

~[600x500](${galleryViewPath}radar-aqi&edit=1&reset=1)

## type(string) = 'radar'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby(
    defaultColorBy = "'data'"
) }}

## radarIndex(number)

Index of [radar](~radar) component that radar chart uses.

{{ use: partial-symbol(
    seriesType = "radar",
    defaultSymbol = "'circle'",
    defaultSymbolSize = 4,
    prefix = "#",
    hasCallback = true
) }}

## label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "##",
    defaultPosition = "'top'",
    formatter = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## itemStyle(Object)

Item style of the inflection point of the lines.

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = true,
    useDecal = true,
    decalOnlyWithAreaStyle = true
) }}

## lineStyle(Object)

Line style.

{{ use: partial-line-style(
    prefix = "##",
    defaultJoin = "'round'"
) }}

## areaStyle(Object)

Area filling style.

{{ use: partial-area-style(
    prefix = "##",
    defaultOpacity = 0.7
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

{{ use: radar-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-radar.emphasis.focus) is set.

{{ use: radar-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-radar.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: radar-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: partial-series-group-id() }}

## data(Array)

The data in radar chart is multi-variable (dimension). Here is an example:

```ts
data : [
    {
        value : [4300, 10000, 28000, 35000, 50000, 19000],
        name : 'Allocated Budget'
    },
    {
        value : [5000, 14000, 28000, 31000, 42000, 21000],
        name : 'Actual Spending'
    }
]
```

Among them, `value` item array contains data that is corresponding to [radar.indicator](~radar.indicator).

### name(string)

Data item name

### value(number)

Numerical value of a single data item.

{{ use: partial-data-group-id(
    prefix = '##'
) }}

{{ use: partial-symbol(
    defaultSymbol = "'circle'",
    defaultSymbolSize = 4,
    prefix = "##",
    name = "single data"
) }}

### label(Object)

Style setting of the text on single inflection point.

{{ use: partial-label(
    prefix = "###",
    defaultPosition = "top"
) }}

### itemStyle(Object)

Style setting of the symbol on single inflection point.

{{ use: partial-item-style(
    prefix = "###"
) }}

### lineStyle(Object)

Line style of a single item.

{{ use: partial-line-style(
    prefix = "###",
    defaultJoin = "'round'"
) }}

### areaStyle(Object)

Area filling style of a single item.

{{ use: partial-area-style(
    prefix = "###",
    defaultOpacity = 0.7
) }}

### emphasis(Object)

Configurations of emphasis state.

{{ use: radar-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state.

{{ use: radar-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of selected state.

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: radar-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "Radar"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: radar-state }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter = ${prefix} === '##'
) }}

#${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = "#" + ${prefix},
    defaultJoin = "'round'",
    hasInherit = ${state} === 'emphasis'
) }}

#${prefix} areaStyle(Object)

{{ use: partial-area-style(
    prefix = "#" + ${prefix}
) }}

