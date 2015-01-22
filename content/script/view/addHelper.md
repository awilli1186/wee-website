---
name: addHelper
---

This allows the creation of custom helpers. An example helper would be a
function that changes a string to upper case.

---table---

| Variable | Type           | Default | Description           | Required |
| -------- | -------------- | ------- | --------------------- | -------- |
| a        | string, object | --      | Helper name or object | &#10003; |
| b        | callback       | --      | Helper logic          |          |

---doc---

```javascript
Wee.view.addHelper('helperName', function() {
	// Helper logic
});
```