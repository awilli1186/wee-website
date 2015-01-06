---
name: $parent
heading: Get parent of specified element
variables:
  - { var: "sel", desc: "Child element",type: "selector, element", req: true }
---

```javascript
var $parent = Wee.$parent('.element');
```