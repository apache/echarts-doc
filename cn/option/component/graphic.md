
{{target: component-graphic}}

# graphic

`graphic` 是原生图形元素组件。可以支持的图形元素包括：

{{ use: graphic-cpt-type-list }}


下面示例中，使用图形元素做了水印，和文本块：
~[600x400](${galleryViewPath}line-y-category&edit=1&reset=1)

下面示例中，使用隐藏的图形元素实现了拖拽：
~[600x400](${galleryViewPath}line-draggable&edit=1&reset=1)



<br>

---

**graphic 设置介绍**

只配一个图形元素时的简写方法：
```javascript
myChart.setOption({
    ...,
    graphic: {
        type: 'image',
        ...
    }
});
```

配多个图形元素：
```javascript
myChart.setOption({
    ...,
    graphic: [
        { // 一个图形元素，类型是 image。
            type: 'image',
            ...
        },
        { // 一个图形元素，类型是 text，指定了 id。
            type: 'text',
            id: 'text1',
            ...
        },
        { // 一个图形元素，类型是 group，可以嵌套子节点。
            type: 'group',
            children: [
                {
                    type: 'rect',
                    id: 'rect1',
                    ...
                },
                {
                    type: 'image',
                    ...
                },
                ...
            ]
        }
        ...
    ]
});

```

使用 setOption 来删除或更换（替代）已有的图形元素：
```javascript
myChart.setOption({
    ...,
    graphic: [
        { // 删除上例中定义的 'text1' 元素。
            id: 'text1',
            $action: 'remove',
            ...
        },
        { // 将上例中定义的 'rect1' 元素换成 circle。
          // 注意尽管 'rect1' 在一个 group 中，但这里并不需要顾忌层级，用id指定就可以了。
            id: 'rect1',
            $action: 'replace',
            type: 'circle',
            ...
        }
    ]
});
```
注意，如果没有指定 id，第二次 setOption 时会按照元素在 option 中出现的顺序和已有的图形元素进行匹配。



<br>

---



**图形元素设置介绍**

介绍每个图形元素的配置。不同类型的图形元素的设置有这些共性：

```javascript
{
    id: 'xxx', // id 用于在更新图形元素时指定更新哪个图形元素，如果不需要用可以忽略。
    type: 'image', // 这个字段在第一次设置时不能忽略，取值见上方『支持的图形元素』。
    // 下面的各个属性如果不需要设置都可以忽略，忽略则取默认值。

    // 指定本次 setOption 对此图形元素进行的操作。默认是 'merge'，还可以 'replace' 或 'remove'。
    $action: 'replace',

    // 这是四个相对于父元素的定位属性，每个属性可取『像素值』或者『百分比』或者 'center'/'middle'。
    left: 10,
    // right: 10,
    top: 'center',
    // bottom: '10%',

    shape: {
        // 定位、形状相关的设置，如 x, y, cx, cy, width, height, r, points 等。
        // 注意，如果设置了 left/right/top/bottom，这里的定位用的 x/y/cx/cy 会失效。
    },

    style: {
        // 样式相关的设置，如 fill, stroke, lineWidth, shadowBlur 等。
    },

    z: 10 // 表示 z 高度，从而指定了图形元素的覆盖关系。
    silent: true, // 表示不响应事件。
    onclick: function () {...} 事件的监听器，还可以是 onmousemove, ondrag 等。支持的事件参见下。
}
```


<br>

---

**图形元素的事件**

