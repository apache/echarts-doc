{{ target: series-polygons3D }}

# series.polygons3D(Object)

`polygons3D` is used to visualize polygon data with high information on the map, which is often used for drawing of buildings.
The picture below shows the nearly 50w number of New York buildings drawn with `polygons3D`.

![900xauto](~polygons3D-ny.jpg)

## type(string) = 'polygons3D'

## multiPolygon(boolean) = true
Whether a data contains multiple polygons.

## itemStyle(Object)
Graphic styles, including color, transparency, strokes, and etc.

{{ use: partial-item-style(
    prefix="##",
    hasCallback=true,
    useColorPalette=true
) }}

## emphasis(Object)

Mouse hover Highlights the style of graphics and labels.


### itemStyle(Object)

{{ use: partial-item-style(
    prefix="###"
) }}

## data(Object)
A list of data for the polygon.


```ts
data: [{
    // A square
    coords: [[0, 0], [100, 0], [100, 100], [0, 100]],
    // Height
    height: 3
}, {
    // A triangle
    coords: [[50, 0], [100, 100], [0, 100]],
    // Height
    height: 5
}]
```

### coords(Array)

A list of coordinates of the polygon. If [multiPolygon](~series-polygons3D.multiPolygon) is set to true, it is an array containing multiple polygons.


## progressiveThreshold(number) = 1000


Enable progressive rendering thresholds, progressive rendering can be loading the screen without blocking.

## progressive(number) = 1000

Progressively render the amount of data per render.
