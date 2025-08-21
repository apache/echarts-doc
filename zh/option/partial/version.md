
{{ target: partial-version }}

<div class="doc-partial-version">
{{ if: ${deprecated} }}
从 [v${version}](https://github.com/apache/echarts/releases/tag/${version}) 开始不推荐使用（deprecated）。${deprecated}
{{ else }}
从 [v${version}](https://github.com/apache/echarts/releases/tag/${version}) 开始支持
{{ /if }}
</div>
