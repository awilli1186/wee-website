---
name: Run
heading: Process stored route options with optional config
---

---table---

| Variable | Type   | Default | Description             | Required |
| -------- | ------ | ------- | ----------------------- | -------- |
| opt      | object | --      | Object parameters below |          |

---table---

| Variable | Type   | Default | Description                                | Required |
| -------- | ------ | ------- | ------------------------------------------ | -------- |
| routes   | object | --      | Object of {key: value} route mapping pairs |          |
| path     | string | --      | Relative path from root domain             |          |

---doc---

Without arguments, the currently bound path and routes will be evaluated.

```javascript
Wee.routes.run();
```

---doc|label:Advanced---

If the object is provided in the first argument, run() will evaluate only the routes given at the provided path.

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