---
name: Map
heading: Bind single or set of screen events with specified options
---

---table---

| Variable | Type          | Default | Description             | Required |
| -------- | ------------- | ------- | ----------------------- | -------- |
| sets     | object, array | --      | Object parameters below |          |

---table---

| Variable | Type     | Default | Description                            | Required |
| -------- | -------- | ------- | -------------------------------------- | -------- |
| size     | number   | --      | Specific breakpoint trigger            |          |
| min      | number   | --      | Minimum breakpoint trigger             |          |
| max      | number   | --      | Maximum breakpoint trigger             |          |
| init     | boolean  | true    | Immediately evaluate                   | &#10003; |
| watch    | boolean  | true    | Evaluate on screen resize              | &#10003; |
| callback | callback | --      | Matching callback                      | &#10003; |
| args     | array    | --      | Arguments to inject into callback      |          |
| scope    | object   | --      | Callback scope                         |          |
| once     | boolean  | --      | Disable callback after first execution |          |

---doc---

You can setup as many breakpoint callbacks as you need. As they are mapped they are added to a global window resize event that evaluates against all the breakpoints in storage. An object with the direction, size, previous size, and init status is always injected as the first argument to the callback.

---doc|label:Single---

```javascript
Wee.screen.map({
	size: 4,
	callback: function() {
		// Small desktop logic
	}
});
```

---doc|label:Multiple---

```javascript
Wee.screen.map([
	{
		size: 1,
		init: true,
		callback: [
		'common:mobile',
		'common:smallScreen'
		]
	},
	{
		min: 3,
		max: 4,
		init: true,
		callback: 'common:mediumScreen'
	},
	{
		min: 5,
		init: true,
		args: ['passThrough'],
		callback: function(obj, val) {
			console.log(val); // passThrough
			console.log(obj);
			// obj.dir: 1 if increase in size, 0 if decrease
			// obj.size: 1-6 representing current size
			// obj.prev: 1-6 representing previous size
			// obj.init: true if this was run initially, else false
		}
	}
]);
```