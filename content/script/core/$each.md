---
name: $each
heading: Execute specified function for specified elements|selector
variables:
  - { var: "sel", desc: "Array or selector", type: "selector, element", req: true }
  - { var: "fn", desc: "Callback function", type: "callback", req: true }
  - { var: "opt", desc: "Callback arguments below", type: "object" }
options:
  - { var: "args", desc: "Callback arguments (appended after element and index)", type: "array" }
  - { var: "scope", desc: "Callback scope", type: "object" }
  - { var: "reverse", desc: "Reverse the order of execution", type: "boolean", default: "false" }
---

```javascript
Wee.$each('.element', function(el, i) {
	// Callback logic
}, {
	reverse: true,
	scope: this
});
```