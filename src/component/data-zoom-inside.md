{{target: component-data-zoom-inside}}

# dataZoom.inside(Object)

**内置型数据区域缩放组件（dataZoomInside）**

（参考[数据区域缩放组件（dataZoom）的介绍](~dataZoom)）

所谓『内置』，即内置在坐标系中。

* 平移：在坐标系中滑动拖拽进行数据区域平移。

* 缩放：

    * PC端：鼠标在坐标系范围内滚轮滚动（MAC触控板类同）

    * 移动端：在移动端触屏上，支持两指滑动缩放。


<br>
<br>


## type(string) = 'inside'


{{ use: partial-data-zoom-common(
    dataZoomName: 'dataZoom-inside',
    galleryEditorPath: ${galleryEditorPath},
    galleryViewPath: ${galleryViewPath}
) }}

