---
name: Go
heading: Navigate to a new path or within the browser history
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| options | object | -- | Object properties below | ✔ |

---variables|label:Options Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| action | string | 'replace' | Either 'replace' or 'append' content ||
| extensions | array | -- | Whitelist of path extensions to support ||
| partials | [selection](/script#selection) | 'title, main' | Elements to replace from response ||
| path | string | -- | Path to local resource | ✔ |
| processErrors | boolean | false | Process replacements on error responses ||
| push | boolean | true | Push the path to the browser URL ||
| request | object | -- | Pass-through object to [Wee.data](/script/data#request) ||
| run | boolean | true | Evaluate routing rules ||
| scrollTop | number, [selection](/script#selection) | 0 | Vertical offset to scroll ||
| title | string | -- | Set or override the returned page title ||

---doc|label:Basic---

```javascript
Wee.history.go({
	path: '/page/path'
});
```

---code|label:Advanced---

```javascript
Wee.history.go({
	path: '/page/path',
	partials: '.element',
	complete: function() {
		// Complete logic
	}
});
```