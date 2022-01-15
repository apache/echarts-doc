{{ target: series-lines3D }}

# series.lines3D(Object)
3D lines. Like the 2D [lines] (https://echarts.apache.org/zh/option.html#series-line), it is used to represent the line data from the start point to the end point. More is used in geographic visualization.

Below is an example of a visual airplane flight using [lines3D](~series-lines3D) on [globe](~globe).

![700xauto](~globe-airline.png)

## type(string) = 'lines3D'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    geo3D=true,
    globe=true
 ) }}

## polyline(boolean) = false
If draw as a polyline.

Default to be `false`. Can only draw a two end straight line.

If it is set true, [data.coords](~series-lines.data.coords) can have more than two coords to draw a polyline. It is useful when visualizing GPS track data.

## effect(Object)

The setting about the special effects of lines.

### show(boolean) = false
Whether to show special effect. It is not displayed by default.

### period(number) = 4

The duration of the special effect, which unit is second.

### constantSpeed(number) = null

Whether the moving animation of the trail of special effect has a constant speed, which unit is dimensioned in 3D space. The [period](~series-lines.effect.period) will be ignored when it is set to a non-null value.

### trailWidth(number) = 4

The width of the trail of special effects.

### trailLength(number) = 0.1

The length of trail of special effect.  The values from 0 to 1 could be set. Is the percentage of the length of the line.


### trailColor(string)

The color of the trail, which default is the same as the line color.

### trailOpacity(number)

The opacity of the trail, which default is the same as line opacity.


## lineStyle(Object)

The line style of the lines.

{{ use: partial-line-style(
    prefix="##",
    useColorPalatte=true,
    defaultOpacity=0.5
) }}

## data(Array)

A data array of 3D lines.
Usually, each item of data can be a set of coordinates containing the start point and end point.

More than two coordinates can be supported when [polyline](~series-lines3D.polyline) is set to `true`.
as follows:

```ts
data: [
    [
        [120, 66, 1], // latitude, longitude and altitude coordinates of the start point
        [122, 67, 2]  // latitude, longitude and altitude coordinates of the end point
    ]
]
```
Sometimes you need to configure the name of the data item or a separate style. You need to write the latitude and longitude coordinates to the coords property, as follows:

```ts
data: [
    {
        coords: [ [120, 66], [122, 67] ],
        // The value of data
        value: 10,
        // The name of data
        name: 'foo',
        // The style of line
        lineStyle: {}
    }
]
```

### coords(Array)

An array of two or more latitude and longitude coordinates. When [polyline](~series-lines3D.polyline) is set to `true`,  support more than two coordinates.

### value(Array|number)

The value of data.

### lineStyle(Object)

Style setting for single data (single line).

{{ use: partial-line-style(
    prefix="###"
) }}


{{ use: partial-blend-mode() }}

{{ use: partial-zlevel }}

{{ use: partial-silent }}