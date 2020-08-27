{{target: series-radar}}

# series.radar(Object)

**radar chart**

Radar chart is mainly used to show multi-variable data, such as the analysis of a football player's varied attributes. It relies [radar](~radar) component.

Here is the example of AQI data which is presented in radar chart.

~[600x500](${galleryViewPath}radar-aqi&edit=1&reset=1)

## type(string) = 'radar'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-series-name() }}

## radarIndex(number)

Index of [radar](~radar) component that radar chart uses.

{{ use:partial-symbol(
    name="radar",
    seriesType="radar",
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="#",
    hasCallback=true
) }}


## label(Object)
{{use: partial-label-desc}}
{{use: partial-label(
    prefix="##",
    defaultPosition="'top'",
    formatter=true
)}}

## itemStyle(Object)
Item style of the inflection point of the lines.
{{use: partial-item-style(
    prefix="##",
    useColorPalatte=true,
    hasCallback=true
)}}

## lineStyle(Object)
Line style.
{{use:partial-line-style(prefix="##")}}

## areaStyle(Object)
Area filling style.
{{use: partial-area-style(prefix="##")}}


## emphasis(Object)
### itemStyle(Object)
{{use: partial-item-style(prefix="###")}}
### label(Object)
{{use: partial-label(
    prefix="###",
    formatter=true
)}}
### lineStyle(Object)
{{use: partial-line-style(prefix="###")}}
### areaStyle(Object)
{{use: partial-area-style(prefix="###")}}



## data(Array)

The data in radar chart is multi-variable (dimension). Here is an example:

```js
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

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="##",
    name="single data"
) }}

### label(Object)
Style setting of the text on single inflection point.
{{ use: partial-label(
    prefix="###",
    defaultPosition="top"
) }}

### itemStyle(Object)
Style setting of the symbol on single inflection point.
{{use: partial-item-style(prefix="###")}}

### lineStyle(Object)
Line style of a single item.
{{use:partial-line-style(prefix="###")}}

### areaStyle(Object)
Area filling style of a single item.
{{use: partial-area-style(prefix="###")}}

### emphasis(Object)
#### label(Object)
{{ use: partial-label(
    prefix="####", defaultPosition="top"
) }}
#### itemStyle(Object)
{{use: partial-item-style(prefix="####")}}
#### lineStyle(Object)
{{use: partial-line-style(prefix="####")}}
#### areaStyle(Object)
{{use: partial-area-style(prefix="####")}}



{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


{{use:partial-z-zlevel(
    prefix="#",
    componentName="radar chart"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-animation(
    prefix="#"
)}}

{{use: partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}
