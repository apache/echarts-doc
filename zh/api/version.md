{{ target: partial-version }}

{{ if: ${deprecated} }}
> 从 `v${version}` 开始不推荐使用（deprecated）。${deprecated}
{{ else }}
> 从 `v${version}` 开始支持
{{ /if }}

{{ // this line break is necessary for md quote }}
