---
name: $last
heading: Get last match of specified element
variables:
  - { var: "sel", desc: "Last element", type: "selector, element", req: true }
---

```javascript
var $li = Wee.$last('.element li');
```