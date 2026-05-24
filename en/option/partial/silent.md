
{{ target: partial-silent }}

#${prefix} silent(boolean) = false

<ExampleUIControlBoolean />

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

Whether to ignore user interactions (typically, mouse or touch events).

- `true`: Elements do not respond to mouse and touch interactions. As a result:
    - Interactive features are disabled, such as `tooltip`, hover state changing (i.e., `emphasis`), hover linking, etc.
    - Mouse/touch events are not dispatched to user-registered listeners (i.e., `chart.on('xxx', listener)`).
- `false`:
    - Interactive features are not disabled by this option, but they still depend on other relevant options to be enabled.
    - Mouse/touch events are not prevented by this option, but they still depend on other relevent options (typically, `triggerEvent`, if supported).

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

Whether to enable to dispatch mouse/touch events to user-registered listeners (i.e., `chart.on('xxx', function (event) {})`).

Supported mouse/touch events are `'click'`, `'dblclick'`, `'mouseover'`, `'mouseout'`, `'mousemove'`, `'mousedown'`, `'mouseup'`, `'globalout'`, `'contextmenu'`. Note, both mouse and touch events are unified to the event type `'mouse{xxx}'`.

{{ /target }}



{{ target: partial-trigger-event-common-content-2 }}
Values:
- `true`: Enable to trigger events. But dispatching also requires option `silent` to be falsy.
- `false`: Disable to trigger mouse/touch events, even if option `silent` is falsy.
{{ /target }}
