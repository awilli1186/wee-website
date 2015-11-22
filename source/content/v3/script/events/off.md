---
name: Off
heading: Remove specified function to specified element and optional event and function
---

---variables---

| Variable | Type| Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| a | string | -- | Event name or object of events ||
| b | [function](/script/#functions) | -- | Callback to remove ||

---code|label:Target---

If no event or callback is provided all element events will be removed.

```javascript
Wee.events.off('ref:element');
```

---code|label:Selection Event---

```javascript
Wee.events.off('ref:element', 'click');
```

---code|label:Selection Event Callback---

```javascript
Wee.events.off('ref:element', 'click', function(e, el) {
	// Click logic
});
```

---code|label:Multiple Selections---

```javascript
Wee.events.off({
	'ref:element': {
		mouseenter: function() {
			// Enter logic
		}
	},
	'.js-element': {
		click: function(e, el) {
			// Click logic
			e.preventDefault();
		}
	}
});
```