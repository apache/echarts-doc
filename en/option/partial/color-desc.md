{{ target: partial-color-desc }}

> Color can be represented in RGB, for example `'rgb(128, 128, 128)'`. RGBA can be used when you need alpha channel, for example `'rgba(128, 128, 128, 0.5)'`. You may also use hexadecimal format, for example `'#ccc'`. Gradient color and texture are also supported besides single colors.
> ```js
> // Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If another parameter is passed in as `true`, then the first four parameters are in absolute pixel positions.
> color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
>   offset: 0, color: 'red' // color at 0% position
> }, {
>   offset: 1, color: 'blue' // color at 100% position
> }], false)
> // Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.
> color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [...], false)
> // Fill with texture
> color: new echarts.graphic.Pattern(
>   imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported
>   'repeat' // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat
> )
> ```