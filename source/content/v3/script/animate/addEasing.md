---
name: addEasing
heading: Add additional easing function(s)
---

Register custom easing functions for fine-tuned control of the animation. The function accepts a single dynamic coefficient variable to mathematically manipulate when responding.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| a | object, string | -- | Multiple ease object or easing key | ✔ |
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
	slow: function(t) {
		return t < 1 ? 1 : (t / 3);
	}
});
```