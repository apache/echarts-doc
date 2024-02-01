
{{ target: component-visual-map-piecewise }}

# visualMap.piecewise(Object)

**Piecewise visualMap component (visualMapPiecewise) **

 (Reference to [the introduction of visual Map component (visualMap)](~visualMap))

Sample:
~[600x400](${galleryViewPath}doc-example/scatter-visualMap-piecewise&edit=1&reset=1)


Piecewise visualMap component works in one of the three modes:

+ **CONTINUOUS-AVERAGE**: The series.data is continuous and is divided into pieces averagely according to [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber).
+ **CONTINUOUS-CUSTOMIZED**: The series.data is continuous and is divided into pieces according to the given rule defined in [visualMap-piecewise.pieces](~visualMap-piecewise.pieces).
+ **CATEGORY**: The series.data is discrete and is categorized according to [visualMap-piecewise.categories](~visualMap-piecewise.categories).


<br>
<br>

## type(string) = piecewise

Used to determine it is a piecewise visualMap component.

{{ use: partial-component-id(
    prefix = "#"
) }}

## splitNumber(number) = 5

<ExampleUIControlNumber default="5" min="1" step="1" />

Continuous data can be divide into pieces averagely according to splitNumber, that is, if splitNumber is 5, data will be sliced into 5 pieces.

The range of continuous data should be defined by [max](~visualMap-piecewise.max) and [min](~visualMap-piecewise.min).

If [visualMap-piecewise.pieces](~visualMap-piecewise.pieces) or [visualMap-piecewise.categories](~visualMap-piecewise.categories) is set up, the `splitNumber` will not be used any more.

## pieces(Array)

Used to customize how to slice continuous data, and some specific view style for some pieces. For instance:

```javascript
pieces: [
    // Range of a piece can be specified by property min and max,
    // where min will be set as -Infinity if ignored,
    // and max will be set as Infinity if ignored.
    {min: 1500},
    {min: 900, max: 1500},
    {min: 310, max: 1000},
    {min: 200, max: 300},
    // Label of the piece can be specified.
    {min: 10, max: 200, label: '10 to 200 (custom label) '},
    // Color of the piece can be specified.
    {value: 123, label: '123 (custom special color) ', color: 'grey'},
    {max: 5}
]
```

These visual channel can be customized in each piece:

{{ use: partial-visual-map-visual-type() }}

 (Notes: In ECharts2, `pieces` is called `splitList`, which is retained in ECharts3 for compatibility. But `pieces` is recommended.)

You would realize the sequence in `pieces` by a simple trial. See more detailed rules in [visualMap.inverse](~visualMap.inverse).

## categories(Array)

When dataValues in series.data (specified by [visualMap-piecewise.dimension](~visualMap-piecewise.dimension)) are discrete (or also known as category data or enumerable data), and we intend to perform **Table Mapping** from dataValue to visual channels, `categories` is used to describe the entire enumeration of data. For instance:

```javascript
categories: [
    'Demon Hunter', 'Blademaster', 'Death Knight', 'Warden', 'Paladin'
],
```

[Sample](${galleryEditorPath}doc-example/scatter-visualMap-categories&edit=1&reset=1)

You would realize the sequence in `categories` by a simple trial. See more detailed rules in [visualMap.inverse](~visualMap.inverse).

## min(number)

<ExampleUIControlNumber />

Specify the min dataValue for the visualMap component. `[visualMap.min, visualMax.max]` make up the domain of viusul mapping.

In **CONTINUOUS-CUSTOMIZED** mode (i.e., [visualMap-piecewise.pieces](~visualMap-piecewise.pieces) is used) or **CATEGORY** mode (i.e., [visualMap-piecewise.categories](~visualMap-piecewise.categories) is used), `max` and `min` doesn't need to be specified.

In **CONTINUOUS-AVERAGE** mode (i.e., [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber) is used), they should be specified explicitly, and be `[0, 200]` by default, but not `dataMin` and `dataMax` in series.data.

## max(number)

<ExampleUIControlNumber />

Specify the max dataValue for the visualMap component. `[visualMap.min, visualMax.max]` make up the domain of viusul mapping.

In **CONTINUOUS-CUSTOMIZED** mode (i.e., [visualMap-piecewise.pieces](~visualMap-piecewise.pieces) is used) or **CATEGORY** mode (i.e., [visualMap-piecewise.categories](~visualMap-piecewise.categories) is used), `max` and `min` doesn't need to be specified.

In **CONTINUOUS-AVERAGE** mode (i.e., [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber) is used), they should be specified explicitly, and be `[0, 200]` by default, but not `dataMin` and `dataMax` in series.data.

## minOpen(boolean)

<ExampleUIControlBoolean />

This option works when `type` is `piecewise` and `min`/`max`/`splitNumber` are set.

If it is set as `true`, an extra piece labeled with "< min" will show.

## maxOpen(boolean)

