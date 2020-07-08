{{ target: partial-temporal-super-sampling }}

#${prefix|default('#')} temporalSuperSampling(Object)

Temporal supersampling. After opening [postEffect](~${componentType}.postEffect), WebGL's default MSAA (MultiSampling Anti-Aliasing) will not work, so we need to solve the problem of sampling.

Temporal supersampling is an anti-aliasing method. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated, thus achieving anti-aliasing effect.
And in this process, ECharts-gl also progressively enhances some of the effects in [postEffect](~${componentType}.postEffect) that require sampled guarantees. For example [SSAO](~${componentType}.postEffect.SSAO), [Depth of Field](~${componentType}.postEffect.depthOfField), and shadow.

The following is the difference between not opening `temporalSuperSampling` and opening `temporalSuperSampling`.

<div class="twentytwenty-container" style="width: 800px;">
    <img src="documents/asset/gl/img/surface-no-taa.png" width="100%" title="No AA">
    <img src="documents/asset/gl/img/surface-taa.png" width="100%" title="AA">
</div>

##${prefix|default('#')} enable(boolean) = 'auto'

Whether to enable temporal supersampling. By default, temporal supersampling is also turned on synchronously when [postEffect](~${componentType}.postEffect) is turned on.
