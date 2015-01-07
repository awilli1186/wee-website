---
name: Bind
heading: Traverse DOM for available bindings
variables:
  - { var: "evts", desc: "Events object", type: "string", default: "Currently mapped events" }
  - { var: "opt", desc: "Callback arguments", type: "object" }
deprecated: true
---

---notice---

[Wee.events.on()](#on) should be used instead using 'ref:id' selectors.

---

---doc---

Bind works the same as [map](#map) except it immediately binds the provided events.

```javascript
Wee.events.bind({
	'actionButton': {
		click: function() {
			// Click logic
		}
	}
});
```