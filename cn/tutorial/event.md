{{ target: event }}

# ECharts 中的事件和行为

在 ECharts 的图表中用户的操作都会有相应的事件，开发者可以监听这些事件然后通过回调函数做相应的处理，比如跳转到一个地址，或者弹出对话框，或者做数据下钻等等。

在 ECharts 3 中绑定事件跟 2 一样都是通过 [on](api.html#EChartsInstance.on) 方法，但是事件名称比 2 更加简单了，跟 dom 事件一样事件名就是全小写的字符串，如下是一个绑定点击操作的示例。

```js
myChart.on('click', function (params) {
    // 控制台打印数据的名称
    console.log(params.name);
});
```

在 ECharts 中事件分为两种类型，一种是用户鼠标操作点击，或者 hover 图表的图形时触发的事件，还有一种是用户在使用可以交互的组件后触发的行为事件，例如在切换图例开关时触发的 ['legendselectchanged'](api.html#events.legendselectchanged) 事件（这里需要注意切换图例开关是不会触发`'legendselected'`事件的），数据区域缩放时触发的 ['datazoom'](api.html#events.legendselectchanged) 事件等等。

## 鼠标事件的处理

ECharts 支持常规的鼠标事件类型，包括 `'click'`, `'dblclick'`, `'mousedown'`, `'mousemove'`, `'mouseup'`, `'mouseover'`, `'mouseout'` 事件，下面先来看一个简单的点击柱状图后打开相应的百度搜索页面的示例。

```js
// 基于准备好的dom，初始化ECharts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// 处理点击事件并且条状到相应的百度搜索页面
myChart.on('click', function (params) {
    window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
});
```

所有的鼠标事件的参数 `params` 是一个包含点击图形的数据信息的对象，如下格式：
```js
{
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值
    value: number|Array
}
```
你可以在回调函数中获得这个对象中的数据名，系列名称后在自己的数据仓库中索引得到其它的信息候更新图表，显示浮层等等，如下示例代码：

```js
myChart.on('click', function (parmas) {
    $.get('detail?q=' + params.name, function (detail) {
        myChart.setOption({
            series: [{
                name: 'pie',
                // 通过饼图表现单个柱子中的数据分布
                data: [detail.data]
            }]
        });
    });
});
```

## 组件交互的行为事件

在 ECharts 中基本上所有的组件交互行为都会触发相应的事件，常用的事件和事件对应参数在 [events](api.html#events) 文档中有列出。

下面是监听一个图例开关的示例：

```js
// 图例开关的行为只会触发 legendselectchanged 事件
myChart.on('legendselectchanged', function (params) {
    // 获取点击图例的选中状态
    var isSelected = params.selected[params.name];
    // 在控制台中打印
    console.log((isSelected ? '选中了' : '取消选中了') + '图例' + params.name);
    // 打印所有图例的状态
    console.log(params.selected);
});
```

## 代码触发 ECharts 中组件的行为

上面提到诸如`'legendselectchanged'`事件会由组件交互的行为触发，那除了用户的交互操作，有时候也会有需要在程序里调用方法触发图表的行为，诸如显示 tooltip，选中图例。

在 ECharts 2.x 是通过 `myChart.component.tooltip.showTip` 这种形式调用相应的接口触发图表行为，入口很深，而且涉及到内部组件的组织。因此在 ECharts 3 里改为通过调用 `myChart.dispatchAction({ type: '' })` 触发图表行为，统一管理了所有动作，也可以方便的根据需要去记录用户的行为路径。

常用的动作和动作对应参数在 [action](api.html#action) 文档中有列出。

下面示例演示了如何通过`dispatchAction`去轮流高亮饼图的每个扇形。

~[600x400](${galleryViewPath}doc-example/pie-highlight&edit=1&reset=1)
