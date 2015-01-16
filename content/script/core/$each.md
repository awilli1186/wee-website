---
name: $each
heading: Execute specified function for specified elements|selector
---

---table---

| Variable | Type              | Default | Description              | Required |
| -------- | ----------------- | ------- | ------------------------ | -------- |
| sel      | selector, element | --      | Array or selector        | &#10003; |
| fn       | callback          | --      | Callback function        | &#10003; |
| opt      | object            | --      | Callback arguments below |          |

---table---

| Variable | Type    | Default | Description                                           | Required |
| -------- | ------- | ------- | ----------------------------------------------------- | -------- |
| args     | array   | --      | Callback arguments (appended after element and index) |          |
| scope    | object  | --      | Callback scope                                        |          |
| reverse  | boolean | --      | Reverse the order of execution                        |          |

---doc---

```javascript
Wee.$each('.element', function(el, i) {
	// Callback logic
}, {
	reverse: true,
	scope: this
});
```