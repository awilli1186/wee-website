---
name: $last
heading: Get last match of specified element
variables:
  - { var: "sel", desc: "Last element", type: "selector, element", req: true }
  - { var: "context", desc: "Context selector", type: "selector, element" }
---

```javascript
var $li = Wee.$last('.element li');
```