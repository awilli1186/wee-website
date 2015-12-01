---
name: Tween
heading: Transition an attribute or property value
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| props | object | -- | Key/value object of attributes or properties | ✔ |
| options | object | -- | Object parameters below ||

---variables|label:Options Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| complete | [function](/script/#functions) | -- | Callback function ||
| duration | number | 400 | Transition duration in milliseconds ||
| ease | string | 'ease' | ease, linear, or name of registered easing ||

---code|label:Simple---

```javascript
Wee.animate.tween('ref:element', {
	height: 200
});
```

---code|label:Advanced---

```javascript
Wee.animate.tween('ref:element', {
	height: 200,
	marginTop: 100
}, {
	duration: 500,
	ease: 'linear',
	completed: function() {
		// Complete logic
	}
});
```

---note---

**Note:** If no unit is provided then pixel values will be assumed when tweening CSS attributes.