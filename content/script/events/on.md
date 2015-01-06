---
name: On
heading: Bind specified function to specified element and event
variables:
  - { var: "sel", desc: "Element to bind to", type: "selector, element", req: true }
  - { var: "a", desc: "Event name or object of events", type: "string, object", req: true }
  - { var: "b", desc: "Callback for events or options object", type: "callback, object" }
  - { var: "c", desc: "Option parameters below", type: "object" }
options:
  - { var: "one", desc: "Remove the event after first execution", type: "boolean", default: "false" }
  - { var: "delegate", desc: "Live watch all elements within this target", type: "selector, element" }
  - { var: "context", desc: "Only watch elements within this context", type: "selector, element" }
  - { var: "args", desc: "Callback arguments", type: "array" }
  - { var: "scope", desc: "Callback scope", type: "object" }
---

---doc|label:Simple---

```javascript
Wee.events.on('#logo', 'click', function(e, el) {
	// Click logic
	e.preventDefault();
});
```

---doc|label:Multiple---

```javascript
Wee.events.on('#logo', {
	mouseenter: function() {
		// Enter logic
	},
	mouseleave: function() {
		// Leave logic
	},
	click: function(e, el) {
		// Click logic
		e.preventDefault();
	}
});
```