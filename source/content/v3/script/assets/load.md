---
name: Load
heading: Load specified assets with specified set of options
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| options | object | -- | Object parameters below | ✓ |

---variables|label:Configuration Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| async | boolean | true | Load assets asynchronously, only applicable to scripts ||
| cache | boolean | true | Cache-bust requests with random querystring ||
| css | string, array | -- | Single CSS path or array of CSS paths | ✓ |
| error | [function](/script/#functions) | -- | Failure callback ||
| files | string, array | -- | Single file path or array of file paths | ✓ |
| group | string | -- | Optional reference for use with [ready](#ready) ||
| img | string, array | -- | Single image path or array of image paths | ✓ |
| js | string, array | -- | Single JavaScript path or array of JavaScript paths | ✓ |
| root | string | -- | Root path or domain override for [root](#root) ||
| success | [function](/script/#functions) | -- | Success callback ||

---code|label:Single File---

```javascript
Wee.assets.load({
	files: '/samples/alert.js'
});
```

---code|label:Multiple Files---

```javascript
Wee.assets.load({
	root: 'https://cdn.weepower.com',
	files: [
		'/samples/alert.js',
		'/samples/override.css',
		'/samples/sample.png'
	],
	success: function() {
		// Success logic
	},
	error: function() {
		// Failure logic
	}
});
```

---note---

**Note:** If an absolute url beginning with //, http://, or https:// is requested it will bypass the root if set.

---code|label:Group---

By providing a group name you can optionally check against the group later for completion.

```javascript
Wee.assets.load({
	files: '/samples/alert.js',
	group: 'dynamicAssets'
});
```