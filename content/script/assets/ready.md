---
name: Ready
heading: When specified references are ready execute callback
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| group | string | -- | Group reference name | ✓ |
| opt | object | -- | Override any load configuration options ||
| poll | boolean | false | Poll the queue every 20 milliseconds for completion ||

---doc---

```javascript
Wee.assets.ready('dynamicAssets', {
	success: function() {
		// Success logic
	}
});
```