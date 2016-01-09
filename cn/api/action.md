{{ target: action }}
# action

ECharts 中支持的图表行为，通过 [dispatchAction](~echartsInstance.dispatchAction) 触发。

## highlight(Action)

高亮某个数据图形，或者某个系列的所有数据的图形。


## downplay(Action)

## legend

[图例组件](option.html#legend)相关的行为，必须引入[图例组件](option.html#legend)后才能使用。

### legendSelect(Action)
开启图例。

```js
dispatchAction({
    type: 'legendSelect',
    // 图例名称
    name: '图例1'
})
```

### legendUnSelect(Action)
关闭图例。

```js
dispatchAction({
    type: 'legendUnSelect',
    // 图例名称
    name: '图例1'
})
```

### legendToggleSelect(Action)
开关图例。
```js
dispatchAction({
    type: 'legendToggleSelect',
    // 图例名称
    name: '图例1'
})
```


## tooltip

### showTip(Action)

### hideTip(Action)

## dataZoom

## visualMap