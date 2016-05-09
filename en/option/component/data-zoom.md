{{target: component-data-zoom}}

# dataZoom(Array|Object)


`dataZoomx` component is used in zooming the data in or out in a specific area, which would be helpful to pay more attention to detailed information or scan the data overall. 


several valid subcomponent at present: 

+ [Inside data zoom component（dataZoomInside）](~dataZoom-inside): installed inside the coordinate axis system.

+ [Slider data Zoom component（dataZoomSlider）](~dataZoom-slider): operation through an individual slider.

+ [Selected toolbox data Zoom component（dataZoomSelect）](~toolbox.feature.dataZoom): zooming in or out date through selected full-screen in a specific area. All the accesses and configuration items are in `toolbox`.


Example: 
~[600x400](${galleryViewPath}doc-example/scatter-dataZoom-all&edit=1&reset=1)



**Tips: **

+ `dataZoom` mainly deals with `axis（axis）`. 

    Using [dataZoom.xAxisIndex](~dataZoom.xAxisIndex) or [dataZoom.yAxisIndex](~dataZoom.yAxisIndex) or [dataZoom.radiusAxisIndex](~dataZoom.radiusAxisIndex) or [dataZoom.angleAxisIndex](~dataZoom.angleAxisIndex) to assign a axis or  some axis which should be controlled by `dataZoom` .

+ `dataZoom` component can **exist in multiple**, which could all control at the same time. The components which control the same data axis would automatically link to take effect. 

+ the operational principle of `dataZoom` is to achieve the effect of `screen data zooming` through `data filtering`.

    The result varies as the data filtering mode changes, reference: [dataZoom.filterMode](~dataZoom.filterMode). 

+ There are 2 kinds of valid setting about the range of data window in `dataZoom` at present: 

    + percentage: reference to [dataZoom.start](~dataZoom.start) and [dataZoom.end](~dataZoom.end). 

    + absolute figure: reference to [dataZoom.startValue](~dataZoom.startValue) and [dataZoom.endValue](~dataZoom.endValue). 

+ If the range of `dataZoom` was assigned by percentage(and there is no setting about the `min`/`max`/`scale`), the result of `dataZoom` relates to its order in which the `dataZoom` is defined. For instance, there is a defined group: 

    ```javascript
    {
        dataZoom: [
             {xAxisIndex: 0, start: 30, end: 70},
             {yAxisIndex: 0, start: 20, end: 80}
        ]
    }
    ```
    As the definition of dataZoom component on x aixs is before it is on y axis, [30, 70] of x axis indicates the 30% ~70% portion of all the data.  
    However, [20, 80] of dataZoom in y axis refers to the 20%~80% dataset which is filtered by [30, 70] on x axis. With such a setting, when the dataZoom component on y axis is dragged, only the data scope on y axis would be changed; while as the the dataZoom component on x axis is dragged, both the data scopes on x axis and y axis would be changed at the same time(namely, y axis zooming in or out as the x axis window change.) 

    If you want to change this processing sequence, you only need to change the orders of different items in datazoom.
    Certainly, if the min/max on y axis is set, [20, 80] indicates the 20%~80% min / max, and the datazoom component on x axis would not influence the data scope on y axis any more.  


<br>
<br>


Below is the detailed introduction: 



{{import: component-data-zoom-inside}}
{{import: component-data-zoom-slider}}






{{target: partial-data-zoom-axis-example}}
 `number` indicates controlling one axis, while `Array` indicates controlling more than one axis.

If there is the following ECharts option: 

```javascript
option: {
    ${axisName}: [
        {...}, // first ${axisName}
        {...}, // second ${axisName}
        {...}, // third ${axisName}
        {...}  // fourth ${axisName}
    ],
    dataZoom: [
        { // first dataZoom component
            ${axisName}Index: [0, 2] // indicating that this dataZoom component controls the first and the third ${axisName}
        },
        { // the second dataZoom component
            ${axisName}Index: 3      // indicating this data component controls the fourth ${axisName}
        }
    ]
}
```




{{target: partial-data-zoom-common}}



## xAxisIndex(number|Array) = null

Setting up `x axis` which is controlled by `${dataZoomName}` （namely,[xAxis](~xAxis), which is a concept in rectangular coordinate system, reference to [grid](~grid)）. 

without assignment, as [${dataZoomName}.orient](~${dataZoomName}.orient) is `'horizontal'`, it defaults to control all the `xAxis`.

