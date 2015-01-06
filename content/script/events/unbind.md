---
name: Unbind
heading: Remove bindings to bound object
variables:
  - { var: "id", desc: "Data bound name", type: "string", req: true }
  - { var: "evt", desc: "Event name", type: "string" }
---

---doc---

If a second argument isn't supplies all events on the element will be unbound.

```javascript
Wee.events.unbind('actionButton', 'click');
```