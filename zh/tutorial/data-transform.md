{{target: data-transform}}

# 使用 transform 进行数据转换

Apache ECharts<sup>TM</sup> 5 开始支持了“数据转换”（ data transform ）功能。在 echarts 中，“数据转换” 这个词指的是，给定一个已有的“数据集”（[dataset](option.html#dataset)）和一个“转换方法”（[transform](option.html#dataset.transform)），echarts 能生成一个新的“数据集”，然后可以使用这个新的“数据集”绘制图表。这些工作都可以声明式地完成。

抽象地来说，数据转换是这样一种公式：`outData = f(inputData)`。`f` 是转换方法，例如：`filter`、`sort`、`regression`、`boxplot`、`cluster`、`aggregate`(todo) 等等。有了数据转换能力后，我们就至少可以做到这些事情：
+ 把数据分成多份用不同的饼图展现。
+ 进行一些数据统计运算，并展示结果。
+ 用某些数据可视化算法处理数据，并展示结果。
+ 数据排序。
+ 去除或直选择数据项。
+ ...


## 数据转换基础使用

在 echarts 中，数据转换是依托于数据集（[dataset](~dataset)）来实现的. 我们可以设置 [dataset.transform](option.html#dataset.transform) 来表示，此 dataset 的数据，来自于此 transform 的结果。例如。

```ts
var option = {
    dataset: [{
        // 这个 dataset 的 index 是 `0`。
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
        // 这个 dataset 的 index 是 `1`。
        // 这个 `transform` 配置，表示，此 dataset 的数据，来自于此 transform 的结果。
        transform: {
            type: 'filter',
            config: { dimension: 'Year', value: 2011 }
        },
        // 我们还可以设置这些可选的属性： `fromDatasetIndex` 或 `fromDatasetId`。
        // 这些属性，指定了，transform 的输入，来自于哪个 dataset。例如，
        // `fromDatasetIndex: 0` 表示输入来自于 index 为 `0` 的 dataset 。又例如，
        // `fromDatasetId: 'a'` 表示输入来自于 `id: 'a'` 的 dataset。
        // 当这些属性都不指定时，默认认为，输入来自于 index 为 `0` 的 dataset 。
    }, {
        // 这个 dataset 的 index 是 `2`。
        // 同样，这里因为 `fromDatasetIndex` 和 `fromDatasetId` 都没有被指定，
        // 那么输入默认来自于 index 为 `0` 的 dataset 。
        transform: {
            // 这个类型为 "filter" 的 transform 能够遍历并筛选出满足条件的数据项。
            type: 'filter',
            // 每个 transform 如果需要有配置参数的话，都须配置在 `config` 里。
            // 在这个 "filter" transform 中，`config` 用于指定筛选条件。
            // 下面这个筛选条件是：选出维度（ dimension ）'Year' 中值为 2012 的所有
            // 数据项。
            config: { dimension: 'Year', value: 2012 }
        }
    }, {
        // 这个 dataset 的 index 是 `3`。
        transform: {
            type: 'filter',
            config: { dimension: 'Year', value: 2013 }
        }
    }],
    series: [{
        type: 'pie', radius: 50, center: ['25%', '50%'],
        // 这个饼图系列，引用了 index 为 `1` 的 dataset 。也就是，引用了上述
        // 2011 年那个 "filter" transform 的结果。
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

下面是上述例子的效果，三个饼图分别显示了 2011、2012、2013 年的数据。
~[800x300](${galleryViewPath}data-transform-multiple-pie&reset=1&edit=1)

现在我们简单总结下，使用 transform 时的几个要点：
+ 在一个空的 dataset 中声明 `transform`, `fromDatasetIndex`/`fromDatasetId` 来表示我们要生成新的数据。
+ 系列引用这个 dataset 。



## 数据转换的进阶使用

#### 链式声明 transform

`transform` 可以被链式声明，这是一个语法糖。
```ts
option: {
    dataset: [{
        source: [ ... ] // 原始数据
    }, {
        // 几个 transform 被声明成 array ，他们构成了一个链，
        // 前一个 transform 的输出是后一个 transform 的输入。
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
        // 这个系列引用上述 transform 的结果。
        datasetIndex: 1
    }
}
```

> 注意：理论上，任何 transform 都可能有多个输入或多个输出。但是，如果一个 transform 被链式声明，它只能获取前一个 transform 的第一个输出作为输入（第一个 transform 除外），以及它只能把自己的第一个输出给到后一个 transform （最后一个 transform 除外）。



#### 一个 transform 输出多个 data

在大多数场景下，transform 只需输出一个 data 。但是也有一些场景，需要输出多个 data ，每个 data 可以被不同的 series 或者 dataset 所使用。

例如，在内置的 "boxplot" transform 中，除了 boxplot 系列所需要的 data 外，离群点（ outlier ）也会被生成，并且可以用例如散点图系列显示出来。例如，[example](${galleryEditorPath}boxplot-light-velocity&edit=1&reset=1)。

我们提供配置 [dataset.fromTransformResult](option.html#dataset.fromTransformResult) 来满足这种情况，例如：

```ts
option = {
    dataset: [{
        // 这个 dataset 的 index 为 `0`。
        source: [...] // 原始数据
    }, {
        // 这个 dataset 的 index 为 `1`。
        transform: {
            type: 'boxplot'
        }
        // 这个 "boxplot" transform 生成了两个数据：
        // result[0]: boxplot series 所需的数据。
        // result[1]: 离群点数据。
        // 当其他 series 或者 dataset 引用这个 dataset 时，他们默认只能得到
        // result[0] 。
        // 如果想要他们得到 result[1] ，需要额外声明如下这样一个 dataset ：
    }, {
        // 这个 dataset 的 index 为 `2`。
        // 这个额外的 dataset 指定了数据来源于 index 为 `1` 的 dataset。
        fromDatasetIndex: 1,
        // 并且指定了获取 transform result[1] 。
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
        // 这个 series 引用 index 为 `1` 的 dataset 。
        datasetIndex: 1
    }, {
        name: 'outlier',
        type: 'scatter',
        // 这个 series 引用 index 为 `2` 的 dataset 。
        // 从而也就得到了上述的 transform result[1] （即离群点数据）
        datasetIndex: 2
    }]
};
```

另外，[dataset.fromTransformResult](option.html#dataset.fromTransformResult) 和 [dataset.transform](option.html#dataset.transform) 能同时出现在一个 dataset 中，这表示，这个 transform 的输入，是上游的结果中以 `fromTransformResult` 获取的结果。例如：

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


#### 在开发环境中 debug

使用 transform 时，有时候我们会配不对，显示不出来结果，并且不知道哪里错了。所以，这里提供了一个配置项 `transform.print` 方便 debug 。这个配置项只在开发环境中生效。如下例：

```ts
option = {
    dataset: [{
        source: [ ... ]
    }, {
        transform: {
            type: 'filter',
            config: { ... }
            // 配置为 `true` 后， transform 的结果
            // 会被 console.log 打印出来。
            print: true
        }
    }],
    ...
}
```


## 数据转换器 "filter"

echarts 内置提供了能起过滤作用的数据转换器。我们只需声明 `transform.type: "filter"`，以及给出数据筛选条件。如下例：

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
            // 这个筛选条件表示，遍历数据，筛选出维度（ dimension ）
            // 'Year' 上值为 2011 的所有数据项。
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
这是 filter 的另一个例子的效果：
~[600x350](${galleryViewPath}data-transform-filter&reset=1&edit=1)


在 "filter" transform 中，有这些要素：

**关于维度（ dimension ）：**

`config.dimension` 指定了维度，能设成这样的值：
+ 设定成声明在 dataset 中的维度名，例如 `config: { dimension: 'Year', '=': 2011 }`。不过， dataset 中维度名的声明并非强制，所以我们也可以
+ 设定成 dataset 中的维度 index （index 值从 0 开始）例如 `config: { dimension: 3, '=': 2011 }`。

**关于关系比较操作符：**

关系操作符，可以设定这些：
`>`（`gt`）、`>=`（`gte`）、`<`（`lt`）、`<=`（`lte`）、`=`（`eq`）、`!=`（`ne`、`<>`）、`reg`。（小括号中的符号或名字，是别名，设置起来作用相同）。他们首先基本地能基于数值大小进行比较，然后也有些额外的功能特性：
+ 多个关系操作符能声明在一个 {} 中，例如 `{ dimension: 'Price', '>=': 20, '<': 30 }`。这表示“与”的关系，即，筛选出价格大于等于 20 小于 30 的数据项。
+ data 里的值，不仅可以是数值（ number ），也可以是“类数值的字符串”（“ numeric string ”）。“类数值的字符串”本身是一个字符串，但是可以被转换为字面所描述的数值，例如 `' 123 '`。转换过程中，空格（全角半角空格）和换行符都能被消除（ trim ）。
+ 如果我们需要对日期对象（JS `Date`）或者日期字符串（如 '2012-05-12'）进行比较，我们需要手动指定 `parser: 'time'`，例如 `config: { dimension: 3, lt: '2012-05-12', parser: 'time' }`。
+ 纯字符串比较也被支持，但是只能用在 `=` 或 `!=` 上。而 `>`, `>=`, `<`, `<=` 并不支持纯字符串比较，也就是说，这四个操作符的右值，不能是字符串。
+ `reg` 操作符能提供正则表达式比较。例如， `{ dimension: 'Name', reg: /\s+Müller\s*$/ }` 能在 `'Name'` 维度上选出姓 `'Müller'` 的数据项。

**关于逻辑比较：**

我们也支持了逻辑比较操作符 **与或非**（ `and` | `or` | `not` ）：
```ts
option = {
    dataset: [{
        source: [...]
    }, {
        transform: {
            type: 'filter',
            config: {
                // 使用 and 操作符。
                // 类似地，同样的位置也可以使用 “or” 或 “not”。
                // 但是注意 “not” 后应该跟一个 {...} 而非 [...] 。
                and: [
                    { dimension: 'Year', '=': 2011 },
                    { dimension: 'Price', '>=': 20, '<': 30 }
                ]
            }
            // 这个表达的是，选出 2011 年价格大于等于 20 但小于 30 的数据项。
        }
    }],
    series: {
        type: 'pie',
        datasetIndex: 1
    }
};
```
`and`/`or`/`not` 自然可以被嵌套，例如：
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

**关于解析器（ parser ）：**

还可以指定“解析器”（ parser ）来对值进行解析后再做比较。现在支持的解析器有：
+ `parser: 'time'`：把原始值解析成时间戳（ timestamp ）后再做比较。这个解析器的行为，和 `echarts.time.parse` 相同，即，当原始值为时间对象（ JS `Date` 实例），或者是时间戳，或者是描述时间的字符串（例如 `'2012-05-12 03:11:22'` ），都可以被解析为时间戳，然后就可以基于数值大小进行比较。如果原始数据是其他不可解析为时间戳的值，那么会被解析为 NaN。
+ `parser: 'trim'`：如果原始数据是字符串，则把字符串两端的空格（全角半角）和换行符去掉。如果不是字符串，还保持为原始数据。
+ `parser: 'number'`：强制把原始数据转成数值。如果不能转成有意义的数值，那么转成 `NaN`。在大多数场景下，我们并不需要这个解析器，因为按默认策略，“像数值的字符串”就会被转成数值。但是默认策略比较严格，这个解析器比较宽松，如果我们遇到含有尾缀的字符串（例如 `'33%'`, `12px`），我们需要手动指定 `parser: 'number'`，从而去掉尾缀转为数值才能比较。

这个例子显示了如何使用 `parser: 'time'`：
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

**形式化定义：**

最后，我们给出，数据转换器 "filter" 的 config 的形式化定义：
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




## 数据转换器 "sort"

"sort" 是另一个内置的数据转换器，用于排序数据。目前主要能用于在类目轴（ `axis.type: 'category'` ）中显示排过序的数据。例如：

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
            // 按分数排序
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


数据转换器 "sort" 还有一些额外的功能：
+ 可以多重排序，多个维度一起排序。见下面的例子。
+ 排序规则是这样的：
  + 默认按照数值大小排序。其中，“可转为数值的字符串”也被转换成数值，和其他数值一起按大小排序。
  + 对于其他“不能转为数值的字符串”，也能在它们之间按字符串进行排序。这个特性有助于这种场景：把相同标签的数据项排到一起，尤其是当多个维度共同排序时。见下面的例子。
  + 当“数值及可转为数值的字符串”和“不能转为数值的字符串”进行排序时，或者它们和“其他类型的值”进行比较时，它们本身是不知如何进行比较的。那么我们称呼“后者”为“incomparable”，并且可以设置 `incomparable: 'min' | 'max'` 来指定一个“incomparable”在这个比较中是最大还是最小，从而能使它们能产生比较结果。这个设定的用途，比如可以是，决定空值（例如 `null`, `undefined`, `NaN`, `''`, `'-'`）在排序的头还是尾。
+ 过滤器 `filter: 'time' | 'trim' | 'number'` 可以被使用，和数据转换器 "filter" 中的情况一样。
  + 如果要对时间进行排序（例如，值为 JS `Date` 实例或者时间字符串如 `'2012-03-12 11:13:54'`），我们需要声明 `parser: 'time'`。
  + 如果需要对有后缀的数值进行排序（如 `'33%'`, `'16px'`）我们需要声明 `parser: 'number'`。


这是一个“多维度排序”的例子。
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
                // 对两个维度按声明的优先级分别排序。
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


最后，我们给出数据转换器 "sort" 的 config 的形式化定义。
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


## 使用外部的数据转换器

除了上述的内置的数据转换器外，我们也可以使用外部的数据转换器。外部数据转换器能提供或自己定制更丰富的功能。下面的例子中，我们使用第三方库 [ecStat](https://github.com/ecomfe/echarts-stat) 提供的数据转换器。

生成数据的回归线：
```ts
// 首先要注册外部数据转换器。
echarts.registerTransform(ecStatTransform(ecStat).regression);
```
```ts
option = {
    dataset: [{
        source: rawData
    }, {
        transform: {
            // 引用注册的数据转换器。
            // 注意，每个外部的数据转换器，都有名空间（如 'ecStat:xxx'，'ecStat' 是名空间）。
            // 而内置数据转换器（如 'filter', 'sort'）没有名空间。
            type: 'ecStat:regression',
            config: {
                // 这里是此外部数据转换器所需的参数。
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

一些使用外部转换器的例子：

+ [聚集](${galleryEditorPath}data-transform-aggregate&edit=1&reset=1)
+ [直方图](${galleryEditorPath}bar-histogram&edit=1&reset=1)
+ [简单聚类](${galleryEditorPath}scatter-clustering&edit=1&reset=1)
+ [线性回归线](${galleryEditorPath}scatter-linear-regression&edit=1&reset=1)
+ [指数回归线](${galleryEditorPath}scatter-exponential-regression&edit=1&reset=1)
+ [对数回归线](${galleryEditorPath}scatter-logarithmic-regression&edit=1&reset=1)
+ [多项式回归线](${galleryEditorPath}scatter-polynomial-regression&edit=1&reset=1)

