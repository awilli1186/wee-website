---
name: $siblings
heading: Get siblings of specified element with optional filter
variables:
  - { var: "sel", desc: "Sibling element",type: "selector, element", req: true }
  - { var: "filter", desc: "Sibling filter", type: "selector" }
---

```javascript
var $lis = Wee.$siblings('.element', 'li');
```