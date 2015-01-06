---
name: Map
heading: Bind single or set of screen events with specified options
variables:
  - { var: "sets", desc: "Object parameters below", type: "object, array" }
options:
  - { var: "size", desc: "Specific breakpoint trigger", type: "number" }
  - { var: "min", desc: "Minimum breakpoint trigger", type: "number" }
  - { var: "max", desc: "Maximum breakpoint trigger", type: "number" }
  - { var: "init", desc: "Immediately evaluate", type: "boolean", default: "true", req: true }
  - { var: "watch", desc: "Evaluate on screen resize", type: "boolean", default: "true", req: true }
  - { var: "callback", desc: "Matching callback", type: "callback", req: true }
  - { var: "args", desc: "Arguments to inject into callback", type: "array" }
  - { var: "scope", desc: "Callback scope", type: "object" }
---
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