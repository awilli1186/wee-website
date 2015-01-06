---
name: $map
heading: Translate items in an array|selection to new array
variables:
  - { var: "sel", desc: "Array or selector", type: "array, selector", req: true }
  - { var: "fn", desc: "Callback function", type: "callback", req: true }
  - { var: "opt", desc: "Callback options below", type: "object" }
options:
  - { var: "args", desc: "Callback arguments (appended after element and index)", type: "array" }
  - { var: "scope", desc: "Callback scope", type: "object" }
---

---code|label:Simple Array---

```javascript
Wee.$map([1, 2, 3], function(val) {
	return val + 1;
});
```

```javascript
[2, 3, 4]
```