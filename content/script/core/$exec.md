---
name: $exec
heading: Execute specified function or controller method
variables:
  - { var: "fn", desc: "Function to execute", type: "callback, array", req: true }
  - { var: "opt", desc: "Callback options below", type: "object" }
options:
  - { var: "scope", desc: "Callback scope", type: "object" }
  - { var: "args", desc: "Injected callback arguments",type: "array" }
---

```javascript
Wee.$exec('controller:functions');

Wee.$exec('controller:functions', {
	scope: this,
	arguments: [
	'Hello',
	123
	]
});

Wee.$exec(function() {
	//
});

Wee.$exec([
	'controller:function',
	'controller2:function'
	]);
```