---
name: Fire
heading: Execute specific function by name and event
variables:
  - { var: "name", desc: "Data bound name", type: "string", req: true }
  - { var: "evt", desc: "Event name", type: "string", req: true }
---

```javascript
Wee.events.fire('actionButton', 'click');
```