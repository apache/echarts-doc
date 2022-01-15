{{target: data-transform}}

# Data Transform

`Data transform` has been supported since Apache ECharts<sup>TM</sup> 5. In echarts, the term `data transform` means that generate new data from user provided source data and transform functions. both This feature is enable users to process data in declarative way, and provides users some common "transform functions" to make that kind of tasks "out-of-the-box". (For consistency in the context, the noun form of the word we keep using the "transform" rather than "transformation").

The abstract formula of data transform is: `outData = f(inputData)`, where the transform function `f` can be like `filter`, `sort`, `regression`, `boxplot`, `cluster`, `aggregate`(todo) ...
With the help of those transform methods, users can be implements the features like:
+ Partition data into multiple series.
+ Make some statistics and visualize the result.
+ Adapt some visualization algorithms to data and display the result.
+ Sort data.
+ Remove or choose some kind of empty or special datums.
+ ...


## Get started to data transform

In echarts, data transform is implemented based on the concept of [dataset](~dataset). A [dataset.transform](option.html#dataset.transform) can be configured in a dataset instance to indicate that this dataset is to be generated from this `transform`. For example:

```ts
var option = {
    dataset: [{
        // This dataset is on `datasetIndex: 0`.
        source: [
            ['Product', 'Sales', 'Price', 'Year'],
            ['Cake', 123, 32, 2011],
            ['Cereal', 231, 14, 2011],
            ['Tofu', 235, 5, 2011],
            ['Dumpling', 341, 25, 2011],
            ['Biscuit', 122, 29, 2011],
            ['Cake', 143, 30, 2012],
            ['Cereal', 201, 19, 2012],
            ['Tofu', 255, 7, 2012],
            ['Dumpling', 241, 27, 2012],
            ['Biscuit', 102, 34, 2012],
            ['Cake', 153, 28, 2013],
            ['Cereal', 181, 21, 2013],
            ['Tofu', 395, 4, 2013],
            ['Dumpling', 281, 31, 2013],
            ['Biscuit', 92, 39, 2013],
            ['Cake', 223, 29, 2014],
            ['Cereal', 211, 17, 2014],
            ['Tofu', 345, 3, 2014],
            ['Dumpling', 211, 35, 2014],
            ['Biscuit', 72, 24, 2014],
        ],
        // id: 'a'
    }, {
        // This dataset is on `datasetIndex: 1`.
        // A `transform` is configured to indicate that the
        // final data of this dataset is transformed via this
        // transform function.
        transform: {
            type: 'filter',
            config: { dimension: 'Year', value: 2011 }
        },
        // There can be optional properties `fromDatasetIndex` or `fromDatasetId`
        // to indicate that where is the input data of the transform from.
        // For example, `fromDatasetIndex: 0` specify the input data is from
        // the dataset on `datasetIndex: 0`, or `fromDatasetId: 'a'` specify the
        // input data is from the dataset having `id: 'a'`.
        // [DEFAULT_RULE]
        // If both `fromDatasetIndex` and `fromDatasetId` are omitted,
        // `fromDatasetIndex: 0` are used by default.
    }, {
        // This dataset is on `datasetIndex: 2`.
        // Similarly, if neither `fromDatasetIndex` nor `fromDatasetId` is
        // specified, `fromDatasetIndex: 0` is used by default
        transform: {
            // The "filter" transform filters and gets data items only match
            // the given condition in property `config`.
            type: 'filter',
            // Transforms has a property `config`. In this "filter" transform,
            // the `config` specify the condition that each result data item
            // should be satisfied. In this case, this transform get all of
            // the data items that the value on dimension "Year" equals to 2012.
            config: { dimension: 'Year', value: 2012 }
        }
    }, {
        // This dataset is on `datasetIndex: 3`
        transform: {
            type: 'filter',
            config: { dimension: 'Year', value: 2013 }
        }
    }],
    series: [{
        type: 'pie', radius: 50, center: ['25%', '50%'],
        // In this case, each "pie" series reference to a dataset that has
        // the result of its "filter" transform.
        datasetIndex: 1
    }, {
        type: 'pie', radius: 50, center: ['50%', '50%'],
        datasetIndex: 2
    }, {
        type: 'pie', radius: 50, center: ['75%', '50%'],
        datasetIndex: 3
    }]
};
```

The case shows how we get three pies, representing the data from 2011, 2012, 2013.
~[800x300](${galleryViewPath}data-transform-multiple-pie&reset=1&edit=1)


Let's summarize the key points of using data transform:
+ Generate new data from existing declared data via the declaration of `transform`, `fromDatasetIndex`/`fromDatasetId` in some blank dataset.
+ Series references these datasets to show the result.



## Advanced usage

#### Piped transform

There is a syntactic sugar that pipe transforms like:
```ts
option: {
    dataset: [{
        source: [ ... ] // The original data
    }, {
        // Declare transforms in an array to pipe multiple transforms,
        // which makes them execute one by one and take the output of
        // the previous transform as the input of the next transform.
        transform: [{
            type: 'filter',
            config: { dimension: 'Product', value: 'Tofu' }
        }, {
            type: 'sort',
            config: { dimension: 'Year', order: 'desc' }
        }]
    }],
    series: {
        type: 'pie',
        // Display the result of the piped transform.
        datasetIndex: 1
    }
}
```

> Note: theoretically any type of transform is able to have multiple input data and multiple output data. But when a transform is piped, it is only able to take one input (except it is the first transform of the pipe) and product one output (except it is the last transform of the pipe).



#### Output multiple data

In most cases, transform functions only need to produce one data. But there is indeed scenarios that a transform function needs to produce multiple data, each of whom might be used by different series.

For example, in the built-in boxplot transform, besides boxplot data produced, the outlier data are also produced, which can be used in a scatter series. See the [example](${galleryEditorPath}boxplot-light-velocity&edit=1&reset=1).

We use prop [dataset.fromTransformResult](option.html#dataset.fromTransformResult) to satisfy this requirement. For example:

```ts
option = {
    dataset: [{
        // Original source data.
        source: [...]
    }, {
        transform: {
            type: 'boxplot'
        }
        // After this "boxplot transform" two result data generated:
        // result[0]: The boxplot data
        // result[1]: The outlier data
        // By default, when series or other dataset reference this dataset,
        // only result[0] can be visited.
        // If we need to visit result[1], we have to use another dataset
        // as follows:
    }, {
        // This extra dataset references the dataset above, and retrieves
        // the result[1] as its own data. Thus series or other dataset can
        // reference this dataset to get the data from result[1].
        fromDatasetIndex: 1,
        fromTransformResult: 1
    }],
    xAxis: {
        type: 'category'
    },
    yAxis: {
    },
    series: [{
        name: 'boxplot',
        type: 'boxplot',
        // Reference the data from result[0].
        datasetIndex: 1
    }, {
        name: 'outlier',
        type: 'scatter',
        // Reference the data from result[1].
        datasetIndex: 2
    }]
};
```

What more, [dataset.fromTransformResult](option.html#dataset.fromTransformResult) and [dataset.transform](option.html#dataset.transform) can both appear in one dataset, which means that the input of the transform is from retrieved from the upstream result specified by `fromTransformResult`. For example:

```ts
{
    fromDatasetIndex: 1,
    fromTransformResult: 1,
    transform: {
        type: 'sort',
        config: { dimension: 2, order: 'desc' }
    }
}
```


#### Debug in develop environment

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


## The transform "filter"

Transform type "filter" is a built-in transform that provide data filter according to specified conditions. The basic option is like:

```ts
option = {
    dataset: [{
        source: [
            ['Product', 'Sales', 'Price', 'Year'],
            ['Cake', 123, 32, 2011],
            ['Latte', 231, 14, 2011],
            ['Tofu', 235, 5, 2011],
            ['Milk Tee', 341, 25, 2011],
            ['Porridge', 122, 29, 2011],
            ['Cake', 143, 30, 2012],
            ['Latte', 201, 19, 2012],
            ['Tofu', 255, 7, 2012],
            ['Milk Tee', 241, 27, 2012],
            ['Porridge', 102, 34, 2012],
            ['Cake', 153, 28, 2013],
            ['Latte', 181, 21, 2013],
            ['Tofu', 395, 4, 2013],
            ['Milk Tee', 281, 31, 2013],
            ['Porridge', 92, 39, 2013],
            ['Cake', 223, 29, 2014],
            ['Latte', 211, 17, 2014],
            ['Tofu', 345, 3, 2014],
            ['Milk Tee', 211, 35, 2014],
            ['Porridge', 72, 24, 2014]
        ]
    }, {
        transform: {
            type: 'filter',
            config: { dimension: 'Year', '=': 2011 }
            // The config is the "condition" of this filter.
            // This transform traverse the source data and
            // and retrieve all the items that the "Year"
            // is `2011`.
        }
    }],
    series: {
        type: 'pie',
        datasetIndex: 1
    }
};
```

<br>
<br>
This is another example of filter transform:
~[600x350](${galleryViewPath}data-transform-filter&reset=1&edit=1)


**About dimension:**

The `config.dimension` can be:
+ Dimension name declared in dataset, like `config: { dimension: 'Year', '=': 2011 }`. Dimension name declaration is not mandatory.
+ Dimension index (start from 0), like `config: { dimension: 3, '=': 2011 }`.

**About relational operator:**

The relational operator can be:
`>`(`gt`), `>=`(`gte`), `<`(`lt`), `<=`(`lte`), `=`(`eq`), `!=`(`ne`, `<>`), `reg`. (The name in the parentheses are aliases). They follows the common semantics.
Besides the common number comparison, there is some extra features:
+ Multiple operators are able to appear in one {} item like `{ dimension: 'Price', '>=': 20, '<': 30 }`, which means logical "and" (Price >= 20 and Price < 30).
+ The data value can be "numeric string". Numeric string is a string that can be converted to number. Like ' 123 '. White spaces and line breaks will be auto trimmed in the conversion.
+ If we need to compare "JS `Date` instance" or date string (like '2012-05-12'), we need to specify `parser: 'time'` manually, like `config: { dimension: 3, lt: '2012-05-12', parser: 'time' }`.
+ Pure string comparison is supported but can only be used in `=`, `!=`. `>`, `>=`, `<`, `<=` do not support pure string comparison (the "right value" of the four operators can not be a "string").
+ The operator `reg` can be used to make regular expression test. Like using `{ dimension: 'Name', reg: /\s+Müller\s*$/ }` to select all data items that the "Name" dimension contains family name Müller.

**About logical relationship:**

Sometimes we also need to express logical relationship ( `and` / `or` / `not` ):
```ts
option = {
    dataset: [{
        source: [...]
    }, {
        transform: {
            type: 'filter',
            config: {
                // Use operator "and".
                // Similarly, we can also use "or", "not" in the same place.
                // But "not" should be followed with a {...} rather than `[...]`.
                and: [
                    { dimension: 'Year', '=': 2011 },
                    { dimension: 'Price', '>=': 20, '<': 30 }
                ]
            }
            // The condition is "Year" is 2011 and "Price" is greater
            // or equal to 20 but less than 30.
        }
    }],
    series: {
        type: 'pie',
        datasetIndex: 1
    }
};
```
`and`/`or`/`not` can be nested like:
```ts
transform: {
    type: 'filter',
    config: {
        or: [{
            and: [{
                dimension: 'Price', '>=': 10, '<': 20
            }, {
                dimension: 'Sales', '<': 100
            }, {
                not: { dimension: 'Product', '=': 'Tofu' }
            }]
        }, {
            and: [{
                dimension: 'Price', '>=': 10, '<': 20
            }, {
                dimension: 'Sales', '<': 100
            }, {
                not: { dimension: 'Product', '=': 'Cake' }
            }]
        }]
    }
}
```

**About parser:**

Some "parser" can be specified when make value comparison. At present only supported:
+ `parser: 'time'`: Parse the value to date time before comparing. The parser rule is the same as `echarts.time.parse`, where JS `Date` instance, timestamp number (in millisecond) and time string (like `'2012-05-12 03:11:22'`) are supported to be parse to timestamp number, while other value will be parsed to `NaN`.
+ `parser: 'trim'`: Trim the string before making comparison. For non-string, return the original value.
+ `parser: 'number'`: Force to convert the value to number before making comparison. If not possible to be converted to a meaningful number, converted to `NaN`. In most cases it is not necessary, because by default the value will be auto converted to number if possible before making comparison. But the default conversion is strict while this parser provide a loose strategy. If we meet the case that number string with unit suffix (like `'33%'`, `12px`), we should use `parser: 'number'` to convert them to number before making comparison.

This is an example to show the `parser: 'time'`:
```ts
option = {
    dataset: [{
        source: [
            ['Product', 'Sales', 'Price', 'Date'],
            ['Milk Tee', 311, 21, '2012-05-12'],
            ['Cake', 135, 28, '2012-05-22'],
            ['Latte', 262, 36, '2012-06-02'],
            ['Milk Tee', 359, 21, '2012-06-22'],
            ['Cake', 121, 28, '2012-07-02'],
            ['Latte', 271, 36, '2012-06-22'],
            ...
        ]
    }, {
        transform: {
            type: 'filter',
            config: {
                { dimension: 'Date', '>=': '2012-05', '<': '2012-06', parser: 'time' }
            }
        }
    }]
}
```

**Formally definition:**

Finally, we give the formally definition of the filter transform config here:
```ts
type FilterTransform = {
    type: 'filter';
    config: ConditionalExpressionOption;
};
type ConditionalExpressionOption =
    true | false | RelationalExpressionOption | LogicalExpressionOption;
type RelationalExpressionOption = {
    dimension: DimensionName | DimensionIndex;
    parser?: 'time' | 'trim' | 'number';
    lt?: DataValue; // less than
    lte?: DataValue; // less than or equal
    gt?: DataValue; // greater than
    gte?: DataValue; // greater than or equal
    eq?: DataValue; // equal
    ne?: DataValue; // not equal
    '<'?: DataValue; // lt
    '<='?: DataValue; // lte
    '>'?: DataValue; // gt
    '>='?: DataValue; // gte
    '='?: DataValue; // eq
    '!='?: DataValue; // ne
    '<>'?: DataValue; // ne (SQL style)
    reg?: RegExp | string; // RegExp
};
type LogicalExpressionOption = {
    and?: ConditionalExpressionOption[];
    or?: ConditionalExpressionOption[];
    not?: ConditionalExpressionOption;
};
type DataValue = string | number | Date;
type DimensionName = string;
type DimensionIndex = number;
```




## The transform "sort"

Another built-in transform is "sort".

```ts
option = {
    dataset: [{
        dimensions: ['name', 'age', 'profession', 'score', 'date'],
        source: [
            [' Hannah Krause ', 41, 'Engineer', 314, '2011-02-12'],
            ['Zhao Qian ', 20, 'Teacher', 351, '2011-03-01'],
            [' Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
            ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
            [' Karle Neumann ', 25, 'Engineer', 253, '2011-04-02'],
            [' Adrian Groß', 19, 'Teacher', null, '2011-01-16'],
            ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
            [' Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
            ['Han Meimei ', 67, 'Engineer', 366, '2011-03-12'],
        ]
    }, {
        transform: {
            type: 'sort',
            // Sort by score.
            config: { dimension: 'score', order: 'asc' }
        }
    }],
    series: {
        type: 'bar',
        datasetIndex: 1
    },
    ...
};
```

~[600x350](${galleryViewPath}data-transform-sort-bar&reset=1&edit=1)



Some extra features about "sort transform":
+ Order by multiple dimensions is supported. See examples below.
+ The sort rule:
  + By default "numeric" (that is, number and numeric-string like `' 123 '`) are able to sorted by numeric order.
  + Otherwise "non-numeric-string" are also able to be ordered among themselves. This might help to the case like grouping data items with the same tag, especially when multiple dimensions participated in the sort (See example below).
  + When "numeric" is compared with "non-numeric-string", or either of them is compared with other types of value, they are not comparable. So we call the latter one as "incomparable" and treat it as "min value" or "max value" according to the prop `incomparable: 'min' | 'max'`. This feature usually helps to decide whether to put the empty values (like `null`, `undefined`, `NaN`, `''`, `'-'`) or other illegal values to the head or tail.
+ `filter: 'time' | 'trim' | 'number'` can be used, the same as "filter transform".
  + If intending to sort time values (JS `Date` instance or time string like `'2012-03-12 11:13:54'`), `parser: 'time'` should be specified. Like `config: { dimension: 'date', order: 'desc', parser: 'time' }`
  + If intending to sort values with unit suffix (like `'33%'`, `'16px'`), need to use `parser: 'number'`.


See an example of multiple order:
```ts
option = {
    dataset: [{
        dimensions: ['name', 'age', 'profession', 'score', 'date'],
        source: [
            [' Hannah Krause ', 41, 'Engineer', 314, '2011-02-12'],
            ['Zhao Qian ', 20, 'Teacher', 351, '2011-03-01'],
            [' Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
            ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
            [' Karle Neumann ', 25, 'Engineer', 253, '2011-04-02'],
            [' Adrian Groß', 19, 'Teacher', null, '2011-01-16'],
            ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
            [' Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
            ['Han Meimei ', 67, 'Engineer', 366, '2011-03-12'],
        ]
    }, {
        transform: {
            type: 'sort',
            config: [
                // Sort by the two dimensions.
                { dimension: 'profession', order: 'desc' },
                { dimension: 'score', order: 'desc' }
            ]
        }
    }],
    series: {
        type: 'bar',
        datasetIndex: 1
    },
    ...
};
```
~[600x350](${galleryViewPath}doc-example/data-transform-multiple-sort-bar&reset=1&edit=1)


Finally, we give the formally definition of the sort transform config here:
```ts
type SortTransform = {
    type: 'filter';
    config: OrderExpression | OrderExpression[];
};
type OrderExpression = {
    dimension: DimensionName | DimensionIndex;
    order: 'asc' | 'desc';
    incomparable?: 'min' | 'max';
    parser?: 'time' | 'trim' | 'number';
};
type DimensionName = string;
type DimensionIndex = number;
```


## Use external transforms

Besides built-in transforms (like 'filter', 'sort'), we can also use external transforms to provide more powerful functionalities. Here we use a third-party library [ecStat](https://github.com/ecomfe/echarts-stat) as an example:

This case show how to make a regression line via ecStat:
```ts
// Register the external transform at first.
echarts.registerTransform(ecStatTransform(ecStat).regression);
```
```ts
option = {
    dataset: [{
        source: rawData
    }, {
        transform: {
            // Reference the registered external transform.
            // Note that external transform has a namespace (like 'ecStat:xxx'
            // has namespace 'ecStat').
            // built-in transform (like 'filter', 'sort') does not have a namespace.
            type: 'ecStat:regression',
            config: {
                // Parameters needed by the external transform.
                method: 'exponential'
            }
        }
    }],
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{
        name: 'scatter',
        type: 'scatter',
        datasetIndex: 0
    }, {
        name: 'regression',
        type: 'line',
        symbol: 'none',
        datasetIndex: 1
    }]
};
```

Examples with echarts-stat:

+ [Bar histogram](${galleryEditorPath}bar-histogram&edit=1&reset=1)
+ [Scatter clustering](${galleryEditorPath}scatter-clustering&edit=1&reset=1)
+ [Scatter linear regression](${galleryEditorPath}scatter-linear-regression&edit=1&reset=1)
+ [Scatter exponential regression](${galleryEditorPath}scatter-exponential-regression&edit=1&reset=1)
+ [Scatter logarithmic regression](${galleryEditorPath}scatter-logarithmic-regression&edit=1&reset=1)
+ [Scatter polynomial regression](${galleryEditorPath}scatter-polynomial-regression&edit=1&reset=1)

