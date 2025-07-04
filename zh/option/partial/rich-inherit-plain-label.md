{{ target: partial-rich-inherit-plain-label }}

#${prefix} richInheritPlainLabel(boolean) = true

{{ use: partial-version(version: '6.0.0') }}

富文本样式是否继承普通文本样式。

从 v6 版本开始，标签的富文本部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承普通文本样式。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。参见 [#20977](https://github.com/apache/echarts/pull/20977)。