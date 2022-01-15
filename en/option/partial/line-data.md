
{{ target: partial-line-data-desc }}

Every data item is an array, the first item of which states the starting position, and the second the ending position. Position is assigned via `coord` attribute to the corresponding coordinate.

**For example: **
```ts
data: [
    [{
        coord: [10, 20],
        // data value
        value: 10
    }, {
        coord: [20, 30]
    }]
]
```

