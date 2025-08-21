{{ target: partial-version }}

<div class="doc-partial-version">
{{ if: ${deprecated} }}
Deprecated since `v${version}`. ${deprecated}
{{ else }}
Since `v${version}`
{{ /if }}
</div>

{{ // this line break is necessary for md quote }}
