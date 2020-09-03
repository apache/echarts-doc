
{{ target: component-geo }}

# geo(Object)

Geographic coorinate system component.

Geographic coorinate system component is used to draw maps, which also supports [scatter series](~series-scatter), and [line series](~series-lines).


From `3.1.10`, geo component also supports mouse events, whose parameters are:

```js
{
    componentType: 'geo',
    // geo component's index in option
    geoIndex: number,
    // name of clicking area, e.g., Shanghai
    name: string,
    // clicking region object as input, see geo.regions
    region: Object
}
```

**Tip:**
The region color can also be controlled by map series. See [series-map.geoIndex](~series-map.geoIndex).

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

Whether to show the geo component.

{{ use: geo-common(
    prefix = '#'
) }}

## regions(Array)

Configure style for specified regions.
For example:
```js
regions: [{
    name: 'Guangdong',
    itemStyle: {
        areaColor: 'red',
        color: 'red'
    }
}]
```

The region color can also be controlled by map series. See [series-map.geoIndex](~series-map.geoIndex).

### name(string)

Name of area in map, like `'Guangdong'`, or `'Zhejiang'`.

### selected(boolean) = false

Whether this area is selected.

### itemStyle(Object)

Item style of this area.

#### areaColor(Color)

Area color in the map.

{{ use: partial-color-desc() }}

{{ use: partial-item-style(
    prefix = '###'
) }}

#### emphasis(Object)

##### areaColor(Color)

Area color in the map.

{{ use: partial-color-desc() }}

{{ use: partial-item-style(
    prefix = '####'
) }}

### label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "###",
    formatter = true
) }}

#### emphasis(Object)

{{ use: partial-label(
    prefix = "####",
    formatter = true
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

