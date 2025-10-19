{{ target: partial-security-warning }}
<div class="doc-partial-security-warning">
<span class="warning-title">[WARNING]:</span> ${desc} {{ if: ${securityRiskExclamation} }}${securityRiskExclamation}{{ else }}**Security risks** must be considered when using it.{{ /if }} See document ["Security"](${handbookPath}best-practices/security) for recommendations on safe usage.
</div>
{{ /target }}


{{ target: partial-security-url-common-warning }}
{{ use: partial-security-warning(
    desc: 'This URL string is accepted directly without any internal sanitization.',
    securityRiskExclamation: '**Security risks** must be considered if it comes from untrusted sources.'
)}}
{{ /target }}