{{use: partial-data-zoom-axis-example(
    axisName='xAxis'
)}}


## yAxisIndex(number|Array) = null

Setting up `y axis` which is controlled by `${dataZoomName}` （namely, [yAxis](~yAxis), which is a concept in rectangular coordinate system, reference to [grid](~grid)）. 

without assignment, as [${dataZoomName}.orient](~${dataZoomName}.orient) is `'vertical'`, it defaults to control all the `yAxis`.

{{use: partial-data-zoom-axis-example(
    axisName='yAxis'
)}}


## angleAxisIndex(number|Array) = null


Setting up angleAxis which is controlled by `${dataZoomName}`（namely, [angleAxis](~angleAxis), which is a concept in polar coordinate system, reference to [polar](~polar)）. 

Without assignment, it defaults to control all the `angleAxis`.

{{use: partial-data-zoom-axis-example(
    axisName='angleAxis'
)}}


## radiusAxisIndex(number|Array) = null

Setting up radiusAxis which is controlled by `${dataZoomName}`（namely,[radiusAxis](~radiusAxis), which is a concept in polar coordinate system, reference to [polar](~polar)）. 

Without assignment, it defaults to control all the  `radiusAxis`.

{{use: partial-data-zoom-axis-example(
    axisName='radiusAxis'
)}}


## filterMode(string) = 'filter'

The operational principle of `dataZoom` is to achieve the effect of `data window zooming` through `data filtering`.

The result varies as the setting of data filtering mode changes.

Valid values: 

+ 'filter'

    The data outside the data window, being **filtered out**. This is the most frequently used configuration item.

+ 'empty'

    The data outside the data window, being  **set as empty**.
    compared with『being filtered out』, the data of『being set as empty』would be shown as empty data, which would still occupies position.

As the following example, the `filterMode` on y axis is set as `'empty'`, and the `filterMode` on x axis is set as  `'filter'`. When datazoom is processing  on y axis, the part of column beyond the y axis would be 『set as empty』,  which would still occupies a position on x axis but not be shown. This effect is more clear for the filtering setting about outlier.  

~[600x400](${galleryViewPath}doc-example/bar-dataZoom-filterMode&edit=1&reset=1)


## start(number) = 0

The start percentage of the scope of data window. The scope: 0 ~ 100. 

[${dataZoomName}.start](~${dataZoomName}.start) and [${dataZoomName}.end](~${dataZoomName}.end) both define the scope of data window through **percentage**.


## end(number) = 100

The end percentage of the scope of data window. The scope: 0 ~ 100. 

[${dataZoomName}.start](~${dataZoomName}.start) and [${dataZoomName}.end](~${dataZoomName}.end) both define the scope of data window through  **percentage**.


## startValue(number|string|Date) = null

the start numerical value of the scope of data window. If it [${dataZoomName}.start](~${dataZoomName}.start) was set up, `startValue` becomes invalid.

[${dataZoomName}.startValue](~${dataZoomName}.startValue) and [${dataZoomName}.endValue](~${dataZoomName}.endValue) both define the scope of data window through **absolute numerical value**.

Notice, if an axis was set as `category`, `startValue` could be set as `index` of `axis.data` array or as the array value itself.   
Under the latter condition, it would internally and automatically translate to the index of array. 


## endValue(number|string|Date) = null

The end value of the scope of data window. If  [${dataZoomName}.end](~${dataZoomName}.end) was set up,  `endValue` would becomes invalid. 

[${dataZoomName}.startValue](~${dataZoomName}.startValue) and [${dataZoomName}.endValue](~${dataZoomName}.endValue) both define the scope of data window through **absolute value**.

Notice, if an axis was set as `category`, `endValue` could be set as `index` of `axis.data` array or as the array value itself.  
Under the latter condition, it would internally and automatically translate to the index of array. 

## orient(string) = null

specify whether the layout is horizontal or vertical. What's more, in terms of rectangular coordinate system, it decides whether the horizontal axis or vertical axis is controlled under default condition. 

Valid values: 

+ `'horizontal'`: horizontal.

+ `'vertical'`: vertical.


## zoomLock(boolean) = false

specify whether to lock the size of selected area(or data window).

With the setting of `true` , the size of selected area  is locked, indicating that translation is avialable while zoom is not.


## throttle(number) = 100

Setting up the frequency which triggers views updating. Its unit is milli second（ms）, which is unnecessary to be changed.

