
{{ target: partial-clip }}

#${prefix|default('#')} clip(boolean) = ${defaultClip|default(true)}

<ExampleUIControlBoolean default="${defaultClip|default(true)}" />

{{ use: partial-version(
    version = ${version|default("4.4.0")}
) }}

是否裁剪超出坐标系部分的图形，具体裁剪效果根据系列决定：

+ 散点图/带有涟漪特效动画的散点（气泡）图：忽略中心点超出坐标系的图形，但是不裁剪单个图形
+ 柱状图：裁掉完全超出的柱子，但是不会裁剪只超出部分的柱子
+ 折线图：裁掉所有超出坐标系的折线部分，拐点图形的逻辑按照散点图处理
+ 路径图：裁掉所有超出坐标系的部分
+ K 线图：忽略整体都超出坐标系的图形，但是不裁剪单个图形
+ 自定义系列：裁掉所有超出坐标系的部分

除了自定义系列，其它系列的默认值都为 true，及开启裁剪，如果你觉得不想要裁剪的话，可以设置成 false 关闭。

