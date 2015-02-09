---
name: $each
heading: Execute specified function for specified elements|selector
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) | &#10003; |
| fn | callback | -- | Callback function | &#10003; |
| opt | object | -- | Object properties below ||

---variables|label:Options Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| args | array | -- | Callback arguments ||
| scope | object | -- | Callback scope ||
| reverse | boolean | false | Reverse the order of execution ||

---code|label:Simple---

```javascript
Wee.$each('.js-element', function(el, i) {
	// Callback logic
});
```

---code|label:Advanced---

```javascript
Wee.$each('.js-element', function(el, i) {
	// Callback logic
}, {
	reverse: true,
	scope: this
});
```

---note---

**Note:** The element and index are always injected as the first two callback parameters.