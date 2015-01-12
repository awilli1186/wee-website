---
name: $filter
heading: Return a subset of elements based on a specified filter from a specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "filter", desc: "Filter selector or callback taking the element and index", type: "selector, callback", req: true }
  - { var: "opt", desc: "", type: "object" }
---

```javascript
var $filter = Wee.$filter('div', '.element');
```