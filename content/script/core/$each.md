---
name: $each
heading: Execute function for each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| fn | [function](/script/#functions) | -- | Callback function | ✓ |
| options | object | -- | Object properties below ||

---variables|label:Options Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| args | array | -- | Callback arguments ||
| scope | object | -- | Callback scope ||
| reverse | boolean | false | Reverse the order of execution ||

---code|label:Simple---

```javascript
Wee.$each('ref:element', function(el, i) {
	// Callback logic
});
```

---code|label:Advanced---

```javascript
Wee.$each('ref:element', function(el, i) {
	// Callback logic
}, {
	reverse: true,
	scope: this
});
```

---note---

**Note:** The element and index are injected as the first two callback parameters.