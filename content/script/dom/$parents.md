---
name: $parents
heading: Get unique ancestors of matched elements with optional filter
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "filter", desc: "Filter selector", type: "selector, element" }
---

```javascript
var $parents = Wee.$parents('.element');
```