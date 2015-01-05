---
name: Ready
heading: When specified references are ready execute callback
variables:
  - { var: "group", desc: "Group reference name", type: "string", req: true }
  - { var: "opt", desc: "Override any values set on the load function", type: "object" }
  - { var: "poll", desc: "Poll the queue every 20 milliseconds for completion", type: "boolean", default: "false" }
---

```javascript
Wee.assets.ready('dynamicAssets', {
	success: function() {
		// Success logic
	}
});
```