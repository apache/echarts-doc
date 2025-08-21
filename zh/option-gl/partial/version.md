
{{ target: partial-version }}

<div class="doc-partial-version">
{{ if: ${deprecated} }}
从{{ if: ${isECharts} }} ECharts{{ /if }} `v${version}` 开始不推荐使用（deprecated）。${deprecated}
{{ else }}
从{{ if: ${isECharts} }} ECharts{{ /if }} `v${version}` 开始支持
{{ /if }}
</div>
