{{ target: partial-label-rotate-tangential }}

#${prefix} rotate(string|number) = ${defaultRotate}

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

If it is `number` type, then is stands for rotation, from -90 degrees to 90 degrees, and positive values stand for counterclockwise.

Besides, it can be string `'radial'`, standing for radial rotation; or `'tangential'`, standing for tangential rotation.

If no rotation is wanted, it can be set to `0`.