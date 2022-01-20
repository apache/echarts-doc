{{ target: partial-sector-border-radius }}

#${prefix} borderRadius(number|string|Array)

<ExampleUIControlPercentVector min="0" dims="InnerStart,InnerEnd,OuterStart,OuterEnd" default="0,0,0,0" />

{{ use: partial-version(
    version = "5.0.0"
) }}

To specify the roundness for corners of the sectors of the ${type} chart. It can be either a specific pixel value or a percentage value relative to the radius of the sector.

Since `v5.3.0`, it is supported to configure the corner radius of the four corners respectively from the inside to the outside, clockwise. The relative target of the percentage value has been changed to be the difference between the inner radius and the outer radius.

For example:

Before `v5.3.0`:

+ `borderRadius: 10`: means that both inner corner radius and outer corner radius are `10px`.
+ `borderRadius: '20%'`: means that both inner corner radius is `20%` of the inner radius and outer corner radius is `20%` of the outer radius.
+ `borderRadius: [10, 20]`: means that the inner corner radius is `10px` and the outer corner radius is `20px`.
+ `borderRadius: ['20%', '50%']`: means that the inner corner radius is `20%` of the inner radius and the outer corner radius is `50%` of the outer radius.

Since `v5.3.0`:

+ `borderRadius: 10`: means that both inner corner radius and outer corner radius are `10px`.
+ `borderRadius: '20%'`: means that both inner corner radius is `20%` of the inner radius and outer corner radius is `20%` of the outer radius.
+ `borderRadius: [10, 20]`: means that the inner corner radius is `10px` and the outer corner radius is `20px`.
+ `borderRadius: ['20%', '50%']`: means that the inner corner radius is `20%` of the difference between the inner sector and the outer sector, and the outer corner radius is `50%` of the difference.
+ `borderRadius: [5, 10, 15, 20]`: means the two inner corner radii are `5px` and `10px`, and the two outer corner radii are `15px` and `20px`.