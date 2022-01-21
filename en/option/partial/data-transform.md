
{{ target: partial-data-transform-tutorial-ref }}

See the tutorial of [data transform](tutorial.html#Data%20Transform).



{{ target: partial-data-transform-print }}

### print(boolean) = false

When using data transform, we might run into the trouble that the final chart do not display correctly but we do not know where the config is wrong. There is a property `transform.print` might help in such case. (`transform.print` is only available in dev environment).

```ts
option = {
    dataset: [{
        source: [ ... ]
    }, {
        transform: {
            type: 'filter',
            config: { ... }
            // The result of this transform will be printed
            // in dev tool via `console.log`.
            print: true
        }
    }],
    ...
}
```

