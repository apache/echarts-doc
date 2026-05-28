
{{ target: partial-silent }}

#${prefix} silent(boolean) = false

<ExampleUIControlBoolean />

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

图形是否不响应和用户交互（鼠标和触摸事件）。

- `true`: 图形不响应用户交互。这导致：
    - 用户交互功能被禁止，例如 `tooltip`、鼠标悬浮时的状态变化（`emphasis`），鼠标悬浮时的联动等。
    - 对外的鼠标和触摸事件不再发送给开发者注册的监听器（`chart.on('xxx', listener)`）。
- `false`:
    - 用户交互功能不被此配置项禁止，但是是否可交互仍取决于其他相关配置项的设置。
    - 对外的鼠标和触摸事件不被此配置项禁止，但是是否发送仍取决于其他配置项，一般是 `triggerEvent`（如果支持此配置项的话）。

{{ /target }}



{{ target: partial-trigger-event-common-content }}

<ExampleUIControlBoolean default="${defaultValue|default('false')}" />

{{ use: partial-trigger-event-common-content-1(
    version = ${version}
) }}
{{ use: partial-trigger-event-common-content-2() }}

{{ /target }}



{{ target: partial-trigger-event-common-content-1 }}

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

鼠标和触摸事件是否发送给开发者注册的监听器（`chart.on('xxx', function (event) {})`）。

支持的鼠标和触摸事件为 `'click'`、`'dblclick'`、`'mouseover'`、`'mouseout'`、`'mousemove'`、`'mousedown'`、`'mouseup'`、`'globalout'`、`'contextmenu'`。注意，鼠标和触摸事件都统一使用名字 `'mouse{xxx}'`。

{{ /target }}



{{ target: partial-trigger-event-common-content-2 }}
可取值：
- `true`: 允许对外发送事件。但是它也需要 `silent` 配置项为 `false` 才能真正发送事件。
- `false`: 禁止对外发送事件，哪怕 `silent` 配置项为 `false`。
{{ /target }}
