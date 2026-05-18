
{{ target: partial-version }}

<div class="doc-partial-version">
{{ if: ${deprecated} }}
Deprecated since `v${version}`. ${deprecated}
{{ elif: ${feature} }}
${feature} since `v${version}`
{{ else }}
Since `v${version}`
{{ /if }}
</div>

