{{ target: partial-blend-mode }}

#${prefix|default('#')} blendMode(string) = 'source-over'

混合模式，目前支持`'source-over'`，`'lighter'`，默认使用的`'source-over'`是通过 alpha 混合，而`'lighter'`是叠加模式，该模式可以让数据集中的区域因为叠加而产生高亮的效果。
