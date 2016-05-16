{{target: series-radar}}

# series.radar(Object)

**radar chart**

Radar chart is mainly used to show multivariable data, such as the analysis of football player's each attribute. It relies on [radar](~radar) component.

Here is the sample of AQI which is showed in radar chart.

~[600x500](${galleryViewPath}radar-aqi&edit=1&reset=1)

## type(string) = 'radar'

{{ use: partial-series-name() }}

## radarIndex(number)

The index of [radar](~radar) component used in radar chart. 

{{ use:partial-symbol(
    seriesType="radar",
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="#",
    hasCallback=true
) }}

## label(Object)
{{use: partial-label-desc}}
### normal(Object)
{{use: partial-label(
    prefix="###",
    defaultPosition="'top'",
    formatter=true
)}}
### emphasis(Object)
{{use: partial-label(
    prefix="###",
    formatter=true
)}}

## itemStyle(Object)
The item style of the inflection point of broken line. 
### normal(Object)
{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{use: partial-item-style(prefix="###")}}

## lineStyle(Object)
line style.
### normal(Object)
{{use:partial-line-style(prefix="###")}}
### emphasis(Object)
{{use: partial-line-style(prefix="###")}}

## areaStyle(Object)
area filling style.
### normal(Object)
{{use: partial-area-style(prefix="###")}}
### emphasis(Object)
{{use: partial-area-style(prefix="###")}}


## data(Array)

The data in radar chart is multivariable (dimension), here is the example: 

```js
data : [
    {
        value : [4300, 10000, 28000, 35000, 50000, 19000],
        name : 'budget allocation (Allocated Budget) '
    },
     {
        value : [5000, 14000, 28000, 31000, 42000, 21000],
        name : 'Actual Spending (Actual Spending) '
    }
]
```

Among them, `value` item array are specific datas, of which all the values correspond with [radar.indicator](~radar.indicator) one by one.   

### name(string)
data item name

### value(number)
the numerical value of single data item.     

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="##",
    name="single data"
) }}

### label(Object)
The style setting about the text of single inflection point.
#### normal(Object)
{{ use: partial-label(
    prefix="####",
    defaultPosition="top"
) }}
#### emphasis(Object)
{{ use: partial-label(prefix="####") }}

### itemStyle(Object)
The style setting about the symbol of single inflection point.
#### normal(Object)
{{use: partial-bar-item-style(prefix="####")}}
#### emphasis(Object)
{{use: partial-bar-item-style(prefix="####")}}

### lineStyle(Object)
the line style of single item.
#### normal(Object)
{{use:partial-line-style(prefix="####")}}
#### emphasis(Object)
{{use: partial-line-style(prefix="####")}}

### areaStyle(Object)
The area filling style of single item. 
#### normal(Object)
{{use: partial-area-style(prefix="####")}}
#### emphasis(Object)
{{use: partial-area-style(prefix="####")}}


{{use:partial-z-zlevel(
    prefix="#",
    componentName="radar chart"
) }}

{{use: partial-animation(
    prefix="#"
)}}