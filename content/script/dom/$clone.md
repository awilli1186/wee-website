---
name: $clone
heading: Clone specified element
variables:
  - { var: "sel", desc: "Element to clone",type: "selector, element", req: true }
---

```javascript
var $clone = Wee.$clone('.element');
```