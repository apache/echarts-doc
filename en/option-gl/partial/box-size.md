{{ target: partial-box-size }}

#${prefix|default('#')} boxWidth(number) = ${defaultBoxWidth|default(100)}

${componentName} width in a 3D scene. With [viewControl.distance](~${componentType}.viewControl.distance) you can get the most appropriate display size.

{{ block: boxWidthDescriptionExtra }}
{{ /block }}

#${prefix|default('#')} boxHeight(number) = ${defaultBoxHeight|default(100)}

${componentName} height in a 3D scene.

{{ block: boxHeightDescriptionExtra }}
{{ /block }}

#${prefix|default('#')} boxDepth(number) = ${defaultBoxDepth|default(100)}

${componentName} depth in a 3D scene.

{{ block: boxDepthDescriptionExtra }}
{{ /block }}