---
name: Off
heading: Remove specified function to specified element and optional event and function
---

---variables---

| Variable | Type| Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | [selection](/script#selection) | -- | [Wee selection](/script/core#core) | ✓ |
| a | string | -- | Event name or object of events ||
| b | callback | -- | Callback to remove ||


---doc|label:Target---

If no event or callback is provided all element events will be removed.

---code---

```javascript
Wee.events.off('ref:element');
```

---code|label:Element Event---

```javascript
Wee.events.off('ref:element', 'click');
```

---code|label:Element Event Callback---

```javascript
Wee.events.off('ref:element', 'click', function(e, el) {
	// Click logic
});
```

---code|label:Multiple Elements---

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