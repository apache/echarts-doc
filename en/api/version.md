{{ target: partial-version }}

{{ if: ${deprecated} }}
> Deprecated since `v${version}`. ${deprecated}
{{ else }}
> Since `v${version}`
{{ /if }}

{{ // this line break is necessary for md quote }}
