---
name: Bound
heading: Get currently bound events to optional specified element and event|function
variables:
  - { var: "sel", desc: "Element to query for events", type: "selector, element" }
  - { var: "evt", desc: "Event name", type: "string" }
  - { var: "fn", desc: "Specific callback", type: "callback" }
---

---doc---

By default bound will return all bound events.

---code---

```javascript
Wee.events.bound('.element');
```

```javascript
{events}
```