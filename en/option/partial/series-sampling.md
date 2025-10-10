
{{ target: partial-series-sampling }}

## sampling(string)

The dowmsampling strategy used when the data size is much larger than pixel size. It will improve the performance when turned on. Defaults to be turned off, indicating that all the data points will be drawn.

Options:
+ `'lttb'` Use Largest-Triangle-Three-Bucket algorithm to filter points. It will keep the trends and extremas.
+ `'average'` Use average value of filter points
+ `'min'` Use minimum value of filter points
+ `'max'` Use maximum value of filter points
+ `'minmax'` Use maximum extremum absolute value of filter points (Since `v5.5.0`)
+ `'sum'` Use sum of filter points