支持这些事件配置：
`onclick`, `onmouseover`, `onmouseout`, `onmousemove`, `onmousewheel`, `onmousedown`, `onmouseup`, `ondrag`, `ondragstart`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondrop`



<br>

---

**图形元素的层级关系**

只有 `group` 元素可以有子节点，从而以该 `group` 元素为根的元素树可以共同定位（共同移动）。





<br>

---

**图形元素的基本形状设置**

每个图形元素本身有自己的图形基本的位置和尺寸设置，例如：

```javascript
{
    type: 'rect',
    shape: {
        x: 10,
        y: 10,
        width: 100,
        height: 200
    }
},
{
    type: 'circle',
    shape: {
        cx: 20,
        cy: 30,
        r: 100
    }
},
{
    type: 'image',
    style: {
        image: 'http://xxx.xxx.xxx/a.png',
        x: 100,
        y: 200,
        width: 230,
        height: 400
    }
},
{
    type: 'text',
    style: {
        text: 'This text',
        x: 100,
        y: 200
    }

}
```




<br>

---

**图形元素的定位和 transfrom**


除此以外，可以以 transform 的方式对图形进行平移、旋转、缩放，

```javascript
{
    type: 'rect',
    position: [100, 200], // 平移，默认值为 [0, 0]。
    scale: [2, 4], // 缩放，默认值为 [1, 1]。表示缩放的倍数。
    rotation: Math.PI / 4, // 旋转，默认值为 0。表示旋转的弧度值。正值表示逆时针旋转。
    origin: [10, 20], // 旋转和缩放的中心点，默认值为 [0, 0]。
    shape: {
        // ...
    }
}
```

+ 每个图形元素在父节点的坐标系中进行 transform，也就是说父子节点的 transform 能『叠加』。
+ 每个图形元素进行 transform 顺序是：
    1. 平移 [-el.origin[0], -el.origin[1]]。
    2. 根据 el.scale 缩放。
    3. 根据 el.rotation 旋转。
    4. 平移 el.origin。
    5. 根据 el.position 平移。
+ 也就是说先缩放旋转后平移，这样平移不会影响缩放旋转的 origin。





<br>

---

**图形元素相对定位和布局**



以上两者是基本的绝对定位，除此之外，在实际应用中，容器尺寸常常是不确定甚至动态变化的，所以需要提供相对定位的机制。graphic 组件使用 [left](~graphic.elements.left) / [right](~graphic.elements.right) / [top](~graphic.elements.top) / [bottom](~graphic.elements.bottom) / [width](~graphic.elements.width) / [height](~graphic.elements.height) 提供了相对定位的机制。

例如：
```javascript
{ // 将图片定位到最下方的中间：
    type: 'image',
    left: 'center', // 水平定位到中间
    bottom: '10%',  // 定位到距离下边界 10% 处
    style: {
        image: 'http://xxx.xxx.xxx/a.png',
        width: 45,
        height: 45
    }
},
{ // 将旋转过的 group 整体定位右下角：
    type: 'group',
    right: 0,  // 定位到右下角
    bottom: 0, // 定位到右下角
    rotation: Math.PI / 4,
    children: [
        {
            type: 'rect',
            left: 'center', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            shape: {
                width: 190,
                height: 90
            },
            style: {
                fill: '#fff',
                stroke: '#999',
                lineWidth: 2,
                shadowBlur: 8,
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowColor: 'rgba(0,0,0,0.3)'
            }
        },
        {
            type: 'text',
            left: 'center', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            style: {
                fill: '#777',
                text: [
                    'This is text',
                    '这是一段文字',
                    'Print some text'
                ].join('\n'),
                font: '14px Microsoft YaHei'
            }
        }
    ]
}
```

注意，可以用 [bounding](graphic.elements.bounding) 来设置是否整体限制在父节点包围盒中。



<br>

---


下面是详细配置。



## elements(Array)

里面是所有图形元素的集合。

注意：graphic 的标准写法是：

```javascript
{
    graphic: {
        elements: [
            {type: 'rect', ...}, {type: 'circle', ...}, ...
        ]
    }
}
```

但是我们常常可以用简写：

```javascript
{
    graphic: {
        type: 'rect',
        ...
    }
}
```

或者：
```javascript
{
    graphic: [
        {type: 'rect', ...}, {type: 'circle', ...}, ...
    ]
}
```







## elements.group(Object)

group 是唯一的可以有子节点的容器。group 可以用来整体定位一组图形元素。

{{ use: graphic-cpt-common-props(
    type='group',
    galleryViewPath=${galleryViewPath}
) }}

### width(number) = 0

用于描述此 `group` 的宽。

这个宽只用于给子节点定位。

即便当宽度为零的时候，子节点也可以使用 `left: 'center'` 相对于父节点水平居中。


### height(number) = 0

用于描述此 `group` 的高。

这个高只用于给子节点定位。

即便当高度为零的时候，子节点也可以使用 `top: 'middle'` 相对于父节点垂直居中。


### children(Array)

子节点列表，其中项都是一个图形元素定义。

{{ use: graphic-cpt-common-props(
    type='group',
    galleryViewPath=${galleryViewPath}
) }}

{{ use: graphic-cpt-event-handlers }}




## elements.image(Object)

{{ use: graphic-cpt-common-props(
    type='image',
    galleryViewPath=${galleryViewPath}
) }}

### style(Object)

#### image(string)

图片的内容，可以是图片的 URL，也可以是 [dataURI](https://tools.ietf.org/html/rfc2397).

{{ use: graphic-cpt-sub-prop-xy }}
{{ use: graphic-cpt-sub-prop-wh }}
{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}





## elements.text(Object)

文本块。

{{ use: graphic-cpt-common-props(
    type='text',
    galleryViewPath=${galleryViewPath}
) }}

### style(Object)

#### text(string) = ''

文本块文字。可以使用 `\n` 来换行。

{{ use: graphic-cpt-sub-prop-xy }}

#### font(string)

字体大小、字体类型、粗细、字体样式。格式参见 [css font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)。

例如：
```
// size | family
font: '2em "STHeiti", sans-serif'

