{{target: component-data-zoom-inside}}

# dataZoom.inside(Object)

**dataZoomInside**

Data zoom component of *inside* type.

Refer to [dataZoom](~dataZoom) for more information.

The *inside* means it's inside the coordinates.

+ Translation: data area can be translated when moving in coordinates.
+ Scaling:
    + PC: when mouse rolls (similar with touch pad) in coordinates.
    + Mobile: when touches and moved with two fingers in coordinates on touch screens.

<br>
<br>


## type(string) = 'inside'

## disabled(boolean) = false

Whether disable inside zoom.

{{ use: partial-data-zoom-common(
    dataZoomName='dataZoom-inside',
    galleryEditorPath=${galleryEditorPath},
    galleryViewPath=${galleryViewPath}
) }}

