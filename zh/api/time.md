{{ target: echarts-time }}

## time

用于解析、格式化和舍入时间值的工具方法。

### parse(Function)

```ts
(time: number|string|Date) => Date
```

解析时间戳、`Date` 或支持的日期字符串并返回 `Date`。

解析过程不受图表的 [timeZone](option.html#timeZone) 影响。特别是，没有显式偏移量的字符串按照当前系统时区解析。如果输入必须在所有环境中表示同一时刻，请使用时间戳、`Date` 或带有显式偏移量的字符串。

### format(Function)

```ts
(
    time: number|string|Date,
    template: string,
    timeZone: string,
    lang?: string
) => string

// 从 v6.2.0 起废弃：
(
    time: number|string|Date,
    template: string,
    isUTC: boolean,
    lang?: string
) => string
```

按照 [IANA 时区](https://www.iana.org/time-zones) 格式化时间值，例如 `'America/New_York'`、`'Asia/Shanghai'` 或 `'UTC'`。

{{ use: partial-version(
    feature = '支持 IANA 时区重载',
    version = "6.2.0"
) }}

支持的模板参见[时间轴 axisLabel.formatter](option.html#xAxis.axisLabel.formatter)。从 `v6.2.0` 开始，`{Z}` 生成小时不补零的 UTC 偏移量（例如 `Z`、`-5` 或 `+1:05`），`{ZZ}` 生成小时补零的 UTC 偏移量（例如 `Z`、`-05:00` 或 `+01:05`）。

示例：

```ts
echarts.time.format(
    Date.parse('2024-11-03T06:30:00Z'),
    '{yyyy}-{MM}-{dd} {HH}:{mm} {ZZ}',
    'America/New_York'
);
// '2024-11-03 01:30 -05:00'
```

第三个布尔参数 `isUTC` 从 `v6.2.0` 起废弃。旧值 `true` 选择 UTC，`false` 选择当前系统时区。请改传 `'UTC'` 或 IANA 时区字符串。

### roundTime(Function)

```ts
(
    date: Date,
    timeUnit: 'year'|'month'|'day'|'hour'|'minute'|'second'|'millisecond',
    timeZone: string
) => Date

// 从 v6.2.0 起废弃：
(
    date: Date,
    timeUnit: 'year'|'month'|'day'|'hour'|'minute'|'second'|'millisecond',
    isUTC: boolean
) => Date
```

按照给定 IANA 时区，将 `date` 向下舍入到 `timeUnit` 的起点。传入的 `Date` 会被修改并返回。

{{ use: partial-version(
    feature = '支持 IANA 时区重载',
    version = "6.2.0"
) }}

第三个布尔参数 `isUTC` 从 `v6.2.0` 起废弃。旧值 `true` 选择 UTC，`false` 选择当前系统时区。请改传 `'UTC'` 或 IANA 时区字符串。