// style | weight | size | family
font: 'italic bolder 16px cursive'

// weight | size | family
font: 'bolder 2em "Microsoft YaHei", sans-serif'
```

#### textAlign(string) = 'left'

水平对齐方式，取值：`'left'`, `'center'`, `'right'`。

如果为 `'left'`，表示文本最左端在 `x` 值上。如果为 `'right'`，表示文本最右端在 `x` 值上。

#### textVeticalAlign(string)

垂直对齐方式，取值：`'top'`, `'middle'`, `'bottom'`。

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}






## elements.rect(Object)

矩形。

{{ use: graphic-cpt-common-props(
    type='rect',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-xy }}
{{ use: graphic-cpt-sub-prop-wh }}

### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}




## elements.circle(Object)

圆。

{{ use: graphic-cpt-common-props(
    type='circle',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-cxy }}
{{ use: graphic-cpt-sub-prop-r }}

### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}






## elements.ring(Object)

圆环。

{{ use: graphic-cpt-common-props(
    type='ring',
    galleryViewPath=${galleryViewPath}
) }}


### shape(Object)

{{ use: graphic-cpt-sub-prop-cxy }}
{{ use: graphic-cpt-sub-prop-rr0 }}


### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}







## elements.sector(Object)

扇形。

{{ use: graphic-cpt-common-props(
    type='sector',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-cxy }}
{{ use: graphic-cpt-sub-prop-rr0 }}
{{ use: graphic-cpt-sub-prop-angle }}

### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}








## elements.arc(Object)

圆弧。

{{ use: graphic-cpt-common-props(
    type='arc',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-cxy }}
{{ use: graphic-cpt-sub-prop-rr0 }}
{{ use: graphic-cpt-sub-prop-angle }}

### style(Object)

{{ use: graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 5
) }}

{{ use: graphic-cpt-event-handlers }}










## elements.polygon(Object)

多边形。

{{ use: graphic-cpt-common-props(
    type='polygon',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-path-common }}

### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}







## elements.polyline(Object)

折线。

{{ use: graphic-cpt-common-props(
    type='polyline',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-path-common }}

### style(Object)

{{ use: graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 5
) }}

{{ use: graphic-cpt-event-handlers }}









## elements.line(Object)

直线。

{{ use: graphic-cpt-common-props(
    type='line',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-x1y1x2y2 }}

#### percent(number) = 1

线画到百分之多少就不画了。

### style(Object)

{{ use: graphic-cpt-style-prop-common(
    fill = 'null',
    stroke = '"#000"',
    lineWidth = 5
) }}

{{ use: graphic-cpt-event-handlers }}








## elements.bezierCurve(Object)

二次或三次贝塞尔曲线。

{{ use: graphic-cpt-common-props(
    type='bezierCurve',
    galleryViewPath=${galleryViewPath}
) }}

### shape(Object)

{{ use: graphic-cpt-sub-prop-x1y1x2y2 }}

#### cpx1(number) = 0

控制点 x 值。

#### cpy1(number) = 0

控制点 y 值。

#### cpx2(number) = null

第二个控制点 x 值。如果设置则开启三阶贝塞尔曲线。

#### cpy2(number) = null

第二个控制点 y 值。如果设置则开启三阶贝塞尔曲线。

#### percent(number) = 1

画到百分之多少就不画了。

### style(Object)

{{ use: graphic-cpt-style-prop-common }}

{{ use: graphic-cpt-event-handlers }}














{{ target: graphic-cpt-common-props }}

### type(string) = ${type}

用 setOption 首次设定图形元素时必须指定。
可取值：

{{ use: graphic-cpt-type-list }}

### id(string) = undefined

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### $action(string) = 'merge'

setOption 时指定本次对该图形元素的操作行为。

可取值：
+ `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
+ `'replace'`：如果已有元素，删除之，新建元素替代之。
+ `'remove'`：删除元素。


### left(number|string) = undefined

{{ use: graphic-cpt-location-prop-desc-common (hv = 'h') }}

### right(number|string) = undefined

{{ use: graphic-cpt-location-prop-desc-common (hv = 'h') }}

### top(number|string) = undefined

{{ use: graphic-cpt-location-prop-desc-common (hv = 'v') }}

### bottom(number|string) = undefined

{{ use: graphic-cpt-location-prop-desc-common (hv = 'v') }}

### bounding(strin) = 'all'

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：
~[500x500](${galleryViewPath}doc-example/graphic-bounding&edit=1&reset=1)

可取值：

+ `'all'`：（默认）
    表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。
    这种方式易于使整体都限制在父元素范围中。

+ `'raw'`：
    表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。
    这种方式易于内容超出父元素范围的定位方式。


### z(number) = 0

z 方向的高度，决定层叠关系。

### zlevel(number) = 0

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### silent(boolean) = false

