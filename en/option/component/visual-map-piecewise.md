
{{target: component-visual-map-piecewise}}

# visualMap.piecewise(Object)

**Piecewise visual Map Component (visualMapPiecewise) **

 (Reference to [the introduction of visual Map component (visualMap)](~visualMap)) 

Its is shown as follow:
~[600x400](${galleryViewPath}doc-example/scatter-visualMap-piecewise&edit=1&reset=1)


There are 3 modes of Piecewise visual Map Component: 

+ split the continuous data averagely: Saveral pieces are automatically and averagely split according to [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber).
+ Custom split of continuous data: define the range of each piece according to [visualMap-piecewise.pieces](~visualMap-piecewise.pieces).
+ discrete data (category data) : category defnition in [visualMap-piecewise.categories](~visualMap-piecewise.categories).


<br>
<br>

## type(string) = piecewise

It belongs to piecewise type.

## splitNumber(number) = 5

For continuous data, it is automatically and averagely split several pieces which defaults to be 5 pieces. 
The range of continuous data needs to be assigned by [max](~visualMap-piecewise.max) 和 [min](~visualMap-piecewise.min).

If [visualMap-piecewise.pieces](~visualMap-piecewise.pieces) or [visualMap-piecewise.categories](~visualMap-piecewise.categories) was set up, the `splitNumber` would be invalid.


## pieces(Array)

The range, text and special styles of each piece in Custom『Piecewise visual Map Component (visualMapPiecewise) 』. For instance: 

```javascript
pieces: [
    {min: 1500},
    {min: 900, max: 1500},
    {min: 310, max: 1000},
    {min: 200, max: 300},
    {min: 10, max: 200, label: '10 to 200 (custom label) '},
    {value: 123, label: '123 (custom special color) ', color: 'grey'},
    {max: 5}
]
```

[Sample](${galleryEditorPath}doc-example/map-visualMap-pieces&edit=1&reset=1)

 (Notes: In ECharts2, `pieces` is called `splitList` which is still compatible in this version. But `pieces` is recommended.) 

You would realize the sequence in `pieces` only if you have a try. See more detailed rules in [visualMap.inverse](~visualMap.inverse).


## categories(Array)

It is used to present discrete data (or it could be called as category data and enumerated data).

As the data of assigned dimension ([visualMap-piecewise.dimension](~visualMap-piecewise.dimension)) is discrete data, such as data value『excellent』、『good』and so on, then configuration would be: 

```javascript
categories: ['severe pollution', 'severe pollution', ' Moderate Pollution', 'Light Pollution', 'good', 'excellent'],
```

[Sample](${galleryEditorPath}doc-example/scatter-visualMap-categories&edit=1&reset=1)

You would realize the sequence in `categories` only if you have a try.See more detailed rules in [visualMap.inverse](~visualMap.inverse). 


## min(number)

Assign visualMapPiecewise component with the minimum value. Reference to [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber)

As [visualMap-piecewise.pieces](~visualMap-piecewise.pieces) or [visualMap-piecewise.categories](~visualMap-piecewise.categories) is assigned, `'min'` doesn't need to be assigned.


## max(number)

Assign visualMapPiecewise component with the maximum value. Reference to [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber)

As [visualMap-piecewise.pieces](~visualMap-piecewise.pieces) or [visualMap-piecewise.categories](~visualMap-piecewise.categories) is assigned, `'max'` doesn't need to be assigned.



## selectedMode(string) = 'multiple'

Selected Mode could be: 

+ `'multiple'` (multiple selected). 
+ `'single'` (single selected). 


## inverse(boolean) = false

Whether to inverse.. 

+ As the mode is [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber), the rule about data size is the same with [visualMap-continuous.inverse](~visualMap-continuous.inverse).

+ As the mode is [visualMap-piecewise.pieces](~visualMap-piecewise.pieces) or [visualMap-piecewise.categories](~visualMap-piecewise.categories), the configurating position of each piece is decided by the define order of `pieces` or `categories` list, namely: 

    + When `inverse` is `false`: 

        * When [visualMap.orient](~visualMap.orient) is `'vertical'`, `pieces[0]` or `categories[0]` correspond with『upward side』.

        * When [visualMap.orient](~visualMap.orient) is `'horizontal'`, `pieces[0]` or `categories[0]` correspond with 『left side』.

    + When `inverse` is `true`, the results are opposite to the above situations. 

If you just have a try, you'll know it is not so complicated.


## precision(number) = null

The decimal precision of data display.

+ When the mode is [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber), the precision would automatically adapts to the related condition according to data.

+ When the mode is [visualMap-piecewise.pieces](~visualMap-piecewise.pieces) or [visualMap-piecewise.categories](~visualMap-piecewise.categories), the precision defaults to be 0.


## itemWidth(number) = 20

The width of diagram, which refers to the width of each item.


## itemHeight(number) = 14

The height of diagram, which refers to the height of each item.


## align(string) = 'auto'

The aligning relation between figure (such as a small square) and text in an assigned component. The optional values are: 

+ `'auto'` automatical decision.
+ `'left'` the figure is on the left and the text is on the right.
+ `'right'` the figure is on the right and the text is on the left.


## text(Array) = null

The text of both ends, for example['High', 'Low']. [Sample](${galleryEditorPath}doc-example/map-visualMap-piecewise-text&edit=1&reset=1). 

You would realize the sequence in `text` only if you have a try.See more detailed rules in [visualMap.inverse](~visualMap.inverse).

It is compatible with ECharts2, in which lable would not show as there is `text`.

## textGap(Array) = 10

The distance between2 textsubjects on both sides. Its unit is px. Reference to [visualMap-piecewise.text](~visualMap-piecewise.text)


## itemGap = 10

Its the interval distance between every item. The unit is px.


## itemSymbol(string) = 'roundRect'

Default figure. Optional values are: {{ import: partial-icon-buildin}}. 

The setting of symbol could refers to [visualMap-piecewise.inRange](~visualMap-piecewise.inRange) and [visualMap-piecewise.outOfRange](~visualMap-piecewise.outOfRange).

When they are not assigned,  `itemSymbol` should be adopted as default value.

{{ use: partial-visual-map-common(
    visualMapName='visualMap-piecewise',
    galleryEditorPath=${galleryEditorPath}
) }}

