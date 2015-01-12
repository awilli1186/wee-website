---
name: $find
heading: Get matching nodes based on a specified filter within a specified element
variables:
  - { var: "sel", desc: "Source element", type: "selector, element", req: true }
  - { var: "filter", desc: "Filter selector", type: "selector", req: true }
---

```javascript
var $find = Wee.$find('table', 'tr');
```