
{{target: component-parallel}}

# parallel(Object)

{{ use: partial-parallel-introduce(
    galleryViewPath=${galleryViewPath}
)}}

<br>
<br>

{{ use: partial-rect-layout-width-height(
    componentName='parallel ',
    defaultLeft: 80,
    defaultRight: 80,
    defaultTop: 60,
    defaultBottom: 60
) }}


## layout(string) = 'horizontal'

layout modes, optional values are: 

+ `'horizontal'`: horizontally configurate every coordinate axis.

+ `'vertical'`: vertically configurate every coordinate axis.


## parallelAxisDefault(Object)

{{use: partial-parallel-axis-default}}

[See the sample](${galleryEditorPath}doc-example/parallel-all&edit=1&reset=1)

<br>

{{ use: axis-common(
    prefix='##',
    componentType='parallelAxis'
) }}