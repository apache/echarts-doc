
{{ target: partial-version }}

<div class="doc-partial-version">
{{ if: ${deprecated} }}
从 `v${version}` 开始不推荐使用（deprecated）。${deprecated}
{{ elif: ${feature} }}
从 `v${version}` 开始支持${feature}
{{ else }}
从 `v${version}` 开始支持
{{ /if }}
</div>
