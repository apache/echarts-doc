{{ target: events }}
# events

ECharts 中的事件列表，分为两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 [dispatchAction](~EChartsInstance.dispatchAction) 后触发的事件。

## 鼠标事件

事件参数是事件对象的数据的各个属性，具体见各个图表类型的 label formatter 回调函数的 params 参数。

### click(Event)
### dblclick(Event)
### mousedown(Event)
### mousemove(Event)
### mouseup(Event)
### mouseover(Event)
### mouseout(Event)

## legendselected(Event)

**ACTION:** [legendSelect](~action.legend.legendSelect)


## legendunselected(Event)

**ACTION:** [legendUnSelect](~action.legend.legendUnSelect)


## legendselectchanged(Event)

**ACTION:** [legendToggleSelect](~action.legend.legendToggleSelect)

