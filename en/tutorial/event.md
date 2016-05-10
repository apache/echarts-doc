{{ target: event }}

# Events and actions in ECharts

User's operation all trigger corresponding event in ECharts, developer can monitor these events and handle accordingly through callback function, such as jump to an address or pop up dialog box, or drill down data and so on.

Bind events in ECharts 3 and 2 all use [on](api.html#EChartsInstance.on) ,  but event name is much simpler than it is in 2, events that are same as dom events all use string of lowercase, below is an example of binding click operation.

```js
myChart.on('click', function (params) {
    // data name console prints
    console.log(params.name);
});
```

Events in ECharts are divided into two types, one is events triggered by user's mouse clicking or hovering chart graphic, another is action events triggered by user's using of interactive component, such as  ['legendselectchanged'](api.html#events.legendselectchanged) event （attention: change legend switch will not trigger `'legendselected'` event） triggered by changing legend switch, ['datazoom'](api.html#events.legendselectchanged) event triggered by zooming data area and so on.

## Handling of mouse event

ECharts support normal mouse event type including `'click'`, `'dblclick'`, `'mousedown'`, `'mousemove'`, `'mouseup'`, `'mouseover'`, `'mouseout'` event, next let's see an example of Baidu search page after opening a simple click bar chart.

```js
// Based on prepared dom, initialize ECharts example
var myChart = echarts.init(document.getElementById('main'));

// data and configuration item of specified chart
var option = {
    xAxis: {
        data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
    },
    yAxis: {},
    series: [{
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
// Use specified configuration item and data to show chart.
myChart.setOption(option);
// handle click event and adjust to corresponding Baidu search page
myChart.on('click', function (params) {
    window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
});
```

`params` of all mouse events is an object that contains data information of charts, format is as followed:
```js
{
    // type of the component to which the clicked glyph belongs
    // i.e., 'series', 'markLine', 'markPoint', 'timeLine'
    componentType: string,
    // series type (make sense when componentType is 'series')
    // i.e., 'line', 'bar', 'pie'
    seriesType: string,
    // series index in incoming option.series (make sense when componentType is 'series')
    seriesIndex: number,
    // series name (make sense when componentType is 'series')
    seriesName: string,
    // data name, category name
    name: string,
    // data index in incoming data array
    dataIndex: number,
    // incoming rwa data item
    data: Object,
    // Some series, such as sankey or graph, maintains more than
    // one types of data (nodeData and edgeData), which can be
    // distinguished from each other by dataType with its value
    // 'node' and 'edge'.
    // On the other hand, most series has only one type of data,
    // where dataType is not needed.
    dataType: string,
    // incoming data value
    value: number|Array
    // color of component (make sense when componentType is 'series')
    color: string
}
```

How to discriminate elements that can be clicked:
```js
myChart.on('click', function (params) {
    if (params.componentType === 'markPoint') {
        // Clicked on markPoint.
        if (params.seriesIndex === 5) {
            // Clicked on a markPoint which belongs to a series indexed with 5.
        }
    }
    else if (params.componentType === 'series') {
        if (params.seriesType === 'graph') {
            if (params.dataType === 'edge') {
                // Clicked on an edge of the graph.
            }
            else {
                // Clicked on a node of the graph.
            }
        }
    }

});
```

After getting data name and series name of this object in callback function, and other information in the data index, you can update charts, show floating layer and so on, Sample code is as followed:

```js
myChart.on('click', function (parmas) {
    $.get('detail?q=' + params.name, function (detail) {
        myChart.setOption({
            series: [{
                name: 'pie',
                // display data distribution in single post through pie chart
                data: [detail.data]
            }]
        });
    });
});
```

## component interaction event

Basically all component interaction in ECharts trigger corresponding event, frequently used events and corresponding parameters are listed in [events](api.html#events).

Below is example that monitors a legend switch:

```js
// Action of legend switch only trigger legendselectchanged event
myChart.on('legendselectchanged', function (params) {
    // obtain selected status of clicked legend
    var isSelected = params.selected[params.name];
    // print console.log((isSelected ? 'select' : 'unselect') + 'legend' + params.name);
    // print all legend status
    console.log(params.selected);
});
```

## Actions of code triggering components in ECharts

Events like`'legendselectchanged'` mentioned above wil be triggered by component interaction, except user's interaction operation, sometimes methods needed to be called to trigger chart, such as show tooltipand select legend.

ECharts 2.x uses corresponding interface to trigger chart through  `myChart.component.tooltip.showTip`, entrance is deep and involves organization of inner component. So ECharts 3 triggers chart through `myChart.dispatchAction({ type: '' })` , by that, ECharts 3 can not only manage all actions but also record user paths based on needs.
Frequently used actions and the parameters of actions are listed in [action](api.html#action).

Below display how to take turns to highlight each sector of pie chart through`dispatchAction`.

~[600x400](${galleryViewPath}doc-example/pie-highlight&edit=1&reset=1)
