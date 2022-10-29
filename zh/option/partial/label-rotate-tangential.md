{{ target: partial-label-rotate-tangential }}

#${prefix} rotate(string|number) = ${defaultRotate}

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

如果是 `number` 类型，则表示标签的旋转角，从 -90 度到 90 度，正值是逆时针。

除此之外，还可以是字符串 `'radial'` 表示径向旋转、`'tangential'` 表示切向旋转。

如果不需要文字旋转，可以将其设为 `0`。
