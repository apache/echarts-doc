
{{target: component-visual-map}}

# visualMap(Array|Object)

`visualMap` is a visual map component. It is used to do『visual coding』, which refers to mapping the data to the visual elements（visual channel）.

visual element could be: <br>
{{use: partial-visual-map-visual-type}}

`visualMap` could be multiply defined. Therefore, multiple dimensions of data could be mapped in the meanwhile. 

`visualMap` could be defined as [Piecewise type（visualMapPiecewise）](~visualMap-piecewise) or [Continuous type（visualMapContinuous）](~visualMap-continuous), or distinguished by `type`. For instance: 

```javascript
option = {
    visualMap: [
        { // the first visualMap component
            type: 'continuous', // defined to be continuous viusalMap
            ...
        },
        { // the sencond visualMap component
            type: 'piecewise', // defined to be piecewise visualMap
            ...
        }
    ],
    ...
};
```

<br>
**The configuration of visual mapping mode**

Since it is the mapping from『data』 to 『visual element』, 『specific dimension』（Reference to [visualMap.dimension](~visualMap.dimension)） could be assigned to map into some selected『visual elements』（Reference to [visualMap.inRange](~visualMap.inRange) and [visualMap.outOfRange](~visualMap.outOfRange)） in `visualMap`.


<br>
**The relation with dataRange in ECharts2**

`visualMap` is renamed and extended from the  `dataRange` component in ECharts2 . In ECharts3,  the configuration item of `dataRange` from `option` is till compatible, which would automatically transfer to `visualMap` configuration item. We recommend you to write  `visualMap` instead of `dataRange` in option. 

<br>
**Here is the detailed introduction to all configurations of visualMap.**

<br>
<br>


{{import: component-visual-map-continuous}}
{{import: component-visual-map-piecewise}}







{{target: partial-visual-map-visual-type}}
`figure type（symbol）`、`figure size（symbolSize）`<br>
`color（color）`、`the transparency of color（colorAlpha）`、<br>
`the intensity of color（colorLightness）`、`the Saturation of color（colorSaturation）`、`color hue（colorHue）`





{{target: partial-visual-map-range}}
`${rangeType}` could customize target series（reference to [${visualMapName}.seriesIndex](~${visualMapName}.seriesIndex)）visual form, and also customizes visual form of `${visualMapName}` itself. Generally speaking, if `${visualMapName}` controlled scatter diagram, then `${rangeType}` would define its `color`、`size` and so on. Both of them correspond with each other.

Definition mode, for instance: 

```javascript
visualMap: [
    {
        ...,
        ${rangeType}: {
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [30, 100]
        }
    }
]
```

If you want to respectively define the visual style of `${visualMapName}` itself and `target series`, you should define as follows: 

```javascript
visualMap: [
    {
        ...,
        target: { // refers to the visual style of target series.
            ${rangeType}: {
                color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
                symbolSize: [60, 200]
            }
        },
        controller: { // refers to the visual style of ${visualMapName} itself.
            ${rangeType}: {
                symbolSize: [30, 100]
            }
        }
    }
]
```

Or define as follows: 
```javascript
visualMap: [
    {
        ...,
        ${rangeType}: { // refers to the shared visual style of target series and${visualMapName}.
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [60, 200]
        },
        controller: { // refers to the visual style of ${visualMapName} itself, which would cover the shared one.
            ${rangeType}: {
                symbolSize: [30, 100]
            }
        }
    }
]
```

**About visual type**

+ In ${rangeType}, there could be any definitions of 『visual type』（such as `color`、`symbolSize` and ect.）. These visual types can be adopted in the meanwhile.

+The values of every visual type, all of which are expressed by the form of `Array` （they are expressed by the form of `Object`  only in [visualMap-piecewise.categories](~visualMap-piecewise.categories). If it was written as `number` or `string`, it would turn to `Array`.

