{{ target: echarts-time }}

## time

Utilities for parsing, formatting, and rounding temporal values.

### parse(Function)

```ts
(time: number|string|Date) => Date
```

Parses a timestamp, a `Date`, or a supported date string and returns a `Date`.

Parsing is independent of the chart's [timeZone](option.html#timeZone). In particular, a string without an explicit offset is parsed in the current system time zone. Use a timestamp, a `Date`, or a string with an explicit offset when the input must identify the same instant in every environment.

### format(Function)

```ts
(
    time: number|string|Date,
    template: string,
    timeZone: string,
    lang?: string
) => string

// Deprecated since v6.2.0:
(
    time: number|string|Date,
    template: string,
    isUTC: boolean,
    lang?: string
) => string
```

Formats a temporal value in an [IANA time zone](https://www.iana.org/time-zones), such as `'America/New_York'`, `'Asia/Shanghai'`, or `'UTC'`.

{{ use: partial-version(
    feature = 'The IANA time-zone overload is available',
    version = "6.2.0"
) }}

The supported templates are listed in [time axisLabel.formatter](option.html#xAxis.axisLabel.formatter). Since `v6.2.0`, `{Z}` formats the UTC offset without a padded hour (for example, `Z`, `-5`, or `+1:05`) and `{ZZ}` formats it with a padded hour (for example, `Z`, `-05:00`, or `+01:05`).

Example:

```ts
echarts.time.format(
    Date.parse('2024-11-03T06:30:00Z'),
    '{yyyy}-{MM}-{dd} {HH}:{mm} {ZZ}',
    'America/New_York'
);
// '2024-11-03 01:30 -05:00'
```

The boolean `isUTC` third parameter is deprecated since `v6.2.0`. The legacy `true` value selects UTC, while `false` selects the current system time zone. Pass `'UTC'` or an IANA time-zone string instead.

### roundTime(Function)

```ts
(
    date: Date,
    timeUnit: 'year'|'month'|'day'|'hour'|'minute'|'second'|'millisecond',
    timeZone: string
) => Date

// Deprecated since v6.2.0:
(
    date: Date,
    timeUnit: 'year'|'month'|'day'|'hour'|'minute'|'second'|'millisecond',
    isUTC: boolean
) => Date
```

Rounds `date` down to the start of `timeUnit` in the given IANA time zone. The input `Date` is mutated and returned.

{{ use: partial-version(
    feature = 'The IANA time-zone overload is available',
    version = "6.2.0"
) }}

The boolean `isUTC` third parameter is deprecated since `v6.2.0`. The legacy `true` value selects UTC, while `false` selects the current system time zone. Pass `'UTC'` or an IANA time-zone string instead.
