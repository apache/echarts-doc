
{{target: series-radar}}

# series.radar(Object)

**雷达图**

雷达图主要用于表现多变量的数据，例如球员的各个属性分析。依赖 [radar](~radar) 组件。

下面是 AQI 数据用雷达图表现的示例。

~[600x500](${galleryViewPath}radar-aqi&edit=1&reset=1)

## type(string) = 'radar'

{{ use: partial-series-name() }}

## radarIndex(number)

雷达图所使用的 [radar](~radar) 组件的 index。

{{ use:partial-symbol(
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
折线拐点标志的样式。
{{use: partial-item-style(
    prefix="##",
    useColorPalatte=true,
    hasCallback=true
)}}

## lineStyle(Object)
线条样式。
{{use:partial-line-style(prefix="##")}}

## areaStyle(Object)
区域填充样式。
{{use: partial-area-style(prefix="##")}}

## emphasis(Object)
高亮的样式设置
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

雷达图的数据是多变量（维度）的，如下示例：

```js
data : [
    {
        value : [4300, 10000, 28000, 35000, 50000, 19000],
        name : '预算分配（Allocated Budget）'
    },
    {
        value : [5000, 14000, 28000, 31000, 42000, 21000],
        name : '实际开销（Actual Spending）'
    }
]
```

其中的`value`项数组是具体的数据，每个值跟 [radar.indicator](~radar.indicator) 一一对应。

### name(string)
数据项名称

### value(number)
单个数据项的数值。

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=4,
    prefix="##",
    name="单个数据"
) }}

### label(Object)
单个拐点文本的样式设置。
{{ use: partial-label(
    prefix="###",
    defaultPosition="top"
) }}

### itemStyle(Object)
单个拐点标志的样式设置。
{{use: partial-bar-item-style(prefix="###")}}

### lineStyle(Object)
单项线条样式。
{{use:partial-line-style(prefix="###")}}

### areaStyle(Object)
单项区域填充样式。
{{use: partial-area-style(prefix="###")}}

### emphasis(Object)
单个数据项样式的高亮设置。
#### label(Object)
{{ use: partial-label(
    prefix="####", defaultPosition="top"
) }}
#### itemStyle(Object)
{{use: partial-bar-item-style(prefix="####")}}
#### lineStyle(Object)
{{use: partial-line-style(prefix="####")}}
#### areaStyle(Object)
{{use: partial-area-style(prefix="####")}}



{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


{{use:partial-z-zlevel(
    prefix="#",
    componentName="雷达图"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}

{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}
