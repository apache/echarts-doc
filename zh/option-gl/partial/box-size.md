{{ target: partial-box-size }}

#${prefix|default('#')} boxWidth(number) = ${defaultBoxWidth|default(100)}

${componentName}在三维场景中的宽度。配合 [viewControl.distance](~${componentType}.viewControl.distance) 可以得到最合适的展示尺寸。

{{ block: boxWidthDescriptionExtra }}
{{ /block }}

#${prefix|default('#')} boxHeight(number) = ${defaultBoxHeight|default(100)}

${componentName}在三维场景中的高度。

{{ block: boxHeightDescriptionExtra }}
{{ /block }}

#${prefix|default('#')} boxDepth(number) = ${defaultBoxDepth|default(100)}

${componentName}在三维场景中的深度。

{{ block: boxDepthDescriptionExtra }}
{{ /block }}