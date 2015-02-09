---
name: Remove
heading: Remove one or more files from the DOM
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| files | string, array | -- | Single file path or file array | &#10003; |
| root | string | -- | Root path or domain override for [root](#root) ||

---doc|label:Single File---

```javascript
Wee.assets.remove('/samples/override.css');
```

---doc|label:Multiple Files---

```javascript
Wee.assets.remove([
	'/samples/override.css',
	'/samples/alert.js'
], 'https://cdn.weepower.com');
```