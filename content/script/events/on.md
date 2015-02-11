---
name: On
heading: Bind specified function to specified element and event
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | [selection](/script#selection) | -- | [Wee selection](/script/core#core) | ✓ |
| a | string, object | -- | Event name or object of events | ✓ |
| b | callback, object | -- | Event callback or options object ||
| c | object | -- | Option parameters below ||

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| args | array | -- | Callback arguments ||
| context | selector, element | -- | [Wee selection](/script/core#core) context ||
| delegate | selector, element | -- | [Wee selection](/script/core#core) delegate ||
| one | boolean | false | Remove the event after first execution ||
| scope | object | -- | Callback scope ||

---doc|label:Simple---

```javascript
Wee.events.on('ref:element', 'click', function(e, el) {
	// Click logic
	e.preventDefault();
});
```

---doc|label:Once---

```javascript
Wee.events.on('ref:element', 'click', function(e, el) {
	// Click logic
	e.preventDefault();
}, {
	once: true
});
```

---doc|label:Delegation---

```javascript
Wee.events.on('.js-descendant', 'click', function(e, el) {
	// Click logic
	e.preventDefault();
}, {
	delegate: 'ref:element'
});
```

---doc|label:Multiple Events---

```javascript
Wee.events.on('ref:element', {
	click: function() {
		// Click logic
	},
	blur: function() {
		// Blur logic
	}
});
```

---doc|label:Multiple Targets---

```javascript
Wee.events.on({
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