---
name: Off
heading: Remove specified function to specified element and optional event|function
variables:
  - { var: "sel", desc: "Element to unbind from",type: "selector, element", req: true }
  - { var: "evt", desc: "Event name", type: "string" }
  - { var: "fn", desc: "Specific callback to remove", type: "callback" }
---

---doc|label:Remove All---

```javascript
Wee.events.off('#logo');
```

---doc|label:Remove Single---

```javascript
Wee.events.off('#logo', 'click');
```