---
name: Ready
heading: When specified references are ready execute callback
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| group | string | -- | Group reference name | ✓ |
| options | object | -- | Override any load configuration options ||
| poll | boolean | false | Poll the queue every 20 milliseconds for completion ||

---code|type:boolean|modifier:split|label:Check---

```javascript
Wee.assets.ready('dynamicAssets');
```

```javascript
true
```

---code|label:Check and Set---

```javascript
Wee.assets.ready('dynamicAssets', {
	success: function() {
		// Success logic
	}
});
```