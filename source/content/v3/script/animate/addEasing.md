---
name: addEasing
heading: Transition an attribute or property value
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| a | object, string | -- | Multiple ease object or easing key | ✓ |
| b | function | -- | Easing function ||

---code|label:Single---

```javascript
Wee.animate.addEasing('split', function(t) {
	return t / 2;
});
```

---code|label:Multiple---

```javascript
Wee.animate.addEasing({
	split: function(t) {
		return t / 2;
	},
	slow: function() {
		return t < 1 ? 1 : (t / 3);
	}
});
```