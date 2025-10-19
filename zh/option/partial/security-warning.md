{{ target: partial-security-warning }}
<div class="doc-partial-security-warning">
<span class="warning-title">[警告]:</span> ${desc} {{ if: ${securityRiskExclamation} }}${securityRiskExclamation}{{ else }}使用时必须考虑 **安全风险**。{{ /if }}文档 [“安全性”](${handbookPath}best-practices/security) 给出了安全使用建议。
</div>
{{ /target }}

{{ target: partial-security-url-common-warning }}
{{ use: partial-security-warning(
    desc: '此 URL 字符串直接被使用，并未在内部做其他净化处理（sanitization）',
    securityRiskExclamation: '如果他们来自于“不受信任”的来源，必须考虑 **安全风险**。'
)}}
{{ /target }}
