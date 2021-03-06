---
name: Run
heading: Process stored route options with optional config
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| options | object | -- | Object parameters below ||

---variables|label:Options Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| path | string | -- | Relative path from root domain ||
| routes | object | -- | Mapping object ||

---code---

Without arguments, the currently bound path and routes will be evaluated.

```javascript
Wee.routes.run();
```

---code|label:Advanced---

If an object is provided, only the passed routes will be evaluated.

```javascript
Wee.routes.run({
	routes: {
		'$any': 'common:init',
		'script': {
			'routes': function() {
				// Current page
			}
		}
	},
	path: '/script/routes'
});
```