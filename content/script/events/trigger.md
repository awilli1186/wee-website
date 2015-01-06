---
name: Trigger
heading: Execute specific element|slector event by name and optional trigger
variables:
  - { var: "sel", desc: "Element to trigger event on", type: "selector, element", req: true }
  - { var: "evt", desc: "Event name", type: "string", req: true }
---

```javascript
Wee.events.trigger('.element', 'click');
```