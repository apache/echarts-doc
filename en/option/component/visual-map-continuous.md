
{{target: component-visual-map-continuous}}

# visualMap.continuous(Object)

**Continuous visualMap component (visualMapContinuous)**

 (See [the introduction to visual Map component (visualMap)](~visualMap))

Sample:
~[600x400](${galleryViewPath}doc-example/map-visualMap-continuous&edit=1&reset=1)

You can set [visualMap.calculable](~visualMap.calculable) to show or hide the hanldes, which is used to change the selected range in `visualMapContinuous`.

<br>
<br>


## type(string) = continuous

Used to determine that it is a continuous visualMap component.


{{use: partial-component-id(prefix="#")}}

## min(number)

Specify the min dataValue for the visualMap component. `[visualMap.min, visualMax.max]` make up the domain of viusul mapping.

Notice that `min` and `max` should be specified explicitly, and be `[0, 200]` by default, but not `dataMin` and `dataMax` in series.data.


## max(number)

Specify the max dataValue for the visualMap component. `[visualMap.min, visualMax.max]` make up the domain of viusul mapping.

Notice that `min` and `max` should be specified explicitly, and be `[0, 200]` by default, but not `dataMin` and `dataMax` in series.data.


## range(Array)

Specify selected range, that is, the dataValue corresponding to the two handles. For example:

```javascript
chart.setOption({
    visualMap: {
        min: 0,
        max: 100,
        // dataValue corresponding to the two handles.
        range: [4, 15],
        ...
    }
});
```

**auto-adaption when min or max is modified by setOption**

+ If `range` is not set (or set to null or undefined)

```javascript
For instance:
chart.setOption({visualMap: {min: 10, max: 300}}); // range is not set, then range is [min, max] by default, that is, [10, 300].

chart.setOption({visualMap: {min: 0, max: 400}}); // Modify min and max using setOption again.
// Then range will be auto-modified to the new [min, max], that is, [0, 400].
```

+ If `range` is set explicitly, such as [10, 300]

```javascript
For instance:
chart.setOption({visualMap: {min: 10, max: 300, range: [20, 80]}}); // range is set to [20, 80].

chart.setOption({visualMap: {min: 0, max: 400}}); // min and max are modifies using setOption.
// Then range keep the original value ([20, 80]) but will not do auto-adaption.

chart.setOption({visualMap: {range: null}}); // Set range to null then.
// Then auto-adaption of range turns on and range is auto modified to [min, max], that is, [0, 400].

```

`range` gotten by `getOption` is always an `Array`, but not `null` or `undefined`.




## calculable(boolean) = false

Whether show handles, which can be dragged to adjust "selected range".

Notes: In order to be compatible with ECharts2, the rule, which seems to be a little odd, is retained: when [visualMap.type](~visualMap.type) is not set, and [visualMap.calculable](~visualMap-continuous.calculable) was set to be `true`, [visualMap.type](~visualMap.type) will be automatically set as `'continuous'`, regardless of some settings such as [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber). Therefore, it is recommended to set [visualMap.type](~visualMap.type) explicitly, which avoids ambiguity.


## realtime(boolean) = true

Whether to update view in real time when dragging a handle.

+ If `ture`, the chart view will be updated in real time when dragging.

+ If `false`, the chart view will be updated at the end of the handle dragging.


## inverse(boolean) = false

Whether to inverse the layout of visualMap component.

As `inverse` is `false`, the layout direction is the same as [catesian coordinate](~grid). That is:

+ As [visualMap.orient](~visualMap.orient) is `'vertical'`, large data are placed at the top while small at the bottom.
+ As [visualMap.orient](~visualMap.orient) is `'horizontal'`,  large data are placed on the right while small on the left.

As `inverse` is `true`, the result is opposite.


## precision(number) = 0

The decimal precision of label, defaults to be 0 (no decimals).


## itemWidth(number) = 20

The width of the main bar of visualMap component.


## itemHeight(number) = 140

The height of the main bar of visualMap component.


## align(string) = 'auto'

Specify the position of handles and labels, against the main bar. The possible values are:

+ `'auto'` Decide automatically.
+ `'left'` The handles and labels are on the right, which is valid when `orient` is set as `'horizontal'`.
+ `'right'` The handles and labels are on the left, which is valid when `orient` is set as `'horizontal'`.
+ `'top'` the handles and labels are at the bottom, which is valid when `orient` is set as  `'vertical'`.
+ `'bottom'` the handles and labels are at the top, which is valid when `orient` is set as `'vertical'`.


## text(Array) = null

The label text on both ends, such as `['High', 'Low']`. [sample](${galleryEditorPath}doc-example/map-visualMap-continuous-text&edit=1&reset=1).

You can understand the order of items in `text` array just by a simple trial. See [visualMap.inverse](~visualMap.inverse).


## textGap(Array) = 10

The distance between the ends of the main bar and the label, with unit px. See [visualMap-continuous.text](~visualMap-continuous.text)


{{ use: partial-visual-map-common(
    visualMapName='visualMap-continuous',
    galleryEditorPath=${galleryEditorPath}
) }}



## formatter(string|Function)

the formatter tool for label.

+ If it was set as a `string`, it refers to a template, for instance: `aaaa{value}bbbb`, where `{value}` represents the value of the edge of the seleted range.

+ If it was set as a `Function`, it refers to a callback function, for instance:

```javascript
formatter: function (value) {
    return 'aaaa' + value + 'bbbb';
}
```

