{{ target: partial-version }}

<div class="doc-partial-version">
{{ if: ${deprecated} }}
从 `v${version}` 开始不推荐使用（deprecated）。${deprecated}
{{ elif: ${feature} }}
${feature} 从 `v${version}` 开始支持
{{ else }}
从 `v${version}` 开始支持
{{ /if }}
</div>

{{ // this line break is necessary for md quote }}
