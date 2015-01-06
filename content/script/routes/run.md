---
name: Run
heading: Process stored route options with optional config
variables:
  - { var: "opt", desc: "Object parameters below", type: "object" }
options:
  - { var: "routes", desc: "Object of {key: value} route mapping pairs", type: "object" }
  - { var: "path", desc: "Relative path from root domain", type: "string" }
---

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