+The content of `Array`: 

    + For `figure size（symbolSize）`、`the transpatency of color（colorAlpha）`、`the intensity of color（colorLightness）`、the saturation of color（colorSaturation）`、`color hue（colorHue）`: 

    `Array` is always: `[the visual value with which the minimum and maximum data values correspond]`.

    For example: colorLightness: [0.8, 0.2], which refers to that the `minimum data value` among all datas map to the `0.8` of `color intensity` , the `maximum data value` map to the `0.2` of `color intensity`. The mapping results of other data values between the minimum and the maximum would be acquired according to linear calculation.

    + For `color（color）` or `figure type（symbol）`: 

    `Array` for instance: `['color0', 'color1', 'color2', ...]` or `['circle', 'rect', 'diamond', ...]`.

    Referring to the minimum data value which maps to the first item of  `Array` and the maximum value which maps to the last item of  `Array`. Other values between the minimum and the maximum would be gained according to linear calculation. 

+ Under [visualMap-piecewise.categories](~visualMap-piecewise.categories) mode, visual definition adopts `Object`. For example（[See the sample](${galleryEditorPath}doc-example/scatter-visualMap-categories&edit=1&reset=1)）: 

```javascript
${rangeType}: {
    color: {
        'excellent': 'red',
        'good': 'black',
        '': 'green' // empty word string, indicating that others are all 'green'.
    }
}
```




{{target: partial-visual-map-common}}


## show(boolean) = true

Whether to show ${visualMapName} component. If it was set as `false`, it would not show. However, the data mapping function still remains. 


## dimension(string) = 0

Assign a『specific dimension』of data to map tp visual element.『data』is [series.data](~series.data).
The [series.data](~series.data) could be understood as a double dimensional array, for instance: 

```javascript
[
    [12, 23, 43],
    [12, 23, 43],
    [43, 545, 65],
    [92, 23, 33]
]
```

Among them, each row is a dimension which equals with `dimension`. 
For example, when `dimension` is 1, the second row is selected to map to visual element.


## seriesIndex(number|Array.<number>)

Assign the data of which series should be adopted, namely the [series.data](~series.data) of which series.

It defaults to select all series.

## inRange

Define the visual element in **selected area** . Optional visual elements are: 
{{use: partial-visual-map-visual-type}}

{{use: partial-visual-map-range(
    rangeType='inRange',
    visualMapName=${visualMapName},
    galleryEditorPath=${galleryEditorPath}
)}}


## outOfRange

Define the visual element outside **selected area** . Optional visual elements are: 
{{use: partial-visual-map-visual-type}}

{{use: partial-visual-map-range(
    rangeType='outOfRange',
    visualMapName=${visualMapName},
    galleryEditorPath=${galleryEditorPath}
)}}



{{ use: partial-rect-layout(
    componentName="visualMap ",
    defaultZ="4",
    defaultLeft="0",
    defaultRight="auto",
    defaultTop="auto",
    defaultBottom="0"
) }}


## orient(string) = 'vertical'

horizontal（`'horizontal'`）or vertical（`'vertical'`）. 


## padding(number|Array) = 5

{{ use: partial-padding(componentName=${visualMapName})}}


## backgroundColor(Color) = 'rgba(0,0,0,0)'

background color.


## borderColor(Color) = '#ccc'

border color. 


## borderWidth(number) = 0

border width, its unit is px.


## formatter(string|Function)

the formatter tool of label.

+ If it was set as `string`, it refers to template, for instance: `aaaa{value}bbbb{value2}`. Among them, `{value}` and `{value2}` are the range at present.

+ If it was set as `Function`, it refers to callback function, for instance: 

```javascript
formatter: function (value, value2) {
    return 'aaaa' + value + 'bbbb' + value2; // displayed content of range label.
}
```

## color(Array) = ['#bf444c', '#d88273', '#f6efa6']

This configuration item is created to be compatible with ECharts2, which is not recommended in ECharts3. Its function has been transfered into [${visualMapName}.inRange](~${visualMapName}.inRange) and [${visualMapName}.outOfRange](~${visualMapName}.outOfRange).

If you want to use it, the following rules should be noticed: the sequence of `color` attribute is from `large` to `small`; but the sequence of `color` in [${visualMapName}.inRange](~${visualMapName}.inRange) or [${visualMapName}.outOfRange](~${visualMapName}.outOfRange) is always from `small` to `large`, which is different from the previous situation.  


## textStyle

{{ use:partial-text-style(
    prefix='##',
    name='visualMap ',
    defaultColor='#333'
) }}