<ExampleUIControlBoolean />

This option works when `type` is `piecewise` and `min`/`max`/`splitNumber` are set.

If it is set as `true`, an extra piece labeled with "> max" will show.

## selectedMode(string|boolean) = 'multiple'

<ExampleUIControlEnum options="single,multiple,true,false" />

Selected Mode could be:

+ `'multiple'` (multiple selection).
+ `'single'` (single selection).
+ `true` (single selection) since version `5.3.3`.
+ `false` (no selection) since version `5.3.3`.

## inverse(boolean) = false

<ExampleUIControlBoolean />

Whether to inverse the layout of visualMap component.

+ In **CONTINUOUS-AVERAGE** mode (i.e., [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber) is used), the rule of data layout is the same as [visualMap-continuous.inverse](~visualMap-continuous.inverse).

+ In **CONTINUOUS-CUSTOMIZED** mode (i.e., [visualMap-piecewise.pieces](~visualMap-piecewise.pieces) is used) or **CATEGORY** mode (i.e., [visualMap-piecewise.categories](~visualMap-piecewise.categories) is used), the layout of each piece is determined by the their order in the definition of `pieces` or `categories`, namely:

    + When `inverse` is `false`:

        * When [visualMap.orient](~visualMap.orient) is `'vertical'`, pieces[0] or categories[0] correspond to upward side.

        * When [visualMap.orient](~visualMap.orient) is `'horizontal'`, pieces[0] or categories[0] correspond to left side.

    + When `inverse` is `true`, the results are opposite to above.

If you just have a try, you'll know it is not so complicated.

## precision(number) = null

<ExampleUIControlNumber min="0" step="1" />

The decimal precision of label, defaults to be 0 (no decimals).

+ In **CONTINUOUS-AVERAGE** mode (i.e., [visualMap-piecewise.splitNumber](~visualMap-piecewise.splitNumber) is used), the rule of data layout is the same as [visualMap-continuous.inverse](~visualMap-continuous.inverse), decimal precision auto adapts to series.data.

+ In **CONTINUOUS-CUSTOMIZED** mode (i.e., [visualMap-piecewise.pieces](~visualMap-piecewise.pieces) is used) or **CATEGORY** mode (i.e., [visualMap-piecewise.categories](~visualMap-piecewise.categories) is used), decimal precision defaults to be 0 (no decimals):

## itemWidth(number) = 20

<ExampleUIControlNumber default="20" min="0" />

The width of each graphical element that represents a piece.

## itemHeight(number) = 14

<ExampleUIControlNumber default="14" min="0" />

The height of each graphical element that represents a piece.

## align(string) = 'auto'

<ExampleUIControlEnum options="auto,left,right" />

The layout relationship between the graphical elements for pieces and their labels. Possible values are:

+ `'auto'` Decide automatically.
+ `'left'` The graphical elements for pieces are on the left and their labels are on the right.
+ `'right'` The graphical elements for pieces are on the right and their labels are on the left.

## text(Array) = null

The label text on both ends, such as `['High', 'Low']`. [Sample](${galleryEditorPath}doc-example/map-visualMap-piecewise-text&edit=1&reset=1).

You can understand the order of items in `text` array just by a simple trial. See [visualMap.inverse](~visualMap.inverse).

The rule, that labels will not show when `text` is use, is retained for compatibility with ECharts2.

## textGap(number) = 10

<ExampleUIControlNumber default="10" />

The distance between the ends of the graphical elements for pieces and the labels, with unit px. See [visualMap-piecewise.text](~visualMap-piecewise.text)

## showLabel(boolean)

<ExampleUIControlBoolean />

Whether to show label of each item. By default, label will not be shown when [visualMap-piecewise.text](~visualMap-piecewise.text) used, otherwise label will be shown.

## itemGap(*) = 10

<ExampleUIControlNumber default="10" />

Its the distance between each two graphical elements for pieces. The unit is px.

## itemSymbol(string) = 'roundRect'

Default symbol (the shape of graphical element). Possible values are:

{{ use: partial-icon-buildin() }}

The setting of visual channel `symbol` can refer to [visualMap-piecewise.inRange](~visualMap-piecewise.inRange) and [visualMap-piecewise.outOfRange](~visualMap-piecewise.outOfRange).

When they are not specified, `itemSymbol` is adopted as the default value (but just used in visualMap component itself, not in chart).

{{ use: partial-visual-map-common(
    visualMapName = 'visualMap-piecewise'
) }}

## formatter(string|Function)

the formatter tool for label.

+ If it was set as a `string`, it refers to a template, for instance: `aaaa{value}bbbb{value2}`, where `{value}` and `{value2}` represents the current selected range of dataValues.

+ If it was set as a `Function`, it refers to a callback function, for instance:

```javascript
formatter: function (value, value2) {
    return 'aaaa' + value + 'bbbb' + value2;
}
```

