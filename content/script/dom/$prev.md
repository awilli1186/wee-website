---
name: $prev
heading: Get the previous sibling of a specified element
variables:
  - { var: "sel", desc: "Sibling element", type: "selector, element", req: true }
  - { var: "filter", desc: "Filter selector or callback", type: "selector, callback" }
  - { var: "opt", desc: "Callback arguments", type: "object" }
---

```javascript
var $prev = Wee.$prev('.element');
```