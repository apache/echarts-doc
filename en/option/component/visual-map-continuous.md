
{{target: component-visual-map-continuous}}

# visualMap.continuous(Object)

**Continuous visual Map component (visualMapContinuous) **

 (Reference to [the introduction to visual Map component (visualMap)](~visualMap)) 

Its present form is shown in the below figure: 
~[600x400](${galleryViewPath}doc-example/map-visualMap-continuous&edit=1&reset=1)

In `visualMapContinuous`, you can turn on or off the 『Range roaming』 (namely, a function of dragging handle to change the range)  through  [visualMap.calculable](~visualMap.calculable).

<br>
<br>


## type(string) = continuous

It is continuous type.


## min(number)

Assign the visualMapContinuous component with a minimum which should be assigned by users. 


## max(number)

Assign the visualMapContinuous component with a maximum which should be assigned by users. 


## calculable(boolean) = false

Whether to enable the range roaming, refering to that whether you have a handle for dragging and adjusting the seleted range.

 (Notes: in order to be compatible with ECharts2, when [visualMap.type](~visualMap.type) is not assigned, if `'calculable'` was set correctly, `type` would be automatically set as `'continuous'`, ingnoring the settings such as  [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber). Therefore, users are not adviced to not assign the [visualMap.type](~visualMap.type), which would lead to ambiguous expressing.  


## realtime(boolean) = true

Whether to update in real time during dragging.

+ If it was `ture`, the diagram view would update in real time during handle dragging. 
+ If it was `false`, the diagram view would update by the end of handle dragging.


## inverse(boolean) = false

Whether to inverse.

As `inverse` is `false`, the position rule of data size is the same as retangular coordinate system. That is to say: 

+ As [visualMap.orient](~visualMap.orient) is `'vertical'`, data is large at the top while small in the bottom.
+ As [visualMap.orient](~visualMap.orient) is `'horizontal'`,  data is large on the right while small on the left.

As `inverse` is `true`, the result is opposite.

## precision(number) = 0

the decimal precision of data presentation defaults to be 0 without decimal point. 


## itemWidth(number) = 20

the width of figure, also the width of bar.  

## itemHeight(number) = 140

the height of figure, also the height of bar.


## align(string) = 'auto'

the align relationship between appointed component and words. The optional values are:  

+ `'auto'` automatical decision.
+ `'left'` the handle and label are on the right, which is valid when orient is set as horizontal.
+ `'right'` the handle and label are on the left, which is valid when orient is set as horizontal.
+ `'top'` the handle and label are under it, which is valid when orient is set as  vertical .
+ `'bottom'` the handle and label are above it, which is valid when orient is set as  vertical .


## text(Array) = null

The texts on both ends, such as `['High', 'Low']`. [sample](${galleryEditorPath}doc-example/map-visualMap-continuous-text&edit=1&reset=1). 

The order in `text`. You'll see it as you have a try. For detailed principles, see [visualMap.inverse](~visualMap.inverse). 


## textGap(Array) = 10

The distance between the main words on both ends. Its unit is px. See [visualMap-continuous.text](~visualMap-continuous.text)


## handlePosition(string) = 'auto'

`handle` refers to『dragging handle』. `handlePosition` assigns a position to the handle. Optional values: 

+ `'auto'`: automatical decision.
+ `'left'` or `'right'`: it is valid when [visualMap-continuous.orient](~visualMap-continuous.orient) is set as `'horizontal'`.
+ `'top'` or `'bottom'`: it is valid when[visualMap-continuous.orient](~visualMap-continuous.orient) is set as `'vertical'`.

{{ use: partial-visual-map-common(
    visualMapName='visualMap-continuous',
    galleryEditorPath=${galleryEditorPath}
) }}

