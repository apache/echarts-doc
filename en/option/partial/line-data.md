{{ target: partial-line-data-desc }}

Every data item is an array, the first item in the array is starting position,  the second is finishing position. Through attribute `coord` you can assign position in the corresponding coordinate system.

**For example: **
```js
data: [
    [{
        coord: [10, 20],
        // numerical magnitude
        value: 10
    }, {
        coord: [20, 30]
    }]
]
```

