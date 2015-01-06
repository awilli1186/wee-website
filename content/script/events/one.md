---
name: One
heading: Bind specified function to specified element and event for single execution
variables:
  - { var: "sel", desc: "Element to bind to", type: "string", req: true }
  - { var: "a", desc: "Event name or object of events", type: "selector, element", req: true }
  - { var: "b", desc: "Callback for events or options object",type: "selector, element" }
  - { var: "c", desc: "Option parameters, same as on", type: "array" }
---

---doc---

Works exactly the same as on but immediately removes the event after the first execution.

```javascript
Wee.events.one('#logo', 'click', function(e, el) {
	// Click logic
	e.preventDefault();
});
```