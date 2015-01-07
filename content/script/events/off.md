---
name: Off
heading: Remove specified function to specified element and optional event|function
variables:
  - { var: "sel", desc: "Element to unbind from",type: "selector, element", req: true }
  - { var: "evt", desc: "Event name", type: "string" }
  - { var: "fn", desc: "Specific callback to remove", type: "callback" }
  - { var: "opt", desc: "Option parameters below", type: "object" }
options:
  - { var: "one", desc: "Remove the event after first execution", type: "boolean", default: "false" }
  - { var: "delegate", desc: "Live watch all elements within this target", type: "selector, element" }
  - { var: "context", desc: "Only watch elements within this context", type: "selector, element" }
  - { var: "args", desc: "Callback arguments", type: "array" }
  - { var: "scope", desc: "Callback scope", type: "object" }
---

---doc|label:Remove All---

```javascript
Wee.events.off('#logo');
```

---doc|label:Remove Single---

```javascript
Wee.events.off('#logo', 'click');
```