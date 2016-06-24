{{ target: partial-marker }}


{{use: partial-mark-point(
    prefix=${prefix},
    seriesType=${seriesType},
    hasCoord=${hasCoord},
    hasType=${hasType}
)}}prefix
{{use: partial-mark-line(
    prefix=${prefix},
    seriesType=${seriesType},
    hasCoord=${hasCoord},
    hasType=${hasType}
)}}
{{use: partial-mark-area(
    prefix=${prefix},
    seriesType=${seriesType},
    hasCoord=${hasCoord},
    hasType=${hasType}
)}}