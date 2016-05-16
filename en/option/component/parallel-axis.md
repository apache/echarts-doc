
{{target: component-parallel-axis}}

# parallelAxis(Object)

This component is the coordinate axis in parallel coordinate system. 

{{ use: partial-parallel-introduce(
    galleryViewPath=${galleryViewPath}
)}}


<br>
<br>

## dim(number)

The dimension number of coordinate axis.

{{use: partial-parallel-data-example}}

`dim` defines which dimension (which『row』) of data would correspond to this coordinate axis. 

Count from  `0`. For example, the `dim` of coordinate axis is `1`, indicating that the second row of data would correspond to this coordinate axis.


## parallelIndex(number) = 0

It is used to define which 『coordinate system』the『coordinate axis』should correspond to.

For example, there is the following configuration: 

```javascript
myChart.setOption({
    parallel: [
        {...},                      // the first parallel coordinate system
        {...}                       //  the second parallel coordinate system
    ],
    parallelAxis: [
        {parallelIndex: 1, ...},    // the first coordinate axis, corresponding to the second parallel coordinate system
        {parallelIndex: 0, ...},    //  the second coordinate axis, corresponding to the first parallel coordinate system
        {parallelIndex: 1, ...},    //  the third coordinate axis, corresponding to the second parallel coordinate system
        {parallelIndex: 0, ...}     //  the fourth coordinate axis, corresponding to the first parallel coordinate system
    ],
    ...
});
```

If there is only one parallel coordinate system, the setting could be ignored, which defaults to be `0`.

## areaSelectStyle(Object)

Area selecting is available on coordinate axis. Here is some settings about area selecting.

<br>


### width(number) = 20

The width of the range of area selecting.


### borderWidth(number) = 1


The border width of the marquee.


### borderColor(Color) = 'rgba(160,197,232)'

The border color of the marquee.


### color(Color) = 'rgba(160,197,232)'

The border fill color of the marquee.


### opacity(number) = 0.3

The transparency of the marquee.



{{ use: axis-common(
    prefix='#',
    componentType='parallelAxis'
) }}