
{{ target: partial-version }}

<div class="doc-partial-version">
{{ if: ${deprecated} }}
Deprecated since{{ if: ${isECharts} }} ECharts{{ /if }} `v${version}`. ${deprecated}
{{ else }}
Since{{ if: ${isECharts} }} ECharts{{ /if }} `v${version}`
{{ /if }}
</div>
