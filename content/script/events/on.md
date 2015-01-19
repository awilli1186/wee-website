---
name: On
heading: Bind specified function to specified element and event
---

---table---

| Variable | Type              | Default | Description                           | Required |
| -------- | ----------------- | ------- | ------------------------------------- | -------- |
| sel      | selector, element | --      | Element to bind to                    | &#10003; |
| a        | string, object    | --      | Event name or object of events        | &#10003; |
| b        | callback, object  | --      | Callback for events or options object |          |
| c        | object            | --      | Option parameters below               |          |

---table---

| Variable | Type              | Default | Description                                | Required |
| -------- | ----------------- | ------- | ------------------------------------------ | -------- |
| one      | boolean           | false   | Remove the event after first execution     |          |
| delegate | selector, element | --      | Live watch all elements within this target |          |
| context  | selector, element | --      | Only watch elements within this context    |          |
| args     | array             | --      | Callback arguments                         |          |
| scope    | object            | --      | Callback scope                             |          |

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