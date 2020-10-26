{{ target: partial-roundCap }}

#${prefix|default('#')} roundCap(boolean) = ${defaultRoundCap|default(false)}

<ExampleUIControlBoolean default="${defaultRoundCap|default(false)}" />

{{ use: partial-version(
    version = "5.0"
) }}

<ExampleUIControlBoolean clean="true" />

是否在环形柱条两侧使用圆弧效果。

仅对极坐标系柱状图有效。

~[800x500](${galleryViewPath}polar-roundCap&reset=1&edit=1)