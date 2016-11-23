
{{target: component-graphic}}

# graphic

`graphic` 是原生图形元素组件。可以支持的图形元素包括：

{{ use: graphic-type-list }}


下面示例中，使用图形元素做了水印，和文本块：
~[800x400](${galleryViewPath}line-y-category&edit=1&reset=1)

下面示例中，使用隐藏的图形元素实现了拖拽：
~[800x400](${galleryViewPath}line-draggable&edit=1&reset=1)



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


下面是详细配置。




# graphic.group(Object)

{{ use: graphic-common-props(
    type='group',
    galleryViewPath=${galleryViewPath}
) }}

## width(number) = undefined

用于描述此 `group` 的高宽。默认为 undefined 表示此 group 没有高宽。

这个高宽只用于给子节点一个

## height(number) = undefined



# graphic.image(Object)

{{ use: graphic-common-props(
    type='image',
    galleryViewPath=${galleryViewPath}
) }}



# graphic.text(Object)

{{ use: graphic-common-props(
    type='text',
    galleryViewPath=${galleryViewPath}
) }}



# graphic.rect(Object)

{{ use: graphic-common-props(
    type='rect',
    galleryViewPath=${galleryViewPath}
) }}



# graphic.circle(Object)

{{ use: graphic-common-props(
    type='circle',
    galleryViewPath=${galleryViewPath}
) }}



# graphic.ring(Object)

{{ use: graphic-common-props(
    type='ring',
    galleryViewPath=${galleryViewPath}
) }}



# graphic.polygon(Object)

{{ use: graphic-common-props(
    type='polygon',
    galleryViewPath=${galleryViewPath}
) }}



# graphic.polyline(Object)

{{ use: graphic-common-props(
    type='polyline',
    galleryViewPath=${galleryViewPath}
) }}



# graphic.sector(Object)

{{ use: graphic-common-props(
    type='sector',
    galleryViewPath=${galleryViewPath}
) }}



# graphic.line(Object)

{{ use: graphic-common-props(
    type='line',
    galleryViewPath=${galleryViewPath}
) }}



# graphic.curve(Object)

{{ use: graphic-common-props(
    type='curve',
    galleryViewPath=${galleryViewPath}
) }}



# graphic.arc(Object)

{{ use: graphic-common-props(
    type='arc',
    galleryViewPath=${galleryViewPath}
) }}














{{ target: graphic-common-props }}

## type(string) = ${type}

用 setOption 首次设定图形元素时必须指定。
可取值：

{{ use: graphic-type-list }}

## id(string) = undefined

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

## $action(string) = 'merge'

setOption 时指定本次对该图形元素的操作行为。

可取值：
+ `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
+ `'replace'`：如果已有元素，删除之，新建元素替代之。
+ `'remove'`：删除元素。


## left(number|string) = undefined

{{ use: graphic-location-prop-desc-common (hv = 'h') }}

## right(number|string) = undefined

{{ use: graphic-location-prop-desc-common (hv = 'h') }}

## top(number|string) = undefined

{{ use: graphic-location-prop-desc-common (hv = 'v') }}

## bottom(number|string) = undefined

{{ use: graphic-location-prop-desc-common (hv = 'v') }}







{{ target: graphic-location-prop-desc-common }}

描述怎么根据父元素进行定位。

{{ use: graphic-parent-desc }}

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





{{ target: graphic-location-group-wh-common }}

用于描述此 `group` 的高宽。默认为 undefined 表示此 group 没有高宽。

这个高宽只用于给子节点定义一个布局的容器，从而子节点的 `left`/`right`/`top`/`bottom` 可以根据此高宽来定位。





{{ target: graphic-parent-desc }}

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。







{{ target: graphic-type-list }}

`image`, `text`, `circle`, `sector`, `ring`, `polygon`, `polyline`, `rect`, `line`, `curve`, `arc`, `group`