是否不响应鼠标以及触摸事件。

### cursor(string) = 'pointer'

鼠标悬浮时鼠标的样式是什么。同 CSS 的 `cursor`。

### draggable(boolean) = false

图形元素是否可以被拖拽。

### progressive(boolean) = false

是否渐进式渲染。当图形元素过多时才使用。



{{ target: graphic-cpt-style-prop-common }}

#### fill(string) = ${fill|default("'#000'")}

填充色。

#### stroke(string) = ${stroke|default("null")}

笔画颜色。

#### lineWidth(number) = ${lineWidth|default("0")}

笔画宽度。

#### shadowBlur(number) = undefined

阴影宽度。

#### shadowOffsetX(number) = undefined

阴影 X 方向偏移。

#### shadowOffsetY(number) = undefined

阴影 Y 方向偏移。

#### shadowColor(number) = undefined

阴影颜色。








{{ target: graphic-cpt-path-common }}

#### points(Array)

点列表，如 `[[22, 44], [44, 55], [11, 44], ...]`

#### smooth(number|string) = undefined

是否平滑曲线。

+ 如果为 number：表示贝塞尔 (bezier) 差值平滑，smooth 指定了平滑等级，范围 `[0, 1]`。
+ 如果为 `'spline'`：表示 Catmull-Rom spline 差值平滑。

#### smoothConstraint(boolean) = false

是否将平滑曲线约束在包围盒中。`smooth` 为 `number`（bezier）时生效。









{{ target: graphic-cpt-location-prop-desc-common }}

描述怎么根据父元素进行定位。

{{ use: graphic-cpt-parent-desc }}

值的类型可以是：

+ `number`：表示像素值。
+ 百分比值：如 '33%'，用父元素的{{ if: ${hv} === 'h' }}高{{ else }}宽{{ /if }}和此百分比计算出最终值。
+ {{ if: ${hv} === 'h' }}`'center'`{{ else }}`'middle'`{{ /if }}：表示自动居中。

{{ if: ${hv} === 'h' }}
[left](~graphic.left) 和 [right](~graphic.right) 只有一个可以生效。

如果指定 [left](~graphic.left) 或 [right](~graphic.right)，则 [shape](~graphic.shape) 里的 `x`、`cx` 等定位属性不再生效。
{{ else }}
[top](~graphic.top) 和 [bottom](~graphic.bottom) 只有一个可以生效。

如果指定 [top](~graphic.top) 或 [bottom](~graphic.bottom)，则 [shape](~graphic.shape) 里的 `y`、`cy` 等定位属性不再生效。
{{ /if }}





{{ target: graphic-cpt-sub-prop-xy }}

#### x(number) = 0

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。

#### y(numbr) = 0

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。


{{ target: graphic-cpt-sub-prop-cxy }}

#### cx(number) = 0

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。

#### cy(numbr) = 0

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。


{{ target: graphic-cpt-sub-prop-wh }}

#### width(number) = 0

图形元素的宽度。

#### height(numbr) = 0

图形元素的高度。


{{ target: graphic-cpt-sub-prop-r }}

#### r(number) = 0

外半径。

{{ target: graphic-cpt-sub-prop-rr0 }}

{{ use: graphic-cpt-sub-prop-r }}

#### r0(number) = 0

内半径。

{{ target: graphic-cpt-sub-prop-x1y1x2y2 }}

#### x1(number) = 0

开始点的 x 值。

#### y1(number) = 0

开始点的 y 值。

#### x2(number) = 0

结束点的 x 值。

#### y2(number) = 0

结束点的 y 值。

{{ target: graphic-cpt-sub-prop-angle }}

#### startAngle(number) = 0

开始弧度。

#### endAngle(number) = Math.PI * 2

结束弧度。

#### clockwise(boolean) = true

是否顺时针。







{{ target: graphic-cpt-event-handlers }}

### onclick(Function)

### onmouseover(Function)

### onmouseout(Function)

### onmousemove(Function)

### onmousewheel(Function)

### onmousedown(Function)

### onmouseup(Function)

### ondrag(Function)

### ondragstart(Function)

### ondragend(Function)

### ondragenter(Function)

### ondragleave(Function)

### ondragover(Function)

### ondrop(Function)





{{ target: graphic-cpt-location-group-wh-common }}

用于描述此 `group` 的高宽。默认为 undefined 表示此 group 没有高宽。

这个高宽只用于给子节点定义一个布局的容器，从而子节点的 `left`/`right`/`top`/`bottom` 可以根据此高宽来定位。









{{ target: graphic-cpt-parent-desc }}

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。









{{ target: graphic-cpt-type-list }}

`image`, `text`, `circle`, `sector`, `ring`, `polygon`, `polyline`, `rect`, `line`, `bezierCurve`, `arc`, `group`





