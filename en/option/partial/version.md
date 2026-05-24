
{{ target: partial-version }}

<div class="doc-partial-version">
{{ if: ${deprecated} }}
Deprecated since `v${version}`. ${deprecated}
{{ elif: ${feature} }}
Since `v${version}` ${feature}
{{ else }}
Since `v${version}`
{{ /if }}
</div>

