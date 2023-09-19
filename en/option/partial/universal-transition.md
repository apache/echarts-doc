
{{ target: partial-universal-transition }}

#${prefix} universalTransition(object)

{{ use: partial-version(
    version = "5.2.0"
) }}

Configuration related to universal transition animation.

Universal Transition provides the ability to morph between any series. With this feature enabled, each time `setOption`, transitions between series with the same `id` will be automatically associated with each other.

One-to-many or many-to-one animations such as drill-down, aggregation, etc. can also be achieved by specifying groups of data such as `encode.itemGroupId` or `dataGroupId`.

This can be enabled directly by configuring `universalTransition: true` in the series. It is also possible to provide an object for more detailed configuration.

##${prefix} enabled(boolean) = false

Whether to enable the universal transition animation.

##${prefix} seriesKey(string|Array)

The `seriesKey` determines how the series to be animated is associated, it defaults to the `id` of the series when not configured.

Usually this is configured as a string, and transitions between series with the same `seriesKey` will be applied. It can also be configured as an array like the following.

```ts
seriesKey: ['male', 'female']
```

Configuring to an array means that all series specified by the array item will be merged into the current series when animating. For example, this configuration means that series with `id` or `seriesKey` of `'male'` and `'female'` will be merged into the current series.

##${prefix} divideShape(string)

`divideShape` determines how the elements in the current series will split into multiple elements in a one-to-many or many-to-one animation. Currently supports

+ `'split'` Split the shape into multiple shapes.
+ `'clone'` Get multiple clones from the current element.

For better results, different series will have different configurations by default, for example, [scatter](~series-scatter) with smaller and more complex element uses `'clone'` by default, while more regular ones like bar charts default to `'split'`. You can set this to the desired splitting strategy according to the needs of your own scenario.

##${prefix} delay(Function)

```ts
(index: number, count: number) => number
```

Configure the animation delay for each shape in a one-to-many or many-to-one animation. Setting different animation delays can bring a more instereting animation. For example, the following code creates a staggered effect with a random delay for each shape.

```ts
delay: function (index, count) {
    return Math.random() * 1000;
}
```

