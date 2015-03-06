---
name: On
heading: Bind specified function to specified element and event
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| a | string, object | -- | Event name or object of events | ✓ |
| b | [function](/script/#functions), object | -- | Event callback or options object ||
| c | object | -- | Option parameters below ||

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| args | array | -- | Callback arguments ||
| context | [selection](/script#selection) | -- | Context selection ||
| delegate | [selection](/script#selection) | -- | Delegate selection ||
| one | boolean | false | Deprecated: use once ||
| once | boolean | false | Remove the event after first execution ||
| scope | object | -- | Callback scope ||

---code|label:Simple---

```javascript
Wee.events.on('ref:element', 'click', function(e, el) {
	// Click logic
	e.preventDefault();
});
```

---code|label:Once---

```javascript
Wee.events.on('ref:element', 'click', function(e, el) {
	// Click logic
	e.preventDefault();
}, {
	once: true
});
```

---code|label:Delegation---

```javascript
Wee.events.on('.js-descendant', 'click', function(e, el) {
	// Click logic
	e.preventDefault();
}, {
	delegate: 'ref:element'
});
```

---code|label:Multiple Events---

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

---code|label:Multiple Selections---

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