
{{ target: partial-version }}

<div class="doc-partial-version">
{{ if: ${deprecated} }}
Deprecated since{{ if: ${isECharts} }} ECharts{{ /if }} `v${version}`. ${deprecated}
{{ elif: ${feature} }}
${feature} since{{ if: ${isECharts} }} ECharts{{ /if }} `v${version}`
{{ else }}
Since{{ if: ${isECharts} }} ECharts{{ /if }} `v${version}`
{{ /if }}
</div>
