---
name: $position
heading: Get the position of a specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
---

```javascript
var $position = Wee.$position('.element');
```