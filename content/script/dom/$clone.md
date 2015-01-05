---
name: $clone
heading: Clone specified element
variables:
  - { var: "sel", desc: "Element to clone",type: "element, selector", req: true }
---

```javascript
var $clone = Wee.$clone('.element');
```