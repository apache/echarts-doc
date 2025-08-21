{{ target: partial-version }}

<div class="doc-partial-version">
{{ if: ${deprecated} }}
Deprecated since [v${version}](https://github.com/apache/echarts/releases/tag/${version}). ${deprecated}
{{ else }}
Since [v${version}](https://github.com/apache/echarts/releases/tag/${version})
{{ /if }}
</div>

{{ // this line break is necessary for md quote }}
