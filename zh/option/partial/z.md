{{ target: partial-z }}

#${prefix|default("#")} z(number) = ${defaultZ|default(5)}

{{ use: partial-version(
    version = ${version}
) }}

`z`值小的图形会被`z`值大的图形覆盖。

`z`相比`zlevel`优先级更低，而且不会创建新的 Canvas。

